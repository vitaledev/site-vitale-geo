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
}

interface Props {
  posts: PostItem[];
}

const ITEMS_PER_PAGE = 12; // Quantidade padrão e fixa por camada/página para carregamento leve e veloz

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
  chokepoints: 'ph-bold ph-anchor',
  urbanismo: 'ph-bold ph-buildings',
};

const getCategoryIcon = (cat: string) => {
  const normalized = cat.toLowerCase().trim();
  return categoryIcons[normalized] || 'ph-bold ph-tag';
};

// Gerador inteligente de páginas com elipses
const getPageNumbers = (current: number, total: number) => {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    return [1, 2, 3, 4, '...', total];
  }
  if (current >= total - 2) {
    return [1, '...', total - 3, total - 2, total - 1, total];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
};

export default function BlogArchive({ posts }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const gridAnchorRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sincronização inicial com Query Params da URL (ex: ?cat=geopolitica&p=2&q=termo)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get('cat');
    const pageParam = params.get('p');
    const queryParam = params.get('q');

    if (catParam && catParam !== 'all') setSelectedCategory(catParam);
    if (queryParam) setSearchTerm(queryParam);
    if (pageParam && !isNaN(Number(pageParam))) {
      setCurrentPage(Math.max(1, parseInt(pageParam, 10)));
    }
  }, []);

  // Atualizar URL silenciosamente sem recarregar a tela
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);

    if (selectedCategory !== 'all') params.set('cat', selectedCategory);
    else params.delete('cat');

    if (currentPage > 1) params.set('p', String(currentPage));
    else params.delete('p');

    if (searchTerm.trim()) params.set('q', searchTerm.trim());
    else params.delete('q');

    const newQuery = params.toString();
    const newUrl = `${window.location.pathname}${newQuery ? `?${newQuery}` : ''}`;
    window.history.replaceState({}, '', newUrl);
  }, [selectedCategory, currentPage, searchTerm]);

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
      categories: ['all', ...sorted],
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

  const filteredPosts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return posts.filter(post => {
      const matchesCat = selectedCategory === 'all' || post.categoria.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = !term || 
        post.titulo.toLowerCase().includes(term) ||
        post.resumo.toLowerCase().includes(term);
      return matchesCat && matchesSearch;
    });
  }, [posts, selectedCategory, searchTerm]);

  const isDefaultView = !searchTerm && selectedCategory === 'all';
  const featured = posts[0];

  // Na visualização padrão, o primeiro post é o Hero Destaque na página 1.
  // Os demais compõem a grade paginada.
  // Em buscas ou categorias filtradas, todos os itens filtrados compõem a grade paginada.
  const baseList = useMemo(() => {
    if (isDefaultView) {
      return filteredPosts.slice(1);
    }
    return filteredPosts;
  }, [isDefaultView, filteredPosts]);

  const totalPages = Math.max(1, Math.ceil(baseList.length / ITEMS_PER_PAGE));

  // Ajuste se a página atual ultrapassar o total de páginas
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return baseList.slice(start, start + ITEMS_PER_PAGE);
  }, [baseList, currentPage]);

  const scrollToGrid = () => {
    if (gridAnchorRef.current) {
      const yOffset = -90; // offset para compensar a navbar fixa e sticky
      const element = gridAnchorRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    scrollToGrid();
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setIsDropdownOpen(false);
    scrollToGrid();
  };

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setCurrentPage(1);
    scrollToGrid();
  };

  return (
    <div>
      {/* Camada 1: Post em Destaque Principal (Exibido apenas na Página 1 da visualização padrão) */}
      {isDefaultView && currentPage === 1 && featured && (
        <div className="mb-12">
          <a href={`/blog/${featured.slug || featured.id}/`} className="minimal-card block overflow-hidden group">
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

      {/* Âncora de Rolagem Inteligente */}
      <div ref={gridAnchorRef} className="scroll-mt-28"></div>

      {/* Camada 2: Barra de Filtros e Busca com Seletor em Hover */}
      <div className="sticky top-20 z-30 bg-[#07090e]/95 backdrop-blur-md border-y border-white/[0.06] py-3 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Seletor Compacto em Hover (Anti-Poluição Visual) */}
          <div 
            ref={dropdownRef}
            className="relative flex items-center gap-2 w-full md:w-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setIsDropdownOpen(prev => !prev)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              className={`filter-tab group/btn ${
                selectedCategory !== 'all' ? 'active' : ''
              }`}
            >
              <i className={getCategoryIcon(selectedCategory)}></i>
              <span className="font-medium">
                {selectedCategory === 'all' ? 'Categorias' : selectedCategory}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">
                {selectedCategory === 'all' ? categoryStats.total : (categoryStats.counts[selectedCategory] || 0)}
              </span>
              <i className={`ph-bold ph-caret-down text-[11px] opacity-70 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {selectedCategory !== 'all' && (
              <button
                type="button"
                onClick={() => handleCategorySelect('all')}
                title="Mostrar todas as categorias"
                className="text-[11px] text-slate-400 hover:text-white px-2.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/5 transition flex items-center gap-1"
              >
                <i className="ph-bold ph-x"></i>
                <span>Todos</span>
              </button>
            )}

            {/* Menu Suspenso em Hover */}
            {isDropdownOpen && (
              <div 
                className="absolute left-0 top-full mt-2 w-72 sm:w-80 max-h-[65vh] overflow-y-auto z-50 p-2 rounded-2xl bg-[#0b0e17]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] animate-in fade-in duration-150"
              >
                <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-white/5 flex items-center justify-between">
                  <span>Filtrar por Tema</span>
                  <span>{categoryStats.categories.length - 1} categorias</span>
                </div>

                <div className="py-1 space-y-0.5">
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('all')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-left transition ${
                      selectedCategory === 'all'
                        ? 'bg-white/10 text-white font-semibold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <i className="ph-bold ph-squares-four text-amber-400"></i>
                      Todas as categorias
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{categoryStats.total}</span>
                  </button>

                  {categoryStats.categories.filter(c => c !== 'all').map(cat => {
                    const count = categoryStats.counts[cat] || 0;
                    const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleCategorySelect(cat)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-left transition ${
                          isSelected
                            ? 'bg-amber-400/15 text-amber-300 font-semibold border border-amber-400/20'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2 truncate">
                          <i className={`${getCategoryIcon(cat)} ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}></i>
                          <span className="truncate">{cat}</span>
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 ml-2">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="relative w-full md:w-72">
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Buscar post ou país..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-full py-2 px-3.5 pl-9 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 transition"
            />
            <i className="ph-bold ph-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
          </div>
        </div>

        {/* Indicador Sutil de Filtro Ativo (Anti-Fluff: só visível quando houver filtro) */}
        {(selectedCategory !== 'all' || searchTerm.trim()) && (
          <div className="flex items-center justify-between text-xs pt-3 mt-3 border-t border-white/5">
            <div className="flex items-center gap-2 truncate">
              <span className="text-slate-400">Filtro ativo:</span>
              {selectedCategory !== 'all' && (
                <span className="text-amber-300 font-medium">
                  {selectedCategory}
                </span>
              )}
              {searchTerm.trim() && (
                <span className="text-amber-300 font-medium">
                  Busca: &ldquo;{searchTerm}&rdquo;
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-slate-400 hover:text-amber-300 transition flex items-center gap-1 text-[11px] flex-shrink-0"
            >
              <i className="ph-bold ph-x"></i>
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Camada 3: Grade Paginada de Posts (12 itens por camada para máxima fluidez) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.length === 0 ? (
          <div className="col-span-full text-center py-16 text-slate-400 bg-white/[0.02] rounded-2xl border border-white/5 p-8">
            <i className="ph-duotone ph-map-pin-line text-3xl mb-2 block text-amber-400/60"></i>
            <p className="text-base font-heading font-semibold text-white mb-1">Nenhum post localizado.</p>
            <p className="text-xs text-slate-400 mb-4">Tente buscar por termos mais genéricos.</p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="btn-clean-secondary text-xs inline-flex items-center gap-1.5"
            >
              <i className="ph-bold ph-arrow-counter-clockwise"></i>
              Limpar filtros
            </button>
          </div>
        ) : (
          paginatedPosts.map((post, index) => (
            <article
              key={post.id || post.slug}
              className="minimal-card animate-card-fade flex flex-col h-full group overflow-hidden"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <a href={`/blog/${post.slug || post.id}/`} className="flex flex-col h-full">
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

                  <div className="absolute top-3 left-3 z-10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCategorySelect(post.categoria);
                      }}
                      title={`Filtrar por ${post.categoria}`}
                      className="category-pill hover:border-amber-400/40 hover:text-amber-300 transition flex items-center gap-1"
                    >
                      <i className={getCategoryIcon(post.categoria)}></i>
                      <span>{post.categoria}</span>
                    </button>
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
                    Ler post <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition duration-150"></i>
                  </div>
                </div>
              </a>
            </article>
          ))
        )}
      </div>

      {/* Camada 4: Controles de Paginação Editorial Leve */}
      {totalPages > 1 && (
        <nav aria-label="Navegação entre páginas de posts" className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-nav-btn"
            aria-label="Página anterior"
          >
            <i className="ph-bold ph-caret-left"></i>
            <span className="hidden xs:inline">Anterior</span>
          </button>

          <div className="flex items-center gap-1">
            {getPageNumbers(currentPage, totalPages).map((p, idx) => {
              if (p === '...') {
                return (
                  <span key={`ellipsis-${idx}`} className="px-2 text-slate-600 font-mono text-xs select-none">
                    ...
                  </span>
                );
              }
              const pageNum = p as number;
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`pagination-num-btn ${
                    isActive ? 'active !bg-amber-400 !text-slate-950 !font-bold !border-amber-400 shadow-lg shadow-amber-400/20' : ''
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-nav-btn"
            aria-label="Próxima página"
          >
            <span className="hidden xs:inline">Próxima</span>
            <i className="ph-bold ph-caret-right"></i>
          </button>
        </nav>
      )}
    </div>
  );
}
