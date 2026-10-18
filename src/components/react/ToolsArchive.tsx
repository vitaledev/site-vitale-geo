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

  // Filtragem ultra-rápida combinada por Categoria e Busca Textual
  const filteredTools = useMemo(() => {
    const query = normalizeStr(searchTerm);
    return tools.filter(tool => {
      const matchCat =
        selectedCategory === 'all' ||
        normalizeStr(tool.categoria) === normalizeStr(selectedCategory);

      if (!matchCat) return false;
      if (!query) return true;

      const titleMatch = normalizeStr(tool.titulo).includes(query);
      const descMatch = normalizeStr(tool.desc).includes(query);
      const categoryMatch = normalizeStr(tool.categoria).includes(query);

      return titleMatch || descMatch || categoryMatch;
    });
  }, [tools, selectedCategory, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredTools.length / ITEMS_PER_PAGE));

  // Ajuste automático se página atual exceder o total após filtrar
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // Pedaço paginado exibido na tela
  const paginatedTools = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTools.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredTools, currentPage]);

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
      <div className="sticky top-20 z-30 bg-[#F5F2EB]/95 backdrop-blur-md border-y border-[#0A192F]/10 py-3 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          
          {/* Lado Esquerdo: Seletor de Categorias em Hover */}
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
                className={`filter-tab group/btn ${selectedCategory !== 'all' ? 'active' : ''}`}
                title="Filtrar instrumentos por categoria"
              >
                <i className={getCategoryIcon(selectedCategory)}></i>
                <span className="font-medium">
                  {selectedCategory === 'all' ? 'Categorias' : selectedCategory}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  selectedCategory !== 'all' ? 'bg-white/20 text-white font-bold' : 'bg-white/10 text-slate-700'
                }`}>
                  {selectedCategory === 'all' ? categoryStats.total : (categoryStats.counts[selectedCategory] || 0)}
                </span>
                <i className={`ph-bold ph-caret-down text-[11px] opacity-70 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Menu Dropdown Suspenso no Hover */}
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 max-h-[65vh] overflow-y-auto z-50 p-2 rounded-2xl bg-white/98 backdrop-blur-xl border border-[#0A192F]/15 shadow-[0_20px_50px_rgba(10,25,47,0.12)] animate-in fade-in duration-150">
                  <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-[#53647C] border-b border-[#0A192F]/10 flex items-center justify-between">
                    <span>Filtrar Instrumentos</span>
                    <span>{categoryStats.categories.length - 1} áreas</span>
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

            {/* Botão rápido para resetar categoria se alguma estiver ativa */}
            {selectedCategory !== 'all' && (
              <button
                type="button"
                onClick={() => handleCategorySelect('all')}
                title="Mostrar todas as categorias"
                className="text-[11px] text-[#53647C] hover:text-[#0A192F] px-2.5 py-1.5 rounded-full bg-white hover:bg-white/80 border border-[#0A192F]/10 transition flex items-center gap-1 shadow-sm"
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
              className="w-full bg-white border border-[#0A192F]/15 rounded-full py-2 px-3.5 pl-9 pr-8 text-xs sm:text-sm text-[#0A192F] placeholder-[#53647C]/70 focus:outline-none focus:border-[#C8102E] transition shadow-sm"
            />
            <i className="ph-bold ph-magnifying-glass absolute left-3 top-2.5 text-[#53647C] text-xs pointer-events-none"></i>
            {searchTerm ? (
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setCurrentPage(1); searchInputRef.current?.focus(); }}
                className="absolute right-2.5 top-2 text-[#53647C] hover:text-[#0A192F] p-0.5 rounded-full transition"
                title="Limpar busca"
              >
                <i className="ph-bold ph-x text-xs"></i>
              </button>
            ) : (
              <span className="hidden sm:inline-block absolute right-3 top-2.5 text-[10px] font-mono text-[#53647C] border border-[#0A192F]/10 px-1.5 py-0.2 rounded">
                /
              </span>
            )}
          </div>
        </div>

        {/* Linha de Filtros Ativos */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between gap-2 mt-2.5 pt-2 border-t border-[#0A192F]/10 text-[11px] text-[#53647C] font-mono">
            <div className="flex items-center gap-2">
              {selectedCategory !== 'all' && (
                <span className="text-[#C8102E] font-semibold">
                  {selectedCategory}
                </span>
              )}
              {searchTerm && (
                <span className="text-[#C8102E] font-semibold">
                  Busca: &ldquo;{searchTerm}&rdquo;
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-[#53647C] hover:text-[#C8102E] transition flex items-center gap-1 text-[11px]"
            >
              <i className="ph-bold ph-x"></i>
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Grade de Ferramentas / Simuladores (6 itens padrão) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedTools.length === 0 ? (
          <div className="col-span-full text-center py-16 text-[#53647C] bg-white rounded-2xl border border-[#0A192F]/10 p-8 shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#0A192F]/5 text-[#0A192F] flex items-center justify-center mb-3">
              <i className="ph-bold ph-compass text-2xl"></i>
            </div>
            <h3 className="text-base font-heading font-semibold text-[#0A192F] mb-1">
              Nenhuma ferramenta localizada
            </h3>
            <p className="text-xs sm:text-sm text-[#53647C] max-w-md mx-auto mb-5">
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
                    <div className="aspect-[16/10] overflow-hidden bg-[#EDE8DF] relative">
                      <img
                        src={tool.cover}
                        alt={tool.titulo}
                        loading="lazy"
                        decoding="async"
                        width="640"
                        height="400"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent pointer-events-none"></div>

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
                          className="category-pill hover:border-[#C8102E]/40 hover:text-white transition flex items-center gap-1.5"
                        >
                          <i className={getCategoryIcon(tool.categoria)}></i>
                          <span>{tool.categoria}</span>
                        </button>
                      </div>

                      {/* Badge da Ferramenta no Topo Direito */}
                      {tool.badge && (
                        <div className="absolute top-3 right-3 z-10">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0A192F]/85 text-white border border-white/10 backdrop-blur-sm">
                            {tool.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : null}

                  <div className="p-5">
                    <h2 className="text-base sm:text-lg font-heading text-[#0A192F] group-hover:text-[#C8102E] transition mb-2 leading-snug font-semibold">
                      {tool.titulo}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#53647C] line-clamp-2 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 text-xs font-semibold text-[#0A192F] flex items-center gap-1 group-hover:text-[#C8102E] transition">
                  Acessar simulador <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition duration-150"></i>
                </div>
              </a>
            </article>
          ))
        )}
      </div>

      {/* Controles de Paginação Centralizados e Limpos */}
      {totalPages > 1 && (
        <nav aria-label="Navegação entre páginas de ferramentas" className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-[#0A192F]/10">
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
