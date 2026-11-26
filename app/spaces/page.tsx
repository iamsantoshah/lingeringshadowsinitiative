import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowUpRight, GraduationCap, BookOpen, Compass, Feather, MessageCircle, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Other Spaces | The Lingering Shadows Initiative',
  description:
    'Explore the connected ecosystem of LSI: The Young Lawyers Network, The Young Lawyers Diary, Rising Peacock, and Virtuosity Legal.',
};

export default function SpacesPage() {
  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-600 block">
            Our Ecosystem & Sister Collectives
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
            Our other spaces.
          </h1>
          <p className="text-ink-600 text-lg leading-relaxed font-sans">
            Rooms where young advocates train, lived experiences are written, students transform education, 
            and legal thought is rigorously published.
          </p>
        </div>

        {/* 1. The Young Lawyers Network */}
        <section id="young-lawyers-network" className="scroll-mt-24">
          <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-14 shadow-postcard space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-parchment-300 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-terracotta-500" />
                  <span>Advocacy Collective</span>
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
                  The Young Lawyers Network
                </h2>
              </div>
              <a
                href="/docs/young-lawyers-network-proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-semibold text-xs tracking-wider uppercase transition-all shadow-sm self-start md:self-auto"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Proposal PDF</span>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-ink-800 leading-relaxed text-sm sm:text-base">
              <div className="lg:col-span-7 space-y-4">
                <p>
                  A network of <strong>dynamic, inventive, skilled, articulate, accountable, and professional human rights lawyers</strong> with exposure in the legal field and immense ambition to develop and expand human rights lawyering as an active, viable practice.
                </p>
                <p>
                  The Network functions as an incubator and collaborative forum for early-career advocates committed to pro-bono defense, strategic constitutional litigation, and legal empowering of marginalized groups across South Asia.
                </p>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-parchment-100 border border-parchment-200 space-y-3">
                <h3 className="font-serif font-bold text-lg text-ink-900">
                  Core Network Pillars:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-ink-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-2 shrink-0" />
                    <span>Specialized training on litigation drafting, PILs, and habeas corpus petitions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-2 shrink-0" />
                    <span>Mentorship under senior constitutional practitioners and international experts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-2 shrink-0" />
                    <span>Cross-regional paralegal brigades and emergency field response teams.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Young Lawyers Diary */}
        <section id="young-lawyers-diary" className="scroll-mt-24">
          <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-14 shadow-postcard space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-parchment-300 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-sage-700 flex items-center gap-1.5">
                  <Feather className="w-4 h-4 text-sage-600" />
                  <span>Reflective Journal</span>
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
                  The Young Lawyers Diary
                </h2>
              </div>
              <span className="text-xs font-mono text-ink-500 uppercase tracking-widest bg-parchment-200 px-3 py-1 rounded-full self-start md:self-auto">
                Living Blog & Gallery
              </span>
            </div>

            <div className="space-y-4 text-ink-800 leading-relaxed text-sm sm:text-base">
              <p>
                <strong>A blog for young lawyers to share their lived experiences.</strong> The courtroom often scrubs the emotional and human texture out of legal files. The Young Lawyers Diary provides a space where young practitioners write about the sleepless nights before a deportation hearing, the camaraderie in remote settlements, the triumphs, the defeats, and the moral weight of lawyering.
              </p>
              <p className="text-xs sm:text-sm text-ink-600 font-serif italic border-l-2 border-sage-600 pl-4 py-1">
                &ldquo;Where the advocate steps down from the podium to write as a human being who bears witness.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* 3 & 4. Rising Peacock & Virtuosity Legal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Rising Peacock */}
          <div id="rising-peacock" className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-10 shadow-postcard flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="relative w-16 h-16 rounded-2xl bg-parchment-100 border border-parchment-300 p-2">
                  <Image
                    src="/logos/rising-peacock.svg"
                    alt="Rising Peacock Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-ink-600 bg-parchment-200 px-3 py-1 rounded-full">
                  Educational Wing
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-ink-900">
                  Rising Peacock
                </h3>
                <p className="text-xs uppercase font-semibold text-terracotta-600 tracking-wider mt-1">
                  Transforming Education & Leadership
                </p>
              </div>

              <p className="text-sm text-ink-700 leading-relaxed">
                The educational wing of Chamber MU and LSI that actively works towards transforming education through globally aligned learning, educator excellence, and future-ready student development.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-parchment-300">
              <a
                href="https://risingpeacock.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700"
              >
                <span>Visit Rising Peacock</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Virtuosity Legal */}
          <div id="virtuosity-legal" className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-10 shadow-postcard flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="relative w-16 h-16 rounded-2xl bg-parchment-100 border border-parchment-300 p-2">
                  <Image
                    src="/logos/virtuosity-legal.png"
                    alt="Virtuosity Legal Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-ink-600 bg-parchment-200 px-3 py-1 rounded-full">
                  Knowledge Partner
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-ink-900">
                  Virtuosity Legal
                </h3>
                <p className="text-xs uppercase font-semibold text-sage-700 tracking-wider mt-1">
                  Academic Rigour & Jurisprudence
                </p>
              </div>

              <p className="text-sm text-ink-700 leading-relaxed">
                The Knowledge Partner to Chamber MU and LSI. Virtuosity Legal is an independent, student-driven initiative with a clear vision: to bring clarity, authenticity, and depth to the study and critical practice of law.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-parchment-300">
              <a
                href="https://virtuositylegal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sage-700 hover:text-sage-800"
              >
                <span>Visit Virtuosity Legal</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
