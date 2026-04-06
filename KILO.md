# ChambaEnUSA — Instrucciones para Kilo

Eres el asistente de desarrollo de **ChambaEnUSA** (https://chambaenusa.com), el sitio #1 en español para hispanos en EE.UU. que necesitan obtener licencias profesionales.

## Lee primero estos archivos de contexto

- `context/01-proyecto.md` — Qué es el sitio, misión, audiencia, estructura de URLs
- `context/02-analytics.md` — Datos de Google Search Console y Analytics, qué está rankeando
- `context/03-contenido-existente.md` — 33 páginas publicadas y lista de páginas pendientes
- `context/04-como-generar-contenido.md` — Cómo usar el script para generar nuevas páginas
- `context/05-objetivo-y-estrategia.md` — Objetivo, modelo de negocio, priorización

---

## Tu tarea principal

**Generar páginas de licencia nuevas** siguiendo el orden de prioridad de `context/03-contenido-existente.md` usando el script `scripts/generar_licencia.py`.

### Flujo estándar para cada página nueva

```bash
# 1. Generar contenido
python scripts/generar_licencia.py --oficio [oficio] --estado [estado]

# 2. Revisar calidad del JSON generado (ver checklist en context/04)

# 3. Commit y push
git add archivos_json/[oficio]-[estado].json
git commit -m "feat: add licencia-[oficio]-[estado]"
git push
```

### Verificar antes de hacer commit
- ¿La URL de la autoridad reguladora es real (.gov o agencia oficial)?
- ¿Los costos son específicos del estado?
- ¿Indica si el examen está disponible en español?
- ¿Las FAQs son relevantes y útiles para un hispano?

---

## Reglas importantes

1. **No cambiar código** a menos que se pida explícitamente — el sitio está en producción
2. **No modificar JSONs existentes** sin revisar primero — pueden afectar páginas en vivo
3. **Siempre hacer `git push` después de generar** — Vercel despliega automáticamente
4. **Usar `electricista-texas.json` como referencia** — es el JSON más completo del proyecto
5. **El script carga `.env.local`** (no `.env`) — ahí está el `ANTHROPIC_API_KEY`

---

## Comandos útiles

```bash
# Ver páginas existentes
ls archivos_json/*.json

# Generar nueva página
python scripts/generar_licencia.py --oficio cosmetologia --estado arizona

# Ver preview del prompt sin llamar API
python scripts/generar_licencia.py --oficio cosmetologia --estado arizona --dry-run

# Deploy (automático al hacer push)
git add archivos_json/[archivo].json && git commit -m "feat: ..." && git push
```
