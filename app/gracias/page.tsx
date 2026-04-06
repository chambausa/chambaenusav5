import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gracias — Ya casi tienes tu guía | ChambaEnUSA',
  description: 'Revisa tu correo. Te hemos enviado la guía de licencias que pediste.',
  robots: { index: false, follow: false },
}

const GUIAS = [
  { label: 'Electricista', href: '/oficio/electricista', icon: '⚡' },
  { label: 'HVAC', href: '/oficio/hvac', icon: '🌡️' },
  { label: 'CDL', href: '/oficio/cdl', icon: '🚛' },
  { label: 'Cosmetología', href: '/oficio/cosmetologia', icon: '✂️' },
  { label: 'Plomería', href: '/oficio/plomero', icon: '🔧' },
]

export default function GraciasPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 font-jakarta bg-gray-50">

      {/* Ícono de confirmación */}
      <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">
        ¡Listo! Revisa tu correo
      </h1>
      <p className="text-gray-500 text-lg mb-10 text-center max-w-md">
        Te enviamos la guía en los próximos minutos. Si no la ves, revisa tu carpeta de spam.
      </p>

      {/* CTA — explorar guías */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-lg w-full">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">
          Mientras tanto, explora las guías
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {GUIAS.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="flex items-center gap-2 bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-amber-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors"
            >
              <span>{g.icon}</span>
              {g.label}
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>

    </div>
  )
}
