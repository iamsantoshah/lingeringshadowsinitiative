import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight, Heart } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, XIcon } from '@/components/icons/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-parchment-200 border-t border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-terracotta-400/40 bg-parchment-50 p-1">
                <Image
                  src="/logos/lsi.svg"
                  alt="The Lingering Shadows Initiative"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-parchment-50 block leading-tight">
                  The Lingering Shadows
                </span>
                <span className="text-[11px] tracking-[0.25em] uppercase font-sans font-semibold text-terracotta-400">
                  Initiative
                </span>
              </div>
            </Link>

            <p className="text-parchment-300/80 text-sm leading-relaxed max-w-sm">
              The eccentric soul of strategic human rights advocacy. Amplifying the voices of the 
              disenfranchised through constitutional litigation inside courtrooms—and through reporting, 
              theatre, art, globetrotting, and storytelling beyond them.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/the-lingering-shadows-initiative/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ink-800 hover:bg-terracotta-600 flex items-center justify-center text-parchment-200 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thelsiproject?gwpx=dDdjejY4dnEyNm04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ink-800 hover:bg-terracotta-600 flex items-center justify-center text-parchment-200 transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/thelsiproject?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ink-800 hover:bg-terracotta-600 flex items-center justify-center text-parchment-200 transition-colors"
                aria-label="X Profile"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-parchment-50 uppercase tracking-wider text-xs">
              Explorations
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-parchment-300/70 hover:text-terracotta-400 transition-colors">
                  About LSI & Origin
                </Link>
              </li>
              <li>
                <Link href="/founders" className="text-parchment-300/70 hover:text-terracotta-400 transition-colors">
                  Founders & Portfolios
                </Link>
              </li>
              <li>
                <Link href="/#what-we-do" className="text-parchment-300/70 hover:text-terracotta-400 transition-colors">
                  What We Do (4 Pillars)
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-parchment-300/70 hover:text-terracotta-400 transition-colors">
                  Our Stories
                </Link>
              </li>
              <li>
                <Link href="/globetrotting" className="text-parchment-300/70 hover:text-terracotta-400 transition-colors">
                  Globetrotting & Field Reports
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-parchment-300/70 hover:text-terracotta-400 transition-colors">
                  Our Team & Panel Advocates
                </Link>
              </li>
            </ul>
          </div>

          {/* Spaces & Ecosystem */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-parchment-50 uppercase tracking-wider text-xs">
              Other Spaces
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/spaces#young-lawyers-network" className="text-parchment-300/70 hover:text-terracotta-400 transition-colors flex items-center gap-1">
                  <span>Young Lawyers Network</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/spaces#young-lawyers-diary" className="text-parchment-300/70 hover:text-terracotta-400 transition-colors flex items-center gap-1">
                  <span>Young Lawyers Diary</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/spaces#rising-peacock" className="text-parchment-300/70 hover:text-terracotta-400 transition-colors flex items-center gap-1">
                  <span>Rising Peacock</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/spaces#virtuosity-legal" className="text-parchment-300/70 hover:text-terracotta-400 transition-colors flex items-center gap-1">
                  <span>Virtuosity Legal</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <a
                  href="/docs/unveiling-tales-untold-ujjaini.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parchment-300/70 hover:text-terracotta-400 transition-colors flex items-center gap-1"
                >
                  <span>Tales Untold Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-parchment-50 uppercase tracking-wider text-xs">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-parchment-300/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
                <span>Door No. 24, ST-6 (Chitra Nagar), Narasimhanaickenpalayam, Coimbatore - 641017</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a href="tel:+918860799513" className="hover:text-terracotta-400 transition-colors">
                  +91 88607 99513
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a href="mailto:lingeringshadowsinitiative@gmail.com" className="hover:text-terracotta-400 transition-colors break-all">
                  lingeringshadowsinitiative@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-parchment-400/60">
          <p>© {new Date().getFullYear()} The Lingering Shadows Initiative (LSI). All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Every person is a best seller</span>
            <Heart className="w-3 h-3 text-terracotta-500 fill-terracotta-500" />
            <span>Told with care & consent</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
