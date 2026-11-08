import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = 'D:/Dev/vitale-geo';
const templatePath = path.join(ROOT_DIR, '_modelos', 'modelo-post.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');

export function renderPostHtml({
  slug,
  titulo,
  descricao,
  categoria,
  dataTexto,
  dataIso,
  tempoLeitura,
  imagemDestaque,
  legendaImagem,
  conteudoHtml
}) {
  return templateHtml
    .replaceAll('{{TITULO}}', titulo)
    .replaceAll('{{DESCRICAO}}', descricao)
    .replaceAll('{{SLUG}}', slug)
    .replaceAll('{{CATEGORIA}}', categoria)
    .replaceAll('{{DATA}}', dataTexto)
    .replaceAll('{{DATA_ISO}}', dataIso)
    .replaceAll('{{TEMPO_LEITURA}}', tempoLeitura)
    .replaceAll('{{IMAGEM_DESTAQUE}}', imagemDestaque)
    .replaceAll('{{LEGENDA_IMAGEM}}', legendaImagem)
    .replaceAll('{{CONTEUDO}}', conteudoHtml);
}
