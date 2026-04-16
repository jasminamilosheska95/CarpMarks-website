import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

const BASE_URL = 'https://www.carpmarks.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | CarpMarks',
    default: 'CarpMarks – Carp Fishing Tips, Gear Reviews & App',
  },
  description:
    'Expert carp fishing tips, rig guides, gear reviews, and bait advice — plus the CarpMarks app to track your spots and catches. Available on Android.',
  keywords: [
    'carp fishing',
    'carp fishing tips',
    'carp rigs',
    'carp bait',
    'carp fishing app',
    'best carp gear',
    'fishing spots tracker',
  ],
  authors: [{ name: 'CarpMarks' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'CarpMarks',
    title: 'CarpMarks – Carp Fishing Tips, Gear Reviews & App',
    description:
      'Expert carp fishing tips, rig guides, gear reviews, and bait advice — plus the CarpMarks app to track your spots and catches.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'CarpMarks – Carp Fishing Companion App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarpMarks – Carp Fishing Tips, Gear Reviews & App',
    description:
      'Expert carp fishing tips, rig guides, gear reviews and the CarpMarks app for Android.',
    images: ['/og-default.png'],
  },
  icons: {
    icon: '/icon-no-text.png',
    apple: '/icon-no-text.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CarpMarks',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  sameAs: [
    'https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@carpmarks.com',
    contactType: 'customer support',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CarpMarks',
  url: BASE_URL,
  description:
    'Expert carp fishing tips, rig guides, gear reviews, and bait advice.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
