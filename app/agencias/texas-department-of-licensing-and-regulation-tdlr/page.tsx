import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TDLR Texas en Español 2026: Qué es, Licencias y Cómo Tramitarlas',
  description:
    'Guía completa del TDLR en español. Qué es el Texas Department of Licensing and Regulation, qué licencias regula para hispanos y cómo tramitarlas paso a paso.',
  alternates: {
    canonical: 'https://chambaenusa.com/agencias/texas-department-of-licensing-and-regulation-tdlr/',
  },
  openGraph: {
    title: 'TDLR Texas en Español: Guía para Trabajadores Hispanos',
    description:
      'Si quieres trabajar en Texas en electricidad, HVAC, cosmetología o barbería, vas a pasar por TDLR. Aquí te explicamos todo en español.',
    type: 'article',
  },
}

const licenciasDestacadas = [
  {
    nombre: 'Electricistas',
    descripcion: 'Regulación de aprendices, oficiales y contratistas maestros. Vital para proyectos de construcción y mantenimiento.',
    href: '/licencia-electricista-texas',
    color: '#F59E0B',
    tags: ['Residencial', 'Comercial'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    nombre: 'HVAC / Aire Acondicionado',
    descripcion: 'Técnicos de Aire Acondicionado y Refrigeración. Incluye certificaciones para manejo de refrigerantes.',
    href: '/licencia-hvac-texas',
    color: '#14B8A6',
    tags: ['Clase A', 'Clase B'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    nombre: 'Cosmetología',
    descripcion: 'Licencias para especialistas en estética, manicura y operadores de salón. Requisitos estrictos de higiene.',
    href: '/licencia-cosmetologia-texas',
    color: '#EC4899',
    tags: ['Estilista', 'Manicura'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
]

const otrasProfesiones = [
  { label: 'Barbería', emoji: '✂️' },
  { label: 'Masaje', emoji: '🖐️' },
  { label: 'Laser Hair', emoji: '✨' },
  { label: 'Elevadores', emoji: '🏗️' },
  { label: 'Calderas', emoji: '🔥' },
  { label: 'Moho', emoji: '🧹' },
  { label: 'Remolque', emoji: '🚗' },
  { label: 'Pozos de Agua', emoji: '💧' },
  { label: 'Educación Vial', emoji: '🛣️' },
  { label: 'Autopartes', emoji: '⚙️' },
]

const pasos = [
  {
    num: '1',
    titulo: 'Identificar tu licencia exacta',
    desc: 'Determine exactamente qué tipo de licencia técnica o comercial requiere su oficio específico dentro del catálogo del TDLR.',
    align: 'left',
  },
  {
    num: '2',
    titulo: 'Revisar requisitos, costo y vigencia',
    desc: 'Verifique las horas de capacitación, experiencia laboral comprobada y si necesita un patrocinador (Master) para su aplicación.',
    align: 'right',
  },
  {
    num: '3',
    titulo: 'Aplicar en línea',
    desc: 'Utilice el portal oficial del TDLR para subir sus documentos y realizar el pago de las tarifas administrativas correspondientes.',
    align: 'left',
  },
  {
    num: '4',
    titulo: 'Cumplir requisitos adicionales',
    desc: 'Dependiendo de la licencia, podría requerirse un examen teórico-práctico o una revisión de antecedentes penales.',
    align: 'right',
  },
  {
    num: '5',
    titulo: 'Renovar antes de que venza',
    desc: 'La mayoría de las licencias requieren educación continua (CEU) periódica para mantenerse activas y vigentes.',
    align: 'left',
  },
]

const faqs = [
  {
    q: '¿TDLR regula todas las licencias de trabajo en Texas?',
    a: 'No. TDLR regula muchos oficios y profesiones, pero no todos. Por ejemplo, la licencia de plomero en Texas la maneja el Texas State Board of Plumbing Examiners (TSBPE), no TDLR. Siempre confirma cuál agencia regula tu profesión.',
  },
  {
    q: '¿Puedo aplicar para una licencia TDLR con ITIN en vez de Seguro Social?',
    a: 'Depende del tipo de licencia. Algunas permiten ITIN, otras requieren SSN. Lo más seguro es llamar directamente a TDLR al (800) 803-9202 y preguntar por tu licencia específica antes de aplicar.',
  },
  {
    q: '¿El portal de TDLR está disponible en español?',
    a: 'El portal oficial de TDLR está principalmente en inglés. Sin embargo, su línea telefónica tiene asistencia disponible. Si necesitas ayuda para navegar el proceso en español, en ChambaEnUSA tenemos guías paso a paso para las licencias más buscadas.',
  },
  {
    q: '¿Cómo verifico si mi licencia TDLR está activa?',
    a: 'En el portal oficial de TDLR hay una herramienta de búsqueda de licencias disponible al público. Puedes buscar por nombre, número de licencia o nombre del negocio.',
  },
  {
    q: '¿Qué pasa si trabajo sin licencia en una profesión regulada por TDLR?',
    a: 'TDLR tiene facultades de enforcement. Si alguien realiza trabajo regulado sin licencia activa, TDLR puede intervenir, aplicar multas o emprender acciones legales. No vale la pena el riesgo — obtener la licencia es el camino correcto.',
  },
  {
    q: '¿Cuánto tarda TDLR en aprobar una licencia?',
    a: 'Depende del tipo de licencia. Algunas se aprueban en días si todo está completo; otras, que requieren examen o verificación de antecedentes, pueden tomar semanas. La clave es tener todos los documentos listos antes de aplicar.',
  },
]

export default function TDLRPage() {
  return (
    <article className="font-jakarta">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-4">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
          <Link href="/" className="hover:text-amber-500 transition-colors">Inicio</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Agencias</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-amber-500 font-bold">TDLR Texas</span>
        </nav>
      </div>

      {/* Hero */}
      <header
        className="relative overflow-hidden py-24 px-6 lg:px-8 mb-12"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Agencia Oficial · Texas
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl tracking-tight">
            TDLR: Departamento de Licencias y{' '}
            <span className="text-amber-400">Regulación de Texas</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            La entidad estatal responsable de supervisar más de 30 profesiones, industrias y
            servicios, garantizando estándares de seguridad y profesionalismo para todos los
            trabajadores y consumidores en Texas.
          </p>
        </div>
      </header>

      {/* Qué es TDLR — 7/5 grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12 mb-20 items-start">
        <div className="md:col-span-7 space-y-5">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Autoridad y Función Reguladora</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong>TDLR</strong> son las siglas de{' '}
              <strong>Texas Department of Licensing and Regulation</strong> — el Departamento de
              Licenciamiento y Regulación de Texas. Es la agencia estatal que controla quién
              puede ejercer legalmente docenas de oficios y profesiones en todo el estado.
            </p>
            <p>
              Su misión principal es proteger al público: asegurarse de que si alguien te cobra
              por hacer trabajo eléctrico, instalarte el AC o darte servicio de cosmetología,
              esa persona sí sabe lo que está haciendo y tiene la licencia para probarlo.
            </p>
            <p>
              Además de emitir licencias, el TDLR tiene el poder de investigar quejas de
              consumidores, realizar auditorías en lugares de trabajo y sancionar a quienes
              operen sin los permisos adecuados.
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="border-l-4 border-amber-500 bg-amber-50 p-8 rounded-r-xl">
            <div className="flex items-start gap-4">
              <svg className="w-7 h-7 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-bold text-amber-800 mb-2">Nota importante</h4>
                <p className="text-amber-900 text-sm italic leading-relaxed">
                  "TDLR no regula todas las profesiones en Texas. Por ejemplo, la plomería es
                  manejada independientemente por la Junta Estatal de Examinadores de Plomería
                  de Texas (TSBPE)."
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
              <span className="text-amber-500 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Alta Demanda</span>
              <h2 className="text-3xl font-extrabold text-gray-900">Licencias más Solicitadas</h2>
            </div>
            <Link
              href="/oficio/electricista"
              className="text-amber-500 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group"
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
                <h3 className="text-xl font-bold mb-4 group-hover:text-amber-400 transition-colors">
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

      {/* Otras profesiones */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Otras Profesiones Bajo su Jurisdicción
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {otrasProfesiones.map((item) => (
            <div
              key={item.label}
              className="bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl flex items-center gap-3 hover:bg-amber-50 hover:border-amber-200 transition-colors cursor-default group"
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-amber-700">
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
            <p className="text-slate-400">Cinco pasos clave para obtener y mantener su certificación oficial.</p>
          </div>
          <div
            className="space-y-12 relative
              before:content-[''] before:absolute before:left-[19px] md:before:left-1/2
              before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-700"
          >
            {pasos.map((paso) => (
              <div key={paso.num} className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div
                  className="z-10 w-10 h-10 rounded-full bg-amber-500 text-slate-900 flex items-center
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
              <span className="text-amber-500 text-xs font-bold uppercase tracking-widest block mb-4">
                Agencia Reguladora · Texas
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-3 leading-tight">
                Texas Department of Licensing and Regulation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fundado para proteger al público texano regulando las profesiones que afectan
                la salud, seguridad y bienestar de los ciudadanos.
              </p>
            </div>
            <a
              href="https://www.tdlr.texas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm hover:text-amber-300 transition-colors mt-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              tdlr.texas.gov
            </a>
          </div>
          {/* Panel derecho — datos */}
          <div className="md:w-3/5 p-12">
            <h2 className="text-2xl font-extrabold mb-8 text-gray-900">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Línea Gratuita</p>
                  <a href="tel:8008039202" className="text-lg font-bold text-gray-900 hover:text-amber-500 transition-colors">
                    (800) 803-9202
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Teléfono Local</p>
                  <a href="tel:5124636599" className="text-lg font-bold text-gray-900 hover:text-amber-500 transition-colors">
                    (512) 463-6599
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Horario de Atención</p>
                  <p className="text-base font-bold text-gray-900">Lun–Vie, 8:00 AM – 5:00 PM CT</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Dirección Principal</p>
                  <p className="text-base font-bold text-gray-900">920 Colorado St, Austin, TX 78701</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Verificar Licencia</p>
                  <a
                    href="https://www.tdlr.texas.gov/LicenseSearch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-amber-500 hover:underline"
                  >
                    tdlr.texas.gov/LicenseSearch
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
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900 group-open:bg-amber-500 group-open:text-white transition-colors">
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
          <span className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">
            Comienza hoy mismo
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            ¿Listo para profesionalizarte en Texas?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mb-12 leading-relaxed">
            Accede a nuestras guías detalladas paso a paso para las profesiones más demandadas
            bajo la regulación del TDLR.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/licencia-electricista-texas"
              className="flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 font-bold text-base hover:bg-amber-400 transition-all active:scale-95 shadow-lg shadow-amber-500/20 rounded"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Guía de Electricista
            </Link>
            <Link
              href="/licencia-hvac-texas"
              className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 font-bold text-base hover:bg-white/20 transition-all active:scale-95 rounded"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Guía de HVAC
            </Link>
            <Link
              href="/licencia-cosmetologia-texas"
              className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 font-bold text-base hover:bg-white/20 transition-all active:scale-95 rounded"
            >
              💅 Cosmetología Texas
            </Link>
          </div>
        </div>
      </section>

      {/* Pie de fuente */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 border-t border-gray-200 text-center">
        <p className="text-gray-400 text-xs uppercase tracking-widest leading-loose">
          Información basada en el sitio oficial del Texas Department of Licensing and Regulation (
          <a href="https://www.tdlr.texas.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 underline">
            tdlr.texas.gov
          </a>
          ). Actualizado abril 2026.
          <br />
          <span className="text-amber-500 font-bold">ChambaEnUSA</span> · El Progreso a través del Legado.
        </p>
      </div>

    </article>
  )
}
