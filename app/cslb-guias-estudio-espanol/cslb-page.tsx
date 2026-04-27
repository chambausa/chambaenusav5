import { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'CSLB en espanol: guia de estudio para contratistas en California',
  description:
    'Que es la CSLB, como obtener tu licencia de contratista en California, clasificaciones, examenes y guias de estudio en espanol.',
  alternates: { canonical: 'https://chambaenusa.com/cslb-guias-estudio-espanol' },
  openGraph: {
    title: 'CSLB en espanol: licencia de contratista en California',
    description:
      'Guia en espanol sobre la Contractors State License Board: clasificaciones, requisitos, examen y recursos de estudio para hispanohablantes.',
    url: 'https://chambaenusa.com/cslb-guias-estudio-espanol',
    type: 'article',
  },
}

const quickFacts = [
  { label: 'Agencia', value: 'Contractors State License Board (CSLB)' },
  { label: 'Estado', value: 'California' },
  { label: 'Base legal', value: 'Business and Professions Code, Sec. 7000' },
  { label: 'Vigencia', value: '2 años, renovable' },
]

const whoNeedsIt = [
  'Cualquier persona o empresa que realice trabajos de construccion, alteracion, mejora, reparacion o demolicion en California con un valor de contrato de $500 o mas (mano de obra y materiales combinados).',
  'Contratistas generales y especializados que quieran operar legalmente en California bajo su propio nombre o empresa.',
  'Subcontratistas que trabajan directamente para el dueno del proyecto o para un contratista general con licencia.',
]

const whoMayNotNeedIt = [
  'No sustituye permisos municipales o de condado que el proyecto especifico pueda requerir.',
  'No es equivalente a una certificacion de oficio como EPA 608 o licencia HVAC estatal.',
  'Un trabajador empleado (W-2) de un contratista con licencia generalmente no necesita su propia licencia CSLB para ese trabajo, aunque las reglas varian.',
]

const licenseTypes = [
  {
    title: 'Clase A',
    body: 'Contratista General de Ingenieria. Para proyectos de infraestructura como carreteras, presas, obras civiles y estructuras especializadas.',
  },
  {
    title: 'Clase B',
    body: 'Contratista General de Construccion. La mas comun: permite coordinar multiples oficios en construccion de edificios residenciales y comerciales.',
  },
  {
    title: 'Clase C',
    body: 'Contratistas Especializados. Mas de 40 clasificaciones: electricidad (C-10), plomeria (C-36), HVAC (C-20), pintura (C-33), techado (C-39), entre otras.',
  },
]

const notThis = [
  'No es una licencia de empleado o trabajador de construccion.',
  'No garantiza permisos de construccion; esos los emite la ciudad o condado.',
  'No es un certificado de oficio tecnico (como journeyman o apprentice).',
  'Tener licencia CSLB no significa automaticamente que puedes hacer cualquier tipo de trabajo: la clasificacion importa.',
]

const studySteps = [
  'Determina que clasificacion necesitas segun el tipo de trabajo que quieres realizar (Clase A, B o C especifica).',
  'Verifica los requisitos de experiencia: generalmente 4 anos de experiencia journey-level en el oficio dentro de los ultimos 10 anos.',
  'Solicita tu aplicacion en el sitio oficial de CSLB y paga la tarifa correspondiente; CSLB te enviara la autorizacion para agendar examen.',
  'Consigue el manual de estudio oficial de CSLB (Study Guide for the California Contractor License Exam) y complementa con guias en espanol de proveedores aprobados.',
  'Practica con examenes de practica: el examen de leyes y negocios (Law and Business exam) es requerido para todas las clasificaciones.',
  'Agenda tu examen con PSI Exams, el proveedor oficial de CSLB, y confirma disponibilidad en espanol si la necesitas.',
  'Una vez aprobado, completa los requisitos de fianza (bond de $25,000) y seguro de compensacion de trabajadores antes de activar tu licencia.',
]

const officialSources = [
  {
    label: 'CSLB sitio oficial',
    href: 'https://www.cslb.ca.gov',
    note: 'Portal principal con verificacion de licencias, formularios y noticias del programa.',
  },
  {
    label: 'Aplicar para licencia CSLB',
    href: 'https://www.cslb.ca.gov/Contractors/Applicants/',
    note: 'Informacion oficial sobre el proceso de aplicacion, requisitos y tarifas.',
  },
  {
    label: 'Clasificaciones de licencia',
    href: 'https://www.cslb.ca.gov/Contractors/Applicants/License_Classifications/',
    note: 'Lista completa de todas las clasificaciones disponibles (Clase A, B y C).',
  },
  {
    label: 'Verificar licencia de contratista',
    href: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx',
    note: 'Herramienta publica para verificar si un contratista tiene licencia activa en California.',
  },
]

const internalLinks = [
  {
    label: 'Licencia HVAC California',
    href: '/licencia-hvac-california',
    note: 'La clasificacion C-20 de CSLB es la licencia de contratista HVAC en California.',
  },
  {
    label: 'EPA 608 en espanol',
    href: '/epa-608',
    note: 'Certificacion federal requerida para tecnicos que manejan refrigerantes, complementaria a CSLB C-20.',
  },
  {
    label: 'Licencia de electricista California',
    href: '/licencia-electricista-california',
    note: 'La clasificacion C-10 cubre trabajo electrico de contratista; los electricistas empleados tienen reglas distintas.',
  },
  {
    label: 'Licencia de plomero California',
    href: '/licencia-plomero-california',
    note: 'La clasificacion C-36 cubre plomeria; revisa requisitos locales adicionales.',
  },
  {
    label: 'Licencia de contratista general Texas',
    href: '/licencia-contratista-texas',
    note: 'Texas no tiene un sistema estatal centralizado como CSLB; las reglas varian por ciudad.',
  },
]

const faqs = [
  {
    q: 'Que es la CSLB?',
    a: 'La Contractors State License Board es la agencia del estado de California que regula a los contratistas de construccion y obras. Opera bajo el Departamento de Asuntos del Consumidor y administra el proceso de licenciamiento, renovacion y disciplina de contratistas.',
  },
  {
    q: 'Cuanto cuesta sacar la licencia CSLB?',
    a: 'Las tarifas cambian periodicamente. La aplicacion inicial, los examenes y la emision de licencia tienen costos separados. Consulta la pagina oficial de CSLB para las tarifas actualizadas antes de iniciar el proceso.',
  },
  {
    q: 'El examen CSLB esta disponible en espanol?',
    a: 'PSI Exams, el proveedor oficial, puede ofrecer el examen en espanol en ciertas ubicaciones. Debes solicitarlo al momento de agendar tu cita; no es automatico. Verifica disponibilidad directamente con PSI antes de pagar.',
  },
  {
    q: 'Cuanta experiencia necesito para aplicar?',
    a: 'Generalmente se requieren 4 anos de experiencia journey-level en el oficio correspondiente dentro de los ultimos 10 anos. La CSLB acepta combinaciones de experiencia y educacion formal en algunos casos.',
  },
  {
    q: 'Puedo trabajar mientras tramito mi licencia?',
    a: 'No. En California es ilegal contratar trabajos de construccion por $500 o mas sin licencia CSLB activa. Las multas y consecuencias legales son significativas. Si eres empleado de un contratista con licencia, eso es diferente.',
  },
  {
    q: 'Que es el Law and Business exam?',
    a: 'Es el examen de leyes y negocios que todas las clasificaciones deben aprobar. Cubre temas como el codigo de construccion de California, contratos, seguros, impuestos, seguridad laboral y practicas comerciales de un contratista.',
  },
  {
    q: 'Que diferencia hay entre Clase B y una clasificacion C?',
    a: 'La Clase B (Contratista General) permite coordinar multiples oficios en un proyecto. Una clasificacion C es especializada y limita tu trabajo a ese oficio especifico. Algunos contratistas tienen ambas: la B para proyectos completos y una C para su especialidad.',
  },
]

function SectionCard({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="mb-4 text-2xl font-black text-slate-950">{title}</h2>
      {children}
    </section>
  )
}

export default function CSLBPage() {
  return (
    <article className="bg-white font-jakarta text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #f97316 0, transparent 32%), radial-gradient(circle at 80% 0%, #2563eb 0, transparent 28%)',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_380px] lg:px-8 lg:py-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-orange-300">
              Construccion / contratistas / California
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight lg:text-6xl">
              CSLB en espanol: licencia de contratista en California y guias de estudio
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200 lg:text-xl">
              La CSLB regula a todos los contratistas de construccion en California. Si
              quieres operar legalmente bajo tu propio nombre o empresa, necesitas licencia
              CSLB. Aqui explicamos clasificaciones, requisitos, el examen y como estudiar
              en espanol.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quien-la-necesita"
                className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition-colors hover:bg-orange-200"
              >
                Ver si la necesitas
              </a>
              <a
                href="#clasificaciones"
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-white/20"
              >
                Clasificaciones
              </a>
              <a
                href="#como-estudiar"
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-white/20"
              >
                Como estudiar
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <h2 className="mb-5 text-xl font-black">Datos rapidos</h2>
            <dl className="space-y-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-white/10 pb-3 last:border-b-0"
                >
                  <dt className="text-xs font-bold uppercase tracking-widest text-slate-300">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-base font-extrabold text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_340px] lg:px-8">
        <div className="space-y-8">
          {/* Alert */}
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="mb-2 text-xl font-black text-amber-950">Lo mas importante</h2>
            <p className="leading-relaxed text-amber-950">
              En California es ilegal hacer trabajos de construccion por $500 o mas (mano
              de obra y materiales) sin licencia CSLB activa. Esto aplica incluso si tienes
              licencia en otro estado: debes tramitar la CSLB de California por separado.
            </p>
          </div>

          {/* Que es */}
          <SectionCard title="Que es la CSLB">
            <div className="space-y-3 leading-relaxed text-slate-700">
              <p>
                La Contractors State License Board es la agencia estatal de California que
                licencia y regula a los contratistas de construccion. Opera bajo el
                Departamento de Asuntos del Consumidor y su mision es proteger tanto al
                publico consumidor como a los contratistas que operan legalmente.
              </p>
              <p>
                Para obtener licencia, debes pasar un proceso que incluye verificacion de
                experiencia, examen escrito y cumplimiento de requisitos de fianza y seguro.
                La licencia se renueva cada dos anos.
              </p>
            </div>
          </SectionCard>

          {/* Quien la necesita */}
          <SectionCard title="Quien la necesita">
            <div id="quien-la-necesita" className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-black text-slate-950">Normalmente si</h3>
                <ul className="space-y-3 text-slate-700">
                  {whoNeedsIt.map((item) => (
                    <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-black text-slate-950">Pero ojo</h3>
                <ul className="space-y-3 text-slate-700">
                  {whoMayNotNeedIt.map((item) => (
                    <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>

          {/* Clasificaciones */}
          <SectionCard title="Clasificaciones de licencia CSLB">
            <div id="clasificaciones" className="grid gap-4 md:grid-cols-3">
              {licenseTypes.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="mb-2 text-lg font-black text-slate-950">{card.title}</h3>
                  <p className="leading-relaxed text-slate-700">{card.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-2xl bg-blue-50 px-4 py-3 text-sm leading-relaxed text-blue-900">
              La clasificacion mas solicitada entre contratistas hispanohablantes es la
              Clase B (General Building) y clasificaciones C como C-10 (electricidad),
              C-20 (HVAC), C-33 (pintura) y C-36 (plomeria).
            </p>
          </SectionCard>

          {/* Que no es */}
          <SectionCard title="Que no es la licencia CSLB">
            <ul className="space-y-3 text-slate-700">
              {notThis.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Como estudiar */}
          <SectionCard title="Como obtenerla y estudiar para el examen">
            <div id="como-estudiar">
              <ol className="space-y-3 text-slate-700">
                {studySteps.map((item, index) => (
                  <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="mr-2 font-black text-slate-950">{index + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <h3 className="mb-2 text-lg font-black text-blue-950">
                  Nota sobre el examen en espanol
                </h3>
                <p className="leading-relaxed text-blue-900">
                  PSI Exams puede ofrecer el examen en espanol, pero no en todas las
                  ubicaciones ni para todas las clasificaciones. Solicita la acomodacion de
                  idioma al momento de agendar, no el dia del examen. Algunos materiales de
                  estudio de terceros tambien estan disponibles en espanol.
                </p>
              </div>
            </div>
          </SectionCard>

          {/* Relacion con otras licencias */}
          <SectionCard title="Como se relaciona con otras licencias y certificaciones">
            <div id="otras-licencias" className="space-y-4">
              <p className="leading-relaxed text-slate-700">
                La licencia CSLB es la capa de contratista. Dependiendo de tu oficio,
                tambien puedes necesitar certificaciones federales o estatales adicionales.
                Por ejemplo, un contratista HVAC (C-20) generalmente tambien necesita EPA
                608 para manejar refrigerantes.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {internalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-orange-300 hover:bg-orange-50"
                  >
                    <h3 className="mb-2 text-lg font-black text-slate-950">
                      {link.label}
                    </h3>
                    <p className="leading-relaxed text-slate-700">{link.note}</p>
                  </a>
                ))}
              </div>
            </div>
          </SectionCard>

          {/* FAQs */}
          <SectionCard title="Preguntas frecuentes">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="mb-2 text-lg font-black text-slate-950">{faq.q}</h3>
                  <p className="leading-relaxed text-slate-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* Sidebar */}
        <aside className="sticky top-8 self-start space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-4 text-xl font-black">Fuentes oficiales</h2>
            <ul className="space-y-4">
              {officialSources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-blue-700 underline underline-offset-4 hover:text-blue-900"
                  >
                    {source.label}
                  </a>
                  <p className="mt-1 text-sm text-slate-600">{source.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
            <h2 className="mb-4 text-xl font-black">Donde seguir</h2>
            <ul className="space-y-4">
              {internalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-bold text-orange-300 underline underline-offset-4 hover:text-orange-100"
                  >
                    {link.label}
                  </a>
                  <p className="mt-1 text-sm text-slate-300">{link.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </article>
  )
}
