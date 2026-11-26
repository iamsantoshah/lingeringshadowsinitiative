import Hero from '@/components/home/Hero';
import EssenceSection from '@/components/home/EssenceSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import GlobetrottingSection from '@/components/home/GlobetrottingSection';
import FoundersCreativeSpotlight from '@/components/home/FoundersCreativeSpotlight';
import SpacesSection from '@/components/home/SpacesSection';
import CommunityCTA from '@/components/home/CommunityCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <EssenceSection />
      <WhatWeDoSection />
      <GlobetrottingSection />
      <FoundersCreativeSpotlight />
      <SpacesSection />
      <CommunityCTA />
    </>
  );
}
