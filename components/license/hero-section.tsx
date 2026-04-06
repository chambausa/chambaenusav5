'use client';

import type { HeroSection, KeyStat } from '@/types/license-json.types';

interface HeroSectionProps {
  hero: HeroSection;
}

function KeyStatCard({ stat }: { stat: KeyStat }) {
  const isPositive =
    stat.value.includes('✅') ||
    stat.value.toLowerCase().includes('sí') ||
    stat.value.toLowerCase().includes('si');

  return (
    <div className="bg-white border-l-4 border-amber-500 shadow-sm rounded-xl p-5">
      <p className="text-slate-500 text-xs font-bold uppercase mb-1">{stat.label}</p>
      <p className={`text-xl font-extrabold ${isPositive ? 'text-amber-500' : 'text-slate-900'}`}>
        {stat.value}
      </p>
      <p className="text-slate-400 text-xs mt-2">{stat.detail}</p>
      <a
        href={stat.source}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-slate-400 hover:text-amber-500 mt-2 inline-block transition-colors"
      >
        {stat.source_name}
      </a>
    </div>
  );
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      className="relative py-14 px-6 md:px-10 rounded-xl overflow-hidden"
      style={{ backgroundColor: '#131b2e' }}
    >
      {/* Watermark icon top-right */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none select-none flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-48 h-48 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      </div>

      {/* Badge */}
      <div className="mb-5 relative z-10">
        <span className="inline-block bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide">
          {hero.badge}
        </span>
      </div>

      {/* Headlines */}
      <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-3 relative z-10">
        {hero.headline}
      </h1>
      <p className="text-slate-400 mb-10 max-w-2xl relative z-10">
        {hero.subheadline}
      </p>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 relative z-10">
        {hero.key_stats.map((stat, index) => (
          <KeyStatCard key={index} stat={stat} />
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 relative z-10">
        <a
          href={hero.cta_primary.anchor}
          className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-400 transition-colors"
        >
          {hero.cta_primary.text}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
        <a
          href={hero.cta_secondary.anchor}
          className="inline-flex items-center px-6 py-3 bg-white/10 text-white border border-white/20 font-medium rounded-lg hover:bg-white/20 transition-colors"
        >
          {hero.cta_secondary.text}
        </a>
      </div>
    </section>
  );
}
