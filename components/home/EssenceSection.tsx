import Link from 'next/link';
import { Shield, Users, BookOpen, Globe2, ArrowRight } from 'lucide-react';

const STATS = [
  {
    number: '1,500+',
    label: 'Refugee & Migrant Families',
    desc: 'Impacted through direct legal representation, paralegal support, and consultations across India.',
    icon: Users,
  },
  {
    number: '2022',
    label: 'Academic Inquiry to Pro-Bono Force',
    desc: 'Blossomed from research into a frontline constitutional defense for stateless and detained persons.',
    icon: Shield,
  },
  {
    number: '4 Mediums',
    label: 'Beyond Courtroom Practice',
    desc: 'Integrating theatre, visual arts, investigative reporting, and constitutional fairy tales.',
    icon: BookOpen,
  },
  {
    number: 'Global',
    label: 'Advocacy & Field Exploration',
    desc: 'Delegations to the UN CSW, University of Nottingham, and grassroots retreats.',
    icon: Globe2,
  },
];

export default function EssenceSection() {
  return (
    <section className="py-20 lg:py-28 bg-parchment-50 border-y border-parchment-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-600 block">
            The Living Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
            The fever dream of litigating lawyers who live on stories.
          </h2>
          <p className="text-ink-600 text-base sm:text-lg leading-relaxed font-sans">
            We believe that the law and its practice is truly possible only when an advocate nourishes 
            themselves with the rich, scattered narratives of human lives.
          </p>
        </div>

        {/* Narrative Feature Card */}
        <div className="rounded-3xl bg-parchment-100 border border-parchment-300 p-8 sm:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5 text-ink-800 leading-relaxed text-base sm:text-lg">
              <p>
                What started off as an academic endeavour has blossomed into a pro-bono litigation 
                program extending legal and paralegal support to the nameless, stateless persons 
                living on the fringes of bustling cities.
              </p>
              <p className="text-ink-600 font-serif italic text-lg sm:text-xl border-l-2 border-terracotta-500 pl-4 my-4">
                &ldquo;Battling for mere survival from the margins of civil societies, and lingering 
                in the shadows of tall rights of freedom and liberty—asking to be counted, recognised, 
                and treated as humans.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-ink-700">
                Through LSI, our team of advocates and paralegals regularly visits communities in 
                Delhi NCR, Assam, and Tamil Nadu. We record, build, narrate, and live stories that are often 
                overlooked… stories that defy social norms… stories that make us uncomfortable.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start p-6 rounded-2xl bg-parchment-200/70 border border-parchment-300/60 space-y-4">
              <div className="w-10 h-10 rounded-full bg-terracotta-100 text-terracotta-700 flex items-center justify-center font-serif font-bold text-lg">
                §
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-900">
                Strategic Constitutional Litigation
              </h3>
              <p className="text-xs text-ink-600 leading-relaxed text-center lg:text-left">
                Direct legal representation before Foreigners’ Tribunals, High Courts, and the Supreme Court of India 
                on unlawful detention, custodial death, refugee healthcare, and constitutional equality.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta-600 hover:text-terracotta-700 uppercase tracking-wider pt-2"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-parchment-100/60 border border-parchment-200 hover:border-terracotta-300 hover:bg-parchment-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-parchment-200/80 group-hover:bg-terracotta-50 text-terracotta-600 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-serif text-3xl font-bold text-ink-900 mb-1 group-hover:text-terracotta-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-ink-700 mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-ink-500 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
