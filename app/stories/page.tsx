'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, BookOpen, Scale, Newspaper, Clapperboard, Palette, Sparkles, ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Litigation', 'Reporting', 'Theatre', 'Film', 'Art', 'Storytelling'];

const STORIES = [
  {
    id: 1,
    title: 'Sabera Khatoon v. Union of India',
    category: 'Litigation',
    icon: Scale,
    tagColor: 'bg-terracotta-100 text-terracotta-700',
    summary:
      'A landmark Supreme Court battle affirming that the fundamental right to life and healthcare under Article 21 cannot be denied to refugees, securing protection from arbitrary, indefinite detention.',
    details:
      'Argued by Ujjaini Chatterji, this landmark ruling established that the constitutional guarantee to life encompasses medical treatment and human dignity for stateless persons held in detention centers.',
    date: 'Supreme Court of India',
    quote: 'The law cannot remain deaf when human dignity is at stake.',
  },
  {
    id: 2,
    title: 'The Parchaayi Project: Ground Report',
    category: 'Reporting',
    icon: Newspaper,
    tagColor: 'bg-sage-100 text-sage-800',
    summary:
      'An exhaustive empirical investigation into the lived conditions, access to water, and arbitrary detentions of migrant workers and Rohingya refugees in Delhi NCR.',
    details:
      'Documenting oral narratives and municipal barriers, this ground report presented evidence directly to judicial forums and international human rights conferences.',
    date: 'Delhi NCR Field Report',
    quote: 'Capturing truths that official statistics erase.',
  },
  {
    id: 3,
    title: 'The CAA 2019/2024 Constitutional Challenge',
    category: 'Litigation',
    icon: Scale,
    tagColor: 'bg-terracotta-100 text-terracotta-700',
    summary:
      'Challenging the discriminatory tenets of citizenship amendments before the Supreme Court of India on behalf of Member of Parliament P. Sandosh Kumar.',
    details:
      'Led by Mayurapriyan Thangavel, the challenge addresses how exclusionary citizenship criteria violate Article 14 equality and the foundational secular character of the Constitution.',
    date: 'Constitutional Bench',
    quote: 'Equality before the law is non-negotiable.',
  },
  {
    id: 4,
    title: 'Unveil Tales Untold: Constitutional Parables',
    category: 'Storytelling',
    icon: BookOpen,
    tagColor: 'bg-ochre-100 text-ochre-800',
    summary:
      'Translating complex legal doctrines—equality, free speech, fraternity, and scientific temper—into spellbinding fairy tales and folklore performances.',
    details:
      'Ujjaini Chatterji performs worldwide, igniting empathy and legal curiosity across schools, universities, and civil society auditoriums.',
    date: 'Live Performances & Masterclasses',
    quote: 'Every person is a best seller.',
  },
  {
    id: 5,
    title: 'Bilingual Stagecraft: English & Tamil Theatre',
    category: 'Theatre',
    icon: Clapperboard,
    tagColor: 'bg-ink-100 text-ink-800',
    summary:
      'Visceral theatrical productions dramatizing issues of migration, caste violence, and state accountability.',
    details:
      'Featuring Mayurapriyan Thangavel as actor and director, these productions break down intellectual apathy and immerse audiences in human rights dialogue.',
    date: 'National Theatres & Independent Festivals',
    quote: 'Theatre that confronts rather than distracts.',
  },
  {
    id: 6,
    title: 'Diplomatic & Embassy Art Exhibitions',
    category: 'Art',
    icon: Palette,
    tagColor: 'bg-sage-100 text-sage-800',
    summary:
      'Visual canvases exploring borders, Dravidian politics, and displacement exhibited across international embassies and galleries.',
    details:
      'Mayurapriyan’s artwork transforms physical spaces into sites of contemplation, exploring how visual arts can advance human rights advocacy.',
    date: 'Embassies & Cultural Centers',
    quote: 'Color as an instrument of dissent and solidarity.',
  },
  {
    id: 7,
    title: 'Community Screenings: Voices from the Margin',
    category: 'Film',
    icon: Clapperboard,
    tagColor: 'bg-ink-100 text-ink-800',
    summary:
      'Curating independent documentary screenings followed by open audience debates on statelessness, refugees, and civil liberties.',
    details:
      'LSI organizes community-centered screenings that demystify human rights law and invite civic participation.',
    date: 'Civic Spaces & University Campuses',
    quote: 'Centering the gaze where cameras rarely look.',
  },
];

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStories =
    selectedCategory === 'All'
      ? STORIES
      : STORIES.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-600 block">
            The Living Archive
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
            Our stories.
          </h1>
          <p className="text-ink-600 text-lg leading-relaxed font-sans">
            Told with consent, told with care. Where identities must be protected, 
            we illustrate rather than photograph.
          </p>

          {/* Ethical Consent Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-parchment-50 border border-parchment-300 text-xs text-ink-600 shadow-sm mt-2">
            <ShieldCheck className="w-4 h-4 text-sage-600" />
            <span>Strict privacy & trauma-informed consent protocols enforced for all stories.</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-ink-900 text-parchment-50 shadow-md scale-105'
                    : 'bg-parchment-50 text-ink-700 border border-parchment-300 hover:bg-parchment-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => {
            const Icon = story.icon;
            return (
              <div
                key={story.id}
                className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 shadow-postcard hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${story.tagColor}`}
                    >
                      {story.category}
                    </span>
                    <Icon className="w-4 h-4 text-ink-400 group-hover:text-terracotta-600 transition-colors" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-ink-900 group-hover:text-terracotta-600 transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-xs text-ink-500 font-mono">
                    {story.date}
                  </p>

                  <p className="text-sm text-ink-700 leading-relaxed pt-1">
                    {story.summary}
                  </p>

                  <div className="p-3.5 rounded-xl bg-parchment-100 border border-parchment-200 text-xs font-serif italic text-ink-600 border-l-2 border-l-terracotta-500">
                    &ldquo;{story.quote}&rdquo;
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-parchment-300/80 flex items-center justify-between">
                  <span className="text-[11px] text-ink-500">Documented by LSI</span>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read More →</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
