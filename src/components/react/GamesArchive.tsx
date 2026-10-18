import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { GameItem } from '../../data/games';

interface Props {
  games: GameItem[];
}

const ITEMS_PER_PAGE = 6; // Quantidade padrão e fixa por página para manter o carregamento leve

const categoryIcons: Record<string, string> = {
  all: 'ph-bold ph-squares-four',
  'mapa mudo & localização': 'ph-bold ph-crosshair',
  'fronteiras & território': 'ph-bold ph-map-trifold',
  'símbolos & capitais': 'ph-bold ph-flag-banner',
  'estatísticas & dados': 'ph-bold ph-scales',
  'quiz & geopolítica': 'ph-bold ph-brain',
};

const getCategoryIcon = (cat: string) => {
  const normalized = cat.toLowerCase().trim();
  return categoryIcons[normalized] || 'ph-bold ph-game-controller';
};

const normalizeStr = (str: string) =>
  str ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim() : '';

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

export default function GamesArchive({ games }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const gridAnchorRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sincronização inicial com Query Params da URL (ex: ?cat=fronteiras&p=2)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get('cat');
    const pageParam = params.get('p');
    const queryParam = params.get('q');
    
    if (catParam && catParam !== 'all') setSelectedCategory(catParam);
    if (queryParam) setSearchTerm(queryParam);
    if (pageParam && !isNaN(Number(pageParam))) {
      const p = Math.max(1, parseInt(pageParam, 10));
      setCurrentPage(p);
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

  // Estatísticas de categorias calculadas dinamicamente
  const categoryStats = useMemo(() => {
    const counts: Record<string, number> = {};
    games.forEach(g => {
      if (g.categoria) {
        counts[g.categoria] = (counts[g.categoria] || 0) + 1;
      }
    });
    const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    return {
      counts,
      categories: ['all', ...sorted],
      total: games.length,
    };
  }, [games]);

  // Controle de Hover com debounce de 180ms para evitar fechamento acidental
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

  // Fechar dropdown ao clicar fora
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

  // Atalho de teclado '/' para focar na busca rapidamente
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current && !['INPUT', 'TEXTAREA'].includes((document.activeElement?.tagName || ''))) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        if (isDropdownOpen) setIsDropdownOpen(false);
        if (searchTerm) setSearchTerm('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDropdownOpen, searchTerm]);

  // Filtragem combinada: Categoria + Termo de Busca (normalizado anti-acentos)
  const filteredGames = useMemo(() => {
    const normalizedQuery = normalizeStr(searchTerm);
    return games.filter(game => {
      const matchesCategory =
        selectedCategory === 'all' ||
        normalizeStr(game.categoria) === normalizeStr(selectedCategory);

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const titleMatch = normalizeStr(game.titulo).includes(normalizedQuery);
      const descMatch = normalizeStr(game.desc).includes(normalizedQuery);
      const catMatch = normalizeStr(game.categoria).includes(normalizedQuery);
      const badgeMatch = game.badge ? normalizeStr(game.badge).includes(normalizedQuery) : false;
      const tagsMatch = game.tags ? game.tags.some(tag => normalizeStr(tag).includes(normalizedQuery)) : false;

      return titleMatch || descMatch || catMatch || badgeMatch || tagsMatch;
    });
  }, [games, selectedCategory, searchTerm]);

  // Total de páginas com quantidade fixa
  const totalPages = Math.ceil(filteredGames.length / ITEMS_PER_PAGE) || 1;

  // Ajusta a página caso a filtragem reduza a quantidade de páginas
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const paginatedGames = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredGames.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredGames, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (gridAnchorRef.current) {
      const yOffset = -100;
      const element = gridAnchorRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setCurrentPage(1);
  };

  const hasActiveFilters = selectedCategory !== 'all' || searchTerm.trim().length > 0;

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setCurrentPage(1);
    setIsDropdownOpen(false);
    searchInputRef.current?.focus();
  };

  return (
    <div ref={gridAnchorRef}>
      {/* Barra de Filtro e Busca com Hover Dropdown */}
      <div className="sticky top-20 z-30 bg-[#07090e]/95 backdrop-blur-md border-y border-white/[0.06] py-3 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          
          {/* Lado Esquerdo: Seletor de Categorias em Hover (Anti-Poluição Visual) */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
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
                className={`filter-tab group/btn ${selectedCategory !== 'all' ? 'active !bg-emerald-400 !text-slate-950 !border-emerald-400' : ''}`}
                title="Filtrar desafios por categoria"
              >
                <i className={getCategoryIcon(selectedCategory)}></i>
                <span className="font-medium">
                  {selectedCategory === 'all' ? 'Categorias' : selectedCategory}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  selectedCategory !== 'all' ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-slate-300'
                }`}>
                  {selectedCategory === 'all' ? categoryStats.total : (categoryStats.counts[selectedCategory] || 0)}
                </span>
                <i className={`ph-bold ph-caret-down text-[11px] opacity-70 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Menu Dropdown Suspenso no Hover */}
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 max-h-[65vh] overflow-y-auto z-50 p-2 rounded-2xl bg-[#0b0e17]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] animate-in fade-in duration-150">
                  <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-white/5 flex items-center justify-between">
                    <span>Filtrar Desafios</span>
                    <span>{categoryStats.categories.length - 1} modalidades</span>
                  </div>

                  <div className="py-1 space-y-0.5">
                    <button
                      type="button"
                      onClick={() => handleCategorySelect('all')}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-left transition ${
                        selectedCategory === 'all'
                          ? 'bg-emerald-400/15 text-emerald-300 font-semibold border border-emerald-400/25'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <i className="ph-bold ph-squares-four text-emerald-400"></i>
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
                              ? 'bg-emerald-400/15 text-emerald-300 font-semibold border border-emerald-400/25'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <i className={`${getCategoryIcon(cat)} ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`}></i>
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

            {/* Botão rápido para resetar categoria se alguma estiver ativa */}
            {selectedCategory !== 'all' && (
              <button
                type="button"
                onClick={() => handleCategorySelect('all')}
                title="Mostrar todas as categorias"
                className="text-[11px] text-slate-400 hover:text-white px-2.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/5 transition flex items-center gap-1"
              >
                <i className="ph-bold ph-x"></i>
                <span>Todas</span>
              </button>
            )}
          </div>

          {/* Lado Direito: Campo de Busca com Botão Limpar e Atalho */}
          <div className="relative w-full sm:w-80">
            <label htmlFor="search-games" className="sr-only">Buscar jogos e desafios</label>
            <input
              ref={searchInputRef}
              id="search-games"
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Buscar jogo (bandeiras, capitais, quiz)..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-full py-2 px-3.5 pl-9 pr-8 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/30 transition"
            />
            <i className="ph-bold ph-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs pointer-events-none"></i>
            {searchTerm ? (
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setCurrentPage(1); searchInputRef.current?.focus(); }}
                className="absolute right-2.5 top-2 text-slate-400 hover:text-white p-0.5 rounded-full transition"
                title="Limpar busca"
              >
                <i className="ph-bold ph-x text-xs"></i>
              </button>
            ) : (
              <span className="hidden sm:inline-block absolute right-3 top-2.5 text-[10px] font-mono text-slate-500 border border-white/10 px-1.5 py-0.2 rounded">
                /
              </span>
            )}
          </div>
        </div>

        {/* Linha de Filtros Ativos (Apenas quando houver filtro ou busca) */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between gap-2 mt-2.5 pt-2 border-t border-white/[0.03] text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              {selectedCategory !== 'all' && (
                <span className="text-emerald-400">
                  {selectedCategory}
                </span>
              )}
              {searchTerm && (
                <span className="text-amber-300">
                  Busca: &ldquo;{searchTerm}&rdquo;
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-slate-400 hover:text-emerald-300 transition flex items-center gap-1 text-[11px]"
            >
              <i className="ph-bold ph-x"></i>
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Grade de Desafios Cartográficos (6 itens padrão) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedGames.length === 0 ? (
          <div className="col-span-full text-center py-16 text-slate-400 bg-white/[0.02] rounded-2xl border border-white/5 p-8">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-3">
              <i className="ph-bold ph-game-controller text-2xl"></i>
            </div>
            <h3 className="text-base font-heading font-semibold text-white mb-1">
              Nenhum desafio localizado
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-5">
              Não encontramos nenhum jogo correspondente aos filtros atuais. Tente buscar por outros termos como &ldquo;bandeiras&rdquo;, &ldquo;capitais&rdquo; ou &ldquo;fronteiras&rdquo;.
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="btn-clean-secondary text-xs inline-flex items-center gap-2"
            >
              <i className="ph-bold ph-arrow-counter-clockwise"></i>
              Restaurar catálogo completo
            </button>
          </div>
        ) : (
          paginatedGames.map((game, index) => (
            <article
              key={game.id || game.link}
              className="editorial-card minimal-card group overflow-hidden flex flex-col justify-between h-full animate-card-fade"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <a href={game.link} className="flex flex-col h-full justify-between">
                <div>
                  {game.cover ? (
                    <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                      <img
                        src={game.cover}
                        alt={game.titulo}
                        loading="lazy"
                        decoding="async"
                        width="640"
                        height="400"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>

                      {/* Pill de Categoria Clicável no Topo Esquerdo */}
                      <div className="absolute top-3 left-3 z-10">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleCategorySelect(game.categoria);
                          }}
                          title={`Filtrar por ${game.categoria}`}
                          className="category-pill text-emerald-300 border-emerald-400/30 bg-emerald-950/85 hover:bg-emerald-900 transition flex items-center gap-1.5"
                        >
                          <i className={getCategoryIcon(game.categoria)}></i>
                          <span>{game.categoria}</span>
                        </button>
                      </div>

                      {/* Badge do Desafio no Topo Direito */}
                      {game.badge && (
                        <div className="absolute top-3 right-3 z-10">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/60 text-slate-300 border border-white/10 backdrop-blur-sm">
                            {game.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : null}

                  <div className="p-5">
                    <h2 className="text-base sm:text-lg font-heading text-white group-hover:text-emerald-400 transition mb-2 leading-snug font-semibold">
                      {game.titulo}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {game.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:text-emerald-300 transition">
                  Iniciar desafio <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition duration-150"></i>
                </div>
              </a>
            </article>
          ))
        )}
      </div>

      {/* Controles de Paginação Centralizados e Limpos */}
      {totalPages > 1 && (
        <nav aria-label="Navegação entre páginas de desafios" className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-white/[0.06]">
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
                    isActive ? 'active !bg-emerald-400 !text-slate-950 !font-bold !border-emerald-400 shadow-lg shadow-emerald-400/20' : ''
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
