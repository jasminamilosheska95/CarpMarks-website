import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';

const BASE_URL = 'https://www.carpmarks.com';
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks';
const APP_STORE_URL =
  'https://apps.apple.com/mk/app/carpmarks-carp-fishing-app/id6763633214';

export const metadata: Metadata = {
  title: 'Download CarpMarks – Free Carp Fishing App for iOS & Android',
  description:
    'Download CarpMarks free on iOS and Android. The carp fishing app that logs catches, saves GPS spots and gives AI fishing insights. Free to start.',
  alternates: { canonical: `${BASE_URL}/download` },
  keywords: [
    'best carp fishing app',
    'carp fishing app iphone',
    'carp fishing tracker app',
    'free carp fishing app',
    'carp fishing spot tracker',
    'carp catch log app',
    'android fishing app',
    'ios fishing app',
    'carp fishing companion app',
  ],
  openGraph: {
    title: 'Download CarpMarks – Free Carp Fishing App for iOS & Android',
    description:
      'Save spots, log catches, check conditions — the free carp fishing app built for serious anglers.',
    url: `${BASE_URL}/download`,
    type: 'website',
    siteName: 'CarpMarks',
  },
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CarpMarks',
  operatingSystem: 'Android, iOS',
  applicationCategory: 'SportsApplication',
  description:
    'CarpMarks is the carp fishing app for serious anglers. Log catches, save GPS spots, track conditions and get AI fishing insights.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    ratingCount: '10',
  },
  url: PLAY_STORE_URL,
  downloadUrl: PLAY_STORE_URL,
  author: { '@type': 'Organization', name: 'CarpMarks', url: BASE_URL },
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
        text: 'Yes — CarpMarks is free to start on Android. The free plan includes 3 saved spots and 30 logged catches. Upgrade to Premium for unlimited spots, catches, smart alerts, and AI insights.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the free plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The free plan includes up to 3 saved fishing spots, up to 30 logged catches with photos, real-time weather and conditions for your spots, and access to the full map and session logging interface.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does CarpMarks Premium include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CarpMarks Premium gives you unlimited saved spots, unlimited catch logging, smart condition alerts when your spots are fishing well, and CarpMarks AI — personalised bait and tactic insights based on your own catch data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is CarpMarks available on iPhone (iOS)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — CarpMarks is available on both iOS and Android. Download it free from the App Store or Google Play.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does CarpMarks work offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CarpMarks requires an internet connection to log catches, save spots, and fetch live conditions. Make sure you have a data signal or Wi-Fi when using the app.',
      },
    },
  ],
};

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A4D68] flex-shrink-0 mt-0.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 flex-shrink-0 mt-0.5">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export default function DownloadPage() {
  return (
    <>
      <StructuredData data={softwareAppSchema} />
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#03192A] via-[#05293D] to-[#0A4D68] text-white relative overflow-hidden" style={{ paddingTop: '7rem', paddingBottom: '6rem' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-16 left-12 w-80 h-80 rounded-full blur-3xl animate-float-slow pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.15) 0%, transparent 70%)' }} />
        <div className="absolute bottom-24 right-8 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(10,77,104,0.4) 0%, transparent 70%)' }} />

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 border border-[#D4A574]/40 text-[#D4A574] px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-widest uppercase" style={{ background: 'rgba(212,165,116,0.12)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] animate-pulse" />
              Free on iOS &amp; Android
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight animate-fade-in-up delay-150">
            Download the Free<br className="hidden sm:block" />
            <span className="text-[#D4A574]"> Carp Fishing App</span>
          </h1>

          <p className="text-xl text-white/65 max-w-2xl mx-auto mt-6 mb-10 leading-relaxed animate-fade-in-up delay-300">
            CarpMarks is the carp fishing tracker built for serious anglers. Log every catch, save your best spots, check live conditions and get AI-powered insights — all in one app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center gap-3 bg-white text-[#0A4D68] px-10 py-4 rounded-xl font-bold text-base hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25zM17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.37.07 2.32.85 3.12.87 1.2-.24 2.34-1.03 3.63-.89 1.58.19 2.77.89 3.54 2.26-3.25 1.95-2.73 5.96.41 7.36-.57 1.28-1.31 2.54-2.7 3.28z"/>
              </svg>
              Download Free on App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center gap-3 bg-[#D4A574] text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-[#c49464] transition-all shadow-2xl hover:shadow-[#D4A574]/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l12.18-7.03-3.13-3.13L3.18 23.76zM.66 1.32A2 2 0 0 0 0 2.82v18.36c0 .61.24 1.16.66 1.5l.09.08 10.28-10.28v-.24L.75 1.24l-.09.08zM23.1 10.35 20.53 8.9l-3.22 3.22 3.22 3.22 2.58-1.46c.74-.42.74-1.1 0-1.53zM5.23.43 17.31 7.4l-3.13 3.13L5.23.43z"/>
              </svg>
              Download Free on Google Play
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ height: '64px' }}>
          <svg className="hero-wave" viewBox="0 0 2880 64" preserveAspectRatio="none" style={{ height: '64px' }}>
            <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 C1680,64 1920,0 2160,32 C2400,64 2640,0 2880,32 L2880,64 L0,64 Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0A4D68] px-4" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
          {[
            { value: '5,000+', label: 'Catches Logged' },
            { value: '3,000+', label: 'Spots Saved' },
            { value: '5★', label: 'App Rating' },
            { value: 'Free', label: 'to Start' },
          ].map((s, i) => (
            <div key={s.label} className="text-center px-4" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-[#D4A574] font-black text-2xl md:text-3xl leading-none tracking-tight">{s.value}</div>
              <div className="text-white/50 text-[11px] mt-1.5 tracking-wide uppercase font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Free vs Premium */}
      <section className="bg-gray-50 px-4" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#D4A574] text-xs font-bold uppercase tracking-widest">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mt-3 mb-4 leading-tight">
              Free to Start. Upgrade When You're Ready.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Start for free with no credit card required. Upgrade to Premium when you want unlimited access and advanced features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free plan */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Free</span>
                <div className="text-4xl font-black text-gray-900 mt-1">£0</div>
                <p className="text-gray-500 text-sm mt-1">No credit card needed</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '3 saved fishing spots',
                  '30 logged catches',
                  'Real-time weather & conditions',
                  'Full map access',
                  'Catch photos & bait logging',
                  'Rig tracking',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
                {[
                  'Smart condition alerts',
                  'CarpMarks AI insights',
                  'Fish Scanner',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                    <CrossIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium plan */}
            <div className="bg-gradient-to-br from-[#05293D] to-[#0A4D68] rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-[#D4A574] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Popular</span>
              </div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">Premium</span>
                <div className="text-4xl font-black text-white mt-1">Upgrade</div>
                <p className="text-white/50 text-sm mt-1">Monthly or yearly plans</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited saved spots',
                  'Unlimited catch logging',
                  'Real-time weather & conditions',
                  'Full map access',
                  'Catch photos & bait logging',
                  'Rig tracking',
                  'Smart condition alerts',
                  'CarpMarks AI insights',
                  'Fish Scanner',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-gray-100 px-4" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#D4A574] text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mt-3">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="border border-gray-100 rounded-2xl p-6 bg-gray-50 hover:border-[#D4A574]/30 transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4" style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'linear-gradient(135deg, #03192A 0%, #05293D 50%, #0A4D68 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.2) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(10,77,104,0.5) 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <span className="text-[#D4A574] text-xs font-bold uppercase tracking-widest">Start Today</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4 leading-tight">
            Ready to Fish Smarter?
          </h2>
          <p className="text-white/60 mb-8 text-lg leading-relaxed">
            Download free to start — no credit card, no commitment. Upgrade to Premium inside the app whenever you're ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center gap-3 bg-white text-[#0A4D68] px-10 py-4 rounded-xl font-bold text-base transition-all shadow-2xl hover:-translate-y-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25zM17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.37.07 2.32.85 3.12.87 1.2-.24 2.34-1.03 3.63-.89 1.58.19 2.77.89 3.54 2.26-3.25 1.95-2.73 5.96.41 7.36-.57 1.28-1.31 2.54-2.7 3.28z"/>
              </svg>
              App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center gap-3 text-white px-10 py-4 rounded-xl font-bold text-base transition-all shadow-2xl hover:-translate-y-0.5 hover:shadow-[#D4A574]/30"
              style={{ background: 'linear-gradient(135deg, #D4A574, #b8854f)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l12.18-7.03-3.13-3.13L3.18 23.76zM.66 1.32A2 2 0 0 0 0 2.82v18.36c0 .61.24 1.16.66 1.5l.09.08 10.28-10.28v-.24L.75 1.24l-.09.08zM23.1 10.35 20.53 8.9l-3.22 3.22 3.22 3.22 2.58-1.46c.74-.42.74-1.1 0-1.53zM5.23.43 17.31 7.4l-3.13 3.13L5.23.43z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
