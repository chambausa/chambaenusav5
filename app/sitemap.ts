import { MetadataRoute } from 'next'
import { readdirSync } from 'fs'
import { join } from 'path'

const BASE_URL = 'https://chambaenusa.com'

function getLicenseSlugs(): string[] {
  const dir = join(process.cwd(), 'archivos_json')
  return readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', '').replace('electricista-newyork', 'electricista-new-york'))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const licenseSlugs = getLicenseSlugs()

  const licensePages = licenseSlugs.map((slug) => ({
    url: `${BASE_URL}/licencia-${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const oficioPages = ['electricista', 'cosmetologia', 'cdl', 'hvac', 'plomero'].map((slug) => ({
    url: `${BASE_URL}/oficio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const estadoPages = ['texas', 'california', 'florida', 'new-york', 'arizona'].map((slug) => ({
    url: `${BASE_URL}/estado/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const resourcePages = ['epa-608', 'nec-2023-espanol', 'cslb-guias-estudio-espanol', 'examen-journeyman-electrician-espanol'].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/estados`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://chambaenusa.com/tdlr-texas-espanol',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/agencias/california-contractors-state-license-board-cslb`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...licensePages,
    ...oficioPages,
    ...estadoPages,
    ...resourcePages,
  ]
}
