import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#05293D] text-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-3">
              <img src="/logo-white.png" alt="CarpMarks" className="h-9 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your personal carp fishing companion. Track spots, log catches, and fish smarter.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#D4A574] uppercase text-xs tracking-widest">App</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Google Play
                </a>
              </li>
              <li>
                <span className="text-white/30">App Store (Coming Soon)</span>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#D4A574] uppercase text-xs tracking-widest">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="text-white/60 hover:text-white transition-colors">
                  Delete Account
                </Link>
              </li>
              <li>
                <a href="mailto:support@carpmarks.com" className="text-white/60 hover:text-white transition-colors">
                  support@carpmarks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>© 2026 CarpMarks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
