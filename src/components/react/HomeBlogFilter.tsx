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
      {/* Abas de Filtro Interativo */}
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

      {/* Grade de Cards com Animação */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-12 text-slate-500">
            <i className="ph-duotone ph-magnifying-glass text-3xl mb-2 block text-slate-600"></i>
            Nenhum dossiê encontrado nesta categoria.
          </div>
        ) : (
          filtered.map((post, index) => (
            <article
              key={post.id || post.slug}
              className="minimal-card animate-card-fade flex flex-col h-full group overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <a href={`/blog/${post.slug || post.id}`} className="flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img
                    src={post.img}
                    alt={post.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="category-pill">{post.categoria}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-black/75 backdrop-blur text-slate-300 border border-white/10">
                      {post.tempoLeitura?.toUpperCase() || '5 MIN'}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
                    <span>{post.data.split('-')[0].trim()}</span>
                    <span className="text-amber-400/80">⌖ REGISTRO</span>
                  </div>
                  <h3 className="text-lg font-heading text-white group-hover:text-amber-400 transition leading-snug mb-3 font-semibold">
                    {post.titulo}
                  </h3>
                  <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed flex-grow">
                    {post.resumo}
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-slate-400 group-hover:text-white transition flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      Ler dossiê <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition duration-200"></i>
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">VITALEGEO</span>
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
