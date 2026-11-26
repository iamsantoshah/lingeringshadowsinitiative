'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Compass, MapPin, ArrowRight, ChevronLeft, ChevronRight, Stamp } from 'lucide-react';

const POSTCARDS = [
  {
    id: 1,
    location: 'Delhi NCR Settlements',
    badge: 'Stop 01 • Ground Reality',
    title: 'The Parchaayi Project',
    theme: 'Migration, Statelessness & Resilience',
    excerpt:
      'Visiting the temporary settlements along the city fringe. Documenting the lives of migrant laborers and refugees surviving in the shadow of skyscraper prosperity.',
    stampDate: 'Delhi • 2022-2026',
    stampColor: 'text-terracotta-700 border-terracotta-400 bg-terracotta-50',
    tags: ['Ground Report', 'Refugee Rights', 'Paralegal Aid'],
  },
  {
    id: 2,
    location: 'Assam & Barak Valley',
    badge: 'Stop 02 • Citizenship Frontlines',
    title: 'The 1.9 Million Question',
    theme: 'Tribunals, Documents & Belonging',
    excerpt:
      'Navigating riverine terrains and dusty courts. Offering direct consultations before Foreigners’ Tribunals where an arbitrary spelling error risks decades in detention.',
    stampDate: 'Assam • FT Mission',
    stampColor: 'text-sage-700 border-sage-400 bg-sage-50',
    tags: ['Citizenship Law', 'Tribunals', 'Field Research'],
  },
  {
    id: 3,
    location: 'Geneva & United Nations',
    badge: 'Stop 03 • Global Solidarity',
    title: 'UN Commission on the Status of Women',
    theme: 'Feminist Advocacy on the World Stage',
    excerpt:
      'Carrying the testimonies of Rohingya women and detained mothers straight into international multilateral assemblies, challenging global borders with lived truth.',
    stampDate: 'Geneva • CSW 2024/2025',
    stampColor: 'text-ochre-700 border-ochre-400 bg-ochre-50',
    tags: ['Multilateral', 'UN CSW', 'Feminist Justice'],
  },
  {
    id: 4,
    location: 'University of Nottingham, UK',
    badge: 'Stop 04 • Academic Excellence',
    title: 'Nottingham Alumni Award 2026',
    theme: 'Human Rights Jurisprudence',
    excerpt:
      'Honoring years of strategic litigation with the University of Nottingham Human Rights Law Department, connecting global academia to grassroots legal clinics.',
    stampDate: 'Nottingham • 2026 Award',
    stampColor: 'text-ink-800 border-ink-400 bg-parchment-200',
    tags: ['LL.M Research', 'Strategic Litigation', 'Alumni Honor'],
  },
  {
    id: 5,
    location: 'Tamil Nadu & Western Ghats',
    badge: 'Stop 05 • Culture & Immersion',
    title: 'Heritage Walks & Bohemian Retreats',
    theme: 'Cuisines, Treks & Vagabond Philosophy',
    excerpt:
      'Living the philosophy of backpackers. Exploring indigenous knowledge, local Dravidian history, mountain treks, and regional cuisines as essential human rights nourishment.',
    stampDate: 'Coimbatore • 2026',
    stampColor: 'text-terracotta-700 border-terracotta-400 bg-terracotta-50',
    tags: ['Culture', 'Treks', 'Bohemian Retreat'],
  },
];

export default function GlobetrottingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? POSTCARDS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === POSTCARDS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-32 bg-parchment-50 border-b border-parchment-300/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-sage-600">
              <Compass className="w-4 h-4" />
              <span>Globetrotting & Human Rights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
              Our stories never stop. <br />
              <span className="italic font-normal text-terracotta-600">Neither do our travels.</span>
            </h2>
            <p className="text-ink-600 text-sm sm:text-base leading-relaxed">
              The founders of LSI live the philosophy of backpackers and vagabonds. Follow our route 
              and explore a postcard from each field dispatch across India and the globe.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-parchment-300 bg-parchment-100 hover:bg-parchment-200 text-ink-800 transition-colors shadow-sm"
              aria-label="Previous Postcard"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-parchment-300 bg-parchment-100 hover:bg-parchment-200 text-ink-800 transition-colors shadow-sm"
              aria-label="Next Postcard"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="/globetrotting"
              className="ml-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Postcards Grid / Carousel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTCARDS.slice(0, 3).map((card) => (
            <div
              key={card.id}
              className="rounded-3xl bg-parchment-100 border border-parchment-300 p-6 sm:p-7 shadow-postcard hover:shadow-lg transition-all flex flex-col justify-between relative group"
            >
              {/* Postcard Stamp Effect */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sage-700 bg-sage-100/70 px-3 py-1 rounded-full">
                  {card.badge}
                </span>

                {/* Stamp visual */}
                <div
                  className={`border-2 border-dashed px-2.5 py-1 rounded text-[10px] font-mono uppercase font-bold tracking-widest rotate-3 shrink-0 ${card.stampColor}`}
                >
                  <div className="flex items-center gap-1">
                    <Stamp className="w-3 h-3" />
                    <span>{card.stampDate}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-1.5 text-xs text-ink-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                  <span>{card.location}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink-900 group-hover:text-terracotta-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs font-semibold text-terracotta-600 tracking-wide">
                  {card.theme}
                </p>
                <p className="text-sm text-ink-700 leading-relaxed">
                  {card.excerpt}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="pt-4 border-t border-parchment-300/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-parchment-200 text-ink-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/globetrotting"
                  className="text-xs font-bold text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Dispatch →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bohemian Retreat Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sage-900 via-ink-900 to-terracotta-900 text-parchment-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-ochre-300">
              Way Ahead • Bohemian Retreats
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-parchment-50">
              Live, travel, and advocate in true bohemian style.
            </h3>
            <p className="text-sm text-parchment-300/80 max-w-xl">
              We organize workshops and retreats in different parts of the world to offer a select 
              few a slice of this life—combining ground reports, treks, local art, and legal strategy.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-parchment-50 hover:bg-parchment-100 text-ink-900 font-semibold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md hover:scale-105"
          >
            Express Interest
          </Link>
        </div>

      </div>
    </section>
  );
}
