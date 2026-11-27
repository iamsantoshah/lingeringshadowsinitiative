import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowUpRight, GraduationCap, BookOpen, Compass, Feather, ExternalLink, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Other Spaces | The Lingering Shadows Initiative',
  description:
    'Ecosystem initiatives affiliated with LSI: The Young Lawyers Network, The Young Lawyers Diary, Rising Peacock, and Virtuosity Legal.',
};

export default function SpacesPage() {
  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="archival-stamp text-terracotta-700 border-terracotta-600 bg-parchment-50">
              ECOSYSTEM & SISTER SPACES // CHAMBER.MU AFFILIATE
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink-950 leading-tight">
            Our other spaces.
          </h1>
          <p className="text-ink-800 text-lg sm:text-xl leading-relaxed font-sans max-w-2xl mx-auto">
            Rooms where stories are made and shared. Step into any room in the connected ecosystem of LSI and Chamber.MU.
          </p>
        </div>

        {/* 1. The Young Lawyers Network */}
        <section id="young-lawyers-network" className="scroll-mt-24">
          <div className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-14 shadow-brutalist space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-parchment-300 pb-5">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-terracotta-700 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-terracotta-600" />
                  <span>PROFESSIONAL LEGAL NETWORK</span>
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950">
                  The Young Lawyers Network
                </h2>
              </div>
              <a
                href="/docs/young-lawyers-network-proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="PDF"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-mono text-xs uppercase tracking-wider transition-all shadow-sm self-start md:self-auto group active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Proposal PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <p className="text-base sm:text-lg text-ink-800 leading-relaxed font-sans">
              A network of <strong>dynamic, inventive, skilled, articulate, accountable and professional human rights lawyers</strong> with exposure in the legal field and immense ambition to develop and expand human rights lawyering as a practice.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-ink-700">
              <div className="p-4 rounded-xl bg-parchment-100 border border-parchment-300">
                <span className="text-terracotta-700 font-bold block mb-1">01. LITIGATION CLINICS</span>
                Hands-on drafting and courtroom advocacy before High Courts and tribunals.
              </div>
              <div className="p-4 rounded-xl bg-parchment-100 border border-parchment-300">
                <span className="text-terracotta-700 font-bold block mb-1">02. ETHICAL CADRE</span>
                Accountability to client confidentiality and feminist legal principles.
              </div>
              <div className="p-4 rounded-xl bg-parchment-100 border border-parchment-300">
                <span className="text-terracotta-700 font-bold block mb-1">03. GLOBAL EXPOSURE</span>
                Collaborative research and international human rights exchanges.
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Young Lawyers Diary */}
        <section id="young-lawyers-diary" className="scroll-mt-24">
          <div className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-14 shadow-brutalist space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-parchment-300 pb-5">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-sage-800 flex items-center gap-2">
                  <Feather className="w-4 h-4 text-sage-700" />
                  <span>BLOG & REFLECTIONS</span>
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950">
                  The Young Lawyers Diary
                </h2>
              </div>
              <span className="archival-stamp text-sage-800 border-sage-700 bg-sage-50 self-start md:self-auto">
                LIVED EXPERIENCES // FIELD JOURNAL
              </span>
            </div>

            <p className="text-base sm:text-lg text-ink-800 leading-relaxed font-sans">
              A dedicated platform and blog for young lawyers to share their lived experiences from courtrooms, detention centres, rural legal aid clinics, and community visits. Bringing honest perspectives on the psychological and moral reality of human rights lawyering.
            </p>

            <blockquote className="p-6 rounded-2xl bg-parchment-100 border-l-4 border-sage-700 font-serif italic text-base sm:text-lg text-ink-900 leading-relaxed shadow-sm">
              &ldquo;Justice is not a sterile legal theorem; it is forged in the sweat of dusty district court corridors, the tears of mothers outside holding cells, and the courage of junior advocates who refuse to look away.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* 3. Rising Peacock & Virtuosity Legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Rising Peacock */}
          <div className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-12 shadow-brutalist space-y-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-parchment-300 pb-4">
                <span className="archival-stamp text-ochre-700 border-ochre-600 bg-ochre-50">
                  EDUCATIONAL WING
                </span>
                <GraduationCap className="w-6 h-6 text-ochre-600" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-ink-950">
                Rising Peacock
              </h3>

              <p className="text-sm sm:text-base text-ink-800 leading-relaxed font-sans">
                The educational wing of Chamber.MU and LSI that actively works towards transforming education through globally aligned learning, educator excellence, and future-ready student development. Equipping students with critical thinking, ethical leadership, and global civic awareness.
              </p>
            </div>

            <div className="pt-4 border-t border-parchment-300">
              <a
                href="https://risingpeacock.in"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="EXTERNAL"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta-700 font-bold hover:underline"
              >
                <span>Visit Rising Peacock</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Virtuosity Legal */}
          <div className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-12 shadow-brutalist space-y-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-parchment-300 pb-4">
                <span className="archival-stamp text-ink-900 border-ink-900 bg-parchment-100">
                  KNOWLEDGE PARTNER
                </span>
                <BookOpen className="w-6 h-6 text-terracotta-600" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-ink-950">
                Virtuosity Legal
              </h3>

              <p className="text-sm sm:text-base text-ink-800 leading-relaxed font-sans">
                The Knowledge Partner to Chamber.MU and LSI, Virtuosity Legal is an independent, student-driven initiative with a clear vision: to bring clarity, authenticity, and depth to the study and practice of law. Regularly publishing academic commentaries on technology regulation, constitutional theory, and contemporary legal thought.
              </p>
            </div>

            <div className="pt-4 border-t border-parchment-300">
              <a
                href="https://virtuositylegal.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="EXTERNAL"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta-700 font-bold hover:underline"
              >
                <span>Visit Virtuosity Legal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
