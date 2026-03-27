'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function to lock body scroll when menu is open
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">
      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

        {/* Brand Logo */}
        <div className="flex-shrink-0 z-50">
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="TA Futures Logo"
              width={640}
              height={160}
              className="h-14 md:h-16 w-auto object-contain dark:hidden transition-all"
              priority
              quality={100}
            />
            <Image
              src="/logo-dark.png"
              alt="TA Futures Logo Dark"
              width={640}
              height={160}
              className="h-14 md:h-16 w-auto object-contain hidden dark:block transition-all"
              priority
              quality={100}
            />
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/markets" className="text-sm font-bold hover:text-brand dark:hover:text-brand transition-colors">Markets</Link>
          <Link href="/platforms" className="text-sm font-bold hover:text-brand dark:hover:text-brand transition-colors">Platforms</Link>
          <Link href="/academy" className="text-sm font-bold hover:text-brand dark:hover:text-brand transition-colors">Academy</Link>
          <Link href="/about-us" className="text-sm font-bold hover:text-brand dark:hover:text-brand transition-colors">About Us</Link>
        </nav>

        {/* Desktop Call to Action Buttons & Theme */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <a href="https://estatement.taonline.com.my/" target="_blank" rel="noopener noreferrer" className="bg-brand hover:bg-brand-light text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-brand/20">
            Statement Log In
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center space-x-4 z-50">
          <ThemeToggle />
          <button
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-slate-950 flex flex-col pt-24 px-6 md:hidden overflow-y-auto pb-10">
          <nav className="flex flex-col space-y-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
            <Link href="/markets" onClick={toggleMobileMenu} className="hover:text-brand transition-colors border-b border-slate-200 dark:border-slate-800 pb-4">Markets</Link>
            <Link href="/platforms" onClick={toggleMobileMenu} className="hover:text-brand transition-colors border-b border-slate-200 dark:border-slate-800 pb-4">Platforms</Link>
            <Link href="/academy" onClick={toggleMobileMenu} className="hover:text-brand transition-colors border-b border-slate-200 dark:border-slate-800 pb-4">Academy</Link>
            <Link href="/about-us" onClick={toggleMobileMenu} className="hover:text-brand transition-colors border-b border-slate-200 dark:border-slate-800 pb-4">About Us</Link>
          </nav>

          <div className="mt-12 flex flex-col space-y-4">
            <Link href="/#open-account" onClick={toggleMobileMenu} className="w-full text-center border-2 border-brand text-brand px-5 py-4 rounded-xl text-lg font-bold transition-all hover:bg-brand hover:text-white block">
              Open an Account
            </Link>
            <a href="https://estatement.taonline.com.my/" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-brand hover:bg-brand-light text-white px-5 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-brand/20 block">
              Statement Log In
            </a>
          </div>

          <div className="mt-auto pt-12 text-center text-slate-500 text-sm">
            <p>Support: +603 2072 1277</p>
          </div>
        </div>
      )}
    </header>
  );
}