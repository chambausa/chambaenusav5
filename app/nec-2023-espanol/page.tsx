import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NEC 2023 en español: cómo estudiar el código eléctrico',
  description: 'Guía en español para entender qué es NFPA 70 / NEC 2023, cómo estudiarlo sin usar PDFs pirata y qué temas revisar para exámenes de electricista.',
  alternates: { canonical: 'https://chambaenusa.com/nec-2023-espanol' },
  openGraph: { title: 'NEC 2023 en español: guía para electricistas', description: 'Resumen educativo sobre NFPA 70, recursos oficiales y temas clave para estudiar el código eléctrico.', url: 'https://chambaenusa.com/nec-2023-espanol', type: 'article' },
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

export default function NEC2023Page() {
  return <ResourcePage
    eyebrow="Electricistas / código"
    title="NEC 2023 en español: cómo estudiar el código eléctrico"
    intro="NFPA 70, conocido como National Electrical Code o NEC, es una referencia central para instalaciones eléctricas seguras. Esta página no distribuye el manual: te orienta para estudiarlo legalmente y conectar los temas con licencias de electricista."
    quickFacts={[
      { label: 'Nombre', value: 'NFPA 70 / National Electrical Code' },
      { label: 'Edición', value: 'NEC 2023' },
      { label: 'Uso', value: 'Instalaciones eléctricas seguras' },
      { label: 'Cuidado', value: 'Verifica la edición adoptada por tu estado o ciudad' },
    ]}
    sections={[
      { title: 'Qué es NEC 2023', body: ['El NEC es publicado por NFPA y se usa como base para reglas eléctricas en muchas jurisdicciones. No todos los estados o ciudades adoptan la misma edición al mismo tiempo, así que siempre debes revisar la autoridad local.', 'Para ChambaEnUSA, lo útil no es copiar el código completo, sino explicar cómo se relaciona con licencias, exámenes y trabajo seguro para electricistas hispanos.'] },
      { title: 'Cómo estudiarlo sin meterte en problemas', body: ['Evita buscar PDFs gratis o copias no autorizadas. El NEC es material protegido por derechos de autor. Usa fuentes oficiales, bibliotecas, cursos autorizados o materiales de preparación que respeten la licencia.', 'Sí podemos crear ejercicios propios, glosarios y explicaciones educativas sobre conceptos generales: grounding/bonding, protección contra sobrecorriente, conductores, cajas, cálculo de carga y seguridad.'] },
      { title: 'Qué revisar para exámenes', body: ['Los exámenes de electricista suelen evaluar lectura del código, seguridad, cálculos básicos, conductores, equipos, protección y reglas de instalación. El peso exacto cambia por estado, licencia y proveedor del examen.', 'Después de estudiar NEC, revisa la página de licencia del estado donde vas a aplicar, porque ahí cambian requisitos, horas de experiencia, proveedor de examen y formularios.'] },
    ]}
    officialSources={[
      { label: 'NFPA 70: National Electrical Code', href: 'https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70', note: 'Página oficial de NFPA para NEC / NFPA 70.' },
    ]}
    internalLinks={[
      { label: 'Licencia electricista Texas', href: '/licencia-electricista-texas' },
      { label: 'Hub de oficio electricista', href: '/oficio/electricista' },
    ]}
  />
}
