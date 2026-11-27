import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Scale, Shield, Sparkles, BookOpen, Compass, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | The Lingering Shadows Initiative',
  description:
    'Overview, Mission & Vision, and Core Strategic Objectives of The Lingering Shadows Initiative (LSI).',
};

const MANIFESTATIONS = [
  { num: '01', title: 'Pro-Bono Constitutional Litigation', desc: 'Challenging indefinite detentions, summary deportations, and defending fundamental rights before Supreme Court and High Courts.' },
  { num: '02', title: 'Para-Legal Advisory Forums', desc: 'Direct on-ground legal clinics in marginalized settlements across Delhi NCR, Assam, and Tamil Nadu.' },
  { num: '03', title: 'Specialised Legal Aid Workshops', desc: 'Practical training on citizenship documentation, criminal procedure, and fundamental rights literacy.' },
  { num: '04', title: 'Ground Reports, Papers & Digital Blogs', desc: 'Empirical whitepapers, investigative dossiers (The Parchaayi Project), and national newspaper columns.' },
  { num: '05', title: 'Educational Competitions for Students', desc: 'Debates, constitutional moot courts, and essay prizes fostering democratic ethos in colleges and schools.' },
  { num: '06', title: 'Conferences, Talks & Panel Dialogues', desc: 'Public convenings bringing together retired judges, litigators, displaced families, and academics.' },
  { num: '07', title: 'Multilateral International Collaborations', desc: 'Submissions to United Nations bodies (including UN CSW) carrying frontline testimonies into global forums.' },
  { num: '08', title: 'T-T-T Sessions (POSH, POCSO, Cyber)', desc: 'Training-of-Trainers programs building organizational capacity on workplace safety and child protection.' },
  { num: '09', title: 'Certificate Legal Courses', desc: 'Structured academic curricula on refugee jurisprudence, statelessness, and feminist lawyering.' },
  { num: '10', title: 'Podcasts & Oral History Recordings', desc: 'Preserving unwritten histories and recorded interviews with community organizers and elders.' },
  { num: '11', title: 'Live Theatre, Screenings & Storytelling', desc: 'Bilingual theatrical productions in English and Tamil, and community screenings of independent cinema.' },
  { num: '12', title: 'Fine Art & Painting Exhibitions', desc: 'Visual arts displayed across international embassies and galleries, translating human struggles into form.' },
];

const OBJECTIVES = [
  {
    num: '01',
    title: 'Protection of Stateless Persons',
    pillar: 'STRATEGIC LITIGATION',
    desc: 'Protection of stateless persons who are vulnerable to unlawful detentions and even summary deportation through strategic constitutional litigation before Indian High Courts and the Supreme Court.',
  },
  {
    num: '02',
    title: 'Fundamental Rights in Detention Centres',
    pillar: 'ARTICLE 21 DEFENSE',
    desc: 'Strategic litigation to strictly implement the non-derogable right to life, bodily dignity, personal liberty, and essential healthcare for detainees confined in holding facilities.',
  },
  {
    num: '03',
    title: 'Building a Self-Sustaining Legal Cadre',
    pillar: 'FUTURE DEFENDERS',
    desc: 'To train, mentor, and cultivate a self-sustaining network of dedicated young lawyers and forensic researchers who champion citizenship and refugee rights beyond project timelines.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Editorial Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="archival-stamp text-terracotta-700 border-terracotta-600 bg-parchment-50">
              MISSION, ORIGINS & STRATEGIC MANDATE
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink-950 leading-tight">
            Where the lingering shadows <br />
            <span className="italic font-normal text-terracotta-700">meet the light.</span>
          </h1>
          <p className="text-ink-800 text-lg sm:text-xl leading-relaxed font-sans max-w-2xl mx-auto">
            A program to amplify the voices of the disenfranchised and marginalised social groups through litigation within courtrooms and through reporting, advocacy, art, storytelling, theatre and films outside the courtrooms.
          </p>
        </div>

        {/* Overview Broadsheet */}
        <div className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-14 shadow-brutalist">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-ink-800 leading-relaxed text-base sm:text-lg">
              <div className="flex items-center gap-2">
                <span className="w-5 h-px bg-terracotta-600" />
                <span className="font-mono text-xs uppercase tracking-monumental text-terracotta-600 font-bold block">
                  FOUNDED 2022 • UJJAINI CHATTERJI & MAYURAPRIYAN THANGAVEL
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-950 leading-tight">
                Extending legal and paralegal support to the nameless and stateless.
              </h2>
              
              <p className="drop-cap font-sans">
                In 2022, Ujjaini Chatterji, along with Mayurapriyan Thangavel, Advocate, founded the Lingering Shadows Initiative through which their Team of Advocates and paralegals regularly visit the communities of migrant workers and refugees, record their stories and narrative for publication in various mediums.
              </p>
              
              <p className="font-sans">
                The team of advocates also provides extensive legal consultations, representations and training, to the workers, women and refugees living in Delhi NCR, Assam and Tamil Nadu, which impacts 1,500 families across India.
              </p>
              
              <blockquote className="my-4 p-6 rounded-2xl bg-parchment-100 border-l-4 border-terracotta-600 font-serif italic text-base sm:text-lg text-ink-950 leading-relaxed shadow-sm">
                &ldquo;What started off as an academic endeavour has blossomed into a pro-bono litigation program that extends legal and paralegal support to the nameless, stateless persons living on the fringes of bustling cities; battling for mere survival from the margins of civil societies, and lingering in the shadows of tall rights of freedom and liberty asking to be counted, recognised and treated as humans.&rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-parchment-100 border-2 border-ink-900 p-8 text-center space-y-5 shadow-brutalist">
                <div className="relative w-44 h-44 mx-auto">
                  <Image
                    src="/logos/lsi.svg"
                    alt="LSI Emblem"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="border-t border-parchment-300 pt-5 space-y-1.5 font-mono">
                  <h3 className="font-serif font-bold text-2xl text-ink-950">
                    The Lingering Shadows
                  </h3>
                  <p className="text-xs text-terracotta-700 font-bold uppercase tracking-widest">
                    INITIATIVE • A REGISTERED TRUST
                  </p>
                  <p className="text-[11px] text-ink-600 font-sans mt-2 leading-relaxed">
                    Door No. 24, ST-6 (Chitra Nagar), Narasimhanaickenpalayam, Coimbatore, Tamil Nadu - 641017
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 12 Channels of Living the Vision */}
        <div className="rounded-3xl bg-ink-950 text-parchment-100 p-8 sm:p-14 border-2 border-ink-900 shadow-2xl space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs text-terracotta-400 uppercase tracking-monumental font-bold">
              MISSION & LIVING PRAXIS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-parchment-50 leading-tight">
              The LSI lives its vision by supporting:
            </h2>
            <p className="text-parchment-300 text-sm sm:text-base font-sans">
              Twelve concrete disciplines through which we defend human rights and tell unwritten stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MANIFESTATIONS.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-ink-900/90 border border-ink-800 hover:border-terracotta-500 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-terracotta-400 font-bold block">
                    [{item.num}]
                  </span>
                  <h3 className="font-serif text-lg font-bold text-parchment-100 group-hover:text-terracotta-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-parchment-300 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Strategic Pillars */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta-700 font-bold block">
              OBJECTIVES OF LSI
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-950">
              Core Strategic Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OBJECTIVES.map((obj) => (
              <div
                key={obj.num}
                className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 sm:p-10 shadow-brutalist flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-parchment-300 pb-3">
                    <span className="font-mono text-xs font-bold text-terracotta-700">
                      PILLAR {obj.num}
                    </span>
                    <span className="archival-stamp text-ink-900 border-ink-900 bg-parchment-100 text-[9px]">
                      {obj.pillar}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-ink-950">
                    {obj.title}
                  </h3>
                  <p className="text-sm text-ink-800 leading-relaxed font-sans">
                    {obj.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-parchment-300 font-mono text-[10px] text-ink-500 uppercase">
                  CONSTITUTIONAL TRUST MANDATE
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Link to Team Page */}
        <div className="p-8 sm:p-14 rounded-3xl bg-parchment-50 border-2 border-ink-900 text-center space-y-6 shadow-brutalist">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950">
            Meet the Founders & Legal Team
          </h2>
          <p className="text-sm sm:text-base text-ink-700 font-sans max-w-xl mx-auto">
            Discover the advocates, panel lawyers, and researchers of LSI, along with the creative portfolios of founders Ujjaini Chatterji and Mayurapriyan Thangavel.
          </p>
          <div>
            <Link
              href="/team"
              data-cursor="TEAM"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-mono text-xs uppercase tracking-wider transition-colors shadow-md active:scale-95 group"
            >
              <span>View Team & Founders Page</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
