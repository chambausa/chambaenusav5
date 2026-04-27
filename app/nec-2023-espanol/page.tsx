import { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'NEC 2023 en espanol: que es, como usarlo y licencias',
  description:
    'Que es NFPA 70 / NEC 2023, quien lo necesita, como se usa para examenes de electricista y como se relaciona con licencias electricas por estado.',
  alternates: { canonical: 'https://chambaenusa.com/nec-2023-espanol' },
  openGraph: {
    title: 'NEC 2023 en espanol: guia para electricistas',
    description:
      'Guia en espanol sobre NFPA 70 / NEC 2023: que es, quien lo usa, como estudiarlo y como se conecta con examenes y licencias de electricista.',
    url: 'https://chambaenusa.com/nec-2023-espanol',
    type: 'article',
  },
}

const quickFacts = [
  { label: 'Nombre oficial', value: 'NFPA 70 / National Electrical Code' },
  { label: 'Edicion', value: '2023' },
  { label: 'Publica', value: 'NFPA' },
  { label: 'Uso', value: 'Referencia de seguridad e instalacion electrica' },
]

const whoNeedsIt = [
  'Electricistas que se preparan para examenes donde el codigo electrico es material de referencia.',
  'Tecnicos y contratistas que trabajan en instalaciones electricas sujetas al codigo adoptado por su jurisdiccion.',
  'Personas que necesitan entender que edicion del codigo usa su estado, ciudad o proveedor de examen.',
]

const dependsOnJurisdiction = [
  'No todos los estados o ciudades adoptan la misma edicion al mismo tiempo.',
  'Tu examen puede basarse en una edicion especifica del NEC aunque otra jurisdiccion cercana use una distinta.',
  'Siempre debes revisar la autoridad local o el boletin del examen antes de comprar libros o pagar un curso.',
]

const sectionsOrVersions = [
  {
    title: 'NFPA 70',
    body: 'Es el nombre formal del National Electrical Code. Cuando alguien dice NEC, normalmente se refiere a NFPA 70.',
  },
  {
    title: 'NEC 2023',
    body: 'Es una edicion concreta del codigo. Si tu jurisdiccion o examen ya adopto 2023, estudiar con otra edicion puede hacerte perder tiempo o llevarte a respuestas incorrectas.',
  },
  {
    title: 'Codigo vs handbook',
    body: 'El codigo es la referencia normativa. El handbook agrega material explicativo y ayudas de estudio, pero no reemplaza revisar que libro o formato acepta tu examen.',
  },
  {
    title: 'Edicion adoptada',
    body: 'La edicion que importa no es la que encuentras primero en internet, sino la que adopto tu autoridad o la que indica el proveedor del examen.',
  },
]

const notThis = [
  'No es una licencia de electricista.',
  'No es una autorizacion para trabajar por tu cuenta.',
  'No es un curso por si solo.',
  'No significa que cualquier PDF o copia en linea sea una version autorizada o aceptada para examen.',
]

const nextSteps = [
  'Confirma que tu estado o ciudad realmente use NEC 2023 antes de estudiar solo con esa edicion.',
  'Si vas a presentar examen, revisa el candidate information bulletin o la pagina oficial del regulador para ver que edicion aceptan.',
  'Verifica si el examen es open book, que formato del codigo permiten y si debes llevar tu propio libro.',
  'Compra o accede al NEC por vias oficiales para evitar copias incompletas o no autorizadas.',
  'Despues conecta el estudio del NEC con la pagina de licencia del estado donde vas a aplicar.',
]

const officialSources = [
  {
    label: 'NFPA 70: National Electrical Code',
    href: 'https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70',
    note: 'Pagina oficial de NFPA para el NEC identificado como NFPA 70.',
  },
  {
    label: 'TDLR Electrician Exam Information',
    href: 'https://www.tdlr.texas.gov/ELECTRICIANS/elecexam.htm',
    note: 'Ejemplo oficial de examen que usa NEC 2023, open book y con requisitos concretos sobre el formato permitido.',
  },
  {
    label: 'TDLR: 2023 National Electrical Code is Almost Here!',
    href: 'https://www.tdlr.texas.gov/news/2022/11/30/2023-national-electrical-code-is-almost-here/',
    note: 'Confirma como Texas adopto NEC 2023 como minimum standard y que los municipios pueden tener enmiendas locales.',
  },
  {
    label: 'TDLR: Take Care When Purchasing Electrical Code Books',
    href: 'https://www.tdlr.texas.gov/news/2023/02/09/take-care-when-purchasing-electrical-code-books/',
    note: 'Advierte sobre copias 2023 del NEC que no parecian legitimas y recomienda comprar versiones autorizadas.',
  },
]

const internalLinks = [
  {
    label: 'Licencia electricista Texas',
    href: '/licencia-electricista-texas',
    note: 'Texas ya usa NEC 2023 y lo conecta de forma directa con examenes TDLR.',
  },
  {
    label: 'Licencia electricista California',
    href: '/licencia-electricista-california',
    note: 'California usa su propio codigo estatal y conviene comparar adopcion y examen.',
  },
  {
    label: 'Licencia electricista Florida',
    href: '/licencia-electricista-florida',
    note: 'Florida mezcla examen de contratista con referencias tecnicas del codigo electrico.',
  },
  {
    label: 'Licencia electricista Washington',
    href: '/licencia-electricista-washington',
    note: 'Washington es util para usuarios que preparan examen con fuerte peso de codigo.',
  },
  {
    label: 'Oficio electricista',
    href: '/oficio/electricista',
    note: 'Hub general para comparar rutas de licencia y requisitos por estado.',
  },
]

const faqs = [
  {
    q: 'Que es el NEC 2023?',
    a: 'Es la edicion 2023 del National Electrical Code, identificado por NFPA como NFPA 70. Es una referencia central para instalaciones electricas seguras.',
  },
  {
    q: 'NEC 2023 es lo mismo que una licencia de electricista?',
    a: 'No. El NEC es un codigo tecnico. La licencia de electricista la regula cada estado o jurisdiccion correspondiente.',
  },
  {
    q: 'Todos los estados usan NEC 2023 al mismo tiempo?',
    a: 'No. La adopcion depende de cada jurisdiccion. Por eso siempre debes revisar la autoridad local o el boletin del examen antes de estudiar con una sola edicion.',
  },
  {
    q: 'Puedo usar NEC 2023 para un examen de electricista?',
    a: 'Depende del examen. Por ejemplo, TDLR en Texas indica oficialmente que permite referenciar el National Electrical Code 2023 Edition en sus examenes de electricista, pero otros estados pueden usar otra edicion o reglas distintas.',
  },
  {
    q: 'El examen en Texas permite cualquier formato del NEC?',
    a: 'No. TDLR indica que el examen es open book, pero no acepta copias loose-leaf, spiralbound o ring-bound. Tambien indica que el candidato debe llevar su propio NEC.',
  },
  {
    q: 'Es importante comprar una version autorizada?',
    a: 'Si. TDLR publico una advertencia indicando que algunas copias 2023 del NEC compradas en linea no parecian legitimas y recomendando comprar versiones autorizadas por NFPA.',
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

export default function NEC2023Page() {
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
              Electricistas / codigo
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight lg:text-6xl">
              NEC 2023 en espanol: que es, como usarlo y cuando importa para tu licencia
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200 lg:text-xl">
              NFPA 70, conocido como National Electrical Code o NEC, es una referencia
              tecnica central para instalaciones electricas seguras. Si vas a presentar
              examen o trabajar como electricista, lo importante no es solo conseguir el
              libro: es confirmar que edicion usa tu jurisdiccion y como la conecta con tu
              licencia.
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
                Versiones y diferencias
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
              NEC 2023 no es una licencia. Es una referencia tecnica. Antes de estudiar o
              comprar el libro, confirma si tu examen o tu jurisdiccion realmente usan esa
              edicion, porque no todos los estados la adoptan al mismo tiempo.
            </p>
          </div>

          <SectionCard title="Que es NEC 2023">
            <div className="space-y-3 leading-relaxed text-slate-700">
              <p>
                NEC significa National Electrical Code. NFPA lo identifica como NFPA 70 y
                lo publica como referencia para instalaciones electricas seguras.
              </p>
              <p>
                Cuando alguien habla de NEC 2023, se refiere a la edicion 2023 de ese
                codigo. Esa distincion importa porque las jurisdicciones no siempre adoptan
                la misma edicion al mismo tiempo.
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
                <h3 className="mb-3 text-lg font-black text-slate-950">Depende de tu jurisdiccion</h3>
                <ul className="space-y-3 text-slate-700">
                  {dependsOnJurisdiction.map((item) => (
                    <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Versiones y diferencias que importan">
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

          <SectionCard title="Que no es NEC 2023">
            <ul className="space-y-3 text-slate-700">
              {notThis.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Como verificar si es la edicion correcta para ti">
            <ol className="space-y-3 text-slate-700">
              {nextSteps.map((item, index) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="mr-2 font-black text-slate-950">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </SectionCard>

          <SectionCard title="Como se relaciona con licencias de electricista por estado">
            <div id="licencias-estatales" className="space-y-4">
              <p className="leading-relaxed text-slate-700">
                El NEC se cruza con las licencias de electricista de dos maneras: como
                codigo adoptado para trabajo real y como material de referencia para
                examenes. El siguiente paso es revisar la ruta del estado donde vas a
                aplicar.
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
