import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#05293D] text-white pt-14 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img src="/logo-white.png" alt="CarpMarks – Free Carp Fishing App for iOS & Android" className="h-11 w-auto" />
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Your personal carp fishing companion. Track spots, log catches, and fish smarter with data that actually improves your results.
            </p>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Free — iOS &amp; Android
            </Link>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/profile.php?id=61588402812391"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] border border-white/10 hover:border-[#1877F2] flex items-center justify-center transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/carpmarksapp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:via-[#dc2743] hover:via-[#cc2366] hover:to-[#bc1888] border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@carpmarks2026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-black border border-white/10 hover:border-black flex items-center justify-center transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.88a8.16 8.16 0 004.77 1.52V7a4.85 4.85 0 01-1-.31z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-semibold mb-4 text-[#D4A574] uppercase text-[10px] tracking-widest">Navigate</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/gear" className="text-white/60 hover:text-white transition-colors">Gear Guide</Link></li>
              <li><Link href="/download" className="text-white/60 hover:text-white transition-colors">Download App</Link></li>
            </ul>
          </div>

          {/* Top Gear */}
          <div>
            <h3 className="font-semibold mb-4 text-[#D4A574] uppercase text-[10px] tracking-widest">Top Gear</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/gear#rods-reels" className="text-white/60 hover:text-white transition-colors">Rods &amp; Reels</Link></li>
              <li><Link href="/gear#bite-alarms" className="text-white/60 hover:text-white transition-colors">Bite Alarms</Link></li>
              <li><Link href="/gear#bivvies-shelter" className="text-white/60 hover:text-white transition-colors">Bivvies &amp; Shelter</Link></li>
              <li><Link href="/gear#bait" className="text-white/60 hover:text-white transition-colors">Bait</Link></li>
              <li><Link href="/gear#terminal-tackle" className="text-white/60 hover:text-white transition-colors">Terminal Tackle</Link></li>
              <li><Link href="/gear#accessories" className="text-white/60 hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-[#D4A574] uppercase text-[10px] tracking-widest">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/delete-account" className="text-white/60 hover:text-white transition-colors">Delete Account</Link></li>
              <li>
                <a href="mailto:support@carpmarks.com" className="text-white/60 hover:text-white transition-colors">
                  support@carpmarks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© 2026 CarpMarks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
