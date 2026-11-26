import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://lingeringshadowsinitiative.com'),
  title: 'The Lingering Shadows Initiative | Where Shadows Meet the Light',
  description:
    'A program to amplify the voices of the disenfranchised and marginalised social groups through litigation within courtrooms and through reporting, advocacy, art, storytelling, theatre and films outside the courtrooms.',
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
      <body className="min-h-screen flex flex-col font-sans bg-parchment-100 text-ink-900 selection:bg-terracotta-500 selection:text-parchment-50 antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
