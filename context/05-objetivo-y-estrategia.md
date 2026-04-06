# Objetivo y Estrategia de ChambaEnUSA

## Objetivo Principal

Ser el sitio #1 en español para hispanos en EE.UU. que buscan información sobre licencias profesionales. Crecer de 33 páginas actuales a 100+ páginas de licencia para Q3 2026.

---

## Modelo de Negocio (en desarrollo)

1. **Leads calificados** — Capturar emails con oficio/estado de interés via formularios
2. **Afiliados** — Escuelas de formación, centros de examen, materiales de estudio
3. **Publicidad** — Google AdSense / programática cuando el tráfico escale
4. **Servicios premium** — Guías personalizadas, asesoría, actualizaciones de contenido

---

## Estrategia de contenido SEO

### Modelo de página
Cada página `/licencia-[oficio]-[estado]` ataca keywords de **intención alta**:
- "licencia de electricista en texas"
- "cómo sacar licencia de cosmetología en california"
- "requisitos plomero nevada"

Estas keywords tienen baja competencia y alta conversión porque son muy específicas.

### Fórmula ganadora
- Información oficial verificada (no genérica)
- Datos específicos del estado (costos exactos, agencia exacta, examen en español sí/no)
- Español claro y motivador
- FAQs que responden lo que Google ya está mostrando

### Interlinking
- Cada página de licencia enlaza al hub del oficio (`/oficio/electricista`)
- Cada página enlaza al hub del estado (`/estado/texas`)
- Los hubs enlazan a todas las páginas de licencia relacionadas

---

## Priorización de contenido nuevo

### Criterio de priorización
1. **Volumen de búsqueda** (impresiones en Search Console)
2. **Población hispana del estado**
3. **Competencia baja** (pocos sitios en español)
4. **Monetización potencial** (oficios mejor pagados)

### Orden recomendado de generación

**Semana 1-2 (Cosmetología — 578 impresiones de demanda)**
1. cosmetologia-arizona
2. cosmetologia-nevada
3. cosmetologia-georgia
4. cosmetologia-new-jersey

**Semana 3 (CDL — 2,679 impresiones en una sola página)**
5. cdl-pennsylvania
6. cdl-new-jersey
7. cdl-illinois
8. cdl-georgia

**Semana 4 (HVAC — crecimiento sostenido)**
9. hvac-nevada
10. hvac-georgia
11. hvac-colorado
12. hvac-pennsylvania

**Semana 5+ (Plomero + Electricista)**
13. plomero-new-jersey
14. plomero-georgia
15. electricista-new-jersey
16. electricista-north-carolina

---

## Stack Técnico

| Componente | Tecnología |
|------------|-----------|
| Frontend | Next.js 14 App Router + Tailwind CSS |
| Hosting | Vercel (deploy automático en cada push) |
| Base de datos | Supabase (PostgreSQL) — leads |
| Email | Resend — emails automáticos a leads |
| Generación de contenido | Claude API (`claude-sonnet-4-6`) |
| Analytics | Google Analytics + Search Console |

---

## Variables de entorno requeridas

```
NEXT_PUBLIC_SUPABASE_URL=       # Base de datos leads
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # Auth Supabase
ANTHROPIC_API_KEY=              # Para generar contenido con el script
RESEND_API_KEY=                 # Emails automáticos a leads
NEXT_PUBLIC_APP_URL=https://chambaenusa.com
```

---

## Estado del proyecto (Abril 2026)

- ✅ 33 páginas de licencia publicadas y en Google
- ✅ Lead capture con Supabase + Resend funcionando
- ✅ Sitemap dinámico generado automáticamente
- ✅ Script de generación de contenido con Claude API
- ✅ Diseño Stitch AI implementado (dark hero, amber accents)
- ✅ Páginas de agencias reguladoras (TDLR, CSLB)
- 🔄 Expansión de contenido en progreso
- ❌ Imagen OG social (/public/og-image.png) pendiente
- ❌ Más de 50 páginas de licencia pendientes de generar
