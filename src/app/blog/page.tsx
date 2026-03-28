import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.carpmarks.com';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Carp fishing tips, gear reviews, rig guides, bait advice, and seasonal tactics from the CarpMarks team.',
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'CarpMarks Blog – Carp Fishing Tips, Gear & Guides',
    description:
      'Gear reviews, rig guides, bait tactics, and seasonal carp fishing advice.',
    type: 'website',
    url: `${BASE_URL}/blog`,
  },
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
      <div className="bg-gradient-to-br from-[#05293D] to-[#0A4D68] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CarpMarks Blog</h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Gear reviews, fishing tips, rig guides, and everything carp fishing.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group overflow-hidden"
              >
                <div className="p-6">
                  <span className="text-xs font-bold text-[#D4A574] uppercase tracking-widest">
                    {post.category}
                  </span>
                  <h2 className="text-base font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#0A4D68] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
