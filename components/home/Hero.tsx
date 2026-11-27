'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Sparkles, Scale, BookOpen, Compass, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Hero() {
  const whatsappUrl =
    'https://wa.me/918860799513?text=Hello%20Lingering%20Shadows%20Initiative%2C%20I%20would%20like%20to%20join%20the%20community.';

  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-32 bg-parchment-100 parchment-pattern border-b border-parchment-300">
      {/* Dynamic Chiaroscuro Atmospheric Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-gradient-to-tr from-terracotta-500/12 via-ochre-400/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[350px] bg-gradient-to-bl from-sage-500/8 via-parchment-300/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Archival Header Ledger */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-900/15 pb-4 mb-10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="archival-stamp text-terracotta-700 bg-parchment-50 border-terracotta-600">
              TRUST REGISTER // EST. 2022
            </span>
            <span className="hidden sm:inline text-ink-400">•</span>
            <span className="hidden sm:inline text-ink-700 font-bold uppercase tracking-wider">
              NEW DELHI • COIMBATORE • ASSAM
            </span>
          </div>

          <div className="flex items-center gap-3 text-ink-700">
            <span className="flex items-center gap-1.5 font-bold text-terracotta-700">
              <span className="w-2 h-2 rounded-full bg-terracotta-600 animate-pulse" />
              1,500 FAMILIES DEFENDED
            </span>
            <span className="hidden md:inline text-ink-400">•</span>
            <span className="hidden md:inline text-ink-600">
              CHAMBER.MU STRATEGIC LITIGATION
            </span>
          </div>
        </div>

        {/* Asymmetrical High-Craft Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Monumental Typographic Broadside (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-terracotta-600" />
                <span className="font-mono text-xs uppercase tracking-monumental text-terracotta-700 font-bold">
                  THE LINGERING SHADOWS INITIATIVE
                </span>
              </div>
              
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight text-ink-950 leading-[0.94]">
                Where the lingering <br />
                <span className="font-serif italic font-light text-terracotta-700 tracking-normal inline-block relative pr-2">
                  shadows
                  <span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-terracotta-400/40 rounded-full" />
                </span>{' '}
                meet the light.
              </h1>
            </div>

            {/* Subheading from document */}
            <p className="text-ink-800 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl font-sans text-pretty">
              A frontline program to amplify the voices of disenfranchised and marginalised social groups through <strong className="text-ink-950 font-bold">litigation within courtrooms</strong>, and through <strong className="text-ink-950 font-bold">reporting, advocacy, art, storytelling, theatre and films</strong> outside the courtrooms.
            </p>

            {/* Primary Action Suite */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="JOIN"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-mono text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-glow-terracotta active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join our Community!</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="#what-we-do"
                data-cursor="EXPLORE"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-parchment-50 hover:bg-parchment-200 text-ink-950 border border-ink-900/40 font-mono text-xs uppercase tracking-wider transition-all shadow-sm group"
              >
                <span>Explore Four Realms</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                data-cursor="READ"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full text-sage-800 hover:bg-sage-100/70 font-mono text-xs uppercase tracking-wider transition-all"
              >
                <span>About LSI</span>
              </Link>
            </div>

            {/* Three Distinct Pillars Micro-Ledger */}
            <div className="pt-6 border-t border-ink-900/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-ink-700">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-parchment-50/70 border border-parchment-300">
                <Scale className="w-4 h-4 text-terracotta-600 shrink-0" />
                <span className="font-bold">Courtroom Litigation</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-parchment-50/70 border border-parchment-300">
                <BookOpen className="w-4 h-4 text-sage-700 shrink-0" />
                <span className="font-bold">Ground Journalism</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-parchment-50/70 border border-parchment-300">
                <Sparkles className="w-4 h-4 text-ochre-600 shrink-0" />
                <span className="font-bold">Theatre & Visual Art</span>
              </div>
            </div>

          </div>

          {/* Right Column: Tactile Archival Case Docket (Cols 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-parchment-50 border-2 border-ink-900 p-7 shadow-brutalist transition-transform duration-500 hover:-translate-y-1.5 group">
              
              {/* Corner Metadata Badges */}
              <div className="flex items-center justify-between border-b border-parchment-300 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-terracotta-600" />
                  <span className="font-mono text-xs uppercase font-bold text-ink-950">
                    CENTRAL DOSSIER // LSI-01
                  </span>
                </div>
                <span className="font-mono text-[10px] text-terracotta-700 font-bold uppercase tracking-wider bg-terracotta-50 px-2 py-0.5 rounded border border-terracotta-200">
                  CONFIDENTIAL ARCHIVE
                </span>
              </div>

              {/* Central Emblem Frame with Chiaroscuro Texture */}
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-b from-parchment-100 to-parchment-200/90 border border-parchment-300 p-6 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#141113_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1">
                  <Image
                    src="/logos/lsi.svg"
                    alt="The Lingering Shadows Initiative Emblem"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Case Docket Highlights in Hero */}
              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-parchment-100 border border-parchment-300 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-ink-500 uppercase tracking-widest">
                    <span>KEY FORUMS</span>
                    <span className="text-terracotta-700 font-bold">ACTIVE BENCHES</span>
                  </div>
                  <div className="font-serif text-sm font-bold text-ink-950">
                    Supreme Court of India & High Courts
                  </div>
                  <p className="text-[11px] text-ink-600 font-sans leading-tight">
                    Sabera Khatoon v. Union of India • CAA Constitutional Challenge • Detention Centre Habeas Petitions
                  </p>
                </div>

                {/* Pull Quote */}
                <div className="border-l-2 border-terracotta-600 pl-3 py-1 font-serif italic text-sm text-ink-800">
                  &ldquo;Stories that defy social norms… stories that make us uncomfortable.&rdquo;
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-parchment-300 text-[10px] text-ink-500 uppercase tracking-wider">
                  <span>FOUNDERS: UJJAINI & MAYURA</span>
                  <Link
                    href="/team"
                    className="text-terracotta-700 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>MEET THE TEAM</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
