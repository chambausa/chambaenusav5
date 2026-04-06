#!/usr/bin/env python3
"""
ChambaEnUSA — Generador de páginas de licencia
Uso: python scripts/generar_licencia.py --oficio cosmetologia --estado arizona

Genera archivos_json/[oficio]-[estado].json con datos verificados usando Claude API.
"""

import os
import sys
import json
import argparse
from pathlib import Path
from datetime import date

# Fix Unicode output on Windows
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")

# ─── Dependencias ─────────────────────────────────────────────────────────────
try:
    from anthropic import Anthropic
    from dotenv import load_dotenv
except ImportError:
    print("Error: instala dependencias con: pip install anthropic python-dotenv")
    sys.exit(1)

# Cargar .env.local (Next.js) o .env
ROOT_ENV = Path(__file__).parent.parent
load_dotenv(ROOT_ENV / ".env.local")
load_dotenv(ROOT_ENV / ".env")

# ─── Constantes ───────────────────────────────────────────────────────────────
ROOT = Path(__file__).parent.parent
JSON_DIR = ROOT / "archivos_json"
MODEL = "claude-sonnet-4-6"

ESTADOS_NOMBRES = {
    "texas": "Texas", "california": "California", "florida": "Florida",
    "new-york": "New York", "arizona": "Arizona", "nevada": "Nevada",
    "georgia": "Georgia", "illinois": "Illinois", "colorado": "Colorado",
    "washington": "Washington", "pennsylvania": "Pennsylvania",
    "new-jersey": "New Jersey", "north-carolina": "North Carolina",
    "virginia": "Virginia", "tennessee": "Tennessee", "oregon": "Oregon",
    "minnesota": "Minnesota", "new-mexico": "New Mexico",
}

OFICIOS_NOMBRES = {
    "electricista": "Electricista",
    "cosmetologia": "Cosmetología",
    "hvac": "HVAC / Técnico de Aire Acondicionado",
    "plomero": "Plomero",
    "cdl": "CDL (Licencia Comercial de Conducir)",
}

# JSON de referencia canónico — el más completo disponible
REFERENCE_CANONICAL = "electricista-texas"

# ─── Selección del JSON de referencia ─────────────────────────────────────────
def get_reference_json(oficio: str, estado: str) -> dict:
    """
    Usa siempre el JSON canónico (más completo) como referencia de estructura.
    Fallback: mismo oficio distinto estado → cualquier JSON disponible.
    """
    # 1. JSON canónico (mejor estructura)
    canonical_path = JSON_DIR / f"{REFERENCE_CANONICAL}.json"
    if canonical_path.exists():
        with open(canonical_path, "r", encoding="utf-8") as f:
            return json.load(f)

    # 2. Mismo oficio, estado diferente
    candidates = sorted(JSON_DIR.glob(f"{oficio}-*.json"))
    for candidate in candidates:
        if estado not in candidate.stem:
            with open(candidate, "r", encoding="utf-8") as f:
                return json.load(f)

    # 3. Cualquier JSON disponible
    all_jsons = sorted(JSON_DIR.glob("*.json"))
    if all_jsons:
        with open(all_jsons[0], "r", encoding="utf-8") as f:
            return json.load(f)

    raise FileNotFoundError("No hay JSONs de referencia en archivos_json/")


# ─── Prompt del sistema ───────────────────────────────────────────────────────
SYSTEM_PROMPT = """Eres un experto en licencias profesionales de Estados Unidos con especialidad en asesoría para trabajadores hispanos. Tu rol es generar contenido JSON estructurado, preciso y verificado sobre licencias de trabajo en EE.UU.

PRINCIPIOS FUNDAMENTALES:
1. Toda información de requisitos, costos y procesos debe ser REAL y VERIFICABLE con fuentes oficiales (.gov, agencias reguladoras)
2. Cuando tengas certeza de un dato, ponlo directamente
3. Cuando un dato puede variar o no lo tengas exacto, usa "requires_verification: true" y da el rango aproximado
4. Siempre incluye URLs reales de las fuentes (.gov, agencias oficiales)
5. El contenido es para hispanos en EE.UU. — usa español neutro, motivador, claro
6. Respeta EXACTAMENTE la estructura del JSON de referencia que te proporciono
7. NO inventes escuelas, direcciones o teléfonos — solo incluye los que puedas confirmar"""


def build_prompt(oficio: str, estado: str, reference_json: dict) -> str:
    estado_nombre = ESTADOS_NOMBRES.get(estado, estado.title())
    oficio_nombre = OFICIOS_NOMBRES.get(oficio, oficio.title())

    ref_str = json.dumps(reference_json, ensure_ascii=False, indent=2)

    return f"""Genera el JSON completo para la página de licencia de {oficio_nombre} en {estado_nombre} para ChambaEnUSA.

## DATOS DEL ARTÍCULO A GENERAR
- Oficio: {oficio_nombre}
- Estado: {estado_nombre}
- Slug de página: licencia-{oficio}-{estado}
- URL canónica: https://chambaenusa.com/licencia-{oficio}-{estado}/

## JSON DE REFERENCIA (misma estructura que debes usar)
```json
{ref_str}
```

## INSTRUCCIONES ESPECÍFICAS

1. **_meta**: Actualiza page_id, oficio, estado, last_verified a "{date.today()}", verified_by a "Claude - fuentes oficiales verificadas"

2. **page_seo**:
   - Title con año 2026, nombre correcto de la agencia reguladora de {estado_nombre} y dato diferenciador clave
   - Meta description de máximo 160 caracteres, orientada a conversión
   - Keywords reales que hispanohablantes buscarían en Google

3. **hero.key_stats**: 4 stats con datos REALES para {estado_nombre}:
   - Costo/fee de la licencia (fuente: agencia reguladora oficial)
   - Requisito principal (horas de escuela, experiencia, etc.)
   - Información del examen (disponibilidad en español SI O NO — esto es crítico)
   - Salario mediana (fuente: BLS)

4. **autoridad_reguladora**:
   - Nombre EXACTO de la agencia que regula {oficio_nombre} en {estado_nombre}
   - Teléfono, dirección y web REALES
   - NO uses placeholder — investiga la agencia correcta

5. **roadmap.tipos** (o roadmap.pasos si es proceso lineal):
   - Niveles/tipos de licencia reales de {estado_nombre} para {oficio_nombre}
   - Requisitos específicos de ese estado (horas, experiencia, exámenes)
   - Costos reales con fuentes

6. **escuelas** (si aplica):
   - Solo escuelas REALES con programas en español o bilingüe
   - Si no tienes datos verificados de escuelas específicas, omite la sección o pon pocas con requires_verification

7. **salarios**: Datos del BLS para {estado_nombre} específicamente si los tienes, o datos nacionales con nota

8. **faqs**: 8 preguntas frecuentes reales que haría un hispano sobre {oficio_nombre} en {estado_nombre}

9. **errores_comunes**: 4-5 errores reales y específicos para ese estado/oficio

10. **links_oficiales**: URLs reales y verificables (.gov, agencia reguladora, PSI/Pearson VUE/prometric, BLS)

## IMPORTANTE SOBRE EL EXAMEN EN ESPAÑOL
Investiga si el examen de {oficio_nombre} en {estado_nombre} está disponible en español. Este dato es muy importante para nuestros usuarios. Si está disponible, menciónalo prominentemente.

## OUTPUT
Responde ÚNICAMENTE con el JSON completo, sin texto adicional, sin markdown, sin ```json```. Solo el objeto JSON puro que empiece con {{ y termine con }}."""


# ─── Generador principal ───────────────────────────────────────────────────────
def generar_licencia(oficio: str, estado: str, dry_run: bool = False):
    # Validaciones
    if oficio not in OFICIOS_NOMBRES:
        print(f"❌ Oficio '{oficio}' no reconocido. Opciones: {', '.join(OFICIOS_NOMBRES.keys())}")
        sys.exit(1)

    output_path = JSON_DIR / f"{oficio}-{estado}.json"
    if output_path.exists():
        overwrite = input(f"⚠️  Ya existe {output_path.name}. ¿Sobreescribir? (s/N): ").strip().lower()
        if overwrite != "s":
            print("Cancelado.")
            sys.exit(0)

    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        print("❌ ANTHROPIC_API_KEY no encontrada en .env.local")
        sys.exit(1)

    print(f"🔍 Buscando JSON de referencia para {oficio}...")
    reference_json = get_reference_json(oficio, estado)
    ref_oficio = reference_json.get("_meta", {}).get("oficio", "?")
    ref_estado = reference_json.get("_meta", {}).get("estado", "?")
    print(f"   Referencia encontrada: {ref_oficio}-{ref_estado}.json")

    prompt = build_prompt(oficio, estado, reference_json)

    if dry_run:
        print("\n── PROMPT (dry run) ──────────────────────────────────────")
        print(prompt[:2000], "...[truncado]")
        return

    print(f"\n⚡ Generando con Claude ({MODEL})...")
    print(f"   Oficio: {OFICIOS_NOMBRES[oficio]}")
    print(f"   Estado: {ESTADOS_NOMBRES.get(estado, estado.title())}")

    client = Anthropic(api_key=api_key)

    response = client.messages.create(
        model=MODEL,
        max_tokens=16000,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": prompt}],
    )

    raw = response.content[0].text.strip()

    # Limpiar posible markdown
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"):
            raw = raw[4:]
    if raw.endswith("```"):
        raw = raw[:-3]
    raw = raw.strip()

    # Validar JSON
    try:
        parsed = json.loads(raw)
    except json.JSONDecodeError as e:
        print(f"\n❌ Claude devolvió JSON inválido: {e}")
        error_path = JSON_DIR / f"{oficio}-{estado}.error.txt"
        error_path.write_text(raw, encoding="utf-8")
        print(f"   Respuesta guardada en: {error_path}")
        sys.exit(1)

    # Guardar
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(parsed, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Archivo generado: archivos_json/{output_path.name}")
    print(f"   Tokens usados: {response.usage.input_tokens} input / {response.usage.output_tokens} output")
    print(f"\n📋 Próximos pasos:")
    print(f"   1. Revisa el archivo: archivos_json/{output_path.name}")
    print(f"   2. Verifica URLs y datos críticos (costos, requisitos)")
    print(f"   3. git add archivos_json/{output_path.name} && git commit -m 'feat: add licencia-{oficio}-{estado}' && git push")
    print(f"   4. Vercel desplegará en ~2 min → chambaenusa.com/licencia-{oficio}-{estado}")


# ─── CLI ──────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Genera JSON de página de licencia para ChambaEnUSA"
    )
    parser.add_argument(
        "--oficio",
        required=True,
        choices=list(OFICIOS_NOMBRES.keys()),
        help="Oficio: electricista, cosmetologia, hvac, plomero, cdl",
    )
    parser.add_argument(
        "--estado",
        required=True,
        help="Estado en minúsculas con guion: texas, california, new-york, arizona...",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Muestra el prompt sin llamar a la API",
    )

    args = parser.parse_args()
    generar_licencia(args.oficio, args.estado, dry_run=args.dry_run)
