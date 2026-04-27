import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Examen Journeyman Electrician en español: guía de estudio',
  description: 'Qué suele evaluar un examen Journeyman Electrician, cómo prepararte en español y por qué los requisitos cambian por estado, ciudad y proveedor del examen.',
  alternates: { canonical: 'https://chambaenusa.com/examen-journeyman-electrician-espanol' },
  openGraph: { title: 'Examen Journeyman Electrician en español', description: 'Guía de estudio segura: temas comunes, límites por estado y enlaces a licencias de electricista.', url: 'https://chambaenusa.com/examen-journeyman-electrician-espanol', type: 'article' },
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

export default function JourneymanExamPage() {
  return <ResourcePage
    eyebrow="Electricistas / examen"
    title="Examen Journeyman Electrician en español: guía de estudio"
    intro="Journeyman Electrician no significa lo mismo en todos los estados. Esta guía te ayuda a estudiar temas comunes sin vender humo: los requisitos reales dependen de la autoridad que emite la licencia y del proveedor del examen."
    quickFacts={[
      { label: 'Nivel', value: 'Journeyman / journey-level' },
      { label: 'Varía por', value: 'Estado, ciudad o autoridad local' },
      { label: 'Temas', value: 'Código, seguridad, cálculos e instalaciones' },
      { label: 'Regla', value: 'Confirma siempre con la autoridad oficial' },
    ]}
    sections={[
      { title: 'Qué puede incluir el examen', body: ['Muchos exámenes de electricista evalúan lectura de código, teoría eléctrica básica, cálculos, circuitos, conductores, protección, grounding/bonding, equipos y seguridad. La lista exacta cambia por jurisdicción.', 'Si el examen es abierto al código, la habilidad importante no es memorizar todo: es saber encontrar la regla correcta rápido y aplicarla a un caso práctico.'] },
      { title: 'Cómo estudiar en español', body: ['Empieza con vocabulario técnico bilingüe: conductor, raceway, overcurrent protection, grounding, bonding, load calculation. Después practica escenarios: qué protección usar, qué conductor corresponde, qué artículo consultar.', 'Podemos crear preguntas de práctica propias, pero no usamos preguntas reales filtradas ni contenido robado de proveedores de examen.'] },
      { title: 'Primero identifica tu autoridad', body: ['Texas, New York, Nuevo México, ciudades locales y otros estados manejan rutas distintas para journeyman, master o contractor. Algunos usan proveedores como PSI; otros tienen formularios y reglas propias.', 'Antes de pagar un simulador, confirma el nombre exacto de la licencia, el boletín del candidato, la edición del código aceptada y si hay examen en español o adaptaciones disponibles.'] },
    ]}
    officialSources={[
      { label: 'TDLR Electricians', href: 'https://www.tdlr.texas.gov/electricians/', note: 'Ejemplo de autoridad estatal con información oficial para electricistas en Texas.' },
      { label: 'PSI Exams', href: 'https://www.psiexams.com/', note: 'Proveedor de exámenes usado por varias agencias; revisa siempre el boletín específico.' },
    ]}
    internalLinks={[
      { label: 'Licencia electricista Texas', href: '/licencia-electricista-texas' },
      { label: 'Tipo de licencia Journeyman', href: '/tipo-licencia/journeyman' },
      { label: 'Hub de oficio electricista', href: '/oficio/electricista' },
    ]}
  />
}
