import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Feather, GraduationCap, Compass } from 'lucide-react';

const SPACES = [
  {
    id: 'young-lawyers-network',
    title: 'The Young Lawyers Network',
    tag: 'Human Rights Collective',
    icon: Compass,
    desc: 'A network of dynamic, inventive, skilled, articulate, accountable and professional human rights lawyers with exposure in the legal field and immense ambition to expand human rights lawyering as an active, sustainable practice.',
    href: '/spaces#young-lawyers-network',
    docLink: '/docs/young-lawyers-network-proposal.pdf',
    docText: 'Download Proposal PDF',
    logo: null,
  },
  {
    id: 'young-lawyers-diary',
    title: 'The Young Lawyers Diary',
    tag: 'Lived Experiences & Blog',
    icon: Feather,
    desc: 'A reflective journal where emerging advocates share raw, unvarnished lived experiences from detention hearings, settlement field visits, client dialogues, and courtroom trials.',
    href: '/spaces#young-lawyers-diary',
    docLink: null,
    docText: null,
    logo: null,
  },
  {
    id: 'rising-peacock',
    title: 'Rising Peacock',
    tag: 'Educational Wing',
    icon: GraduationCap,
    desc: 'The educational wing of Chamber MU and LSI that actively works towards transforming education through globally aligned learning, educator excellence, and future-ready student development.',
    href: 'https://risingpeacock.org',
    isExternal: true,
    logo: '/logos/rising-peacock.svg',
  },
  {
    id: 'virtuosity-legal',
    title: 'Virtuosity Legal',
    tag: 'Knowledge Partner',
    icon: BookOpen,
    desc: 'The Knowledge Partner to Chamber MU and LSI—an independent, student-driven initiative with a clear vision to bring clarity, authenticity, and depth to the study and critical practice of law.',
    href: 'https://virtuositylegal.com',
    isExternal: true,
    logo: '/logos/virtuosity-legal.png',
  },
];

export default function SpacesSection() {
  return (
    <section className="py-20 lg:py-32 bg-parchment-50 border-b border-parchment-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-600 block">
            Our Ecosystem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
            Our other spaces.
          </h2>
          <p className="text-ink-600 text-base sm:text-lg">
            Rooms where legal strategy, education, and lived experiences are made, shared, and elevated.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPACES.map((space) => {
            const Icon = space.icon;
            return (
              <div
                key={space.id}
                className="rounded-3xl bg-parchment-100 border border-parchment-300 p-8 shadow-postcard flex flex-col justify-between hover:border-terracotta-300 transition-all group"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Icon / Logo */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-parchment-50 border border-parchment-300/70 p-2 flex items-center justify-center text-terracotta-600 shadow-sm group-hover:scale-105 transition-transform">
                      {space.logo ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={space.logo}
                            alt={space.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-ink-500 bg-parchment-200/80 px-3 py-1 rounded-full">
                      {space.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-2xl font-bold text-ink-900 group-hover:text-terracotta-600 transition-colors">
                    {space.title}
                  </h3>
                  <p className="text-sm text-ink-700 leading-relaxed">
                    {space.desc}
                  </p>
                </div>

                {/* Footer links */}
                <div className="pt-6 mt-6 border-t border-parchment-300/80 flex items-center justify-between">
                  {space.isExternal ? (
                    <a
                      href={space.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700"
                    >
                      <span>Visit Initiative</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href={space.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700"
                    >
                      <span>Explore Space</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}

                  {space.docLink && (
                    <a
                      href={space.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-ink-600 hover:text-ink-900 underline underline-offset-4"
                    >
                      {space.docText}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
