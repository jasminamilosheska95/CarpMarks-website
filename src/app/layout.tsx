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
    default: 'Carp Fishing App – Track Spots, Log Catches | CarpMarks',
  },
  description:
    'CarpMarks is the free carp fishing app for Android. Track your fishing spots, log catches with photos and weight, and get real-time weather and conditions. Plus expert tips, rig guides, and gear reviews.',
  keywords: [
    'carp fishing app',
    'carp fishing tracker',
    'best carp fishing app android',
    'fishing spots tracker',
    'carp catch log',
    'carp fishing tips',
    'carp rigs',
    'carp bait',
    'carp fishing gear',
  ],
  authors: [{ name: 'CarpMarks' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'CarpMarks',
    title: 'Carp Fishing App – Track Spots, Log Catches | CarpMarks',
    description:
      'The free Android app that tracks your fishing spots, logs catches, and gives you real-time conditions — plus expert carp tips and gear reviews.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'CarpMarks – Free Carp Fishing App for Android',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carp Fishing App – Track Spots, Log Catches | CarpMarks',
    description:
      'Free Android app to track spots, log catches, and get real-time conditions. Plus carp tips and gear reviews.',
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

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CarpMarks',
  operatingSystem: 'Android',
  applicationCategory: 'SportsApplication',
  description:
    'Track your fishing spots, log catches, and get real-time weather and conditions with the CarpMarks carp fishing app.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
  },
  url: 'https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks',
  downloadUrl:
    'https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks',
  author: { '@type': 'Organization', name: 'CarpMarks', url: BASE_URL },
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
        <StructuredData data={softwareAppSchema} />
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
