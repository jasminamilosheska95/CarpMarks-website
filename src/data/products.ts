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

export const featuredProducts: Product[] = [
  {
    title: 'Atlas 12ft Carp Rod – 2.75lb, 3.0lb or 3.25lb TC',
    description: 'Lightweight armoured carbon, 2-section design, three test curve options to suit your water.',
    category: 'Rods & Reels',
    href: 'https://amzn.to/3PxGeOZ',
    badge: 'Top Pick',
  },
  {
    title: 'Shimano Baitrunner D Freespool Reel',
    description: 'The go-to carp fishing reel. Freespool lets line run freely on a take while your rod sits on the alarms.',
    category: 'Rods & Reels',
    href: 'https://amzn.to/4bTRlcA',
    badge: 'Best Seller',
  },
  {
    title: 'LSOSVSEU 3 Bite Alarms + 3 Banksticks + LED Swingers Kit',
    description: 'Complete bite detection kit — 3 alarms, 3 banksticks, and LED swingers in one bag.',
    category: 'Bite Alarms',
    href: 'https://amzn.to/3NS3Kpk',
    badge: 'Best Value',
  },
  {
    title: 'KastKing Brutus Folding Landing Net – 75 Inch Extended',
    description: 'Foldable, extendable landing net with fish-safe silicone mesh. Catch and release friendly.',
    category: 'Landing',
    href: 'https://amzn.to/4teUgUb',
    badge: 'Top Pick',
  },
  {
    title: 'SKEAP Digital Fish Scale 110lb/50kg – Backlit LCD',
    description: 'Large ergonomic handle and backlit display. 110lb capacity covers any carp.',
    category: 'Landing',
    href: 'https://amzn.to/4bFA9bW',
    badge: 'Best Seller',
  },
  {
    title: 'Dovesun Carp Hair Rigs Kit – 151pcs',
    description: 'Ready tied hair rigs with camouflage braided line, swivels, and correct hook sizes for carp.',
    category: 'Terminal Tackle',
    href: 'https://amzn.to/4v2l3ow',
    badge: 'Essential',
  },
];

export const productCategories: ProductCategory[] = [
  {
    name: 'Rods & Reels',
    slug: 'rods-reels',
    products: [
      {
        title: 'Atlas 12ft Carp Rod – 2.75lb, 3.0lb or 3.25lb TC',
        description: 'Lightweight armoured carbon, 2-section design, three test curve options to suit your water.',
        category: 'Rods',
        href: 'https://amzn.to/3PxGeOZ',
        badge: 'Top Pick',
      },
      {
        title: 'Shimano Baitrunner D Freespool Reel',
        description: 'The go-to carp fishing reel. Freespool lets line run freely on a take while your rod sits on the alarms.',
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
        title: 'LSOSVSEU 3 Bite Alarms + 3 Banksticks + LED Swingers Kit',
        description: 'Complete bite detection kit — 3 alarms, 3 banksticks, and LED swingers in one bag.',
        category: 'Alarms',
        href: 'https://amzn.to/3NS3Kpk',
        badge: 'Best Value',
      },
      {
        title: 'PLUSINNO Bank Rod Holders – 4 Pack',
        description: '360° adjustable bank sticks with sharp ground tips. 4-pack covers a full 3-rod carp setup.',
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
        title: 'KastKing Brutus Folding Landing Net – 75 Inch Extended',
        description: 'Foldable, extendable landing net with fish-safe silicone mesh. Catch and release friendly.',
        category: 'Landing',
        href: 'https://amzn.to/4teUgUb',
        badge: 'Top Pick',
      },
      {
        title: 'SKEAP Digital Fish Scale 110lb/50kg – Backlit LCD',
        description: 'Large ergonomic handle and backlit display. 110lb capacity covers any carp.',
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
        title: 'KastKing SuperPower Braided Fishing Line',
        description: 'Zero stretch, abrasion resistant braid. Popular for spod and marker rods.',
        category: 'Line',
        href: 'https://amzn.to/3PyuuvC',
      },
      {
        title: 'Dovesun Carp Hair Rigs Kit – 151pcs',
        description: 'Ready tied hair rigs with camouflage braided line, swivels, and correct hook sizes for carp.',
        category: 'Rigs',
        href: 'https://amzn.to/4v2l3ow',
        badge: 'Essential',
      },
      {
        title: 'JSHANMEI Carp Tackle Box Kit – 217pcs',
        description: 'Complete carp rig components — safety clips, swivels, boilie stops and shrink tube.',
        category: 'Terminal',
        href: 'https://amzn.to/4bBIUng',
      },
      {
        title: 'ReeMoo Fishing Swivels with Safety Snaps – 200pcs',
        description: 'Ball bearing swivels in 5 sizes. Eliminates line twist and connects hooklinks to lead systems.',
        category: 'Terminal',
        href: 'https://amzn.to/3Q4A5d4',
      },
      {
        title: 'CKG Spring Fishing Feeder Cage – 10 Pack',
        description: 'Lead-weighted bait cages. Sinks quickly and releases groundbait around your hookbait.',
        category: 'Feeders',
        href: 'https://amzn.to/4teJjlu',
      },
      {
        title: 'JSHANMEI Carp Bait Rig Tool Kit – 7pc',
        description: 'All-in-one kit with baiting needle, drill, stringer needle and bait stops.',
        category: 'Tools',
        href: 'https://amzn.to/3NtAXr6',
      },
      {
        title: 'AOTISBAO PVA Mesh Refill – 2 Pack',
        description: 'Water-soluble PVA mesh for boilie and particle presentations. Dissolves on the bottom.',
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
        title: 'MC TOMOUNT 1-2 Person Camping Tent – 4 Season, 3000mm',
        description: '4-season double-layer tent with 3000mm waterproofing and aluminum poles. Compact at 4.65 lbs.',
        category: 'Bivvies',
        href: 'https://amzn.to/3NSb6cr',
      },
      {
        title: 'VENTURE 4TH 3-Season Sleeping Bag – XXL',
        description: 'Rated 30°F–70°F, water-resistant and packable. Covers spring through autumn sessions.',
        category: 'Sleeping',
        href: 'https://amzn.to/47Zheq0',
      },
      {
        title: 'Coleman North Rim 0°F Mummy Sleeping Bag – Big & Tall',
        description: 'Rated to 0°F for cold-weather sessions. Trusted Coleman brand with over 11,000 reviews.',
        category: 'Sleeping',
        href: 'https://amzn.to/4bRSeSR',
      },
      {
        title: 'Coleman Trailhead II Folding Cot',
        description: 'Elevated sleeping off cold ground, 300lb capacity, fits inside a full-size bivvy.',
        category: 'Bedding',
        href: 'https://amzn.to/4bN0Ius',
      },
      {
        title: 'Naturehike GreenWild Ultralight Camping Cot – 4.8 lbs',
        description: 'Only 4.8 lbs and folds to 18 inches. 330lb capacity, sets up in 60 seconds.',
        category: 'Bedding',
        href: 'https://amzn.to/4cgBkh5',
      },
      {
        title: 'Naturehike Ultralight Camping Chair – 2.38 lbs',
        description: 'Anti-sink feet for muddy banks, sets up in 15 seconds, weighs just 2.38 lbs.',
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
        title: 'LHKNL Rechargeable Headlamp 2-Pack – White & Red Light',
        description: 'Rechargeable, waterproof, with red light mode that won\'t spook fish.',
        category: 'Lighting',
        href: 'https://amzn.to/414th1w',
      },
      {
        title: 'XTAUTO Collapsible LED Camping Lantern – 4 Pack',
        description: 'Rechargeable via USB or solar, 25+ hour battery life. Hangs inside a bivvy.',
        category: 'Lighting',
        href: 'https://amzn.to/4uYgewk',
      },
      {
        title: 'KALIYADI Polarised Sunglasses – 3 Pack',
        description: 'UV400 polarised lenses cut through surface glare so you can spot carp in the water.',
        category: 'Eyewear',
        href: 'https://amzn.to/3NS8NWP',
        badge: 'Best Seller',
      },
      {
        title: 'Foliful Polarised Wrap-Around Sunglasses – 3 Pack',
        description: 'Wrap-around design stays secure on the bank. UV protection, scratch-resistant lenses.',
        category: 'Eyewear',
        href: 'https://amzn.to/4bCt6AF',
        badge: 'Best Seller',
      },
      {
        title: 'OUTUXED 36-Grid Tackle Organiser Box – 2 Pack',
        description: 'Clear lid, adjustable dividers — keeps hooks, swivels, rig rings and lead clips organised.',
        category: 'Storage',
        href: 'https://amzn.to/488j2Np',
      },
    ],
  },
];
