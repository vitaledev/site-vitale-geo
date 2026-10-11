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
    { id: 'all', label: 'Todos', icon: 'ph-bold ph-squares-four' },
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
      {/* Abas de Filtro Minimalistas */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
            aria-label={`Filtrar por ${cat.label}`}
          >
            <i className={cat.icon}></i> {cat.label}
          </button>
        ))}
      </div>

      {/* Grade de Cards Minimalistas e Arejados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-12 text-slate-400 bg-white/[0.02] rounded-xl border border-white/5">
            <i className="ph-duotone ph-compass text-3xl mb-2 block text-amber-400/60"></i>
            <p className="text-sm font-medium">Nenhum dossiê nesta categoria no momento.</p>
          </div>
        ) : (
          filtered.map((post, index) => (
            <article
              key={post.id || post.slug}
              className="minimal-card carto-corner-frame animate-card-fade flex flex-col h-full group overflow-hidden"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <a href={`/blog/${post.slug || post.id}`} className="flex flex-col h-full">
                {/* Imagem Documental Limpa */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img
                    src={post.img}
                    alt={post.titulo}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/img/blog/etiopia-sem-mar.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                  <div className="absolute top-3 left-3">
                    <span className="category-pill">{post.categoria}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span>{post.data.split('-')[0].trim()}</span>
                    <span>{post.tempoLeitura?.toUpperCase() || '5 MIN'}</span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-heading text-white group-hover:text-amber-400 transition leading-snug mb-2 font-semibold">
                    {post.titulo}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed flex-grow">
                    {post.resumo}
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-white/[0.04] text-xs font-semibold text-amber-400 flex items-center gap-1 group-hover:text-amber-300">
                    Ler dossiê <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition duration-150"></i>
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
