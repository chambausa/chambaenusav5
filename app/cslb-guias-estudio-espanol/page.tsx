import { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'CSLB guías de estudio en español: contratistas California',
  description:
    'Dónde encontrar guías oficiales del CSLB, qué exámenes revisan los contratistas en California y cómo prepararte en español para C-10, C-20, C-36 y más.',
  alternates: { canonical: 'https://chambaenusa.com/cslb-guias-estudio-espanol' },
  openGraph: {
    title: 'CSLB guías de estudio en español para contratistas',
    description:
      'Recursos oficiales del CSLB, guía editorial en español y enlaces a licencias de contratista en California.',
    url: 'https://chambaenusa.com/cslb-guias-estudio-espanol',
    type: 'article',
  },
}

const quickFacts = [
  { label: 'Agencia', value: 'California Contractors State License Board' },
  { label: 'Examen común', value: 'Law & Business' },
  { label: 'Especialidades', value: 'C-10, C-20, C-36 y otras clasificaciones' },
  { label: 'Enfoque', value: 'Preparación y fuentes oficiales' },
]

const whoNeedsIt = [
  'Aspirantes a licencia de contratista en California que necesitan entender los temas del examen.',
  'Personas que preparan el examen Law & Business común a todas las clasificaciones.',
  'Contratistas que buscan refrescar conocimientos sobre regulaciones estatales y federales.',
  'Estudiantes que quieren comparar requisitos entre clasificaciones técnicas como C-10, C-20 o C-36.',
]

const dependsOnClassification = [
  'Cada clasificación tiene su propio examen técnico además del Law & Business.',
  'Las guías del CSLB cubren temas específicos pero no garantizan aprobación.',
  'Debes combinar estudio oficial con experiencia práctica documentada.',
  'Los requisitos de experiencia varían por clasificación y nivel de licencia.',
]

const sectionsOrVersions = [
  {
    title: 'Law & Business Exam',
    body: 'Examen común a todas las clasificaciones de contratista. Cubre leyes de construcción, contratos, seguros y regulaciones estatales.',
  },
  {
    title: 'Examen por clasificación',
    body: 'Cada especialidad (C-10 Electrical, C-20 HVAC, C-36 Plumbing) tiene su propio examen técnico con temas específicos del oficio.',
  },
  {
    title: 'Guías vs cursos',
    body: 'Las guías del CSLB son recursos gratuitos básicos. Los cursos comerciales ofrecen más detalle pero no son oficiales.',
  },
  {
    title: 'Idioma y recursos',
    body: 'La mayoría de materiales oficiales están en inglés. Busca traducciones comunitarias pero verifica con fuentes oficiales.',
  },
]

const notThis = [
  'No es un curso completo de preparación para examen.',
  'No garantiza aprobación en el examen de licencia.',
  'No reemplaza la experiencia laboral requerida.',
  'No incluye preguntas reales del examen (que son confidenciales).',
]

const nextSteps = [
  'Identifica tu clasificación de contratista (C-10, C-20, C-36, etc.) antes de estudiar.',
  'Descarga las guías oficiales del CSLB y revisa los temas del examen.',
  'Combina estudio con experiencia práctica documentada según los requisitos.',
  'Prepara tanto el examen Law & Business como el técnico de tu clasificación.',
  'Revisa fechas de examen y requisitos actuales en el sitio oficial del CSLB.',
]

const officialSources = [
  {
    label: 'CSLB Examination Study Guides',
    href: 'https://www.cslb.ca.gov/Contractors/Applicants/Examination_Study_Guides/',
    note: 'Directorio oficial de guías de estudio del CSLB con enlaces a PDFs por clasificación.',
  },
  {
    label: 'CSLB Applicants Page',
    href: 'https://www.cslb.ca.gov/Contractors/Applicants/',
    note: 'Página principal para aspirantes con información sobre exámenes y licencias.',
  },
  {
    label: 'CSLB Law & Business Study Guide',
    href: 'https://www.cslb.ca.gov/Contractors/Applicants/Examination_Study_Guides/Law_and_Business_Study_Guide/',
    note: 'Guía específica para el examen Law & Business común a todas las clasificaciones.',
  },
  {
    label: 'CSLB Classification Requirements',
    href: 'https://www.cslb.ca.gov/PublicInformation/ClassificationRequirements.aspx',
    note: 'Lista completa de clasificaciones con requisitos de experiencia y examen.',
  },
]

const internalLinks = [
  {
    label: 'Agencia CSLB California',
    href: '/agencias/california-contractors-state-license-board-cslb',
    note: 'Información completa sobre el Contractors State License Board de California.',
  },
  {
    label: 'Licencia electricista California',
    href: '/licencia-electricista-california',
    note: 'Ruta completa para licencia de electricista (C-10) en California.',
  },
  {
    label: 'Licencia HVAC California',
    href: '/licencia-hvac-california',
    note: 'Proceso para licencia de HVAC (C-20) y refrigeración en California.',
  },
  {
    label: 'Licencia plomero California',
    href: '/licencia-plomero-california',
    note: 'Guía para licencia de plomería (C-36) en el estado de California.',
  },
]

const faqs = [
  {
    q: 'Qué son las guías de estudio del CSLB?',
    a: 'Son recursos oficiales gratuitos que resumen los temas que pueden aparecer en los exámenes de licencia de contratista en California.',
  },
  {
    q: 'Las guías del CSLB están en español?',
    a: 'La mayoría están en inglés. Hay algunas traducciones comunitarias pero siempre verifica con fuentes oficiales.',
  },
  {
    q: 'Necesito estudiar todas las clasificaciones?',
    a: 'No. Estudia Law & Business (común) más el examen técnico de tu clasificación específica (C-10, C-20, C-36, etc.).',
  },
  {
    q: 'Las guías garantizan que pase el examen?',
    a: 'No. Son herramientas de estudio pero el examen requiere conocimiento, experiencia y preparación adecuada.',
  },
  {
    q: 'Dónde encuentro las guías oficiales?',
    a: 'En el sitio web del CSLB: https://www.cslb.ca.gov/Contractors/Applicants/Examination_Study_Guides/',
  },
  {
    q: 'Qué pasa si no tengo experiencia suficiente?',
    a: 'Debes documentar experiencia laboral. Las clasificaciones requieren diferentes años de experiencia supervisada.',
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

export default function CSLBStudyGuidesPage() {
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
              California / contratistas
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight lg:text-6xl">
              CSLB guías de estudio en español: preparación para contratistas en California
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200 lg:text-xl">
              El Contractors State License Board publica guías oficiales para aspirantes a
              licencia de contratista. Aquí organizamos el camino en español, conectando
              con las clasificaciones técnicas y recordando que el estudio oficial es solo
              parte del proceso de licencia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quien-lo-necesita"
                className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition-colors hover:bg-orange-200"
              >
                Ver si te aplica
              </a>
              <a
                href="#versiones"
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-white/20"
              >
                Guías y exámenes
              </a>
              <a
                href="#licencias-estatales"
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-white/20"
              >
                Licencias por oficio
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
              Las guías del CSLB son recursos oficiales gratuitos, no cursos completos.
              Debes combinar estudio con experiencia laboral documentada y preparar tanto
              el examen Law & Business como el técnico de tu clasificación.
            </p>
          </div>

          <SectionCard title="Que son las guías de estudio del CSLB">
            <div className="space-y-3 leading-relaxed text-slate-700">
              <p>
                El Contractors State License Board (CSLB) publica guías de estudio gratuitas
                que resumen los temas que pueden aparecer en los exámenes de licencia de
                contratista en California.
              </p>
              <p>
                Estas guías no son cursos completos ni garantizan aprobación, pero ayudan
                a entender qué estudiar y cómo prepararse para las diferentes clasificaciones
                como C-10 (Electrical), C-20 (HVAC) o C-36 (Plumbing).
              </p>
            </div>
          </SectionCard>

          <SectionCard title="Quien lo necesita">
            <div id="quien-lo-necesita" className="space-y-6">
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
                <h3 className="mb-3 text-lg font-black text-slate-950">Depende de tu clasificación</h3>
                <ul className="space-y-3 text-slate-700">
                  {dependsOnClassification.map((item) => (
                    <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Guías y exámenes que importan">
            <div id="versiones" className="grid gap-4 md:grid-cols-2">
              {sectionsOrVersions.map((card) => (
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

          <SectionCard title="Que no son las guías del CSLB">
            <ul className="space-y-3 text-slate-700">
              {notThis.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Como usar las guías para tu preparación">
            <ol className="space-y-3 text-slate-700">
              {nextSteps.map((item, index) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="mr-2 font-black text-slate-950">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </SectionCard>

          <SectionCard title="Como se relaciona con licencias de contratista en California">
            <div id="licencias-estatales" className="space-y-4">
              <p className="leading-relaxed text-slate-700">
                Las guías del CSLB son el puente entre teoría y práctica. El siguiente paso
                es revisar la ruta completa de licencia para tu oficio en California, que
                incluye experiencia, examen y aprobación final.
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
}import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSLB guías de estudio en español: contratistas California',
  description: 'Dónde encontrar guías oficiales del CSLB, qué exámenes revisan los contratistas en California y cómo prepararte en español para C-10, C-20, C-36 y más.',
  alternates: { canonical: 'https://chambaenusa.com/cslb-guias-estudio-espanol' },
  openGraph: { title: 'CSLB guías de estudio en español para contratistas', description: 'Recursos oficiales del CSLB, guía editorial en español y enlaces a licencias de contratista en California.', url: 'https://chambaenusa.com/cslb-guias-estudio-espanol', type: 'article' },
}


type QuickFact = { label: string; value: string }
type LinkItem = { label: string; href: string; note?: string }

function ResourcePage({
  eyebrow,
  title,
  intro,
  quickFacts,
  sections,
  officialSources,
  internalLinks,
}: {
  eyebrow: string
  title: string
  intro: string
  quickFacts: QuickFact[]
  sections: { title: string; body: string[] }[]
  officialSources: LinkItem[]
  internalLinks: LinkItem[]
}) {
  return (
    <article className="font-jakarta bg-white text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #f97316 0, transparent 32%), radial-gradient(circle at 80% 0%, #2563eb 0, transparent 28%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-orange-300 font-bold mb-5">{eyebrow}</p>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">{title}</h1>
            <p className="text-lg lg:text-xl text-slate-200 max-w-3xl leading-relaxed">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {internalLinks.slice(0, 3).map((link) => (
                <a key={link.href} href={link.href} className="rounded-full bg-white text-slate-950 px-5 py-3 text-sm font-extrabold hover:bg-orange-200 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur p-6 shadow-2xl">
            <h2 className="text-xl font-black mb-5">Datos rápidos</h2>
            <dl className="space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="border-b border-white/10 pb-3 last:border-b-0">
                  <dt className="text-xs uppercase tracking-widest text-slate-300 font-bold">{fact.label}</dt>
                  <dd className="mt-1 text-base font-extrabold text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid lg:grid-cols-[1fr_340px] gap-10">
        <div className="space-y-8">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-black text-amber-950 mb-2">Nota editorial</h2>
            <p className="text-amber-950 leading-relaxed">
              No prometemos PDFs pirata, preguntas reales filtradas ni atajos ilegales. Esta guía resume información pública y enlaza a fuentes oficiales para que estudies y tomes decisiones con menos riesgo.
            </p>
          </div>
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black mb-4">{section.title}</h2>
              <div className="space-y-3 text-slate-700 leading-relaxed">
                {section.body.map((p) => <p key={p}>{p}</p>)}
              </div>
            </section>
          ))}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-8 self-start">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-black mb-4">Fuentes oficiales</h2>
            <ul className="space-y-3">
              {officialSources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="font-extrabold text-blue-700 hover:text-blue-900 underline underline-offset-4">
                    {source.label}
                  </a>
                  {source.note && <p className="text-sm text-slate-600 mt-1">{source.note}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-950 text-white p-6">
            <h2 className="text-xl font-black mb-4">Siguiente paso en ChambaEnUSA</h2>
            <ul className="space-y-3">
              {internalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-bold text-orange-300 hover:text-orange-100 underline underline-offset-4">{link.label}</a>
                  {link.note && <p className="text-sm text-slate-300 mt-1">{link.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </article>
  )
}

export default function CSLBStudyGuidesPage() {
  return <ResourcePage
    eyebrow="California / contratistas"
    title="CSLB: guías de estudio en español para contratistas"
    intro="El Contractors State License Board publica guías y recursos para aspirantes a licencia de contratista en California. Aquí organizamos el camino en español sin inventar requisitos ni prometer traducciones que no existan."
    quickFacts={[
      { label: 'Agencia', value: 'California Contractors State License Board' },
      { label: 'Examen común', value: 'Law & Business' },
      { label: 'Especialidades', value: 'C-10, C-20, C-36 y otras clasificaciones' },
      { label: 'Enfoque', value: 'Preparación y fuentes oficiales' },
    ]}
    sections={[
      { title: 'Qué son las guías del CSLB', body: ['Las guías de estudio del CSLB ayudan a entender áreas que pueden aparecer en el examen de licencia de contratista. Normalmente debes revisar tanto Law & Business como la clasificación técnica que te corresponde.', 'No todas las clasificaciones tienen el mismo nivel de apoyo en español. Por eso conviene confirmar directamente en el sitio del CSLB antes de comprar cursos o materiales externos.'] },
      { title: 'Cómo usar esta página', body: ['Primero identifica tu clasificación: C-10 Electrical, C-20 HVAC, C-36 Plumbing u otra. Después revisa la guía oficial del CSLB y compara los temas con tu experiencia real.', 'Si una escuela promete “preguntas reales” o garantías demasiado agresivas, cuidado. Lo más sano es estudiar los temas oficiales, practicar lectura técnica y revisar la parte legal/de negocios.'] },
      { title: 'Conexión con licencias de California', body: ['Esta página funciona como puente hacia las guías de licencia por oficio. Ahí aterrizamos requisitos, experiencia, agencia, costos aproximados y pasos para electricistas, HVAC y plomeros en California.', 'Para detalles sensibles como tarifas vigentes, formularios y fechas, manda siempre al CSLB oficial.'] },
    ]}
    officialSources={[
      { label: 'CSLB Examination Study Guides', href: 'https://www.cslb.ca.gov/Contractors/Applicants/Examination_Study_Guides/', note: 'Directorio oficial de guías de estudio del CSLB.' },
      { label: 'CSLB Applicants', href: 'https://www.cslb.ca.gov/Contractors/Applicants/', note: 'Página oficial para aspirantes a licencia de contratista.' },
    ]}
    internalLinks={[
      { label: 'Agencia CSLB California', href: '/agencias/california-contractors-state-license-board-cslb' },
      { label: 'Licencia electricista California', href: '/licencia-electricista-california' },
      { label: 'Licencia HVAC California', href: '/licencia-hvac-california' },
      { label: 'Licencia plomero California', href: '/licencia-plomero-california' },
    ]}
  />
}
