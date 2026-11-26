'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Founders', href: '/founders' },
  { name: 'What We Do', href: '/#what-we-do' },
  { name: 'Our Stories', href: '/stories' },
  { name: 'Globetrotting', href: '/globetrotting' },
  { name: 'Team', href: '/team' },
  { name: 'Other Spaces', href: '/spaces' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-parchment-100/90 backdrop-blur-md border-b border-parchment-300 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Emblem */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-terracotta-300/60 bg-parchment-50 shadow-sm p-1 transition-transform group-hover:scale-105">
              <Image
                src="/logos/lsi.svg"
                alt="The Lingering Shadows Initiative Emblem"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-ink-900 leading-tight group-hover:text-terracotta-600 transition-colors">
                The Lingering Shadows
              </span>
              <span className="text-[11px] tracking-[0.2em] uppercase font-sans font-semibold text-terracotta-500">
                Initiative
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-all rounded-full ${
                    isActive
                      ? 'text-terracotta-600 font-semibold bg-terracotta-50'
                      : 'text-ink-700 hover:text-ink-900 hover:bg-parchment-200/70'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://chat.whatsapp.com/invite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-parchment-50 bg-terracotta-600 hover:bg-terracotta-700 active:scale-[0.98] rounded-full shadow-sm hover:shadow-soft transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Join Community</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-700 hover:text-ink-900 rounded-lg hover:bg-parchment-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-parchment-300 bg-parchment-50 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-terracotta-600 font-semibold bg-terracotta-50'
                    : 'text-ink-700 hover:text-ink-900 hover:bg-parchment-200/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-parchment-300 flex flex-col gap-2">
            <a
              href="https://chat.whatsapp.com/invite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-parchment-50 bg-terracotta-600 hover:bg-terracotta-700 rounded-xl shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Join WhatsApp Community</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-ink-800 bg-parchment-200/80 hover:bg-parchment-300 rounded-xl transition-all"
            >
              <Sparkles className="w-4 h-4 text-terracotta-500" />
              <span>Tell Us Your Story</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
