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
    description: 'Weather, pressure trends, wind direction, and moon phase data for any water — plus a 5-day forecast so you can plan your sessions in advance.',
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
    description: 'Get alerted when conditions are perfect at your spots, when other anglers catch fish nearby, and receive a morning digest every day to start your session right.',
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
    description: 'Chat with an AI that knows your full catch history. Discover your patterns, plan your next session around the best conditions, and get personalised bait recommendations.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
      </svg>
    ),
    color: 'from-[#0A4D68] to-[#083d54]',
  },
  {
    title: 'Fish Scanner',
    description: 'Take or upload a photo for instant AI carp species identification. Great for unfamiliar waters.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5,2C18,2 20,4 20,6.5C20,7.38 19.75,8.21 19.31,8.9L22.39,12L21,13.39L17.88,10.32C17.19,10.75 16.37,11 15.5,11C13,11 11,9 11,6.5C11,4 13,2 15.5,2M15.5,4A2.5,2.5 0 0,0 13,6.5A2.5,2.5 0 0,0 15.5,9A2.5,2.5 0 0,0 18,6.5A2.5,2.5 0 0,0 15.5,4M7.5,14.5L4,19H18L13.5,13L10,17.5L7.5,14.5M20,20A2,2 0 0,1 18,22H4A2,2 0 0,1 2,20V6A2,2 0 0,1 4,4H9.5C9.18,4.77 9,5.61 9,6.5A6.5,6.5 0 0,0 15.5,13C16.18,13 16.84,12.89 17.46,12.7L20,15.24V20Z"/>
      </svg>
    ),
    color: 'from-[#D4A574] to-[#c49464]',
  },
  {
    title: 'Community & Leaderboard',
    description: 'Share your best catches, see what other anglers are landing this week, and compete on the global leaderboard.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    color: 'from-[#0A4D68] to-[#0d6b91]',
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
  {
    title: 'Session Planner & Pattern Analytics',
    description: 'Which bait, rig and time of day catches most at your waters? Turn up knowing where to fish, what to use, and why — every single session.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3H18V1M10.88 12H7.27L10.19 14.11L9.08 17.56L12 15.43L14.92 17.56L13.8 14.12L16.72 12H13.12L12 8.56L10.88 12Z"/>
      </svg>
    ),
    color: 'from-[#0A4D68] to-[#0d6b91]',
  },
];

const stats = [
  { value: '5,000+', label: 'Catches Logged', icon: '🎣' },
  { value: '3,000+', label: 'Spots Saved', icon: '📍' },
  { value: '5★', label: 'App Rating', icon: '⭐' },
  { value: 'Free', label: 'iOS & Android', icon: '📱' },
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
              Free on iOS &amp; Android
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
              className="btn-shimmer bg-white text-[#0A4D68] px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25zM17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.37.07 2.32.85 3.12.87 1.2-.24 2.34-1.03 3.63-.89 1.58.19 2.77.89 3.54 2.26-3.25 1.95-2.73 5.96.41 7.36-.57 1.28-1.31 2.54-2.7 3.28z"/>
              </svg>
              App Store
            </Link>
            <Link
              href="/download"
              className="btn-shimmer border border-white/25 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l12.18-7.03-3.13-3.13L3.18 23.76zM.66 1.32A2 2 0 0 0 0 2.82v18.36c0 .61.24 1.16.66 1.5l.09.08 10.28-10.28v-.24L.75 1.24l-.09.08zM23.1 10.35 20.53 8.9l-3.22 3.22 3.22 3.22 2.58-1.46c.74-.42.74-1.1 0-1.53zM5.23.43 17.31 7.4l-3.13 3.13L5.23.43z"/>
              </svg>
              Google Play
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

      {/* ── App Preview Video ──────────────────────────────────────────── */}
      <section className="bg-white px-4" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#D4A574] text-xs font-bold uppercase tracking-widest">See It In Action</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mt-3 mb-4 leading-tight">
              Your Fishing Companion, In Your Pocket
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              From marking a spot to logging a personal best, CarpMarks keeps everything a tap away on the bank.
            </p>
            <Link
              href="/download"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-[#0A4D68] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#083d54] transition-all shadow-lg hover:-translate-y-0.5"
            >
              Get the App
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="flex justify-center">
            <div
              className="rounded-[2rem] p-2 shadow-2xl"
              style={{ background: 'linear-gradient(160deg, #0A4D68, #03192A)' }}
            >
              <video
                className="rounded-[1.5rem]"
                style={{ width: '280px', aspectRatio: '9 / 16', objectFit: 'cover' }}
                src="/app-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          </div>
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
            Download CarpMarks free on iOS and Android. Build your spot database, track your catches, and start seeing patterns that put more fish on the bank.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="btn-shimmer inline-flex items-center justify-center gap-3 bg-white text-[#0A4D68] px-10 py-4 rounded-xl font-bold text-base transition-all shadow-2xl hover:-translate-y-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25zM17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.37.07 2.32.85 3.12.87 1.2-.24 2.34-1.03 3.63-.89 1.58.19 2.77.89 3.54 2.26-3.25 1.95-2.73 5.96.41 7.36-.57 1.28-1.31 2.54-2.7 3.28z"/>
              </svg>
              App Store
            </Link>
            <Link
              href="/download"
              className="btn-shimmer inline-flex items-center justify-center gap-3 text-white px-10 py-4 rounded-xl font-bold text-base transition-all shadow-2xl hover:-translate-y-0.5 hover:shadow-[#D4A574]/30"
              style={{ background: 'linear-gradient(135deg, #D4A574, #b8854f)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l12.18-7.03-3.13-3.13L3.18 23.76zM.66 1.32A2 2 0 0 0 0 2.82v18.36c0 .61.24 1.16.66 1.5l.09.08 10.28-10.28v-.24L.75 1.24l-.09.08zM23.1 10.35 20.53 8.9l-3.22 3.22 3.22 3.22 2.58-1.46c.74-.42.74-1.1 0-1.53zM5.23.43 17.31 7.4l-3.13 3.13L5.23.43z"/>
              </svg>
              Google Play
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
