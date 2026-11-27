'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, MapPin, ArrowUpRight, ChevronLeft, ChevronRight, Globe, Wind } from 'lucide-react';

const POSTCARDS = [
  {
    id: 1,
    location: 'Delhi NCR Settlements',
    badge: 'Stop 01 // Urban Periphery',
    title: 'The Parchaayi Project',
    theme: 'Migration, Statelessness & Resilience',
    coordinates: '28°36′N 77°12′E',
    excerpt:
      'Visiting temporary settlements along the city fringe. Documenting the lives of migrant laborers and refugees surviving in the shadow of skyscraper prosperity.',
    stampDate: 'DELHI NCR',
    stampColor: 'text-terracotta-700 border-terracotta-600 bg-terracotta-50',
    tags: ['Ground Report', 'Refugee Rights', 'Paralegal Aid'],
  },
  {
    id: 2,
    location: 'Assam & Barak Valley',
    badge: 'Stop 02 // Riverine Frontlines',
    title: 'The 1.9 Million Question',
    theme: 'Tribunals, Documents & Belonging',
    coordinates: '26°12′N 92°56′E',
    excerpt:
      'Navigating riverine terrains and dusty district courts. Offering direct consultations before Foreigners’ Tribunals where an arbitrary spelling error risks decades in detention.',
    stampDate: 'ASSAM',
    stampColor: 'text-sage-800 border-sage-700 bg-sage-50',
    tags: ['Citizenship Law', 'Foreigners Tribunals', 'Field Research'],
  },
  {
    id: 3,
    location: 'Geneva & United Nations',
    badge: 'Stop 03 // Multilateral Stage',
    title: 'UN Commission on the Status of Women',
    theme: 'Feminist Advocacy on the World Stage',
    coordinates: '46°12′N 06°08′E',
    excerpt:
      'Carrying the testimonies of stateless women and detained mothers straight into international multilateral assemblies, challenging global borders with lived truth.',
    stampDate: 'GENEVA • UN CSW',
    stampColor: 'text-ochre-700 border-ochre-600 bg-ochre-50',
    tags: ['Multilateral', 'UN CSW', 'Feminist Justice'],
  },
  {
    id: 4,
    location: 'University of Nottingham, England',
    badge: 'Stop 04 // European Academe',
    title: 'Human Rights Jurisprudence Exchange',
    theme: 'Developing Solutions & Alumni Honor',
    coordinates: '52°56′N 01°11′W',
    excerpt:
      'Bridging cutting-edge European and international human rights jurisprudence with trial court practice in India. Honoured with the 2026 "Your Nottingham Alumni Award".',
    stampDate: 'NOTTINGHAM',
    stampColor: 'text-ink-950 border-ink-800 bg-parchment-200',
    tags: ['LL.M Research', 'Strategic Litigation', 'Alumni Honor'],
  },
  {
    id: 5,
    location: 'Coimbatore & Western Ghats, Tamil Nadu',
    badge: 'Stop 05 // Cultural Heart',
    title: 'Dravidian Heritage Walks & Mountain Treks',
    theme: 'The Vagabond & Backpacker Ethos',
    coordinates: '11°00′N 76°57′E',
    excerpt:
      'Living the philosophy of backpackers. Exploring indigenous knowledge, local Dravidian history, mountain treks, and regional cuisines as exercises to explore cultures.',
    stampDate: 'TAMIL NADU',
    stampColor: 'text-terracotta-700 border-terracotta-600 bg-terracotta-50',
    tags: ['Cuisines', 'Treks', 'Bohemian Retreat'],
  },
];

export default function GlobetrottingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = POSTCARDS[currentIndex];

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? POSTCARDS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === POSTCARDS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-32 bg-parchment-100 parchment-pattern border-b border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink-900/15 pb-8 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-monumental text-sage-800 font-bold flex items-center gap-2">
              <Compass className="w-4 h-4 text-sage-700 animate-spin-slow" />
              <span>GLOBETROTTING AND HUMAN RIGHTS</span>
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-950">
              Rights have no borders, <br />
              <span className="italic font-normal text-terracotta-700">and neither do our stories.</span>
            </h2>
          </div>
          <p className="text-ink-800 text-sm sm:text-base font-sans max-w-md leading-relaxed">
            We travel to listen: to carry the stories of marginalised communities across borders, and to bring what we learn back into law, art and public conversation.
          </p>
        </div>

        {/* Narrative Box from Document */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-parchment-50 border-2 border-ink-900 shadow-brutalist space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase text-terracotta-700 font-bold">
            <Wind className="w-4 h-4" />
            <span>THE PHILOSOPHY OF BACKPACKERS & VAGABONDS</span>
          </div>
          <p className="font-serif italic text-lg sm:text-2xl text-ink-950 leading-relaxed">
            &ldquo;LSI is the story of stories it has nurtured, the voice of the voiceless, and the face of faceless non-entities that are trapped in the binaries of statehood. Carrying forward its vision of creating a global network of passionate young lawyers, practitioners, activists, storytellers, artists, and human rights advocates, the founders of LSI live the philosophy of backpackers and vagabonds.&rdquo;
          </p>
          <div className="pt-3 border-t border-parchment-300 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ink-700">
            <span>EXPLORATION THROUGH CUISINES • TREKS • SWIMS • ART • MUSIC • HERITAGE WALKS</span>
            <span className="text-terracotta-700 font-bold bg-terracotta-50 px-3 py-1 rounded-full border border-terracotta-200">
              BOHEMIAN WORKSHOPS & RETREATS
            </span>
          </div>
        </div>

        {/* Postcard Interactive Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Main Postcard Display (Cols 1-8) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-12 shadow-brutalist flex flex-col justify-between h-full relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Top Bar of Postcard */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-parchment-300 pb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-terracotta-600" />
                      <span className="font-mono text-xs font-bold text-ink-950 uppercase">
                        {current.location}
                      </span>
                      <span className="font-mono text-[10px] text-ink-400">
                        ({current.coordinates})
                      </span>
                    </div>
                    <span className={`archival-stamp ${current.stampColor}`}>
                      {current.stampDate}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-terracotta-700 font-bold">
                      {current.badge}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950">
                      {current.title}
                    </h3>
                    <p className="font-mono text-xs text-sage-800 uppercase tracking-widest font-bold">
                      {current.theme}
                    </p>
                    <p className="font-serif italic text-lg sm:text-xl text-ink-800 leading-relaxed border-l-2 border-terracotta-600 pl-4 py-1">
                      &ldquo;{current.excerpt}&rdquo;
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {current.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-parchment-100 border border-parchment-300 font-mono text-[10px] uppercase text-ink-700"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="pt-8 mt-6 border-t border-parchment-300 flex items-center justify-between">
                <span className="font-mono text-xs text-ink-600">
                  DISPATCH {currentIndex + 1} OF {POSTCARDS.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    data-cursor="PREV"
                    className="p-3 rounded-full bg-parchment-100 border border-ink-900 hover:bg-ink-950 hover:text-parchment-50 transition-colors shadow-sm"
                    aria-label="Previous dispatch"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    data-cursor="NEXT"
                    className="p-3 rounded-full bg-parchment-100 border border-ink-900 hover:bg-ink-950 hover:text-parchment-50 transition-colors shadow-sm"
                    aria-label="Next dispatch"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Postcard Stops Selector List (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-500 block mb-2 font-bold">
                SELECT ROUTE WAYPOINT:
              </span>
              {POSTCARDS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  data-cursor="SELECT"
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    currentIndex === idx
                      ? 'bg-ink-950 text-parchment-50 border-ink-950 shadow-md translate-x-1.5'
                      : 'bg-parchment-50 text-ink-900 border-parchment-300 hover:border-ink-900/40 hover:bg-parchment-200'
                  }`}
                >
                  <div>
                    <div className={`font-mono text-[10px] uppercase font-bold ${currentIndex === idx ? 'text-terracotta-400' : 'text-terracotta-600'}`}>
                      STOP 0{idx + 1} • {item.stampDate}
                    </div>
                    <div className="font-serif font-bold text-base mt-0.5">
                      {item.location}
                    </div>
                  </div>
                  <ArrowUpRight className={`w-4 h-4 ${currentIndex === idx ? 'text-terracotta-400' : 'text-ink-400'}`} />
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/globetrotting"
                data-cursor="EXPLORE"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-ink-900 bg-parchment-50 hover:bg-ink-950 hover:text-parchment-50 font-mono text-xs uppercase tracking-wider transition-all shadow-sm group"
              >
                <span>Read Full Travelogue Page</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
