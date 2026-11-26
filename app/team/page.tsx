import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Scale, GraduationCap, ShieldCheck, Download, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Team | The Lingering Shadows Initiative',
  description:
    'Meet the advocates, panel lawyers, and researchers of the Lingering Shadows Initiative providing legal consultations, strategic representation, and paralegal defense across India.',
};

const FOUNDERS = [
  {
    name: 'Ujjaini Chatterji',
    role: 'Founder & Litigating Advocate',
    image: '/images/team/ujjaini-chatterji.jpg',
    education: 'LL.M. in Human Rights Law, University of Nottingham (UK) • Developing Solutions Scholar',
    bar: 'Supreme Court of India & High Courts',
    portfolioLink: '/docs/unveiling-tales-untold-ujjaini.pdf',
    portfolioTitle: 'Tales Untold Portfolio',
    bio: [
      'Ujjaini Chatterji is a New Delhi–based human rights lawyer specialising in strategic constitutional litigation, feminist human rights lawyering, and refugee defense. She represents Rohingya women and children before Indian courts.',
      'Ujjaini argued landmark public interest litigations in the Supreme Court of India, including Sabera Khatoon v. Union of India, establishing refugees’ fundamental right to healthcare and protection from indefinite detention. In 2026, she received the "Your Nottingham Alumni Award" from the University of Nottingham. She is a Constitution Defender Fellow at CLPR and a two-time UN CSW delegate.',
    ],
    tags: ['Constitutional Law', 'Refugee Defense', 'Storytelling & Theatre', 'UN CSW Delegate'],
  },
  {
    name: 'Mayurapriyan Thangavel',
    role: 'Founder, Advocate & Artist',
    image: '/images/team/mayurapriyan-thangavel.jpg',
    education: 'B.A. LL.B., Symbiosis International University (2017)',
    bar: 'Supreme Court of India & Delhi High Court',
    portfolioLink: '/docs/artist-portfolio-mayura.pdf',
    portfolioTitle: 'Artist Portfolio',
    bio: [
      'Mayurapriyan Thangavel is a New Delhi–based advocate specialising in feminist constitutional law and strategic human rights litigation. His practice focuses on representing Dalit, Bahujan, tribal, Muslim, and Rohingya refugee communities.',
      'He led the constitutional challenge to the Citizenship Amendment Act (CAA), 2019, and its 2024 Rules on behalf of MP P. Sandosh Kumar before the Supreme Court. A nominated delegate to the 2025 UN Commission on the Status of Women, Mayurapriyan is also a visual artist with embassy exhibitions and a theatre actor performing across India.',
    ],
    tags: ['Statelessness', 'CAA Litigations', 'Visual Art & Embassies', 'Theatre Actor'],
  },
];

const PANEL_LAWYERS = [
  {
    name: 'Mahvish Fatima',
    role: 'Panel Lawyer, Advocate',
    image: '/images/team/mahvish-fatima.jpg',
    education: 'B.A. LL.B. (Hons.), Faculty of Law, Aligarh Muslim University (2025)',
    bar: 'Bar Council of Delhi',
    bio: 'Mahvish Fatima practices across courts in India, including the Supreme Court of India, focusing on statelessness, refugees, asylum, and habeas corpus petitions challenging unlawful detention. She co-founded the peer-reviewed legal initiative Virtuosity Legal and has co-authored international research on technology and consumer law.',
    tags: ['Statelessness & Citizenship', 'Habeas Corpus', 'Virtuosity Legal Co-Founder'],
  },
  {
    name: 'Izeen Fatima',
    role: 'Panel Lawyer, Advocate',
    image: '/images/team/izeen-fatima.jpg',
    education: 'B.A. (Hons.) Psychology (Jamia Millia Islamia), LL.B. (Campus Law Centre, University of Delhi), Adv. PG Diploma in IHL (NALSAR)',
    bar: 'Practicing Advocate, New Delhi',
    bio: 'Izeen Fatima brings an interdisciplinary mix of legal rigour, psychology, and child protection to LSI. A POCSO TTT-trained expert, UNESCO Changemaker, and UNAI Millennium Fellow, she specializes in gender justice, detention justice, and refugee rights.',
    tags: ['Gender Rights & SGBV', 'Detention Justice', 'POCSO & Child Rights'],
  },
  {
    name: 'Tanzeel Islam Khan',
    role: 'Panel Lawyer, Advocate',
    image: '/images/team/tanzeel-islam-khan.jpg',
    education: 'B.A. LL.B. (Hons.), Faculty of Law, Aligarh Muslim University (2026)',
    bar: 'Bar Council of Delhi',
    bio: 'Tanzeel Islam Khan combines constitutional law, technology governance, and political thought. He is the Co-Founder of Virtuosity Legal and a regular columnist for national legal publications including LiveLaw, with publications on state accountability and AI regulation.',
    tags: ['Constitutional Law', 'Technology Governance', 'Legal Commentary'],
  },
  {
    name: 'Ms. Bisman Kaur',
    role: 'Legal Intern & Researcher',
    image: '/images/team/bisman-kaur.jpg',
    education: 'Fourth-Year B.A. LL.B. (Hons.), RGNUL Punjab',
    bar: 'Specialising in Public International Law',
    bio: 'Bisman Kaur specializes in Refugee & Migration Law, International Humanitarian Law, and Transitional Justice. She assists in legal research, constitutional submissions, and Special Leave Petitions before the Supreme Court of India.',
    tags: ['Refugee Law', 'Special Leave Petitions', 'Statelessness Research'],
  },
];

export default function TeamPage() {
  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-600 block">
            Our People & Advocates
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
            The advocates in the field.
          </h1>
          <p className="text-ink-600 text-lg leading-relaxed font-sans">
            A self-sustaining team of dedicated young lawyers, researchers, and paralegals 
            visiting settlements, conducting trainings, and arguing frontline constitutional matters.
          </p>
        </div>

        {/* FOUNDERS SECTION */}
        <div className="space-y-8">
          <div className="border-b border-parchment-300 pb-3 flex items-center justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
              Founders
            </h2>
            <span className="text-xs font-mono text-terracotta-600 uppercase tracking-widest">
              Delhi NCR & Coimbatore
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FOUNDERS.map((founder, i) => (
              <div
                key={i}
                className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 shadow-postcard flex flex-col justify-between hover:border-terracotta-300 transition-all"
              >
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="relative w-32 aspect-[3/4] rounded-2xl overflow-hidden border border-parchment-300 shadow-sm shrink-0">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1 text-center sm:text-left">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-terracotta-100 text-terracotta-700 text-[10px] font-bold uppercase tracking-wider">
                        {founder.role}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-ink-900">
                        {founder.name}
                      </h3>
                      <p className="text-xs text-ink-600 font-medium">
                        {founder.bar}
                      </p>
                      <p className="text-xs text-ink-500 pt-1 leading-snug">
                        {founder.education}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-ink-700 leading-relaxed">
                    {founder.bio.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {founder.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-parchment-200 text-ink-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-parchment-300 flex items-center justify-between">
                  <Link
                    href={`/founders#${founder.name.toLowerCase().includes('ujjaini') ? 'ujjaini' : 'mayurapriyan'}`}
                    className="text-xs font-bold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1"
                  >
                    <span>Full Creative Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={founder.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-600 hover:text-ink-900 underline underline-offset-4"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{founder.portfolioTitle}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL LAWYERS & RESEARCHERS SECTION */}
        <div className="space-y-8">
          <div className="border-b border-parchment-300 pb-3 flex items-center justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
              Panel Lawyers & Legal Researchers
            </h2>
            <span className="text-xs font-mono text-sage-700 uppercase tracking-widest">
              Advocates & Fellows
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PANEL_LAWYERS.map((member, i) => (
              <div
                key={i}
                className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 shadow-sm flex flex-col justify-between hover:border-sage-400 transition-all"
              >
                <div className="space-y-5">
                  <div className="flex items-start gap-5">
                    <div className="relative w-24 aspect-[3/4] rounded-2xl overflow-hidden border border-parchment-300 shadow-sm shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-sage-100 text-sage-800 text-[10px] font-bold uppercase tracking-wider">
                        {member.role}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-ink-900">
                        {member.name}
                      </h3>
                      <p className="text-xs text-ink-600 font-medium">
                        {member.bar}
                      </p>
                      <p className="text-xs text-ink-500 pt-1 leading-snug">
                        {member.education}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-ink-700 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {member.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-parchment-200 text-ink-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-parchment-300/80 flex items-center justify-between text-xs text-ink-500">
                  <span>The Lingering Shadows Initiative</span>
                  <span className="font-mono text-[10px] uppercase text-terracotta-600">Active Panel</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
