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


// ─── Awin's own categories → the sections this site already has ─────────────
// The merchant files every product under a specific category ("Carp Rods",
// "Bite Alarms", "Boilies"), so there is nothing to guess. This is an
// allowlist: a product whose category is not here does not belong on a carp
// site, which is what keeps out the clothing, lures, match, pole and sea gear.
const AWIN_CATEGORY_MAP = {
  // Rods & reels
  'carp rods': 'Rods',
  'baitrunner reels': 'Reels',
  'big pit reels': 'Reels',
  // Alarms & indication
  'bite alarms': 'Alarms',
  'bobbins': 'Alarms',
  'swingers': 'Alarms',
  'strike indicators': 'Alarms',
  'isotopes and starlights': 'Alarms',
  // Bank sticks, pods, rests
  'banksticks': 'Bank Sticks',
  'buzz bars': 'Bank Sticks',
  'rod pods': 'Bank Sticks',
  'rod rest heads': 'Bank Sticks',
  'butt rests': 'Bank Sticks',
  'ripple bars': 'Bank Sticks',
  'bump bars': 'Bank Sticks',
  'tripods': 'Bank Sticks',
  // Landing & care
  'carp nets': 'Landing',
  'landing net heads': 'Landing',
  'landing net handles': 'Landing',
  'carp unhooking mats': 'Landing',
  'unhooking mats': 'Landing',
  // Weighing
  'scales & weighing': 'Scales',
  'measuring sticks': 'Scales',
  // Line
  'braid fishing lines': 'Line',
  'braid': 'Line',
  'monofilament': 'Line',
  'fluorocarbon': 'Line',
  'tapered leaders': 'Line',
  // Rigs
  'carp rigs': 'Rigs',
  'ready rigs': 'Rigs',
  'hooklinks': 'Rigs',
  'rig sleeves': 'Rigs',
  'shrink tubing': 'Rigs',
  'silicone tubing': 'Rigs',
  'stingers': 'Rigs',
  // Terminal tackle
  'carp hooks': 'Terminal',
  'hooks': 'Terminal',
  'snaps, swivels & clips': 'Terminal',
  'bombs': 'Terminal',
  'lead clips': 'Terminal',
  'beads': 'Terminal',
  'crimps': 'Terminal',
  'tail rubbers': 'Terminal',
  'bait stops': 'Terminal',
  'nose cones': 'Terminal',
  // Feeders
  'method feeders': 'Feeders',
  'cage feeders': 'Feeders',
  'window feeders': 'Feeders',
  'method moulds': 'Feeders',
  // Tools
  'rig tools': 'Tools',
  'pliers': 'Tools',
  'crimping pliers': 'Tools',
  'scissors': 'Tools',
  'forceps': 'Tools',
  'bait needle': 'Tools',
  'bait drill': 'Tools',
  'side cutters': 'Tools',
  'disgorgers': 'Tools',
  // Baiting and feature-finding gear — carp essentials, not bait itself
  'catapults': 'Tools',
  'spods': 'Tools',
  'marker floats': 'Terminal',
  // PVA
  'pva': 'PVA',
  // Shelter & comfort
  'bivvies': 'Bivvies',
  'fishing umbrellas': 'Bivvies',
  'sleeping bags': 'Sleeping',
  'bed chairs': 'Bedding',
  'chairs': 'Seating',
  'chair accessories': 'Seating',
  'lighting': 'Lighting',
  'sunglasses': 'Eyewear',
  // Luggage
  'rod holdalls': 'Storage',
  'carryalls': 'Storage',
  'tackle boxes': 'Storage',
  'accessory bags': 'Storage',
  'hook & rig storage': 'Storage',
  'reel pouches': 'Storage',
  'cool bags': 'Storage',
  'rucksacks': 'Storage',
  'bait bags': 'Storage',
  'bait tubs & trays': 'Storage',
  'buckets & riddles': 'Storage',
  'barrows': 'Storage',
  // Bait
  'boilies': 'Bait',
  'pellets': 'Bait',
  "pop up's": 'Bait',
  'particles': 'Bait',
  'ground bait': 'Bait',
  'additives': 'Bait',
  'artificial baits': 'Bait',
  'paste': 'Bait',
};

/** Awin's category for this row, translated to a site section — null if it is not carp gear */
function siteCategory(merchantCategory) {
  return AWIN_CATEGORY_MAP[(merchantCategory ?? '').trim().toLowerCase()] ?? null;
}

// Carp specialists come first. Daiwa and Shimano make good carp gear but sell
// every discipline, so they should not crowd out the brands this site is about.
const BRAND_PRIORITY = {
  korda: 30, fox: 30, 'fox international': 30, nash: 30, 'nash tackle': 30,
  trakker: 30, ridgemonkey: 25, 'ridge monkey': 25, mainline: 25,
  'mainline baits': 25, esp: 25, 'esp carp tackle': 25, gardner: 20,
  'gardner tackle': 20, 'sticky baits': 20, solar: 20, 'solar tackle': 20,
  'thinking anglers': 20, shimano: 5, daiwa: 5,
};

function mapCategory(catStr) {
  const c = (catStr ?? '').toLowerCase();
  // Before anything else: a PVA bag is PVA, whatever the merchant filed it under
  if (c.includes('pva')) return 'PVA';
  if (c.includes('holdall') || c.includes('rod bag')) return 'Storage';
  // Rests and buzz bars are bank-stick gear, not rods
  if (c.includes('rest') || c.includes('buzz bar') || c.includes('buzzer bar')) return 'Bank Sticks';
  if (c.includes('rod')) return 'Rods';
  if (c.includes('reel')) return 'Reels';
  // Merchants file bivvy lights and remotes under "Bite Alarms & Accessories".
  // They pair with alarms; they do not detect bites.
  if (/\b(light|torch|lantern|remote|sensor)\b/.test(c) && !/\b(alarm|micron|receiver)\b/.test(c)) return 'Accessories';
  if (c.includes('alarm') || c.includes('indicator') || c.includes('bite detect') || c.includes('bobbin')) return 'Alarms';
  if (c.includes('bivvy') || c.includes('shelter') || c.includes('brolly') || c.includes('umbrella')) return 'Bivvies';
  if (c.includes('landing') || c.includes('net head') || c.includes('unhooking') || c.includes('carp net')) return 'Landing';
  if (c.includes('weigh') || c.includes('scale')) return 'Scales';
  if (c.includes('tool') || c.includes('knot') || c.includes('scissor') || c.includes('clipper') ||
      c.includes('sharpener') || c.includes('baiting needle') || c.includes('stripper')) return 'Tools';
  if (c.includes('feeder') || c.includes('method') || c.includes('cage')) return 'Feeders';
  if (c.includes('swivel') || c.includes('lead clip') || c.includes('tail rubber')) return 'Terminal';
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
  // Spinning / lure gear — the biggest leak, since Shimano, Daiwa and Fox sell
  // every discipline under one brand name
  'spinning', 'spin reel', 'shad', 'drop shot', 'dropshot',
  // Non-carp ranges from those same brands
  'saltist', 'kenzaki', 'gekkabijin', 'hrf', 'aero', 'prorex', 'infinity q',
  'multiplier', 'baitcast', 'baitcaster', 'centrepin', 'centre pin',
  // Match and commercial coarse gear — seat boxes, pole gear, commercial nets
  'seat box', 'commercial', 'pole', 'whip', 'boat seat',
  // Other
  'catfish rod',
];

// Pre-compile to regex with word boundaries so 'eel' won't match inside 'reel',
// 'pike' won't match inside 'spike', etc.
const NON_CARP_PATTERNS = NON_CARP_EXCLUDE.map(kw =>
// Trailing `s?` matters: without it "boat rod" never matched "Boat Rods",
// which is how sea rods kept reaching the carp list.
  new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')}s?\\b`, 'i')
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

  // ── Brand precedence: this is a carp site ──
  s += BRAND_PRIORITY[brand] ?? 0;

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
  // Vercel blocks outbound network during build — use the committed JSON as-is
  if (process.env.VERCEL) {
    console.log('Vercel build detected — using committed awin-products.json (run fetch locally to refresh)');
    return;
  }

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

  // Selection is per CATEGORY, not per brand. Picking the best few products per
  // brand left coverage to chance — a run could return no bivvy, bed, chair or
  // set of scales at all. The site has fixed sections, so each one gets filled.
  const SITE_CATEGORIES = [
    'Rods', 'Reels', 'Alarms', 'Bank Sticks', 'Landing', 'Scales', 'Line',
    'Rigs', 'Terminal', 'Feeders', 'Tools', 'PVA', 'Bivvies', 'Sleeping',
    'Bedding', 'Seating', 'Lighting', 'Eyewear', 'Storage', 'Bait',
  ];
  const PER_CATEGORY = 3;
  const MAX_PER_BRAND_PER_CATEGORY = 2;
  const selected = [];

  // Every candidate, pooled across brands and bucketed by the section it will
  // appear in on the site
  const byCategory = {};
  for (const rows of Object.values(byBrand)) {
    for (const row of rows) {
      // Awin's own category decides the section — and decides whether the
      // product belongs here at all
      const cat = siteCategory(f(row, 'merchant_category'));
      if (!cat) continue;
      (byCategory[cat] ??= []).push(row);
    }
  }

  if (process.env.AWIN_DEBUG) {
    console.log('candidates per section:', Object.fromEntries(
      Object.entries(byCategory).map(([k, v]) => [k, v.length]).sort()
    ));
  }

  for (const cat of SITE_CATEGORIES) {
    const rows = byCategory[cat] ?? [];
    // Tie-break on product id: the feed currently carries no ratings, so most
    // rows score the same and ties would otherwise fall back to feed order —
    // a different set of products on every fetch.
    rows.sort((a, b) => {
      const diff = score(b, hIdx) - score(a, hIdx);
      if (diff !== 0) return diff;
      return f(a, 'aw_product_id').localeCompare(f(b, 'aw_product_id'));
    });

    const seenFamilies = new Set();
    const brandCounts = {};
    let taken = 0;
    for (const row of rows) {
      if (taken >= PER_CATEGORY) break;
      const family = productFamily(f(row, 'product_name'));
      if (seenFamilies.has(family)) continue;
      // Spread the section across brands rather than filling it from one
      const bKey = f(row, 'brand_name').toLowerCase();
      brandCounts[bKey] = brandCounts[bKey] ?? 0;
      if (brandCounts[bKey] >= MAX_PER_BRAND_PER_CATEGORY) continue;
      seenFamilies.add(family);
      brandCounts[bKey]++;
      selected.push(row);
      taken++;
    }
    if (taken === 0) console.log(`  (no products found for ${cat})`);
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

      const category = siteCategory(f(row, 'merchant_category')) ?? 'Accessories';

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
