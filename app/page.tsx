import Hero from '@/components/home/Hero';
import EssenceSection from '@/components/home/EssenceSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import GlobetrottingSection from '@/components/home/GlobetrottingSection';
import SpacesSection from '@/components/home/SpacesSection';
import CommunityCTA from '@/components/home/CommunityCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Where the lingering shadows meet the light */}
      <Hero />

      {/* 2. Introduction: The Eccentric Soul of Chamber.MU */}
      <EssenceSection />

      {/* 3. What We Do: Four Ways to Carry a Story */}
      <WhatWeDoSection />

      {/* 4. Globetrotting and Human Rights: The Vagabond & Bohemian Ethos */}
      <GlobetrottingSection />

      {/* 5. Our Other Spaces: The Ecosystem */}
      <SpacesSection />

      {/* 6. Join Our Community & Write to Us */}
      <CommunityCTA />
    </>
  );
}
