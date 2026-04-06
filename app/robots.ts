import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/buscar?*'],
    },
    sitemap: 'https://chambaenusa.com/sitemap.xml',
  }
}
