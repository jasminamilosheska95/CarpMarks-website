import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AffiliateLink from '@/components/AffiliateLink';
import StructuredData from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

const components = { AffiliateLink };

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
        images: [
          {
            url: '/og-default.png',
            width: 1200,
            height: 630,
            alt: meta.title,
          },
        ],
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let meta, content;
  try {
    ({ meta, content } = getPostBySlug(slug));
  } catch {
    notFound();
  }

  const postUrl = `${BASE_URL}/blog/${slug}`;

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      '@type': 'Organization',
      name: 'CarpMarks',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CarpMarks',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    url: postUrl,
    keywords: meta.category,
    articleSection: meta.category,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${BASE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: meta.title,
        item: postUrl,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <StructuredData data={blogPostingSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#05293D] to-[#0A4D68] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-5 text-sm">
            <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
              ← Blog
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D4A574] font-medium">{meta.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">{meta.title}</h1>
          <p className="text-white/75 text-lg mb-6 leading-relaxed">{meta.excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-white/50">
            <span>{meta.date}</span>
            <span>·</span>
            <span>{meta.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="blog-content">
          <MDXRemote source={content} components={components} />
        </div>

        <div className="mt-14 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0A4D68] font-semibold hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
