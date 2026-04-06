import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLicensePageBySlug, getAllPublishedPages } from '@/lib/db/queries'
import { SubscribeForm } from '@/components/subscribe-form'
import { LicenseHeader } from '@/components/license/license-header'
import { RequirementsSection } from '@/components/license/requirements-section'
import { SchoolsTable } from '@/components/license/schools-table'
import { FAQSection } from '@/components/license/faq-section'
import { HeroSection } from '@/components/license/hero-section'
import { RoadmapGrid } from '@/components/license/roadmap-grid'
import { CalloutEspanol } from '@/components/license/callout-espanol'
import { CommonMistakes } from '@/components/license/common-mistakes'
import { SalarySection } from '@/components/license/salary-section'
import { RegulatoryAuthority } from '@/components/license/regulatory-authority'
import { OfficialLinks } from '@/components/license/official-links'
import { TableOfContents } from '@/components/license/table-of-contents'
import { RenewalSection } from '@/components/license/renewal-section'
import { ReciprocitySection } from '@/components/license/reciprocity-section'
import { ServicesWithoutLicense } from '@/components/license/services-without-license'
import type { HeroSection as HeroType, Roadmap, FAQSection as FAQSectionType, SchoolsSection } from '@/types/license-json.types'

interface Props {
    params: Promise<{ slug: string }>
}

// ISR: Revalidate every hour
export const revalidate = 3600

// Generate static params for top pages
export async function generateStaticParams() {
    let dbSlugs: Array<{ slug: string }> = []

    // In local/dev environments where Supabase is unavailable,
    // fail fast and continue with JSON-only static params.
    try {
        const pages = await Promise.race<Awaited<ReturnType<typeof getAllPublishedPages>>>([
            getAllPublishedPages(),
            new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('Supabase timeout in generateStaticParams')), 1500)
            ),
        ])

        dbSlugs = pages.slice(0, 50).map((page: { slug: string }) => ({
            slug: page.slug,
        }))
    } catch {
        dbSlugs = []
    }

    // All known JSON-based pages
    // Auto-generate slugs from archivos_json/ — no need to maintain a hardcoded list
    const { readdirSync } = await import('fs')
    const { join } = await import('path')
    const jsonDir = join(process.cwd(), 'archivos_json')
    const jsonSlugs = readdirSync(jsonDir)
        .filter((f: string) => f.endsWith('.json'))
        .map((f: string) => ({
            slug: 'licencia-' + f.replace('.json', '').replace('newyork', 'new-york'),
        }))

    return [...dbSlugs, ...jsonSlugs]
}

// Load JSON content dynamically
async function loadJSONContent(slug: string) {
    // Map specific slugs to JSON files if naming convention differs, 
    // or just try to find a json file with the exact slug name.
    // For 'licencia-cosmetologia-texas', we know the file is 'cosmetologia-texas.json'

    let jsonFileName = slug

    // Simple mapping strategy: remove 'licencia-' prefix if present to find the json?
    // Or just checks for exact match. 
    // User's file is 'cosmetologia-texas.json' but slug is 'licencia-cosmetologia-texas'
    // Let's try both exact match and 'remove license prefix' match.

    // Handle known aliases (file name differs from slug)
    const aliasMap: Record<string, string> = {
        'electricista-new-york': 'electricista-newyork',
    }

    const baseSlug = slug.replace(/^licencia-/, '')
    const resolvedSlug = aliasMap[baseSlug] || baseSlug

    const possibleNames = [
        slug,
        resolvedSlug,
        baseSlug,
    ]

    for (const name of possibleNames) {
        try {
            const fs = await import('fs/promises')
            const path = await import('path')
            const filePath = path.join(process.cwd(), 'archivos_json', `${name}.json`)

            try {
                await fs.access(filePath)
            } catch {
                continue // File not found, try next
            }

            console.log(`[DEBUG] Found JSON for slug '${slug}' at: ${filePath}`)
            const fileContent = await fs.readFile(filePath, 'utf-8')
            return JSON.parse(fileContent)
        } catch (e) {
            console.error(`[DEBUG] Error check/loading JSON for ${name}:`, e)
        }
    }

    return null
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params

    // Try JSON first
    const jsonData = await loadJSONContent(slug)

    if (jsonData) {
        const seo = (jsonData as Record<string, unknown>).page_seo as { title: string; meta_description: string; canonical_url: string; keywords_primary: string[]; keywords_secondary: string[]; keywords_long_tail: string[] }
        return {
            title: seo.title,
            description: seo.meta_description,
            openGraph: {
                title: seo.title,
                description: seo.meta_description,
                type: 'article',
            },
            alternates: {
                canonical: seo.canonical_url,
            },
            keywords: [
                ...seo.keywords_primary,
                ...seo.keywords_secondary,
                ...seo.keywords_long_tail,
            ].join(', '),
        }
    }

    // Fallback to Supabase
    const page = await getLicensePageBySlug(slug)

    if (!page) {
        return {
            title: 'Página no encontrada',
        }
    }

    const tradeName = page.trade?.name_es || 'Oficio'
    const stateName = page.state?.name_es || 'Estado'
    const year = new Date().getFullYear()

    return {
        title: `Licencia de ${tradeName} en ${stateName} ${year}: Requisitos y Escuelas`,
        description: page.meta_description || `Obtén información completa sobre los requisitos oficiales para obtener la licencia de ${tradeName} en ${stateName}. Encuentra escuelas bilingües y comienza tu carrera hoy.`,
        openGraph: {
            title: `Licencia de ${tradeName} en ${stateName}`,
            description: `Requisitos, costos y escuelas para ${tradeName} en ${stateName}.`,
            type: 'article',
            publishedTime: page.updated_at || undefined,
        },
        alternates: {
            canonical: `https://chambaenusa.com/${page.slug}`,
        },
    }
}

export default async function DynamicPage({ params }: Props) {
    const { slug } = await params

    console.log('[DynamicPage] Checking content for:', slug)

    // 1. Try JSON
    const jsonData = await loadJSONContent(slug)

    if (jsonData) {
        console.log('[DynamicPage] Serving from JSON')
        const json = jsonData as Record<string, unknown>
        const _meta = json._meta as { estado: string; oficio: string }
        const hero = json.hero as HeroType
        const roadmap = json.roadmap as Roadmap
        const faqsData = json.faqs as FAQSectionType
        const faqs = faqsData?.items?.map(item => ({ question: item.pregunta, answer: item.respuesta })) || []

        // Formatting for labels
        const formatLabel = (str: string) => str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
        const estado = formatLabel(_meta.estado)
        const oficio = formatLabel(_meta.oficio)

        // Extract all sections from JSON
        const calloutEspanol = json.callout_espanol as any
        const erroresComunes = json.errores_comunes as any
        const salarios = json.salarios as any
        const autoridadReguladora = json.autoridad_reguladora as any
        const linksOficiales = json.links_oficiales as any
        const renovacion = json.renovacion as any
        const reciprocidad = json.reciprocidad as any
        const serviciosSinLicencia = json.servicios_sin_licencia as any

        // Table of contents items
        const tocItems = [
            { id: 'hero', title: 'Resumen', icon: '📋' },
            { id: 'roadmap', title: 'Tipos de Licencia', icon: '🎯' },
            calloutEspanol && { id: 'examen-espanol', title: 'Examen en Español', icon: '💬' },
            salarios && { id: 'salarios', title: 'Salarios', icon: '💰' },
            autoridadReguladora && { id: 'autoridad-reguladora', title: 'Autoridad Reguladora', icon: '🏛️' },
            erroresComunes && { id: 'errores-comunes', title: 'Errores Comunes', icon: '⚠️' },
            serviciosSinLicencia && { id: 'sin-licencia', title: 'Sin Licencia', icon: '✅' },
            renovacion && { id: 'renovacion', title: 'Renovación', icon: '🔄' },
            reciprocidad && { id: 'reciprocidad', title: 'Transferencia', icon: '🌎' },
            { id: 'faqs', title: 'Preguntas Frecuentes', icon: '❓' },
            linksOficiales && { id: 'enlaces-oficiales', title: 'Enlaces Oficiales', icon: '🔗' },
        ].filter(Boolean) as Array<{ id: string; title: string; icon: string }>

        return (
            <article className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-500">
                    <a href="/" className="hover:text-primary">Inicio</a>
                    <span className="mx-2">/</span>
                    <a href={`/oficio/${_meta.oficio}`} className="hover:text-primary">{oficio}</a>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{estado}</span>
                </nav>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar - Table of Contents */}
                    <aside className="lg:col-span-1 order-2 lg:order-1">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-3 order-1 lg:order-2">
                        {/* Hero Section from JSON */}
                        <div id="hero">
                            <HeroSection hero={hero} />
                        </div>

                        {/* Callout Español - High priority */}
                        {calloutEspanol && (
                            <div id="examen-espanol">
                                <CalloutEspanol callout={calloutEspanol} />
                            </div>
                        )}

                        {/* Roadmap Grid from JSON */}
                        {roadmap?.tipos && roadmap.tipos.length > 0 && (
                            <div className="mt-12" id="roadmap">
                                <RoadmapGrid roadmap={roadmap} oficio={oficio} />
                            </div>
                        )}

                        {/* Salarios */}
                        {salarios && (
                            <div className="mt-12">
                                <SalarySection salarios={salarios} />
                            </div>
                        )}

                        {/* Regulatory Authority */}
                        {autoridadReguladora && (
                            <div className="mt-12">
                                <RegulatoryAuthority autoridad={autoridadReguladora} />
                            </div>
                        )}

                        {/* Common Mistakes */}
                        {erroresComunes && (
                            <div className="mt-12">
                                <CommonMistakes mistakes={erroresComunes} />
                            </div>
                        )}

                        {/* Services Without License */}
                        {serviciosSinLicencia && (
                            <div className="mt-12">
                                <ServicesWithoutLicense servicios={serviciosSinLicencia} />
                            </div>
                        )}

                        {/* Renewal */}
                        {renovacion && (
                            <div className="mt-12">
                                <RenewalSection renovacion={renovacion} />
                            </div>
                        )}

                        {/* Reciprocity */}
                        {reciprocidad && (
                            <div className="mt-12">
                                <ReciprocitySection reciprocidad={reciprocidad} />
                            </div>
                        )}

                        {/* FAQs from JSON */}
                        {faqs && faqs.length > 0 && (
                            <div className="mt-12" id="faqs">
                                <FAQSection faqs={faqs} oficio={oficio} estado={estado} />
                            </div>
                        )}

                        {/* Official Links */}
                        {linksOficiales && (
                            <div className="mt-12">
                                <OfficialLinks links={linksOficiales} />
                            </div>
                        )}

                        {/* Schools from JSON */}
                        {json.escuelas && (json.escuelas as SchoolsSection).items.length > 0 && (
                            <div className="mt-12">
                                <SchoolsTable
                                    schools={(json.escuelas as SchoolsSection).items.map(s => ({
                                        id: s.id,
                                        name: s.name,
                                        city: s.city,
                                        phone: s.phone || null,
                                        website: s.website || null,
                                        is_bilingual: s.is_bilingual,
                                        programs: s.programs.map(p => ({
                                            id: p.id,
                                            name: p.name,
                                            duration_months: p.duration_months || null,
                                            cost: p.cost || null,
                                            modality: p.modality || null
                                        }))
                                    }))}
                                    trade={oficio}
                                    state={estado}
                                />
                            </div>
                        )}

                        {/* Lead Capture Form */}
                        <div className="mt-12">
                            <div className="bg-[#131b2e] rounded-xl p-8 text-center">
                                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Guía gratis · Sin spam</p>
                                <h3 className="text-xl font-extrabold text-white mb-2">
                                    Recibe esta guía en tu correo
                                </h3>
                                <p className="text-slate-400 text-sm mb-6">
                                    Te enviamos el resumen de requisitos, costos y escuelas bilingües para {oficio} en {estado}.
                                </p>
                                <div className="flex justify-center">
                                    <SubscribeForm oficio={_meta.oficio} estado={_meta.estado} variant="dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }

    // 2. Fallback to Supabase
    console.log('[DynamicPage] Serving from DB (Supabase Fallback)')
    const page = await getLicensePageBySlug(slug)

    if (!page) {
        console.log('[DynamicPage] 404 - Not found in JSON or DB')
        notFound()
    }

    const tradeName = page.trade?.name_es || 'Oficio'
    const stateName = page.state?.name_es || 'Estado'

    // Parse content for FAQ extraction
    const faqs = extractFAQs(page.content_md || '')

    return (
        <article className="container mx-auto px-4 py-8 max-w-5xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-gray-500">
                <a href="/" className="hover:text-primary">Inicio</a>
                <span className="mx-2">/</span>
                <a href={`/oficio/${page.trade?.slug}`} className="hover:text-primary">{tradeName}</a>
                <span className="mx-2">/</span>
                <span className="text-gray-900">{stateName}</span>
            </nav>

            {/* Header */}
            <LicenseHeader
                trade={tradeName}
                state={stateName}
                lastUpdated={page.last_updated || undefined}
            />

            {/* Main Content with sidebar */}
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
                {/* Main content */}
                <div className="lg:col-span-2">
                    {/* Requirements */}
                    {page.requirements && (
                        <RequirementsSection
                            requirements={page.requirements}
                            trade={tradeName}
                            state={stateName}
                        />
                    )}

                    {/* Schools */}
                    {page.schools && page.schools.length > 0 && (
                        <SchoolsTable
                            schools={page.schools}
                            trade={tradeName}
                            state={stateName}
                        />
                    )}

                    {/* FAQs */}
                    {faqs.length > 0 && (
                        <FAQSection
                            faqs={faqs}
                        />
                    )}

                    {/* Source */}
                    {page.requirements?.source_url && (
                        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm">
                            <p className="font-semibold mb-2">Fuente oficial:</p>
                            <a
                                href={page.requirements.source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline break-all"
                            >
                                {page.requirements.source_url}
                            </a>
                            <p className="text-gray-500 mt-2">
                                Última actualización: {page.requirements.source_updated_at || 'Desconocida'}
                            </p>
                        </div>
                    )}
                </div>

                {/* Sidebar - Lead Capture */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-24 bg-[#131b2e] rounded-xl p-6 text-center">
                        <p className="text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-2">Guía gratis</p>
                        <h3 className="text-base font-extrabold text-white mb-3">
                            Recibe esta guía en tu correo
                        </h3>
                        <SubscribeForm oficio={page.trade_id} estado={page.state_id} variant="dark" label="Enviar guía" />
                    </div>
                </aside>
            </div>
        </article>
    )
}

// Helper to extract FAQs from markdown
function extractFAQs(content: string): { question: string; answer: string }[] {
    const faqs: { question: string; answer: string }[] = []
    const faqRegex = /### (.+?)\n([\s\S]*?)(?=### |## |\z)/g
    let match

    while ((match = faqRegex.exec(content)) !== null) {
        if (match[1].toLowerCase().includes('pregunta') || match[1].toLowerCase().includes('faq')) {
            faqs.push({
                question: match[1].replace(/pregunta \d+:|faq:/i, '').trim(),
                answer: match[2].trim(),
            })
        }
    }

    return faqs
}
