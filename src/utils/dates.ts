const monthMap: Record<string, number> = {
  jan: 0, fev: 1, mar: 2, abr: 3, mai: 4, jun: 5,
  jul: 6, ago: 7, set: 8, out: 9, nov: 10, dez: 11
};

export function parsePostDate(dateStr: string): number {
  if (!dateStr) return 0;
  const clean = dateStr.toLowerCase().trim();
  const match = clean.match(/^(\d{1,2})\s+([a-z]{3})\s+(\d{4})(?:\s*-\s*(\d{1,2}):(\d{2}))?/);
  if (!match) return 0;
  const day = parseInt(match[1], 10);
  const month = monthMap[match[2]] ?? 0;
  const year = parseInt(match[3], 10);
  const hours = match[4] ? parseInt(match[4], 10) : 0;
  const minutes = match[5] ? parseInt(match[5], 10) : 0;
  return new Date(year, month, day, hours, minutes).getTime();
}

export function toIsoDate(dateStr: string): string {
  if (!dateStr) return new Date().toISOString();
  const clean = dateStr.toLowerCase().trim();
  const match = clean.match(/^(\d{1,2})\s+([a-z]{3})\s+(\d{4})(?:\s*-\s*(\d{1,2}):(\d{2}))?/);
  if (!match) return new Date().toISOString();
  const day = match[1].padStart(2, '0');
  const monthIdx = (monthMap[match[2]] ?? 0) + 1;
  const month = String(monthIdx).padStart(2, '0');
  const year = match[3];
  const hours = match[4] ? match[4].padStart(2, '0') : '12';
  const minutes = match[5] ? match[5].padStart(2, '0') : '00';
  return `${year}-${month}-${day}T${hours}:${minutes}:00-03:00`;
}

export function parseReadingTimeIso(tempoLeitura?: string): string {
  if (!tempoLeitura) return 'PT5M';
  const match = tempoLeitura.match(/(\d+)/);
  const mins = match ? parseInt(match[1], 10) : 5;
  return `PT${Math.max(1, mins)}M`;
}
