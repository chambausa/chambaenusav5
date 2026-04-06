'use client';

interface OfficialLink {
  nombre: string;
  url: string;
  descripcion: string;
}

interface OfficialLinksProps {
  links: {
    ai_generated?: boolean;
    items: OfficialLink[];
  };
}

export function OfficialLinks({ links }: OfficialLinksProps) {
  return (
    <section className="py-8" id="enlaces-oficiales">
      <p className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">
        Recursos oficiales verificados
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {links.items.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 text-[10px] font-bold uppercase text-center rounded border border-transparent hover:border-amber-500 transition-all text-slate-700 hover:text-amber-600 leading-snug"
            title={link.descripcion}
          >
            <span className="block text-amber-500 font-black text-xs mb-1">
              {String(index + 1).padStart(2, '0')}
            </span>
            {link.nombre}
          </a>
        ))}
      </div>
    </section>
  );
}
