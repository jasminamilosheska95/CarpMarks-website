/**
 * Downloads the Awin product feed, filters for top carp brands,
 * and writes src/data/awin-products.json used at build time.
 *
 * Run:  node scripts/fetch-awin-products.mjs
 * Auto: called by "npm run build" via package.json
 */

import https from 'https';
import { gunzipSync } from 'zlib';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.join(__dirname, '../src/data/awin-products.json');

// Exact brand name matches (lowercase). Using a Set prevents false positives
// like "Blue Fox" matching "fox" or "Shakespeare" matching "esp".
const TARGET_BRANDS = new Set([
  'korda',
  'fox', 'fox international',
  'nash', 'nash tackle',
  'trakker',
  'ridgemonkey', 'ridge monkey',
  'shimano',
  'daiwa',
  'mainline', 'mainline baits',
  'esp', 'esp carp tackle',
  'gardner', 'gardner tackle',
  'sticky baits',
  'solar', 'solar tackle',
  'thinking anglers',
]);

// Max unique product lines selected per brand (after family deduplication)
// Use brand-specific overrides where a brand is especially prominent
const MAX_PER_BRAND = 5;
const BRAND_LIMITS = {
  'korda': 10,
};

function brandLimit(brandKey) {
  return BRAND_LIMITS[brandKey] ?? MAX_PER_BRAND;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

async function getAwinFeedUrl() {
  try {
    const env = await readFile(path.join(__dirname, '../.env.local'), 'utf8');
    const m = env.match(/AWIN_FEED_URL=(.+)/);
    if (m) return m[1].trim();
  } catch { /* fall through */ }
  return process.env.AWIN_FEED_URL ?? null;
}

function downloadBuffer(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) return reject(new Error('Too many redirects'));
    https.get(url, { timeout: 60000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        downloadBuffer(res.headers.location, redirects + 1).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} from ${url}`));
        return;
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

// Parses a single CSV line respecting quoted fields (RFC 4180)
function parseLine(line) {
  const fields = [];
  let field = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQ) {
      if (c === '"' && line[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') { inQ = false; }
      else field += c;
    } else {
      if (c === '"') { inQ = true; }
      else if (c === ',') { fields.push(field); field = ''; }
      else field += c;
    }
  }
  fields.push(field);
  return fields;
}

function stripHtml(str) {
  return (str ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
}

function isBrandMatch(brandName) {
  return TARGET_BRANDS.has((brandName ?? '').toLowerCase().trim());
}

// Returns the first 3 words of a product name — used to deduplicate product variants
// (e.g. "Fox EOS 8000" and "Fox EOS 10000" → same family "fox eos free")
function productFamily(name) {
  return name.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').trim().split(/\s+/).slice(0, 3).join(' ');
}

function mapCategory(catStr) {
  const c = (catStr ?? '').toLowerCase();
  if (c.includes('holdall') || c.includes('rod bag')) return 'Storage';
  if (c.includes('rod')) return 'Rods';
  if (c.includes('reel')) return 'Reels';
  if (c.includes('alarm') || c.includes('indicator') || c.includes('bite detect') || c.includes('bobbin')) return 'Alarms';
  if (c.includes('bivvy') || c.includes('shelter') || c.includes('brolly') || c.includes('umbrella')) return 'Bivvies';
  if (c.includes('landing') || c.includes('net head') || c.includes('unhooking') || c.includes('carp net')) return 'Landing';
  if (c.includes('weigh') || c.includes('scale')) return 'Scales';
  if (c.includes('rig') || c.includes('hooklink') || c.includes('ready rig') || c.includes('rig sleeve')) return 'Rigs';
  if (c.includes('lead') || c.includes('sinker') || c.includes('terminal') || c.includes('swivel') ||
      c.includes('hook') || c.includes('clip') || c.includes('tail rubber') || c.includes('bead') ||
      c.includes('crimp') || c.includes('shrink') || c.includes('silicone') || c.includes('snap') ||
      c.includes('stop') || c.includes('marker') || c.includes('bomb')) return 'Terminal';
  if (c.includes('pva')) return 'PVA';
  if (c.includes('line') || c.includes('braid') || c.includes('mono') || c.includes('fluoro')) return 'Line';
  if (c.includes('sleeping')) return 'Sleeping';
  if (c.includes('bedchair') || c.includes('bed chair')) return 'Bedding';
  if (c.includes('chair') || c.includes('seat')) return 'Seating';
  if (c.includes('light') || c.includes('head') || c.includes('lamp') || c.includes('torch') || c.includes('lantern')) return 'Lighting';
  if (c.includes('sunglass') || c.includes('polarise') || c.includes('eyewear')) return 'Eyewear';
  if (c.includes('bag') || c.includes('luggage') || c.includes('barrow') || c.includes('storage') || c.includes('holdall')) return 'Storage';
  if (c.includes('bankstick') || c.includes('bank stick') || c.includes('pod')) return 'Bank Sticks';
  if (c.includes('bait') || c.includes('boilie') || c.includes('pellet') || c.includes('pop up') || c.includes('boilies') || c.includes('artificial')) return 'Bait';
  return 'Accessories';
}

// Hard exclude: returns true if the product is clearly NOT carp fishing.
// These rows are skipped entirely — no score is applied.
// Uses \b word boundaries so short words like 'eel' can't false-match inside 'reel'.
const NON_CARP_EXCLUDE = [
  // Predator / pike / lure fishing
  'fox rage', 'predator', 'dead bait', 'deadbait', 'deadbaiting',
  'pike', 'perch', 'zander', 'trout', 'salmon', 'grayling', 'sea bass',
  'lure', 'soft bait', 'jig head', 'wobble', 'replicant', 'crankbait',
  // Non-carp rod types
  'quivertip', 'quiver tip', 'feeder rod', 'match rod', 'float rod',
  'barbel rod', 'tench rod', 'coarse rod', 'waggler', 'pole tip', 'whip rod',
  // Sea / fly fishing
  'sea fishing', 'sea rod', 'beach caster', 'surf rod', 'boat rod',
  'fly fishing', 'fly rod', 'fly reel', 'fly line', 'nymph', 'dry fly',
  // Specific non-carp brand ranges
  "n'zon",
  // Other
  'catfish rod',
];

// Pre-compile to regex with word boundaries so 'eel' won't match inside 'reel',
// 'pike' won't match inside 'spike', etc.
const NON_CARP_PATTERNS = NON_CARP_EXCLUDE.map(kw =>
  new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')}\\b`, 'i')
);

function isNonCarpProduct(productName, merchantCategory, categoryName) {
  const combined = [productName, merchantCategory, categoryName].join(' ');
  return NON_CARP_PATTERNS.some(pattern => pattern.test(combined));
}

function getBadge(promotionalText) {
  const t = (promotionalText ?? '').toLowerCase();
  if (t.includes('best seller') || t.includes('bestseller')) return 'Best Seller';
  if (t.includes('new in') || t.includes('new arrival') || t.includes('just arrived')) return 'New In';
  if (t.includes('popular') || t.includes('top pick') || t.includes('featured')) return 'Popular';
  if (t.includes('sale') || t.includes('reduced') || t.includes('save')) return 'Sale';
  return undefined;
}

// Score row for quality — higher = better candidate
function score(row, hIdx) {
  const f = (field) => (row[hIdx[field]] ?? '').toLowerCase();
  const brand = f('brand_name');
  let s = 0;
  const cat = f('merchant_category') + ' ' + f('category_name') + ' ' + f('product_name');

  // ── Rating & reviews (most important signal now we have real data) ──
  const rating = parseFloat(row[hIdx['average_rating']] ?? '0');
  const reviews = parseInt(row[hIdx['reviews']] ?? '0', 10);
  if (rating >= 4.5) s += 20;
  else if (rating >= 4.0) s += 12;
  else if (rating >= 3.5) s += 5;
  else if (rating > 0 && rating < 3.0) s -= 10; // low-rated = penalise
  if (reviews >= 50) s += 8;
  else if (reviews >= 10) s += 4;
  else if (reviews >= 1) s += 1;

  // ── Category priority ──
  const priorityCats = ['rod', 'reel', 'alarm', 'bivvy', 'terminal', 'rig', 'lead', 'landing'];
  if (priorityCats.some(pc => cat.includes(pc))) s += 8;

  // ── Korda iconic terminal tackle bonus ──
  if (brand === 'korda') {
    const kordaIcons = ['lead clip', 'carp hook', 'carp rig', 'ready rig', 'hooklink', 'mouth trap',
      'chod', 'ronnie', 'heli', 'snaps', 'swivel', 'tail rubber', 'shrink', 'fluoro', 'pva'];
    if (kordaIcons.some(kc => cat.includes(kc))) s += 10;
    const clothing = ['hoodie', 'jacket', 't-shirt', 'trouser', 'sock', 'glove', 'hat', 'base layer', 'fleece', 'waistcoat', 'jogger', 'boot'];
    if (clothing.some(kc => cat.includes(kc))) s -= 25;
  }

  // ── Hard exclude: predator/pike/lure fishing — not carp at all ──
  const predator = ['rage', 'predator', 'deadbait', 'dead bait', 'pike', 'perch', 'lure', 'wobble', 'replicant', 'spinner', 'jig'];
  if (predator.some(r => cat.includes(r))) s -= 60;

  // ── Penalise non-carp rod types ──
  const nonCarpRods = ['quivertip', 'quiver tip', 'feeder rod', 'match rod', 'float rod', 'barbel rod', 'tench', 'deadbait'];
  if (nonCarpRods.some(r => cat.includes(r))) s -= 30;

  // ── Penalise bags/luggage being picked over actual tackle ──
  const bags = ['holdall', 'carryall', 'luggage', 'rod bag', 'tackle bag'];
  if (bags.some(r => cat.includes(r))) s -= 10;

  // ── Penalise clothing & match fishing for all brands ──
  const allClothing = ['hoodie', 'jacket', 't-shirt', 'tee', 'trouser', 'sock', 'glove', 'hat', 'base layer', 'fleece', 'waistcoat', 'jogger', 'boot', 'balaclava'];
  if (allClothing.some(kc => cat.includes(kc))) s -= 15;
  if (cat.includes('match ') || cat.includes('groundbait')) s -= 20;

  // ── Other signals ──
  if (getBadge(row[hIdx['promotional_text']])) s += 8;
  const price = parseFloat(row[hIdx['search_price']] ?? '0');
  if (price >= 15 && price <= 400) s += 4;
  if (row[hIdx['aw_image_url']]) s += 3;
  if ((row[hIdx['product_short_description']] ?? '').length > 30) s += 2;

  return s;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const feedUrl = await getAwinFeedUrl();
  if (!feedUrl) {
    console.error('ERROR: AWIN_FEED_URL not set in .env.local');
    process.exit(1);
  }

  console.log('Downloading Awin feed...');
  const compressed = await downloadBuffer(feedUrl);
  console.log(`Downloaded ${(compressed.length / 1024 / 1024).toFixed(1)} MB (compressed)`);

  const csv = gunzipSync(compressed).toString('utf8');
  console.log(`Decompressed to ${(csv.length / 1024 / 1024).toFixed(1)} MB`);

  const lines = csv.split('\n');
  console.log(`Parsing ${lines.length.toLocaleString()} rows...`);

  // Build header index map once
  const headers = parseLine(lines[0]);
  const hIdx = Object.fromEntries(headers.map((h, i) => [h.trim(), i]));

  const f = (row, field) => (row[hIdx[field]] ?? '').trim();

  // Group matching rows by brand
  const byBrand = {};
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const row = parseLine(line);
    if (row.length < 5) continue;
    const brand = f(row, 'brand_name');
    if (!isBrandMatch(brand)) continue;
    // Hard exclude any non-carp fishing product
    if (isNonCarpProduct(f(row, 'product_name'), f(row, 'merchant_category'), f(row, 'category_name'))) continue;
    // Skip out-of-stock products
    const inStock = f(row, 'in_stock');
    const stockStatus = f(row, 'stock_status');
    if (inStock === '0' || inStock === 'false' || stockStatus.includes('out')) continue;
    const key = brand.toLowerCase();
    (byBrand[key] ??= []).push(row);
  }

  const foundBrands = Object.keys(byBrand);
  console.log(`Found ${foundBrands.length} matching brand(s): ${foundBrands.join(', ')}`);

  // Sort by score, then pick diverse products:
  // - deduplicate by product family (no near-identical variants)
  // - max 2 products per category per brand (so we don't get 5 reels from one brand)
  // - respect per-brand total cap
  const MAX_PER_CAT_PER_BRAND = 3;
  const selected = [];
  for (const [bKey, rows] of Object.entries(byBrand)) {
    rows.sort((a, b) => score(b, hIdx) - score(a, hIdx));
    const limit = brandLimit(bKey);
    const seenFamilies = new Set();
    const catCounts = {};
    const unique = [];
    for (const row of rows) {
      const family = productFamily(f(row, 'product_name'));
      if (seenFamilies.has(family)) continue;
      const cat = mapCategory(f(row, 'merchant_category') || f(row, 'category_name') || f(row, 'product_name'));
      catCounts[cat] = (catCounts[cat] ?? 0);
      if (catCounts[cat] >= MAX_PER_CAT_PER_BRAND) continue;
      seenFamilies.add(family);
      catCounts[cat]++;
      unique.push(row);
      if (unique.length >= limit) break;
    }
    selected.push(...unique);
  }

  // Map to Product shape
  const products = selected
    .map((row) => {
      const brandName = f(row, 'brand_name');
      const productName = f(row, 'product_name');
      const productId = f(row, 'aw_product_id');
      if (!productName || !productId) return null;

      const href = f(row, 'aw_deep_link');
      if (!href) return null;

      const imageUrl =
        f(row, 'aw_image_url') ||
        f(row, 'large_image') ||
        f(row, 'merchant_image_url') ||
        undefined;

      const rawPrice = parseFloat(f(row, 'search_price') || '0');
      const price = rawPrice > 0 ? `£${rawPrice.toFixed(2)}` : undefined;

      const shortDesc = stripHtml(f(row, 'product_short_description') || f(row, 'description'));
      const longDesc = stripHtml(f(row, 'description'));
      const specs = stripHtml(f(row, 'specifications'));

      const catRaw = f(row, 'merchant_category') || f(row, 'category_name') || productName;
      const category = mapCategory(catRaw);

      return {
        slug: `${slugify(productName)}-${productId}`,
        title: productName,
        description: shortDesc.slice(0, 180) || longDesc.slice(0, 180),
        longDescription: longDesc.length > 20 && longDesc !== shortDesc ? longDesc.slice(0, 1200) : undefined,
        category,
        href,
        badge: (() => {
          const auto = getBadge(f(row, 'promotional_text'));
          if (auto) return auto;
          const r = parseFloat(f(row, 'average_rating') || '0');
          const rv = parseInt(f(row, 'reviews') || '0', 10);
          return (r >= 4.0 && rv >= 5) ? `★ ${r.toFixed(1)}` : undefined;
        })(),
        imageUrl: imageUrl || undefined,
        price,
        source: 'awin',
        merchantName: f(row, 'merchant_name') || undefined,
        brandName: brandName || undefined,
        specifications: specs.length > 10 ? specs.slice(0, 600) : undefined,
        rating: (() => { const r = parseFloat(f(row, 'average_rating') || '0'); return r > 0 ? r.toFixed(1) : undefined; })(),
      };
    })
    .filter(Boolean);

  await writeFile(OUTPUT, JSON.stringify(products, null, 2), 'utf8');
  console.log(`\n✓ Saved ${products.length} products → src/data/awin-products.json`);
  console.log('\nSelected products:');
  products.forEach(p => {
    const rating = p.rating ? `★${p.rating}` : 'no rating';
    console.log(`  ${(p.brandName ?? '').padEnd(12)} | ${(p.category).padEnd(12)} | ${(p.price ?? '').padEnd(8)} | ${rating.padEnd(8)} | ${p.title.slice(0, 50)}`);
  });
  console.log('\n  Run "npm run build" to include them in the site.');
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
