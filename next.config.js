/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  async redirects() {
    return [
      // ─── TDLR: short SEO URL ──────────────────────────────────────────────
      { source: '/agencias/texas-department-of-licensing-and-regulation-tdlr', destination: '/tdlr-texas-espanol', permanent: true },
      { source: '/tdlr-texas-en-espanol', destination: '/tdlr-texas-espanol', permanent: true },

      // ─── LICENCIAS: slug normalization (WordPress → v5) ───────────────────
      { source: '/licencia-plomeria-california', destination: '/licencia-plomero-california', permanent: true },
      { source: '/licencia-plomeria-texas', destination: '/licencia-plomero-texas', permanent: true },
      { source: '/licencia-plomeria-florida', destination: '/licencia-plomero-florida', permanent: true },
      { source: '/licencia-plomeria-new-york', destination: '/licencia-plomero-new-york', permanent: true },
      { source: '/licencia-electricista-nuevo-mexico', destination: '/licencia-electricista-new-mexico', permanent: true },
      { source: '/licencia-electricista-newyork', destination: '/licencia-electricista-new-york', permanent: true },
      // No tenemos página de New Hampshire — manda al hub del oficio
      { source: '/licencia-electricista-new-hampshire', destination: '/oficio/electricista', permanent: true },

      // ─── ESTADOS: shortcuts /estado-name/ → /estado/slug ─────────────────
      { source: '/california', destination: '/estado/california', permanent: true },
      { source: '/florida', destination: '/estado/florida', permanent: true },
      { source: '/new-york', destination: '/estado/new-york', permanent: true },
      { source: '/arizona', destination: '/estado/arizona', permanent: true },
      // Estados sin página propia todavía → índice de estados
      { source: '/illinois', destination: '/estados', permanent: true },
      { source: '/georgia', destination: '/estados', permanent: true },
      { source: '/colorado', destination: '/estados', permanent: true },
      { source: '/nevada', destination: '/estados', permanent: true },
      { source: '/washington', destination: '/estados', permanent: true },
      { source: '/pennsylvania', destination: '/estados', permanent: true },
      { source: '/utah', destination: '/estados', permanent: true },
      { source: '/nuevo-mexico', destination: '/licencia-electricista-new-mexico', permanent: true },
      { source: '/estados-eua', destination: '/estados', permanent: true },

      // ─── OFICIOS: shortcuts y slugs viejos ───────────────────────────────
      { source: '/hvac', destination: '/oficio/hvac', permanent: true },
      { source: '/electricistas', destination: '/oficio/electricista', permanent: true },
      { source: '/oficio/tecnico-hvac', destination: '/oficio/hvac', permanent: true },
      { source: '/oficio/page/2', destination: '/oficio/electricista', permanent: true },
      { source: '/oficio/trabajadores-agricolas', destination: '/', permanent: true },
      { source: '/oficio/constructores', destination: '/', permanent: true },
      { source: '/oficio/jardineros', destination: '/', permanent: true },
      { source: '/oficio/conductores-de-transporte', destination: '/oficio/cdl', permanent: true },

      // ─── TAXONOMÍA OLD WP (/tipo-licencia/) ──────────────────────────────
      { source: '/tipo-licencia/journeyman', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/tipo-licencia/master', destination: '/licencia-electricista-texas', permanent: true },

      // ─── BLOG POSTS WP → página de licencia más relevante ────────────────
      // Electricista Texas / General
      { source: '/nfpa-70-manual-nec-2023-espanol', destination: '/nec-2023-espanol', permanent: true },
      { source: '/manual-nec-2023-espanol', destination: '/nec-2023-espanol', permanent: true },
      { source: '/nec-2023-guia-electricistas-hispanos', destination: '/nec-2023-espanol', permanent: true },
      { source: '/journeyman-y-master-electrician', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/electrical-apprentice', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/apprentice-journeyman-electrician-master-electrician-electrical-contractor', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/apprentice-journeyman-master-high-medium-voltage', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/electrical-safety-kit-espanol-ingles', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/electrical-residential', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/residential-02', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/simulador-examen-journeyman-electrician-gratis-2025', destination: '/examen-journeyman-electrician-espanol', permanent: true },
      { source: '/iec-dallas-preapprenticeship-eastfield-texas', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/curso-pre-apprentice-electrical-de-skillpoint-alliance-texas', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/electrician-certification-general-01', destination: '/oficio/electricista', permanent: true },
      { source: '/electrical-contractor-license', destination: '/oficio/electricista', permanent: true },
      // Electricista New York
      { source: '/local-journeyman-local-master-segun-ciudad', destination: '/licencia-electricista-new-york', permanent: true },
      { source: '/nyc-master-electrician-license-special-electrician-license', destination: '/licencia-electricista-new-york', permanent: true },
      { source: '/class-a-certified-contractor-class-b-certified-contractor-registered-a-b', destination: '/licencia-electricista-new-york', permanent: true },
      // Electricista Florida
      { source: '/certified-electrical-contractor-ec-registered-electrical-contractor-er-specialty-contractors', destination: '/licencia-electricista-florida', permanent: true },
      { source: '/certificados-de-competencia-journeyman-electrician-ee98j-je98-residential-er1j-lineman-el1j-contratista-electrico-ee98', destination: '/licencia-electricista-florida', permanent: true },
      { source: '/curso-pre-apprenticeship-electrico-miami-dade-college-florida', destination: '/licencia-electricista-florida', permanent: true },
      // Electricista California
      { source: '/cr-11-electrical-c-11-electrical', destination: '/licencia-electricista-california', permanent: true },
      { source: '/voice-data-video-05-contratista-c10-cslb', destination: '/licencia-electricista-california', permanent: true },
      { source: '/guias-de-estudio-en-espanol-del-cslb', destination: '/cslb-guias-estudio-espanol', permanent: true },
      { source: '/weca-electrician-trainee-et-california', destination: '/licencia-electricista-california', permanent: true },
      { source: '/programa-aprendizaje-electrico-weca', destination: '/licencia-electricista-california', permanent: true },
      // Electricista Illinois
      { source: '/ej-chicago', destination: '/licencia-electricista-illinois', permanent: true },
      // Electricista Minnesota
      { source: '/class-a-journeyworker-class-a-master-power-limited-technician-maintenance-electrician-lineman', destination: '/licencia-electricista-minnesota', permanent: true },
      // HVAC
      { source: '/no-existe-licencia-estatal-hvac-epa-608-obligatorio-licencias-permits-locales', destination: '/licencia-hvac-california', permanent: true },
      { source: '/2025/09/05/que-es-la-certificacion-epa-608-y-por-que-es-obligatoria', destination: '/epa-608', permanent: true },
      { source: '/simulador-examen-electricista-epa608', destination: '/epa-608', permanent: true },
      { source: '/c-20-warm-air-heating', destination: '/licencia-hvac-california', permanent: true },
      { source: '/r-39-residential-c-39-commercial-cr-39-dual-hvac-contractor', destination: '/licencia-hvac-arizona', permanent: true },
      { source: '/registered-technician-certified-technician-contractor-acr', destination: '/licencia-hvac-texas', permanent: true },

      // ─── PÁGINAS GENERALES WP sin equivalente → homepage ─────────────────
      { source: '/cursos-y-certificaciones', destination: '/', permanent: true },
      { source: '/recursos-hispanos', destination: '/', permanent: true },
      { source: '/recursos', destination: '/', permanent: true },
      { source: '/licencias-en-estados-unidos', destination: '/', permanent: true },
      { source: '/calculadora-licencias-oficiales-eua', destination: '/', permanent: true },
      { source: '/osha-10', destination: '/licencia-electricista-texas', permanent: true },
      { source: '/licencias', destination: '/', permanent: true },
      { source: '/cursos', destination: '/', permanent: true },
      { source: '/sample-page', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
