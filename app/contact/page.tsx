import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight, Shield, Clock } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, XIcon } from '@/components/icons/SocialIcons';

export const metadata: Metadata = {
  title: 'Contact Us | The Lingering Shadows Initiative',
  description:
    'Write to us. We will listen. Direct contact channels, registered office, and WhatsApp community for The Lingering Shadows Initiative.',
};

export default function ContactPage() {
  const whatsappUrl =
    'https://wa.me/918860799513?text=Hello%20Lingering%20Shadows%20Initiative%2C%20I%20would%20like%20to%20connect.';

  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="archival-stamp text-terracotta-700 border-terracotta-600 bg-parchment-50">
              WRITE TO US // WE WILL LISTEN
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink-950 leading-tight">
            No one is without a story. <br />
            <span className="italic font-normal text-terracotta-700">
              Some are only denied a listener.
            </span>
          </h1>
          <p className="text-ink-800 text-lg sm:text-xl leading-relaxed font-sans max-w-2xl mx-auto">
            Tell us, in your own words, what you or your community are facing. We read every message with strict confidentiality and care. Reach out directly through any of our official channels below.
          </p>
        </div>

        {/* 3 Contact Bureaus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: WhatsApp Channel */}
          <div className="p-8 sm:p-9 rounded-3xl bg-terracotta-50 border-2 border-terracotta-600 shadow-brutalist-terracotta flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-terracotta-200 pb-3.5">
                <span className="archival-stamp text-terracotta-700 border-terracotta-600 bg-parchment-50 text-[10px]">
                  FAST RESPONSE HOTLINE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-terracotta-600 animate-ping" />
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
                  WhatsApp Community
                </h3>
                <p className="font-mono text-xs text-terracotta-700 font-bold uppercase mt-1">
                  DIRECT ADVOCATE MESSAGING
                </p>
              </div>

              <p className="text-sm text-ink-800 leading-relaxed font-sans">
                Connect directly on WhatsApp with our litigators and paralegals for urgent consultations, bail updates, and community defense notices.
              </p>
            </div>

            <div className="pt-4 border-t border-terracotta-200">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CHAT"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-mono text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-glow-terracotta group active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Direct Email Desk */}
          <div className="p-8 sm:p-9 rounded-3xl bg-parchment-50 border-2 border-ink-900 shadow-brutalist flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-parchment-300 pb-3.5">
                <span className="archival-stamp text-ink-900 border-ink-900 bg-parchment-100 text-[10px]">
                  OFFICIAL LEGAL DESK
                </span>
                <Mail className="w-5 h-5 text-terracotta-600" />
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
                  Official Email Desk
                </h3>
                <p className="font-mono text-xs text-ink-500 uppercase mt-1">
                  CASE PAPERS & COLLABORATIONS
                </p>
              </div>

              <p className="text-sm text-ink-800 leading-relaxed font-sans">
                For detailed representations, petition drafts, research papers, and booking storytelling or theatre workshops:
              </p>

              <div className="p-3.5 rounded-xl bg-parchment-100 border border-parchment-300 font-mono text-xs text-ink-950 break-all select-all font-bold">
                lingeringshadowsinitiative@gmail.com
              </div>
            </div>

            <div className="pt-4 border-t border-parchment-300">
              <a
                href="mailto:lingeringshadowsinitiative@gmail.com?subject=Inquiry%20to%20The%20Lingering%20Shadows%20Initiative"
                data-cursor="EMAIL"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-ink-950 hover:bg-terracotta-600 text-parchment-50 font-mono text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 group"
              >
                <Mail className="w-4 h-4" />
                <span>Send Formal Email</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: Direct Phone & Office */}
          <div className="p-8 sm:p-9 rounded-3xl bg-parchment-50 border-2 border-ink-900 shadow-brutalist flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-parchment-300 pb-3.5">
                <span className="archival-stamp text-sage-800 border-sage-700 bg-sage-50 text-[10px]">
                  REGISTERED TRUST OFFICE
                </span>
                <MapPin className="w-5 h-5 text-terracotta-600" />
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
                  Head Office & Phone
                </h3>
                <p className="font-mono text-xs text-sage-800 uppercase mt-1 font-bold">
                  TAMIL NADU REGISTER
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs text-ink-800">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                  <span className="font-bold">+91 88607 99513</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Door No. 24, ST-6 (Chitra Nagar), Narasimhanaickenpalayam, Coimbatore, Tamil Nadu - 641017
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-parchment-300">
              <a
                href="tel:+918860799513"
                data-cursor="CALL"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border-2 border-ink-900 hover:bg-ink-950 hover:text-parchment-50 font-mono text-xs uppercase tracking-wider transition-colors active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Registry Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Social Channels Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-parchment-50 border-2 border-ink-900 shadow-brutalist flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-mono text-xs uppercase tracking-widest text-terracotta-700 font-bold">
              FOLLOW OUR WORK & ADVOCACY
            </div>
            <div className="font-serif text-2xl font-bold text-ink-950">
              Connect on Social Media Channels
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/the-lingering-shadows-initiative/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-parchment-100 border border-ink-900 hover:bg-terracotta-600 hover:text-parchment-50 hover:border-terracotta-600 transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/thelsiproject?gwpx=dDdjejY4dnEyNm04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-parchment-100 border border-ink-900 hover:bg-terracotta-600 hover:text-parchment-50 hover:border-terracotta-600 transition-all hover:scale-105"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/thelsiproject?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-parchment-100 border border-ink-900 hover:bg-terracotta-600 hover:text-parchment-50 hover:border-terracotta-600 transition-all hover:scale-105"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
