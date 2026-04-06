import { Metadata } from 'next'
import Link from 'next/link'
import { SubscribeForm } from '@/components/subscribe-form'

interface TradeCard {
  oficio: string
  slug: string
  requirements: string
  salary: string
  hours: string
  examEspanol: boolean
  accentColor: string   // hex value e.g. "#3b82f6"
  barWidth: string
}

interface EstadoData {
  name: string
  code: string
  hispanicPercent: string
  topCities: { name: string; population: string }[]
  salaryPromedio: string
  numOficios: number
  insight: { headline: string; body: string; cta: string; ctaHref: string }
  reguladora?: { nombre: string; descripcion: string; url: string; hubInterno?: string }
  trades: TradeCard[]
  comparisonRows: { oficio: string; horas: string; costo: string; examEspanol: boolean }[]
  overview: string
  keywords: string[]
}

const ESTADOS_DATA: Record<string, EstadoData> = {
  texas: {
    name: 'Texas',
    code: 'TX',
    hispanicPercent: '40%',
    salaryPromedio: '$62,000',
    numOficios: 5,
    topCities: [
      { name: 'Houston', population: '2.3M' },
      { name: 'San Antonio', population: '1.5M' },
      { name: 'Dallas', population: '1.3M' },
      { name: 'Austin', population: '1.0M' },
      { name: 'Fort Worth', population: '1.0M' },
      { name: 'El Paso', population: '680K' },
    ],
    insight: {
      headline: 'Dato Único del Estado',
      body: 'En Texas puedes empezar como Aprendiz de Electricista SIN examen por solo $20. El examen de Journeyman está disponible en español. La TDLR regula la mayoría de los oficios con procesos digitales claros.',
      cta: 'Ver Licencia de Electricista TX',
      ctaHref: '/licencia-electricista-texas',
    },
    reguladora: {
      nombre: 'TDLR Texas',
      descripcion: 'El Departamento de Licencias y Regulación de Texas (TDLR) supervisa la mayoría de las licencias técnicas del estado: electricistas, HVAC, cosmetología y más.',
      url: 'https://www.tdlr.texas.gov/',
      hubInterno: '/agencias/texas-department-of-licensing-and-regulation-tdlr/',
    },
    trades: [
      { oficio: 'Electricista', slug: 'licencia-electricista-texas', requirements: '8,000 hrs + examen', salary: '$58,000', hours: '8,000 hrs', examEspanol: true, accentColor: '#3b82f6', barWidth: 'w-3/4' },
      { oficio: 'HVAC', slug: 'licencia-hvac-texas', requirements: 'TDLR + EPA 608', salary: '$52,000', hours: '4,000 hrs', examEspanol: false, accentColor: '#f97316', barWidth: 'w-1/2' },
      { oficio: 'Plomero', slug: 'licencia-plomero-texas', requirements: 'TSBPE + examen', salary: '$55,000', hours: '8,000 hrs', examEspanol: false, accentColor: '#10b981', barWidth: 'w-2/3' },
      { oficio: 'CDL', slug: 'licencia-cdl-texas', requirements: 'DPS + examen médico', salary: '$72,000', hours: '160 hrs', examEspanol: true, accentColor: '#f43f5e', barWidth: 'w-full' },
      { oficio: 'Cosmetología', slug: 'licencia-cosmetologia-texas', requirements: '1,500 hrs + examen', salary: '$38,000', hours: '1,500 hrs', examEspanol: true, accentColor: '#ec4899', barWidth: 'w-1/3' },
    ],
    comparisonRows: [
      { oficio: 'Electricista', horas: '8,000 hrs', costo: '$108', examEspanol: true },
      { oficio: 'HVAC Técnico', horas: '4,000 hrs', costo: '$50', examEspanol: false },
      { oficio: 'CDL Clase A', horas: '160 hrs (escuela)', costo: '$97', examEspanol: true },
      { oficio: 'Cosmetología', horas: '1,500 hrs', costo: '$175', examEspanol: true },
      { oficio: 'Plomero', horas: '8,000 hrs', costo: '$40', examEspanol: false },
    ],
    overview: 'Texas es el segundo estado más grande de EE.UU. con más de 30 millones de habitantes. Con un 40% de población hispana y un mercado de construcción en auge en Houston, Dallas y Austin, es uno de los destinos más accesibles para obtener licencias técnicas.',
    keywords: ['licencias texas', 'certificaciones texas', 'empleos construccion texas', 'trabajos hispanos texas'],
  },
  california: {
    name: 'California',
    code: 'CA',
    hispanicPercent: '39%',
    salaryPromedio: '$78,000',
    numOficios: 5,
    topCities: [
      { name: 'Los Angeles', population: '4.0M' },
      { name: 'San Diego', population: '1.4M' },
      { name: 'San Jose', population: '1.0M' },
      { name: 'San Francisco', population: '875K' },
      { name: 'Fresno', population: '542K' },
    ],
    insight: {
      headline: 'Salarios Más Altos del País',
      body: 'California ofrece algunos de los salarios más altos para oficios técnicos. Un electricista en San Francisco puede ganar $89k+ al año. El costo de vida es alto, pero el poder adquisitivo es real para oficios sindicalizados.',
      cta: 'Ver Licencias en California',
      ctaHref: '/licencia-electricista-california',
    },
    reguladora: {
      nombre: 'CSLB California',
      descripcion: 'El Contractors State License Board (CSLB) regula contratistas en California, incluyendo electricistas C-10, plomeros C-36, HVAC C-20 y más. Para trabajar por tu cuenta necesitas licencia de contratista.',
      url: 'https://www.cslb.ca.gov/',
    },
    trades: [
      { oficio: 'Electricista', slug: 'licencia-electricista-california', requirements: 'CSLB + examen + seguro', salary: '$78,000', hours: '8,000 hrs', examEspanol: false, accentColor: '#3b82f6', barWidth: 'w-3/4' },
      { oficio: 'HVAC', slug: 'licencia-hvac-california', requirements: 'CSLB C-20 + EPA 608', salary: '$65,000', hours: '4 años', examEspanol: false, accentColor: '#f97316', barWidth: 'w-2/3' },
      { oficio: 'Plomero', slug: 'licencia-plomero-california', requirements: 'CSLB C-36 + examen', salary: '$72,000', hours: '4 años', examEspanol: false, accentColor: '#10b981', barWidth: 'w-3/4' },
      { oficio: 'CDL', slug: 'licencia-cdl-california', requirements: 'DMV + examen médico', salary: '$68,000', hours: '160 hrs', examEspanol: true, accentColor: '#f43f5e', barWidth: 'w-full' },
      { oficio: 'Cosmetología', slug: 'licencia-cosmetologia-california', requirements: '1,600 hrs + examen', salary: '$42,000', hours: '1,600 hrs', examEspanol: true, accentColor: '#ec4899', barWidth: 'w-2/5' },
    ],
    comparisonRows: [
      { oficio: 'Electricista', horas: '8,000 hrs', costo: '$100', examEspanol: false },
      { oficio: 'HVAC C-20', horas: '4 años exp.', costo: '$450+', examEspanol: false },
      { oficio: 'CDL Clase A', horas: '160 hrs (escuela)', costo: '$120', examEspanol: true },
      { oficio: 'Cosmetología', horas: '1,600 hrs', costo: '$125', examEspanol: true },
      { oficio: 'Plomero C-36', horas: '4 años exp.', costo: '$450+', examEspanol: false },
    ],
    overview: 'California tiene la economía más grande de EE.UU. y alta demanda de trabajadores especializados. Los salarios son los más altos del país, aunque el proceso de licencias puede ser más complejo, especialmente para contratistas.',
    keywords: ['licencias california', 'cslb california', 'empleos construccion california', 'contratistas california'],
  },
  florida: {
    name: 'Florida',
    code: 'FL',
    hispanicPercent: '27%',
    salaryPromedio: '$55,000',
    numOficios: 5,
    topCities: [
      { name: 'Miami', population: '455K' },
      { name: 'Jacksonville', population: '950K' },
      { name: 'Tampa', population: '400K' },
      { name: 'Orlando', population: '310K' },
      { name: 'Hialeah', population: '230K' },
    ],
    insight: {
      headline: 'El Estado de Mayor Crecimiento',
      body: 'Florida creció más que cualquier otro estado grande en la última década. La construcción residencial en Miami, Tampa y Orlando está en su punto más alto. HVAC y cosmetología tienen las horas más bajas del país.',
      cta: 'Ver Licencias en Florida',
      ctaHref: '/licencia-electricista-florida',
    },
    reguladora: {
      nombre: 'DBPR Florida',
      descripcion: 'El Department of Business and Professional Regulation (DBPR) regula la mayoría de los oficios en Florida: cosmetología, HVAC, plomería y más. Los exámenes son vía Pearson VUE.',
      url: 'https://www.myfloridalicense.com/',
    },
    trades: [
      { oficio: 'Electricista', slug: 'licencia-electricista-florida', requirements: 'Licencia estatal + examen', salary: '$55,000', hours: '4,000 hrs', examEspanol: true, accentColor: '#3b82f6', barWidth: 'w-1/2' },
      { oficio: 'HVAC', slug: 'licencia-hvac-florida', requirements: 'EPA 608 + licencia estatal', salary: '$52,000', hours: '3,000 hrs', examEspanol: false, accentColor: '#f97316', barWidth: 'w-2/5' },
      { oficio: 'Plomero', slug: 'licencia-plomero-florida', requirements: 'CILB + examen', salary: '$55,000', hours: '4,000 hrs', examEspanol: false, accentColor: '#10b981', barWidth: 'w-1/2' },
      { oficio: 'CDL', slug: 'licencia-cdl-florida', requirements: 'DHSMV + examen', salary: '$62,000', hours: '160 hrs', examEspanol: true, accentColor: '#f43f5e', barWidth: 'w-full' },
      { oficio: 'Cosmetología', slug: 'licencia-cosmetologia-florida', requirements: '1,200 hrs + examen', salary: '$35,000', hours: '1,200 hrs', examEspanol: true, accentColor: '#ec4899', barWidth: 'w-1/4' },
    ],
    comparisonRows: [
      { oficio: 'Electricista', horas: '4,000 hrs', costo: '$150', examEspanol: true },
      { oficio: 'HVAC', horas: '3,000 hrs', costo: '$200', examEspanol: false },
      { oficio: 'CDL Clase A', horas: '160 hrs (escuela)', costo: '$115', examEspanol: true },
      { oficio: 'Cosmetología', horas: '1,200 hrs', costo: '$200', examEspanol: true },
      { oficio: 'Plomero', horas: '4,000 hrs', costo: '$250', examEspanol: false },
    ],
    overview: 'Florida experimentó un crecimiento explosivo en los últimos años. El clima subtropical crea demanda constante para HVAC y plomería. El sur de Florida es uno de los mercados más activos para trabajadores hispanos.',
    keywords: ['licencias florida', 'empleos florida', 'trabajos construccion florida', 'dbpr florida'],
  },
  'new-york': {
    name: 'New York',
    code: 'NY',
    hispanicPercent: '19%',
    salaryPromedio: '$72,000',
    numOficios: 5,
    topCities: [
      { name: 'New York City', population: '8.4M' },
      { name: 'Buffalo', population: '278K' },
      { name: 'Rochester', population: '211K' },
      { name: 'Yonkers', population: '211K' },
      { name: 'Syracuse', population: '148K' },
    ],
    insight: {
      headline: 'Los Salarios Más Altos del Este',
      body: 'New York City paga algunos de los salarios más altos para electricistas y plomeros del país. Los requisitos son más estrictos — especialmente en NYC donde se requieren licencias de ciudad adicionales.',
      cta: 'Ver Licencias en New York',
      ctaHref: '/licencia-electricista-new-york',
    },
    reguladora: {
      nombre: 'NYC DOB / DOS NY',
      descripcion: 'New York tiene regulación estatal (DOS) y municipal (NYC DOB). Para muchos oficios se necesitan ambas licencias. El proceso es más burocrático pero los salarios compensan.',
      url: 'https://www.nyc.gov/site/buildings/index.page',
    },
    trades: [
      { oficio: 'Electricista', slug: 'licencia-electricista-new-york', requirements: 'Licencia de ciudad + estatal', salary: '$78,000', hours: '7,500 hrs', examEspanol: false, accentColor: '#3b82f6', barWidth: 'w-3/4' },
      { oficio: 'HVAC', slug: 'licencia-hvac-new-york', requirements: 'EPA 608 + NYC local', salary: '$65,000', hours: 'Varía', examEspanol: false, accentColor: '#f97316', barWidth: 'w-2/3' },
      { oficio: 'Plomero', slug: 'licencia-plomero-new-york', requirements: 'NYC DOB + examen', salary: '$82,000', hours: '5 años', examEspanol: false, accentColor: '#10b981', barWidth: 'w-4/5' },
      { oficio: 'CDL', slug: 'licencia-cdl-new-york', requirements: 'DMV + examen', salary: '$65,000', hours: '160 hrs', examEspanol: false, accentColor: '#f43f5e', barWidth: 'w-full' },
      { oficio: 'Cosmetología', slug: 'licencia-cosmetologia-new-york', requirements: '1,000 hrs + examen', salary: '$40,000', hours: '1,000 hrs', examEspanol: false, accentColor: '#ec4899', barWidth: 'w-1/4' },
    ],
    comparisonRows: [
      { oficio: 'Electricista', horas: '7,500 hrs', costo: 'Varía ciudad', examEspanol: false },
      { oficio: 'HVAC', horas: 'Varía', costo: 'Varía', examEspanol: false },
      { oficio: 'CDL Clase A', horas: '160 hrs (escuela)', costo: '$135', examEspanol: false },
      { oficio: 'Cosmetología', horas: '1,000 hrs', costo: '$40', examEspanol: false },
      { oficio: 'Plomero', horas: '5 años exp.', costo: 'Varía', examEspanol: false },
    ],
    overview: 'Nueva York tiene algunos de los requisitos más estrictos del país, especialmente en la ciudad de Nueva York. Los salarios son altos y la demanda constante. Requiere más planificación pero la inversión vale la pena.',
    keywords: ['licencias new york', 'nyc dob', 'empleos new york', 'construccion new york'],
  },
  arizona: {
    name: 'Arizona',
    code: 'AZ',
    hispanicPercent: '31%',
    salaryPromedio: '$58,000',
    numOficios: 3,
    topCities: [
      { name: 'Phoenix', population: '1.7M' },
      { name: 'Tucson', population: '545K' },
      { name: 'Mesa', population: '504K' },
      { name: 'Chandler', population: '279K' },
      { name: 'Scottsdale', population: '517K' },
    ],
    insight: {
      headline: 'El Estado de Mayor Crecimiento Poblacional',
      body: 'Arizona creció un 11% en la última década. Phoenix es una de las ciudades de construcción más activas del país. El clima desértico genera demanda constante para HVAC, con miles de instalaciones nuevas cada año.',
      cta: 'Ver Licencias en Arizona',
      ctaHref: '/licencia-electricista-arizona',
    },
    reguladora: {
      nombre: 'ROC Arizona',
      descripcion: 'El Registrar of Contractors (ROC) regula contratistas en Arizona, incluyendo electricistas y técnicos HVAC. El proceso de licencia es digital y relativamente ágil.',
      url: 'https://roc.az.gov/',
    },
    trades: [
      { oficio: 'Electricista', slug: 'licencia-electricista-arizona', requirements: 'ROC + examen', salary: '$60,000', hours: '8,000 hrs', examEspanol: false, accentColor: '#3b82f6', barWidth: 'w-3/4' },
      { oficio: 'HVAC', slug: 'licencia-hvac-arizona', requirements: 'ROC + EPA 608', salary: '$55,000', hours: '4 años', examEspanol: false, accentColor: '#f97316', barWidth: 'w-2/3' },
      { oficio: 'CDL', slug: 'licencia-cdl-arizona', requirements: 'MVD + Medical Card', salary: '$62,000', hours: '160 hrs', examEspanol: true, accentColor: '#f43f5e', barWidth: 'w-full' },
    ],
    comparisonRows: [
      { oficio: 'Electricista', horas: '8,000 hrs', costo: '$90', examEspanol: false },
      { oficio: 'HVAC', horas: '4 años exp.', costo: '$200', examEspanol: false },
      { oficio: 'CDL Clase A', horas: '160 hrs (escuela)', costo: '$95', examEspanol: true },
    ],
    overview: 'Arizona es uno de los estados de mayor crecimiento en EE.UU., con una industria de construcción en auge. El clima desértico crea alta demanda para HVAC. Phoenix y Tucson ofrecen muchas oportunidades para trabajadores hispanohablantes.',
    keywords: ['licencias arizona', 'empleos arizona', 'construccion phoenix', 'trabajos arizona'],
  },
}

interface Props {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const estado = ESTADOS_DATA[params.slug]
  if (!estado) return { title: 'Estado no encontrado' }
  return {
    title: `Licencias de Oficios en ${estado.name} 2026: Requisitos en Español | ChambaEnUSA`,
    description: `Guía completa para hispanos sobre licencias de electricista, CDL, cosmetología, HVAC y plomería en ${estado.name}. Requisitos, salarios ($${estado.salaryPromedio}/hr promedio) y escuelas bilingües.`,
    keywords: estado.keywords.join(', '),
    alternates: {
      canonical: `https://chambaenusa.com/estado/${params.slug}`,
    },
    openGraph: {
      title: `Licencias de Oficios en ${estado.name} — Guía en Español`,
      description: `Requisitos, salarios y escuelas bilingües para electricista, HVAC, CDL y más en ${estado.name}.`,
      url: `https://chambaenusa.com/estado/${params.slug}`,
      type: 'article',
    },
  }
}

export function generateStaticParams() {
  return Object.keys(ESTADOS_DATA).map((slug) => ({ slug }))
}

export default function EstadoPage({ params }: Props) {
  const estado = ESTADOS_DATA[params.slug]

  if (!estado) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Estado no encontrado</h1>
        <Link href="/" className="text-amber-500 hover:underline">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-6 pb-24 font-jakarta">
      {/* Breadcrumb */}
      <nav className="py-6 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 flex items-center gap-2">
        <Link href="/" className="hover:text-amber-500 transition-colors">Inicio</Link>
        <span>/</span>
        <span className="text-slate-900">{estado.name}</span>
      </nav>

      {/* Hero — editorial */}
      <header className="grid grid-cols-12 gap-6 py-8 md:py-12 mb-16">
        {/* Left */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-amber-500 inline-block" />
            Estado de {estado.name}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#131b2e] leading-none mb-8">
            Trabajar en{' '}
            <span className="text-amber-500">{estado.name}</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mb-8 leading-relaxed">
            {estado.overview}
          </p>
          {/* City chips */}
          <div className="flex flex-wrap gap-2">
            {estado.topCities.slice(0, 5).map((city) => (
              <span
                key={city.name}
                className="bg-slate-100 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-tight text-slate-700"
              >
                {city.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right — bento */}
        <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="bg-[#131b2e] p-6 rounded-xl flex flex-col justify-between aspect-square">
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <div className="text-4xl font-black text-white">{estado.hispanicPercent}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Hispano</div>
            </div>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl flex flex-col justify-between aspect-square">
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <div>
              <div className="text-xl font-black text-[#131b2e]">Ciudad #1</div>
              <div className="text-xl font-bold text-amber-500">{estado.topCities[0].name}</div>
            </div>
          </div>
          <div className="bg-amber-100 p-6 rounded-xl flex flex-col justify-between aspect-square">
            <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <div className="text-4xl font-black text-amber-800">{estado.numOficios}</div>
              <div className="text-[10px] uppercase tracking-widest text-amber-700 font-bold">Oficios Disponibles</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl flex flex-col justify-between aspect-square shadow-sm">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div className="text-2xl font-black text-[#131b2e]">{estado.salaryPromedio}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Salario Promedio</div>
            </div>
          </div>
        </div>
      </header>

      {/* Insight Banner */}
      <section className="mb-20">
        <div className="bg-[#131b2e] text-white p-8 md:p-12 rounded-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="relative z-10 flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 mb-3">
              {estado.insight.headline}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">{estado.insight.body}</p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              href={estado.insight.ctaHref}
              className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all text-sm"
            >
              {estado.insight.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Trade Cards Grid */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Especialidades técnicas</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#131b2e]">
              Oficios con Alta Demanda en {estado.name}
            </h2>
          </div>
        </div>
        <div className={`grid grid-cols-1 gap-6 ${estado.trades.length >= 4 ? 'md:grid-cols-3 lg:grid-cols-5' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
          {estado.trades.map((trade) => (
            <Link
              key={trade.slug}
              href={`/${trade.slug}`}
              className="group bg-slate-900 p-6 rounded-xl border-t-4 hover:-translate-y-1 transition-transform block"
              style={{ borderTopColor: trade.accentColor }}
            >
              <div className="w-12 h-12 rounded flex items-center justify-center mb-6" style={{ backgroundColor: trade.accentColor + '1a' }}>
                <svg className="w-6 h-6" style={{ color: trade.accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <h4 className="text-white text-lg font-bold mb-4">{trade.oficio}</h4>
              <div className="space-y-3 mb-5">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Salario Anual</div>
                  <div className="text-base text-white font-bold font-mono">{trade.salary}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Requisito</div>
                  <div className="text-sm text-slate-300 font-medium">{trade.hours}</div>
                </div>
              </div>
              <div className="h-0.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full ${trade.barWidth}`} style={{ backgroundColor: trade.accentColor }} />
              </div>
              {trade.examEspanol && (
                <div className="mt-3 text-[10px] font-black text-green-400 uppercase tracking-wider">
                  ✓ Examen en Español
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Regulatory Card + Comparison Table */}
      <section className="grid grid-cols-12 gap-6 mb-16">
        {/* Regulatory card */}
        {estado.reguladora && (
          <div className="col-span-12 lg:col-span-4 bg-white p-8 rounded-xl shadow-sm self-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-[#131b2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Agencia Reguladora</p>
                <h4 className="font-extrabold text-[#131b2e]">{estado.reguladora.nombre}</h4>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-6">{estado.reguladora.descripcion}</p>
            <div className="space-y-2">
              {estado.reguladora.hubInterno && (
                <Link
                  href={estado.reguladora.hubInterno}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-black uppercase tracking-wide px-3 py-2 rounded-lg transition-colors w-full justify-center"
                >
                  Guía completa en ChambaEnUSA
                </Link>
              )}
              <a
                href={estado.reguladora.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-amber-600 transition-colors"
              >
                Sitio Oficial
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Comparison table */}
        <div className={`col-span-12 ${estado.reguladora ? 'lg:col-span-8' : ''} bg-white rounded-xl shadow-sm overflow-hidden`}>
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="text-lg font-extrabold text-[#131b2e]">Requisitos Rápidos por Oficio</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-5 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Oficio</th>
                  <th className="px-5 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Horas</th>
                  <th className="px-5 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Costo Licencia</th>
                  <th className="px-5 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Español</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {estado.comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-[#131b2e] text-sm">{row.oficio}</td>
                    <td className="px-5 py-4 text-sm text-slate-600">{row.horas}</td>
                    <td className="px-5 py-4 text-sm font-mono font-bold text-slate-700">{row.costo}</td>
                    <td className="px-5 py-4">
                      {row.examEspanol ? (
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
      </section>

      {/* Lead Capture */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="bg-[#131b2e] rounded-xl px-8 py-10 text-center">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Guía gratis · Sin spam</p>
          <h3 className="text-2xl font-extrabold text-white mb-2">
            Recibe las guías de {estado.name} en tu correo
          </h3>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Requisitos actualizados, costos y escuelas bilingües para los oficios más demandados en {estado.name}.
          </p>
          <div className="flex justify-center">
            <SubscribeForm estado={params.slug} variant="dark" />
          </div>
        </div>
      </section>
    </main>
  )
}
