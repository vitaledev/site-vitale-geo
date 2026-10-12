import paisesData from './paises.json';
import locaisData from './locais.json';
import perguntasData from './perguntas.json';

export interface Pais {
  nome: string;
  nome_oficial: string;
  iso2: string;
  iso3: string;
  capital: string;
  pegadinhas: string[];
  continente: string;
  subregiao: string;
  lat: number;
  lng: number;
  area_km2: number;
  populacao: number;
  fronteiras: string[];
  fato: string;
}

export interface LocalEstrategico {
  nome: string;
  categoria: string;
  lat: number;
  lng: number;
  dica: string;
  fato: string;
}

export interface PerguntaTrivia {
  id: number;
  pergunta: string;
  categoria: string;
  opcoes: string[];
  resposta: number;
  explicacao: string;
  dificuldade: string;
}

export const paises = paisesData as Pais[];
export const locais = locaisData as LocalEstrategico[];
export const perguntas = perguntasData as PerguntaTrivia[];

export const CerebroGeo = {
  paises,
  locais,
  perguntas,
  obterPaisPorIso2(iso2: string) {
    return paises.find(p => p.iso2.toLowerCase() === iso2.toLowerCase());
  },
  obterLocaisPorCategoria(cat: string) {
    return locais.filter(l => l.categoria.toLowerCase().includes(cat.toLowerCase()));
  },
  obterPerguntasPorCategoria(cat: string) {
    return perguntas.filter(q => q.categoria.toLowerCase().includes(cat.toLowerCase()));
  }
};

export default CerebroGeo;
