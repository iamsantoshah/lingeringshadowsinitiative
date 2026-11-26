'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Feather, Sparkles, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-parchment-100 parchment-texture">
      {/* Decorative whimsical atmospheric orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-terracotta-200/40 via-ochre-100/30 to-sage-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-12 -right-12 w-96 h-96 bg-sage-200/25 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Whimsical Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-parchment-50 border border-terracotta-200/70 shadow-sm text-terracotta-700 text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4 text-terracotta-500 animate-pulse" />
              <span>Where Shadows Meet the Light</span>
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400" />
              <span className="font-serif italic text-ink-600">The Eccentric Soul of Chamber MU</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight leading-[1.12]">
              Stories that defy norms. <br />
              <span className="text-terracotta-600 italic font-normal">Litigation</span> that reclaims humanity.
            </h1>

            {/* Subheading */}
            <p className="text-ink-700 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A program to amplify the voices of disenfranchised and marginalised social groups
              through constitutional litigation within courtrooms—and through reporting, advocacy,
              art, theatre, films, and storytelling outside them.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#what-we-do"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-semibold text-sm tracking-wide shadow-md hover:shadow-glow transition-all active:scale-[0.98]"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://chat.whatsapp.com/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-parchment-50 hover:bg-parchment-200 text-ink-800 border border-parchment-300 font-medium text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-terracotta-600" />
                <span>Join WhatsApp Community</span>
              </a>

              <Link
                href="/globetrotting"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sage-700 hover:bg-sage-100/60 font-medium text-sm transition-all"
              >
                <Compass className="w-4 h-4 text-sage-600" />
                <span>Travel Dispatches</span>
              </Link>
            </div>

            {/* Micro quote / ethos */}
            <div className="pt-6 border-t border-parchment-300/80 flex items-center justify-center lg:justify-start gap-3 text-xs text-ink-500 font-serif italic">
              <Feather className="w-4 h-4 text-terracotta-500 shrink-0" />
              <span>&ldquo;Every person is a best seller. We are all characters trying to tell our unique stories.&rdquo;</span>
            </div>
          </div>

          {/* Hero Emblem & Illustration Art */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-[36px] bg-gradient-to-br from-parchment-50 to-parchment-200 p-6 sm:p-8 postcard-border shadow-postcard">
              
              {/* Outer decorative stamp corner tabs */}
              <div className="absolute -top-3 -left-3 px-3 py-1 bg-sage-500 text-parchment-50 rounded-full text-[10px] uppercase font-bold tracking-widest shadow-sm">
                Est. 2022
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-terracotta-600 text-parchment-50 rounded-full text-[10px] uppercase font-bold tracking-widest shadow-sm">
                Pro-Bono Initiative
              </div>

              {/* LSI Central Emblem */}
              <div className="w-full h-full rounded-[24px] bg-parchment-50 border border-parchment-300/80 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative group">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/logos/lsi.svg"
                    alt="The Lingering Shadows Initiative Emblem"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="mt-4 space-y-1">
                  <h2 className="font-serif text-lg font-bold text-ink-900 tracking-wide">
                    Lingering Shadows Initiative
                  </h2>
                  <p className="text-xs text-ink-500 tracking-widest uppercase font-medium">
                    Advocacy • Art • Theatre • Stories
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
