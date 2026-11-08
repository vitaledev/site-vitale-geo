import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const PASTA_RAIZ = path.resolve(path.dirname(__filename), '..');

// 1. Atualizar calculadora-fuso/index.html
const calcFusoPath = path.join(PASTA_RAIZ, 'ferramentas/calculadora-fuso/index.html');
let calcFuso = fs.readFileSync(calcFusoPath, 'utf8');

const bannerQueHoras = `            <a href="/ferramentas/que-horas-sao/" class="group flex items-center justify-between gap-4 rounded-2xl border border-[#0A192F]/15 bg-white px-4 py-4 mb-3 hover:border-[#C8102E]/50 transition" aria-label="Abrir conversor de horas por país">
                <span class="flex items-center gap-3"><i class="ph-bold ph-globe-hemisphere-east text-2xl text-[#C8102E]"></i><span><strong class="block text-sm text-[#0A192F]">Que horas são em qualquer país do mundo?</strong><span class="block text-xs text-[#53647C] mt-0.5">Consulte os horários oficiais de 198 países e compare com Brasília.</span></span></span>
                <i class="ph-bold ph-arrow-right text-[#53647C] group-hover:text-[#C8102E]"></i>
            </a>\n`;

if (!calcFuso.includes('/ferramentas/que-horas-sao/')) {
  calcFuso = calcFuso.replace('<a href="/ferramentas/horarios-russia/"', bannerQueHoras + '            <a href="/ferramentas/horarios-russia/"');
  fs.writeFileSync(calcFusoPath, calcFuso, 'utf8');
  console.log('calculadora-fuso/index.html atualizado!');
}

// 2. Atualizar horarios-russia/index.html
const russiaPath = path.join(PASTA_RAIZ, 'ferramentas/horarios-russia/index.html');
let russia = fs.readFileSync(russiaPath, 'utf8');

const linkRussia = `        <a href="/ferramentas/que-horas-sao/" class="text-sm font-semibold text-[#0A192F] hover:text-[#C8102E]"><i class="ph-bold ph-globe-hemisphere-east mr-1"></i>Que horas são em outros países?</a>\n`;

if (!russia.includes('/ferramentas/que-horas-sao/')) {
  russia = russia.replace('<a href="/ferramentas/calculadora-fuso/"', linkRussia + '        <a href="/ferramentas/calculadora-fuso/"');
  fs.writeFileSync(russiaPath, russia, 'utf8');
  console.log('horarios-russia/index.html atualizado!');
}
