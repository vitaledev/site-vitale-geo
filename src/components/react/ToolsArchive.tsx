import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { ToolItem } from '../../data/tools';

interface Props {
  tools: ToolItem[];
}

const ITEMS_PER_PAGE = 6; // Quantidade padrão e fixa por página para manter o carregamento leve

const categoryIcons: Record<string, string> = {
  all: 'ph-bold ph-squares-four',
  'escala & projeção': 'ph-bold ph-globe-stand',
  'geodésia & rotas': 'ph-bold ph-compass',
  'tempo & fusos': 'ph-bold ph-clock',
  'ciência & pesquisa': 'ph-bold ph-chart-line-up',
};

const getCategoryIcon = (cat: string) => {
  const normalized = cat.toLowerCase().trim();
  return categoryIcons[normalized] || 'ph-bold ph-wrench';
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

export default function ToolsArchive({ tools }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const gridAnchorRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sincronização inicial com Query Params da URL (ex: ?cat=escala&p=2)
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
    tools.forEach(t => {
      if (t.categoria) {
        counts[t.categoria] = (counts[t.categoria] || 0) + 1;
      }
    });
    const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    return {
      counts,
      categories: ['all', ...sorted],
      total: tools.length,
    };
  }, [tools]);

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
  const filteredTools = useMemo(() => {
    const normalizedQuery = normalizeStr(searchTerm);
    return tools.filter(tool => {
      const matchesCategory =
        selectedCategory === 'all' ||
        normalizeStr(tool.categoria) === normalizeStr(selectedCategory);

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const titleMatch = normalizeStr(tool.titulo).includes(normalizedQuery);
      const descMatch = normalizeStr(tool.desc).includes(normalizedQuery);
      const catMatch = normalizeStr(tool.categoria).includes(normalizedQuery);
      const badgeMatch = tool.badge ? normalizeStr(tool.badge).includes(normalizedQuery) : false;
      const tagsMatch = tool.tags ? tool.tags.some(tag => normalizeStr(tag).includes(normalizedQuery)) : false;

      return titleMatch || descMatch || catMatch || badgeMatch || tagsMatch;
    });
  }, [tools, selectedCategory, searchTerm]);

  // Total de páginas com quantidade fixa
  const totalPages = Math.ceil(filteredTools.length / ITEMS_PER_PAGE) || 1;

  // Ajusta a página caso a filtragem reduza a quantidade de páginas
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const paginatedTools = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTools.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredTools, currentPage]);

  const startIndex = filteredTools.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, filteredTools.length);

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
                className={`filter-tab group/btn ${selectedCategory !== 'all' ? 'active !bg-sky-400 !text-slate-950 !border-sky-400' : ''}`}
                title="Filtrar instrumentos por categoria"
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
                    <span>Filtrar Instrumentos</span>
                    <span>{categoryStats.categories.length - 1} áreas</span>
                  </div>

                  <div className="py-1 space-y-0.5">
                    <button
                      type="button"
                      onClick={() => handleCategorySelect('all')}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-left transition ${
                        selectedCategory === 'all'
                          ? 'bg-sky-400/15 text-sky-300 font-semibold border border-sky-400/25'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <i className="ph-bold ph-squares-four text-sky-400"></i>
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
                              ? 'bg-sky-400/15 text-sky-300 font-semibold border border-sky-400/25'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <i className={`${getCategoryIcon(cat)} ${isSelected ? 'text-sky-400' : 'text-slate-500'}`}></i>
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
            <label htmlFor="search-tools" className="sr-only">Buscar ferramentas</label>
            <input
              ref={searchInputRef}
              id="search-tools"
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Buscar ferramenta (escala, fuso, distância)..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-full py-2 px-3.5 pl-9 pr-8 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/30 transition"
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

        {/* Linha de Status de Resultados */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mt-2.5 pt-2 border-t border-white/[0.03] text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2 flex-wrap">
            <span>
              Exibindo <strong className="text-white font-semibold">{startIndex}–{endIndex}</strong> de {filteredTools.length} instrumentos
              {totalPages > 1 && (
                <span className="text-slate-500"> (Página {currentPage} de {totalPages})</span>
              )}
            </span>
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 text-sky-400">
                · {selectedCategory}
              </span>
            )}
            {searchTerm && (
              <span className="inline-flex items-center gap-1 text-amber-300">
                · Busca: &ldquo;{searchTerm}&rdquo;
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-slate-400 hover:text-sky-300 transition flex items-center gap-1 underline underline-offset-2 text-[11px]"
              >
                <i className="ph-bold ph-arrow-counter-clockwise"></i>
                Limpar filtros
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grade de Ferramentas / Simuladores (6 itens padrão) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedTools.length === 0 ? (
          <div className="col-span-full text-center py-16 text-slate-400 bg-white/[0.02] rounded-2xl border border-white/5 p-8">
            <div className="w-12 h-12 mx-auto rounded-full bg-sky-400/10 text-sky-400 flex items-center justify-center mb-3">
              <i className="ph-bold ph-compass text-2xl"></i>
            </div>
            <h3 className="text-base font-heading font-semibold text-white mb-1">
              Nenhuma ferramenta localizada
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-5">
              Não encontramos nenhum instrumento correspondente aos filtros atuais. Tente buscar por outros termos como &ldquo;escala&rdquo;, &ldquo;distância&rdquo; ou &ldquo;mercator&rdquo;.
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
          paginatedTools.map((tool, index) => (
            <article
              key={tool.id || tool.link}
              className="editorial-card minimal-card group overflow-hidden flex flex-col justify-between h-full animate-card-fade"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <a href={tool.link} className="flex flex-col h-full justify-between">
                <div>
                  {tool.cover ? (
                    <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                      <img
                        src={tool.cover}
                        alt={tool.titulo}
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
                            handleCategorySelect(tool.categoria);
                          }}
                          title={`Filtrar por ${tool.categoria}`}
                          className="category-pill text-sky-300 border-sky-400/30 bg-sky-950/85 hover:bg-sky-900 transition flex items-center gap-1.5"
                        >
                          <i className={getCategoryIcon(tool.categoria)}></i>
                          <span>{tool.categoria}</span>
                        </button>
                      </div>

                      {/* Badge da Ferramenta no Topo Direito */}
                      {tool.badge && (
                        <div className="absolute top-3 right-3 z-10">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/60 text-slate-300 border border-white/10 backdrop-blur-sm">
                            {tool.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : null}

                  <div className="p-5">
                    <h2 className="text-base sm:text-lg font-heading text-white group-hover:text-sky-400 transition mb-2 leading-snug font-semibold">
                      {tool.titulo}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 text-xs font-semibold text-sky-400 flex items-center gap-1 group-hover:text-sky-300 transition">
                  Acessar simulador <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition duration-150"></i>
                </div>
              </a>
            </article>
          ))
        )}
      </div>

      {/* Controles de Paginação Centralizados e Limpos */}
      {totalPages > 1 && (
        <nav aria-label="Navegação entre páginas de ferramentas" className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-white/[0.06]">
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
                    isActive ? 'active !bg-sky-400 !text-slate-950 !font-bold !border-sky-400 shadow-lg shadow-sky-400/20' : ''
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
