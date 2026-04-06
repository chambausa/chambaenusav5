import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// ─── Contenido del email por oficio ──────────────────────────────────────────

const EMAIL_CONTENT: Record<string, { subject: string; intro: string; links: { label: string; url: string }[] }> = {
  electricista: {
    subject: 'Tu guía de Electricista en EE.UU. — ChambaEnUSA',
    intro: 'La licencia de electricista es una de las mejor pagadas en EE.UU. ($28–$42/hr promedio). Aquí las guías verificadas por estado:',
    links: [
      { label: '⚡ Electricista en Texas', url: 'https://chambaenusa.com/licencia-electricista-texas' },
      { label: '⚡ Electricista en California', url: 'https://chambaenusa.com/licencia-electricista-california' },
      { label: '⚡ Electricista en Florida', url: 'https://chambaenusa.com/licencia-electricista-florida' },
      { label: '📋 Ver todos los estados', url: 'https://chambaenusa.com/oficio/electricista' },
    ],
  },
  hvac: {
    subject: 'Tu guía de HVAC en EE.UU. — ChambaEnUSA',
    intro: 'Los técnicos HVAC son de los más demandados en todo EE.UU. ($25–$38/hr promedio). Aquí las guías por estado:',
    links: [
      { label: '🌡️ HVAC en Texas', url: 'https://chambaenusa.com/licencia-hvac-texas' },
      { label: '🌡️ HVAC en California', url: 'https://chambaenusa.com/licencia-hvac-california' },
      { label: '📋 Ver todos los estados', url: 'https://chambaenusa.com/oficio/hvac' },
    ],
  },
  cosmetologia: {
    subject: 'Tu guía de Cosmetología en EE.UU. — ChambaEnUSA',
    intro: 'La licencia de cosmetología te abre las puertas para trabajar en salones, spas y de forma independiente. Aquí las guías por estado:',
    links: [
      { label: '✂️ Cosmetología en Texas', url: 'https://chambaenusa.com/licencia-cosmetologia-texas' },
      { label: '✂️ Cosmetología en California', url: 'https://chambaenusa.com/licencia-cosmetologia-california' },
      { label: '✂️ Cosmetología en Florida', url: 'https://chambaenusa.com/licencia-cosmetologia-florida' },
      { label: '📋 Ver todos los estados', url: 'https://chambaenusa.com/oficio/cosmetologia' },
    ],
  },
  cdl: {
    subject: 'Tu guía de Licencia CDL en EE.UU. — ChambaEnUSA',
    intro: 'La licencia CDL es el pasaporte para los mejores empleos de transporte en EE.UU. ($24–$45/hr promedio). Aquí las guías por estado:',
    links: [
      { label: '🚛 CDL en California', url: 'https://chambaenusa.com/licencia-cdl-california' },
      { label: '🚛 CDL en Texas', url: 'https://chambaenusa.com/licencia-cdl-texas' },
      { label: '📋 Ver todos los estados', url: 'https://chambaenusa.com/oficio/cdl' },
    ],
  },
  plomero: {
    subject: 'Tu guía de Plomería en EE.UU. — ChambaEnUSA',
    intro: 'Los plomeros licenciados son de los oficios con mayor demanda y salario en EE.UU. ($26–$40/hr promedio). Aquí las guías por estado:',
    links: [
      { label: '🔧 Plomero en Texas', url: 'https://chambaenusa.com/licencia-plomero-texas' },
      { label: '🔧 Plomero en California', url: 'https://chambaenusa.com/licencia-plomero-california' },
      { label: '📋 Ver todos los estados', url: 'https://chambaenusa.com/oficio/plomero' },
    ],
  },
}

const EMAIL_GENERIC = {
  subject: 'Tu guía de oficios en EE.UU. — ChambaEnUSA',
  intro: 'Guías verificadas en español para los 5 oficios mejor pagados en EE.UU.:',
  links: [
    { label: '⚡ Electricista', url: 'https://chambaenusa.com/oficio/electricista' },
    { label: '🌡️ HVAC', url: 'https://chambaenusa.com/oficio/hvac' },
    { label: '🚛 CDL', url: 'https://chambaenusa.com/oficio/cdl' },
    { label: '✂️ Cosmetología', url: 'https://chambaenusa.com/oficio/cosmetologia' },
    { label: '🔧 Plomería', url: 'https://chambaenusa.com/oficio/plomero' },
  ],
}

// ─── HTML del email ───────────────────────────────────────────────────────────

function buildEmailHtml(content: typeof EMAIL_GENERIC) {
  const linksHtml = content.links
    .map(
      (l) =>
        `<a href="${l.url}" style="display:block;background:#131b2e;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;margin-bottom:8px;font-weight:600;font-size:14px;">${l.label}</a>`
    )
    .join('')

  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;padding:0;background:#f7f9fb;font-family:'Plus Jakarta Sans',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <!-- Header -->
    <div style="background:#131b2e;border-radius:12px;padding:32px;margin-bottom:24px;text-align:center;">
      <p style="color:#F59E0B;font-size:11px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 8px;">Guía Verificada</p>
      <h1 style="color:#ffffff;font-size:28px;font-weight:800;margin:0;line-height:1.3;">ChambaEnUSA</h1>
    </div>
    <!-- Body -->
    <div style="background:#ffffff;border-radius:12px;padding:32px;margin-bottom:24px;">
      <p style="color:#45464d;font-size:15px;line-height:1.7;margin:0 0 24px;">${content.intro}</p>
      ${linksHtml}
    </div>
    <!-- Footer -->
    <div style="text-align:center;padding:0 20px;">
      <p style="color:#999;font-size:12px;line-height:1.6;margin:0;">
        ChambaEnUSA · El Progreso a través del Legado<br/>
        <a href="https://chambaenusa.com" style="color:#F59E0B;">chambaenusa.com</a>
      </p>
    </div>
  </div>
</body>
</html>`
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, oficio, estado, source_url } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // 1. Guardar en Supabase
    const { error: dbError } = await supabase.from('leads').insert({
      email: email.toLowerCase().trim(),
      oficio: oficio || null,
      estado: estado || null,
      source_url: source_url || null,
    })

    if (dbError) {
      // Si el email ya existe (unique constraint), no es error crítico
      if (!dbError.message.includes('duplicate')) {
        console.error('Supabase error:', dbError)
        return NextResponse.json({ error: 'Error al guardar' }, { status: 500 })
      }
    }

    // 2. Enviar email con Resend
    const content = (oficio && EMAIL_CONTENT[oficio]) ? EMAIL_CONTENT[oficio] : EMAIL_GENERIC

    await resend.emails.send({
      from: 'ChambaEnUSA <guias@chambaenusa.com>',
      to: email,
      subject: content.subject,
      html: buildEmailHtml(content),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
