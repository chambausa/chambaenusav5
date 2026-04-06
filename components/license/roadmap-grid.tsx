'use client';

import type { Roadmap, LicenseType } from '@/types/license-json.types';

interface RoadmapGridProps {
  roadmap: Roadmap;
  oficio?: string;
}

export function RoadmapGrid({ roadmap, oficio }: RoadmapGridProps) {
  const tipos = roadmap.tipos;

  return (
    <section id="roadmap" className="py-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">
          Ruta de certificación
        </p>
        <h2 className="text-3xl font-extrabold uppercase text-slate-900">
          Tipos de Licencia{oficio ? ` de ${oficio}` : ''}
        </h2>
        {roadmap.nota_general && (
          <p className="text-slate-500 max-w-2xl mt-2 text-sm">{roadmap.nota_general}</p>
        )}
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Table header */}
        <div
          className="grid gap-0 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 px-6 py-3"
          style={{ gridTemplateColumns: '1.8fr 1.2fr 1fr 1.2fr 1fr' }}
        >
          <span>Nivel</span>
          <span>Requisitos</span>
          <span>Costo Total</span>
          <span>Examen</span>
          <span>Aplicar</span>
        </div>

        {/* Rows */}
        {tipos.map((tipo, index) => (
          <TableRow key={tipo.id} tipo={tipo} index={index} total={tipos.length} />
        ))}
      </div>

      {/* Note if exists */}
      {roadmap.nota_general && tipos.length > 2 && (
        <p className="text-xs text-slate-400 mt-3 italic">
          * Las horas de experiencia deben documentarse con el formulario oficial correspondiente.
        </p>
      )}
    </section>
  );
}

function TableRow({ tipo, index, total }: { tipo: LicenseType; index: number; total: number }) {
  const isLast = index === total - 1;
  const isPrincipal = tipo.es_principal;

  // Build requisitos summary
  const req = tipo.requisitos;
  const reqParts: string[] = [];
  if (req?.edad_minima) reqParts.push(`${req.edad_minima}+ años`);
  if (req?.horas_escuela !== undefined) reqParts.push(`${req.horas_escuela.toLocaleString()} hrs escuela`);
  if (req?.experiencia) reqParts.push(req.experiencia);
  if (req?.educacion_previa && req.educacion_previa !== 'Ninguna requerida oficialmente')
    reqParts.push(req.educacion_previa);
  if (req?.examen) reqParts.push(req.examen);
  if (reqParts.length === 0) reqParts.push('Ver requisitos oficiales');

  // Exam info
  const examenParts: string[] = [];
  const ex = tipo.examen;
  if (ex?.parte_1) {
    if (ex.parte_1.idiomas?.includes('Español')) examenParts.push('✓ Español');
    if (ex.parte_1.costo !== undefined) examenParts.push(`$${ex.parte_1.costo}`);
  }
  if (ex?.parte_2) examenParts.push('+ Práctico');
  if (!ex && req?.examen?.toLowerCase().includes('no')) examenParts.push('Sin examen');
  if (examenParts.length === 0 && ex) examenParts.push('Requerido');
  if (examenParts.length === 0) examenParts.push('—');

  // Costo
  const costo =
    tipo.costos?.total_examenes_y_licencia !== undefined
      ? `$${tipo.costos.total_examenes_y_licencia}`
      : '—';

  const aplicarUrl = tipo.como_aplicar?.url;

  return (
    <div
      className={`grid gap-0 items-center px-6 py-5 transition-colors hover:bg-slate-50 ${
        !isLast ? 'border-b border-slate-100' : ''
      } ${isPrincipal ? 'bg-amber-50/40' : ''}`}
      style={{ gridTemplateColumns: '1.8fr 1.2fr 1fr 1.2fr 1fr' }}
    >
      {/* Nivel */}
      <div className="flex items-center gap-3 min-w-0">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 text-white"
          style={{ backgroundColor: tipo.color_badge || '#131b2e' }}
        >
          {index + 1}
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-bold text-sm text-slate-900 truncate">{tipo.titulo_es}</p>
            {isPrincipal && (
              <span className="bg-amber-500 text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded shrink-0">
                Popular
              </span>
            )}
          </div>
          <p className="text-[10px] text-slate-400 truncate">{tipo.titulo_en}</p>
        </div>
      </div>

      {/* Requisitos */}
      <div className="flex flex-wrap gap-1 pr-2">
        {reqParts.slice(0, 2).map((r, i) => (
          <span
            key={i}
            className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded-full"
          >
            {r}
          </span>
        ))}
        {reqParts.length > 2 && (
          <span className="text-[10px] text-slate-400">+{reqParts.length - 2}</span>
        )}
      </div>

      {/* Costo */}
      <p className="font-black text-base text-slate-900 font-mono">{costo}</p>

      {/* Examen */}
      <div className="flex flex-wrap gap-1">
        {examenParts.map((e, i) => (
          <span
            key={i}
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              e.includes('Español')
                ? 'bg-green-100 text-green-700'
                : e === 'Sin examen'
                ? 'bg-slate-100 text-slate-500'
                : 'bg-amber-100 text-amber-700'
            }`}
          >
            {e}
          </span>
        ))}
      </div>

      {/* Aplicar */}
      {aplicarUrl ? (
        <a
          href={aplicarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wide text-slate-900 border border-slate-200 hover:border-amber-500 hover:text-amber-600 px-3 py-1.5 rounded transition-colors"
        >
          Ver
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ) : (
        <span className="text-[10px] text-slate-300">—</span>
      )}
    </div>
  );
}
