import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const pagePath = join(root, 'app/agencias/texas-department-of-licensing-and-regulation-tdlr/page.tsx')
const nextConfigPath = join(root, 'next.config.js')
const sitemapPath = join(root, 'app/sitemap.ts')
const aliasPath = join(root, 'app/tdlr-texas-espanol/page.tsx')

const page = readFileSync(pagePath, 'utf8')
const nextConfig = readFileSync(nextConfigPath, 'utf8')
const sitemap = readFileSync(sitemapPath, 'utf8')
let alias = ''
try {
  alias = readFileSync(aliasPath, 'utf8')
} catch {
  alias = ''
}

const requiredPageSnippets = [
  "title: 'TDLR Texas en Español: Qué es, Teléfono y Licencias'",
  "canonical: 'https://chambaenusa.com/tdlr-texas-espanol'",
  'TDLR Texas en español: qué es, teléfono y licencias',
  'TDLR Texas: datos rápidos',
  'Nombre oficial',
  'Texas Department of Licensing and Regulation',
  '(512) 463-6599',
  '(800) 803-9202',
  'lunes a viernes, 8:00 a.m. a 5:00 p.m.',
  'Sitio oficial',
  'https://www.tdlr.texas.gov/',
  'Verificar licencia',
  'https://www.tdlr.texas.gov/LicenseSearch/',
  'Trámites',
  'aplicar, renovar, verificar, quejas',
  'Apply for a New License',
  'Renew Your License',
  'Complaints and Enforcement',
]

for (const snippet of requiredPageSnippets) {
  if (!page.includes(snippet)) {
    throw new Error(`Missing TDLR page snippet: ${snippet}`)
  }
}

if (!nextConfig.includes("source: '/agencias/texas-department-of-licensing-and-regulation-tdlr'")) {
  throw new Error('Missing 301 redirect from old TDLR agency URL')
}
if (!nextConfig.includes("destination: '/tdlr-texas-espanol'")) {
  throw new Error('Missing 301 redirect destination /tdlr-texas-espanol')
}
if (!nextConfig.includes('permanent: true')) {
  throw new Error('TDLR redirect must be permanent')
}
if (!sitemap.includes('https://chambaenusa.com/tdlr-texas-espanol')) {
  throw new Error('Sitemap must include new /tdlr-texas-espanol URL')
}
if (!alias.includes("@/app/agencias/texas-department-of-licensing-and-regulation-tdlr/page")) {
  throw new Error('Missing alias page that re-exports the TDLR page')
}

console.log('tdlr seo checks passed')
