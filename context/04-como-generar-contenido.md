# Cómo Generar Nuevas Páginas de Licencia

## Script de generación

**Archivo:** `scripts/generar_licencia.py`  
**Requiere:** Python 3, `anthropic`, `python-dotenv` instalados  
**API Key:** `ANTHROPIC_API_KEY` en `.env.local`

---

## Uso básico

```bash
python scripts/generar_licencia.py --oficio [oficio] --estado [estado]
```

### Oficios válidos
- `electricista`
- `cosmetologia`
- `hvac`
- `plomero`
- `cdl`

### Estados válidos (formato)
Usar minúsculas con guion para estados compuestos:
- `texas`, `california`, `florida`, `arizona`, `nevada`, `georgia`
- `new-york`, `new-jersey`, `north-carolina`, `new-mexico`
- `illinois`, `colorado`, `washington`, `pennsylvania`, `virginia`
- `tennessee`, `oregon`, `minnesota`

### Ejemplo
```bash
python scripts/generar_licencia.py --oficio cosmetologia --estado arizona
```

---

## Qué hace el script

1. Carga `electricista-texas.json` como referencia de estructura (el más completo)
2. Llama a `claude-sonnet-4-6` con `max_tokens=16000`
3. Genera JSON con datos REALES de fuentes oficiales para el oficio/estado pedido
4. Valida que el JSON sea válido
5. Guarda en `archivos_json/[oficio]-[estado].json`
6. El deploy en Vercel crea la página automáticamente

---

## Flujo completo para agregar una nueva página

```bash
# 1. Generar contenido
python scripts/generar_licencia.py --oficio cosmetologia --estado arizona

# 2. Revisar el archivo generado (verificar URLs, costos, requisitos)
# Abrir: archivos_json/cosmetologia-arizona.json

# 3. Subir a GitHub (Vercel despliega automáticamente)
git add archivos_json/cosmetologia-arizona.json
git commit -m "feat: add licencia-cosmetologia-arizona"
git push

# 4. En ~2 minutos estará en vivo:
# https://chambaenusa.com/licencia-cosmetologia-arizona
```

---

## Estructura del JSON generado

El JSON sigue la estructura de `electricista-texas.json` e incluye:

```
_meta                  — metadatos del archivo (oficio, estado, fecha)
page_seo               — title, description, keywords, og tags
hero                   — stats clave: costo, requisitos, examen, salario
callout_espanol        — si el examen está disponible en español (CRÍTICO)
autoridad_reguladora   — agencia oficial, teléfono, web, dirección
roadmap                — niveles y pasos para obtener la licencia
renovacion             — cómo y cada cuánto renovar
reciprocidad           — si acepta licencias de otros estados
salarios               — datos BLS por estado
errores_comunes        — 4-5 errores que cometen los hispanos
servicios_sin_licencia — qué trabajos sí se pueden hacer sin licencia
faqs                   — 8 preguntas frecuentes reales
links_oficiales        — URLs verificadas (.gov, agencias, PSI/Prometric, BLS)
content_generation_rules — reglas para futuras actualizaciones
```

---

## Validación de calidad antes de hacer commit

Verificar en el JSON generado:
- [ ] `autoridad_reguladora.web` — ¿es una URL .gov o agencia oficial real?
- [ ] `hero.key_stats` — ¿los costos son reales y específicos del estado?
- [ ] `callout_espanol` — ¿indica correctamente si el examen está en español?
- [ ] `salarios` — ¿tiene datos BLS o menciona que son nacionales?
- [ ] `roadmap.tipos` o `roadmap.pasos` — ¿los niveles/pasos son reales para ese estado?
- [ ] `links_oficiales` — ¿todas las URLs son reales y verificables?

---

## Errores comunes y soluciones

**Error: `ANTHROPIC_API_KEY` no encontrada**
→ Verificar que existe en `.env.local` (no en `.env`)

**Error: JSON inválido / respuesta cortada**
→ El script ya tiene `max_tokens=16000`, si sigue fallando revisar el archivo `.error.txt` generado

**Error: créditos insuficientes**
→ Recargar en https://console.anthropic.com → Plans & Billing

**Página no aparece en el sitio**
→ Verificar que el JSON esté en `archivos_json/` con nombre exacto `[oficio]-[estado].json`
→ Hacer `git push` y esperar 2 minutos para el deploy de Vercel

---

## Notas técnicas

- La página se genera dinámicamente desde el JSON en `app/[slug]/page.tsx`
- `generateStaticParams` escanea `archivos_json/` automáticamente — no hay lista hardcodeada
- El componente `RoadmapGrid` solo renderiza si existe `roadmap.tipos` (guard implementado)
- El slug de la URL usa `licencia-` como prefijo: `licencia-cosmetologia-arizona`
