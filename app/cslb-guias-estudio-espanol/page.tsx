import { Metadata } from 'next'

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
