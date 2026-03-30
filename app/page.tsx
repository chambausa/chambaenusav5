import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2, Shield, RefreshCw, Languages } from 'lucide-react'
import { QuickSearch } from '@/components/home/quick-search'

const TRADES = [
  { name: 'Electricista', icon: '⚡', slug: 'electricista', count: '14 estados', color: 'bg-amber-50 border-amber-200 hover:bg-amber-100' },
  { name: 'CDL', icon: '🚛', slug: 'cdl', count: '4 estados', color: 'bg-slate-50 border-slate-200 hover:bg-slate-100' },
  { name: 'Cosmetología', icon: '✂️', slug: 'cosmetologia', count: '4 estados', color: 'bg-rose-50 border-rose-200 hover:bg-rose-100' },
  { name: 'HVAC', icon: '🌡️', slug: 'hvac', count: '5 estados', color: 'bg-sky-50 border-sky-200 hover:bg-sky-100' },
  { name: 'Plomería', icon: '🔧', slug: 'plomero', count: '4 estados', color: 'bg-teal-50 border-teal-200 hover:bg-teal-100' },
]

const STATES = [
  { name: 'Texas', slug: 'texas', code: 'TX', licenses: 5 },
  { name: 'California', slug: 'california', code: 'CA', licenses: 5 },
  { name: 'Florida', slug: 'florida', code: 'FL', licenses: 5 },
  { name: 'New York', slug: 'new-york', code: 'NY', licenses: 5 },
  { name: 'Arizona', slug: 'arizona', code: 'AZ', licenses: 3 },
  { name: 'Georgia', slug: 'georgia', code: 'GA', licenses: 1 },
  { name: 'Colorado', slug: 'colorado', code: 'CO', licenses: 1 },
  { name: 'Nevada', slug: 'nevada', code: 'NV', licenses: 1 },
  { name: 'Illinois', slug: 'illinois', code: 'IL', licenses: 1 },
  { name: 'Washington', slug: 'washington', code: 'WA', licenses: 1 },
]

const FEATURED = [
  { title: 'Licencia de Electricista en Texas', slug: 'licencia-electricista-texas', tag: 'Electricista', tagColor: 'text-amber-700 bg-amber-100' },
  { title: 'Licencia de Cosmetología en Texas', slug: 'licencia-cosmetologia-texas', tag: 'Cosmetología', tagColor: 'text-rose-700 bg-rose-100' },
  { title: 'Licencia CDL en California', slug: 'licencia-cdl-california', tag: 'CDL', tagColor: 'text-slate-700 bg-slate-100' },
  { title: 'Licencia de Electricista en Arizona', slug: 'licencia-electricista-arizona', tag: 'Electricista', tagColor: 'text-amber-700 bg-amber-100' },
  { title: 'Licencia de Electricista en New York', slug: 'licencia-electricista-new-york', tag: 'Electricista', tagColor: 'text-amber-700 bg-amber-100' },
  { title: 'Licencia HVAC en New York', slug: 'licencia-hvac-new-york', tag: 'HVAC', tagColor: 'text-sky-700 bg-sky-100' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">

        {/* Talavera-inspired geometric background pattern */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="talavera" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect width="60" height="60" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="30" cy="30" r="12" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="30" cy="30" r="4" fill="none" stroke="white" strokeWidth="0.5"/>
                <line x1="30" y1="18" x2="30" y2="0" stroke="white" strokeWidth="0.5"/>
                <line x1="30" y1="42" x2="30" y2="60" stroke="white" strokeWidth="0.5"/>
                <line x1="18" y1="30" x2="0" y2="30" stroke="white" strokeWidth="0.5"/>
                <line x1="42" y1="30" x2="60" y2="30" stroke="white" strokeWidth="0.5"/>
                <rect x="26" y="26" width="8" height="8" fill="none" stroke="white" strokeWidth="0.4" transform="rotate(45 30 30)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#talavera)"/>
          </svg>
        </div>

        {/* Amber glow top-right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-4 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/25 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Todo en español · Fuentes oficiales
              </div>

              <h1 className="font-display text-5xl lg:text-[64px] font-bold leading-[1.05] mb-6 tracking-tight">
                Tu licencia de oficio en{' '}
                <em className="not-italic text-amber-400">Estados Unidos</em>,{' '}
                explicada en español.
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                Guías verificadas con fuentes .gov para electricista, CDL, cosmetología, HVAC y plomería — actualizadas automáticamente para que siempre tengas la información correcta.
              </p>

              <QuickSearch />

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  Información de fuentes .gov
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  31 guías disponibles
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  Sin costo
                </span>
              </div>
            </div>

            {/* Right: stat cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <p className="font-display text-6xl font-bold text-amber-400 leading-none mb-2">31%</p>
                <p className="text-sm text-slate-300 leading-snug">de los trabajadores de construcción en EE.UU. son hispanos</p>
                <p className="text-xs text-slate-500 mt-2">Bureau of Labor Statistics, 2024</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm mt-6">
                <p className="font-display text-6xl font-bold text-white leading-none mb-2">65M</p>
                <p className="text-sm text-slate-300 leading-snug">hispanos viviendo en Estados Unidos hoy</p>
                <p className="text-xs text-slate-500 mt-2">U.S. Census Bureau, 2023</p>
              </div>
              <div className="bg-amber-500 rounded-2xl p-6 col-span-2">
                <p className="font-display text-5xl font-bold text-white leading-none mb-2">&lt;1%</p>
                <p className="text-sm text-white/80 leading-snug">del contenido de licencias de oficios está disponible en español — nosotros lo estamos cambiando.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {[
              { icon: Shield, label: 'Datos verificados de fuentes .gov' },
              { icon: RefreshCw, label: 'Contenido actualizado automáticamente con IA' },
              { icon: Languages, label: 'Guías completas en español' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 px-8 py-4 text-sm text-slate-600 font-medium">
                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRADES ───────────────────────────────────────── */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Explora por oficio</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              ¿En qué oficio<br />
              <em className="italic text-primary">quieres trabajar?</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {TRADES.map((trade) => (
              <Link
                key={trade.slug}
                href={`/oficio/${trade.slug}`}
                className={`group border rounded-2xl p-6 transition-all duration-200 flex flex-col items-start gap-3 ${trade.color}`}
              >
                <span className="text-4xl">{trade.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-tight group-hover:text-primary transition-colors">
                    {trade.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{trade.count}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all mt-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED GUIDES ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Guías más consultadas</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900">
                Los más buscados
              </h2>
            </div>
            <Link href="/estados" className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
              Ver todas las guías <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED.map((page, i) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="group bg-[#FAFAF8] border border-slate-100 hover:border-primary/30 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${page.tagColor}`}>
                  {page.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                  {page.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-primary mt-auto">
                  Ver guía completa
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATES ───────────────────────────────────────── */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Explora por estado</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900">
              Estados con más<br />
              <em className="italic text-primary">información disponible</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {STATES.map((state) => (
              <Link
                key={state.code}
                href={`/estado/${state.slug}`}
                className="group bg-white border border-slate-100 hover:border-primary hover:bg-amber-50 rounded-xl p-4 transition-all duration-200 text-center"
              >
                <div className="font-display text-3xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                  {state.code}
                </div>
                <div className="text-sm text-slate-600 mt-0.5 font-medium">{state.name}</div>
                <div className="text-xs text-slate-400 mt-1">
                  {state.licenses} {state.licenses === 1 ? 'guía' : 'guías'}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/estados" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
              Ver todos los estados <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NARRATIVE / STORY SECTION ────────────────────── */}
      <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="talavera2" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect width="60" height="60" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="30" cy="30" r="12" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="30" cy="30" r="4" fill="none" stroke="white" strokeWidth="0.5"/>
                <line x1="30" y1="18" x2="30" y2="0" stroke="white" strokeWidth="0.5"/>
                <line x1="30" y1="42" x2="30" y2="60" stroke="white" strokeWidth="0.5"/>
                <line x1="18" y1="30" x2="0" y2="30" stroke="white" strokeWidth="0.5"/>
                <line x1="42" y1="30" x2="60" y2="30" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#talavera2)"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-6">Por qué existe ChambaEnUSA</p>
            <h2 className="font-display text-4xl lg:text-6xl font-bold leading-[1.05] mb-8">
              Millones de hispanos construyen este país —{' '}
              <em className="italic text-amber-400">merecen la información en su idioma.</em>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              El 31% de todos los trabajadores de construcción en EE.UU. son hispanos. Pero los recursos para obtener licencias y certificaciones están casi en su totalidad en inglés. ChambaEnUSA cierra esa brecha — guías verificadas, en español, actualizadas automáticamente con inteligencia artificial y fuentes oficiales.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { num: '31', unit: '%', label: 'de la fuerza laboral en construcción es hispana', source: 'BLS, 2024' },
                { num: '65', unit: 'M', label: 'hispanos en EE.UU. hoy', source: 'Census Bureau, 2023' },
                { num: '31', unit: '', label: 'guías de licencias disponibles ahora', source: 'chambaenusa.com' },
              ].map(({ num, unit, label, source }) => (
                <div key={num + label}>
                  <p className="font-display text-5xl font-bold text-amber-400 leading-none">
                    {num}<span className="text-3xl">{unit}</span>
                  </p>
                  <p className="text-sm text-slate-300 mt-2 leading-snug">{label}</p>
                  <p className="text-xs text-slate-500 mt-1">{source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl px-8 py-14 text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Empieza hoy</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Encuentra la guía<br />para tu oficio y estado
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
              31 guías disponibles. Electricista, CDL, Cosmetología, HVAC y Plomería en los estados con más demanda hispana.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/estados"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
              >
                Explorar por estado
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/buscar"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-primary hover:text-primary transition-colors"
              >
                Buscar mi oficio
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
