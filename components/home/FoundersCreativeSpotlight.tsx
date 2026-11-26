import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Palette, ArrowRight, Download, Sparkles, Feather } from 'lucide-react';

export default function FoundersCreativeSpotlight() {
  return (
    <section className="py-20 lg:py-32 bg-parchment-100 parchment-texture border-b border-parchment-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-600 block">
            The Founders’ Creative Portfolios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
            Advocacy beyond the bar. <br />
            <span className="italic font-normal text-terracotta-600">Art, folklore, and performance.</span>
          </h2>
          <p className="text-ink-600 text-base sm:text-lg">
            Meet the creative minds behind LSI who weave constitutional law with folk tales, 
            theatre, and canvas exhibitions.
          </p>
        </div>

        {/* 2-Column Creative Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Ujjaini's Card: Unveil Tales Untold */}
          <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-10 shadow-postcard flex flex-col justify-between relative group hover:border-terracotta-300 transition-all">
            <div className="space-y-6">
              
              {/* Badge & Tag */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-700 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
                  <span>Creative Storytelling</span>
                </span>
                <span className="text-xs font-serif italic text-ink-500">Every Person is a Best Seller</span>
              </div>

              {/* Founder Header */}
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-24 rounded-2xl overflow-hidden border-2 border-parchment-300 shadow-sm shrink-0">
                  <Image
                    src="/images/team/ujjaini-chatterji.jpg"
                    alt="Ujjaini Chatterji"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink-900">
                    Ujjaini Chatterji
                  </h3>
                  <p className="text-xs uppercase tracking-widest font-semibold text-terracotta-600">
                    Advocate & Storyteller
                  </p>
                  <p className="text-xs text-ink-500 mt-1">
                    Supreme Court litigator • UN CSW Delegate • Nottingham Alumni Awardee
                  </p>
                </div>
              </div>

              {/* Storytelling Ethos */}
              <div className="space-y-3 pt-2">
                <h4 className="font-serif text-xl font-bold text-ink-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-terracotta-600" />
                  <span>Unveil Tales Untold with Ujjaini</span>
                </h4>
                <p className="text-sm text-ink-700 leading-relaxed">
                  Ujjaini collects and performs fairy tales, folklores, thrillers, romance, adventure, 
                  and science fiction from across the world. Intertwining constitutional values—equality, 
                  free speech, fraternity, and scientific temper—into captivating theatrical performances 
                  that compel audiences to dream, think, and argue.
                </p>

                {/* Deliverables summary */}
                <div className="p-4 rounded-xl bg-parchment-200/60 border border-parchment-300/60 space-y-2 text-xs text-ink-700">
                  <div className="font-bold text-ink-800 uppercase tracking-wider text-[10px]">
                    Signature Storytelling Offerings:
                  </div>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Storytelling with Constitutional Morals (1 Hour)</li>
                    <li>Storytelling + Activities & Audience Interaction Workshop (2 Hours)</li>
                    <li>Full-day Masterclass on Storytelling, Poise & Public Speaking (5+ Hours)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-parchment-300 flex flex-wrap items-center gap-3">
              <Link
                href="/founders#ujjaini"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
              >
                <span>Read Methodology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/docs/unveiling-tales-untold-ujjaini.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-parchment-200 hover:bg-parchment-300 text-ink-800 text-xs font-semibold tracking-wider transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Portfolio PDF</span>
              </a>
            </div>
          </div>

          {/* Mayura's Card: Art & Theatre */}
          <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-10 shadow-postcard flex flex-col justify-between relative group hover:border-sage-300 transition-all">
            <div className="space-y-6">
              
              {/* Badge & Tag */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider">
                  <Palette className="w-3.5 h-3.5 text-sage-700" />
                  <span>Visual Art & Theatre</span>
                </span>
                <span className="text-xs font-serif italic text-ink-500">Paintings, Murals & Cinema</span>
              </div>

              {/* Founder Header */}
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-24 rounded-2xl overflow-hidden border-2 border-parchment-300 shadow-sm shrink-0">
                  <Image
                    src="/images/team/mayurapriyan-thangavel.jpg"
                    alt="Mayurapriyan Thangavel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink-900">
                    Mayurapriyan Thangavel
                  </h3>
                  <p className="text-xs uppercase tracking-widest font-semibold text-sage-700">
                    Advocate, Artist & Actor
                  </p>
                  <p className="text-xs text-ink-500 mt-1">
                    CAA Constitutional Challenger • UN CSW Delegate • Dravidian Columnist
                  </p>
                </div>
              </div>

              {/* Art & Theatre Ethos */}
              <div className="space-y-3 pt-2">
                <h4 className="font-serif text-xl font-bold text-ink-900 flex items-center gap-2">
                  <Feather className="w-5 h-5 text-sage-700" />
                  <span>Paintings, Murals & Stage Productions</span>
                </h4>
                <p className="text-sm text-ink-700 leading-relaxed">
                  Mayurapriyan expresses constitutional struggles through vibrant visual arts and 
                  stagecraft. His paintings have been exhibited across embassies and art galleries, 
                  interrogating caste, borders, and statelessness. As an actor, he performs in 
                  stage productions and short films in English and Tamil.
                </p>

                {/* Highlights summary */}
                <div className="p-4 rounded-xl bg-parchment-200/60 border border-parchment-300/60 space-y-2 text-xs text-ink-700">
                  <div className="font-bold text-ink-800 uppercase tracking-wider text-[10px]">
                    Artistic Highlights & Disciplines:
                  </div>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Diplomatic & Embassy Art Exhibitions</li>
                    <li>English & Tamil Theatrical Productions on Justice and Equality</li>
                    <li>National Political & Constitutional Columns on Scientific Temper</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-parchment-300 flex flex-wrap items-center gap-3">
              <Link
                href="/founders#mayurapriyan"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-700 hover:bg-sage-800 text-parchment-50 font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
              >
                <span>View Artist Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/docs/artist-portfolio-mayura.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-parchment-200 hover:bg-parchment-300 text-ink-800 text-xs font-semibold tracking-wider transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Artist Portfolio PDF</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
