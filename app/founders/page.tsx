import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Palette, Download, Sparkles, Feather, Scale, Heart, Mail, Phone, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Founders & Portfolios | The Lingering Shadows Initiative',
  description:
    'Meet founders Ujjaini Chatterji and Mayurapriyan Thangavel—human rights advocates, artists, and storytellers weaving constitutional law with folklore and theatre.',
};

export default function FoundersPage() {
  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-600 block">
            The Founders & Creative Souls
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
            Advocates by day. <br />
            <span className="italic font-normal text-terracotta-600">Storytellers, artists & vagabonds.</span>
          </h1>
          <p className="text-ink-600 text-lg leading-relaxed font-sans">
            LSI is the vision of litigating lawyers who believe that legal practice thrives 
            only when nourished by lived stories, cultural exploration, and artistic expression.
          </p>
        </div>

        {/* SECTION 1: UJJAINI CHATTERJI */}
        <section id="ujjaini" className="scroll-mt-24 space-y-12">
          
          {/* Bio Grid */}
          <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-14 shadow-postcard">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Photo */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-parchment-300 shadow-md">
                  <Image
                    src="/images/team/ujjaini-chatterji.jpg"
                    alt="Ujjaini Chatterji"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 text-center space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-ink-900">Ujjaini Chatterji</h3>
                  <p className="text-xs uppercase tracking-widest font-semibold text-terracotta-600">
                    Co-Founder & Advocate
                  </p>
                  <p className="text-xs text-ink-500">
                    New Delhi • Supreme Court of India
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <a
                    href="/docs/unveiling-tales-untold-ujjaini.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Story Portfolio PDF</span>
                  </a>
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-8 space-y-5 text-ink-800 leading-relaxed text-sm sm:text-base">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-700 text-xs font-bold uppercase tracking-wider">
                  <Scale className="w-3.5 h-3.5" />
                  <span>Constitutional Litigator & CSW Delegate</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
                  Defending constitutional morality inside and outside the courtroom.
                </h2>

                <p>
                  <strong>Ujjaini Chatterji</strong> is a New Delhi–based human rights lawyer specialising in strategic constitutional litigation, feminist human rights lawyering, and refugee rights. She represents Rohingya women and children before Indian courts.
                </p>

                <p>
                  Ujjaini argued in landmark cases including the case of <em>Sabera Khatoon v. Union of India</em>, a landmark Supreme Court case affirming refugee rights to healthcare and protection from indefinite detention. She is also leading and arguing the public interest litigation in the Supreme Court of India against custodial deaths and indefinite detention of Rohingya refugees in India.
                </p>

                <p>
                  Ujjaini is a <strong>&ldquo;Constitution Defender Fellow&rdquo;</strong> at the Centre for Law and Policy Research and a two-time delegate to the United Nations Commission on the Status of Women (UN CSW). She holds an LL.M. in Human Rights Law from the University of Nottingham and has trained with the European Inter-University Centre.
                </p>

                {/* Award Banner */}
                <div className="p-4 rounded-2xl bg-terracotta-50/80 border border-terracotta-200/80 flex items-start gap-3">
                  <Award className="w-6 h-6 text-terracotta-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-terracotta-800">
                      Honour & Recognition • 2026
                    </div>
                    <p className="text-xs text-ink-700 mt-0.5">
                      Awarded the prestigious <strong>&ldquo;Your Nottingham Alumni Award&rdquo;</strong> by the University of Nottingham for her exceptional contribution as an advocate and international human rights lawyer supporting displaced and refugee communities.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Deep-Dive Feature: Unveil Tales Untold with Ujjaini */}
          <div className="rounded-3xl bg-parchment-50 border-2 border-terracotta-200 p-8 sm:p-14 shadow-postcard space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-parchment-300 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-terracotta-500" />
                  <span>Creative Storytelling Portfolio</span>
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
                  Unveil Tales Untold with Ujjaini
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif italic text-sm text-ink-600 bg-parchment-200/70 px-4 py-2 rounded-full border border-parchment-300/60">
                  &ldquo;Every Person Is A Best Seller&rdquo;
                </span>
              </div>
            </div>

            {/* Methodology & Deliverables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-ink-800">
              
              <div className="lg:col-span-6 space-y-4">
                <h4 className="font-serif text-2xl font-bold text-ink-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-terracotta-600" />
                  <span>The Storytelling Methodology</span>
                </h4>
                <p className="text-sm sm:text-base leading-relaxed">
                  Ujjaini collects and performs fairy tales, folklores, thrillers, romance, adventure, science fiction and various other kinds of stories from across the world. She also writes stories which she narrates to her audiences in her own inimitable style.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  As a feminist human rights lawyer, Ujjaini underlines the Constitutional values of 
                  <strong> equality, fraternity, scientific temper, free speech, justice, and democracy</strong> through her storytelling. The morals in her stories are intertwined in the philosophy and history of law and the sociology of the constitution. Her endeavour is to infuse joy in understanding the constitution, leaving audiences with warm memories and inspiring them to dream, think, and argue.
                </p>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <h4 className="font-serif text-2xl font-bold text-ink-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-terracotta-600" />
                  <span>Storytelling Deliverables & Workshops</span>
                </h4>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-parchment-100 border border-parchment-200 space-y-1">
                    <div className="font-bold text-sm text-ink-900">1. Storytelling Session (1 Hour)</div>
                    <p className="text-xs text-ink-600">
                      Curated performance of fairy tales and folklores exploring constitutional morals, equality, and compassion.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-parchment-100 border border-parchment-200 space-y-1">
                    <div className="font-bold text-sm text-ink-900">
                      2. Storytelling + Discussion & Interaction Workshop (2 Hours)
                    </div>
                    <p className="text-xs text-ink-600">
                      Performative storytelling coupled with guided debates on equality, feminism, justice, democracy, and bioethics.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-parchment-100 border border-parchment-200 space-y-1">
                    <div className="font-bold text-sm text-ink-900">
                      3. Full-Day Customised Masterclass (5+ Hours)
                    </div>
                    <p className="text-xs text-ink-600">
                      Comprehensive workshop on storytelling, poise, and public speaking, including Training of Trainers (ToT) on participative teaching methodologies.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4 text-xs text-ink-500 font-medium">
                  <span>* Fee available on request</span>
                  <span>•</span>
                  <span>* Festival & occasion customisation available</span>
                </div>
              </div>

            </div>

            {/* Direct Contact for Storytelling */}
            <div className="p-6 rounded-2xl bg-parchment-200/80 border border-parchment-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-ink-700 space-y-1 text-center sm:text-left">
                <div className="font-bold uppercase tracking-wider text-ink-900">
                  Book a Storytelling Performance or Workshop:
                </div>
                <div>Contact: storiesandujjaini@gmail.com • +91 88607 99513</div>
              </div>
              <a
                href="mailto:storiesandujjaini@gmail.com"
                className="px-5 py-2.5 rounded-full bg-ink-900 hover:bg-terracotta-600 text-parchment-50 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
              >
                Book a Session
              </a>
            </div>

          </div>

        </section>

        {/* SECTION 2: MAYURAPRIYAN THANGAVEL */}
        <section id="mayurapriyan" className="scroll-mt-24 space-y-12">
          
          <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-14 shadow-postcard">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Photo */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-parchment-300 shadow-md">
                  <Image
                    src="/images/team/mayurapriyan-thangavel.jpg"
                    alt="Mayurapriyan Thangavel"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 text-center space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-ink-900">Mayurapriyan Thangavel</h3>
                  <p className="text-xs uppercase tracking-widest font-semibold text-sage-700">
                    Co-Founder, Artist & Advocate
                  </p>
                  <p className="text-xs text-ink-500">
                    New Delhi • Supreme Court & Delhi High Court
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <a
                    href="/docs/artist-portfolio-mayura.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sage-700 hover:bg-sage-800 text-parchment-50 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Artist Portfolio PDF</span>
                  </a>
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-8 space-y-5 text-ink-800 leading-relaxed text-sm sm:text-base">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Constitutional Advocate, Visual Artist & Actor</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
                  Feminist constitutional litigation meeting canvas and stagecraft.
                </h2>

                <p>
                  <strong>Mayurapriyan Thangavel</strong> is a New Delhi–based advocate specialising in feminist constitutional law and strategic human rights litigation. His practice focuses on representing Dalit, Bahujan, tribal, Muslim, and Rohingya refugee communities, with an emphasis on issues of statelessness, indefinite detention, and deportation.
                </p>

                <p>
                  He led the constitutional challenge to the <strong>Citizenship Amendment Act, 2019</strong>, and its 2024 Rules, on behalf of Member of Parliament P. Sandosh Kumar, arguing its incompatibility with India’s constitutional guarantees of equality and non-discrimination. Mayurapriyan also represents Rohingya women and children before the Delhi High Court and the Supreme Court of India.
                </p>

                <p>
                  Nominated as a delegate to the 2025 United Nations Commission on the Status of Women, Mayurapriyan is a law graduate from Symbiosis International University (2017). He is also a regular columnist writing on equality, Dravidian politics, constitutionalism, and scientific temper.
                </p>

                <div className="p-4 rounded-2xl bg-sage-50/80 border border-sage-200/80 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-sage-900 flex items-center gap-1.5">
                    <Feather className="w-4 h-4 text-sage-700" />
                    <span>Visual Artist & Actor</span>
                  </div>
                  <p className="text-xs text-ink-700 leading-relaxed">
                    His paintings have been exhibited across embassies and diverse art galleries. As an actor, he performs in various theatre productions and short films in English and Tamil, using stage performance to confront systemic discrimination and human rights abuses.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
