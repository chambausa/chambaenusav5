import { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'EPA 608 en espanol: tipos, requisitos y licencia HVAC',
  description:
    'Que es la certificacion EPA 608, quien la necesita, tipos I, II, III y Universal, y como se relaciona con las licencias HVAC estatales.',
  alternates: { canonical: 'https://chambaenusa.com/epa-608' },
  openGraph: {
    title: 'EPA 608 en espanol: certificacion para tecnicos HVAC',
    description:
      'Guia en espanol sobre EPA Section 608: quien la necesita, tipos de certificacion, FAQ y enlaces a licencias HVAC por estado.',
    url: 'https://chambaenusa.com/epa-608',
    type: 'article',
  },
}

const quickFacts = [
  { label: 'Agencia', value: 'U.S. EPA' },
  { label: 'Base legal', value: 'Clean Air Act, Section 608' },
  { label: 'Tipos', value: 'Type I, II, III y Universal' },
  { label: 'Vigencia', value: 'No expira' },
]

const whoNeedsIt = [
  'Tecnicos que dan servicio, reparan o desechan equipos que pueden liberar refrigerantes regulados.',
  'Personas que trabajan con refrigeracion y aire acondicionado estacionario en muchos roles HVACR.',
  'Trabajadores que necesitan una certificacion federal antes de manipular ciertos refrigerantes, aunque su estado ademas pida licencia HVAC.',
]

const whoMayNotNeedIt = [
  'No sustituye una licencia estatal o local cuando esa licencia si es obligatoria.',
  'No es la licencia de contratista HVAC de un estado.',
  'No aplica igual a todos los trabajos mecanicos si no hay manejo de refrigerantes regulados.',
]

const typeCards = [
  {
    title: 'Type I',
    body: 'Para trabajo con electrodomesticos pequenos, segun la clasificacion usada por la EPA.',
  },
  {
    title: 'Type II',
    body: 'Para equipos de alta o muy alta presion, excluyendo electrodomesticos pequenos y ciertos sistemas MVAC.',
  },
  {
    title: 'Type III',
    body: 'Para equipos de baja presion.',
  },
  {
    title: 'Universal',
    body: 'Indica que el tecnico aprobo las areas necesarias para cubrir Type I, II y III.',
  },
]

const notThis = [
  'No es una licencia estatal HVAC.',
  'No es un permiso municipal.',
  'No es un curso oficial unico de la EPA.',
  'No significa automaticamente que ya puedes trabajar sin revisar reglas estatales, locales o del empleador.',
]

const nextSteps = [
  'Lee la pagina oficial de Section 608 para confirmar si tu tipo de trabajo entra en el requisito.',
  'Revisa la pagina oficial de certificacion de tecnicos para entender tipos, alcance y vigencia.',
  'Busca un certifying organization aprobado por la EPA antes de pagar examen o curso.',
  'Si necesitas contenido en espanol, verifica con el proveedor si ofrece materiales o examen en espanol; eso depende del proveedor, no de la EPA directamente.',
  'Despues revisa si tu estado exige licencia HVAC aparte de EPA 608.',
]

const officialSources = [
  {
    label: 'EPA Section 608',
    href: 'https://www.epa.gov/section608',
    note: 'Pagina oficial con reglas, recursos y enlaces del programa.',
  },
  {
    label: 'EPA Technician Certification',
    href: 'https://www.epa.gov/section608/section-608-technician-certification',
    note: 'Explica quien necesita certificacion, los tipos y que la credencial no expira.',
  },
  {
    label: 'Certification Programs for Section 608 Technicians',
    href: 'https://www.epa.gov/section608/certification-programs-section-608-technicians',
    note: 'Lista oficial de organizaciones aprobadas por la EPA; algunos proveedores indican Spanish available.',
  },
  {
    label: 'EPA 608 en espanol',
    href: 'https://espanol.epa.gov/espanol/resena-del-programa-de-certificacion-para-tecnicos-conforme-la-seccion-608-de-la-ley-de',
    note: 'Resumen en espanol del programa para tecnicos.',
  },
]

const internalLinks = [
  {
    label: 'Licencia HVAC Texas',
    href: '/licencia-hvac-texas',
    note: 'Texas combina reglas estatales HVAC con el requisito federal EPA 608.',
  },
  {
    label: 'Licencia HVAC California',
    href: '/licencia-hvac-california',
    note: 'California distingue entre tecnico empleado y licencia C-20 de contratista.',
  },
  {
    label: 'Licencia HVAC Florida',
    href: '/licencia-hvac-florida',
    note: 'Florida puede requerir licencia estatal ademas de EPA 608.',
  },
  {
    label: 'Licencia HVAC New York',
    href: '/licencia-hvac-new-york',
    note: 'New York puede sumar reglas locales, especialmente en NYC.',
  },
  {
    label: 'Licencia HVAC Arizona',
    href: '/licencia-hvac-arizona',
    note: 'Arizona mezcla requisito federal con reglas de contratista del estado.',
  },
]

const faqs = [
  {
    q: 'Que es la certificacion EPA 608?',
    a: 'Es la certificacion federal para ciertos tecnicos que trabajan con refrigerantes regulados. La regula la U.S. Environmental Protection Agency bajo Section 608 del Clean Air Act.',
  },
  {
    q: 'La EPA 608 expira?',
    a: 'No. La pagina oficial de Technician Certification indica que la credencial no expira.',
  },
  {
    q: 'EPA 608 es lo mismo que una licencia HVAC estatal?',
    a: 'No. EPA 608 regula el manejo de ciertos refrigerantes a nivel federal. Un estado o ciudad puede pedir ademas licencia HVAC, registro de contratista, seguro o permisos locales.',
  },
  {
    q: 'Cuantos tipos de EPA 608 existen?',
    a: 'La EPA describe cuatro resultados principales: Type I, Type II, Type III y Universal.',
  },
  {
    q: 'Puedo asumir que cualquier curso sirve para certificarme?',
    a: 'No conviene asumirlo. Verifica que el proveedor este en la lista de certifying organizations aprobadas por la EPA.',
  },
  {
    q: 'La EPA ofrece el examen directamente en espanol?',
    a: 'La EPA no administra directamente todos los examenes al publico. La disponibilidad de examen o materiales en espanol depende del proveedor aprobado, por eso debes validarlo antes de pagar.',
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

export default function EPA608Page() {
  return (
    <article className="bg-white font-jakarta text-slate-950">
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
              HVAC / refrigerantes
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight lg:text-6xl">
              EPA 608 en espanol: que es, quien la necesita y como se relaciona con licencia HVAC
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200 lg:text-xl">
              La EPA 608 es una certificacion federal para ciertos trabajos con refrigerantes
              regulados. No reemplaza una licencia HVAC estatal: en muchos casos necesitas
              ambas cosas dependiendo del estado, la ciudad y el tipo de trabajo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quien-la-necesita"
                className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition-colors hover:bg-orange-200"
              >
                Ver si la necesitas
              </a>
              <a
                href="#tipos"
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-white/20"
              >
                Tipos de certificacion
              </a>
              <a
                href="#licencias-estatales"
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-white/20"
              >
                Guias por estado
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

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_340px] lg:px-8">
        <div className="space-y-8">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="mb-2 text-xl font-black text-amber-950">Lo mas importante</h2>
            <p className="leading-relaxed text-amber-950">
              EPA 608 sirve para ciertos trabajos con refrigerantes regulados, pero no
              sustituye una licencia estatal o local cuando esa licencia si es obligatoria.
              Antes de aceptar trabajo, revisa ambas capas: la federal y la de tu estado.
            </p>
          </div>

          <SectionCard title="Que es EPA 608">
            <div className="space-y-3 leading-relaxed text-slate-700">
              <p>
                EPA 608 es la certificacion federal relacionada con el manejo de
                refrigerantes regulados en trabajos HVACR. Para muchos tecnicos, es el
                requisito base antes de instalar, dar servicio, mantener o desechar
                equipos que contengan esos refrigerantes.
              </p>
              <p>
                La U.S. Environmental Protection Agency publica las reglas del programa,
                la explicacion de los tipos de certificacion y la lista de organizaciones
                aprobadas para certificar tecnicos.
              </p>
            </div>
          </SectionCard>

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

          <SectionCard title="Tipos de certificacion">
            <div id="tipos" className="grid gap-4 md:grid-cols-2">
              {typeCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="mb-2 text-lg font-black text-slate-950">{card.title}</h3>
                  <p className="leading-relaxed text-slate-700">{card.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Que no es EPA 608">
            <ul className="space-y-3 text-slate-700">
              {notThis.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Como verificarla u obtenerla">
            <ol className="space-y-3 text-slate-700">
              {nextSteps.map((item, index) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="mr-2 font-black text-slate-950">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </SectionCard>

          <SectionCard title="Como se relaciona con licencias HVAC por estado">
            <div id="licencias-estatales" className="space-y-4">
              <p className="leading-relaxed text-slate-700">
                EPA 608 es federal. Las licencias HVAC estatales o locales dependen de
                cada jurisdiccion. Si ya entendiste la parte federal, el siguiente paso es
                revisar las reglas del estado donde quieres trabajar.
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
