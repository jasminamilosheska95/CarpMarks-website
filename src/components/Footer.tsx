import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#05293D] text-white pt-14 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img src="/logo-white.png" alt="CarpMarks" className="h-11 w-auto" />
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Your personal carp fishing companion. Track spots, log catches, and fish smarter with data that actually improves your results.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.37.07 2.32.85 3.12.87 1.2-.24 2.34-1.03 3.63-.89 1.58.19 2.77.89 3.54 2.26-3.25 1.95-2.73 5.96.41 7.36-.57 1.28-1.31 2.54-2.7 3.28zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Google Play
            </a>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-semibold mb-4 text-[#D4A574] uppercase text-[10px] tracking-widest">Navigate</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/gear" className="text-white/60 hover:text-white transition-colors">Gear Guide</Link></li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Download App
                </a>
              </li>
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
          <p className="text-center sm:text-right">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
