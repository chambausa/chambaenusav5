'use client';

interface Mistake {
  error: string;
  por_que_importa: string;
  solucion: string;
}

interface CommonMistakesProps {
  mistakes: {
    ai_generated?: boolean;
    items: Mistake[];
  };
}

export function CommonMistakes({ mistakes }: CommonMistakesProps) {
  return (
    <section className="py-8" id="errores-comunes">
      <p className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">
        Errores que cuestan tiempo y dinero
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {mistakes.items.map((mistake, index) => {
          const badge = `Error ${String(index + 1).padStart(2, '0')}`;
          return (
            <div
              key={index}
              className="bg-white p-4 rounded border-t-2 border-red-500"
            >
              <span className="text-[10px] font-bold text-slate-400 uppercase">{badge}</span>
              <p className="text-xs font-bold mt-2 leading-tight text-slate-900">
                {mistake.error}
              </p>
              <p className="text-[10px] text-slate-400 mt-2 leading-snug">
                {mistake.solucion}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
