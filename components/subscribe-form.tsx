'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

interface Props {
  oficio?: string
  estado?: string
  /** Visual variant */
  variant?: 'dark' | 'light'
  label?: string
}

export function SubscribeForm({
  oficio,
  estado,
  variant = 'dark',
  label = 'Recibir guía gratis',
}: Props) {
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, oficio, estado, source_url: pathname }),
      })
      if (!res.ok) throw new Error()
      setStatus('ok')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div className={`flex items-center gap-3 px-5 py-4 rounded-xl ${variant === 'dark' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-50 text-emerald-700'}`}>
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-semibold text-sm">¡Listo! Revisa tu correo en unos minutos.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="tucorreo@gmail.com"
        disabled={status === 'loading'}
        className={`flex-1 px-5 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-slate-400 disabled:opacity-60
          ${variant === 'dark'
            ? 'bg-white/10 border border-white/20 text-white placeholder-slate-400'
            : 'bg-white border border-gray-200 text-gray-900'
          }`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#131b2e] bg-amber-400 hover:bg-amber-300 transition-all disabled:opacity-60 whitespace-nowrap"
      >
        {status === 'loading' ? 'Enviando…' : label}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-1 w-full">
          Algo salió mal. Intenta de nuevo.
        </p>
      )}
    </form>
  )
}
