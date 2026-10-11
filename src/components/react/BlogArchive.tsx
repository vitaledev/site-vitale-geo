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
      {/* Post em Destaque Principal com Moldura de Agrimensor */}
      {!searchTerm && selectedCategory === 'all' && featured && (
        <div className="mb-14">
          <a href={`/blog/${featured.slug || featured.id}`} className="minimal-card carto-corner-frame block overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-900 relative">
                <img
                  src={featured.img}
                  alt={featured.titulo}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/img/blog/etiopia-sem-mar.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden pointer-events-none"></div>
              </div>
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">⌖ DESTAQUE PRINCIPAL</span>
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
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                  <span className="flex items-center gap-1.5">
                    Ler investigação completa <i className="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition"></i>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">{featured.tempoLeitura || '5 MIN'}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      )}

      {/* Barra de Filtro e Busca Cartográfica */}
      <div className="sticky top-20 z-30 bg-[#07090e]/90 backdrop-blur-md border-y border-white/5 py-4 px-2 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat === 'all' ? 'Todos os Dossiês' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por tema, fronteira ou país..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-full py-2.5 px-4 pl-10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/30 transition"
            />
            <i className="ph-bold ph-magnifying-glass absolute left-3.5 top-3 text-slate-400"></i>
          </div>
        </div>
      </div>

      {/* Grade de Dossiês com Shapes e Animações */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.length === 0 ? (
          <div className="col-span-full text-center py-20 text-slate-400 bg-white/[0.02] rounded-2xl border border-white/5">
            <i className="ph-duotone ph-map-pin-line text-4xl mb-3 block text-amber-400/60"></i>
            <p className="text-lg font-medium text-white mb-2">Nenhum dossiê localizado com esses critérios.</p>
            <p className="text-sm text-slate-400 mb-6">Tente buscar por termos mais amplos ou redefinir as categorias.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
              className="btn-clean-secondary text-xs"
            >
              Limpar filtros de busca
            </button>
          </div>
        ) : (
          list.map((post, index) => (
            <article
              key={post.id || post.slug}
              className="minimal-card carto-corner-frame animate-card-fade flex flex-col h-full group overflow-hidden"
              style={{ animationDelay: `${index * 35}ms` }}
            >
              <a href={`/blog/${post.slug || post.id}`} className="flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img
                    src={post.img}
                    alt={post.titulo}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/img/blog/etiopia-sem-mar.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="category-pill">{post.categoria}</span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-black/80 backdrop-blur text-slate-300 border border-white/10">
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
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">VITALEGEO</span>
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
