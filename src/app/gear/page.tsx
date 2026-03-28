import Link from 'next/link';
import { productCategories } from '@/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carp Fishing Gear Guide – Top Picks for 2026',
  description:
    'Curated carp fishing gear across every category — rods, reels, bite alarms, bivvies, bait, and terminal tackle. All linked to Amazon UK.',
  alternates: { canonical: 'https://www.carpmarks.com/gear' },
};

const categoryColors: Record<string, string> = {
  Rods: 'bg-blue-50 text-blue-700 border-blue-200',
  Reels: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Alarms: 'bg-orange-50 text-orange-700 border-orange-200',
  Indicators: 'bg-amber-50 text-amber-700 border-amber-200',
  Bivvies: 'bg-teal-50 text-teal-700 border-teal-200',
  Bedding: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Boilies: 'bg-green-50 text-green-700 border-green-200',
  'Pop-Ups': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Wafters: 'bg-lime-50 text-lime-700 border-lime-200',
  Particles: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  Artificials: 'bg-rose-50 text-rose-700 border-rose-200',
  'Lead Systems': 'bg-slate-50 text-slate-700 border-slate-200',
  Rigs: 'bg-violet-50 text-violet-700 border-violet-200',
  Hooklink: 'bg-purple-50 text-purple-700 border-purple-200',
  Hooks: 'bg-pink-50 text-pink-700 border-pink-200',
  Mainline: 'bg-sky-50 text-sky-700 border-sky-200',
  Baiting: 'bg-blue-50 text-blue-700 border-blue-200',
  Location: 'bg-amber-50 text-amber-700 border-amber-200',
  Landing: 'bg-teal-50 text-teal-700 border-teal-200',
  'Fish Care': 'bg-green-50 text-green-700 border-green-200',
  'Night Fishing': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Line: 'bg-gray-50 text-gray-700 border-gray-200',
  PVA: 'bg-orange-50 text-orange-700 border-orange-200',
  Clothing: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function GearPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#05293D] to-[#0A4D68] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-5 text-sm">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">← Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D4A574] font-medium">Gear Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Carp Fishing Gear Guide
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-6">
            Curated picks across every category — rods, reels, bite alarms, bivvies, bait, and more. Every product links directly to Amazon UK.
          </p>
          <div className="flex flex-wrap gap-2">
            {productCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-full transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Affiliate Disclosure */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-900">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5 text-amber-600">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
          </svg>
          <p>
            <strong>Affiliate Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases.
            Links on this page are affiliate links — if you buy through them, we may earn a small commission at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
        {productCategories.map((category) => (
          <section key={category.slug} id={category.slug}>
            <div className="flex items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0A4D68]">{category.name}</h2>
              </div>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.products.map((product) => (
                <div
                  key={product.title}
                  className="bg-white rounded-xl border border-gray-200 hover:border-[#D4A574]/50 hover:shadow-md transition-all flex flex-col group"
                >
                  <div className="p-5 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${categoryColors[product.category] ?? 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                        {product.category}
                      </span>
                      {product.badge && (
                        <span className="text-[10px] font-bold text-[#D4A574] uppercase tracking-wide flex-shrink-0">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-[#0A4D68] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{product.description}</p>
                  </div>
                  <div className="px-5 pb-5">
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex items-center justify-center gap-2 bg-[#FF9900] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#e08800] transition-colors w-full"
                    >
                      View on Amazon
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#0A4D68] py-16 px-4 mt-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Track What Works With CarpMarks</h2>
          <p className="text-white/65 mb-6">
            Log every catch with bait, weight, and photos. Save your best spots and check conditions on the map — all in one free app.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4A574] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#c49464] transition-colors"
          >
            Download Free on Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
