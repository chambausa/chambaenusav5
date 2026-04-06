import type { Metadata } from 'next'
import Link from 'next/link'
import { SubscribeForm } from '@/components/subscribe-form'

type Viability = 'easy' | 'moderate' | 'hard'

interface LicenseEntry {
  state: string
  stateCode: string
  slug: string
  highlight: string
  horasReq: string
  costo: string
  examEspanol: boolean
  viability: Viability
}

interface OficioData {
  name: string
  description: string
  overview: string
  stats: { totalStates: number; salaryMedian: string; growth: string; examEspanol: boolean }
  featured: { state: string; insight: string; saving: string }
  faqs: { q: string; a: string }[]
  licenses: LicenseEntry[]
}

const OFICIOS: Record<string, OficioData> = {
  electricista: {
    name: 'Electricista',
    description: 'Guía completa de licencias de electricista en Estados Unidos para hispanos.',
    overview: 'La licencia de electricista es una de las más demandadas en EE.UU. Los requisitos varían por estado, pero generalmente incluyen horas de experiencia supervisada y aprobar un examen. Los salarios son competitivos y la demanda sigue creciendo.',
    stats: { totalStates: 14, salaryMedian: '$58k', growth: '+9%', examEspanol: true },
    featured: {
      state: 'Texas',
      insight: 'Texas permite empezar como Aprendiz sin examen por solo $20. El examen de Journeyman está disponible en español. Sin escuela requerida.',
      saving: 'Ahorra 2+ años vs. California — sin escuela obligatoria',
    },
    faqs: [
      {
        q: '¿Mi licencia de Texas sirve en California?',
        a: 'No directamente. California no tiene acuerdos de reciprocidad plenos con Texas. Sin embargo, puedes presentar tus horas certificadas de Texas para calificar al examen de CA sin repetir el aprendizaje.',
      },
      {
        q: '¿Qué estado tiene el examen más fácil?',
        a: 'No existe un examen "fácil", pero estados como Texas y Florida ofrecen el examen en español y tienen una burocracia digital más ágil, facilitando el proceso administrativo.',
      },
      {
        q: '¿Necesito escuela para ser electricista?',
        a: 'En la mayoría de estados no. Puedes aprender 100% trabajando (On-the-Job Training) bajo un Master Electrician licenciado. Texas y varios estados del Sur permiten este camino.',
      },
      {
        q: '¿Cuánto tarda en promedio obtener la licencia?',
        a: 'Para Journeyman, el camino típico es 4 años de experiencia documentada (8,000 horas) + aprobar el examen. Si comienzas a tiempo completo hoy, puedes tener tu licencia en 4-5 años.',
      },
    ],
    licenses: [
      { state: 'Texas', stateCode: 'TX', slug: 'licencia-electricista-texas', highlight: '8,000 hrs + examen', horasReq: '8,000 hrs', costo: '$108', examEspanol: true, viability: 'easy' },
      { state: 'Florida', stateCode: 'FL', slug: 'licencia-electricista-florida', highlight: 'Licencia estatal + examen', horasReq: '4,000 hrs', costo: '$150', examEspanol: true, viability: 'easy' },
      { state: 'California', stateCode: 'CA', slug: 'licencia-electricista-california', highlight: 'CSLB + examen + seguro', horasReq: '8,000 hrs', costo: '$100', examEspanol: false, viability: 'moderate' },
      { state: 'New York', stateCode: 'NY', slug: 'licencia-electricista-new-york', highlight: 'Licencia de ciudad + estatal', horasReq: '7,500 hrs', costo: 'Varía', examEspanol: false, viability: 'hard' },
      { state: 'Arizona', stateCode: 'AZ', slug: 'licencia-electricista-arizona', highlight: 'Licencia estatal + examen', horasReq: '8,000 hrs', costo: '$90', examEspanol: false, viability: 'easy' },
      { state: 'Georgia', stateCode: 'GA', slug: 'licencia-electricista-georgia', highlight: 'Licencia estatal + examen', horasReq: '6,000 hrs', costo: '$75', examEspanol: false, viability: 'easy' },
      { state: 'Pennsylvania', stateCode: 'PA', slug: 'licencia-electricista-pennsylvania', highlight: 'Licencia municipal + estatal', horasReq: 'Varía', costo: 'Varía', examEspanol: false, viability: 'moderate' },
      { state: 'Washington', stateCode: 'WA', slug: 'licencia-electricista-washington', highlight: 'L&I + examen + experiencia', horasReq: '8,000 hrs', costo: '$120', examEspanol: false, viability: 'moderate' },
      { state: 'Colorado', stateCode: 'CO', slug: 'licencia-electricista-colorado', highlight: 'DORA + examen estatal', horasReq: '8,000 hrs', costo: '$110', examEspanol: false, viability: 'moderate' },
      { state: 'Nevada', stateCode: 'NV', slug: 'licencia-electricista-nevada', highlight: 'Licencia estatal + examen', horasReq: '8,000 hrs', costo: '$95', examEspanol: false, viability: 'easy' },
      { state: 'Illinois', stateCode: 'IL', slug: 'licencia-electricista-illinois', highlight: 'Licencia estatal + Chicago', horasReq: '8,000 hrs', costo: '$85', examEspanol: false, viability: 'moderate' },
      { state: 'Minnesota', stateCode: 'MN', slug: 'licencia-electricista-minnesota', highlight: 'Licencia estatal + examen', horasReq: '8,000 hrs', costo: '$95', examEspanol: false, viability: 'moderate' },
      { state: 'Oregon', stateCode: 'OR', slug: 'licencia-electricista-oregon', highlight: 'BCD + examen + experiencia', horasReq: '8,000 hrs', costo: '$100', examEspanol: false, viability: 'moderate' },
      { state: 'New Mexico', stateCode: 'NM', slug: 'licencia-electricista-new-mexico', highlight: 'CID + examen + experiencia', horasReq: '8,000 hrs', costo: '$75', examEspanol: false, viability: 'easy' },
    ],
  },
  cosmetologia: {
    name: 'Cosmetología',
    description: 'Guía completa de licencias de cosmetología en Estados Unidos para hispanos.',
    overview: 'La licencia de cosmetología te permite trabajar en salones de belleza, spas y de forma independiente. Los requisitos incluyen horas de escuela aprobada y aprobar exámenes teóricos y prácticos.',
    stats: { totalStates: 4, salaryMedian: '$35k', growth: '+11%', examEspanol: true },
    featured: {
      state: 'New York',
      insight: 'New York requiere solo 1,000 horas — la mitad que Texas. Examen disponible en varios idiomas y salarios más altos en NYC.',
      saving: '500 horas menos que Texas — 3-4 meses de escuela ahorrados',
    },
    faqs: [
      {
        q: '¿Puedo transferir mi licencia de Texas a Florida?',
        a: 'Sí, con el proceso de reciprocidad o endorsement. Necesitas licencia activa, cumplir con las horas del estado destino y pagar la tarifa de transferencia.',
      },
      {
        q: '¿El examen está disponible en español?',
        a: 'Sí en Texas (PSI), California (PSI) y parcialmente en otros estados. Siempre verifica con la junta estatal antes de agendar.',
      },
    ],
    licenses: [
      { state: 'Texas', stateCode: 'TX', slug: 'licencia-cosmetologia-texas', highlight: '1,500 horas + examen', horasReq: '1,500 hrs', costo: '$175', examEspanol: true, viability: 'easy' },
      { state: 'California', stateCode: 'CA', slug: 'licencia-cosmetologia-california', highlight: '1,600 horas + examen', horasReq: '1,600 hrs', costo: '$125', examEspanol: true, viability: 'moderate' },
      { state: 'Florida', stateCode: 'FL', slug: 'licencia-cosmetologia-florida', highlight: '1,200 horas + examen', horasReq: '1,200 hrs', costo: '$200', examEspanol: true, viability: 'easy' },
      { state: 'New York', stateCode: 'NY', slug: 'licencia-cosmetologia-new-york', highlight: '1,000 horas + examen', horasReq: '1,000 hrs', costo: '$40', examEspanol: false, viability: 'easy' },
    ],
  },
  cdl: {
    name: 'CDL (Licencia Comercial)',
    description: 'Guía completa de licencias CDL para conductores comerciales hispanos.',
    overview: 'La licencia CDL (Commercial Driver\'s License) es esencial para manejar camiones y vehículos comerciales. La demanda de conductores es muy alta en todo el país.',
    stats: { totalStates: 4, salaryMedian: '$72k', growth: '+8%', examEspanol: true },
    featured: {
      state: 'Texas',
      insight: 'Texas tiene más de 200 escuelas CDL certificadas, muchas con instructores bilingües. El examen de conocimiento está disponible en español en DPS.',
      saving: 'Más de 200 escuelas — la mayor red de formación CDL en español',
    },
    faqs: [
      {
        q: '¿Necesito escuela para sacar mi CDL?',
        a: 'Sí desde 2022. La regulación ELDT (Entry Level Driver Training) federal exige completar entrenamiento en una escuela certificada por la FMCSA antes de tomar el examen.',
      },
      {
        q: '¿Puedo sacar CDL sin seguro social?',
        a: 'No. Para el CDL federal se requiere número de Seguro Social. Es un requisito federal FMCSA, no estatal.',
      },
    ],
    licenses: [
      { state: 'California', stateCode: 'CA', slug: 'licencia-cdl-california', highlight: 'DMV + examen médico', horasReq: '160 hrs', costo: '$120', examEspanol: true, viability: 'moderate' },
      { state: 'Texas', stateCode: 'TX', slug: 'licencia-cdl-texas', highlight: 'DPS + examen + médico', horasReq: '160 hrs', costo: '$97', examEspanol: true, viability: 'easy' },
      { state: 'Florida', stateCode: 'FL', slug: 'licencia-cdl-florida', highlight: 'DHSMV + examen + médico', horasReq: '160 hrs', costo: '$115', examEspanol: true, viability: 'easy' },
      { state: 'New York', stateCode: 'NY', slug: 'licencia-cdl-new-york', highlight: 'DMV + examen + médico', horasReq: '160 hrs', costo: '$135', examEspanol: false, viability: 'moderate' },
    ],
  },
  hvac: {
    name: 'HVAC',
    description: 'Guía completa de licencias HVAC en Estados Unidos para hispanos.',
    overview: 'Los técnicos HVAC instalan y reparan sistemas de calefacción, ventilación y aire acondicionado. La certificación EPA 608 es obligatoria a nivel federal.',
    stats: { totalStates: 5, salaryMedian: '$52k', growth: '+6%', examEspanol: false },
    featured: {
      state: 'Texas',
      insight: 'TDLR regula HVAC en Texas con solo 48 meses de experiencia requerida. La EPA 608 está disponible en español con varios proveedores certificados.',
      saving: 'EPA 608 disponible en español — primer paso accesible para hispanos',
    },
    faqs: [
      {
        q: '¿Qué es la certificación EPA 608?',
        a: 'Es la certificación federal obligatoria para manejar refrigerantes. Es el primer paso en cualquier estado. Hay 4 tipos: Type I, II, III y Universal. Para trabajo general se recomienda Universal.',
      },
      {
        q: '¿Puedo trabajar como técnico HVAC sin licencia estatal?',
        a: 'Depende del estado. En Texas necesitas licencia TDLR. En California trabajas bajo un contratista con C-20. En otros estados como Arizona necesitas licencia ROC.',
      },
    ],
    licenses: [
      { state: 'Texas', stateCode: 'TX', slug: 'licencia-hvac-texas', highlight: 'TDLR + EPA 608 + examen', horasReq: '4,000 hrs', costo: '$50', examEspanol: false, viability: 'easy' },
      { state: 'California', stateCode: 'CA', slug: 'licencia-hvac-california', highlight: 'CSLB + EPA 608 + C-20', horasReq: '4 años', costo: '$450+', examEspanol: false, viability: 'hard' },
      { state: 'New York', stateCode: 'NY', slug: 'licencia-hvac-new-york', highlight: 'NYC + EPA 608 + local', horasReq: 'Varía', costo: 'Varía', examEspanol: false, viability: 'hard' },
      { state: 'Florida', stateCode: 'FL', slug: 'licencia-hvac-florida', highlight: 'Licencia estatal + EPA 608', horasReq: '3,000 hrs', costo: '$200', examEspanol: false, viability: 'moderate' },
      { state: 'Arizona', stateCode: 'AZ', slug: 'licencia-hvac-arizona', highlight: 'ROC + EPA 608 + licencia', horasReq: '4 años', costo: '$200', examEspanol: false, viability: 'moderate' },
    ],
  },
  plomero: {
    name: 'Plomería',
    description: 'Guía completa de licencias de plomería en Estados Unidos para hispanos.',
    overview: 'La plomería es un oficio con alta demanda y buenos salarios. Los requisitos varían significativamente por estado y a veces por ciudad.',
    stats: { totalStates: 4, salaryMedian: '$60k', growth: '+5%', examEspanol: false },
    featured: {
      state: 'Texas',
      insight: 'TSBPE regula plomería en Texas con examen en inglés pero proceso digital claro. Muy alta demanda en Houston y DFW por construcción residencial.',
      saving: 'Alta demanda en construcción — Houston y DFW entre los mercados #1 del país',
    },
    faqs: [
      {
        q: '¿Hay licencia de plomería en California?',
        a: 'No licencia individual. En California, los plomeros trabajan como empleados o a través de una empresa con licencia C-36 del CSLB. Para tener tu propio negocio necesitas el C-36.',
      },
      {
        q: '¿Qué diferencia hay entre plomero registrado y maestro plomero?',
        a: 'En Texas: el Plomero Registrado puede hacer instalaciones bajo supervisión. El Master Plumber puede supervisar, sacar permisos y tener negocio propio.',
      },
    ],
    licenses: [
      { state: 'Texas', stateCode: 'TX', slug: 'licencia-plomero-texas', highlight: 'TSBPE + examen + experiencia', horasReq: '8,000 hrs', costo: '$40', examEspanol: false, viability: 'moderate' },
      { state: 'California', stateCode: 'CA', slug: 'licencia-plomero-california', highlight: 'CSLB + C-36 + examen', horasReq: '4 años', costo: '$450+', examEspanol: false, viability: 'hard' },
      { state: 'Florida', stateCode: 'FL', slug: 'licencia-plomero-florida', highlight: 'CILB + examen + experiencia', horasReq: '4,000 hrs', costo: '$250', examEspanol: false, viability: 'moderate' },
      { state: 'New York', stateCode: 'NY', slug: 'licencia-plomero-new-york', highlight: 'NYC DOB + examen + experiencia', horasReq: '5 años', costo: 'Varía', examEspanol: false, viability: 'hard' },
    ],
  },
}

export const dynamic = 'force-static'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return Object.keys(OFICIOS).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const oficio = OFICIOS[params.slug]
  if (!oficio) return { title: 'Oficio no encontrado' }
  const descriptions: Record<string, string> = {
    electricista: 'Compara licencias de electricista en 14 estados de EE.UU. Requisitos, costos, examen en español y cuál estado es más fácil para hispanos en 2026.',
    cosmetologia: 'Guía de licencias de cosmetología en EE.UU. para hispanos. Compara horas requeridas, costos y examen en español en Texas, California, Florida y New York.',
    cdl: 'Todo sobre la licencia CDL en EE.UU. Clases A, B y C, requisitos por estado, costos y cómo aprobar el examen comercial en español.',
    hvac: 'Licencias HVAC en EE.UU. para hispanos. Compara requisitos de EPA 608, costos y certificaciones en Texas, California, Florida y más.',
    plomero: 'Guía de licencias de plomero en EE.UU. Journeyman y Master Plumber — requisitos, costos y examen en español por estado.',
  }
  return {
    title: `Licencia de ${oficio.name} en USA 2026: Guía Completa en Español | ChambaEnUSA`,
    description: descriptions[params.slug] || oficio.description,
    alternates: {
      canonical: `https://chambaenusa.com/oficio/${params.slug}`,
    },
    openGraph: {
      title: `Licencia de ${oficio.name} en USA — Guía en Español`,
      description: descriptions[params.slug] || oficio.description,
      url: `https://chambaenusa.com/oficio/${params.slug}`,
      type: 'article',
    },
  }
}

const viabilityConfig = {
  easy: { label: 'Fácil', bg: 'bg-emerald-50', border: 'border-emerald-500', text: 'text-emerald-900', sub: 'text-emerald-700' },
  moderate: { label: 'Moderado', bg: 'bg-amber-50', border: 'border-amber-500', text: 'text-amber-900', sub: 'text-amber-700' },
  hard: { label: 'Complejo', bg: 'bg-red-50', border: 'border-red-400', text: 'text-red-900', sub: 'text-red-700' },
}

export default function OficioPage({ params }: Props) {
  const oficio = OFICIOS[params.slug]

  if (!oficio) {
    return (
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold">Oficio no encontrado</h1>
        <Link href="/" className="text-blue-600 underline">Volver al inicio</Link>
      </main>
    )
  }

  const tableStates = oficio.licenses.slice(0, 5)

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 font-jakarta">
      {/* Breadcrumb */}
      <nav className="mb-10 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 flex items-center gap-2">
        <Link href="/" className="hover:text-amber-500 transition-colors">Inicio</Link>
        <span>/</span>
        <span className="text-slate-900">{oficio.name}</span>
      </nav>

      {/* Hero — editorial 12-col */}
      <header className="grid grid-cols-12 gap-6 mb-16">
        {/* Left col */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-amber-500 inline-block" />
            Recursos Profesionales
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#131b2e] leading-none mb-6">
            {oficio.name}<br />
            <span className="text-amber-500">en USA</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mb-8 leading-relaxed">
            {oficio.overview}
          </p>
        </div>

        {/* Right col — bento stat cards */}
        <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="bg-[#131b2e] p-6 rounded-xl flex flex-col justify-between aspect-square">
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <div>
              <div className="text-3xl font-black text-white">{oficio.stats.totalStates}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Estados Disponibles</div>
            </div>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl flex flex-col justify-between aspect-square">
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div className="text-3xl font-black text-[#131b2e]">{oficio.stats.salaryMedian}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Salario Mediana</div>
            </div>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl flex flex-col justify-between aspect-square">
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <div>
              <div className="text-3xl font-black text-[#131b2e]">{oficio.stats.growth}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Crecimiento</div>
            </div>
          </div>
          <div className={`p-6 rounded-xl flex flex-col justify-between aspect-square ${oficio.stats.examEspanol ? 'bg-amber-500' : 'bg-slate-200'}`}>
            <svg className={`w-8 h-8 ${oficio.stats.examEspanol ? 'text-white' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <div>
              <div className={`text-xl font-black ${oficio.stats.examEspanol ? 'text-white' : 'text-slate-500'}`}>
                {oficio.stats.examEspanol ? 'Disponible' : 'Solo Inglés'}
              </div>
              <div className={`text-[10px] uppercase tracking-widest font-bold ${oficio.stats.examEspanol ? 'text-white/80' : 'text-slate-400'}`}>
                Examen en Español
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Viability Grid */}
      <section className="mb-20">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#131b2e]">Mapa de Viabilidad por Estado</h2>
          <div className="hidden md:flex gap-4 text-[10px] font-black uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />Fácil</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />Moderado</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-red-400 rounded-full" />Complejo</span>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {oficio.licenses.map((lic) => {
            const v = viabilityConfig[lic.viability]
            return (
              <Link
                key={lic.slug}
                href={`/${lic.slug}`}
                className={`${v.bg} p-4 rounded-lg border-b-2 ${v.border} text-center hover:scale-105 transition-transform`}
              >
                <div className={`text-lg font-black ${v.text}`}>{lic.stateCode}</div>
                <div className={`text-[10px] uppercase font-bold ${v.sub}`}>{lic.state}</div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Comparison Table + Featured Card */}
      <section className="grid grid-cols-12 gap-6 mb-20 items-start">
        {/* Table */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="text-lg font-extrabold text-[#131b2e]">Comparativa de Requisitos</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Estado</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Horas Req.</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Costo</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Español</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {tableStates.map((lic) => (
                  <tr key={lic.slug} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#131b2e]">{lic.state}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{lic.horasReq}</td>
                    <td className="px-6 py-4 text-sm font-mono font-bold text-slate-700">{lic.costo}</td>
                    <td className="px-6 py-4">
                      {lic.examEspanol ? (
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-black uppercase">Sí</span>
                      ) : (
                        <span className="bg-slate-100 text-slate-400 px-2 py-0.5 rounded text-[10px] font-black uppercase">No</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Featured Card */}
        <div className="col-span-12 lg:col-span-4 bg-[#131b2e] p-8 rounded-xl text-white relative overflow-hidden flex flex-col justify-end min-h-[280px]">
          <div className="absolute top-4 right-4 opacity-5">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <span className="inline-block px-3 py-1 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4 self-start">
            Recomendación Pro
          </span>
          <h3 className="text-2xl font-bold mb-3">El camino recomendado: {oficio.featured.state}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{oficio.featured.insight}</p>
          <div className="w-full bg-slate-700 h-0.5 rounded-full overflow-hidden mb-2">
            <div className="bg-amber-500 w-3/4 h-full" />
          </div>
          <div className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">{oficio.featured.saving}</div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#131b2e] mb-8 border-l-4 border-amber-500 pl-5">
          Preguntas Frecuentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {oficio.faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="text-base font-bold mb-3 text-[#131b2e]">{faq.q}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture */}
      <section className="mb-12">
        <div className="bg-[#131b2e] rounded-xl px-8 py-10 text-center">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Guía gratis · Sin spam</p>
          <h3 className="text-2xl font-extrabold text-white mb-2">
            Recibe la guía de {oficio.name} en tu correo
          </h3>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Requisitos, costos y escuelas bilingües — directo a tu inbox.
          </p>
          <div className="flex justify-center">
            <SubscribeForm oficio={params.slug} variant="dark" />
          </div>
        </div>
      </section>

      {/* Hub Links — all states */}
      <section className="mb-12">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
          Guías completas por estado
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {oficio.licenses.map((lic) => (
            <Link
              key={lic.slug}
              href={`/${lic.slug}`}
              className="group flex items-center justify-between p-5 bg-white border-l border-slate-200 hover:border-amber-500 rounded-r-xl transition-colors shadow-sm"
            >
              <div>
                <span className="text-lg font-bold text-[#131b2e] group-hover:text-amber-500 transition-colors">
                  {lic.state}
                </span>
                <div className="text-[10px] mt-1 text-slate-400 font-medium">{lic.highlight}</div>
              </div>
              <svg className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-amber-500 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
