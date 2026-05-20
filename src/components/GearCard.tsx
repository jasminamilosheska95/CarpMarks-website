import Link from 'next/link';
import type { Product } from '@/data/products';

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
  Bait: 'bg-lime-50 text-lime-700 border-lime-200',
};

export default function GearCard({ product }: { product: Product }) {
  const isAwin = product.source === 'awin';
  const buyLabel = isAwin
    ? (product.merchantName ? `Buy at ${product.merchantName}` : 'View Product')
    : 'View on Amazon';

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-[#D4A574]/50 hover:shadow-md transition-all flex flex-col group">

      {/* Image area — always rendered so all cards have equal height */}
      <div className="h-44 overflow-hidden rounded-t-xl bg-gray-50 border-b border-gray-100 flex items-center justify-center p-3">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        ) : (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
            <line x1="4" y1="22" x2="4" y2="15"/>
          </svg>
        )}
      </div>

      <div className="p-5 flex-1">
        {/* Category + badge + price row */}
        <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
          <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${categoryColors[product.category] ?? 'bg-gray-50 text-gray-600 border-gray-200'}`}>
            {product.category}
          </span>
          {product.badge && (
            <span className="text-[10px] font-bold text-[#D4A574] uppercase tracking-wide flex-shrink-0">
              {product.badge}
            </span>
          )}
        </div>

        {/* Brand name (Awin only) */}
        {product.brandName && (
          <p className="text-[10px] font-semibold text-[#0A4D68]/60 uppercase tracking-widest mb-1">
            {product.brandName}
          </p>
        )}

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-[#0A4D68] transition-colors">
          {product.title}
        </h3>

        {/* Short description */}
        <p className="text-gray-500 text-xs leading-relaxed mb-3">{product.description}</p>

        {/* Details link */}
        <Link
          href={`/gear/${product.slug}/`}
          className="text-[#0A4D68] text-xs font-semibold hover:text-[#D4A574] transition-colors inline-flex items-center gap-1"
        >
          Full details
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Buy button */}
      <div className="px-5 pb-5">
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`flex items-center justify-center gap-2 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors w-full ${
            isAwin
              ? 'bg-[#0A4D68] hover:bg-[#083d52]'
              : 'bg-[#FF9900] hover:bg-[#e08800]'
          }`}
        >
          {buyLabel}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
