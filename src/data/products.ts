export interface Product {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  href: string;
  badge?: string;
}

export interface ProductCategory {
  name: string;
  slug: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    name: 'Rods & Reels',
    slug: 'rods-reels',
    products: [
      {
        slug: 'atlas-12ft-carp-rod',
        title: 'Atlas 12ft Carp Rod – 2.75lb, 3.0lb or 3.25lb TC',
        description: 'Lightweight armoured carbon, 2-section design, three test curve options to suit your water.',
        longDescription: 'Available in three test curves (2.75lb, 3.0lb, 3.25lb) so you can match the rod to your water and casting distance. Built from slim lightweight armoured carbon for long-lasting durability with serious power behind the cast. The 2-section design keeps it portable without compromising on performance. Features a full shrink wrap slim Japanese rubber handle for a comfortable, controlled grip during long sessions. A solid upgrade for any angler looking to improve their long-range carp setup.',
        category: 'Rods',
        href: 'https://amzn.to/3PxGeOZ',
        badge: 'Top Pick',
      },
      {
        slug: 'shimano-baitrunner-d-freespool-reel',
        title: 'Shimano Baitrunner D Freespool Reel',
        description: 'The go-to carp fishing reel. Freespool lets line run freely on a take while your rod sits on the alarms.',
        longDescription: 'Available in four sizes (4000, 6000, 8000, 12000) to match your rod and target water. The Baitrunner drag system lets a fish take line freely on the run — one turn of the handle switches back to the main drag instantly. Cold forged aluminum spool and one-piece bail arm keep the build solid under pressure. Dyna-Balance technology reduces wobble at all retrieve speeds for a smooth, reliable feel. Ambidextrous handle and 4.8:1 gear ratio make it a practical all-rounder for carp at any range.',
        category: 'Reels',
        href: 'https://amzn.to/4bTRlcA',
        badge: 'Best Seller',
      },
    ],
  },
  {
    name: 'Bite Alarms & Indicators',
    slug: 'bite-alarms',
    products: [
      {
        slug: 'lsosvseu-3-bite-alarms-kit',
        title: 'LSOSVSEU 3 Bite Alarms + 3 Banksticks + LED Swingers Kit',
        description: 'Complete bite detection kit — 3 alarms, 3 banksticks, and LED swingers in one bag.',
        longDescription: 'Everything you need for a 3-rod bite detection setup in one kit. The alarms trigger a loud tone and LED flash on a bite, with adjustable sensitivity, volume, and tone so you can dial them in for the conditions. Aluminum alloy banksticks extend from 30–50cm and have a tapered point for easy ground penetration — universal thread fits most alarms. The LED swingers work alongside the alarms to show drop-backs and line movement clearly, even in low light. All packed into a double-layered waterproof bag to keep everything organised and dry between sessions.',
        category: 'Alarms',
        href: 'https://amzn.to/3NS3Kpk',
        badge: 'Best Value',
      },
      {
        slug: 'plusinno-bank-rod-holders',
        title: 'PLUSINNO Bank Rod Holders – 4 Pack',
        description: '360° adjustable bank sticks with sharp ground tips. 4-pack covers a full 3-rod carp setup.',
        longDescription: 'Made from reinforced nylon with a rust-proof chrome-coated drill rod that pushes easily into mud, sand, or rock cracks. The head rotates 360° on the horizontal axis and 130° on the vertical axis, locking firmly in place with a hand-tightened screw — so you can angle your rods precisely regardless of the bank. A U-shaped rubber cradle with non-slip cushion protects your rod blanks and handles from scratches. The detachable design packs down small and fits most spinning and casting rods. The 4-pack covers a full 3-rod carp setup with a spare.',
        category: 'Bank Sticks',
        href: 'https://amzn.to/3NHlROJ',
      },
    ],
  },
  {
    name: 'Landing & Weighing',
    slug: 'landing',
    products: [
      {
        slug: 'kastking-brutus-folding-landing-net',
        title: 'KastKing Brutus Folding Landing Net – 75 Inch Extended',
        description: 'Foldable, extendable landing net with fish-safe silicone mesh. Catch and release friendly.',
        longDescription: 'Built from 6063 aluminum alloy — stronger than standard alloys and resistant to bending and cracking. The U-shaped hoop folds in half via a push-down release button, and the telescoping handle extends to a full 75 inches for extra reach from the bank. Available in two net options: nylon-covered PVC or clear silicone — the silicone version is fish-friendly and won\'t spook carp during the landing process, making it the better choice for catch and release. The bright orange non-slip TPR handle stays visible in low light. Comes with a storage bag to protect the net between sessions.',
        category: 'Landing',
        href: 'https://amzn.to/4teUgUb',
        badge: 'Top Pick',
      },
      {
        slug: 'skeap-digital-fish-scale',
        title: 'SKEAP Digital Fish Scale 110lb/50kg – Backlit LCD',
        description: 'Large ergonomic handle and backlit display. 110lb capacity covers any carp.',
        longDescription: '110lb/50kg capacity with high-precision sensors reading to 0.001kg — accurate enough for logging personal bests properly. The ABS rubber-coated handle is wider than most fishing scales, comfortable to hold under the weight of a heavy fish without cutting into your hand. Blue backlit LCD with data lock lets you read the weight clearly in low light and hold the reading while you get the fish back in the water. Includes tare function, auto shut-off, and unit conversion between kg, lb, and oz. Stainless steel hook stows in a slot on the back. Batteries included.',
        category: 'Scales',
        href: 'https://amzn.to/4bFA9bW',
        badge: 'Best Seller',
      },
    ],
  },
  {
    name: 'Terminal Tackle & Rigs',
    slug: 'terminal-tackle',
    products: [
      {
        slug: 'kastking-superpower-braided-line',
        title: 'KastKing SuperPower Braided Fishing Line',
        description: 'Zero stretch, abrasion resistant braid. Popular for spod and marker rods.',
        longDescription: 'Available in X4 and X8 weaves, strengths from 6lb to 150lb, and spool lengths from 150 to 1097 yards — so you can match it exactly to your spod or marker rod setup. Zero stretch gives instant feedback when the lead touches bottom or clips through weed, which is exactly what you need for accurate feature finding. Superior abrasion resistance and low memory reduce wind knots and improve casting distance. The smaller diameter compared to mono means more line on the spool at the same breaking strain. Strong knot strength without a waxy coating — ties a clean improved clinch knot reliably.',
        category: 'Line',
        href: 'https://amzn.to/3PyuuvC',
      },
      {
        slug: 'dovesun-carp-hair-rigs-kit',
        title: 'Dovesun Carp Hair Rigs Kit – 151pcs',
        description: 'Ready tied hair rigs with camouflage braided line, swivels, and correct hook sizes for carp.',
        longDescription: 'Ready-tied hair rigs on high carbon steel curved shank barb hooks — available in sizes #2, #4, #6, and #8, or the 151pcs kit with all three sizes combined. Each rig comes finished with a swivel and tied on camouflage braided line that resists breakage under pressure. Corn-flavoured bait included with each size so you can fish straight out of the pack. A stringer needle is included to thread bait onto the hair. Good starting point for beginners who want to focus on finding fish rather than tying rigs, and a useful backup supply for experienced anglers.',
        category: 'Rigs',
        href: 'https://amzn.to/4v2l3ow',
        badge: 'Essential',
      },
      {
        slug: 'jshanmei-carp-tackle-box-kit',
        title: 'JSHANMEI Carp Tackle Box Kit – 217pcs',
        description: 'Complete carp rig components — safety clips, swivels, boilie stops and shrink tube.',
        longDescription: '217 pieces covering the components needed for hair rigs, helicopter rigs, chod rigs, Ronnie rigs, and German rigs — hooks, boilie stops, shrink tube, swivel clips, rubber sleeves, safety clips, and sinker weights. All made from anti-corrosion materials that hold up in saltwater environments. Everything is sorted into a compact translucent-lid tackle box (4.7" x 3.9" x 1.3") with separate grid sections so you can find what you need quickly on the bank. A solid way to keep your rig wallet stocked without buying components individually.',
        category: 'Terminal',
        href: 'https://amzn.to/4bBIUng',
      },
      {
        slug: 'reemoo-fishing-swivels',
        title: 'ReeMoo Fishing Swivels with Safety Snaps – 200pcs',
        description: 'Ball bearing swivels in 5 sizes. Eliminates line twist and connects hooklinks to lead systems.',
        longDescription: '200 ball bearing barrel swivels with safety snap connectors across 5 sizes (#2, #4, #6, #8, #10) — 400 bearings total. Stainless steel construction with high corrosion, abrasion, and shock resistance. The barrel swivel eliminates line twist when retrieving, and the snap connector lets you swap leads or hooklinks quickly without retying. Snap latch opens and closes easily but stays locked under load. All organised in a divided plastic box small enough to fit in the bottom of a tackle box. A straightforward consumable to keep well stocked.',
        category: 'Terminal',
        href: 'https://amzn.to/3Q4A5d4',
      },
      {
        slug: 'ckg-spring-fishing-feeder-cage',
        title: 'CKG Spring Fishing Feeder Cage – 10 Pack',
        description: 'Lead-weighted bait cages. Sinks quickly and releases groundbait around your hookbait.',
        longDescription: 'Pack of 10 spring-style bait cages made from iron (plated) with a lead sinker at the base. The lead weight sinks the cage quickly to the bottom and keeps it in place, releasing groundbait or particles directly around your hookbait to pull fish into the swim. Available in 25g and 35g sizes — 35g is better for stronger currents or longer casts. Simply pack bait into the cage and press it tight. Lightweight and compact enough to carry a full set without adding much to your kit bag. Suited to carp, bream, and general coarse fishing on lakes and rivers.',
        category: 'Feeders',
        href: 'https://amzn.to/4teJjlu',
      },
      {
        slug: 'jshanmei-carp-bait-rig-tool-kit',
        title: 'JSHANMEI Carp Bait Rig Tool Kit – 7pc',
        description: 'All-in-one kit with baiting needle, drill, stringer needle and bait stops.',
        longDescription: '7-piece kit covering the essentials for mounting bait on a hair rig: hook needle, drill needle, stringer needle, and boilie stops. The spiral drill bit pierces boilies, pellets, meat, corn, and most other baits cleanly without crumbling them. High-carbon steel and stainless construction with anti-slip plastic handles — the grip matters when your hands are wet and you\'re threading bait in the dark. Compact enough to keep in a rig wallet or tackle tray. A small but essential set that removes the fiddly part of hair rig fishing.',
        category: 'Tools',
        href: 'https://amzn.to/3NtAXr6',
      },
      {
        slug: 'aotisbao-pva-mesh-refill',
        title: 'AOTISBAO PVA Mesh Refill – 2 Pack',
        description: 'Water-soluble PVA mesh for boilie and particle presentations. Dissolves on the bottom.',
        longDescription: 'Two rolls of 37mm x 5m PVA mesh — enough for a full season of PVA bag fishing. The mesh is made from non-toxic PVA that dissolves completely in water, leaving a tight pile of bait directly around your hookbait with no trace of the bag. Elastic and strong enough to survive the cast without splitting, but dissolves quickly once it hits bottom. Cut to any length to suit the amount of bait you want to present. Works with boilies, pellets, crushed particles, and most other baits. A straightforward way to improve hookbait presentation on any bottom type.',
        category: 'PVA',
        href: 'https://amzn.to/4uYfTK4',
      },
    ],
  },
  {
    name: 'Bivvies & Shelter',
    slug: 'bivvies-shelter',
    products: [
      {
        slug: 'mc-tomount-camping-tent',
        title: 'MC TOMOUNT 1-2 Person Camping Tent – 4 Season, 3000mm',
        description: '4-season double-layer tent with 3000mm waterproofing and aluminum poles. Compact at 4.65 lbs.',
        longDescription: 'Double-layer construction with a 190T breathable inner, 210T rip-stop polyester outer, and a 210D reinforced oxford fabric groundsheet — PU3000mm waterproofing throughout. 7001 aluminum poles are lighter and stronger than fibreglass, and the dome design handles wind well. The rear window provides ventilation and reduces condensation build-up overnight. Available in 1-person and 2-person versions. Packs down to 13.4" x 13.4" x 31.5" and weighs 4.65 lbs — manageable to carry to a swim. Sets up in 10–15 minutes. A budget-friendly option for anglers getting into overnight sessions who want a proper enclosed shelter.',
        category: 'Bivvies',
        href: 'https://amzn.to/3NSb6cr',
      },
      {
        slug: 'venture-4th-sleeping-bag',
        title: 'VENTURE 4TH 3-Season Sleeping Bag – XXL',
        description: 'Rated 30°F–70°F, water-resistant and packable. Covers spring through autumn sessions.',
        longDescription: 'Rated 30°F–70°F, covering the temperature range for spring through autumn carp sessions in most conditions. The XXL version is 90" x 39" — enough room for taller anglers to sleep comfortably without feeling squeezed into a mummy bag. Water-resistant polyester shell with hollow fibre filling keeps warmth in and moisture out. Two-way zipper lets you vent the bottom if you run warm overnight. Packs into an included compression sack for easy transport to your swim. Machine washable. Backed by a lifetime replacement guarantee.',
        category: 'Sleeping',
        href: 'https://amzn.to/47Zheq0',
      },
      {
        slug: 'coleman-north-rim-sleeping-bag',
        title: 'Coleman North Rim 0°F Mummy Sleeping Bag – Big & Tall',
        description: 'Rated to 0°F for cold-weather sessions. Trusted Coleman brand with over 11,000 reviews.',
        longDescription: 'Rated to 0°F (-18°C), making it a serious cold-weather option for winter carp sessions. Big and tall design fits anglers up to 6ft 2in without the compressed-feet feeling common in standard mummy bags. Coletherm hollow polyester insulation retains heat efficiently without excessive weight. The Thermolock draft tube runs the full length of the zip to stop body heat escaping through the zipper — a small detail that makes a real difference on cold nights. Adjustable hood lets you dial in warmth or ventilation depending on conditions. No-snag zipper for easy entry and exit in the dark.',
        category: 'Sleeping',
        href: 'https://amzn.to/4bRSeSR',
      },
      {
        slug: 'coleman-trailhead-folding-cot',
        title: 'Coleman Trailhead II Folding Cot',
        description: 'Elevated sleeping off cold ground, 300lb capacity, fits inside a full-size bivvy.',
        longDescription: 'Steel cross-bar frame supports up to 300lb and fits anglers up to 6ft 2in. At 73" x 35" x 17" it keeps you elevated off cold, damp ground — a meaningful difference on long autumn and winter sessions. Folds flat for transport and fits in most car boots. The elevated height also makes getting in and out easier after a long night on the bank. Straightforward setup and takedown with no tools required. Backed by a 1-year limited warranty.',
        category: 'Bedding',
        href: 'https://amzn.to/4bN0Ius',
      },
      {
        slug: 'naturehike-greenwild-camping-cot',
        title: 'Naturehike GreenWild Ultralight Camping Cot – 4.8 lbs',
        description: 'Only 4.8 lbs and folds to 18 inches. 330lb capacity, sets up in 60 seconds.',
        longDescription: 'Aircraft-grade 7075 aluminum alloy frame — 67% stronger and 75% lighter than standard cot frames — supports up to 330lb while staying completely flat under load. Weighs 4.8 lbs and folds to 18" x 6.3" so it fits in a carry bag you can strap to a rucksack or throw in the boot alongside the rest of your kit. Five support legs keep it stable on uneven or soft ground, with anti-slip stabilisers to stop it shifting. Sets up in around 60 seconds — two long poles slide into the fabric sleeves, then the five legs lock into place. The 300D Oxford fabric sheet is breathable, moisture-blocking, and anti-static so it doesn\'t attract dust and debris from the bank.',
        category: 'Bedding',
        href: 'https://amzn.to/4cgBkh5',
      },
      {
        slug: 'naturehike-ultralight-camping-chair',
        title: 'Naturehike Ultralight Camping Chair – 2.38 lbs',
        description: 'Anti-sink feet for muddy banks, sets up in 15 seconds, weighs just 2.38 lbs.',
        longDescription: 'Weighs 2.38 lbs and packs to 14.6" x 3.6" — light enough to carry to any swim without it being a consideration. 7075 aircraft-grade aluminum frame with a dual-pole reinforced structure supports up to 265 lbs and handles uneven bank terrain without flexing. The detachable anti-sink feet are the key feature for carp fishing — they spread the load on soft, muddy or sandy banks so the legs don\'t dig in and tip you forward. Sets up in around 15 seconds via an internal bungee cord that auto-tensions the frame. Breathable 600D Oxford fabric with mesh side panels for longer sessions in warm weather. The carry bag clips to the frame as a small storage pouch when you\'re set up.',
        category: 'Seating',
        href: 'https://amzn.to/3POLqxP',
      },
    ],
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    products: [
      {
        slug: 'lhknl-rechargeable-headlamp',
        title: 'LHKNL Rechargeable Headlamp 2-Pack – White & Red Light',
        description: "Rechargeable, waterproof, with red light mode that won't spook fish.",
        longDescription: 'Comes as a 2-pack with a 1500mAh rechargeable battery in each — charges via USB and can be used while charging so you\'re never caught without light mid-session. Red light mode is the key feature for night fishing: it preserves your night vision and won\'t spook carp in clear, shallow water the way a white beam will. 8 lighting modes in total including main strong/weak beam, side strong/weak beam, red beam, and SOS red strobe. IPX4 waterproof rating handles rain reliably. The 60° pivoting head locks firmly in position without slipping. Motion sensor mode lets you switch the light on and off with a hand wave — useful when your hands are wet or baited. Weighs 1.87oz so you won\'t notice it on your head during long sessions.',
        category: 'Lighting',
        href: 'https://amzn.to/414th1w',
      },
      {
        slug: 'xtauto-collapsible-led-lantern',
        title: 'XTAUTO Collapsible LED Camping Lantern – 4 Pack',
        description: 'Rechargeable via USB or solar, 25+ hour battery life. Hangs inside a bivvy.',
        longDescription: 'Pack of 4 collapsible LED lanterns with a 1600mAh rechargeable battery each — charges via USB or solar panel, with auto power-off protection to prevent overcharging. 25+ hour runtime at full charge covers multi-night sessions without needing to top up. Collapses flat to roughly phone size when not in use, and the folding handle lets you hang one inside your bivvy or from a bankstick without taking up table or floor space. 6+1 high-intensity LED chips give 360° coverage — brightness adjusts by how far you pull the lantern open. Water resistant, heat resistant, and freeze resistant ABS construction handles the full range of UK weather.',
        category: 'Lighting',
        href: 'https://amzn.to/4uYgewk',
      },
      {
        slug: 'kaliyadi-polarised-sunglasses',
        title: 'KALIYADI Polarised Sunglasses – 3 Pack',
        description: 'UV400 polarised lenses cut through surface glare so you can spot carp in the water.',
        longDescription: 'UV400 polarised lenses that block both UVA and UVB while cutting surface glare — the polarisation is what matters for carp fishing, as it lets you see through the water surface to spot fish, weed, or bottom features rather than just seeing reflected sky. Anti-scratch lenses on a lightweight rectangular frame with adjustable metal spring hinges and integrated nose pads. Available in a wide range of lens and frame colour combinations. Comes as a 3-pack with a microfiber pouch and cleaning cloth for each pair — useful to keep one in your tackle bag, one in the car, and one at home. Quality double-checked by third-party inspection with lifetime support.',
        category: 'Eyewear',
        href: 'https://amzn.to/3NS8NWP',
        badge: 'Best Seller',
      },
      {
        slug: 'foliful-polarised-sunglasses',
        title: 'Foliful Polarised Wrap-Around Sunglasses – 3 Pack',
        description: 'Wrap-around design stays secure on the bank. UV protection, scratch-resistant lenses.',
        longDescription: 'Wrap-around polarised sunglasses with HD lenses that cut glare and reflections off the water surface — useful for spotting fish movement and reading the water at range. Full UV protection blocks harmful rays during long sessions in open sun. The wrap-around frame fits closely to the face and stays in place without slipping, with non-slip rubber nose pads and non-slip temple tips. Scratch-resistant polycarbonate lenses on a lightweight frame comfortable enough for all-day wear. Comes as a 3-pack in various lens and frame colour combinations — one to keep in the tackle bag, one in the car. Includes a glasses case, cleaning cloth, pouch, and strap for each pair, plus a polarisation test card.',
        category: 'Eyewear',
        href: 'https://amzn.to/4bCt6AF',
        badge: 'Best Seller',
      },
      {
        slug: 'outuxed-tackle-organiser-box',
        title: 'OUTUXED 36-Grid Tackle Organiser Box – 2 Pack',
        description: 'Clear lid, adjustable dividers — keeps hooks, swivels, rig rings and lead clips organised.',
        longDescription: '2-pack of 36-grid clear plastic organiser boxes (10.8" x 7.0" x 1.8" each) with fully adjustable horizontal dividers — move them to create larger or smaller compartments depending on what you\'re storing. The clear lid means you can see exactly what\'s inside without opening the box, which matters when you\'re rigging up in low light on the bank. Individual grid size is 1.7" x 1.1" x 1.7" at the default layout — large enough for hooks, swivels, rig rings, lead clips, boilie stops, and other small terminal tackle. Hard PP plastic construction with a secure-closing lid. 5 sheets of label stickers included to mark each compartment.',
        category: 'Storage',
        href: 'https://amzn.to/488j2Np',
      },
    ],
  },
];

export function getAllProducts(): Product[] {
  return productCategories.flatMap((cat) => cat.products);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}
