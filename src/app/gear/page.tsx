import Link from 'next/link';
import { productCategories } from '@/data/products';
import GearCard from '@/components/GearCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carp Fishing Gear Guide – Top Picks for 2026',
  description:
    'Curated carp fishing gear across every category — rods, reels, bite alarms, bivvies, bait, and terminal tackle. All linked to Amazon US.',
  alternates: { canonical: 'https://www.carpmarks.com/gear' },
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
            Curated picks across every category — rods, reels, bite alarms, bivvies, bait, and more. Every product links directly to Amazon US.
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
                <GearCard key={product.title} product={product} />
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
          <Link
            href="/download"
            className="inline-block bg-[#D4A574] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#c49464] transition-colors"
          >
            Download the CarpMarks App — Free
          </Link>
        </div>
      </div>
    </div>
  );
}
