import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

const features = [
  {
    title: 'Save Fishing Spots',
    description: 'Pin any location on an interactive map with photos and notes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    color: 'from-[#0A4D68] to-[#0d6b91]',
  },
  {
    title: 'Log Your Catches',
    description: 'Record every catch with species, weight, bait, rig, and photos. Build your personal fishing history.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
        <path d="m15 5 4 4"/>
      </svg>
    ),
    color: 'from-[#D4A574] to-[#b8854f]',
  },
  {
    title: 'Real-Time Conditions',
    description: 'Weather, pressure trends, wind direction, and moon phase data for any water.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    color: 'from-[#0A4D68] to-[#1a7a9c]',
  },
  {
    title: 'Smart Notifications',
    description: 'Get alerted when conditions are perfect at your saved spots or when there are nearby catches — never miss a window.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        <path d="M2 8c0-2.2.7-4.3 2-6"/>
        <path d="M22 8a10 10 0 0 0-2-6"/>
      </svg>
    ),
    color: 'from-[#D4A574] to-[#c49464]',
  },
  {
    title: 'CarpMarks AI',
    description: 'Get AI-powered insights on the best spots, conditions, and tactics based on your personal catch data.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H3a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2M7.5 13a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 7.5 16 1.5 1.5 0 0 0 9 14.5 1.5 1.5 0 0 0 7.5 13m9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 16.5 13M3 17h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2z"/>
      </svg>
    ),
    color: 'from-[#0A4D68] to-[#083d54]',
  },
  {
    title: 'Fish Scanner',
    description: 'Take or upload a photo for instant AI carp species identification. Great for unfamiliar waters.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="13" height="10" rx="1.5"/>
        <path d="M4 11l2.5-3.5 2.5 3"/>
        <path d="M7.5 10.5l2-2.5 2.5 3.5"/>
        <circle cx="17.5" cy="17.5" r="3.5"/>
        <line x1="20" y1="20" x2="22.5" y2="22.5"/>
      </svg>
    ),
    color: 'from-[#D4A574] to-[#c49464]',
  },
  {
    title: 'Track Your Stats',
    description: 'Personal bests, catch history, and live conditions at your saved spots — all in one place.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
        <path d="M2 20h20"/>
      </svg>
    ),
    color: 'from-[#D4A574] to-[#a8753e]',
  },
];

const stats = [
  { value: '5,000+', label: 'Catches Logged', icon: '🎣' },
  { value: '3,000+', label: 'Spots Saved', icon: '📍' },
  { value: '5★', label: 'App Rating', icon: '⭐' },
  { value: 'Free', label: 'on Android', icon: '📱' },
];

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#03192A] via-[#05293D] to-[#0A4D68] text-white relative overflow-hidden" style={{ paddingTop: '7rem', paddingBottom: '6rem' }}>

        {/* Dot grid texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

        {/* Floating orbs */}
        <div className="absolute top-16 left-12 w-80 h-80 rounded-full blur-3xl animate-float-slow pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.15) 0%, transparent 70%)' }} />
        <div className="absolute bottom-24 right-8 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(10,77,104,0.4) 0%, transparent 70%)', animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-2xl animate-float pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', animationDelay: '6s' }} />

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 border border-[#D4A574]/40 text-[#D4A574] px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-widest uppercase" style={{ background: 'rgba(212,165,116,0.12)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] animate-pulse" />
              Free to Start on Android
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight animate-fade-in-up delay-150">
            Fish Smarter.<br className="hidden sm:block" />
            <span className="text-[#D4A574]"> Catch More.</span>
          </h1>

          <p className="text-xl text-white/65 max-w-2xl mx-auto mt-6 mb-10 leading-relaxed animate-fade-in-up delay-300">
            CarpMarks is the carp fishing companion that tracks your spots, logs your catches, and reveals patterns that improve your sessions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Link
              href="/download"
              className="btn-shimmer bg-white text-[#0A4D68] px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Download on Google Play →
            </Link>
            <Link
              href="/blog"
              className="btn-shimmer border border-white/25 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              Read the Blog
            </Link>
          </div>
        </div>

        {/* Animated wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ height: '64px' }}>
          <svg className="hero-wave" viewBox="0 0 2880 64" preserveAspectRatio="none" style={{ height: '64px' }}>
            <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 C1680,64 1920,0 2160,32 C2400,64 2640,0 2880,32 L2880,64 L0,64 Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────────────────── */}
      <section className="bg-[#0A4D68] px-4 relative z-10" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center px-4 animate-count-in" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-[#D4A574] font-black text-2xl md:text-3xl leading-none tracking-tight">{s.value}</div>
              <div className="text-white/50 text-[11px] mt-1.5 tracking-wide uppercase font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────── */}
      <section className="bg-gray-50 px-4" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#D4A574] text-xs font-bold uppercase tracking-widest">The App</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mt-3 mb-4 leading-tight">
              Everything You Need on the Bank
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Every tool a serious carp angler needs, in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="feature-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#D4A574]/30 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`feature-icon w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white bg-gradient-to-br ${feature.color} shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#0A4D68] transition-colors">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ───────────────────────────────────────────────── */}
      {latestPosts.length > 0 && (
        <section className="bg-gray-50 px-4 relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>

          {/* Background accent */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(212,165,116,0.4), transparent)' }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[#D4A574] text-xs font-bold uppercase tracking-widest">From the Blog</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mt-3 leading-tight">Latest Articles</h2>
                <p className="text-gray-500 mt-2 text-base">Tactics, gear reviews, and carp fishing knowledge</p>
              </div>
              <Link
                href="/blog"
                className="text-[#0A4D68] font-semibold hover:text-[#D4A574] transition-colors hidden sm:inline-flex items-center gap-1 text-sm"
              >
                View all
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {latestPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Top colour accent */}
                  <div className="h-1 w-full" style={{ background: 'linear-gradient(to right, #0A4D68, #D4A574)' }} />

                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[10px] font-bold text-[#D4A574] uppercase tracking-widest mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 mb-3 group-hover:text-[#0A4D68] transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-gray-400 pt-3 border-t border-gray-100">
                      <span>{post.date}</span>
                      <span className="text-[#0A4D68] font-semibold group-hover:text-[#D4A574] transition-colors flex items-center gap-1">
                        Read
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <Link href="/blog" className="text-[#0A4D68] font-semibold hover:underline text-sm">
                View all posts →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Download CTA ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4" style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'linear-gradient(135deg, #03192A 0%, #05293D 50%, #0A4D68 100%)' }}>

        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ transform: 'rotate(180deg)', height: '40px' }}>
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ width: '100%', height: '40px' }}>
            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1350,10 1440,20 L1440,40 L0,40 Z" fill="#f9fafb"/>
          </svg>
        </div>

        {/* Orbs */}
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
            Download CarpMarks free to start on Android. Build your spot database, track your catches, and start seeing patterns that put more fish on the bank.
          </p>
          <Link
            href="/download"
            className="btn-shimmer inline-flex items-center gap-3 text-white px-10 py-4 rounded-xl font-bold text-base transition-all shadow-2xl hover:-translate-y-0.5 hover:shadow-[#D4A574]/30"
            style={{ background: 'linear-gradient(135deg, #D4A574, #b8854f)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.37.07 2.32.85 3.12.87 1.2-.24 2.34-1.03 3.63-.89 1.58.19 2.77.89 3.54 2.26-3.25 1.95-2.73 5.96.41 7.36-.57 1.28-1.31 2.54-2.7 3.28zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Download Free on Google Play
          </Link>
          <p className="text-white/30 text-xs mt-4">iOS coming soon</p>
        </div>
      </section>
    </>
  );
}
