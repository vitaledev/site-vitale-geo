import { execSync } from 'node:child_process';

/**
 * Script de Automação de Deploy & Push para o VitaleGeo
 * Executa compilação Astro, valida 0 erros, comita alterações pendentes e envia para origin/main (GitHub Pages).
 */

function run(command, options = {}) {
  try {
    return execSync(command, { stdio: 'pipe', encoding: 'utf-8', ...options }).trim();
  } catch (error) {
    const stderr = error.stderr ? error.stderr.toString() : '';
    const stdout = error.stdout ? error.stdout.toString() : '';
    throw new Error(`Falha ao executar [${command}]:\n${stderr || stdout || error.message}`);
  }
}

console.log('🚀 [VitaleGeo] Iniciando esteira de validação e deploy...');

// 1. Validar compilação Astro
console.log('📦 1/4 Validando build do Astro...');
try {
  run('npx astro build');
  console.log('   ✅ Build compilado com 0 erros.');
} catch (err) {
  console.error('❌ Erro de compilação! O deploy foi abortado:\n', err.message);
  process.exit(1);
}

// 2. Verificar alterações no Git
console.log('🔍 2/4 Verificando status do Git...');
const status = run('git status --porcelain');
const customMsg = process.argv.slice(2).join(' ').trim();
const commitMsg = customMsg || `feat(site): atualizacao automatica em ${new Date().toISOString().replace('T', ' ').substring(0, 19)}`;

if (status) {
  console.log('📝 3/4 Alterações detectadas. Criando commit...');
  run('git add .');
  run(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);
  console.log(`   ✅ Commit registrado: "${commitMsg}"`);
} else {
  console.log('   ℹ️ Nenhuma alteração pendente de commit no disco.');
}

// 3. Verificar se há commits locais à frente da origin/main
console.log('🌐 4/4 Verificando sincronização com o GitHub (origin/main)...');
try {
  const unpushed = run('git log origin/main..HEAD --oneline');
  if (unpushed) {
    console.log('   📤 Enviando commits para o GitHub...');
    const pushOutput = run('git push origin main');
    console.log('   ✅ Git push concluído com sucesso!');
    console.log(pushOutput);
    console.log('\n🎉 [VitaleGeo] Deploy disparado com sucesso no GitHub Actions!');
    console.log('   O GitHub Pages atualizará o site em https://www.vitalegeo.com.br/ em instantes.\n');
  } else {
    console.log('   ✅ O repositório local já está 100% sincronizado com origin/main no GitHub.');
  }
} catch (err) {
  console.error('❌ Erro ao enviar para o GitHub:\n', err.message);
  process.exit(1);
}
