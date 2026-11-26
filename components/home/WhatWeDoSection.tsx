'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, Newspaper, Clapperboard, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';

const PILLARS = [
  {
    id: 'courtroom',
    title: 'In the Courtroom',
    subtitle: 'Strategic Litigation & Constitutional Defense',
    icon: Scale,
    tag: 'LITIGATION',
    description:
      'Where rights must be answered and the law held to account. We take the constitutional fight directly into Indian courtrooms—from Trial Courts and Foreigners’ Tribunals to the Supreme Court of India.',
    points: [
      'Landmark public interest litigation against indefinite detention and custodial deaths of refugees.',
      'Affirming the right to healthcare and personal liberty for stateless populations (e.g. Sabera Khatoon v. Union of India).',
      'Constitutional challenge to discriminatory citizenship legislation (CAA 2019/2024).',
      'Extensive pro-bono consultations and legal defense impacting 1,500+ families across Assam, Delhi NCR, and Tamil Nadu.',
    ],
    ctaText: 'Explore Litigation Work',
    ctaHref: '/stories?filter=litigation',
  },
  {
    id: 'press',
    title: 'In the Press',
    subtitle: 'Ground Reports & Academic Inquiries',
    icon: Newspaper,
    tag: 'REPORTING',
    description:
      'Rigorous investigative reports, whitepapers, and published journalism capturing reality straight from the settlements. We document what happens in the lingering shadows so history cannot claim it never knew.',
    points: [
      'Comprehensive ground report on migrant workers and Rohingya refugees in Delhi NCR (The Parchaayi Project).',
      'Regular national columns on secularism, Dravidian constitutionalism, and scientific temper.',
      'Independent human rights consultancy and research for international organizations from England and Bangladesh.',
      'Empirical whitepapers tracking detention conditions, statelessness, and access to basic amenities.',
    ],
    ctaText: 'Read Ground Reports',
    ctaHref: '/stories?filter=reporting',
  },
  {
    id: 'stage',
    title: 'On Stage & Screen',
    subtitle: 'Theatre, Film Screenings & Performance',
    icon: Clapperboard,
    tag: 'THEATRE & FILM',
    description:
      'Performance arts possess the unique ability to pierce bureaucratic apathy. We write, produce, and enact live theatre and curate documentary screenings that invite audiences to feel, debate, and stand in another person’s shoes.',
    points: [
      'Stage productions in English and Tamil spotlighting systemic injustice, migration, and equality.',
      'Community screenings of independent cinema centered on marginalized lives followed by panel debates.',
      'Interactive public speaking and theatre workshops fostering empathy and confidence.',
      'Audience-participatory dialogues breaking down prejudice through visceral dramatic expression.',
    ],
    ctaText: 'Discover Productions',
    ctaHref: '/stories?filter=theatre',
  },
  {
    id: 'canvas',
    title: 'On Page & Canvas',
    subtitle: 'Art, Murals & Whimsical Storytelling',
    icon: Palette,
    tag: 'ART & STORYTELLING',
    description:
      'Storytelling is humanity’s oldest bridge. Through folklore, fairy tales, visual art, and public exhibitions, we translate cold legal doctrines into warm, memorable parables that ignite imagination and moral clarity.',
    points: [
      'Ujjaini’s &ldquo;Unveil Tales Untold&rdquo;—performing fairy tales and thrillers with constitutional morality for schools, colleges, and civic groups.',
      'Mayurapriyan’s visual art exhibitions hosted across international embassies and cultural galleries.',
      'Training of Trainers (ToT) on interactive teaching methodologies, POSH, and POCSO awareness.',
      'Illustrated story anthologies protecting client identities while preserving lived truths.',
    ],
    ctaText: 'Experience Storytelling',
    ctaHref: '/founders',
  },
];

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = PILLARS[activeTab];

  return (
    <section id="what-we-do" className="py-20 lg:py-32 bg-parchment-100 parchment-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-600 block">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
            Four ways to carry a story.
          </h2>
          <p className="text-ink-600 text-base sm:text-lg">
            Choose a path below to see how the Lingering Shadows Initiative works across disciplines.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 sm:gap-4 no-scrollbar">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-ink-900 text-parchment-50 border-ink-900 shadow-md scale-105'
                    : 'bg-parchment-50 text-ink-700 border-parchment-300 hover:border-terracotta-400 hover:bg-parchment-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-terracotta-400' : 'text-ink-500'}`} />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Card */}
        <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-12 shadow-postcard transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-700 text-xs font-bold tracking-widest uppercase">
                {current.tag}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
                {current.title}
              </h3>
              <p className="font-medium text-terracotta-600 text-sm sm:text-base">
                {current.subtitle}
              </p>
              <p className="text-ink-700 text-base leading-relaxed">
                {current.description}
              </p>
              <div className="pt-2">
                <Link
                  href={current.ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl bg-parchment-100/90 border border-parchment-200/90 p-6 sm:p-8 space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-ink-500">
                Key Strategic Manifestations:
              </h4>
              <ul className="space-y-4">
                {current.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-800 text-sm sm:text-base leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
