import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';

const BASE_URL = 'https://www.carpmarks.com';
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks';

export const metadata: Metadata = {
  title: 'Download CarpMarks – Free Carp Fishing App for Android',
  description:
    'Download CarpMarks free to start on Android. The carp fishing tracker app to save spots, log catches, monitor weather conditions, and improve every session.',
  alternates: { canonical: `${BASE_URL}/download` },
  keywords: [
    'best carp fishing app android',
    'carp fishing tracker app',
    'free carp fishing app',
    'carp fishing spot tracker',
    'carp catch log app',
    'android fishing app',
    'carp fishing companion app',
  ],
  openGraph: {
    title: 'Download CarpMarks – Free Carp Fishing App for Android',
    description:
      'Save spots, log catches, check conditions — the free carp fishing app built for serious anglers.',
    url: `${BASE_URL}/download`,
    type: 'website',
    siteName: 'CarpMarks',
  },
};

const features = [
  {
    title: 'Save Fishing Spots',
    description:
      'Pin any location on an interactive map with photos and notes. Never forget a productive swim again.',
  },
  {
    title: 'Log Every Catch',
    description:
      'Record species, weight, bait, rig, and photos for each catch. Build a searchable personal catch history.',
  },
  {
    title: 'Real-Time Conditions',
    description:
      'Live weather, barometric pressure trends, wind direction, and moon phase data for any water you fish.',
  },
  {
    title: 'Smart Notifications',
    description:
      'Get alerted when conditions are perfect at your saved spots — so you never miss a prime feeding window.',
  },
  {
    title: 'CarpMarks AI',
    description:
      'AI-powered insights on the best spots, conditions, and tactics based on your own catch data.',
  },
  {
    title: 'Personal Stats',
    description:
      'Personal bests, session totals, and catch trends — all tracked automatically as you fish.',
  },
];

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CarpMarks',
  operatingSystem: 'Android',
  applicationCategory: 'SportsApplication',
  description:
    'Free carp fishing app for Android. Track fishing spots, log catches with photos and weight, monitor real-time weather and conditions.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
  },
  url: PLAY_STORE_URL,
  downloadUrl: PLAY_STORE_URL,
  author: { '@type': 'Organization', name: 'CarpMarks', url: BASE_URL },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    ratingCount: '1',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is CarpMarks free to download?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — CarpMarks is completely free to download on Android via Google Play. There are no upfront costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is CarpMarks available on iPhone (iOS)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CarpMarks is currently available on Android only. An iOS version is in development and will be released soon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I track with the CarpMarks app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can save fishing spots on a map with notes and photos, log catches with species, weight, bait, and images, check real-time weather and conditions, and view your personal catch history and stats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does CarpMarks work offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core features like logging catches and viewing saved spots work offline. Weather and condition data requires an internet connection.',
      },
    },
  ],
};

export default function DownloadPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <StructuredData data={softwareAppSchema} />
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#03192A] via-[#05293D] to-[#0A4D68] text-white relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-16 right-16 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.18) 0%, transparent 70%)' }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 border border-[#D4A574]/40 text-[#D4A574] px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-widest uppercase" style={{ background: 'rgba(212,165,116,0.12)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] animate-pulse" />
            Free to Start on Android
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Best Carp Fishing App<br className="hidden sm:block" />
            <span className="text-[#D4A574]"> for Android</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            CarpMarks is the free carp fishing tracker app that saves your spots, logs every catch, and shows you the conditions — so every session counts.
          </p>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 bg-[#D4A574] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#c49464] transition-all shadow-2xl hover:shadow-[#D4A574]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l12.18-7.03-3.13-3.13L3.18 23.76zM.66 1.32A2 2 0 0 0 0 2.82v18.36c0 .61.24 1.16.66 1.5l.09.08 10.28-10.28v-.24L.75 1.24l-.09.08zM23.1 10.35 20.53 8.9l-3.22 3.22 3.22 3.22 2.58-1.46c.74-.42.74-1.1 0-1.53zM5.23.43 17.31 7.4l-3.13 3.13L5.23.43z"/>
            </svg>
            Download Free on Google Play
          </a>
          <p className="text-white/35 text-sm mt-4">iOS coming soon · No account required to get started</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ height: '48px' }}>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ width: '100%', height: '48px', display: 'block' }}>
            <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1350,12 1440,24 L1440,48 L0,48 Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-[#0A4D68] py-5 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
          <span className="flex items-center gap-2"><span className="text-[#D4A574] font-bold">5,000+</span> catches logged</span>
          <span className="text-white/20 hidden sm:block">|</span>
          <span className="flex items-center gap-2"><span className="text-[#D4A574] font-bold">3,000+</span> spots saved</span>
          <span className="text-white/20 hidden sm:block">|</span>
          <span className="flex items-center gap-2"><span className="text-[#D4A574] font-bold">5★</span> rated on Google Play</span>
          <span className="text-white/20 hidden sm:block">|</span>
          <span className="flex items-center gap-2"><span className="text-[#D4A574] font-bold">Free</span> — no subscription</span>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <span className="text-[#D4A574] text-xs font-bold uppercase tracking-widest">What You Get</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mt-3 mb-4">
            Everything a Serious Carp Angler Needs
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Built specifically for carp fishing — not a generic fishing app adapted after the fact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#D4A574]/30 transition-all">
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-gray-100 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#D4A574] text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl font-bold text-[#0A4D68] mt-3">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="border border-gray-100 rounded-xl p-6 bg-gray-50">
                <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#05293D] to-[#0A4D68] py-20 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Fishing Smarter Today</h2>
        <p className="text-white/65 mb-8 max-w-md mx-auto">
          Download CarpMarks free to start on Android and start building the spot database and catch history that will improve every future session.
        </p>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer inline-flex items-center gap-3 bg-[#D4A574] text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-[#c49464] transition-all shadow-xl hover:-translate-y-0.5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l12.18-7.03-3.13-3.13L3.18 23.76zM.66 1.32A2 2 0 0 0 0 2.82v18.36c0 .61.24 1.16.66 1.5l.09.08 10.28-10.28v-.24L.75 1.24l-.09.08zM23.1 10.35 20.53 8.9l-3.22 3.22 3.22 3.22 2.58-1.46c.74-.42.74-1.1 0-1.53zM5.23.43 17.31 7.4l-3.13 3.13L5.23.43z"/>
          </svg>
          Download Free on Google Play
        </a>
      </section>
    </div>
  );
}
