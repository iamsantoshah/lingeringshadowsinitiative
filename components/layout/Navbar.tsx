'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, MessageCircle, Clock, Shield } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '/about', num: '01' },
  { name: 'Our Stories', href: '/stories', num: '02' },
  { name: 'Team & Founders', href: '/team', num: '03' },
  { name: 'Globetrotting', href: '/globetrotting', num: '04' },
  { name: 'Other Spaces', href: '/spaces', num: '05' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const pathname = usePathname();
  const whatsappUrl =
    'https://wa.me/918860799513?text=Hello%20Lingering%20Shadows%20Initiative%2C%20I%20would%20like%20to%20connect.';

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const istTime = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setCurrentTime(istTime);
      } catch {
        setCurrentTime('02:20 IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Editorial Masthead Top Strip */}
      <div className="bg-ink-950 text-parchment-300 text-[10px] font-mono tracking-widest uppercase border-b border-ink-800/80 px-4 sm:px-6 lg:px-8 py-2 hidden md:flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-terracotta-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 animate-ping" />
            LSI TRUST • REG. 2022
          </span>
          <span className="text-ink-700">/</span>
          <span className="text-parchment-400">
            STRATEGIC CONSTITUTIONAL ADVOCACY & FRONTLINE ART
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-ink-400">
          <span className="text-parchment-300 flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-terracotta-400" />
            <span>IST: {currentTime || '02:20:00'}</span>
          </span>
          <span className="text-ink-700">/</span>
          <span className="text-ochre-400 font-bold">1,500 FAMILIES DEFENDED</span>
          <span className="text-ink-700">/</span>
          <span className="text-parchment-300">DELHI • COIMBATORE • ASSAM</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-parchment-50/92 backdrop-blur-md border-b border-parchment-300/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo and Identity */}
            <Link href="/" className="flex items-center gap-3.5 group" data-cursor="HOME">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-ink-900 bg-parchment-100 p-1 shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                <Image
                  src="/logos/lsi.svg"
                  alt="The Lingering Shadows Initiative Emblem"
                  width={42}
                  height={42}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-ink-950 leading-tight group-hover:text-terracotta-600 transition-colors">
                  The Lingering Shadows
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] tracking-[0.28em] uppercase font-mono font-bold text-terracotta-700">
                    INITIATIVE • TRUST
                  </span>
                  <span className="w-1 h-1 rounded-full bg-ink-400 hidden sm:inline" />
                  <span className="text-[9px] tracking-wider uppercase font-mono text-ink-500 hidden sm:inline">
                    EST. 2022
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    data-cursor="GOTO"
                    className={`group relative px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all rounded-md ${
                      isActive
                        ? 'text-terracotta-600 font-bold bg-parchment-200/50'
                        : 'text-ink-700 hover:text-ink-950 hover:bg-parchment-200/60'
                    }`}
                  >
                    <span className="text-[9px] text-terracotta-500 mr-1.5 opacity-60 group-hover:opacity-100 font-mono">
                      [{link.num}]
                    </span>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-terracotta-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/contact"
                data-cursor="CONTACT"
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-full border transition-all ${
                  pathname === '/contact'
                    ? 'bg-ink-950 text-parchment-50 border-ink-950 shadow-sm'
                    : 'text-ink-900 border-ink-900/30 hover:border-ink-900 hover:bg-parchment-200'
                }`}
              >
                Write to Us
              </Link>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="WHATSAPP"
                className="inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs uppercase tracking-wider text-parchment-50 bg-terracotta-600 hover:bg-terracotta-700 rounded-full shadow-sm hover:shadow-glow-terracotta transition-all active:scale-95 group"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Community</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile/Tablet Menu Button - strictly hidden on desktop (lg:hidden) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 rounded-full border border-ink-900/30 hover:border-ink-900 hover:bg-parchment-200 text-ink-950 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </header>

      {/* Fullscreen High-Contrast Parchment Mobile/Tablet Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-parchment-50/98 backdrop-blur-2xl text-ink-950 flex flex-col justify-between p-6 sm:p-10 animate-fade-in overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-parchment-300 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-ink-900 bg-parchment-100 p-0.5">
                <Image
                  src="/logos/lsi.svg"
                  alt="LSI"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base text-ink-950 leading-tight">
                  The Lingering Shadows
                </span>
                <span className="text-[9px] font-mono tracking-widest text-terracotta-700 uppercase font-bold">
                  INITIATIVE • TRUST
                </span>
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-full bg-parchment-200 hover:bg-ink-950 hover:text-parchment-50 text-ink-950 border border-ink-900/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto py-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-500 block mb-2 font-bold">
                INDEX OF SECTIONS
              </span>
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-3 py-2.5 border-b border-parchment-300 hover:border-terracotta-600 transition-colors"
                  >
                    <span className="font-mono text-xs text-terracotta-600 font-bold">[{link.num}]</span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink-950 group-hover:text-terracotta-700 transition-colors">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-terracotta-700 transition-opacity ml-auto" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Quick Actions & Credo Box */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-parchment-100 border-2 border-ink-900 shadow-brutalist space-y-6">
              <div className="space-y-3">
                <span className="archival-stamp text-terracotta-700 bg-parchment-50 border-terracotta-600 text-[10px]">
                  A TRUST • EST. 2022
                </span>
                <p className="font-serif italic text-base sm:text-lg text-ink-950 leading-relaxed">
                  &ldquo;Through LSI, we record, build, narrate and live stories… stories that are often overlooked… stories that defy social norms… stories that make us uncomfortable.&rdquo;
                </p>
                <p className="font-mono text-xs text-ink-600">
                  Founders: Adv. Ujjaini Chatterji & Adv. Mayurapriyan Thangavel
                </p>
              </div>

              <div className="pt-4 border-t border-parchment-300 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-sm font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="px-5 py-3 rounded-full border-2 border-ink-900 text-ink-950 hover:bg-ink-950 hover:text-parchment-50 font-mono text-xs uppercase tracking-wider transition-colors text-center font-bold"
                >
                  Write to Us
                </Link>
              </div>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-ink-600 border-t border-parchment-300 pt-4">
            <span className="font-bold text-terracotta-700">CHAMBER.MU AFFILIATE</span>
            <span>NEW DELHI • COIMBATORE • ASSAM</span>
          </div>
        </div>
      )}
    </>
  );
}
