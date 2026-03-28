export interface Product {
  title: string;
  description: string;
  category: string;
  href: string;
  badge?: string;
}

export interface ProductCategory {
  name: string;
  slug: string;
  products: Product[];
}

const tag = 'carpmarks04-20';
const amz = (asin: string) => `https://www.amazon.co.uk/dp/${asin}/?tag=${tag}`;
const search = (q: string) => `https://www.amazon.co.uk/s?k=${encodeURIComponent(q)}&tag=${tag}`;

export const featuredProducts: Product[] = [
  {
    title: 'Mainline Cell Boilies 15mm – 5kg',
    description: "The UK's most trusted carp boilie. Proven track record on waters nationwide, year round.",
    category: 'Bait',
    href: amz('B07C571D6T'),
    badge: 'Best Seller',
  },
  {
    title: 'Spomb Original Bait Rocket',
    description: 'Industry-standard bait delivery system. Accurate, fast, and reliable at any range.',
    category: 'Baiting',
    href: amz('B07GM1GJ6M'),
    badge: 'Essential',
  },
  {
    title: 'Korda Lead Clip Action Pack',
    description: 'Complete safety lead system. The ethical standard for UK carp fishing rigs.',
    category: 'Terminal Tackle',
    href: amz('B07CKHVFLT'),
    badge: 'Essential',
  },
  {
    title: 'Korda Marker Float Kit',
    description: 'Find gravel bars, silt spots, and clean patches before you cast. A must-have for location.',
    category: 'Location',
    href: amz('B07JDXLYPD'),
    badge: 'Top Pick',
  },
  {
    title: 'Nash Dwarf Landing Net 42"',
    description: 'The benchmark landing net for UK carp fishing. Flat-bottomed pan, large fish-safe mesh.',
    category: 'Landing',
    href: amz('B084G65THJ'),
    badge: 'Top Pick',
  },
  {
    title: 'Petzl Actik Core Head Torch',
    description: 'Rechargeable, 450-lumen output with red night mode. The go-to torch for night sessions.',
    category: 'Accessories',
    href: amz('B0BJCJ68M6'),
    badge: 'Premium',
  },
];

export const productCategories: ProductCategory[] = [
  {
    name: 'Rods & Reels',
    slug: 'rods-reels',
    products: [
      {
        title: 'Shimano Tribal TX-4 12ft 3lb TC',
        description: 'Fast-taper all-rounder. The reliable workhorse for most UK carp waters.',
        category: 'Rods',
        href: search('Shimano Tribal TX-4 12ft 3lb carp rod'),
        badge: 'Best All-Rounder',
      },
      {
        title: 'Daiwa Black Widow G50 12ft 3lb TC',
        description: '40T carbon blank that punches above its price point. Best starter rod.',
        category: 'Rods',
        href: search('Daiwa Black Widow G50 12ft 3lb carp rod'),
        badge: 'Best Budget',
      },
      {
        title: 'Fox Horizon X3 13ft 3.5lb TC',
        description: 'Built for 100+ yard casts. High-modulus blank for big pit fishing.',
        category: 'Rods',
        href: search('Fox Horizon X3 13ft 3.5lb carp rod'),
        badge: 'Best for Distance',
      },
      {
        title: 'Nash Scope Cork 12ft 3lb TC',
        description: 'Lightweight, sensitive, stunning cork handle. For serious day-ticket anglers.',
        category: 'Rods',
        href: search('Nash Scope Cork 12ft 3lb carp rod'),
        badge: 'Premium',
      },
      {
        title: 'Shimano Baitrunner DL 6000',
        description: 'Smooth freespool, reliable baitrunner mechanism, outstanding value.',
        category: 'Reels',
        href: search('Shimano Baitrunner DL 6000 freespool reel'),
        badge: 'Best All-Rounder',
      },
      {
        title: 'Daiwa Ninja LT 4000',
        description: 'Lightweight and durable. The smart choice for anglers on a budget.',
        category: 'Reels',
        href: search('Daiwa Ninja LT 4000 spinning reel'),
        badge: 'Best Budget',
      },
      {
        title: 'Fox EOS Pro 12000 Big Pit',
        description: 'Enormous line capacity, fast retrieve. Built for 100-yard-plus fishing.',
        category: 'Reels',
        href: search('Fox EOS Pro 12000 big pit reel'),
        badge: 'Best Big Pit',
      },
      {
        title: 'Shimano Ultegra XTD 14000',
        description: 'Improved bearings, better drag system. The step-up from the Baitrunner DL.',
        category: 'Reels',
        href: search('Shimano Ultegra XTD 14000 freespool reel'),
        badge: 'Best Mid-Range',
      },
    ],
  },
  {
    name: 'Bite Alarms & Indicators',
    slug: 'bite-alarms',
    products: [
      {
        title: 'Sonik SKS 3+1 Receiver Set',
        description: '150m wireless range, multi-tone receiver. The best alarm set under £150.',
        category: 'Alarms',
        href: search('Sonik SKS bite alarm 3+1 receiver set'),
        badge: 'Best Value',
      },
      {
        title: 'Nash Siren R3 3+1 Receiver Set',
        description: 'Third-gen design with LED display receiver. Reliable, refined, trusted.',
        category: 'Alarms',
        href: search('Nash Siren R3 bite alarm 3+1 receiver set'),
        badge: 'Best Mid-Range',
      },
      {
        title: 'Fox Micron MX – Single',
        description: 'Fox\'s entry-level alarm. Loud, reliable, long battery life. Great for day sessions.',
        category: 'Alarms',
        href: search('Fox Micron MX bite alarm'),
        badge: 'Best Budget',
      },
      {
        title: 'Delkim TXi-D',
        description: 'Vibration-sensing technology. The technical gold standard for serious anglers.',
        category: 'Alarms',
        href: search('Delkim TXi-D bite alarm'),
        badge: 'Premium',
      },
      {
        title: 'Gardner ATTs 2+1 Receiver Set',
        description: 'Reliable, waterproof bite alarms with receiver. Clear, loud, weatherproof.',
        category: 'Alarms',
        href: amz('B01M716OP3'),
      },
      {
        title: 'Korda Heavy Hitter Bobbins – Pack of 3',
        description: 'Weighted bobbins that show both forward runs and drop-backs clearly.',
        category: 'Indicators',
        href: search('Korda Heavy Hitter bobbins pack of 3'),
      },
    ],
  },
  {
    name: 'Bivvies & Shelter',
    slug: 'bivvies-shelter',
    products: [
      {
        title: 'Nash Titan Hide XL',
        description: 'Spacious, all-weather overnight bivvy with groundsheet. The UK benchmark.',
        category: 'Bivvies',
        href: search('Nash Titan Hide XL bivvy'),
        badge: 'Best Overall',
      },
      {
        title: 'Fox Frontier X Plus',
        description: 'Extra-large high-peak bivvy. Ideal for tall anglers and 48hr+ sessions.',
        category: 'Bivvies',
        href: search('Fox Frontier X Plus bivvy'),
        badge: 'Best for Long Stays',
      },
      {
        title: 'Trakker Tempest Brolly Advanced',
        description: 'Quick-setup brolly system. The smart choice for mobile fishing.',
        category: 'Bivvies',
        href: search('Trakker Tempest Brolly Advanced'),
        badge: 'Best for Mobile',
      },
      {
        title: 'JRC Extreme TX2 Bivvy',
        description: 'Good headroom, reliable waterproofing, full groundsheet. Best mid-range.',
        category: 'Bivvies',
        href: search('JRC Extreme TX2 bivvy'),
        badge: 'Best Mid-Range',
      },
      {
        title: 'Trakker Big Snooze+ 5-Season Sleeping Bag',
        description: 'Season-long warmth. Suitable spring through late autumn.',
        category: 'Bedding',
        href: search('Trakker Big Snooze+ sleeping bag 5 season'),
      },
      {
        title: 'Korum S23 Supa Deluxe Chair',
        description: 'Comfortable fishing chair with back support. Built for long sessions.',
        category: 'Bedding',
        href: amz('B0CZLR24NH'),
      },
    ],
  },
  {
    name: 'Bait',
    slug: 'bait',
    products: [
      {
        title: 'Mainline Cell Boilies 15mm – 5kg',
        description: "UK's most proven carp boilie. Exceptional all-round track record.",
        category: 'Boilies',
        href: amz('B07C571D6T'),
        badge: 'Best Seller',
      },
      {
        title: 'Sticky Baits Manilla Pop-Ups 14mm',
        description: 'High-visibility pop-ups. Work brilliantly over a bed of matching boilies.',
        category: 'Pop-Ups',
        href: amz('B08FG9YJNJ'),
      },
      {
        title: 'Mainline High Impact Pop-Ups 15mm',
        description: 'Strongly flavoured, high-visibility. Excellent for early season.',
        category: 'Pop-Ups',
        href: amz('B07DN7RSWW'),
      },
      {
        title: 'CC Moore Live System Wafters 14mm',
        description: 'Balanced hook baits that fish just off the bottom. Strong track record.',
        category: 'Wafters',
        href: amz('B0168DP57A'),
        badge: 'Top Pick',
      },
      {
        title: 'Dynamite Baits Frenzied Tiger Nuts 700g',
        description: 'Pre-prepared, ready-to-use tiger nuts. Safe for fish, devastatingly effective.',
        category: 'Particles',
        href: amz('B00ZJG2X8M'),
      },
      {
        title: 'Dynamite Carptec Tutti Frutti Boilies 15mm',
        description: 'Fruity, sweet-toned boilies. Brilliant in spring and warm weather.',
        category: 'Boilies',
        href: amz('B07D39THF6'),
      },
      {
        title: 'ESP Artificial Buoyant Sweetcorn',
        description: 'Reusable, buoyant fake corn. Works great paired with a real grain.',
        category: 'Artificials',
        href: amz('B07DBC24LN'),
      },
      {
        title: 'Enterprise Tackle Sinking Imitation Corn',
        description: 'High-visibility yellow corn. The classic carp fishing presentation.',
        category: 'Artificials',
        href: amz('B01HSAU3JC'),
      },
    ],
  },
  {
    name: 'Terminal Tackle & Rigs',
    slug: 'terminal-tackle',
    products: [
      {
        title: 'Korda Lead Clip Action Pack',
        description: 'Lead clips, tail rubbers, and swivels. The standard safety lead system.',
        category: 'Lead Systems',
        href: amz('B07CKHVFLT'),
        badge: 'Essential',
      },
      {
        title: 'Korda Basix Ready-Tied Hair Rigs',
        description: 'Factory-tied knotless knot hair rigs. Perfect for quick sessions.',
        category: 'Rigs',
        href: amz('B09B2CLDGT'),
      },
      {
        title: 'Korda Chod Rig – Pack of 3',
        description: 'Pre-tied chod rigs in size 4. Ready to fish over weed or heavy silt.',
        category: 'Rigs',
        href: amz('B00691G1GG'),
      },
      {
        title: 'Fox Zig Aligna Kit',
        description: 'Everything for fishing mid-water zigs. Adjustable, versatile, effective.',
        category: 'Rigs',
        href: amz('B00BW4TZHM'),
      },
      {
        title: 'Korda Mouth Trap Fluorocarbon 20lb',
        description: 'Stiff, low-visibility fluorocarbon hooklink. Hard to tangle in clear water.',
        category: 'Hooklink',
        href: amz('B009ND3VAG'),
      },
      {
        title: 'Fox Camotex Soft Coated Braid 20lb',
        description: 'Supple coated braid for knotless knot hair rigs. Strips back easily.',
        category: 'Hooklink',
        href: amz('B07Q3GT6TV'),
      },
      {
        title: 'Korda Longshank X Hooks',
        description: 'Wide gape longshank for hair rig fishing. Strong, sharp, consistent.',
        category: 'Hooks',
        href: amz('B07CMNX4KG'),
      },
      {
        title: 'Korda Basix Camo Mainline 1000m 12lb',
        description: 'Low memory, good knot strength, reliable mono mainline for beginners.',
        category: 'Mainline',
        href: amz('B09B2B2J32'),
      },
    ],
  },
  {
    name: 'Tools & Accessories',
    slug: 'accessories',
    products: [
      {
        title: 'Spomb Original Bait Rocket',
        description: 'Industry-standard bait delivery. Accurate and fast at range.',
        category: 'Baiting',
        href: amz('B07GM1GJ6M'),
        badge: 'Essential',
      },
      {
        title: 'Korda Marker Float Kit',
        description: 'Float, bead, swivel, and clip. Essential for reading the lake bed.',
        category: 'Location',
        href: amz('B07JDXLYPD'),
        badge: 'Essential',
      },
      {
        title: 'Nash Dwarf Landing Net 42"',
        description: 'Large mesh, flat-bottomed pan. The standard landing net for UK carp.',
        category: 'Landing',
        href: amz('B084G65THJ'),
      },
      {
        title: 'Trakker Sanctuary Unhooking Mat',
        description: 'Thick padded mat. Protects the fish during hook removal and photography.',
        category: 'Fish Care',
        href: amz('B00F3DWKOS'),
        badge: 'Essential',
      },
      {
        title: 'Petzl Actik Core Head Torch',
        description: 'Rechargeable, 450-lumen, with red night mode. Best night fishing torch.',
        category: 'Night Fishing',
        href: amz('B0BJCJ68M6'),
        badge: 'Top Pick',
      },
      {
        title: 'Fox Exocet Pro Mono 1000m 10lb',
        description: 'Low-diameter mono for surface fishing and general purpose use.',
        category: 'Line',
        href: amz('B0B4KBR4KP'),
      },
      {
        title: 'Fox Rapide Load PVA Bags',
        description: 'Fast-loading PVA bags for tight, accurate hookbait presentations.',
        category: 'PVA',
        href: amz('B00RKOT28U'),
      },
      {
        title: 'Fortis Essentials Polarised Sunglasses',
        description: 'UV400 polarised lenses. See fish through surface glare — game changing.',
        category: 'Clothing',
        href: amz('B08HWJYKFF'),
      },
    ],
  },
];
