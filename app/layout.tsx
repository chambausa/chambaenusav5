import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Newsreader, Inter, Inter_Tight, Plus_Jakarta_Sans } from 'next/font/google'

const GA_ID = 'GT-TXBWKHWC'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const interTight = Inter_Tight({ subsets: ['latin'], weight: ['400','500','600','700','800','900'], variable: '--font-inter-tight' })
const newsreader = Newsreader({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-newsreader' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['300','400','500','600','700','800'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: {
    default: 'ChambaEnUSA - Licencias y Certificaciones de Oficios en Estados Unidos',
    template: '%s | ChambaEnUSA',
  },
  description: 'Guía completa en español para hispanos sobre licencias de electricista, CDL, cosmetología, HVAC y más en EE.UU. Requisitos, escuelas bilingües y cómo obtener tu certificación.',
  keywords: ['licencias de oficios', 'certificaciones estados unidos', 'electricista licencia', 'CDL licencia', 'cosmetología licencia', 'escuelas bilingües'],
  authors: [{ name: 'ChambaEnUSA' }],
  creator: 'ChambaEnUSA',
  openGraph: {
    type: 'website',
    locale: 'es_US',
    url: 'https://chambaenusa.com',
    siteName: 'ChambaEnUSA',
    title: 'ChambaEnUSA - Licencias y Certificaciones de Oficios en Estados Unidos',
    description: 'Guía completa en español para hispanos sobre licencias de oficios en EE.UU.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ChambaEnUSA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChambaEnUSA',
    description: 'Licencias y certificaciones de oficios en EE.UU. en español',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${interTight.variable} ${newsreader.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-jakarta antialiased">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
