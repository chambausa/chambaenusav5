import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EPA 608 en español: tipos de certificación HVAC y requisitos',
  description: 'Qué es la certificación EPA 608, tipos I, II, III y Universal, quién la necesita para refrigerantes y cómo se relaciona con las licencias HVAC estatales.',
  alternates: { canonical: 'https://chambaenusa.com/epa-608' },
  openGraph: { title: 'EPA 608 en español: certificación para técnicos HVAC', description: 'Guía en español con fuentes oficiales EPA sobre Section 608, tipos de certificación y enlaces a licencias HVAC por estado.', url: 'https://chambaenusa.com/epa-608', type: 'article' },
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

export default function EPA608Page() {
  return <ResourcePage
    eyebrow="HVAC / refrigerantes"
    title="EPA 608 en español: certificación para técnicos HVAC"
    intro="La certificación EPA 608 aplica a técnicos que trabajan con refrigerantes regulados. No reemplaza una licencia estatal HVAC: es una credencial federal que suele convivir con reglas estatales, locales y del empleador."
    quickFacts={[
      { label: 'Agencia', value: 'U.S. Environmental Protection Agency' },
      { label: 'Base', value: 'Clean Air Act, Section 608' },
      { label: 'Tipos', value: 'Type I, Type II, Type III y Universal' },
      { label: 'Tema', value: 'Manejo de refrigerantes regulados' },
    ]}
    sections={[
      { title: 'Qué es EPA 608', body: ['EPA 608 es la regla federal relacionada con el manejo de refrigerantes que pueden afectar la capa de ozono o el clima. Para muchos trabajos HVACR, el técnico debe estar certificado antes de instalar, dar servicio, mantener o desechar equipos que contengan refrigerantes regulados.', 'La página oficial de EPA explica requisitos para técnicos, contratistas, propietarios de equipos y otros sectores regulados. Por eso aquí la tratamos como una guía nacional y no como una licencia de un estado específico.'] },
      { title: 'Tipos de certificación', body: ['Type I suele asociarse con electrodomésticos pequeños. Type II cubre equipos de alta presión. Type III cubre equipos de baja presión. Universal significa que el técnico aprobó las áreas necesarias para cubrir los tres tipos.', 'Antes de pagar un curso o examen, verifica que el proveedor sea aceptado y que el certificado cubra el tipo de trabajo que realmente harás.'] },
      { title: 'EPA 608 no es lo mismo que licencia HVAC', body: ['Un estado o ciudad puede pedir licencia HVAC, registro de contratista, seguro, experiencia o permisos locales. EPA 608 responde principalmente al manejo de refrigerantes; la licencia HVAC estatal responde a la autorización para trabajar u operar como técnico/contratista.', 'Por eso enlazamos abajo las guías estatales de HVAC: ahí se revisa si necesitas licencia estatal además de EPA 608.'] },
    ]}
    officialSources={[
      { label: 'EPA Section 608', href: 'https://www.epa.gov/section608', note: 'Página oficial de EPA sobre reglas y recursos Section 608.' },
      { label: 'EPA Technician Certification', href: 'https://www.epa.gov/section608/section-608-technician-certification', note: 'Requisitos de certificación para técnicos.' },
    ]}
    internalLinks={[
      { label: 'Licencia HVAC Texas', href: '/licencia-hvac-texas' },
      { label: 'Licencia HVAC California', href: '/licencia-hvac-california' },
      { label: 'Licencia HVAC Florida', href: '/licencia-hvac-florida' },
      { label: 'Licencia HVAC New York', href: '/licencia-hvac-new-york' },
      { label: 'Licencia HVAC Arizona', href: '/licencia-hvac-arizona' },
    ]}
  />
}
