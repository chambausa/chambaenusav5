import fs from 'node:fs'
import assert from 'node:assert/strict'

const pages = [
  {
    slug: 'epa-608',
    title: 'EPA 608 en español',
    h1: 'EPA 608 en español: certificación para técnicos HVAC',
    sources: ['https://www.epa.gov/section608', 'https://www.epa.gov/section608/section-608-technician-certification'],
    internal: ['/licencia-hvac-texas', '/licencia-hvac-california', '/licencia-hvac-florida', '/licencia-hvac-new-york', '/licencia-hvac-arizona'],
  },
  {
    slug: 'nec-2023-espanol',
    title: 'NEC 2023 en español',
    h1: 'NEC 2023 en español: cómo estudiar el código eléctrico',
    sources: ['https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70'],
    internal: ['/licencia-electricista-texas', '/oficio/electricista'],
  },
  {
    slug: 'cslb-guias-estudio-espanol',
    title: 'CSLB guías de estudio en español',
    h1: 'CSLB: guías de estudio en español para contratistas',
    sources: ['https://www.cslb.ca.gov/Contractors/Applicants/Examination_Study_Guides/', 'https://www.cslb.ca.gov/Contractors/Applicants/'],
    internal: ['/agencias/california-contractors-state-license-board-cslb', '/licencia-electricista-california', '/licencia-hvac-california', '/licencia-plomero-california'],
  },
  {
    slug: 'examen-journeyman-electrician-espanol',
    title: 'Examen Journeyman Electrician en español',
    h1: 'Examen Journeyman Electrician en español: guía de estudio',
    sources: ['https://www.tdlr.texas.gov/electricians/', 'https://www.psiexams.com/'],
    internal: ['/licencia-electricista-texas', '/tipo-licencia/journeyman', '/oficio/electricista'],
  },
]

for (const page of pages) {
  const file = `app/${page.slug}/page.tsx`
  assert.ok(fs.existsSync(file), `${file} should exist`)
  const txt = fs.readFileSync(file, 'utf8')
  assert.match(txt, /export const metadata/, `${page.slug} should export metadata`)
  assert.ok(txt.includes(page.title), `${page.slug} should include SEO title phrase: ${page.title}`)
  assert.ok(txt.includes(`https://chambaenusa.com/${page.slug}`), `${page.slug} should set canonical/OG URL`)
  assert.ok(txt.includes(page.h1), `${page.slug} should include expected H1`)
  assert.ok(txt.includes('Fuentes oficiales'), `${page.slug} should expose official sources section`)
  assert.ok(txt.includes('No prometemos PDFs pirata'), `${page.slug} should include anti-piracy/anti-dump editorial guardrail`)
  for (const source of page.sources) assert.ok(txt.includes(source), `${page.slug} missing source ${source}`)
  for (const href of page.internal) assert.ok(txt.includes(href), `${page.slug} missing internal link ${href}`)

  const sourcePack = `scripts/source_packs/resources/${page.slug}.sources.json`
  assert.ok(fs.existsSync(sourcePack), `${sourcePack} should exist`)
  const pack = JSON.parse(fs.readFileSync(sourcePack, 'utf8'))
  assert.equal(pack.slug, page.slug, `${page.slug} source pack slug mismatch`)
  assert.ok(Array.isArray(pack.official_sources) && pack.official_sources.length >= 1, `${page.slug} needs official sources`)
  assert.ok(Array.isArray(pack.do_not_claim) && pack.do_not_claim.length >= 1, `${page.slug} needs do_not_claim guardrails`)
}

const nextConfig = fs.readFileSync('next.config.js', 'utf8')
const expectedRedirects = [
  [`/nfpa-70-manual-nec-2023-espanol`, `/nec-2023-espanol`],
  [`/manual-nec-2023-espanol`, `/nec-2023-espanol`],
  [`/nec-2023-guia-electricistas-hispanos`, `/nec-2023-espanol`],
  [`/guias-de-estudio-en-espanol-del-cslb`, `/cslb-guias-estudio-espanol`],
  [`/simulador-examen-journeyman-electrician-gratis-2025`, `/examen-journeyman-electrician-espanol`],
  [`/2025/09/05/que-es-la-certificacion-epa-608-y-por-que-es-obligatoria`, `/epa-608`],
  [`/simulador-examen-electricista-epa608`, `/epa-608`],
]
for (const [source, destination] of expectedRedirects) {
  assert.ok(nextConfig.includes(`source: '${source}'`) || nextConfig.includes(`source: "${source}"`), `missing redirect source ${source}`)
  assert.ok(nextConfig.includes(`destination: '${destination}'`) || nextConfig.includes(`destination: "${destination}"`), `missing redirect destination ${destination}`)
}
assert.ok(!nextConfig.includes("source: '/manual-nec-2023-espanol', destination: '/licencia-electricista-texas'"), 'old NEC redirect should not point to generic Texas page')
assert.ok(!nextConfig.includes("source: '/guias-de-estudio-en-espanol-del-cslb', destination: '/licencia-electricista-california'"), 'old CSLB redirect should not point to generic California page')

const sitemap = fs.readFileSync('app/sitemap.ts', 'utf8')
for (const page of pages) assert.ok(sitemap.includes(page.slug), `sitemap missing ${page.slug}`)

console.log('resource page checks passed')
