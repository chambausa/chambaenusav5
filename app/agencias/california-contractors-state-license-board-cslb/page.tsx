import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CSLB California en Español 2026: Licencias de Contratista Paso a Paso',
  description:
    'Guía completa del CSLB en español. Qué es el Contractors State License Board de California, qué licencias regula (C-10, C-36, C-20) y cómo obtener la tuya paso a paso.',
  alternates: {
    canonical: 'https://chambaenusa.com/agencias/california-contractors-state-license-board-cslb/',
  },
  openGraph: {
    title: 'CSLB California en Español: Guía para Contratistas Hispanos',
    description:
      'Si quieres tener tu propio negocio de electricidad, plomería o HVAC en California, necesitas licencia del CSLB. Aquí te explicamos todo en español.',
    type: 'article',
  },
}

const licenciasDestacadas = [
  {
    nombre: 'Electricista C-10',
    descripcion: 'Electrical Contractor. Para tener tu propio negocio de electricidad en California. Requiere 4 años de experiencia y examen.',
    href: '/licencia-electricista-california',
    color: '#3B82F6',
    tags: ['C-10 Electrical', 'Contratista'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    nombre: 'Plomero C-36',
    descripcion: 'Plumbing Contractor. La única forma legal de hacer plomería independiente en California. Alta demanda en todo el estado.',
    href: '/licencia-plomero-california',
    color: '#10B981',
    tags: ['C-36 Plumbing', 'Contratista'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    nombre: 'HVAC C-20',
    descripcion: 'Warm Air Heating, Ventilating and Air Conditioning. Para instalar y reparar AC en California como contratista independiente.',
    href: '/licencia-hvac-california',
    color: '#F97316',
    tags: ['C-20 HVAC', 'Contratista'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

const otrasClasificaciones = [
  { label: 'B – General Building', emoji: '🏗️' },
  { label: 'C-8 Concrete', emoji: '🧱' },
  { label: 'C-10 Electrical', emoji: '⚡' },
  { label: 'C-20 HVAC', emoji: '❄️' },
  { label: 'C-27 Landscaping', emoji: '🌿' },
  { label: 'C-33 Painting', emoji: '🎨' },
  { label: 'C-35 Plastering', emoji: '🪣' },
  { label: 'C-36 Plumbing', emoji: '🔧' },
  { label: 'C-39 Roofing', emoji: '🏠' },
  { label: 'C-43 Sheet Metal', emoji: '🔩' },
]

const pasos = [
  {
    num: '1',
    titulo: 'Acumula 4 años de experiencia journey-level',
    desc: 'El CSLB exige 4 años (o 3 si tienes título técnico relacionado) de experiencia como journey-level en tu oficio. Esta experiencia debe ser documentable: empleadores, fechas, tipo de trabajo.',
    align: 'left',
  },
  {
    num: '2',
    titulo: 'Abre tu aplicación en BreEZe',
    desc: 'El portal oficial del CSLB es BreEZe (breeze.ca.gov). Crea tu cuenta, llena la aplicación del tipo de licencia que quieres y paga la tarifa de aplicación (~$300–450).',
    align: 'right',
  },
  {
    num: '3',
    titulo: 'Huellas dactilares y antecedentes',
    desc: 'El CSLB requiere fingerprinting a través de Live Scan para verificar antecedentes penales. Es estándar en California para licencias profesionales.',
    align: 'left',
  },
  {
    num: '4',
    titulo: 'Pasa los exámenes escritos',
    desc: 'La mayoría de licencias requieren dos exámenes: Law & Business (disponible en español) y un examen técnico de tu especialidad. Ambos son vía computadora.',
    align: 'right',
  },
  {
    num: '5',
    titulo: 'Cumple capital, fianza y seguro',
    desc: 'El CSLB exige demostrar $15,000 en capital o una contractor bond de $15,000. También Workers Compensation si tienes empleados.',
    align: 'left',
  },
  {
    num: '6',
    titulo: 'Recibe tu licencia y comienza a operar',
    desc: 'Una vez aprobado, recibes tu número de licencia del CSLB. Debes incluirlo en todos tus contratos, vehículos y publicidad. Se renueva cada 2 años.',
    align: 'right',
  },
]

const faqs = [
  {
    q: '¿Necesito licencia del CSLB para trabajar como empleado en California?',
    a: 'No. Si trabajas como empleado (W-2) bajo una empresa ya licenciada, no necesitas licencia propia del CSLB. La licencia del CSLB es para contratistas independientes — quienes quieren tener su propio negocio, firmar contratos y facturar directamente al cliente.',
  },
  {
    q: '¿Puedo aplicar para licencia CSLB con ITIN o sin estatus legal?',
    a: 'California permite obtener licencias de contratista independientemente del estatus migratorio. El CSLB no está asociado con USCIS. Sin embargo, para abrir una cuenta bancaria de negocio necesitarás ITIN o SSN. Consulta con un contador sobre tu situación específica.',
  },
  {
    q: '¿Cuánto cuesta obtener una licencia del CSLB?',
    a: 'Costos aproximados: aplicación inicial (~$300–450), exámenes (~$60–100 cada uno), Live Scan fingerprinting (~$50–100), y la contractor bond de $15,000 (costo anual ~$150–300). En total, presupuesta entre $600–$1,000.',
  },
  {
    q: '¿El examen del CSLB está disponible en español?',
    a: 'El examen de Law & Business (Ley y Negocios) está disponible en español. Los exámenes técnicos de cada especialidad (C-10, C-36, etc.) están principalmente en inglés.',
  },
  {
    q: '¿Cuánto tiempo tarda el proceso completo?',
    a: 'El proceso completo suele tomar entre 3 y 6 meses. La mayor parte del tiempo se va en: recopilar documentación de experiencia, esperar aprobación (4–8 semanas), programar y pasar los exámenes, y procesar los requisitos de fianza y seguro.',
  },
  {
    q: '¿Qué pasa si trabajo como contratista en California sin licencia del CSLB?',
    a: 'Trabajar como contratista sin licencia en California cuando el proyecto supera $500 es un delito (misdemeanor). El CSLB tiene investigadores que realizan operativos. Sin licencia no puedes cobrar legalmente en corte si un cliente no paga.',
  },
  {
    q: '¿La licencia C-10 me permite hacer cualquier trabajo eléctrico?',
    a: 'La C-10 te permite hacer instalaciones eléctricas completas. Sin embargo, la C-7 (Low Voltage Systems) es una clasificación separada. Si quieres hacer ambas, necesitas ambas licencias o la B (General Building Contractor).',
  },
]

export default function CSLBPage() {
  return (
    <article className="font-jakarta">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-4">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
          <Link href="/" className="hover:text-blue-500 transition-colors">Inicio</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Agencias</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-blue-500 font-bold">CSLB California</span>
        </nav>
      </div>

      {/* Hero */}
      <header
        className="relative overflow-hidden py-24 px-6 lg:px-8 mb-12"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Agencia Oficial · California
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl tracking-tight">
            CSLB: Junta de Licencias de{' '}
            <span className="text-blue-400">Contratistas de California</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Si quieres tener tu propio negocio de electricidad, plomería o HVAC en California,
            necesitas pasar por el CSLB. Aquí te explicamos qué es, qué regula y cómo hacer
            tu trámite sin perderte.
          </p>
        </div>
      </header>

      {/* Qué es CSLB — 7/5 grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12 mb-20 items-start">
        <div className="md:col-span-7 space-y-5">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Autoridad y Función Reguladora</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong>CSLB</strong> son las siglas de{' '}
              <strong>Contractors State License Board</strong> — la Junta Estatal de Licencias
              de Contratistas de California. Es la agencia del estado que regula a todos los
              contratistas de construcción, electricidad, plomería, HVAC y docenas de
              especialidades más.
            </p>
            <p>
              Su función principal es asegurarse de que cualquier persona o empresa que cobre
              por hacer trabajo de construcción o instalaciones en California tenga la
              preparación técnica, el seguro y la responsabilidad legal para hacerlo.
              Protege tanto al trabajador como al cliente.
            </p>
            <p>
              El CSLB es especialmente importante para la comunidad hispana porque es el paso
              obligatorio para dejar de trabajar para otros y empezar a construir tu propio
              negocio en California.
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="border-l-4 border-blue-500 bg-blue-50 p-8 rounded-r-xl">
            <div className="flex items-start gap-4">
              <svg className="w-7 h-7 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-bold text-blue-800 mb-2">Nota importante</h4>
                <p className="text-blue-900 text-sm italic leading-relaxed">
                  "El CSLB regula <em>contratistas</em>, no empleados. Si trabajas bajo una
                  empresa ya licenciada, no necesitas tu propia licencia del CSLB para ejercer
                  tu oficio. La licencia es para quien quiere operar de forma independiente."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licencias destacadas */}
      <section className="bg-gray-50 py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Alta Demanda</span>
              <h2 className="text-3xl font-extrabold text-gray-900">Licencias más Solicitadas</h2>
            </div>
            <Link
              href="/oficio/electricista"
              className="text-blue-500 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group"
            >
              Ver todos los oficios
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {licenciasDestacadas.map((lic) => (
              <Link
                key={lic.nombre}
                href={lic.href}
                className="group bg-slate-900 text-white p-8 border-l-4 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
                style={{ borderLeftColor: lic.color }}
              >
                <div className="mb-6" style={{ color: lic.color }}>{lic.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {lic.nombre}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{lic.descripcion}</p>
                <div className="flex flex-wrap gap-2">
                  {lic.tags.map((tag) => (
                    <span key={tag} className="bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase tracking-tighter text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Otras clasificaciones */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Otras Clasificaciones que Regula el CSLB
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {otrasClasificaciones.map((item) => (
            <div
              key={item.label}
              className="bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl flex items-center gap-3 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default group"
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pasos — Timeline alternado */}
      <section className="bg-slate-900 py-24 px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Proceso General de Aplicación</h2>
            <p className="text-slate-400">Seis pasos clave para obtener tu licencia de contratista en California.</p>
          </div>
          <div
            className="space-y-12 relative
              before:content-[''] before:absolute before:left-[19px] md:before:left-1/2
              before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-700"
          >
            {pasos.map((paso) => (
              <div key={paso.num} className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div
                  className="z-10 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center
                    justify-center font-bold text-lg md:absolute md:left-1/2 md:-translate-x-1/2
                    shadow-[0_0_0_8px_rgb(15,23,42)] flex-shrink-0"
                >
                  {paso.num}
                </div>
                {paso.align === 'left' ? (
                  <div className="md:w-1/2 md:pr-16 md:text-right pl-14 md:pl-0">
                    <h4 className="text-xl font-bold mb-2">{paso.titulo}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{paso.desc}</p>
                  </div>
                ) : (
                  <div className="md:w-1/2 md:ml-auto md:pl-16 pl-14">
                    <h4 className="text-xl font-bold mb-2">{paso.titulo}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{paso.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Panel izquierdo — branding */}
          <div
            className="md:w-2/5 p-12 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, #131b2e 0%, #1e293b 100%)' }}
          >
            <div>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest block mb-4">
                Agencia Reguladora · California
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-3 leading-tight">
                Contractors State License Board
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fundado para proteger a los consumidores de California regulando a los
                contratistas y garantizando estándares de calidad en la industria de
                la construcción.
              </p>
            </div>
            <div className="space-y-3 mt-8">
              <a
                href="https://www.cslb.ca.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                cslb.ca.gov
              </a>
              <a
                href="https://www.breeze.ca.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Portal BreEZe (solicitudes)
              </a>
            </div>
          </div>
          {/* Panel derecho — datos */}
          <div className="md:w-3/5 p-12">
            <h2 className="text-2xl font-extrabold mb-8 text-gray-900">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Línea Principal</p>
                  <a href="tel:8003212752" className="text-lg font-bold text-gray-900 hover:text-blue-500 transition-colors">
                    (800) 321-2752
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Horario de Atención</p>
                  <p className="text-base font-bold text-gray-900">Lun–Vie, 8:00 AM – 5:00 PM PT</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Sede Principal</p>
                  <p className="text-base font-bold text-gray-900">9821 Business Park Dr, Sacramento, CA 95827</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Verificar Licencia</p>
                  <a
                    href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-blue-500 hover:underline"
                  >
                    cslb.ca.gov/verificar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-100 py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900 group-open:bg-blue-500 group-open:text-white transition-colors">
                  {faq.q}
                  <svg
                    className="w-5 h-5 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 border-t border-gray-100 text-gray-600 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="bg-[#131b2e] p-12 md:p-20 rounded-2xl flex flex-col items-center text-center">
          <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">
            Comienza hoy mismo
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            ¿Listo para tu licencia de contratista en California?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mb-12 leading-relaxed">
            Elige tu especialidad y te damos la guía completa en español con requisitos,
            costos, el proceso del CSLB y cómo prepararte para los exámenes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/licencia-electricista-california"
              className="flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 font-bold text-base hover:bg-blue-400 transition-all active:scale-95 shadow-lg shadow-blue-500/20 rounded"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Electricista C-10
            </Link>
            <Link
              href="/licencia-plomero-california"
              className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 font-bold text-base hover:bg-white/20 transition-all active:scale-95 rounded"
            >
              🔧 Plomero C-36
            </Link>
            <Link
              href="/licencia-hvac-california"
              className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 font-bold text-base hover:bg-white/20 transition-all active:scale-95 rounded"
            >
              ❄️ HVAC C-20
            </Link>
          </div>
        </div>
      </section>

      {/* Pie de fuente */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 border-t border-gray-200 text-center">
        <p className="text-gray-400 text-xs uppercase tracking-widest leading-loose">
          Información basada en el sitio oficial del Contractors State License Board de California (
          <a href="https://www.cslb.ca.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 underline">
            cslb.ca.gov
          </a>
          ). Actualizado abril 2026.
          <br />
          <span className="text-blue-400 font-bold">ChambaEnUSA</span> · El Progreso a través del Legado.
        </p>
      </div>

    </article>
  )
}
