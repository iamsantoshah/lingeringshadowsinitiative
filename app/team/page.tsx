import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Palette, Download, Award, ArrowUpRight, MessageCircle, FileText, CheckCircle2, Clapperboard, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Team & Founders | The Lingering Shadows Initiative',
  description:
    'Meet the founders, litigating advocates, and researchers of The Lingering Shadows Initiative.',
};

const FOUNDERS = [
  {
    id: 'ujjaini',
    name: 'Ujjaini Chatterji, Advocate',
    role: 'Co-Founder & Litigating Advocate',
    image: '/images/team/ujjaini-chatterji.jpg',
    education: 'LL.M. in Human Rights Law (University of Nottingham) • Constitution Defender Fellow',
    bar: 'Supreme Court of India & High Courts',
    bio: 'Ujjaini Chatterji is a New Delhi–based human rights lawyer specialising in strategic constitutional litigation, feminist human rights lawyering, and refugee rights. She represents Rohingya women and children before Indian courts. Ujjaini argued in landmark cases including Sabera Khatoon v. Union of India, affirming refugee rights to healthcare and protection from indefinite detention. She is also leading and arguing the public interest litigation in the Supreme Court of India against custodial deaths and indefinite detention of Rohingya refugees. Ujjaini is a “Constitution Defender Fellow” at the Centre for Law and Policy Research and a two-time delegate to the UN Commission on the Status of Women. She holds an LL.M. in Human Rights Law from the University of Nottingham and trained with the European Inter-University Centre.',
    award: 'In 2026, Ujjaini was awarded the "Your Nottingham Alumni Award" by the University of Nottingham for her contribution as an advocate and international human rights lawyer supporting displaced and refugee communities.',
    creativeTitle: 'Unveil Tales Untold with Ujjaini',
    creativeSubtitle: 'FOLKLORE, SCI-FI & CONSTITUTIONAL MORALITY',
    creativeDesc: 'Ujjaini collects, writes, and narrates fairy tales, folklore, thrillers, romance, adventure, and science fiction intertwined with constitutional morals of equality, fraternity, free speech, justice, and democracy. Her storytelling infuses joy into understanding the constitution, inspiring audiences across schools, colleges, and civic groups to dream, think, and argue.',
    pdfLink: '/docs/unveiling-tales-untold-ujjaini.pdf',
    pdfLabel: 'Download Storytelling Portfolio PDF',
    contactEmail: 'storiesandujjaini@gmail.com',
  },
  {
    id: 'mayurapriyan',
    name: 'Mayurapriyan Thangavel, Advocate',
    role: 'Co-Founder, Artist & Litigating Advocate',
    image: '/images/team/mayurapriyan-thangavel.jpg',
    education: 'B.A. LL.B. (Symbiosis International University, 2017) • Nominated UN CSW Delegate 2025',
    bar: 'Supreme Court of India & Delhi High Court',
    bio: 'Mayurapriyan Thangavel is a New Delhi–based advocate specialising in feminist constitutional law and strategic human rights litigation. His practice focuses on representing Dalit, Bahujan, tribal, Muslim, and Rohingya refugee communities, with an emphasis on issues of statelessness, indefinite detention and deportation. He led the constitutional challenge to the Citizenship Amendment Act, 2019, and its 2024 Rules, on behalf of Member of Parliament P. Sandosh Kumar, arguing its incompatibility with India’s constitutional guarantees of equality and non-discrimination. Mayurapriyan also represents Rohingya women and children before the Delhi High Court and Supreme Court of India. He is a regular national columnist writing on equality, Dravidian politics, constitutionalism, and scientific temper.',
    creativeTitle: 'Visual Art & Bilingual Stagecraft Practice',
    creativeSubtitle: 'FINE ART EXHIBITIONS & TAMIL/ENGLISH THEATRE',
    creativeDesc: 'Mayurapriyan is an artist and an actor. His paintings have been exhibited across international embassies and cultural galleries. As an actor and director, he performs in theatrical productions and short films in English and Tamil language, using performance to pierce societal apathy.',
    pdfLink: '/docs/artist-portfolio-mayura.pdf',
    pdfLabel: 'Download Artist Portfolio PDF',
    whatsappInquiry: 'https://wa.me/918860799513?text=Art%20Commission%20and%20Theatre%20Inquiry%20Mayura',
  },
];

const PANEL_LAWYERS = [
  {
    name: 'Mahvish Fatima, Advocate',
    role: 'Panel Lawyer',
    image: '/images/team/mahvish-fatima.jpg',
    qualifications: 'B.A. LL.B. (Hons.)',
    practice: 'Asylum Law & Habeas Corpus',
    bio: 'Advocate practicing across trial courts, High Courts, and the Supreme Court of India, focusing on statelessness, refugees, asylum law, and habeas corpus petitions challenging arbitrary detention. Co-founder of Virtuosity Legal.',
  },
  {
    name: 'Izeen Fatima, Advocate',
    role: 'Panel Lawyer',
    image: '/images/team/izeen-fatima.jpg',
    qualifications: 'B.A. (Hons.) (Psychology), LL.B.',
    practice: 'Forensic Law & Gender Justice (SGBV)',
    bio: 'Advocate bringing an interdisciplinary background in legal practice, forensic psychology, and child protection to LSI. Focuses on gender justice (SGBV), detention conditions, and psychosocial legal aid.',
  },
  {
    name: 'Tanzeel Islam Khan, Advocate',
    role: 'Panel Lawyer',
    image: '/images/team/tanzeel-islam-khan.jpg',
    qualifications: 'B.A. LL.B. (Hons.)',
    practice: 'Tech Governance & Administrative Accountability',
    bio: 'Advocate working at the intersection of constitutional law, technology governance, and administrative accountability. Co-founder of Virtuosity Legal and frequent columnist for LiveLaw.',
  },
  {
    name: 'Ms. Bisman Kaur',
    role: 'Legal Intern & Researcher',
    image: '/images/team/bisman-kaur.jpg',
    qualifications: 'Fourth-Year B.A. LL.B. (Hons.)',
    practice: 'International Humanitarian Law (IHL)',
    bio: 'Legal intern specialising in Refugee & Migration Law and International Humanitarian Law (IHL), conducting comparative research and case digests for Special Leave Petitions.',
  },
];

export default function TeamPage() {
  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Editorial Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="archival-stamp text-terracotta-700 border-terracotta-600 bg-parchment-50">
              COLLECTIVE REGISTER // PRACTICE LEADS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink-950 leading-tight">
            Our People & Advocates.
          </h1>
          <p className="text-ink-800 text-lg sm:text-xl leading-relaxed font-sans max-w-2xl mx-auto">
            Ujjaini Chatterji and Mayurapriyan Thangavel collaborate on constitutional litigation, international diplomacy, and policy advocacy rooted in social justice. It is through this collaborative effort that LSI is born and thriving.
          </p>
        </div>

        {/* Section 1: Founders & Practice Leads */}
        <div id="founders" className="space-y-12 scroll-mt-24">
          <div className="border-b border-ink-900/15 pb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta-600 font-bold block">
                CO-FOUNDERS & PRINCIPAL LITIGATORS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 mt-1">
                Founders & Practice Leads
              </h2>
            </div>
            <span className="archival-stamp text-terracotta-700 border-terracotta-600 bg-parchment-50">
              SUPREME COURT & HIGH COURT CADRE
            </span>
          </div>

          <div className="space-y-14">
            {FOUNDERS.map((f) => (
              <div
                key={f.id}
                className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-12 lg:p-14 shadow-brutalist space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Photo & Quick Actions (Cols 1-4) */}
                  <div className="lg:col-span-4 flex flex-col items-center">
                    <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-ink-900 shadow-md">
                      <Image
                        src={f.image}
                        alt={f.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    
                    <div className="mt-5 text-center space-y-1">
                      <h3 className="font-serif text-2xl font-bold text-ink-950">{f.name}</h3>
                      <p className="font-mono text-xs uppercase text-terracotta-700 font-bold tracking-wider">{f.role}</p>
                      <p className="text-xs text-ink-600 font-mono">{f.bar}</p>
                    </div>

                    <div className="mt-5 w-full max-w-[280px]">
                      <a
                        href={f.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="PDF"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-mono text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 group"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span className="text-center">{f.pdfLabel}</span>
                      </a>
                    </div>
                  </div>

                  {/* Bio & Creative Portfolio (Cols 5-12) */}
                  <div className="lg:col-span-8 space-y-6 text-ink-800 text-base sm:text-lg leading-relaxed font-sans">
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-parchment-100 border border-parchment-300 font-mono text-xs text-terracotta-700 font-bold uppercase tracking-wider">
                        {f.education}
                      </div>
                      
                      <p className="drop-cap pt-2">
                        {f.bio}
                      </p>
                    </div>

                    {f.award && (
                      <div className="p-5 rounded-2xl bg-terracotta-50 border border-terracotta-200 flex items-start gap-3.5 shadow-sm">
                        <Award className="w-6 h-6 text-terracotta-600 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-ink-900 leading-normal font-sans">
                          {f.award}
                        </p>
                      </div>
                    )}

                    {/* Creative Portfolio Curation */}
                    <div className="p-7 rounded-2xl bg-parchment-100 border-2 border-ink-900/30 space-y-3 relative overflow-hidden">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-terracotta-700">
                        {f.id === 'ujjaini' ? (
                          <BookOpen className="w-4 h-4 text-terracotta-600" />
                        ) : (
                          <Palette className="w-4 h-4 text-sage-700" />
                        )}
                        <span>{f.creativeTitle}</span>
                      </div>
                      
                      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500 font-bold">
                        {f.creativeSubtitle}
                      </div>

                      <p className="text-sm text-ink-800 leading-relaxed font-sans">
                        {f.creativeDesc}
                      </p>

                      {f.contactEmail && (
                        <div className="pt-3 border-t border-parchment-300 flex items-center justify-between font-mono text-xs text-ink-700">
                          <span>Storytelling & Parable Masterclasses:</span>
                          <a
                            href={`mailto:${f.contactEmail}`}
                            className="text-terracotta-700 underline font-bold hover:text-terracotta-900"
                          >
                            {f.contactEmail}
                          </a>
                        </div>
                      )}

                      {f.whatsappInquiry && (
                        <div className="pt-3 border-t border-parchment-300 flex items-center justify-between">
                          <span className="font-mono text-xs text-ink-700">Galleries, Embassies & Theatres:</span>
                          <a
                            href={f.whatsappInquiry}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-terracotta-700 font-bold hover:underline"
                          >
                            <span>Commission / Stage Inquiry</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Panel Lawyers & Legal Interns */}
        <div className="space-y-10">
          <div className="border-b border-ink-900/15 pb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sage-800 font-bold block">
                TRIAL CADRE & FORENSIC RESEARCH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950 mt-1">
                Panel Lawyers & Researchers
              </h2>
            </div>
            <span className="font-mono text-xs text-ink-500 uppercase">
              TRIAL COURTS • HIGH COURTS • RESEARCH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PANEL_LAWYERS.map((p, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 shadow-brutalist flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform"
              >
                <div className="flex gap-5 items-start">
                  <div className="relative w-24 h-28 rounded-2xl overflow-hidden border-2 border-ink-900 shrink-0 shadow-sm">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="archival-stamp text-ink-900 border-ink-900 bg-parchment-100 text-[10px]">
                      {p.role}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-950 mt-1">
                      {p.name}
                    </h3>
                    <p className="text-xs font-mono text-terracotta-700 font-bold">
                      {p.qualifications}
                    </p>
                    <p className="text-[11px] font-mono text-sage-800">
                      {p.practice}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-ink-800 leading-relaxed font-sans border-t border-parchment-300 pt-3">
                  {p.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
