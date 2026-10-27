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

const ITEMS_PER_PAGE = 12; // Quantidade padrão e fixa por camada/página para carregamento leve e veloz
type BodySearchIndex = { slugs: string[]; words: Record<string, number[]> };

const normalizeSearch = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('pt-BR');

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
  const [bodyIndex, setBodyIndex] = useState<BodySearchIndex | null>(null);
  const [isBodyIndexLoading, setIsBodyIndexLoading] = useState(false);
  const bodyIndexRequestedRef = useRef(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const gridAnchorRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!searchTerm.trim() || bodyIndex || bodyIndexRequestedRef.current) return;
    bodyIndexRequestedRef.current = true;
    setIsBodyIndexLoading(true);

    fetch('/search-index.json')
      .then(response => {
        if (!response.ok) throw new Error('Não foi possível carregar o índice de busca.');
        return response.json() as Promise<BodySearchIndex>;
      })
      .then(setBodyIndex)
      .catch(() => setBodyIndex({}))
      .finally(() => setIsBodyIndexLoading(false));
  }, [searchTerm, bodyIndex]);

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
    const term = normalizeSearch(searchTerm.trim());
    const searchTerms = term.match(/[a-z0-9]{3,}/g) || [];
    const bodyIndexBySlug = bodyIndex
      ? new Map(bodyIndex.slugs.map((slug, index) => [slug, index]))
      : null;
    return posts.filter(post => {
      const matchesCat = selectedCategory === 'all' || post.categoria.toLowerCase() === selectedCategory.toLowerCase();
      const bodyMatches = bodyIndexBySlug && searchTerms.length > 0 && searchTerms.every(searchTerm => {
        const indexedSlugs = bodyIndex.words[searchTerm];
        const postIndex = bodyIndexBySlug.get(post.slug);
        return postIndex !== undefined && indexedSlugs?.includes(postIndex);
      });
      const matchesSearch = !term ||
        normalizeSearch(post.titulo).includes(term) ||
        normalizeSearch(post.resumo).includes(term) ||
        Boolean(bodyMatches);
      return matchesCat && matchesSearch;
    });
  }, [posts, selectedCategory, searchTerm, bodyIndex]);

  const isDefaultView = !searchTerm && selectedCategory === 'all';
  const featured = posts[0];

  const baseList = useMemo(() => {
    if (isDefaultView) {
      return filteredPosts.slice(1);
    }
    return filteredPosts;
  }, [isDefaultView, filteredPosts]);

  const totalPages = Math.max(1, Math.ceil(baseList.length / ITEMS_PER_PAGE));

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
      const yOffset = -90;
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
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#EDE8DF] relative min-h-[260px] lg:min-h-[340px]">
                <img
                  src={featured.img}
                  alt={featured.titulo}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/img/blog/etiopia-sem-mar.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-4 left-4">
                  <span className="category-pill">{featured.categoria}</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#C8102E] mb-3 font-mono">
                    <span>Destaque</span>
                    <span className="text-[#0A192F]/30">·</span>
                    <span className="text-[#53647C]">{featured.data.split('-')[0].trim()}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-[#0A192F] group-hover:text-[#C8102E] transition leading-snug mb-3">
                    {featured.titulo}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#53647C] leading-relaxed line-clamp-3">
                    {featured.resumo}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#0A192F]/10 flex items-center justify-between text-xs font-semibold text-[#C8102E]">
                  <span className="flex items-center gap-1 group-hover:text-[#9b0b21]">
                    Ler investigação <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition duration-150"></i>
                  </span>
                  <span className="text-xs text-[#53647C] font-mono font-normal">{featured.tempoLeitura || '5 min'}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      )}

      {/* Âncora de Rolagem Inteligente */}
      <div ref={gridAnchorRef} className="scroll-mt-28"></div>

      {/* Camada 2: Barra de Filtros e Busca com Seletor em Hover */}
      <div className="sticky top-20 z-30 bg-[#F5F2EB]/95 backdrop-blur-md border-y border-[#0A192F]/10 py-3 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Seletor Compacto em Hover */}
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
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white font-mono font-bold">
                {selectedCategory === 'all' ? categoryStats.total : (categoryStats.counts[selectedCategory] || 0)}
              </span>
              <i className={`ph-bold ph-caret-down text-[11px] opacity-70 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {selectedCategory !== 'all' && (
              <button
                type="button"
                onClick={() => handleCategorySelect('all')}
                title="Mostrar todas as categorias"
                className="text-[11px] text-[#53647C] hover:text-[#0A192F] px-2.5 py-1.5 rounded-full bg-white hover:bg-white/80 border border-[#0A192F]/10 transition flex items-center gap-1 shadow-sm"
              >
                <i className="ph-bold ph-x"></i>
                <span>Todos</span>
              </button>
            )}

            {/* Menu Suspenso em Hover */}
            {isDropdownOpen && (
              <div 
                className="absolute left-0 top-full mt-2 w-72 sm:w-80 max-h-[65vh] overflow-y-auto z-50 p-2 rounded-2xl bg-white/98 backdrop-blur-xl border border-[#0A192F]/15 shadow-[0_20px_50px_rgba(10,25,47,0.12)] animate-in fade-in duration-150"
              >
                <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-[#53647C] border-b border-[#0A192F]/10 flex items-center justify-between">
                  <span>Filtrar por Tema</span>
                  <span>{categoryStats.categories.length - 1} categorias</span>
                </div>

                <div className="py-1 space-y-0.5">
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('all')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-left transition ${
                      selectedCategory === 'all'
                        ? 'bg-[#0A192F] text-white font-semibold'
                        : 'text-[#1F334E] hover:bg-[#0A192F]/5 hover:text-[#0A192F]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <i className="ph-bold ph-squares-four text-[#C8102E]"></i>
                      Todas as categorias
                    </span>
                    <span className="text-[11px] font-mono text-[#53647C]">{categoryStats.total}</span>
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
              className="w-full bg-white border border-[#0A192F]/15 rounded-full py-2 px-3.5 pl-9 text-xs sm:text-sm text-[#0A192F] placeholder-[#53647C]/70 focus:outline-none focus:border-[#C8102E] transition shadow-sm"
            />
            <i className="ph-bold ph-magnifying-glass absolute left-3 top-2.5 text-[#53647C] text-xs"></i>
          </div>
        </div>

        {/* Indicador Sutil de Filtro Ativo */}
        {(selectedCategory !== 'all' || searchTerm.trim()) && (
          <div className="flex items-center justify-between text-xs pt-3 mt-3 border-t border-[#0A192F]/10">
            <div className="flex items-center gap-2 truncate">
              <span className="text-[#53647C]">Filtro ativo:</span>
              {selectedCategory !== 'all' && (
                <span className="text-[#C8102E] font-semibold">
                  {selectedCategory}
                </span>
              )}
              {searchTerm.trim() && (
                <span className="text-[#C8102E] font-semibold">
                  Busca: &ldquo;{searchTerm}&rdquo;
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-[#53647C] hover:text-[#C8102E] transition flex items-center gap-1 text-[11px] flex-shrink-0"
            >
              <i className="ph-bold ph-x"></i>
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Camada 3: Grade Paginada de Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.length === 0 && isBodyIndexLoading ? (
          <div className="col-span-full py-10 text-center text-sm text-[#53647C]" role="status">Buscando nos artigos…</div>
        ) : paginatedPosts.length === 0 ? (
          <div className="col-span-full text-center py-16 text-[#53647C] bg-white rounded-2xl border border-[#0A192F]/10 p-8 shadow-sm">
            <i className="ph-duotone ph-map-pin-line text-3xl mb-2 block text-[#C8102E]/60"></i>
            <p className="text-base font-heading font-semibold text-[#0A192F] mb-1">Nenhum post localizado.</p>
            <p className="text-xs text-[#53647C] mb-4">Tente buscar por termos mais genéricos.</p>
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

                  <div className="absolute top-3 left-3 z-10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCategorySelect(post.categoria);
                      }}
                      title={`Filtrar por ${post.categoria}`}
                      className="category-pill hover:border-[#C8102E]/40 hover:text-white transition flex items-center gap-1"
                    >
                      <i className={getCategoryIcon(post.categoria)}></i>
                      <span>{post.categoria}</span>
                    </button>
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

      {/* Camada 4: Controles de Paginação Editorial Leve */}
      {totalPages > 1 && (
        <nav aria-label="Navegação entre páginas de posts" className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-[#0A192F]/10">
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
                  <span key={`ellipsis-${idx}`} className="px-2 text-[#53647C] font-mono text-xs select-none">
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
                    isActive ? 'active !bg-[#0A192F] !text-white !font-bold !border-[#0A192F] shadow-md' : ''
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
