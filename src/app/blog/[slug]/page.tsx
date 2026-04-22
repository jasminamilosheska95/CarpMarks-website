import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AffiliateLink from '@/components/AffiliateLink';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ComparisonTable from '@/components/ComparisonTable';
import StructuredData from '@/components/StructuredData';
import ReadingProgress from '@/components/ReadingProgress';
import Link from 'next/link';
import type { Metadata } from 'next';

const components = { AffiliateLink, ComparisonTable };

const BASE_URL = 'https://www.carpmarks.com';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    const url = `${BASE_URL}/blog/${slug}`;
    return {
      title: meta.title,
      description: meta.excerpt,
      alternates: { canonical: url },
      openGraph: {
        title: meta.title,
        description: meta.excerpt,
        type: 'article',
        url,
        publishedTime: meta.date,
        siteName: 'CarpMarks',
        images: [{ url: '/og-default.png', width: 1200, height: 630, alt: meta.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.excerpt,
        images: ['/og-default.png'],
      },
    };
  } catch {
    return { title: 'Post Not Found' };
  }
}

const categoryConfig: Record<string, string> = {
  'Gear Reviews':     'bg-blue-500/15 text-blue-200 border border-blue-400/20',
  'Tactics':          'bg-teal-500/15 text-teal-200 border border-teal-400/20',
  'Bait & Tactics':   'bg-green-500/15 text-green-200 border border-green-400/20',
  'Beginners':        'bg-amber-500/15 text-amber-200 border border-amber-400/20',
  'Seasonal Tactics': 'bg-orange-500/15 text-orange-200 border border-orange-400/20',
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let meta, content;
  try {
    ({ meta, content } = getPostBySlug(slug));
  } catch {
    notFound();
  }

  const postUrl = `${BASE_URL}/blog/${slug}`;
  const catCls = categoryConfig[meta.category] ?? 'bg-white/10 text-white/80 border border-white/15';

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': ['Article', 'BlogPosting'],
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
    dateModified: meta.date,
    author: { '@type': 'Organization', name: 'CarpMarks', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'CarpMarks',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    url: postUrl,
    keywords: meta.category,
    articleSection: meta.category,
  };

  const faqSchema = meta.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: meta.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: postUrl },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <ReadingProgress />
      <StructuredData data={blogPostingSchema} />
      <StructuredData data={breadcrumbSchema} />
      {faqSchema && <StructuredData data={faqSchema} />}

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#05293D] via-[#073d59] to-[#0A4D68] text-white overflow-hidden">
        {/* Decorative orb */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4A574, transparent 70%)' }}
        />

        <div className="relative max-w-3xl mx-auto px-4 pt-12 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Blog
            </Link>
            <span className="text-white/20">/</span>
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${catCls}`}>
              {meta.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{meta.title}</h1>
          <p className="text-white/70 text-lg mb-6 leading-relaxed">{meta.excerpt}</p>

          {/* Meta row */}
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {meta.date}
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {meta.readTime}
            </span>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative h-10 overflow-hidden">
          <div className="hero-wave absolute bottom-0">
            <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '40px', display: 'block' }}>
              <path d="M0 40V20C240 0 480 40 720 20S1200 0 1440 20V40z" fill="#f9fafb" />
            </svg>
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <article className="blog-content">
          <AffiliateDisclosure />
          <MDXRemote source={content} components={components} />
        </article>

        {/* Inline app CTA */}
        <div className="my-10 flex items-start gap-4 px-5 py-4 border-l-4 border-[#D4A574] bg-[#D4A574]/5 rounded-r-xl">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <p className="text-gray-700 text-sm leading-relaxed">
            Use <strong>CarpMarks</strong> to save this spot, log your session conditions, and track patterns across sessions —{' '}
            <Link href="/download" className="text-[#0A4D68] font-bold hover:text-[#D4A574] transition-colors">
              Download free to start on Android →
            </Link>
          </p>
        </div>

        {/* Post footer */}
        <div className="mt-14 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#0A4D68] font-semibold hover:underline text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Blog
            </Link>
            <Link
              href="/gear"
              className="inline-flex items-center gap-2 bg-[#0A4D68] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#083d54] transition-colors"
            >
              Browse Gear Guide
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* CTA box */}
          <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#05293D] to-[#0A4D68] text-white p-8 text-center shadow-lg">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#D4A574]/20 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Track This with the CarpMarks App</h3>
            <p className="text-white/70 text-sm mb-5 max-w-sm mx-auto">
              Save your spots, log every catch with bait and weight, and build a personal fishing diary — free to start on Android.
            </p>
            <Link
              href="/download"
              className="btn-shimmer inline-flex items-center gap-2 bg-[#D4A574] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#c49464] active:scale-95 transition-all duration-150 shadow-md shadow-[#D4A574]/25"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l12.18-7.03-3.13-3.13L3.18 23.76zM.66 1.32A2 2 0 0 0 0 2.82v18.36c0 .61.24 1.16.66 1.5l.09.08 10.28-10.28v-.24L.75 1.24l-.09.08zM23.1 10.35 20.53 8.9l-3.22 3.22 3.22 3.22 2.58-1.46c.74-.42.74-1.1 0-1.53zM5.23.43 17.31 7.4l-3.13 3.13L5.23.43z"/>
              </svg>
              Download the CarpMarks App — Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
