import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass, MapPin, Utensils, Mountain, Music, Shield, ArrowUpRight, Wind, Globe, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Globetrotting and Human Rights | The Lingering Shadows Initiative',
  description:
    'LSI travels across the world covering ground reports and telling stories through cuisines, treks, swims, art, music, and heritage walks.',
};

const DISPATCHES = [
  {
    id: 'delhi-parchaayi',
    location: 'Delhi NCR Settlements',
    badge: 'Dispatch 01 // Field Report',
    title: 'The Parchaayi Project',
    tagline: 'Living on the Urban Periphery',
    date: 'DELHI NCR',
    coordinates: '28°36′N 77°12′E',
    stampColor: 'text-terracotta-700 border-terracotta-600 bg-terracotta-50',
    description:
      'Visiting temporary settlements of migrant workers and refugees on the outskirts of Delhi NCR. Documenting oral histories, running legal clinics, and tracking the human cost of arbitrary demolitions and eviction notices.',
  },
  {
    id: 'assam-tribunals',
    location: 'Barak Valley & Guwahati, Assam',
    badge: 'Dispatch 02 // Statelessness Frontlines',
    title: 'The 1.9 Million Stateless Question',
    tagline: 'Before the Foreigners’ Tribunals',
    date: 'ASSAM',
    coordinates: '26°12′N 92°56′E',
    stampColor: 'text-sage-800 border-sage-700 bg-sage-50',
    description:
      'Traveling across the riverine plains and hill tracts of Assam. Observing proceedings before Foreigners’ Tribunals where impoverished families must produce fifty years of fragile paper trails to prove their right to exist in their own home.',
  },
  {
    id: 'geneva-csw',
    location: 'Geneva & New York • United Nations',
    badge: 'Dispatch 03 // Global Solidarity',
    title: 'UN Commission on the Status of Women',
    tagline: 'Multilateral Feminist Advocacy',
    date: 'GENEVA • UN CSW',
    coordinates: '46°12′N 06°08′E',
    stampColor: 'text-ochre-700 border-ochre-600 bg-ochre-50',
    description:
      'Taking grassroots testimonies from Indian detention centers directly into global multilateral chambers. Demanding that international conventions on statelessness reflect the lived realities of women displaced across South Asia.',
  },
  {
    id: 'nottingham-uk',
    location: 'University of Nottingham, England',
    badge: 'Dispatch 04 // European Jurisprudence',
    title: 'Human Rights Jurisprudence Exchange',
    tagline: 'Alumni Honor & Solutions',
    date: 'NOTTINGHAM',
    coordinates: '52°56′N 01°11′W',
    stampColor: 'text-ink-950 border-ink-800 bg-parchment-200',
    description:
      'Bridging cutting-edge European and international human rights jurisprudence with trial court practice in India. Honoured with the 2026 "Your Nottingham Alumni Award" for defense of displaced and refugee communities.',
  },
  {
    id: 'coimbatore-ghats',
    location: 'Coimbatore & Western Ghats, Tamil Nadu',
    badge: 'Dispatch 05 // Cultural Hearth',
    title: 'Dravidian Heritage Walks & Mountain Treks',
    tagline: 'The Vagabond & Backpacker Ethos',
    date: 'TAMIL NADU',
    coordinates: '11°00′N 76°57′E',
    stampColor: 'text-terracotta-700 border-terracotta-600 bg-terracotta-50',
    description:
      'Exploring indigenous histories, community kitchen cuisines, mountain paths, and heritage walks as exercises to explore cultures. Recharging our legal practice with the stories shared around village fires and mountain streams.',
  },
];

const EXPERIENCES = [
  { icon: Utensils, label: 'Cuisines', desc: 'Exploring cultural identity and community resilience through food, community hearths, and shared meals.' },
  { icon: Mountain, label: 'Treks & Swims', desc: 'Walking the trails, riverways, and hills that communities have traversed for generations.' },
  { icon: Music, label: 'Art & Music', desc: 'Listening to unrecorded songs, oral folk traditions, and local visual art outside gallery walls.' },
  { icon: Shield, label: 'Heritage Walks', desc: 'Walking through Dravidian history and regional archives to understand the roots of belonging and civil liberties.' },
];

export default function GlobetrottingPage() {
  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="archival-stamp text-sage-800 border-sage-700 bg-parchment-50">
              TRAVELOGUE // THE BACKPACKER ETHOS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink-950 leading-tight">
            Globetrotting and Human Rights.
          </h1>
          <p className="text-ink-800 text-lg sm:text-xl leading-relaxed font-sans max-w-2xl mx-auto">
            Rights have no borders, and neither do our stories. Follow our routes and read authentic dispatches from our field expeditions.
          </p>
        </div>

        {/* Narrative Box from Document */}
        <div className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-14 shadow-brutalist space-y-7">
          <div className="flex items-center gap-2 font-mono text-xs uppercase text-terracotta-700 font-bold">
            <Wind className="w-4 h-4" />
            <span>THE PHILOSOPHY OF BACKPACKERS & VAGABONDS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950">
            Carrying stories across borders.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-ink-800 leading-relaxed font-sans">
            <p className="drop-cap">
              LSI is the story of stories it has nurtured, the voice of the voiceless, and the face of faceless non-entities that are trapped in the binaries of statehood. Carrying forward its vision of creating a global network of passionate young lawyers, practitioners, activists, storytellers, artists, and human rights advocates, the founders of LSI live the philosophy of backpackers and vagabonds.
            </p>
            <p>
              The LSI team travels across the world where they cover ground reports and tell stories about different places, through cuisines, adventure sports, treks, swims, art, music, and heritage walks as exercises to explore cultures.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-parchment-100 border border-parchment-300 space-y-2">
            <div className="font-mono text-xs uppercase font-bold text-terracotta-700">
              Way Ahead
            </div>
            <p className="text-sm text-ink-800 leading-relaxed font-sans">
              The team LSI looks forward to organising workshops and retreats in different parts of the world to offer a select few a slice of this life—living, travelling and working in true bohemian style.
            </p>
          </div>
        </div>

        {/* 4 Cultural Exploration Methods */}
        <div className="space-y-8">
          <div className="border-b border-ink-900/15 pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta-700 font-bold block">
              EXPERIENTIAL IMMERSION
            </span>
            <h2 className="font-serif text-3xl font-bold text-ink-950 mt-1">
              Four Modes of Cultural Inquiry
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCES.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-parchment-50 border-2 border-ink-900 shadow-brutalist space-y-3 hover:-translate-y-1 transition-transform"
                >
                  <div className="p-3 rounded-xl bg-parchment-100 w-fit border border-parchment-300">
                    <Icon className="w-5 h-5 text-terracotta-600" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-ink-950">
                    {exp.label}
                  </h3>
                  <p className="text-xs text-ink-800 leading-relaxed font-sans">
                    {exp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dispatches from the Field */}
        <div className="space-y-10">
          <div className="border-b border-ink-900/15 pb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sage-800 font-bold block">
                FIELD ROUTE & WAYPOINTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 mt-1">
                Postcards from the Field
              </h2>
            </div>
            <span className="font-mono text-xs text-ink-500 uppercase">
              5 VERIFIED DISPATCH STATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DISPATCHES.map((d) => (
              <div
                key={d.id}
                className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-10 shadow-brutalist space-y-5 flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-parchment-300 pb-3.5">
                    <span className="font-mono text-xs uppercase text-terracotta-700 font-bold">
                      {d.badge}
                    </span>
                    <span className={`archival-stamp ${d.stampColor} text-[10px]`}>
                      {d.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
                      {d.title}
                    </h3>
                    <div className="text-xs font-mono text-ink-500 mt-0.5">
                      {d.location} • <span className="text-ink-400">({d.coordinates})</span>
                    </div>
                  </div>

                  <p className="text-sm text-ink-800 leading-relaxed font-sans">
                    {d.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-parchment-300 font-mono text-xs text-terracotta-700 font-bold flex items-center justify-between">
                  <span>{d.tagline}</span>
                  <MapPin className="w-4 h-4 text-terracotta-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
