'use client'

import Link from 'next/link'

interface RegulatoryAuthorityProps {
  autoridad: {
    nombre: string
    programa?: string
    nota_consolidacion?: string
    chambaenusa_hub?: string
    direccion?: {
      calle?: string
      ciudad?: string
      estado?: string
      cp?: string
      mailing?: string
    }
    telefono?: {
      local?: string
      toll_free?: string
      tdd?: string
      nota?: string
    }
    email?: string | { nota?: string }
    web?: string
    verificar_licencia?: string
    source?: string
  }
}

function inferAgencyHub(autoridad: RegulatoryAuthorityProps['autoridad']) {
  if (autoridad.chambaenusa_hub) return autoridad.chambaenusa_hub

  const fingerprint = `${autoridad.nombre} ${autoridad.web ?? ''}`.toLowerCase()

  if (
    fingerprint.includes('cslb') ||
    fingerprint.includes('contractors state license board')
  ) {
    return '/agencias/california-contractors-state-license-board-cslb/'
  }

  if (
    fingerprint.includes('tdlr') ||
    fingerprint.includes('texas department of licensing and regulation')
  ) {
    return '/agencias/texas-department-of-licensing-and-regulation-tdlr/'
  }

  return undefined
}

export function RegulatoryAuthority({ autoridad }: RegulatoryAuthorityProps) {
  const phoneNote = autoridad.telefono?.nota
  const emailValue = typeof autoridad.email === 'string' ? autoridad.email : undefined
  const emailNote = typeof autoridad.email === 'object' ? autoridad.email?.nota : undefined
  const agencyHub = inferAgencyHub(autoridad)

  return (
    <section className="py-8" id="autoridad-reguladora">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Autoridad Reguladora</h2>
        <p className="text-gray-600">
          Informacion oficial de la agencia que regula esta licencia
        </p>
      </div>

      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-3xl">🏛️</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">{autoridad.nombre}</h3>
            {autoridad.programa && (
              <p className="text-lg text-gray-600 mt-1">{autoridad.programa}</p>
            )}
            {autoridad.nota_consolidacion && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p className="text-sm text-blue-900">{autoridad.nota_consolidacion}</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-lg mb-3">Contacto</h4>

            {autoridad.telefono && (
              <div className="space-y-2">
                {autoridad.telefono.toll_free && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Gratuito:</span>
                    <a
                      href={`tel:${autoridad.telefono.toll_free}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      {autoridad.telefono.toll_free}
                    </a>
                  </div>
                )}
                {autoridad.telefono.local && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Local:</span>
                    <a
                      href={`tel:${autoridad.telefono.local}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      {autoridad.telefono.local}
                    </a>
                  </div>
                )}
                {autoridad.telefono.tdd && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">TDD:</span>
                    <a href={`tel:${autoridad.telefono.tdd}`} className="text-gray-700">
                      {autoridad.telefono.tdd}
                    </a>
                  </div>
                )}
                {phoneNote && <p className="text-sm text-gray-500">{phoneNote}</p>}
              </div>
            )}

            {emailValue && (
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Email:</span>
                <a href={`mailto:${emailValue}`} className="text-primary hover:underline">
                  {emailValue}
                </a>
              </div>
            )}
            {emailNote && <p className="text-sm text-gray-500">{emailNote}</p>}
          </div>

          <div className="space-y-4">
            {autoridad.direccion && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Direccion</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  {autoridad.direccion.calle && <p>{autoridad.direccion.calle}</p>}
                  {autoridad.direccion.ciudad && (
                    <p>
                      {autoridad.direccion.ciudad}, {autoridad.direccion.estado}{' '}
                      {autoridad.direccion.cp}
                    </p>
                  )}
                  {autoridad.direccion.mailing && (
                    <p className="text-gray-500 text-xs mt-2">
                      Correo: {autoridad.direccion.mailing}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-2">
              {agencyHub && (
                <Link
                  href={agencyHub}
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-black uppercase tracking-wide px-3 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Guia completa de esta agencia en ChambaEnUSA
                </Link>
              )}
              {autoridad.web && (
                <a
                  href={autoridad.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <span>🌐</span>
                  <span>Sitio Web Oficial</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {autoridad.verificar_licencia && (
                <a
                  href={autoridad.verificar_licencia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <span>🔍</span>
                  <span>Verificar una Licencia</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
