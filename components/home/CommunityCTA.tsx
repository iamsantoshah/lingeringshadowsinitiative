'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Mail, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function CommunityCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-parchment-100 parchment-texture">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[36px] bg-gradient-to-br from-ink-900 via-ink-800 to-terracotta-950 text-parchment-100 p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parchment-50/10 border border-parchment-200/20 text-ochre-300 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-ochre-300" />
              <span>Join the Telling</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-parchment-50 leading-tight">
              Every story matters. <br />
              <span className="italic font-normal text-terracotta-400">Write to us. We will listen.</span>
            </h2>

            <p className="text-parchment-300/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Whether you need legal aid, wish to volunteer, collaborate on art or theatre, or join 
              our ongoing workshops, our doors and ears are open.
            </p>

            {/* Actions Grid */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://chat.whatsapp.com/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-parchment-50 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join WhatsApp Updates</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-parchment-50 hover:bg-parchment-200 text-ink-900 font-semibold text-xs tracking-wider uppercase transition-all"
              >
                <Mail className="w-4 h-4 text-terracotta-600" />
                <span>Tell Us Your Story</span>
              </Link>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-8 border-t border-parchment-200/10 max-w-md mx-auto">
              <p className="text-xs text-parchment-400/80 mb-3 tracking-wide uppercase font-semibold">
                Subscribe to Dispatch & Case Updates
              </p>
              {subscribed ? (
                <div className="flex items-center justify-center gap-2 text-xs font-medium text-sage-300 bg-sage-900/40 border border-sage-500/40 py-2.5 px-4 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-sage-400" />
                  <span>Thank you for joining our circle. We will keep you posted.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-parchment-50/10 border border-parchment-200/20 p-1.5 rounded-full">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent px-4 py-2 text-xs text-parchment-100 placeholder-parchment-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-parchment-50 transition-colors shrink-0"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
