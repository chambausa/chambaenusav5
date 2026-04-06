# ChambaEnUSA — Contexto del Proyecto

## Qué es ChambaEnUSA

ChambaEnUSA es un sitio web de guías de licencias profesionales en español para trabajadores hispanos en Estados Unidos. Es el recurso #1 en español para hispanos que quieren obtener una licencia de trabajo en EE.UU.

**URL:** https://chambaenusa.com  
**Stack:** Next.js 14 (App Router) + Tailwind CSS + Vercel + Supabase  
**Repositorio:** https://github.com/chambausa/chambaenusav5

---

## Misión

Ayudar a trabajadores hispanos en Estados Unidos a entender y obtener sus licencias profesionales, en español, con información verificada de fuentes oficiales (.gov, agencias reguladoras).

---

## Audiencia

- **Quiénes son:** Hispanos en EE.UU. que quieren trabajar de manera formal con licencia
- **Necesidades:** Información clara en español sobre requisitos, costos, exámenes y procesos
- **Dolor principal:** La información oficial está en inglés y es difícil de entender
- **Motivación:** Ganar más, trabajar legalmente, crecer profesionalmente

---

## Oficios que cubre el sitio

| Oficio | Slug en script | Nombre completo |
|--------|---------------|-----------------|
| Electricista | `electricista` | Electricista |
| Cosmetología | `cosmetologia` | Cosmetología / Estética |
| HVAC | `hvac` | HVAC / Técnico de Aire Acondicionado |
| Plomero | `plomero` | Plomero |
| CDL | `cdl` | CDL (Licencia Comercial de Conducir) |

---

## Estructura de URLs

- `/licencia-[oficio]-[estado]` — Página de licencia específica (ej: `/licencia-electricista-texas`)
- `/oficio/[slug]` — Hub de oficio (ej: `/oficio/electricista`)
- `/estado/[slug]` — Hub de estado (ej: `/estado/texas`)
- `/agencias/[slug]` — Página de agencia reguladora
- `/estados` — Lista de todos los estados
- `/buscar` — Buscador de licencias

---

## Cómo funciona la generación de páginas

1. Cada página de licencia se genera a partir de un archivo JSON en `archivos_json/`
2. El nombre del archivo define la URL: `electricista-texas.json` → `/licencia-electricista-texas`
3. Agregar un nuevo JSON automáticamente crea una nueva página al hacer deploy en Vercel
4. No se requieren cambios de código — solo el JSON

---

## Principios de contenido

1. **Información verificada** — Solo datos de fuentes oficiales (.gov, agencias reguladoras, BLS)
2. **Español neutro** — Claro, motivador, sin regionalismos
3. **Dato diferenciador clave:** si el examen está disponible en español o no
4. **Siempre incluir:** costos reales, requisitos, autoridad reguladora, salario BLS, FAQs
5. **No inventar:** escuelas, teléfonos, direcciones — solo los verificados
