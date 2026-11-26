import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, HeartHandshake, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | The Lingering Shadows Initiative',
  description:
    'Discover the origin, mission, 12 manifestations, and core constitutional litigation objectives of the Lingering Shadows Initiative.',
};

const MANIFESTATIONS = [
  'Pro-bono litigation for marginalized communities',
  'Para-legal advisory forums across migrant settlements',
  'Specialised legal & rights-awareness workshops',
  'Ground reports, academic research papers, and digital blogs',
  'Educational and extra-curricular competitions for students',
  'Seminars, talks, conferences, and high-level panels',
  'Representation and collaboration with international forums (UN CSW)',
  'Training and T-T-T Sessions (POSH, POCSO, Cyber Crimes)',
  'Specialized human rights certificate courses',
  'Podcasts centering marginalized lived experiences',
  'Live theatre productions, film screenings & storytelling',
  'Visual art exhibitions hosted across embassies and galleries',
];

const OBJECTIVES = [
  {
    title: 'Protection of Stateless Persons',
    desc: 'Shielding stateless individuals and migrant workers vulnerable to unlawful detention, indefinite internment, and forced deportation through high-stakes strategic constitutional litigation.',
  },
  {
    title: 'Fundamental Rights in Detention Centres',
    desc: 'Direct court intervention to enforce the non-negotiable right to life, personal liberty, humane treatment, and essential healthcare for detainees housed in holding centers across India.',
  },
  {
    title: 'Self-Sustaining Cadre of Advocates',
    desc: 'Building, mentoring, and funding a resilient team of dedicated young lawyers and researchers equipped to defend citizenship and human dignity far beyond project timelines.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-600 block">
            About Our Initiative
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
            Where shadows meet the light.
          </h1>
          <p className="text-ink-600 text-lg leading-relaxed font-sans">
            The Lingering Shadows Initiative (LSI) is a program to amplify the voices of 
            the disenfranchised and marginalised social groups through litigation within courtrooms 
            and through reporting, advocacy, art, storytelling, theatre and films outside the courtrooms.
          </p>
        </div>

        {/* Origin Story Feature */}
        <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-14 shadow-postcard">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-ink-800 leading-relaxed text-base sm:text-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block">
                The Origin • 2022
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
                From an academic enquiry to a pro-bono lifeline.
              </h2>
              <p>
                In 2022, advocates <strong>Ujjaini Chatterji</strong> and <strong>Mayurapriyan Thangavel</strong> founded 
                the Lingering Shadows Initiative. What started off as an academic endeavour has blossomed 
                into a pro-bono litigation program extending legal and paralegal support to the nameless, 
                stateless persons living on the fringes of bustling cities.
              </p>
              <p className="text-ink-700 font-serif italic text-lg sm:text-xl border-l-2 border-terracotta-500 pl-4 my-2">
                &ldquo;Battling for mere survival from the margins of civil societies, and lingering 
                in the shadows of tall rights of freedom and liberty asking to be counted, recognised and treated as humans.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-ink-700">
                Our team of advocates and paralegals regularly visits the communities of migrant workers 
                and refugees, records their stories for publication in diverse mediums, and provides 
                extensive legal consultations, representations, and training across Delhi NCR, Assam, and Tamil Nadu—impacting 
                over <strong>1,500 families</strong>.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-parchment-100 border border-parchment-300 p-6 text-center space-y-4">
                <div className="relative w-40 h-40 mx-auto">
                  <Image
                    src="/logos/lsi.svg"
                    alt="LSI Emblem"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="border-t border-parchment-300/80 pt-4">
                  <h3 className="font-serif font-bold text-lg text-ink-900">
                    The Eccentric Soul of Chamber MU
                  </h3>
                  <p className="text-xs text-ink-600 mt-1">
                    LSI operates in close synergy with Chamber MU to deliver strategic, fearless feminist lawyering.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Core Legal Objectives */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-sage-700 block">
              Strategic Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
              Three Non-Negotiable Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OBJECTIVES.map((obj, i) => (
              <div
                key={i}
                className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 shadow-sm flex flex-col justify-between hover:border-terracotta-300 transition-all"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-terracotta-100 text-terracotta-700 flex items-center justify-center font-serif font-bold text-lg">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink-900">
                    {obj.title}
                  </h3>
                  <p className="text-sm text-ink-700 leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision: 12 Manifestations */}
        <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-14 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-terracotta-600 block">
              Mission & Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
              How LSI Lives Its Vision
            </h2>
            <p className="text-sm sm:text-base text-ink-600">
              Our multifaceted framework spans twelve active disciplines, bridging courts and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4">
            {MANIFESTATIONS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-parchment-100/70 border border-parchment-200"
              >
                <CheckCircle2 className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-ink-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <Link
            href="/founders"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-semibold text-xs tracking-wider uppercase shadow-md transition-all"
          >
            <span>Meet Our Founders & Portfolios</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
