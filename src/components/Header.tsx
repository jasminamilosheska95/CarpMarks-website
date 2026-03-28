'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#05293D] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo-white.png" alt="CarpMarks" className="h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
            Home
          </Link>
          <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
            Blog
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A574] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#c49464] transition-colors"
          >
            Download App
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#04213A] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-white/80 hover:text-white transition-colors font-medium" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/blog" className="text-white/80 hover:text-white transition-colors font-medium" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A574] text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-[#c49464] transition-colors"
          >
            Download App
          </a>
        </div>
      )}
    </header>
  );
}
