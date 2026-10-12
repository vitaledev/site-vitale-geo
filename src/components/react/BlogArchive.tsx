import React, { useState, useMemo } from 'react';

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

export default function BlogArchive({ posts }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => {
    const set = new Set(posts.map(p => p.categoria));
    return ['all', ...Array.from(set)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCat = selectedCategory === 'all' || post.categoria.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = !searchTerm || 
        post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.resumo.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [posts, selectedCategory, searchTerm]);

  const featured = posts[0];
  const list = searchTerm || selectedCategory !== 'all' ? filteredPosts : filteredPosts.slice(1);

  return (
    <div>
      {/* Post em Destaque Principal */}
      {!searchTerm && selectedCategory === 'all' && featured && (
        <div className="mb-12">
          <a href={`/blog/${featured.slug || featured.id}`} className="minimal-card block overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-900 relative min-h-[260px] lg:min-h-[340px]">
                <img
                  src={featured.img}
                  alt={featured.titulo}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/img/blog/etiopia-sem-mar.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-4 left-4">
                  <span className="category-pill">{featured.categoria}</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3">
                    <span>Destaque</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{featured.data.split('-')[0].trim()}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-white group-hover:text-amber-400 transition leading-snug mb-3">
                    {featured.titulo}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {featured.resumo}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-semibold text-amber-400">
                  <span className="flex items-center gap-1 group-hover:text-amber-300">
                    Ler investigação <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition duration-150"></i>
                  </span>
                  <span className="text-xs text-slate-400 font-normal">{featured.tempoLeitura || '5 min'}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      )}

      {/* Barra de Filtro e Busca */}
      <div className="sticky top-20 z-30 bg-[#07090e]/95 backdrop-blur-md border-y border-white/[0.06] py-3.5 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
                aria-label={`Filtrar por ${cat === 'all' ? 'Todos' : cat}`}
              >
                {cat === 'all' ? 'Todos' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar dossiê ou país..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-full py-2 px-3.5 pl-9 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 transition"
            />
            <i className="ph-bold ph-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
          </div>
        </div>
      </div>

      {/* Grade de Dossiês */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.length === 0 ? (
          <div className="col-span-full text-center py-16 text-slate-400 bg-white/[0.02] rounded-xl border border-white/5">
            <i className="ph-duotone ph-map-pin-line text-3xl mb-2 block text-amber-400/60"></i>
            <p className="text-base font-medium text-white mb-1">Nenhum dossiê localizado.</p>
            <p className="text-xs text-slate-400 mb-4">Tente buscar por termos mais genéricos.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
              className="btn-clean-secondary text-xs"
            >
              Limpar busca
            </button>
          </div>
        ) : (
          list.map((post, index) => (
            <article
              key={post.id || post.slug}
              className="minimal-card animate-card-fade flex flex-col h-full group overflow-hidden"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <a href={`/blog/${post.slug || post.id}`} className="flex flex-col h-full">
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
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{post.data.split('-')[0].trim()}</span>
                    <span>{post.tempoLeitura || '5 min'}</span>
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
