'use client';

interface SalaryData {
  nacional_2024?: {
    mediana: string;
    por_hora_mediana: string;
    percentil_10?: string;
    percentil_90?: string;
    crecimiento_proyectado?: string;
    source?: string;
  };
  texas?: {
    promedio_anual: string;
    promedio_hora: string;
    top_earners?: string;
    source?: string;
  };
  por_ciudad_texas?: Array<{
    ciudad: string;
    salario_medio: string;
    top_earners?: string;
    source?: string;
  }>;
  nota_importante?: string;
  ingresos_reales?: {
    nota?: string;
    factores_adicionales?: string[];
    estimado_realista?: {
      recien_licenciada?: string;
      '3_5_años_experiencia'?: string;
      especialista_o_independiente?: string;
      dueña_salon?: string;
    };
  };
}

interface SalarySectionProps {
  salarios: SalaryData;
}

export function SalarySection({ salarios }: SalarySectionProps) {
  // Build salary rows from available data sources
  type SalaryRow = { label: string; value: string; sublabel?: string };
  const salaryRows: SalaryRow[] = [];

  if (salarios.nacional_2024) {
    const n = salarios.nacional_2024;
    salaryRows.push({ label: 'Mediana Anual', value: n.mediana, sublabel: 'Nacional 2024' });
    salaryRows.push({ label: 'Por Hora', value: n.por_hora_mediana, sublabel: 'Mediana' });
    if (n.percentil_10) salaryRows.push({ label: 'Percentil 10%', value: n.percentil_10, sublabel: 'Entrada' });
    if (n.percentil_90) salaryRows.push({ label: 'Percentil 90%', value: n.percentil_90, sublabel: 'Top earners' });
  }

  if (salarios.texas) {
    const t = salarios.texas;
    salaryRows.push({ label: 'Promedio Anual TX', value: t.promedio_anual, sublabel: 'Texas' });
    salaryRows.push({ label: 'Por Hora TX', value: t.promedio_hora, sublabel: 'Texas' });
    if (t.top_earners) salaryRows.push({ label: 'Top Earners TX', value: t.top_earners, sublabel: 'Texas' });
  }

  // City table rows
  const cityRows = salarios.por_ciudad_texas || [];

  // Real income factors
  const ingresos = salarios.ingresos_reales;
  const factores = ingresos?.factores_adicionales || [];
  const estimado = ingresos?.estimado_realista;

  const estimadoItems: { label: string; value: string }[] = [];
  if (estimado) {
    if (estimado.recien_licenciada) estimadoItems.push({ label: 'Recien licenciado/a', value: estimado.recien_licenciada });
    if (estimado['3_5_años_experiencia']) estimadoItems.push({ label: '3-5 anos experiencia', value: estimado['3_5_años_experiencia'] });
    if (estimado.especialista_o_independiente) estimadoItems.push({ label: 'Especialista / Independiente', value: estimado.especialista_o_independiente });
    if (estimado.dueña_salon) estimadoItems.push({ label: 'Dueno/a de negocio', value: estimado.dueña_salon });
  }

  const hasRightPanel = ingresos && (factores.length > 0 || estimadoItems.length > 0);

  return (
    <section className="py-8" id="salarios">
      {/* Section label */}
      <p className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">
        Potencial de ingresos
      </p>

      {salarios.nota_importante && (
        <div className="mb-6 border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg">
          <p className="text-xs text-amber-900 font-medium">{salarios.nota_importante}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT — salary table */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
            <h2 className="text-lg font-extrabold uppercase text-slate-900">Datos Salariales</h2>
          </div>

          {salaryRows.length > 0 && (
            <table className="w-full mb-6">
              <thead>
                <tr>
                  <th className="text-left text-[10px] font-bold uppercase text-slate-400 pb-3 pr-4">Indicador</th>
                  <th className="text-left text-[10px] font-bold uppercase text-slate-400 pb-3 pr-4">Salario</th>
                  <th className="text-left text-[10px] font-bold uppercase text-slate-400 pb-3">Ambito</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {salaryRows.map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-4 text-xs font-medium text-slate-700">{row.label}</td>
                    <td className="py-3 pr-4 font-mono text-amber-600 font-bold text-sm">{row.value}</td>
                    <td className="py-3 text-xs text-slate-400">{row.sublabel || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* City breakdown */}
          {cityRows.length > 0 && (
            <>
              <p className="text-[10px] font-bold uppercase text-slate-400 mb-3 mt-2">Por Ciudad (Texas)</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-[10px] font-bold uppercase text-slate-400 pb-3 pr-4">Ciudad</th>
                      <th className="text-left text-[10px] font-bold uppercase text-slate-400 pb-3 pr-4">Salario Medio</th>
                      <th className="text-left text-[10px] font-bold uppercase text-slate-400 pb-3">Top Earners</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {cityRows.map((ciudad, index) => (
                      <tr key={index}>
                        <td className="py-2 pr-4 text-xs font-medium text-slate-700">{ciudad.ciudad}</td>
                        <td className="py-2 pr-4 font-mono text-amber-600 font-bold text-sm">{ciudad.salario_medio}</td>
                        <td className="py-2 font-mono text-slate-500 text-xs">{ciudad.top_earners || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {salarios.nacional_2024?.crecimiento_proyectado && (
            <p className="text-xs text-slate-400 mt-4 border-t border-slate-100 pt-4">
              Crecimiento proyectado 2024-2034:{' '}
              <span className="font-bold text-slate-600">{salarios.nacional_2024.crecimiento_proyectado}</span>
            </p>
          )}
        </div>

        {/* RIGHT — real income panel */}
        {hasRightPanel ? (
          <div className="bg-slate-900 p-8 rounded-xl text-white">
            <h2 className="text-lg font-extrabold uppercase mb-2">Ingreso Real</h2>
            {ingresos?.nota && (
              <p className="text-slate-400 text-xs mb-6 leading-relaxed">{ingresos.nota}</p>
            )}

            {factores.length > 0 && (
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase text-slate-500 mb-3">Factores que aumentan tus ingresos</p>
                <ul className="space-y-3">
                  {factores.map((factor, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-amber-500 mt-0.5 shrink-0 font-bold">+</span>
                      <span className="text-slate-400 text-xs leading-relaxed">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {estimadoItems.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-500 mb-3">Expectativas realistas</p>
                <ul className="space-y-3">
                  {estimadoItems.map((item, i) => (
                    <li key={i} className="flex flex-col gap-1 border-b border-white/10 pb-3">
                      <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wide">{item.label}</span>
                      <span className="font-mono text-amber-400 font-bold text-sm">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          /* Fallback right panel when no ingresos_reales data */
          <div className="bg-slate-900 p-8 rounded-xl text-white flex flex-col justify-center">
            <h2 className="text-lg font-extrabold uppercase mb-4">Tu Potencial</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Con la licencia correcta y experiencia en el campo, los profesionales con trayectoria pueden superar significativamente los promedios nacionales.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
