'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Scale, Feather, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function EssenceSection() {
  return (
    <section className="py-20 lg:py-32 bg-parchment-50 border-b border-parchment-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subheader */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-900/15 pb-5 mb-14">
          <div className="flex items-center gap-3">
            <span className="archival-stamp text-ink-950 border-ink-900 bg-parchment-100">
              INTRODUCTION // THE ECCENTRIC SOUL
            </span>
            <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-ink-500">
              CHAMBER.MU AFFILIATE
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-terracotta-700 font-bold">
            COIMBATORE • NEW DELHI • ASSAM
          </span>
        </div>

        {/* 2-Column Asymmetrical Broadsheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Text from Document (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-monumental text-terracotta-600 font-bold block">
                FEVER DREAM OF A LITIGATING LAWYER
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-950 leading-tight">
                The eccentric soul of Chamber.MU.
              </h2>
            </div>

            <div className="space-y-5 text-ink-800 text-base sm:text-lg leading-relaxed pt-1">
              <p className="drop-cap">
                The Lingering Shadows Initiative (LSI) is the eccentric soul of Chamber.MU - a law firm dedicated to feminist strategic human rights lawyering. It is the fever dream of a litigating lawyer who nurtures various other interests and pursuits.
              </p>
              
              <p>
                In fact LSI believes that the law and its practice is truly possible only when a lawyer nourishes themselves with the various stories that lie scattered across the world. This passion for lawyering strengthens our pursuit of travel and to collect stories on our journeys.
              </p>

              <blockquote className="my-6 p-6 rounded-2xl bg-parchment-100/90 border-l-4 border-terracotta-600 font-serif italic text-lg sm:text-xl text-ink-950 leading-relaxed shadow-sm">
                &ldquo;Through LSI, we record, build, narrate and live stories… stories that are often overlooked… stories that defy social norms… stories that make us uncomfortable.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-ink-700 font-sans leading-relaxed">
                What started off as an academic endeavour has blossomed into a pro-bono litigation program that extends legal and paralegal support to the nameless, stateless persons living on the fringes of bustling cities; battling for mere survival from the margins of civil societies, and lingering in the shadows of tall rights of freedom and liberty asking to be counted, recognised and treated as humans.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                data-cursor="ABOUT"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta-700 hover:text-terracotta-900 font-bold group"
              >
                <span className="border-b border-terracotta-600 pb-0.5">Read Full About Us & Objectives</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column: Architectural Field Reality Dossier (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-parchment-100 border-2 border-ink-900 p-8 sm:p-9 shadow-brutalist space-y-6">
              
              <div className="flex items-center justify-between border-b border-parchment-300 pb-4">
                <span className="font-mono text-xs uppercase font-bold text-terracotta-700 tracking-wider">
                  ON-GROUND ADVOCACY REGISTER
                </span>
                <span className="font-mono text-xs text-ink-500">EST. 2022</span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-serif font-bold text-ink-950 tracking-tight">
                  1,500 Families
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-terracotta-700 font-bold mt-1">
                  IMPACTED ACROSS INDIA
                </div>
              </div>

              <p className="text-sm text-ink-800 leading-relaxed font-sans">
                In 2022, Ujjaini Chatterji, along with Mayurapriyan Thangavel, Advocate, founded the Lingering Shadows Initiative through which their Team of Advocates and paralegals regularly visit the communities of migrant workers and refugees, record their stories and narrative for publication in various mediums.
              </p>

              {/* Frontline Regions List */}
              <div className="p-5 rounded-2xl bg-parchment-50 border border-parchment-300/90 space-y-3 text-xs font-mono text-ink-900">
                <div className="font-bold text-terracotta-700 uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Core Operational Frontlines:</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-terracotta-600 font-bold">01.</span>
                    <span><strong>Delhi NCR Migrant Settlements:</strong> Refugee shelters, informal worker bastis & municipal defense.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-terracotta-600 font-bold">02.</span>
                    <span><strong>Assam Border Districts:</strong> Riverine terrain legal clinics & Foreigners Tribunal representation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-terracotta-600 font-bold">03.</span>
                    <span><strong>Tamil Nadu Clinics:</strong> Grassroots paralegal advocacy, worker consultations & Dravidian walks.</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-ink-600 font-sans leading-relaxed border-t border-parchment-300 pt-4">
                Extensive legal consultations, representations, and training are provided to workers, women, and refugees living in these areas.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
