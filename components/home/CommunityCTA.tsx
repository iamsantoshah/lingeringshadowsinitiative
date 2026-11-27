'use client';

import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Mail, Phone, HeartHandshake } from 'lucide-react';

export default function CommunityCTA() {
  const whatsappUrl =
    'https://wa.me/918860799513?text=Hello%20Lingering%20Shadows%20Initiative%2C%20I%20would%20like%20to%20join%20the%20community.';

  return (
    <section className="py-24 lg:py-36 bg-ink-950 text-parchment-100 relative overflow-hidden border-t-2 border-ink-900">
      {/* Background chiaroscuro ember glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-terracotta-900/30 via-terracotta-700/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-ink-900 border border-terracotta-600/70 text-terracotta-400 font-mono text-xs uppercase tracking-widest shadow-md">
            <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-ping" />
            <span>JOIN THE TELLING // OPEN INVITATION</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-parchment-50 leading-[1.04]">
            No one is without a story. <br />
            <span className="italic font-light text-terracotta-400">
              Some are only denied a listener.
            </span>
          </h2>

          <p className="text-parchment-300 text-base sm:text-lg font-normal leading-relaxed font-sans max-w-xl mx-auto">
            Write to us. We will listen. Tell us, in your own words, what you or your community are facing. Every message is received with strict confidentiality, dignity, and care.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="COMMUNITY"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-mono text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-glow-terracotta active:scale-95 group"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Join WhatsApp Community</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <Link
              href="/contact"
              data-cursor="WRITE"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-ink-900 hover:bg-ink-850 text-parchment-100 border border-ink-800 hover:border-terracotta-500 font-mono text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-terracotta-400" />
              <span>Write To Us Directly</span>
            </Link>
          </div>

          <div className="pt-10 border-t border-ink-800/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-parchment-400">
            <span>lingeringshadowsinitiative@gmail.com</span>
            <span>•</span>
            <span>+91 88607 99513</span>
            <span>•</span>
            <span>Coimbatore, Tamil Nadu</span>
          </div>

        </div>

      </div>
    </section>
  );
}
