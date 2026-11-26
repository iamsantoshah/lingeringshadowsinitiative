import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass, MapPin, Stamp, ArrowRight, Utensils, Mountain, Music, Shield, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Globetrotting & Human Rights | The Lingering Shadows Initiative',
  description:
    'Follow our routes across India and the globe. Living the philosophy of backpackers, vagabonds, and human rights litigators through cuisines, treks, heritage walks, and field reports.',
};

const DISPATCHES = [
  {
    id: 'delhi-parchaayi',
    location: 'Delhi NCR Settlements',
    badge: 'Field Mission 01',
    title: 'The Parchaayi Project',
    tagline: 'Living on the urban periphery',
    date: 'Delhi NCR • Field Ongoing',
    stampColor: 'text-terracotta-700 border-terracotta-400 bg-terracotta-50',
    description:
      'Visiting the temporary settlements of migrant workers and refugees in the outskirts of Delhi NCR. Documenting oral histories, running legal clinics, and tracking the human cost of arbitrary demolitions and eviction notices.',
    facets: ['Over 1,500 families supported', 'Paralegal clinics & rights education', 'Direct constitutional petitions'],
    category: 'Ground Report',
  },
  {
    id: 'assam-tribunals',
    location: 'Barak Valley & Guwahati, Assam',
    badge: 'Field Mission 02',
    title: 'The 1.9 Million Stateless Question',
    tagline: 'Before the Foreigners’ Tribunals',
    date: 'Assam • FT Mission',
    stampColor: 'text-sage-700 border-sage-400 bg-sage-50',
    description:
      'Traveling across the riverine plains and hill tracts of Assam. Observing proceedings before Foreigners’ Tribunals where impoverished families must produce fifty years of fragile paper trails to prove their right to exist in their own home.',
    facets: ['Tribunal defense & legal appeals', 'Cross-border family tracing', 'High Court habeas corpus filings'],
    category: 'Citizenship Frontlines',
  },
  {
    id: 'geneva-csw',
    location: 'Geneva & New York • United Nations',
    badge: 'Field Mission 03',
    title: 'UN Commission on the Status of Women',
    tagline: 'Multilateral feminist advocacy',
    date: 'UN CSW • 2024 / 2025',
    stampColor: 'text-ochre-700 border-ochre-400 bg-ochre-50',
    description:
      'Taking grassroots testimonies from Indian detention centers directly into global multilateral chambers. Demanding that international conventions on statelessness and women’s rights reflect the lived realities of women displaced across South Asia.',
    facets: ['Two-time UN CSW Delegations', 'Strategic bilateral human rights meetings', 'Refugee maternal health reports'],
    category: 'Global Advocacy',
  },
  {
    id: 'nottingham-uk',
    location: 'University of Nottingham, England',
    badge: 'Field Mission 04',
    title: 'Human Rights Jurisprudence Exchange',
    tagline: 'Developing Solutions & Alumni Honor',
    date: 'UK • 2026 Alumni Award',
    stampColor: 'text-ink-800 border-ink-400 bg-parchment-200',
    description:
      'Bridging cutting-edge European and international human rights jurisprudence with trial court practice in India. Honoured with the 2026 "Your Nottingham Alumni Award" for international defense of displaced communities.',
    facets: ['LL.M in Human Rights Law', 'Venice School of Human Rights', 'International consultancy partnerships'],
    category: 'Academic Inquiries',
  },
  {
    id: 'coimbatore-ghats',
    location: 'Coimbatore & Western Ghats, Tamil Nadu',
    badge: 'Field Mission 05',
    title: 'Dravidian Heritage Walks & Mountain Treks',
    tagline: 'The Vagabond & Backpacker Ethos',
    date: 'Tamil Nadu • 2026',
    stampColor: 'text-terracotta-700 border-terracotta-400 bg-terracotta-50',
    description:
      'Exploring indigenous histories, community kitchen cuisines, mountain paths, and heritage walks as exercises to explore cultures. Recharging our legal practice with the stories shared around village fires and mountain streams.',
    facets: ['Local culinary & cultural deep dives', 'Indigenous ecological rights', 'Headquarters & retreat grounds'],
    category: 'Cultural Immersion',
  },
];

const EXPERIENCES = [
  { icon: Utensils, label: 'Regional Cuisines', desc: 'Exploring cultural identity and community resilience through food and shared hearths.' },
  { icon: Mountain, label: 'Adventure Treks', desc: 'Walking the trails and riverways that communities have traversed for centuries.' },
  { icon: Music, label: 'Folk Art & Songs', desc: 'Listening to unrecorded songs and oral folk traditions that defy statutory borders.' },
  { icon: Shield, label: 'Human Rights Clinics', desc: 'Direct on-ground legal aid provided wherever our journeys take us.' },
];

export default function GlobetrottingPage() {
  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-sage-600">
            <Compass className="w-4 h-4" />
            <span>Globetrotting & Human Rights</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
            Follow our route. <br />
            <span className="italic font-normal text-terracotta-600">Open a postcard from each stop.</span>
          </h1>
          <p className="text-ink-600 text-lg leading-relaxed font-sans">
            LSI is the story of stories it has nurtured. Carrying forward our vision of a global network 
            of passionate young lawyers and artists, our founders live the philosophy of backpackers 
            and vagabonds—exploring cultures through treks, cuisines, swims, and ground reports.
          </p>
        </div>

        {/* 4 Cultural Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-parchment-50 border border-parchment-300 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink-900">
                  {exp.label}
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Postcards Dispatches */}
        <div className="space-y-8">
          <div className="border-b border-parchment-300 pb-3 flex items-center justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
              Field Dispatches & Travel Postcards
            </h2>
            <span className="text-xs font-mono text-terracotta-600 uppercase tracking-widest">
              Live Journal
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DISPATCHES.map((card) => (
              <div
                key={card.id}
                className="rounded-3xl bg-parchment-50 border border-parchment-300 p-7 shadow-postcard hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Stamp */}
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sage-700 bg-sage-100/70 px-3 py-1 rounded-full">
                      {card.badge}
                    </span>

                    <div
                      className={`border-2 border-dashed px-2.5 py-1 rounded text-[10px] font-mono uppercase font-bold tracking-widest rotate-2 shrink-0 ${card.stampColor}`}
                    >
                      <div className="flex items-center gap-1">
                        <Stamp className="w-3 h-3" />
                        <span>{card.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Location & Title */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-ink-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                      <span>{card.location}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-ink-900 group-hover:text-terracotta-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-terracotta-600 tracking-wide">
                      {card.tagline}
                    </p>
                    <p className="text-sm text-ink-700 leading-relaxed pt-1">
                      {card.description}
                    </p>
                  </div>

                  {/* Facets */}
                  <div className="pt-3 border-t border-parchment-200/80 space-y-1.5">
                    {card.facets.map((facet, fIdx) => (
                      <div key={fIdx} className="text-xs text-ink-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400" />
                        <span>{facet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-parchment-300/80 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-parchment-200 text-ink-700">
                    {card.category}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1"
                  >
                    <span>Connect On Mission →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bohemian Retreats Full Section */}
        <div className="rounded-[36px] bg-gradient-to-br from-ink-900 via-sage-950 to-ink-900 text-parchment-100 p-8 sm:p-14 lg:p-16 shadow-2xl">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-ochre-300">
              Way Ahead • Worldwide Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-parchment-50 leading-tight">
              Workshops & Retreats in Bohemian Style
            </h2>
            <p className="text-parchment-300/90 text-sm sm:text-base leading-relaxed">
              The team LSI looks forward to organising workshops and retreats in different parts 
              of the world to offer a select few a slice of this life—living, travelling, and working 
              in true bohemian style. Bringing together litigators, journalists, artists, and storytellers 
              to immerse in culture and sharpen public interest strategy.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-parchment-50 font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                Join Next Retreat
              </Link>
              <Link
                href="/about"
                className="px-7 py-3.5 rounded-full bg-parchment-100/10 hover:bg-parchment-100/20 text-parchment-100 font-semibold text-xs tracking-wider uppercase transition-all border border-parchment-100/20"
              >
                Learn About Our Work
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
