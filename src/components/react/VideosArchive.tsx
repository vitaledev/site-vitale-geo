import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { VideoItem } from '../../data/videos';

interface Props {
  videosLongos: VideoItem[];
  videosShorts: VideoItem[];
}

type TabType = 'all' | 'long' | 'short';

interface UnifiedVideo extends VideoItem {
  type: 'long' | 'short';
}

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

const normalizeStr = (str: string) =>
  str ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim() : '';

export default function VideosArchive({ videosLongos, videosShorts }: Props) {
  // Camada 1: Estado da aba ativa
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12); // Padrão leve: 12 itens por camada

  // Camada Hero: Player ativo sob demanda (Facade)
  const [isHeroPlaying, setIsHeroPlaying] = useState<boolean>(false);

  // Camada Modal: Vídeo sendo reproduzido no modal
  const [modalVideo, setModalVideo] = useState<{ id: string; title: string; type: 'long' | 'short' } | null>(null);

  const gridAnchorRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // O primeiro vídeo longo é sempre o Destaque Principal (Hero)
  const heroVideo = videosLongos.length > 0 ? videosLongos[0] : null;

  // Lista unificada para a galeria
  // O Hero video só é excluído da lista se a aba for 'long' ou 'all' e não houver busca
  const allVideos: UnifiedVideo[] = useMemo(() => {
    const longs: UnifiedVideo[] = videosLongos.map((v) => ({ ...v, type: 'long' }));
    const shorts: UnifiedVideo[] = videosShorts.map((v) => ({ ...v, type: 'short' }));
    return [...longs, ...shorts];
  }, [videosLongos, videosShorts]);

  // Sincronização inicial com URL Query Params
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tipo') as TabType;
    const pageParam = params.get('p');
    const queryParam = params.get('q');

    if (tabParam && ['all', 'long', 'short'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
    if (queryParam) {
      setSearchTerm(queryParam);
    }
    if (pageParam && !isNaN(Number(pageParam))) {
      setCurrentPage(Math.max(1, parseInt(pageParam, 10)));
    }
  }, []);

  // Atualizar URL silenciosamente sem recarregar
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);

    if (activeTab !== 'all') params.set('tipo', activeTab);
    else params.delete('tipo');

    if (currentPage > 1) params.set('p', String(currentPage));
    else params.delete('p');

    if (searchTerm.trim()) params.set('q', searchTerm.trim());
    else params.delete('q');

    const newQuery = params.toString();
    const newRelativePath = window.location.pathname + (newQuery ? '?' + newQuery : '');
    window.history.replaceState(null, '', newRelativePath);
  }, [activeTab, currentPage, searchTerm]);

  // Tecla Escape para fechar modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtragem dos vídeos
  const filteredVideos = useMemo(() => {
    let list = allVideos;

    // Filtro por aba
    if (activeTab === 'long') {
      list = list.filter((v) => v.type === 'long');
    } else if (activeTab === 'short') {
      list = list.filter((v) => v.type === 'short');
    }

    // Filtro por termo de busca
    if (searchTerm.trim()) {
      const term = normalizeStr(searchTerm);
      list = list.filter((v) => normalizeStr(v.titulo).includes(term));
    }

    return list;
  }, [allVideos, activeTab, searchTerm]);

  // Paginação em camadas (apenas os itens do lote ativo no DOM)
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage) || 1;
  const paginatedVideos = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredVideos.slice(start, start + itemsPerPage);
  }, [filteredVideos, currentPage, itemsPerPage]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1);
    scrollToGrid();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (p: number) => {
    if (p < 1 || p > totalPages || p === currentPage) return;
    setCurrentPage(p);
    scrollToGrid();
  };

  const scrollToGrid = () => {
    if (gridAnchorRef.current) {
      gridAnchorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const resetFilters = () => {
    setActiveTab('all');
    setSearchTerm('');
    setCurrentPage(1);
    if (searchInputRef.current) searchInputRef.current.value = '';
  };

  const openModal = (id: string, title: string, type: 'long' | 'short') => {
    setModalVideo({ id, title, type });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalVideo(null);
    document.body.style.overflow = 'auto';
  };

  const startIndex = filteredVideos.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, filteredVideos.length);

  return (
    <div className="w-full">
      {/* CAMADA 1: HERO COM FACADE LEVE (Zero Iframes Pesados no Carregamento Inicial) */}
      {heroVideo && (
        <section className="mb-14">
          <div className="bg-[#11131a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Área do Player / Facade */}
              <div className="lg:col-span-8 aspect-video bg-black relative overflow-hidden group">
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
                    title="Clique para assistir ao documentário em destaque"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Botão de Play Pulsante e Ultra Leve */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-20 h-20 rounded-full bg-red-600/30 animate-ping"></span>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-500 transition duration-300">
                          <i className="ph-fill ph-play text-2xl sm:text-3xl ml-1"></i>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                      <span className="bg-black/70 px-2.5 py-1 rounded backdrop-blur border border-white/10 font-mono">
                        Resolução 4K • 16:9
                      </span>
                      <span className="bg-black/70 px-2.5 py-1 rounded backdrop-blur border border-white/10 flex items-center gap-1.5 text-amber-400">
                        <i className="ph-fill ph-sparkle"></i> Clique para Reproduzir
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Informações Editoriais do Hero */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-amber-400/10 text-amber-400 border border-amber-400/20">
                      Documentário em Destaque
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 leading-snug">
                    {heroVideo.titulo}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    Investigação cartográfica e geopolítica detalhada pelo canal oficial VitaleGeo.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                  {!isHeroPlaying ? (
                    <button
                      onClick={() => setIsHeroPlaying(true)}
                      className="px-4 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition duration-200 flex items-center gap-2 shadow-lg shadow-amber-400/10"
                    >
                      <i className="ph-fill ph-play text-sm"></i> Assistir Agora
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsHeroPlaying(false)}
                      className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition duration-200 flex items-center gap-2 border border-white/10"
                    >
                      <i className="ph-bold ph-stop text-sm"></i> Fechar Player
                    </button>
                  )}
                  <a
                    href={heroVideo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-red-600/10 hover:bg-red-600/20 text-red-400 hover:text-red-300 font-medium text-xs transition duration-200 flex items-center gap-1.5 border border-red-500/20"
                  >
                    <i className="ph-fill ph-youtube-logo text-sm text-red-500"></i> Ver no YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Âncora de Rolagem Suave */}
      <div ref={gridAnchorRef} className="scroll-mt-28"></div>

      {/* CAMADA 2: PAINEL DE CONTROLE EM CAMADAS (Abas, Busca e Seletor de Lote) */}
      <section className="mb-8">
        <div className="bg-[#11131a] border border-white/10 rounded-2xl p-4 sm:p-5 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Seletor de Abas (Todos / Documentários / Shorts) */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5 overflow-x-auto scrollbar-none">
              <button
                type="button"
                onClick={() => handleTabChange('all')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="ph-bold ph-squares-four text-sm"></i>
                Todos os Vídeos
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  activeTab === 'all' ? 'bg-slate-950/20 text-slate-950' : 'bg-white/10 text-slate-300'
                }`}>
                  {allVideos.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('long')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'long'
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="ph-fill ph-television text-sm"></i>
                Documentários (16:9)
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  activeTab === 'long' ? 'bg-slate-950/20 text-slate-950' : 'bg-white/10 text-slate-300'
                }`}>
                  {videosLongos.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('short')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'short'
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="ph-fill ph-lightning text-sm text-red-500"></i>
                Shorts (9:16)
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  activeTab === 'short' ? 'bg-slate-950/20 text-slate-950' : 'bg-white/10 text-slate-300'
                }`}>
                  {videosShorts.length}
                </span>
              </button>
            </div>

            {/* Campo de Busca Rápida */}
            <div className="relative flex-grow max-w-md">
              <i className="ph-bold ph-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"></i>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Buscar por país, tema ou palavra..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-9 pr-8 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 transition"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                >
                  <i className="ph-bold ph-x"></i>
                </button>
              )}
            </div>
          </div>

          {/* Subbarra de Status e Filtro de Lote */}
          <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span>
                Exibindo <strong className="text-white font-semibold">{startIndex}–{endIndex}</strong> de {filteredVideos.length} vídeos
                {totalPages > 1 && (
                  <span className="text-slate-500"> (Camada {currentPage} de {totalPages})</span>
                )}
              </span>
              {searchTerm && (
                <span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  Busca: &ldquo;{searchTerm}&rdquo;
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-500">Por camada:</span>
                {[12, 24, 48].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setItemsPerPage(size);
                      setCurrentPage(1);
                    }}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                      itemsPerPage === size
                        ? 'bg-white/15 text-white font-bold'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {(activeTab !== 'all' || searchTerm) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-slate-400 hover:text-amber-300 transition flex items-center gap-1 underline underline-offset-2 text-[11px]"
                >
                  <i className="ph-bold ph-arrow-counter-clockwise"></i>
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CAMADA 3: GRADE DE VÍDEOS EM LOTES (DOM Ultra Leve & Lazy Loading de Imagens) */}
      <section className="mb-12">
        {paginatedVideos.length === 0 ? (
          <div className="text-center py-16 bg-[#11131a] rounded-2xl border border-white/5 p-8">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mb-3">
              <i className="ph-bold ph-magnifying-glass text-2xl"></i>
            </div>
            <h3 className="text-base font-heading font-semibold text-white mb-1">
              Nenhum vídeo localizado
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-5">
              Não encontramos nenhum vídeo com o termo &ldquo;{searchTerm}&rdquo; nesta categoria.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
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
            {paginatedVideos.map((video, idx) => {
              const isShort = video.type === 'short';
              const thumbUrl = isShort
                ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
                : `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

              return (
                <article
                  key={video.id}
                  onClick={() => openModal(video.id, video.titulo, video.type)}
                  className="minimal-card group overflow-hidden cursor-pointer flex flex-col justify-between h-full bg-[#11131a] border border-white/5 hover:border-amber-400/30 transition-all duration-300 rounded-xl"
                >
                  <div className="flex flex-col h-full">
                    {/* Contêiner da Capa com Aspect Ratio Estrito (Zero CLS) */}
                    <div
                      className={`relative overflow-hidden bg-slate-900 ${
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Pill de Tipo no Topo */}
                      <div className="absolute top-2.5 left-2.5 z-10">
                        {isShort ? (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-red-600/90 text-white tracking-wider flex items-center gap-1 shadow">
                            <i className="ph-fill ph-lightning"></i> SHORT
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-black/75 text-amber-400 border border-amber-400/30 backdrop-blur tracking-wider">
                            16:9 4K
                          </span>
                        )}
                      </div>

                      {/* Botão de Play em Hover */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition">
                        <div className="w-10 h-10 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                          <i className="ph-fill ph-play text-base ml-0.5 text-red-600"></i>
                        </div>
                      </div>
                    </div>

                    {/* Título do Vídeo */}
                    <div className="p-3.5 flex flex-col justify-between flex-grow">
                      <h3
                        className={`font-heading font-medium text-white group-hover:text-amber-400 transition leading-snug ${
                          isShort ? 'text-xs line-clamp-3' : 'text-sm line-clamp-2'
                        }`}
                      >
                        {video.titulo}
                      </h3>
                      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                        <span>VitaleGeo</span>
                        <span className="text-amber-400 group-hover:translate-x-0.5 transition flex items-center gap-1">
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

      {/* CAMADA 4: PAGINADOR INTELIGENTE (Troca de Camada Ultra Leve) */}
      {totalPages > 1 && (
        <section className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-2 border-t border-white/5 text-xs">
          <div className="text-slate-400 text-xs">
            Exibindo camada <strong className="text-white">{currentPage}</strong> de {totalPages} ({filteredVideos.length} vídeos no catálogo)
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1"
            >
              <i className="ph-bold ph-caret-left"></i> Anterior
            </button>

            <div className="flex items-center gap-1">
              {getPageNumbers(currentPage, totalPages).map((p, idx) => {
                if (p === '...') {
                  return (
                    <span key={`elip-${idx}`} className="px-2 text-slate-600 font-mono">
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
                    className={`min-w-[32px] h-8 rounded-lg font-mono text-xs transition flex items-center justify-center ${
                      currentPage === pageNum
                        ? 'bg-amber-400 text-slate-950 font-bold shadow'
                        : 'border border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
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
              className="px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1"
            >
              Próxima <i className="ph-bold ph-caret-right"></i>
            </button>
          </div>
        </section>
      )}

      {/* CAMADA 5: MODAL IMERSIVO SOB DEMANDA (Zero Vazamento de Memória) */}
      {modalVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col justify-center items-center p-4">
          <div
            className={`w-full bg-[#11131a] border border-white/10 shadow-2xl relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
              modalVideo.type === 'short'
                ? 'max-w-sm h-[85vh] aspect-[9/16]'
                : 'max-w-4xl aspect-video'
            }`}
          >
            {/* Barra Superior do Modal */}
            <div className="flex justify-between items-center px-4 py-3 bg-black/50 border-b border-white/10">
              <div className="flex items-center gap-2 overflow-hidden mr-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wider text-slate-200 truncate">
                  {modalVideo.title}
                </span>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded hover:bg-white/10 transition"
              >
                Fechar <i className="ph-bold ph-x text-sm"></i>
              </button>
            </div>

            {/* Frame do YouTube que só existe enquanto o modal estiver aberto */}
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
