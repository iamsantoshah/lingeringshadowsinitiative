'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MessageCircle, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, XIcon } from '@/components/icons/SocialIcons';

export default function Footer() {
  const whatsappUrl =
    'https://wa.me/918860799513?text=Hello%20Lingering%20Shadows%20Initiative%2C%20I%20would%20like%20to%20connect.';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-950 text-parchment-200 border-t-2 border-ink-900 relative overflow-hidden">
      
      {/* Avant-Garde Kinetic Marquee Banner */}
      <div className="border-b border-ink-800/80 py-5 overflow-hidden select-none bg-ink-900/40">
        <div className="flex whitespace-nowrap animate-marquee gap-8 items-center text-parchment-300 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight opacity-40">
          <span>THE LINGERING SHADOWS INITIATIVE</span>
          <span className="text-terracotta-500 font-sans text-sm">✦</span>
          <span className="italic font-light">WHERE SHADOWS MEET THE LIGHT</span>
          <span className="text-terracotta-500 font-sans text-sm">✦</span>
          <span>STORIES THAT DEFY SOCIAL NORMS</span>
          <span className="text-terracotta-500 font-sans text-sm">✦</span>
          <span>STRATEGIC CONSTITUTIONAL LITIGATION</span>
          <span className="text-terracotta-500 font-sans text-sm">✦</span>
          <span>THE LINGERING SHADOWS INITIATIVE</span>
          <span className="text-terracotta-500 font-sans text-sm">✦</span>
        </div>
      </div>

      {/* Main Colophon Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Editorial Pull Statement with Redaction Hover Effect */}
        <div className="border-b border-ink-800/80 pb-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <span className="archival-stamp text-terracotta-400 border-terracotta-500 bg-ink-900 text-[10px]">
                THE LSI CREED // 2022 - PRESENT
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-parchment-50 leading-tight">
                &ldquo;Every person is a best-seller with an unwritten story waiting to be{' '}
                <span className="redacted-bar text-parchment-100" title="Hover to reveal">
                  honoured & defended
                </span>
                .&rdquo;
              </h3>
            </div>
            
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={scrollToTop}
                data-cursor="TOP"
                aria-label="Scroll back to top"
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-ink-800 bg-ink-900/60 hover:bg-terracotta-600 hover:text-parchment-50 text-parchment-300 font-mono text-xs uppercase tracking-widest transition-all"
              >
                <span>Return to Summit</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Architectural Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Column 1: Brand & Collective Identity (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-parchment-300 bg-parchment-50 p-1 transition-transform group-hover:scale-105 group-hover:rotate-6">
                <Image
                  src="/logos/lsi.svg"
                  alt="The Lingering Shadows Initiative"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-parchment-50 block leading-tight group-hover:text-terracotta-400 transition-colors">
                  The Lingering Shadows
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-mono font-bold text-terracotta-400">
                  INITIATIVE • A REGISTERED TRUST
                </span>
              </div>
            </Link>

            <p className="text-parchment-300 text-sm leading-relaxed max-w-md font-sans">
              Frontline constitutional human rights collective defending refugees, stateless communities, and the marginalized through courtroom litigation, live bilingual theatre, investigative journalism, and folklore art.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/the-lingering-shadows-initiative/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ink-900 hover:bg-terracotta-600 flex items-center justify-center text-parchment-200 transition-all border border-ink-800 hover:scale-105"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thelsiproject?gwpx=dDdjejY4dnEyNm04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ink-900 hover:bg-terracotta-600 flex items-center justify-center text-parchment-200 transition-all border border-ink-800 hover:scale-105"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/thelsiproject?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ink-900 hover:bg-terracotta-600 flex items-center justify-center text-parchment-200 transition-all border border-ink-800 hover:scale-105"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ink-900 hover:bg-terracotta-600 flex items-center justify-center text-parchment-200 transition-all border border-ink-800 hover:scale-105"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Index Registry (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-parchment-400 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
              <span>COLLECTION INDEX</span>
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/about" className="text-parchment-300 hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-terracotta-500">[01]</span>
                  <span>About Us & Mandate</span>
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-parchment-300 hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-terracotta-500">[02]</span>
                  <span>Stories & Case Docket</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-parchment-300 hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-terracotta-500">[03]</span>
                  <span>Team, Founders & Art</span>
                </Link>
              </li>
              <li>
                <Link href="/globetrotting" className="text-parchment-300 hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-terracotta-500">[04]</span>
                  <span>Globetrotting Travelogue</span>
                </Link>
              </li>
              <li>
                <Link href="/spaces" className="text-parchment-300 hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-terracotta-500">[05]</span>
                  <span>Our Other Spaces</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-parchment-300 hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-terracotta-500">[06]</span>
                  <span>Write to Us Directly</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Registries & Official Bureau (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-parchment-400 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
              <span>OFFICIAL REGISTRY & DESK</span>
            </h4>

            <div className="space-y-3 font-mono text-xs text-parchment-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Registered Trust Office: Door No. 24, ST-6 (Chitra Nagar), Narasimhanaickenpalayam, Coimbatore, Tamil Nadu - 641017
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>+91 88607 99513</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>lingeringshadowsinitiative@gmail.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-mono text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join Official WhatsApp Channel</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Strip with Coordinates */}
        <div className="mt-16 pt-8 border-t border-ink-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-parchment-400">
          <div>
            © {new Date().getFullYear()} The Lingering Shadows Initiative — A Registered Trust.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <span>DELHI 28°36′N 77°12′E</span>
            <span>•</span>
            <span>COIMBATORE 11°00′N 76°57′E</span>
            <span>•</span>
            <span>ASSAM 26°12′N 92°56′E</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
