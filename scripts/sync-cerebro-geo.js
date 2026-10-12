/**
 * SINCRONIZADOR AUTOMÁTICO DO CÉREBRO GEOGRÁFICO
 * Executado via `npm run cerebro`
 */

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🧠 [VitaleGeo] Iniciando Sincronização do Cérebro Geográfico Mestre...');

try {
  const pythonCmd = process.platform === 'win32' ? 'python' : 'python3';
  const scriptPath = path.join(rootDir, 'scripts', 'compilar_cerebro_geo.py');
  
  const stdout = execSync(`${pythonCmd} "${scriptPath}"`, {
    cwd: rootDir,
    encoding: 'utf-8',
    stdio: 'inherit'
  });

  console.log('\n✨ Sincronização e compilação do CerebroGeo finalizadas com sucesso!');
} catch (error) {
  console.error('\n❌ Erro ao compilar CerebroGeo:', error.message);
  process.exit(1);
}
