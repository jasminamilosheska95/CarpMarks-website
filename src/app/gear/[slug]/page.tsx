import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug } from '@/data/products';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const description = product.longDescription ?? product.description;

  return {
    title: `${product.title} – CarpMarks Gear`,
    description,
    openGraph: {
      title: product.title,
      description,
      url: `https://www.carpmarks.com/gear/${product.slug}/`,
      siteName: 'CarpMarks',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: product.title,
      description,
    },
    alternates: { canonical: `https://www.carpmarks.com/gear/${product.slug}/` },
  };
}

const categoryColors: Record<string, string> = {
  Rods: 'bg-blue-50 text-blue-700 border-blue-200',
  Reels: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Alarms: 'bg-orange-50 text-orange-700 border-orange-200',
  Bivvies: 'bg-teal-50 text-teal-700 border-teal-200',
  Bedding: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Sleeping: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Seating: 'bg-amber-50 text-amber-700 border-amber-200',
  Landing: 'bg-teal-50 text-teal-700 border-teal-200',
  Scales: 'bg-green-50 text-green-700 border-green-200',
  Line: 'bg-gray-50 text-gray-700 border-gray-200',
  Rigs: 'bg-violet-50 text-violet-700 border-violet-200',
  Terminal: 'bg-slate-50 text-slate-700 border-slate-200',
  Feeders: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  Tools: 'bg-purple-50 text-purple-700 border-purple-200',
  PVA: 'bg-orange-50 text-orange-700 border-orange-200',
  Lighting: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Eyewear: 'bg-sky-50 text-sky-700 border-sky-200',
  Storage: 'bg-rose-50 text-rose-700 border-rose-200',
  'Bank Sticks': 'bg-amber-50 text-amber-700 border-amber-200',
};

export default async function ProductPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#05293D] to-[#0A4D68] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/gear/" className="text-white/60 hover:text-white transition-colors">Gear Guide</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D4A574] font-medium truncate">{product.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border ${categoryColors[product.category] ?? 'bg-white/10 text-white border-white/20'}`}>
              {product.category}
            </span>
            {product.badge && (
              <span className="text-[11px] font-bold text-[#D4A574] uppercase tracking-wide">
                {product.badge}
              </span>
            )}
          </div>

          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            {product.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

          {/* Short description */}
          <p className="text-gray-700 text-base leading-relaxed mb-6 font-medium text-justify">
            {product.description}
          </p>

          {/* Long description */}
          {product.longDescription && (
            <>
              <div className="border-t border-gray-100 pt-6 mb-8">
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line text-justify">
                  {product.longDescription}
                </p>
              </div>
            </>
          )}

          {/* Affiliate disclosure */}
          <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-900 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5 text-amber-600">
              <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
            </svg>
            <p>This is an affiliate link — if you buy through it, we may earn a small commission at no extra cost to you.</p>
          </div>

          {/* Amazon button */}
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center justify-center gap-3 bg-[#FF9900] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#e08800] transition-colors shadow-md shadow-[#FF9900]/20 text-base w-full"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.06 18.11c-3.55 2.62-8.69 4.01-13.13 4.01-6.21 0-11.81-2.3-16.04-6.12-.33-.3-.04-.71.36-.48 4.57 2.66 10.21 4.26 16.04 4.26 3.93 0 8.25-.82 12.22-2.5.6-.26 1.1.39.55.83z"/>
              <path d="M21.54 16.43c-.46-.58-3.01-.28-4.15-.14-.35.04-.4-.26-.09-.48 2.03-1.43 5.36-.91 5.75-.48.39.44-.1 3.78-2.01 5.36-.29.25-.57.12-.44-.2.43-1.07 1.39-3.47.94-4.06z"/>
            </svg>
            View on Amazon
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/gear/"
            className="text-[#0A4D68] text-sm font-semibold hover:text-[#D4A574] transition-colors inline-flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Gear Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
