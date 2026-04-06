/**
 * Strict JSON generator for license pages using Claude.
 *
 * Goal:
 * - Always generate the same top-level structure used by electricista-texas
 * - Reject or repair alternate shapes like callout_importante, roadmap.pasos,
 *   clasificaciones, niveles_licencia, or links_oficiales.recursos
 *
 * Usage:
 *   npx tsx scripts/generate-license-json.ts <oficio> <estado>
 */

import Anthropic from '@anthropic-ai/sdk'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env.local') })

const OFICIOS_VALIDOS = ['electricista', 'cosmetologia', 'cdl', 'hvac', 'plomero'] as const
const ESTADOS_VALIDOS = [
  'texas',
  'california',
  'florida',
  'new-york',
  'arizona',
  'illinois',
  'nevada',
  'colorado',
  'georgia',
  'north-carolina',
] as const

const MODEL = 'claude-sonnet-4-5-20250929'
const MAX_RETRIES = 3
const CANONICAL_EXAMPLE = 'electricista-texas.json'

const REQUIRED_SECTIONS = [
  '_meta',
  'page_seo',
  'hero',
  'callout_espanol',
  'autoridad_reguladora',
  'roadmap',
  'calculadora_inversion',
  'renovacion',
  'reciprocidad',
  'salarios',
  'errores_comunes',
  'servicios_sin_licencia',
  'faqs',
  'links_oficiales',
  'enlaces_utiles',
] as const

const FORBIDDEN_KEYS = [
  'callout_importante',
  'clasificaciones',
  'niveles_licencia',
] as const

type JsonRecord = Record<string, unknown>

function printUsage() {
  console.log(`
Usage:
  npx tsx scripts/generate-license-json.ts <oficio> <estado>

Oficios:
  ${OFICIOS_VALIDOS.join(', ')}

Estados:
  ${ESTADOS_VALIDOS.join(', ')}

Ejemplos:
  npx tsx scripts/generate-license-json.ts plomero arizona
  npx tsx scripts/generate-license-json.ts plomero nevada
`)
}

function readFile(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), 'utf-8')
}

function loadSchema(): string {
  return readFile(path.join('types', 'license-json.types.ts'))
}

function loadCanonicalExample(): string {
  return readFile(path.join('archivos_json', CANONICAL_EXAMPLE))
}

function isObject(value: unknown): value is JsonRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : []
}

function asString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback
}

function slugTitle(input: string): string {
  return input
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function buildPrompt(oficio: string, estado: string, schema: string, example: string): string {
  const year = new Date().getFullYear()
  const estadoCapitalized = slugTitle(estado)
  const oficioCapitalized = oficio.charAt(0).toUpperCase() + oficio.slice(1)

  return `Genera un archivo JSON COMPLETO para la pagina de licencia de ${oficioCapitalized} en ${estadoCapitalized}, USA.

OBJETIVO:
La salida DEBE seguir el mismo molde editorial y estructural de electricista-texas. No solo contenido largo: misma forma de datos, mismas secciones y misma compatibilidad con el frontend.

SCHEMA TYPESCRIPT:
\`\`\`typescript
${schema}
\`\`\`

EJEMPLO CANONICO QUE DEBES IMITAR:
\`\`\`json
${example}
\`\`\`

REGLAS ESTRICTAS:
1. Responde SOLO con JSON valido. Sin markdown. Sin comentarios. Sin texto extra.
2. Usa EXACTAMENTE estas secciones top-level:
   ${REQUIRED_SECTIONS.join(', ')}
3. NO uses estas secciones alternas:
   ${FORBIDDEN_KEYS.join(', ')}, roadmap.pasos, links_oficiales.recursos
4. Aunque el estado use proceso lineal o licencias no tradicionales, conviertelo SIEMPRE a roadmap.tipos con 3-4 tarjetas comparables.
5. Siempre incluye callout_espanol:
   - si el examen esta en espanol, destacalo
   - si NO esta en espanol, usalo como advertencia clara sobre idioma
6. links_oficiales debe usar:
   { "ai_generated": true, "items": [ { "nombre": "...", "url": "...", "descripcion": "..." } ] }
7. errores_comunes debe usar:
   { "ai_generated": true, "items": [ { "error": "...", "por_que_importa": "...", "solucion": "..." } ] }
8. enlaces_utiles debe usar:
   { "ai_generated": true, "enlaces": [ { "categoria": "...", "items": [ { "nombre": "...", "url": "...", "descripcion": "..." } ] } ] }
9. faqs debe tener al menos 6 preguntas. errores_comunes al menos 4. links_oficiales al menos 8. enlaces_utiles al menos 1 categoria.
10. servicios_sin_licencia debe existir siempre, aunque sea una lista conservadora y bien explicada.
11. Incluye URLs oficiales reales cuando las conozcas. No inventes escuelas, telefonos o direcciones.

REGLAS DE CONTENIDO:
1. _meta.schema_version = "2.0"
2. _meta.oficio = "${oficio}"
3. _meta.estado = "${estado}"
4. _meta.last_verified = "${year}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}"
5. _meta.verified_by debe empezar con "Claude"
6. page_seo.slug = "licencia-${oficio}-${estado}"
7. page_seo.canonical_url = "https://chambaenusa.com/licencia-${oficio}-${estado}/"
8. hero.key_stats debe incluir:
   - fee/costo principal
   - requisito principal
   - info del examen y si hay espanol
   - salario BLS
9. roadmap.tipos:
   - cada item debe incluir titulo_en, titulo_es, es_principal, descripcion_corta
   - agrega requisitos.experiencia o equivalente
   - agrega examen cuando aplique
   - agrega costos.total_examenes_y_licencia cuando puedas
   - agrega como_aplicar.url cuando exista
10. El tono debe sentirse como las paginas fuertes de ChambaEnUSA: tecnico, claro, util, directo para hispanos en USA.

CASOS ESPECIALES IMPORTANTES:
- Arizona plomeria: aunque sea licencia de contratista y QP, igual conviertelo a roadmap.tipos. No uses clasificaciones separadas.
- Nevada plomeria: aunque exista Apprentice > Journeyman > Master > Contractor, representalo dentro de roadmap.tipos. No uses niveles_licencia aparte.

Devuelve SOLO el JSON completo final.`
}

function buildRepairPrompt(oficio: string, estado: string, currentJson: JsonRecord, errors: string[]): string {
  return `Corrige este JSON para licencia-${oficio}-${estado}. Manten todo lo util, pero devuelvelo en el formato exacto requerido.

ERRORES A CORREGIR:
${errors.map((error, index) => `${index + 1}. ${error}`).join('\n')}

REGLAS CLAVE:
- devuelve JSON completo, no parcial
- responde SOLO con un objeto JSON puro
- el primer caracter de tu respuesta debe ser {
- el ultimo caracter de tu respuesta debe ser }
- no incluyas encabezados, notas, markdown ni explicaciones
- usa callout_espanol, nunca callout_importante
- usa roadmap.tipos, nunca roadmap.pasos
- no uses clasificaciones ni niveles_licencia fuera de roadmap
- links_oficiales debe usar items
- enlaces_utiles debe existir y tener al menos una categoria con enlaces

JSON ACTUAL:
${JSON.stringify(currentJson, null, 2)}`
}

function extractJSON(response: string): JsonRecord {
  let text = response.trim()

  if (text.startsWith('```json')) {
    text = text.slice(7)
  } else if (text.startsWith('```')) {
    text = text.slice(3)
  }
  if (text.endsWith('```')) {
    text = text.slice(0, -3)
  }

  text = text.trim()

  try {
    return JSON.parse(text) as JsonRecord
  } catch {
    const firstBrace = text.indexOf('{')
    const lastBrace = text.lastIndexOf('}')
    if (firstBrace >= 0 && lastBrace > firstBrace) {
      return JSON.parse(text.slice(firstBrace, lastBrace + 1)) as JsonRecord
    }
    throw new Error(`No se encontro un objeto JSON valido en la respuesta. Inicio: ${text.slice(0, 80)}`)
  }
}

function mapAltRoadmapType(item: unknown, index: number): JsonRecord {
  const source = isObject(item) ? item : {}
  const id = asString(source.id, `nivel-${index + 1}`)
  const title = asString(source.titulo_es || source.nombre || source.titulo_en, `Nivel ${index + 1}`)
  const description = asString(source.descripcion_corta || source.descripcion, 'Ver detalles oficiales.')
  const sourceUrl = asString(source.source)

  let requisitos = source.requisitos
  if (!isObject(requisitos)) {
    const requisitosList = asArray(source.requisitos_qualifying_party).map((entry) => asString(entry)).filter(Boolean)
    requisitos = requisitosList.length > 0 ? { experiencia: requisitosList.join(' | ') } : { experiencia: 'Ver requisitos oficiales' }
  }

  let examen = source.examen
  if (!isObject(examen) && asArray(source.requisitos_qualifying_party).length > 0) {
    examen = {
      partes: 1,
      administrador: 'Agencia estatal / proveedor oficial',
      source: sourceUrl,
    }
  }

  let costos = source.costos
  if (!isObject(costos)) {
    costos = { total_examenes_y_licencia: undefined }
  }

  return {
    id,
    titulo_en: asString(source.titulo_en, title),
    titulo_es: title,
    es_principal: Boolean(source.es_principal ?? index === 1),
    color_badge: asString(source.color_badge, ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][index % 4]),
    descripcion_corta: description,
    scope_of_work: asString(source.scope_of_work),
    requisitos,
    examen,
    costos,
    como_aplicar: isObject(source.como_aplicar) ? source.como_aplicar : undefined,
    nota: asString(source.nota),
    source: sourceUrl,
  }
}

function normalizeGeneratedJSON(input: JsonRecord, oficio: string, estado: string): JsonRecord {
  const json = JSON.parse(JSON.stringify(input)) as JsonRecord

  if (!isObject(json._meta)) json._meta = {}
  if (!isObject(json.page_seo)) json.page_seo = {}
  if (!isObject(json.hero)) json.hero = {}
  if (!isObject(json.roadmap)) json.roadmap = {}

  const meta = json._meta as JsonRecord
  meta.schema_version = '2.0'
  meta.oficio = oficio
  meta.estado = estado
  if (!asString(meta.verified_by).startsWith('Claude')) {
    meta.verified_by = 'Claude - fuentes oficiales verificadas'
  }

  const seo = json.page_seo as JsonRecord
  seo.slug = `licencia-${oficio}-${estado}`
  seo.canonical_url = `https://chambaenusa.com/licencia-${oficio}-${estado}/`

  if (!json.callout_espanol && isObject(json.callout_importante)) {
    json.callout_espanol = json.callout_importante
  }

  if (isObject(json.callout_espanol)) {
    const callout = json.callout_espanol as JsonRecord
    callout.ai_generated = true
    if (!asString(callout.type)) callout.type = 'highlight_box'
    if (!asString(callout.icon)) callout.icon = 'INFO'
  }

  if (isObject(json.links_oficiales)) {
    const links = json.links_oficiales as JsonRecord
    if (!Array.isArray(links.items) && Array.isArray(links.recursos)) {
      links.items = links.recursos
    }
    links.ai_generated = true
  }

  if (isObject(json.enlaces_utiles)) {
    const usefulLinks = json.enlaces_utiles as JsonRecord
    usefulLinks.ai_generated = true
    if (!Array.isArray(usefulLinks.enlaces) && Array.isArray(usefulLinks.items)) {
      usefulLinks.enlaces = usefulLinks.items
    }
  }

  if (isObject(json.errores_comunes)) {
    const mistakes = json.errores_comunes as JsonRecord
    mistakes.ai_generated = true
  }

  if (isObject(json.faqs)) {
    const faqs = json.faqs as JsonRecord
    if (Array.isArray(faqs.preguntas) && !Array.isArray(faqs.items)) {
      faqs.items = faqs.preguntas
    }
  }

  const roadmap = json.roadmap as JsonRecord
  let tipos = asArray(roadmap.tipos)
  if (tipos.length === 0) {
    const altSource = isObject(json.clasificaciones) ? asArray((json.clasificaciones as JsonRecord).tipos) : []
    const altLevels = altSource.length > 0
      ? altSource
      : isObject(json.niveles_licencia)
      ? asArray((json.niveles_licencia as JsonRecord).tipos)
      : []
    if (altLevels.length > 0) {
      tipos = altLevels.map(mapAltRoadmapType)
    }
  }
  roadmap.tipos = tipos
  delete roadmap.pasos
  roadmap.ai_generated = true
  if (!asString(roadmap.layout)) roadmap.layout = 'timeline'

  for (const key of FORBIDDEN_KEYS) {
    delete json[key]
  }

  return json
}

function validateJSON(json: JsonRecord, oficio: string, estado: string): string[] {
  const errors: string[] = []

  for (const section of REQUIRED_SECTIONS) {
    if (!json[section]) {
      errors.push(`Falta seccion requerida: ${section}`)
    }
  }

  for (const key of FORBIDDEN_KEYS) {
    if (json[key]) {
      errors.push(`No debe existir la seccion alterna: ${key}`)
    }
  }

  const roadmap = isObject(json.roadmap) ? (json.roadmap as JsonRecord) : null
  if (!roadmap) {
    errors.push('Falta roadmap')
  } else {
    if (roadmap.pasos) errors.push('roadmap.pasos no es valido; usa roadmap.tipos')
    const tipos = asArray(roadmap.tipos)
    if (tipos.length < 3) {
      errors.push(`roadmap.tipos tiene ${tipos.length} items; minimo 3`)
    }
  }

  const meta = isObject(json._meta) ? (json._meta as JsonRecord) : null
  if (!meta) {
    errors.push('Falta _meta')
  } else {
    if (meta.oficio !== oficio) errors.push(`_meta.oficio debe ser "${oficio}"`)
    if (meta.estado !== estado) errors.push(`_meta.estado debe ser "${estado}"`)
    if (!asString(meta.verified_by).startsWith('Claude')) errors.push('_meta.verified_by debe empezar con "Claude"')
  }

  const seo = isObject(json.page_seo) ? (json.page_seo as JsonRecord) : null
  if (!seo) {
    errors.push('Falta page_seo')
  } else {
    if (seo.slug !== `licencia-${oficio}-${estado}`) errors.push('page_seo.slug incorrecto')
    if (seo.canonical_url !== `https://chambaenusa.com/licencia-${oficio}-${estado}/`) {
      errors.push('page_seo.canonical_url incorrecto')
    }
  }

  const callout = isObject(json.callout_espanol) ? (json.callout_espanol as JsonRecord) : null
  if (!callout) {
    errors.push('Falta callout_espanol')
  }

  const faqs = isObject(json.faqs) ? (json.faqs as JsonRecord) : null
  const faqItems = faqs ? asArray(faqs.items) : []
  if (faqItems.length < 6) {
    errors.push(`faqs.items tiene ${faqItems.length} preguntas; minimo 6`)
  }

  const errores = isObject(json.errores_comunes) ? (json.errores_comunes as JsonRecord) : null
  const errorItems = errores ? asArray(errores.items) : []
  if (errorItems.length < 4) {
    errors.push(`errores_comunes.items tiene ${errorItems.length} items; minimo 4`)
  }

  const links = isObject(json.links_oficiales) ? (json.links_oficiales as JsonRecord) : null
  const linkItems = links ? asArray(links.items) : []
  if (linkItems.length < 8) {
    errors.push(`links_oficiales.items tiene ${linkItems.length} items; minimo 8`)
  }

  const usefulLinks = isObject(json.enlaces_utiles) ? (json.enlaces_utiles as JsonRecord) : null
  const usefulLinkGroups = usefulLinks ? asArray(usefulLinks.enlaces) : []
  if (usefulLinkGroups.length < 1) {
    errors.push(`enlaces_utiles.enlaces tiene ${usefulLinkGroups.length} categorias; minimo 1`)
  }

  const metaDescription = asString((json.page_seo as JsonRecord)?.meta_description).toLowerCase()
  const calloutContent = asString((json.callout_espanol as JsonRecord)?.content).toLowerCase()
  if (
    metaDescription.includes('examen en español') &&
    (calloutContent.includes('no esta disponible en español') ||
      calloutContent.includes('no está disponible en español') ||
      calloutContent.includes('no disponible'))
  ) {
    errors.push('Hay contradiccion: SEO dice examen en espanol pero el callout dice que no')
  }

  return errors
}

async function requestJSON(client: Anthropic, prompt: string): Promise<string> {
  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 16000,
    messages: [{ role: 'user', content: prompt }],
  })

  const textBlock = message.content.find((block) => block.type === 'text')
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('La respuesta de Claude no incluyo texto utilizable')
  }

  return textBlock.text
}

async function generateWithRetries(
  client: Anthropic,
  oficio: string,
  estado: string,
  initialPrompt: string,
): Promise<JsonRecord> {
  let prompt = initialPrompt
  let lastErrors: string[] = []
  let lastResponseText = ''

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    console.log(`Intento ${attempt}/${MAX_RETRIES}...`)
    const responseText = await requestJSON(client, prompt)
    lastResponseText = responseText
    const parsed = extractJSON(responseText)
    const normalized = normalizeGeneratedJSON(parsed, oficio, estado)
    const errors = validateJSON(normalized, oficio, estado)

    if (errors.length === 0) {
      return normalized
    }

    lastErrors = errors
    console.warn(`  Claude devolvio JSON invalido (${errors.length} problemas).`)
    errors.forEach((error) => console.warn(`  - ${error}`))

    if (attempt < MAX_RETRIES) {
      prompt = buildRepairPrompt(oficio, estado, normalized, errors)
    }
  }

  fs.mkdirSync(path.join(process.cwd(), 'temp'), { recursive: true })
  fs.writeFileSync(path.join(process.cwd(), 'temp', `${oficio}-${estado}-last-response.txt`), lastResponseText, 'utf-8')
  throw new Error(`No se pudo generar un JSON valido tras ${MAX_RETRIES} intentos:\n- ${lastErrors.join('\n- ')}`)
}

async function main() {
  const args = process.argv.slice(2)
  if (args.length < 2 || args.includes('--help') || args.includes('-h')) {
    printUsage()
    process.exit(args.includes('--help') || args.includes('-h') ? 0 : 1)
  }

  const oficio = args[0].toLowerCase()
  const estado = args[1].toLowerCase()

  if (!OFICIOS_VALIDOS.includes(oficio as (typeof OFICIOS_VALIDOS)[number])) {
    console.error(`Oficio invalido: ${oficio}`)
    process.exit(1)
  }

  if (!ESTADOS_VALIDOS.includes(estado as (typeof ESTADOS_VALIDOS)[number])) {
    console.error(`Estado invalido: ${estado}`)
    process.exit(1)
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY no encontrada en .env.local')
    process.exit(1)
  }

  const schema = loadSchema()
  const example = loadCanonicalExample()
  const prompt = buildPrompt(oficio, estado, schema, example)
  const client = new Anthropic({ apiKey })
  const outputPath = path.join(process.cwd(), 'archivos_json', `${oficio}-${estado}.json`)

  console.log(`Generando licencia-${oficio}-${estado}`)
  console.log(`Modelo: ${MODEL}`)
  console.log(`Referencia canonica: ${CANONICAL_EXAMPLE}`)

  const startedAt = Date.now()
  const finalJson = await generateWithRetries(client, oficio, estado, prompt)
  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1)

  fs.writeFileSync(outputPath, `${JSON.stringify(finalJson, null, 2)}\n`, 'utf-8')

  console.log(`OK: archivos_json/${oficio}-${estado}.json`)
  console.log(`Tiempo total: ${elapsed}s`)
}

main().catch((error) => {
  console.error('Error fatal:', error instanceof Error ? error.message : String(error))
  process.exit(1)
})
