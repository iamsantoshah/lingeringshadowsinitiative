'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Newspaper, Clapperboard, Palette, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const REALMS = [
  {
    id: 'courtroom',
    num: '01',
    title: 'In the Courtroom',
    subtitle: 'Strategic Constitutional Litigation',
    tag: 'STRATEGIC LITIGATION',
    accentColor: 'text-terracotta-700',
    bgBadge: 'bg-terracotta-50 border-terracotta-600 text-terracotta-700',
    icon: Scale,
    lead: 'When a community’s rights are denied, the law must be made to listen.',
    description:
      'We bring carefully prepared strategic cases on behalf of disenfranchised and marginalised groups—challenging unlawful detentions, summary deportations, and defending the fundamental right to life, personal liberty, and healthcare under Article 21 and equality under Article 14.',
    points: [
      'Pro-bono litigation for stateless persons and refugees before High Courts and the Supreme Court of India.',
      'Landmark advocacy affirming refugee rights to life and healthcare (Sabera Khatoon v. Union of India).',
      'Constitutional challenge to discriminatory citizenship legislation (CAA 2019/2024 Rules before the SC Bench).',
      'Extensive legal consultations and bail representations for 1,500+ families across Assam, Delhi NCR, and Tamil Nadu.',
    ],
    metadata: [
      { label: 'KEY FORUMS', value: 'Supreme Court & High Courts' },
      { label: 'FOCUS', value: 'Habeas Corpus & Article 21' },
      { label: 'CLIENTS', value: 'Refugees & Detainees' },
    ],
    ctaText: 'Explore Courtroom Dockets',
    ctaHref: '/stories?filter=Litigation',
  },
  {
    id: 'press',
    num: '02',
    title: 'In the Press',
    subtitle: 'Ground Reports & Investigative Journalism',
    tag: 'REPORTING & RESEARCH',
    accentColor: 'text-sage-800',
    bgBadge: 'bg-sage-50 border-sage-700 text-sage-800',
    icon: Newspaper,
    lead: 'Rigorous empirical documentation capturing lived realities straight from informal settlements.',
    description:
      'We publish investigative dossiers, academic whitepapers, national media columns, and digital field blogs so history cannot claim it never knew the human reality behind bureaucratic statistics.',
    points: [
      'The Parchaayi Project: In-depth ground report on migrant workers and refugees in Delhi NCR.',
      'Regular national columns on equality, secularism, Dravidian politics, and scientific temper.',
      'Submissions and collaborative research with international human rights bodies (including UN CSW).',
      'Empirical dossiers tracking detention facility conditions, access to water, and administrative hurdles.',
    ],
    metadata: [
      { label: 'PROJECT', value: 'The Parchaayi Project' },
      { label: 'PUBLICATIONS', value: 'National Columns & Whitepapers' },
      { label: 'MULTILATERAL', value: 'UN CSW Collaborations' },
    ],
    ctaText: 'Read Ground Reports',
    ctaHref: '/stories?filter=Reporting',
  },
  {
    id: 'stage',
    num: '03',
    title: 'On Stage & Screen',
    subtitle: 'Bilingual Live Theatre & Film Screenings',
    tag: 'THEATRE & FILM',
    accentColor: 'text-ochre-700',
    bgBadge: 'bg-ochre-50 border-ochre-600 text-ochre-700',
    icon: Clapperboard,
    lead: 'Performance arts possess the unique ability to pierce bureaucratic apathy.',
    description:
      'We produce, direct, and perform live theatrical productions in English and Tamil, and curate independent documentary film screenings with audience debates, inviting viewers into empathetic communion.',
    points: [
      'Stage productions in English and Tamil spotlighting systemic injustice, migration, and equality.',
      'Community screenings of independent cinema centered on marginalized lives followed by panel dialogues.',
      'Interactive public speaking and theatrical workshops fostering empathy and confidence.',
      'Audience-participatory dialogues breaking down prejudice through dramatic vulnerability.',
    ],
    metadata: [
      { label: 'LANGUAGES', value: 'English & Tamil' },
      { label: 'DIRECTOR/ACTOR', value: 'Adv. Mayurapriyan Thangavel' },
      { label: 'FORMAT', value: 'Live Dramas & Screenings' },
    ],
    ctaText: 'Discover Productions',
    ctaHref: '/stories?filter=Theatre',
  },
  {
    id: 'canvas',
    num: '04',
    title: 'On Page & Canvas',
    subtitle: 'Visual Art, Folklore & Storytelling',
    tag: 'ART & STORYTELLING',
    accentColor: 'text-terracotta-700',
    bgBadge: 'bg-parchment-100 border-terracotta-600 text-terracotta-700',
    icon: Palette,
    lead: 'Storytelling is humanity’s oldest bridge to justice and conscience.',
    description:
      'Through world folklore, international fairy tales, visual art exhibitions, and public murals, we translate cold legal doctrines into warm, memorable parables that ignite imagination, moral clarity, and constitutional values.',
    points: [
      'Ujjaini’s “Unveil Tales Untold”—performing world folklore and sci-fi infused with constitutional morals.',
      'Mayurapriyan’s visual art exhibitions hosted across international embassies and cultural galleries.',
      'Training and T-T-T sessions on interactive teaching methodologies, POSH, and POCSO awareness.',
      'Illustrated story anthologies protecting client identities while preserving lived truths.',
    ],
    metadata: [
      { label: 'STORYTELLER', value: 'Adv. Ujjaini Chatterji' },
      { label: 'ARTIST', value: 'Adv. Mayurapriyan Thangavel' },
      { label: 'WORKSHOPS', value: 'Schools, Universities & Embassies' },
    ],
    ctaText: 'Experience Creative Portfolios',
    ctaHref: '/team#founders',
  },
];

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = REALMS[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="what-we-do" className="py-20 lg:py-32 bg-parchment-100 parchment-pattern border-b border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink-900/15 pb-8 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-monumental text-terracotta-600 font-bold block">
              FOUR CHANNELS OF RESISTANCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-950">
              Four ways to carry a story.
            </h2>
          </div>
          <p className="text-ink-800 text-sm sm:text-base font-sans max-w-md leading-relaxed">
            Justice is won in courtroom judgments, and made lasting by how society listens. Select a realm below to examine how we work.
          </p>
        </div>

        {/* 4 Interactive Realm Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {REALMS.map((realm, idx) => {
            const isSelected = activeTab === idx;
            const Icon = realm.icon;
            return (
              <button
                key={realm.id}
                onClick={() => setActiveTab(idx)}
                data-cursor="REALM"
                className={`relative p-5 sm:p-6 rounded-2xl border-2 text-left transition-all duration-300 flex flex-col justify-between h-full group ${
                  isSelected
                    ? 'bg-ink-950 text-parchment-50 border-ink-950 shadow-brutalist translate-y-0'
                    : 'bg-parchment-50 text-ink-900 border-parchment-300 hover:border-ink-900 hover:bg-parchment-200'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-terracotta-400' : 'text-terracotta-600'}`}>
                    [{realm.num}]
                  </span>
                  <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isSelected ? 'text-terracotta-400' : 'text-ink-600'}`} />
                </div>
                <div>
                  <div className={`font-mono text-[9px] uppercase tracking-widest ${isSelected ? 'text-parchment-300' : 'text-ink-500'}`}>
                    {realm.tag}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold mt-1 leading-snug">
                    {realm.title}
                  </h3>
                </div>

                {isSelected && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-ink-950 clip-triangle" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Dossier Container */}
        <div className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-12 lg:p-14 shadow-brutalist overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-8"
            >
              {/* Header Details */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-parchment-300 pb-6">
                <div className="flex items-center gap-3">
                  <span className={`archival-stamp ${current.bgBadge}`}>
                    {current.tag}
                  </span>
                  <span className="font-mono text-xs text-ink-500 hidden sm:inline">
                    {current.subtitle}
                  </span>
                </div>
                <div className="font-mono text-xs text-terracotta-700 font-bold">
                  PILLAR [{current.num} / 04]
                </div>
              </div>

              {/* Title & Lead */}
              <div className="space-y-4 max-w-4xl">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-950 tracking-tight">
                  {current.title}
                </h3>
                <p className="font-serif italic text-lg sm:text-xl text-terracotta-800 border-l-2 border-terracotta-600 pl-4 py-1 leading-relaxed">
                  &ldquo;{current.lead}&rdquo;
                </p>
                <p className="text-base sm:text-lg text-ink-800 leading-relaxed font-sans">
                  {current.description}
                </p>
              </div>

              {/* Grid: Engagements + Metadata Ledger */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start">
                
                {/* Engagements List (Cols 1-8) */}
                <div className="lg:col-span-8 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-700 block">
                    Core Operational Engagements:
                  </span>
                  <ul className="space-y-3">
                    {current.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-ink-800 font-sans">
                        <CheckCircle2 className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: pt }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metadata Ledger Box (Cols 9-12) */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-parchment-100 border border-parchment-300 space-y-4">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-ink-500 block">
                    DOSSIER SPECIFICATIONS
                  </span>
                  <div className="space-y-3 font-mono text-xs">
                    {current.metadata.map((m, mIdx) => (
                      <div key={mIdx} className="border-b border-parchment-300 pb-2">
                        <div className="text-[10px] text-ink-500 uppercase">{m.label}</div>
                        <div className="font-bold text-ink-950 mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={current.ctaHref}
                      data-cursor="VIEW"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-mono text-xs uppercase tracking-wider transition-all shadow-sm group"
                    >
                      <span>{current.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
