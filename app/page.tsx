import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SubscribeForm } from '@/components/subscribe-form'

export const metadata: Metadata = {
  title: 'ChambaEnUSA — Licencias de Oficios en EE.UU. en Español',
  description:
    'Guías verificadas en español para obtener tu licencia de electricista, HVAC, CDL, cosmetología o plomería en Estados Unidos. Requisitos, costos y escuelas bilingües por estado.',
  alternates: {
    canonical: 'https://chambaenusa.com/',
  },
  openGraph: {
    title: 'ChambaEnUSA — Licencias de Oficios en EE.UU. en Español',
    description:
      'Guías verificadas en español para obtener tu licencia de electricista, HVAC, CDL, cosmetología o plomería en Estados Unidos.',
    url: 'https://chambaenusa.com/',
    type: 'website',
  },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const TRADES = [
  {
    name: 'Electricista',
    icon: '⚡',
    href: '/licencia-electricista-texas',
    accent: '#F59E0B',
    salary: '$28 – $42 / hora',
    desc: 'Journeyman · Master · Contratista',
  },
  {
    name: 'HVAC',
    icon: '🌡️',
    href: '/licencia-hvac-texas',
    accent: '#14B8A6',
    salary: '$25 – $38 / hora',
    desc: 'EPA 608 · Técnico certificado',
  },
  {
    name: 'Cosmetología',
    icon: '✂️',
    href: '/licencia-cosmetologia-texas',
    accent: '#EC4899',
    salary: '$18 – $32 / hora',
    desc: 'Operator · Esthetician · Nail Tech',
  },
  {
    name: 'CDL',
    icon: '🚛',
    href: '/licencia-cdl-california',
    accent: '#6366F1',
    salary: '$24 – $45 / hora',
    desc: 'Clase A · Clase B · Clase C',
  },
  {
    name: 'Plomería',
    icon: '🔧',
    href: '/licencia-plomero-texas',
    accent: '#3B82F6',
    salary: '$26 – $40 / hora',
    desc: 'Journeyman · Master Plumber',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Elige tu oficio',
    icon: '🔍',
    desc: 'Selecciona el oficio que más te interesa. Tenemos guías para 5 de los oficios mejor pagados en EE.UU.',
  },
  {
    num: '02',
    title: 'Lee la guía oficial',
    icon: '📖',
    desc: 'Cada guía está verificada con fuentes .gov y detalla requisitos, costos, escuelas bilingües y exámenes disponibles en español.',
  },
  {
    num: '03',
    title: 'Obtén tu licencia',
    icon: '✅',
    desc: 'Sigue los pasos documentados por estado y llega al examen con confianza. Sin rodeos, sin inglés obligatorio.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="flex flex-col font-jakarta">

      {/* ── SECCIÓN 1: HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-[#131b2e] text-white overflow-hidden min-h-[88vh] flex flex-col">

        {/* Talavera pattern */}
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
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(254,166,25,0.12), transparent 65%)' }}
          aria-hidden="true"
        />

        {/* Bottom-left subtle glow */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)' }}
          aria-hidden="true"
        />

        {/* Main hero content */}
        <div className="container mx-auto px-4 pt-20 pb-12 lg:pt-28 lg:pb-16 relative flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center w-full">

            {/* ── LEFT: copy ── */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full mb-7 tracking-widest uppercase"
                style={{ background: 'rgba(254,166,25,0.15)', border: '1px solid rgba(254,166,25,0.35)', color: '#fea619' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#fea619]" aria-hidden="true" />
                Portal de Licencias · 2026
              </div>

              {/* H1 */}
              <h1 className="font-jakarta font-extrabold text-5xl md:text-7xl tracking-tight leading-[1.0] mb-6 text-white">
                Asegura tu futuro.<br />
                <span style={{ color: '#fea619' }}>Domina el sistema.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-9 max-w-lg">
                El portal <strong className="text-white font-semibold">#1 en español</strong> para hispanos que buscan licencias de oficios en Estados Unidos.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/estados"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#131b2e] transition-all hover:brightness-110 hover:shadow-[0_0_24px_rgba(254,166,25,0.4)]"
                  style={{ background: '#fea619' }}
                >
                  Ver Licencias
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/oficio/electricista"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white border border-white/30 hover:border-white/70 hover:bg-white/5 transition-all"
                >
                  ¿Por dónde empiezo?
                </Link>
              </div>
            </div>

            {/* ── RIGHT: decorative stat grid ── */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(254,166,25,0.1)', border: '1px solid rgba(254,166,25,0.2)' }}
              >
                <p className="font-jakarta font-extrabold text-6xl leading-none mb-2" style={{ color: '#fea619' }}>31%</p>
                <p className="text-sm text-slate-300 leading-snug">de la fuerza laboral en construcción en EE.UU. es hispana</p>
                <p className="text-xs text-slate-500 mt-2">Bureau of Labor Statistics, 2024</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-6">
                <p className="font-jakarta font-extrabold text-6xl leading-none mb-2 text-white">65M</p>
                <p className="text-sm text-slate-300 leading-snug">hispanos viviendo en Estados Unidos hoy</p>
                <p className="text-xs text-slate-500 mt-2">U.S. Census Bureau, 2023</p>
              </div>
              <div
                className="col-span-2 rounded-2xl p-6"
                style={{ background: '#fea619' }}
              >
                <p className="font-jakarta font-extrabold text-5xl leading-none mb-2 text-[#131b2e]">&lt;1%</p>
                <p className="text-sm text-[#131b2e]/80 leading-snug font-medium">del contenido de licencias de oficios está en español — nosotros lo cambiamos.</p>
              </div>
            </div>

          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div className="relative">
          <div className="border-t border-white/10" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                {[
                  { value: '921', label: 'usuarios activos' },
                  { value: '31',  label: 'páginas de guías' },
                  { value: '5',   label: 'oficios cubiertos' },
                  { value: '✓',   label: 'Examen en Español' },
                ].map(({ value, label }) => (
                  <div key={label} className="py-5 px-6 text-center">
                    <p className="font-jakarta font-extrabold text-xl text-white leading-none">{value}</p>
                    <p className="text-xs text-slate-400 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── SECCIÓN 2: OFICIOS DE ALTA DEMANDA ──────────────────────────── */}
      <section className="py-20 bg-[#f7f9fb]">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#fea619' }}>5 oficios disponibles</p>
            <h2 className="font-jakarta font-extrabold tracking-tighter text-4xl md:text-5xl text-[#191c1e] leading-tight mb-3">
              Oficios de Alta Demanda
            </h2>
            <p className="text-[#45464d] text-lg max-w-xl">
              Oportunidades con salarios competitivos y estabilidad laboral.
            </p>
          </div>

          {/* Trade cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRADES.map((trade) => (
              <Link
                key={trade.name}
                href={trade.href}
                className="group rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: '#111827',
                  borderLeft: `4px solid ${trade.accent}`,
                }}
              >
                {/* Icon + name row */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl leading-none" aria-hidden="true">{trade.icon}</span>
                  <div>
                    <h3 className="font-jakarta font-bold text-white text-lg leading-snug">{trade.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{trade.desc}</p>
                  </div>
                </div>

                {/* Salary */}
                <p className="font-jakarta font-bold text-sm" style={{ color: trade.accent }}>{trade.salary}</p>

                {/* CTA */}
                <div
                  className="flex items-center gap-1.5 text-sm font-bold mt-auto group-hover:gap-2.5 transition-all"
                  style={{ color: trade.accent }}
                >
                  Ver guía
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: TU CAMINO A LA CERTIFICACIÓN ─────────────────────── */}
      <section className="py-20 bg-[#f2f4f6]">
        <div className="container mx-auto px-4">

          {/* Header centrado con línea amber */}
          <div className="text-center mb-16">
            <h2 className="font-jakarta font-extrabold tracking-tighter text-4xl md:text-5xl text-[#191c1e] mb-4 inline-block relative">
              Tu Camino a la Certificación
              <span
                className="block h-1 w-20 mx-auto mt-3 rounded-full"
                style={{ background: '#fea619' }}
                aria-hidden="true"
              />
            </h2>
            <p className="text-[#45464d] text-lg max-w-lg mx-auto mt-5">
              Un proceso claro, en español, para que no pierdas tiempo ni dinero.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {STEPS.map((step) => (
              <div key={step.num} className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                {/* Ghost number */}
                <span
                  className="absolute top-4 right-5 font-jakarta font-extrabold text-7xl leading-none select-none pointer-events-none"
                  style={{ color: '#f2f4f6', WebkitTextStroke: '2px #e5e7eb' }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                {/* Icon */}
                <div className="text-4xl mb-5" aria-hidden="true">{step.icon}</div>
                {/* Number badge */}
                <div
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-[#131b2e] mb-4"
                  style={{ background: '#fea619' }}
                >
                  {step.num.replace('0', '')}
                </div>
                <h3 className="font-jakarta font-bold text-[#191c1e] text-xl mb-2">{step.title}</h3>
                <p className="text-[#45464d] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/estados"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#131b2e] transition-all hover:brightness-110 hover:shadow-[0_0_24px_rgba(254,166,25,0.35)]"
              style={{ background: '#fea619' }}
            >
              Ver todas las guías
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 4: HISTORIAS / MISIÓN ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: '#fea619' }}>Datos reales · Fuentes .gov</p>
            <h2 className="font-jakarta font-extrabold tracking-tighter text-4xl md:text-5xl text-[#191c1e] text-center mb-14">
              Por qué los hispanos confían<br className="hidden md:block" /> en ChambaEnUSA
            </h2>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-8 mb-12">
              {[
                { stat: '65M',  label: 'hispanos en EE.UU.',           source: 'U.S. Census Bureau, 2023' },
                { stat: '31%',  label: 'trabajan en oficios de construcción', source: 'Bureau of Labor Statistics, 2024' },
                { stat: '<1%',  label: 'tienen info en español sobre licencias', source: 'Brecha que ChambaEnUSA cierra' },
              ].map(({ stat, label, source }) => (
                <div
                  key={stat}
                  className="rounded-2xl p-8 text-center"
                  style={{ background: '#f7f9fb', border: '1px solid #e5e7eb' }}
                >
                  <p
                    className="font-jakarta font-extrabold text-5xl leading-none mb-2"
                    style={{ color: '#fea619' }}
                  >
                    {stat}
                  </p>
                  <p className="text-[#191c1e] font-semibold text-sm leading-snug mb-1">{label}</p>
                  <p className="text-[#45464d] text-xs">{source}</p>
                </div>
              ))}
            </div>

            {/* Mission paragraph */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: '#131b2e', border: '1px solid rgba(254,166,25,0.2)' }}
            >
              <p className="text-slate-200 text-lg leading-relaxed max-w-2xl mx-auto">
                El 31% de la fuerza laboral en construcción de EE.UU. es hispana, pero los recursos para obtener licencias están casi en su totalidad en inglés.{' '}
                <strong className="text-white">ChambaEnUSA cierra esa brecha</strong> — guías verificadas con fuentes oficiales, completamente en español, actualizadas automáticamente.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: CTA FINAL ─────────────────────────────────────────── */}
      <section className="relative bg-[#131b2e] text-white py-24 overflow-hidden">

        {/* Talavera de fondo */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="talavera-cta" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect width="60" height="60" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="30" cy="30" r="12" fill="none" stroke="white" strokeWidth="0.5"/>
                <line x1="30" y1="18" x2="30" y2="0" stroke="white" strokeWidth="0.5"/>
                <line x1="30" y1="42" x2="30" y2="60" stroke="white" strokeWidth="0.5"/>
                <line x1="18" y1="30" x2="0" y2="30" stroke="white" strokeWidth="0.5"/>
                <line x1="42" y1="30" x2="60" y2="30" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#talavera-cta)"/>
          </svg>
        </div>

        {/* Amber glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(254,166,25,0.08), transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative text-center">

          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#fea619' }}>Empieza hoy · Es gratis</p>

          <h2 className="font-jakarta font-extrabold tracking-tight text-4xl md:text-6xl text-white mb-4 leading-tight">
            ¿Listo para empezar?
          </h2>

          <p className="text-slate-300 text-lg mb-10 max-w-md mx-auto">
            Recibe la guía de tu oficio directamente en tu correo. Sin costo.
          </p>

          <div className="flex justify-center mb-5">
            <SubscribeForm variant="dark" />
          </div>

          <p className="text-slate-500 text-xs">
            Sin spam. Solo información verificada sobre tu oficio.
          </p>

        </div>
      </section>

    </div>
  )
}
