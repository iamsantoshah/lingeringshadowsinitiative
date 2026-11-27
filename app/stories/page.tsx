'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Scale, Newspaper, Clapperboard, Palette, BookOpen, Search, ArrowUpRight, FolderOpen, Shield, X } from 'lucide-react';
import CaseFileModal, { CaseDocket } from '@/components/creative/CaseFileModal';

const CATEGORIES = ['All', 'Litigation', 'Reporting', 'Theatre', 'Film', 'Art', 'Storytelling'];

const ALL_STORIES: (CaseDocket & { icon: typeof Scale; tagColor: string })[] = [
  {
    id: 'sabera-khatoon',
    title: 'Sabera Khatoon v. Union of India',
    category: 'Litigation',
    icon: Scale,
    tagColor: 'text-terracotta-700 border-terracotta-600 bg-terracotta-50',
    forum: 'Supreme Court of India',
    year: '2023 - Present',
    advocates: 'Adv. Ujjaini Chatterji',
    provisions: ['Article 21 (Right to Life & Health)', 'Protection from Indefinite Detention', 'Universal Human Rights Standards'],
    quote: 'The law cannot remain deaf when human dignity and medical survival are at stake.',
    legalSummary:
      'Challenging the prolonged, indefinite detention of a critically ill refugee woman held without essential hospital access in Delhi. The petition asserted that Article 21 is non-derogable and guarantees life, bodily integrity, and healthcare to every human being inside Indian territory, regardless of nationality or documentation.',
    fieldReality:
      'Sabera had spent over a year separated from her young children, deteriorating in holding confinement without medical diagnosis. LSI mobilized emergency legal defense to secure hospital transfer and stay of summary deportation.',
    impactVerdict:
      'Established a vital constitutional precedent that foreign nationals and asylum seekers in holding facilities cannot be subjected to neglect or indefinite incarceration without judicial review.',
  },
  {
    id: 'caa-challenge',
    title: 'The Citizenship Amendment Act Constitutional Challenge',
    category: 'Litigation',
    icon: Scale,
    tagColor: 'text-terracotta-700 border-terracotta-600 bg-terracotta-50',
    forum: 'Supreme Court Constitutional Bench',
    year: '2019 / 2024 - Present',
    advocates: 'Adv. Mayurapriyan Thangavel (on behalf of MP P. Sandosh Kumar)',
    provisions: ['Article 14 (Equality Before Law)', 'Article 21 (Liberty)', 'Basic Structure (Secularism)'],
    quote: 'Equality before the law is the bedrock of democratic citizenship; religion cannot be made a filter for belonging.',
    legalSummary:
      'Challenging the Citizenship Amendment Act, 2019, and its 2024 Rules before the Constitution Bench of the Supreme Court of India. The petition argues the law’s fundamental incompatibility with India’s constitutional guarantees of equality, secularism, and non-discrimination.',
    fieldReality:
      'Marginalized and disenfranchised communities across border districts and urban centers live in perpetual fear of statelessness and loss of civil rights.',
    impactVerdict:
      'Forms part of the principal challenge preserving India’s pluralist constitutional jurisprudence on nationality.',
  },
  {
    id: 'parchaayi-project',
    title: 'The Parchaayi Project: Ground Report',
    category: 'Reporting',
    icon: Newspaper,
    tagColor: 'text-sage-800 border-sage-700 bg-sage-50',
    forum: 'Delhi NCR Informal Settlements',
    year: '2022 - Present',
    advocates: 'LSI Team of Advocates & Paralegals',
    provisions: ['Right to Shelter', 'Access to Clean Water', 'Municipal Obligations'],
    quote: 'Capturing truths that official statistics routinely erase from public memory.',
    legalSummary:
      'An exhaustive empirical investigation into the lived conditions, access to water, municipal service denials, and arbitrary detentions of migrant workers and Rohingya refugees in Delhi NCR.',
    fieldReality:
      'Documented hundreds of informal households living without basic amenities, facing eviction threats and school admission barriers.',
    impactVerdict:
      'The factual foundation for legal representations submitted to judicial authorities and international human rights bodies.',
  },
  {
    id: 'unveil-tales-untold',
    title: 'Unveil Tales Untold: Constitutional Parables',
    category: 'Storytelling',
    icon: BookOpen,
    tagColor: 'text-ochre-700 border-ochre-600 bg-ochre-50',
    forum: 'Schools, Universities & Civic Auditoriums',
    year: 'Continuous Touring',
    advocates: 'Ujjaini Chatterji (Advocate & Storyteller)',
    provisions: ['Article 51A(h) (Scientific Temper)', 'Free Speech', 'Fraternity & Equality'],
    quote: 'Every person is a best seller with an unwritten story waiting to be honored.',
    legalSummary:
      'Adapting fairy tales, myths, and science fiction from world cultures, weaving constitutional morality into spellbinding performances followed by interactive debates.',
    fieldReality:
      'Brings the spirit of the Constitution alive for children, students, and citizens who find traditional legal discourse distant and intimidating.',
    impactVerdict:
      'Reached thousands of students nationwide, infusing moral clarity, empathy, and critical thinking.',
  },
  {
    id: 'bilingual-theatre',
    title: 'Bilingual Stagecraft: English & Tamil Theatre',
    category: 'Theatre',
    icon: Clapperboard,
    tagColor: 'text-terracotta-700 border-terracotta-600 bg-parchment-100',
    forum: 'Public Theatres & Auditoriums',
    year: '2023 - Present',
    advocates: 'Mayurapriyan Thangavel & Ensemble',
    provisions: ['Freedom of Expression', 'Cultural Pluralism', 'Dravidian Philosophy'],
    quote: 'Theatre makes people feel another human being’s heartbeat before prejudice can intercede.',
    legalSummary:
      'Original dramatic productions in English and Tamil spotlighting systemic injustice, forced migration, and equality.',
    fieldReality:
      'Engages public audiences in live dialogues that break down prejudice through dramatic vulnerability.',
    impactVerdict:
      'Fosters empathy and critical awareness on civil rights across diverse audiences.',
  },
  {
    id: 'visual-art-exhibitions',
    title: 'Paintings & Visual Art Exhibitions',
    category: 'Art',
    icon: Palette,
    tagColor: 'text-sage-800 border-sage-700 bg-sage-50',
    forum: 'Embassies & Cultural Galleries',
    year: 'Exhibition Archive',
    advocates: 'Mayurapriyan Thangavel (Artist & Advocate)',
    provisions: ['Artistic Expression', 'Human Rights on Canvas', 'Cultural Diplomacy'],
    quote: 'Color is the conscience of form; paint documents what statute fails to record.',
    legalSummary:
      'Visual art exhibitions exploring displacement, statehood binaries, and human resilience across international embassies and galleries.',
    fieldReality:
      'Brings the human face of constitutional struggles into diplomatic and cultural spaces.',
    impactVerdict:
      'Broadens the public dialogue on refugee rights through fine art and cultural representation.',
  },
];

function StoriesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('filter') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDocket, setActiveDocket] = useState<CaseDocket | null>(null);

  const filteredStories = useMemo(() => {
    return ALL_STORIES.filter((story) => {
      const matchesCat =
        selectedCategory === 'All' ||
        story.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        searchQuery === '' ||
        story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.legalSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.forum.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="archival-stamp text-terracotta-700 border-terracotta-600 bg-parchment-50">
              NATIONAL STORY & LEGAL REGISTER // CONFIDENTIAL ARCHIVE
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink-950 leading-tight">
            Told with consent, <br />
            <span className="italic font-normal text-terracotta-700">told with care.</span>
          </h1>
          <p className="text-ink-800 text-lg sm:text-xl leading-relaxed font-sans max-w-2xl mx-auto">
            Each story is shared with the consent of those who lived it. Where identities must be protected against retaliation or deportation, we anonymize and illustrate rather than photograph.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-parchment-50 border-2 border-ink-900 shadow-brutalist space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
              <input
                type="text"
                placeholder="Search dockets, forums, advocates, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-parchment-100 border border-parchment-300 rounded-full font-mono text-xs text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-terracotta-600 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-800"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="font-mono text-xs text-ink-600">
              SHOWING: <strong className="text-terracotta-700">{filteredStories.length}</strong> ACTIVE ENTRIES
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-parchment-300">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                data-cursor="FILTER"
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-ink-950 text-parchment-50 font-bold shadow-sm'
                    : 'bg-parchment-100 text-ink-700 hover:bg-parchment-200 border border-parchment-300 hover:border-ink-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => {
            const Icon = story.icon;
            return (
              <div
                key={story.id}
                onClick={() => setActiveDocket(story)}
                data-cursor="DOCKET"
                className="rounded-3xl bg-parchment-50 border-2 border-ink-900 p-8 shadow-brutalist hover:shadow-postcard-hover transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-parchment-300 pb-3">
                    <span className={`archival-stamp ${story.tagColor} text-[10px]`}>
                      {story.category}
                    </span>
                    <Icon className="w-4 h-4 text-ink-600 group-hover:text-terracotta-600 transition-colors" />
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-ink-500 uppercase tracking-widest block">
                      {story.forum} • {story.year}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-ink-950 group-hover:text-terracotta-700 transition-colors mt-1">
                      {story.title}
                    </h3>
                  </div>

                  <p className="font-serif italic text-sm text-ink-800 leading-relaxed border-l-2 border-terracotta-600 pl-3 py-1">
                    &ldquo;{story.quote}&rdquo;
                  </p>

                  <p className="text-xs text-ink-700 leading-relaxed font-sans line-clamp-3">
                    {story.legalSummary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {story.provisions.slice(0, 2).map((prov, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-0.5 bg-parchment-100 border border-parchment-300 rounded font-mono text-[9px] text-ink-700 font-medium"
                      >
                        {prov}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-parchment-300 flex items-center justify-between font-mono text-xs text-terracotta-700 font-bold">
                  <span className="flex items-center gap-1.5 group-hover:underline">
                    <FolderOpen className="w-3.5 h-3.5" />
                    <span>Open Case Docket</span>
                  </span>
                  <span className="p-1.5 rounded-full bg-ink-950 text-parchment-50 group-hover:bg-terracotta-600 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Protection & Consent Banner */}
        <div className="p-8 rounded-3xl bg-parchment-50 border-2 border-ink-900 shadow-brutalist flex flex-col sm:flex-row items-center gap-6">
          <div className="p-4 rounded-2xl bg-parchment-100 border border-parchment-300 shrink-0">
            <Shield className="w-8 h-8 text-terracotta-600" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-ink-950">
              Protocol of Consent & Identity Safeguards
            </h4>
            <p className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed">
              Every testimony, detention observation, and field case published by LSI is documented with the informed consent of the affected individuals and community leaders. Names are masked where risk of state retaliation exists.
            </p>
          </div>
        </div>

      </div>

      <CaseFileModal
        docket={activeDocket}
        onClose={() => setActiveDocket(null)}
      />
    </div>
  );
}

export default function StoriesPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center font-mono">Loading Stories...</div>}>
      <StoriesContent />
    </Suspense>
  );
}
