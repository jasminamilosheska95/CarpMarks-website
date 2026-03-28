'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gear', href: '/gear' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05293D]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.35)]'
          : 'bg-[#05293D] shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 group">
          <img
            src="/logo-white.png"
            alt="CarpMarks"
            className="h-14 w-auto transition-opacity duration-200 group-hover:opacity-90"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(({ label, href }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  active
                    ? 'text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/8'
                }`}
              >
                {label}
                {active && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#D4A574] rounded-full" />
                )}
              </Link>
            );
          })}

          <a
            href="https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 btn-shimmer inline-flex items-center gap-2 bg-[#D4A574] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#c49464] active:scale-95 transition-all duration-150 shadow-md shadow-[#D4A574]/20"
          >
            {/* Google Play icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l12.18-7.03-3.13-3.13L3.18 23.76zM.66 1.32A2 2 0 0 0 0 2.82v18.36c0 .61.24 1.16.66 1.5l.09.08 10.28-10.28v-.24L.75 1.24l-.09.08zM23.1 10.35 20.53 8.9l-3.22 3.22 3.22 3.22 2.58-1.46c.74-.42.74-1.1 0-1.53zM5.23.43 17.31 7.4l-3.13 3.13L5.23.43z"/>
            </svg>
            Download App
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`absolute block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`absolute block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
            }`}
          />
        </button>
      </div>

      {/* Mobile menu — animate-slide-down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#04213A] border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {NAV.map(({ label, href }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                  active
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/8'
                }`}
              >
                {active && <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />}
                {label}
              </Link>
            );
          })}

          <a
            href="https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-[#D4A574] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#c49464] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l12.18-7.03-3.13-3.13L3.18 23.76zM.66 1.32A2 2 0 0 0 0 2.82v18.36c0 .61.24 1.16.66 1.5l.09.08 10.28-10.28v-.24L.75 1.24l-.09.08zM23.1 10.35 20.53 8.9l-3.22 3.22 3.22 3.22 2.58-1.46c.74-.42.74-1.1 0-1.53zM5.23.43 17.31 7.4l-3.13 3.13L5.23.43z"/>
            </svg>
            Download App
          </a>
        </div>
      </div>
    </header>
  );
}
