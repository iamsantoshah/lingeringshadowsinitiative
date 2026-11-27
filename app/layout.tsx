import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/creative/CustomCursor';
import AmbientSoundEngine from '@/components/creative/AmbientSoundEngine';
import InteractiveCanvasNebula from '@/components/creative/InteractiveCanvasNebula';

export const metadata: Metadata = {
  metadataBase: new URL('https://lingeringshadowsinitiative.com'),
  title: 'The Lingering Shadows Initiative | Where Shadows Meet the Light',
  description:
    'Frontline constitutional human rights collective defending refugees, stateless communities, and the marginalized through courtroom litigation, live bilingual theatre, investigative journalism, and folklore art.',
  icons: {
    icon: '/logos/lsi.svg',
    shortcut: '/logos/lsi.svg',
    apple: '/logos/lsi.svg',
  },
  openGraph: {
    title: 'The Lingering Shadows Initiative',
    description:
      'Human rights litigation, storytelling, theatre, and globetrotting for the disenfranchised and stateless.',
    url: 'https://lingeringshadowsinitiative.com',
    siteName: 'The Lingering Shadows Initiative',
    images: [
      {
        url: '/logos/lsi.svg',
        width: 1200,
        height: 630,
        alt: 'The Lingering Shadows Initiative Emblem',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-parchment-100 text-ink-950 selection:bg-terracotta-600 selection:text-parchment-50 antialiased relative">
        {/* Filmic Grain Noise Layer */}
        <div className="film-grain" />

        {/* Ambient Canvas Physics Particle Field */}
        <InteractiveCanvasNebula />

        {/* Magnetic Custom Cursor */}
        <CustomCursor />

        {/* Web Audio Ambient Atmosphere Controller */}
        <AmbientSoundEngine />

        {/* Sticky Avant-Garde Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow relative z-10">{children}</main>

        {/* Monolithic Editorial Footer */}
        <Footer />
      </body>
    </html>
  );
}
