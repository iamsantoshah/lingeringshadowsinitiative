'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Compass, Feather, GraduationCap, BookOpen, ArrowUpRight, Download, ExternalLink } from 'lucide-react';

const SPACES = [
  {
    id: 'young-lawyers-network',
    title: 'The Young Lawyers Network',
    subtitle: 'Dynamic Human Rights Practice',
    tag: 'PROFESSIONAL LEGAL CADRE',
    accent: 'terracotta',
    borderClass: 'border-terracotta-600',
    badgeClass: 'text-terracotta-700 border-terracotta-600 bg-terracotta-50',
    icon: Compass,
    description:
      'A network of dynamic, inventive, skilled, articulate, accountable and professional human rights lawyers with exposure in the legal field and immense ambition to develop and expand human rights lawyering as a lifelong practice.',
    actionText: 'Download Proposal PDF',
    actionHref: '/docs/young-lawyers-network-proposal.pdf',
    isDownload: true,
  },
  {
    id: 'young-lawyers-diary',
    title: 'The Young Lawyers Diary',
    subtitle: 'Lived Experiences & Field Accounts',
    tag: 'EDITORIAL REFLECTIONS',
    accent: 'sage',
    borderClass: 'border-sage-700',
    badgeClass: 'text-sage-800 border-sage-700 bg-sage-50',
    icon: Feather,
    description:
      'A dedicated platform and blog for young lawyers to share their lived experiences from courtrooms, detention centres, rural legal aid clinics, and community visits—demystifying the psychological realities of justice work.',
    actionText: 'Explore Diary Space',
    actionHref: '/spaces#young-lawyers-diary',
    isDownload: false,
  },
  {
    id: 'rising-peacock',
    title: 'Rising Peacock',
    subtitle: 'Future-Ready Student Development',
    tag: 'EDUCATIONAL WING',
    accent: 'ochre',
    borderClass: 'border-ochre-600',
    badgeClass: 'text-ochre-700 border-ochre-600 bg-ochre-50',
    icon: GraduationCap,
    description:
      'The educational wing of Chamber.MU and LSI that actively works towards transforming education through globally aligned learning, educator excellence, and critical student development across institutions.',
    actionText: 'Visit Rising Peacock',
    actionHref: 'https://risingpeacock.in',
    isDownload: false,
    external: true,
  },
  {
    id: 'virtuosity-legal',
    title: 'Virtuosity Legal',
    subtitle: 'Independent Legal Scholarship',
    tag: 'KNOWLEDGE PARTNER',
    accent: 'ink',
    borderClass: 'border-ink-900',
    badgeClass: 'text-ink-950 border-ink-900 bg-parchment-200',
    icon: BookOpen,
    description:
      'The Knowledge Partner to Chamber.MU and LSI, Virtuosity Legal is an independent, student-driven initiative with a clear vision: to bring clarity, authenticity, and depth to the study and practice of law.',
    actionText: 'Visit Virtuosity Legal',
    actionHref: 'https://virtuositylegal.com',
    isDownload: false,
    external: true,
  },
];

export default function SpacesSection() {
  return (
    <section className="py-20 lg:py-32 bg-parchment-50 border-b border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink-900/15 pb-8 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-monumental text-terracotta-600 font-bold block">
              ECOSYSTEM & SISTER SPACES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-950">
              Rooms where stories are made and shared.
            </h2>
          </div>
          <p className="text-ink-800 text-sm sm:text-base font-sans max-w-md leading-relaxed">
            Step into any room in the connected ecosystem of LSI and Chamber.MU. Each space nurtures a distinct facet of human rights.
          </p>
        </div>

        {/* 4 Distinct Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPACES.map((space, idx) => {
            const Icon = space.icon;
            return (
              <div
                key={space.id}
                className="rounded-3xl bg-parchment-100 border-2 border-ink-900 p-8 sm:p-10 shadow-brutalist flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-parchment-300 pb-3.5">
                    <span className={`archival-stamp ${space.badgeClass}`}>
                      ROOM 0{idx + 1} // {space.tag}
                    </span>
                    <Icon className="w-5 h-5 text-ink-700 transition-transform group-hover:scale-110" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950 group-hover:text-terracotta-700 transition-colors">
                      {space.title}
                    </h3>
                    <p className="font-mono text-xs text-ink-500 uppercase tracking-wider mt-0.5">
                      {space.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-ink-800 leading-relaxed font-sans">
                    {space.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-parchment-300 flex items-center justify-between">
                  {space.isDownload ? (
                    <a
                      href={space.actionHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="PDF"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta-700 font-bold hover:underline"
                    >
                      <Download className="w-4 h-4" />
                      <span>{space.actionText}</span>
                    </a>
                  ) : space.external ? (
                    <a
                      href={space.actionHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="EXTERNAL"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta-700 font-bold hover:underline"
                    >
                      <span>{space.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={space.actionHref}
                      data-cursor="EXPLORE"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta-700 font-bold hover:underline"
                    >
                      <span>{space.actionText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                  
                  <span className="p-2 rounded-full bg-ink-950 text-parchment-50 group-hover:bg-terracotta-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
