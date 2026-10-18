import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { VideoItem } from '../../data/videos';

interface Props {
  videosLongos: VideoItem[];
  videosShorts: VideoItem[];
}

const ITEMS_PER_PAGE = 12; // Lote ideal de itens no DOM para manter 60fps constante

// Gerador inteligente de números de página
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

export default function VideosArchive({ videosLongos, videosShorts }: Props) {
  const [activeTab, setActiveTab] = useState<'all' | 'long' | 'short'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [modalVideo, setModalVideo] = useState<{ id: string; title: string; type: 'long' | 'short' } | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const gridAnchorRef = useRef<HTMLDivElement>(null);

  // Normalização do catálogo com metadados estruturados
  const allVideos = useMemo(() => {
    const list: Array<VideoItem & { type: 'long' | 'short' }> = [];
    videosLongos.forEach(v => list.push({ ...v, type: 'long' }));
    videosShorts.forEach(v => list.push({ ...v, type: 'short' }));
    return list;
  }, [videosLongos, videosShorts]);

  // Sincronização inicial com Query Params da URL (ex: ?tab=long&q=panama&p=2)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    const queryParam = params.get('q');
    const pageParam = params.get('p');

    if (tabParam === 'long' || tabParam === 'short' || tabParam === 'all') {
      setActiveTab(tabParam);
    }
    if (queryParam) setSearchTerm(queryParam);
    if (pageParam && !isNaN(Number(pageParam))) {
      setCurrentPage(Math.max(1, parseInt(pageParam, 10)));
    }
  }, []);

  // Atualizar URL silenciosamente sem recarregar a tela
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);

    if (activeTab !== 'all') params.set('tab', activeTab);
    else params.delete('tab');

    if (searchTerm.trim()) params.set('q', searchTerm.trim());
    else params.delete('q');

    if (currentPage > 1) params.set('p', String(currentPage));
    else params.delete('p');

    const newQuery = params.toString();
    const newUrl = `${window.location.pathname}${newQuery ? `?${newQuery}` : ''}`;
    window.history.replaceState({}, '', newUrl);
  }, [activeTab, searchTerm, currentPage]);

  // Filtragem combinada por Aba e Termo de Busca
  const filteredVideos = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return allVideos.filter(video => {
      const matchTab = activeTab === 'all' || video.type === activeTab;
      const matchSearch = !term || video.titulo.toLowerCase().includes(term);
      return matchTab && matchSearch;
    });
  }, [allVideos, activeTab, searchTerm]);

  // Vídeo de destaque fixo (Hero Facade) retirado do topo
  const heroVideo = videosLongos[0];

  // Cálculo de Paginação em Lotes
  const totalPages = Math.max(1, Math.ceil(filteredVideos.length / ITEMS_PER_PAGE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const paginatedVideos = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredVideos.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredVideos, currentPage]);

  const handleTabChange = (tab: 'all' | 'long' | 'short') => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setActiveTab('all');
    setSearchTerm('');
    setCurrentPage(1);
    searchInputRef.current?.focus();
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (gridAnchorRef.current) {
      const yOffset = -90;
      const element = gridAnchorRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Gerenciamento de Modal sob demanda (zero iframe fantasma no background)
  const openModal = (id: string, title: string, type: 'long' | 'short') => {
    setModalVideo({ id, title, type });
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setModalVideo(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div>
      {/* CAMADA 1: HERO FACADE DO VÍDEO PRINCIPAL */}
      {heroVideo && !searchTerm && activeTab !== 'short' && currentPage === 1 && (
        <section className="mb-12">
          <div className="bg-white border border-[#0A192F]/12 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Área do Player / Facade */}
              <div className="lg:col-span-8 aspect-video bg-[#0A192F] relative overflow-hidden group">
                {isHeroPlaying ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${heroVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                    title={heroVideo.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div
                    onClick={() => setIsHeroPlaying(true)}
                    className="w-full h-full relative cursor-pointer"
                    title="Assistir documentário em destaque"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${heroVideo.id}/maxresdefault.jpg`}
                      alt={heroVideo.titulo}
                      loading="eager"
                      fetchPriority="high"
                      width="1280"
                      height="720"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-[#0A192F]/20 to-transparent"></div>

                    {/* Botão de Play */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C8102E] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#9b0b21] transition duration-300">
                        <i className="ph-fill ph-play text-2xl sm:text-3xl ml-1"></i>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Informações Editoriais do Hero */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-[#C8102E]/10 text-[#C8102E] border border-[#C8102E]/20">
                      Documentário em Destaque
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0A192F] mb-4 leading-snug">
                    {heroVideo.titulo}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#53647C] leading-relaxed mb-6">
                    Investigação cartográfica e geopolítica detalhada.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#0A192F]/10">
                  {!isHeroPlaying ? (
                    <button
                      onClick={() => setIsHeroPlaying(true)}
                      className="px-4 py-2.5 rounded-full bg-[#0A192F] hover:bg-[#C8102E] text-white font-semibold text-xs transition duration-200 flex items-center gap-2 shadow-sm"
                    >
                      <i className="ph-fill ph-play text-sm"></i> Assistir Agora
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsHeroPlaying(false)}
                      className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#0A192F] font-medium text-xs transition duration-200 flex items-center gap-2 border border-[#0A192F]/15"
                    >
                      <i className="ph-bold ph-stop text-sm"></i> Fechar Player
                    </button>
                  )}
                  <a
                    href={heroVideo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#C8102E]/10 hover:bg-[#C8102E]/20 text-[#C8102E] font-medium text-xs transition duration-200 flex items-center gap-1.5 border border-[#C8102E]/20"
                  >
                    <i className="ph-fill ph-youtube-logo text-sm text-[#C8102E]"></i> Ver no YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Âncora de Rolagem Suave */}
      <div ref={gridAnchorRef} className="scroll-mt-28"></div>

      {/* CAMADA 2: PAINEL DE CONTROLE EM CAMADAS */}
      <section className="mb-8">
        <div className="bg-white border border-[#0A192F]/12 rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Seletor de Abas */}
            <div className="flex items-center gap-1 bg-[#0A192F]/[0.04] p-1 rounded-xl border border-[#0A192F]/10 overflow-x-auto scrollbar-none">
              <button
                type="button"
                onClick={() => handleTabChange('all')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-[#0A192F] text-white shadow-sm'
                    : 'text-[#53647C] hover:text-[#0A192F] hover:bg-white/60'
                }`}
              >
                <i className="ph-bold ph-squares-four text-sm"></i>
                Todos os Vídeos
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-[#0A192F]/5 text-[#53647C]'
                }`}>
                  {allVideos.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('long')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'long'
                    ? 'bg-[#0A192F] text-white shadow-sm'
                    : 'text-[#53647C] hover:text-[#0A192F] hover:bg-white/60'
                }`}
              >
                <i className="ph-fill ph-television text-sm"></i>
                Documentários
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  activeTab === 'long' ? 'bg-white/20 text-white' : 'bg-[#0A192F]/5 text-[#53647C]'
                }`}>
                  {videosLongos.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('short')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'short'
                    ? 'bg-[#0A192F] text-white shadow-sm'
                    : 'text-[#53647C] hover:text-[#0A192F] hover:bg-white/60'
                }`}
              >
                <i className="ph-fill ph-lightning text-sm text-[#C8102E]"></i>
                Shorts
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  activeTab === 'short' ? 'bg-white/20 text-white' : 'bg-[#0A192F]/5 text-[#53647C]'
                }`}>
                  {videosShorts.length}
                </span>
              </button>
            </div>

            {/* Campo de Busca Rápida */}
            <div className="relative flex-grow max-w-md">
              <i className="ph-bold ph-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-[#53647C]"></i>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Buscar por país, tema ou palavra..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-9 pr-8 py-2 bg-white border border-[#0A192F]/15 rounded-xl text-xs text-[#0A192F] placeholder-[#53647C]/70 focus:outline-none focus:border-[#C8102E] transition shadow-sm"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#53647C] hover:text-[#0A192F] text-xs"
                >
                  <i className="ph-bold ph-x"></i>
                </button>
              )}
            </div>
          </div>

          {/* Subbarra Limpa */}
          {(activeTab !== 'all' || searchTerm) && (
            <div className="mt-3 pt-2.5 border-t border-[#0A192F]/10 flex items-center justify-between text-xs text-[#53647C]">
              <div>
                {searchTerm && (
                  <span className="text-[#C8102E] bg-[#C8102E]/10 px-2 py-0.5 rounded border border-[#C8102E]/20 text-[11px] font-semibold">
                    Busca: &ldquo;{searchTerm}&rdquo;
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={resetFilters}
                className="text-[#53647C] hover:text-[#C8102E] transition flex items-center gap-1 text-[11px]"
              >
                <i className="ph-bold ph-x"></i>
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CAMADA 3: GRADE DE VÍDEOS EM LOTES */}
      <section className="mb-12">
        {paginatedVideos.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#0A192F]/10 p-8 shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#0A192F]/5 text-[#0A192F] flex items-center justify-center mb-3">
              <i className="ph-bold ph-magnifying-glass text-2xl"></i>
            </div>
            <h3 className="text-base font-heading font-semibold text-[#0A192F] mb-1">
              Nenhum vídeo localizado
            </h3>
            <p className="text-xs sm:text-sm text-[#53647C] max-w-md mx-auto mb-5">
              Não encontramos nenhum vídeo com o termo &ldquo;{searchTerm}&rdquo; nesta categoria.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-4 py-2 rounded-full bg-[#0A192F] hover:bg-[#C8102E] text-white text-xs font-semibold transition shadow-sm"
            >
              Restaurar Catálogo Completo
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-5 ${
              activeTab === 'short'
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
                : activeTab === 'long'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            {paginatedVideos.map((video) => {
              const isShort = video.type === 'short';
              const thumbUrl = isShort
                ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
                : `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

              return (
                <article
                  key={video.id}
                  onClick={() => openModal(video.id, video.titulo, video.type)}
                  className="editorial-card minimal-card group overflow-hidden cursor-pointer flex flex-col justify-between h-full transition-all duration-300 rounded-xl"
                >
                  <div className="flex flex-col h-full">
                    {/* Contêiner da Capa */}
                    <div
                      className={`relative overflow-hidden bg-[#EDE8DF] ${
                        isShort ? 'aspect-[9/16]' : 'aspect-video'
                      }`}
                    >
                      <img
                        src={thumbUrl}
                        alt={video.titulo}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-[#0A192F]/20 to-transparent"></div>

                      {/* Pill de Tipo no Topo */}
                      {isShort && (
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#C8102E] text-white tracking-wider flex items-center gap-1 shadow">
                            <i className="ph-fill ph-lightning"></i> SHORT
                          </span>
                        </div>
                      )}

                      {/* Botão de Play em Hover */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition">
                        <div className="w-10 h-10 rounded-full bg-white text-[#C8102E] flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                          <i className="ph-fill ph-play text-base ml-0.5 text-[#C8102E]"></i>
                        </div>
                      </div>
                    </div>

                    {/* Título do Vídeo */}
                    <div className="p-3.5 flex flex-col justify-between flex-grow">
                      <h3
                        className={`font-heading font-semibold text-[#0A192F] group-hover:text-[#C8102E] transition leading-snug ${
                          isShort ? 'text-xs line-clamp-3' : 'text-sm line-clamp-2'
                        }`}
                      >
                        {video.titulo}
                      </h3>
                      <div className="mt-3 pt-2 border-t border-[#0A192F]/10 flex items-center justify-between text-[11px] text-[#53647C] font-mono">
                        <span>VitaleGeo</span>
                        <span className="text-[#C8102E] group-hover:translate-x-0.5 transition flex items-center gap-1 font-semibold">
                          Assistir <i className="ph-bold ph-arrow-right text-[10px]"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* CAMADA 4: PAGINADOR INTELIGENTE */}
      {totalPages > 1 && (
        <section className="flex items-center justify-center gap-2 py-8 border-t border-[#0A192F]/10 text-xs">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-nav-btn"
          >
            <i className="ph-bold ph-caret-left"></i> Anterior
          </button>

          <div className="flex items-center gap-1">
            {getPageNumbers(currentPage, totalPages).map((p, idx) => {
              if (p === '...') {
                return (
                  <span key={`elip-${idx}`} className="px-2 text-[#53647C] font-mono">
                    …
                  </span>
                );
              }
              const pageNum = p as number;
              return (
                <button
                  key={`p-${pageNum}`}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  className={`pagination-num-btn ${
                    currentPage === pageNum ? 'active !bg-[#0A192F] !text-white !font-bold !border-[#0A192F] shadow-md' : ''
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
          >
            Próxima <i className="ph-bold ph-caret-right"></i>
          </button>
        </section>
      )}

      {/* CAMADA 5: MODAL IMERSIVO SOB DEMANDA */}
      {modalVideo && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex flex-col justify-center items-center p-4">
          <div
            className={`w-full bg-[#0A192F] border border-white/10 shadow-2xl relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
              modalVideo.type === 'short'
                ? 'max-w-sm h-[85vh] aspect-[9/16]'
                : 'max-w-4xl aspect-video'
            }`}
          >
            {/* Barra Superior do Modal */}
            <div className="flex justify-between items-center px-4 py-3 bg-black/50 border-b border-white/10">
              <div className="flex items-center gap-2 overflow-hidden mr-4">
                <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wider text-white truncate font-heading">
                  {modalVideo.title}
                </span>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded hover:bg-white/10 transition"
              >
                Fechar <i className="ph-bold ph-x text-sm"></i>
              </button>
            </div>

            {/* Frame do YouTube */}
            <div className="relative bg-black w-full h-full flex-grow">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${modalVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={modalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Clique no backdrop fecha o modal */}
          <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}
