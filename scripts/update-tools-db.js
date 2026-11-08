import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const PASTA_RAIZ = path.resolve(path.dirname(__filename), '..');

// 1. Atualizar src/data/tools.ts
const toolsTsPath = path.join(PASTA_RAIZ, 'src/data/tools.ts');
let toolsTs = fs.readFileSync(toolsTsPath, 'utf8');

const tsItem = `  {
    id: "que-horas-sao",
    titulo: "Que Horas São no Mundo? (Conversor por País)",
    desc: "Descubra que horas são em qualquer país do mundo em tempo real, veja a diferença de fuso para Brasília e simule reuniões.",
    icon: "ph-bold ph-globe-hemisphere-east",
    cover: "/assets/img/ferramentas/que-horas-sao.svg",
    link: "/ferramentas/que-horas-sao/",
    categoria: "Tempo & Fusos",
    badge: "198 PAÍSES",
    tags: ["que horas sao", "horario mundial", "fuso horario", "conversor de horas", "relogio mundial", "diferenca de horario", "japao", "estados unidos", "portugal", "alemanha", "paises"]
  },
`;

if (!toolsTs.includes('"que-horas-sao"')) {
  if (toolsTs.includes('id: "calculadora-fuso"')) {
    toolsTs = toolsTs.replace(/(\s*\{\s*id:\s*"calculadora-fuso")/, '\n' + tsItem + '$1');
    fs.writeFileSync(toolsTsPath, toolsTs, 'utf8');
    console.log('src/data/tools.ts atualizado com sucesso!');
  }
} else {
  console.log('src/data/tools.ts já possui que-horas-sao');
}

// 2. Atualizar assets/js/tools.js
const toolsJsPath = path.join(PASTA_RAIZ, 'assets/js/tools.js');
let toolsJs = fs.readFileSync(toolsJsPath, 'utf8');

const jsItem = `    {
        titulo: "Que Horas São no Mundo? (Conversor por País)",
        desc: "Descubra que horas são em qualquer país do mundo em tempo real, veja a diferença de fuso para Brasília e simule reuniões.",
        icon: "ph-bold ph-globe-hemisphere-east",
        cover: "/assets/img/ferramentas/que-horas-sao.svg",
        link: "/ferramentas/que-horas-sao/"
    },
`;

if (!toolsJs.includes('/ferramentas/que-horas-sao/')) {
  toolsJs = toolsJs.replace(/(\s*\{\s*titulo:\s*"Fuso Horário Global")/, '\n' + jsItem + '$1');
  fs.writeFileSync(toolsJsPath, toolsJs, 'utf8');
  console.log('assets/js/tools.js atualizado com sucesso!');
} else {
  console.log('assets/js/tools.js já possui que-horas-sao');
}
