import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';

const BASE_URL = 'https://carpmarks.com';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Carp fishing tips, gear reviews, rig guides, bait advice, and seasonal tactics from the CarpMarks team.',
  alternates: { canonical: `${BASE_URL}/blog/` },
  openGraph: {
    title: 'CarpMarks Blog – Carp Fishing Tips, Gear & Guides',
    description: 'Gear reviews, rig guides, bait tactics, and seasonal carp fishing advice.',
    type: 'website',
    url: `${BASE_URL}/blog`,
  },
};

const categoryConfig: Record<string, { color: string; dot: string }> = {
  'Gear Reviews':     { color: 'bg-blue-50 text-blue-700 border border-blue-100',     dot: 'bg-blue-400' },
  'Tactics':          { color: 'bg-teal-50 text-teal-700 border border-teal-100',     dot: 'bg-teal-400' },
  'Bait & Tactics':   { color: 'bg-green-50 text-green-700 border border-green-100', dot: 'bg-green-400' },
  'Beginners':        { color: 'bg-amber-50 text-amber-700 border border-amber-100', dot: 'bg-amber-400' },
  'Seasonal Tactics': { color: 'bg-orange-50 text-orange-700 border border-orange-100', dot: 'bg-orange-400' },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CarpMarks Blog',
    description: 'Carp fishing tips, gear reviews, rig guides, and bait advice.',
    url: `${BASE_URL}/blog`,
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: post.title,
      url: `${BASE_URL}/blog/${post.slug}`,
      description: post.excerpt,
    })),
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <StructuredData data={itemListSchema} />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#05293D] via-[#073d59] to-[#0A4D68] text-white overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
          style={{ background: 'radial-gradient(circle, #D4A574, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 -translate-x-1/3 translate-y-1/3"
          style={{ background: 'radial-gradient(circle, #D4A574, transparent 70%)' }} />

        <div className="relative max-w-4xl mx-auto text-center px-4 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] animate-pulse" />
            <span className="text-[#D4A574] text-xs font-bold uppercase tracking-widest">The Knowledge Base</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Carp Fishing{' '}
            <span className="text-[#D4A574]">Knowledge</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Gear reviews, rig guides, bait tactics, and seasonal advice — written for carp anglers who want to improve.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
              </svg>
              {posts.length} articles
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Free to read
            </span>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative h-12 overflow-hidden">
          <div className="hero-wave absolute bottom-0">
            <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '48px', display: 'block' }}>
              <path d="M0 48V24C240 0 480 48 720 24S1200 0 1440 24V48z" fill="#f9fafb" />
            </svg>
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => {
              const cfg = categoryConfig[post.category] ?? { color: 'bg-gray-100 text-gray-600 border border-gray-200', dot: 'bg-gray-400' };
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {/* Top accent gradient */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#0A4D68] to-[#D4A574]" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category + read time */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${cfg.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                        {post.category}
                      </span>
                      <span className="text-[11px] text-gray-400 font-medium">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-bold text-gray-900 text-[0.9375rem] leading-snug mb-3 group-hover:text-[#0A4D68] transition-colors flex-1">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-5">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-[11px] text-gray-400">{post.date}</span>
                      <span className="inline-flex items-center gap-1 text-[#0A4D68] text-xs font-bold group-hover:gap-2 transition-all">
                        Read
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
