import React, { useState, useMemo, useRef, useEffect } from 'react';

interface PostItem {
  id: string;
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  img: string;
  tempoLeitura?: string;
  destaque?: boolean;
}

interface Props {
  posts: PostItem[];
}

const categoryIcons: Record<string, string> = {
  all: 'ph-bold ph-squares-four',
  'geopolítica': 'ph-bold ph-globe',
  fronteiras: 'ph-bold ph-compass',
  curiosidades: 'ph-bold ph-lightbulb',
  'história': 'ph-bold ph-scroll',
  geografia: 'ph-bold ph-mountains',
  rankings: 'ph-bold ph-chart-bar',
  enclaves: 'ph-bold ph-map-pin',
  megaprojetos: 'ph-bold ph-buildings',
  cartografia: 'ph-bold ph-map-trifold',
  urbanismo: 'ph-bold ph-buildings',
};

const getCategoryIcon = (cat: string) => {
  const normalized = cat.toLowerCase().trim();
  return categoryIcons[normalized] || 'ph-bold ph-tag';
};

export default function HomeBlogFilter({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const categoryStats = useMemo(() => {
    const counts: Record<string, number> = {};
    posts.forEach(p => {
      if (p.categoria) {
        counts[p.categoria] = (counts[p.categoria] || 0) + 1;
      }
    });
    const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    return {
      counts,
      categories: sorted,
      total: posts.length,
    };
  }, [posts]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const curatedPosts = useMemo(
    () => [...posts].sort((a, b) => Number(Boolean(b.destaque)) - Number(Boolean(a.destaque))),
    [posts],
  );

  const filtered = activeCategory === 'all'
    ? curatedPosts.slice(0, 6)
    : curatedPosts.filter(p => p.categoria.toLowerCase() === activeCategory.toLowerCase()).slice(0, 6);

  return (
    <div>
      {/* Barra de Filtro Minimalista com Seletor de Categoria em Hover */}
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
          aria-label="Ver todos os posts recentes"
        >
          <i className="ph-bold ph-squares-four"></i> Todos
        </button>

        {/* Seletor Compacto em Hover para Categorias */}
        <div 
          ref={dropdownRef}
          className="relative inline-flex items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            onClick={() => setIsDropdownOpen(prev => !prev)}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            className={`filter-tab ${activeCategory !== 'all' ? 'active' : ''}`}
          >
            <i className={getCategoryIcon(activeCategory)}></i>
            <span>{activeCategory === 'all' ? 'Categorias' : activeCategory}</span>
            {activeCategory !== 'all' && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-mono font-bold">
                {categoryStats.counts[activeCategory] || 0}
              </span>
            )}
            <i className={`ph-bold ph-caret-down text-[11px] opacity-70 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
          </button>

          {/* Menu Dropdown Revelado sob Hover */}
          {isDropdownOpen && (
            <div 
              className="absolute left-0 top-full mt-2 w-72 max-h-[60vh] overflow-y-auto z-50 p-2 rounded-2xl bg-white/98 backdrop-blur-xl border border-[#0A192F]/15 shadow-[0_20px_50px_rgba(10,25,47,0.12)] animate-in fade-in duration-150"
            >
              <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-[#53647C] border-b border-[#0A192F]/10 flex items-center justify-between">
                <span>Filtrar por Tema</span>
                <span>{categoryStats.categories.length} temas</span>
              </div>

              <div className="py-1 space-y-0.5">
                <button
                  onClick={() => { setActiveCategory('all'); setIsDropdownOpen(false); }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-left transition ${
                    activeCategory === 'all'
                      ? 'bg-[#0A192F] text-white font-semibold'
                      : 'text-[#1F334E] hover:bg-[#0A192F]/5 hover:text-[#0A192F]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <i className="ph-bold ph-squares-four text-[#C8102E]"></i>
                    Todos os temas
                  </span>
                  <span className="text-[11px] font-mono text-[#53647C]">{categoryStats.total}</span>
                </button>

                {categoryStats.categories.map(cat => {
                  const count = categoryStats.counts[cat] || 0;
                  const isSelected = activeCategory.toLowerCase() === cat.toLowerCase();
                  return (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setIsDropdownOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-left transition ${
                        isSelected
                          ? 'bg-[#C8102E]/10 text-[#C8102E] font-semibold border border-[#C8102E]/20'
                          : 'text-[#1F334E] hover:bg-[#0A192F]/5 hover:text-[#0A192F]'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <i className={`${getCategoryIcon(cat)} ${isSelected ? 'text-[#C8102E]' : 'text-[#53647C]'}`}></i>
                        <span className="truncate">{cat}</span>
                      </span>
                      <span className="text-[11px] font-mono text-[#53647C] ml-2">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Grade de Cards Minimalistas e Arejados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-12 text-[#53647C] bg-white rounded-xl border border-[#0A192F]/10">
            <i className="ph-duotone ph-compass text-3xl mb-2 block text-[#C8102E]/60"></i>
            <p className="text-sm font-medium">Nenhum post nesta categoria no momento.</p>
          </div>
        ) : (
          filtered.map((post, index) => (
            <article
              key={post.id || post.slug}
              className="minimal-card animate-card-fade flex flex-col h-full group overflow-hidden"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <a href={`/blog/${post.slug || post.id}/`} className="flex flex-col h-full">
                {/* Imagem Documental Limpa */}
                <div className="aspect-[16/10] overflow-hidden bg-[#EDE8DF] relative">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent pointer-events-none"></div>

                  <div className="absolute top-3 left-3">
                    <span className="category-pill">{post.categoria}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-[#53647C] mb-2 font-mono">
                    <span>{post.data.split('-')[0].trim()}</span>
                    <span>{post.tempoLeitura || '5 min'}</span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-heading text-[#0A192F] group-hover:text-[#C8102E] transition leading-snug mb-2 font-semibold">
                    {post.titulo}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#53647C] line-clamp-2 leading-relaxed flex-grow">
                    {post.resumo}
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-[#0A192F]/10 text-xs font-semibold text-[#C8102E] flex items-center gap-1 group-hover:text-[#9b0b21]">
                    Ler post <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition duration-150"></i>
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
