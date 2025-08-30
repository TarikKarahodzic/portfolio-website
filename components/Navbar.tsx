'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About me' },
    { href: '/projects', label: 'Projects' },
  ];

  // Header bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const desktopLink = (href: string) =>
    `text-lg transition-colors ${pathname === href
      ? 'text-primary font-semibold border-b-2 border-primary pb-1'
      : scrolled
        ? 'text-accent hover:text-primary'
        : 'text-moss hover:text-primary'
    }`;

  return (
    <nav
      className={`fixed w-full z-30 top-0 start-0 transition-colors duration-300 ${scrolled
        ? 'bg-white/85 supports-[backdrop-filter]:backdrop-blur-md ring-1 ring-black/5 shadow-sm dark:bg-gray-900/80 dark:ring-white/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <span className={`text-2xl font-semibold whitespace-nowrap ${scrolled ? 'text-white' : 'text-moss'}`}>
            My Portfolio
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center font-bold gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={desktopLink(href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          aria-label="Open menu"
          className="inline-flex md:hidden p-2 w-10 h-10 justify-center rounded-lg"
        >
          <svg
            className={`w-6 h-6 ${scrolled ? 'text-moss' : 'text-white'}`}
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ===== MOBILE DRAWER (no separate backdrop) ===== */}
      {/* ===== MOBILE DRAWER ===== */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-[100] transition-opacity duration-200
    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute right-0 top-0 h-[100svh] w-full bg-white dark:bg-gray-900
                shadow-xl will-change-transform transition-transform duration-300 ease-out
                flex flex-col
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
          {/* Header row with X */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur">
            <span className="text-xl font-semibold text-white">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2 rounded" aria-label="Close menu">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path d="M6 6l12 12M18 6l-12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Centered links WITH staggered animation */}
          <div className="flex-1 flex flex-col items-center justify-center gap-10">
            {navLinks.map(({ href, label }, i) => (
              <div
                key={href}
                className={`transform transition-all duration-500
                      ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 100}ms` }}  // <-- stagger
              >
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-semibold transition-colors ${pathname === href ? 'text-primary' : 'text-gray-800 dark:text-gray-200 hover:text-primary'
                    }`}
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom copyright */}
          <div className="pb-6 text-center text-sm text-gray-500">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Tarik Karahodzic
          </div>
        </div>
      </div>
    </nav>
  );
}
