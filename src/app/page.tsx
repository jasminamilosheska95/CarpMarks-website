import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

const features = [
  {
    icon: '📍',
    title: 'Save Fishing Spots',
    description: 'Mark your favorite locations on an interactive map with photos and notes.',
  },
  {
    icon: '🐟',
    title: 'Log Your Catches',
    description: 'Record species, weight, bait used, and photos for every catch.',
  },
  {
    icon: '🌤️',
    title: 'Real-Time Conditions',
    description: 'Get weather, pressure trends, wind direction, and moon phase data.',
  },
  {
    icon: '🔔',
    title: 'Smart Notifications',
    description: 'Receive alerts when conditions are perfect at your saved spots.',
  },
  {
    icon: '🎣',
    title: 'Bait Recommendations',
    description: 'Science-based bait suggestions based on water temperature and conditions.',
  },
  {
    icon: '📊',
    title: 'Track Your Stats',
    description: 'View your personal best, total catches, and fishing history.',
  },
];

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#05293D] to-[#0A4D68] text-white py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#D4A574] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-8 tracking-wide">
            Available on Android
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            CarpMarks
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your personal carp fishing companion. Track spots, log catches, and fish smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0A4D68] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get it on Google Play →
            </a>
            <span className="bg-white/10 border border-white/20 text-white/40 px-8 py-4 rounded-xl font-bold text-lg cursor-not-allowed select-none">
              App Store (Coming Soon)
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mb-4">
              Everything You Need on the Bank
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              CarpMarks gives you all the tools to plan better sessions and catch more fish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#0A4D68] mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-[#0A4D68]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Fish Smarter?</h2>
          <p className="text-white/70 mb-8 text-lg">Download CarpMarks now on Android. iOS coming soon.</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4A574] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#c49464] transition-colors shadow-xl"
          >
            Download on Google Play
          </a>
        </div>
      </section>

      {/* Blog Preview */}
      {latestPosts.length > 0 && (
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68]">From the Blog</h2>
                <p className="text-gray-500 mt-2">Tips, gear reviews, and carp fishing insights</p>
              </div>
              <Link
                href="/blog"
                className="text-[#0A4D68] font-semibold hover:underline hidden sm:inline-block"
              >
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
                >
                  <div className="p-6">
                    <span className="text-xs font-bold text-[#D4A574] uppercase tracking-widest">
                      {post.category}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#0A4D68] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <Link href="/blog" className="text-[#0A4D68] font-semibold hover:underline">
                View all posts →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
