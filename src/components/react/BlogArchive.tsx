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
      {/* Post em Destaque Principal (apenas quando não estiver filtrando) */}
      {!searchTerm && selectedCategory === 'all' && featured && (
        <div className="mb-14">
          <a href={`/blog/${featured.slug || featured.id}`} className="minimal-card block overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-900 relative">
                <img
                  src={featured.img}
                  alt={featured.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">⌖ DESTAQUE PRINCIPAL</span>
                    <span className="text-slate-600">·</span>
                    <span className="category-pill">{featured.categoria}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-white group-hover:text-amber-400 transition leading-snug mb-4">
                    {featured.titulo}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3">
                    {featured.resumo}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                  <span>Ler investigação completa</span>
                  <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      )}

      {/* Barra de Filtro e Busca */}
      <div className="sticky top-20 z-30 bg-[#090a0f]/90 backdrop-blur-md border-y border-white/5 py-4 px-2 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
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
              placeholder="Buscar por tema ou país..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-full py-2 px-4 pl-10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition"
            />
            <i className="ph-bold ph-magnifying-glass absolute left-3.5 top-2.5 text-slate-400"></i>
          </div>
        </div>
      </div>

      {/* Grade de Dossiês */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.length === 0 ? (
          <div className="col-span-full text-center py-20 text-slate-400">
            <p className="text-lg mb-4">Nenhum dossiê encontrado com esses termos.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
              className="text-amber-400 hover:underline text-sm font-semibold"
            >
              Limpar filtros
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
