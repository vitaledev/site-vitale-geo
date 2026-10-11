import React, { useState } from 'react';

interface PostItem {
  id: string;
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  img: string;
  tempoLeitura?: string;
}

interface Props {
  posts: PostItem[];
}

export default function HomeBlogFilter({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Dossiês', icon: 'ph-bold ph-squares-four' },
    { id: 'Fronteiras', label: 'Fronteiras', icon: 'ph-bold ph-compass' },
    { id: 'Geopolítica', label: 'Geopolítica', icon: 'ph-bold ph-globe' },
    { id: 'Curiosidades', label: 'Curiosidades', icon: 'ph-bold ph-lightbulb' },
    { id: 'Anomalias', label: 'Anomalias', icon: 'ph-bold ph-warning-circle' },
  ];

  const filtered = activeCategory === 'all'
    ? posts.slice(0, 6)
    : posts.filter(p => p.categoria.toLowerCase() === activeCategory.toLowerCase()).slice(0, 6);

  return (
    <div>
      {/* Abas de Filtro Interativo com Acabamento Refinado */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
          >
            <i className={cat.icon}></i> {cat.label}
          </button>
        ))}
      </div>

      {/* Grade de Cards com Shapes Cartográficos e Animação */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-16 text-slate-400 bg-white/[0.02] rounded-2xl border border-white/5">
            <i className="ph-duotone ph-compass text-4xl mb-3 block text-amber-400/60"></i>
            <p className="text-base font-medium">Nenhum dossiê catalogado nesta categoria no momento.</p>
          </div>
        ) : (
          filtered.map((post, index) => (
            <article
              key={post.id || post.slug}
              className="minimal-card carto-corner-frame animate-card-fade flex flex-col h-full group overflow-hidden"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <a href={`/blog/${post.slug || post.id}`} className="flex flex-col h-full">
                {/* Imagem com Overlay de Proteção e Metadados Cartográficos */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img
                    src={post.img}
                    alt={post.titulo}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback gracioso caso alguma imagem remota sofra bloqueio
                      (e.target as HTMLImageElement).src = '/assets/img/blog/etiopia-sem-mar.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="category-pill">{post.categoria}</span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-black/80 backdrop-blur text-slate-300 border border-white/10 shadow-sm">
                      {post.tempoLeitura?.toUpperCase() || '5 MIN'}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
                    <span>{post.data.split('-')[0].trim()}</span>
                    <span className="text-amber-400/90 font-semibold tracking-wider">⌖ REGISTRO</span>
                  </div>
                  
                  <h3 className="text-lg font-heading text-white group-hover:text-amber-400 transition leading-snug mb-3 font-semibold">
                    {post.titulo}
                  </h3>
                  
                  <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed flex-grow">
                    {post.resumo}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-slate-400 group-hover:text-white transition flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-amber-400 group-hover:text-amber-300">
                      Ler dossiê <i className="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition duration-200"></i>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">ATLAS // 2026</span>
                  </div>
                </div>
              </a>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
