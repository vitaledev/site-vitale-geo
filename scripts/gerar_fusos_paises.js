import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const PASTA_RAIZ = path.resolve(path.dirname(__filename), '..');

const paisesOriginais = JSON.parse(fs.readFileSync(path.join(PASTA_RAIZ, 'src/data/cerebro-geo/paises.json'), 'utf8'));

// Mapa de ISO2 para [Timezone Principal, Artigo ('no', 'na', 'em', 'nos', 'nas'), Sinônimos extras, Zonas múltiplas se houver]
const TZ_MAP = {
  br: {
    tz: 'America/Sao_Paulo',
    art: 'no',
    syn: ['brasil', 'brazil', 'brasilia', 'sao paulo', 'rio de janeiro'],
    zones: [
      { id: 'America/Sao_Paulo', label: 'Brasília / Sudeste / Sul (UTC-3)' },
      { id: 'America/Manaus', label: 'Manaus / Amazonas (UTC-4)' },
      { id: 'America/Rio_Branco', label: 'Rio Branco / Acre (UTC-5)' },
      { id: 'America/Noronha', label: 'Fernando de Noronha (UTC-2)' }
    ]
  },
  ar: { tz: 'America/Argentina/Buenos_Aires', art: 'na', syn: ['argentina', 'buenos aires'] },
  co: { tz: 'America/Bogota', art: 'na', syn: ['colombia', 'bogota'] },
  pe: { tz: 'America/Lima', art: 'no', syn: ['peru', 'lima'] },
  cl: {
    tz: 'America/Santiago',
    art: 'no',
    syn: ['chile', 'santiago'],
    zones: [
      { id: 'America/Santiago', label: 'Santiago / Continental' },
      { id: 'Pacific/Easter', label: 'Ilha de Páscoa (Rapa Nui)' }
    ]
  },
  ve: { tz: 'America/Caracas', art: 'na', syn: ['venezuela', 'caracas'] },
  ec: {
    tz: 'America/Guayaquil',
    art: 'no',
    syn: ['equador', 'quito', 'guayaquil'],
    zones: [
      { id: 'America/Guayaquil', label: 'Quito / Continental' },
      { id: 'Pacific/Galapagos', label: 'Ilhas Galápagos' }
    ]
  },
  bo: { tz: 'America/La_Paz', art: 'na', syn: ['bolivia', 'la paz', 'sucre'] },
  py: { tz: 'America/Asuncion', art: 'no', syn: ['paraguai', 'assuncao'] },
  uy: { tz: 'America/Montevideo', art: 'no', syn: ['uruguai', 'montevideu'] },
  gy: { tz: 'America/Guyana', art: 'na', syn: ['guiana', 'georgetown'] },
  sr: { tz: 'America/Paramaribo', art: 'no', syn: ['suriname', 'paramaribo'] },
  us: {
    tz: 'America/New_York',
    art: 'nos',
    syn: ['estados unidos', 'eua', 'usa', 'estados unidos da america', 'nova york', 'los angeles', 'miami', 'california', 'texas', 'florida', 'chicago'],
    zones: [
      { id: 'America/New_York', label: 'Nova York / Miami / Costa Leste (Eastern)' },
      { id: 'America/Chicago', label: 'Chicago / Texas (Central)' },
      { id: 'America/Denver', label: 'Denver / Colorado (Mountain)' },
      { id: 'America/Los_Angeles', label: 'Los Angeles / Califórnia / Costa Oeste (Pacific)' },
      { id: 'America/Anchorage', label: 'Anchorage / Alasca' },
      { id: 'Pacific/Honolulu', label: 'Honolulu / Havaí' }
    ]
  },
  ca: {
    tz: 'America/Toronto',
    art: 'no',
    syn: ['canada', 'toronto', 'vancouver', 'montreal', 'ottawa'],
    zones: [
      { id: 'America/Toronto', label: 'Toronto / Montreal (Eastern)' },
      { id: 'America/Vancouver', label: 'Vancouver (Pacific)' },
      { id: 'America/Edmonton', label: 'Edmonton / Calgary (Mountain)' },
      { id: 'America/Winnipeg', label: 'Winnipeg (Central)' },
      { id: 'America/Halifax', label: 'Halifax (Atlantic)' },
      { id: 'America/St_Johns', label: 'St. John\'s (Terra Nova)' }
    ]
  },
  mx: {
    tz: 'America/Mexico_City',
    art: 'no',
    syn: ['mexico', 'cidade do mexico', 'cancun', 'guadalajara'],
    zones: [
      { id: 'America/Mexico_City', label: 'Cidade do México / Central' },
      { id: 'America/Tijuana', label: 'Tijuana / Pacífico' },
      { id: 'America/Mazatlan', label: 'Mazatlán / Montanha' },
      { id: 'America/Cancun', label: 'Cancún / Quintana Roo' }
    ]
  },
  pa: { tz: 'America/Panama', art: 'no', syn: ['panama'] },
  cr: { tz: 'America/Costa_Rica', art: 'na', syn: ['costa rica', 'sao jose'] },
  gt: { tz: 'America/Guatemala', art: 'na', syn: ['guatemala'] },
  hn: { tz: 'America/Tegucigalpa', art: 'em', syn: ['honduras', 'tegucigalpa'] },
  sv: { tz: 'America/El_Salvador', art: 'em', syn: ['el salvador', 'san salvador'] },
  ni: { tz: 'America/Managua', art: 'na', syn: ['nicaragua', 'managua'] },
  bz: { tz: 'America/Belize', art: 'em', syn: ['belize', 'belmopan'] },
  cu: { tz: 'America/Havana', art: 'em', syn: ['cuba', 'havana'] },
  do: { tz: 'America/Santo_Domingo', art: 'na', syn: ['republica dominicana', 'santo domingo'] },
  ht: { tz: 'America/Port-au-Prince', art: 'no', syn: ['haiti', 'porto principe'] },
  jm: { tz: 'America/Jamaica', art: 'na', syn: ['jamaica', 'kingston'] },
  tt: { tz: 'America/Port_of_Spain', art: 'em', syn: ['trinidad e tobago'] },
  bs: { tz: 'America/Nassau', art: 'nas', syn: ['bahamas', 'nassau'] },
  bb: { tz: 'America/Barbados', art: 'em', syn: ['barbados', 'bridgetown'] },
  lc: { tz: 'America/St_Lucia', art: 'em', syn: ['santa lucia'] },
  vc: { tz: 'America/St_Vincent', art: 'em', syn: ['sao vicente e granadinas'] },
  gd: { tz: 'America/Grenada', art: 'em', syn: ['granada'] },
  ag: { tz: 'America/Antigua', art: 'em', syn: ['antigua e barbuda'] },
  dm: { tz: 'America/Dominica', art: 'em', syn: ['dominica'] },
  kn: { tz: 'America/St_Kitts', art: 'em', syn: ['sao cristovao e nevis'] },

  // Europa
  pt: {
    tz: 'Europe/Lisbon',
    art: 'em',
    syn: ['portugal', 'lisboa', 'porto', 'madeira', 'acores'],
    zones: [
      { id: 'Europe/Lisbon', label: 'Lisboa / Portugal Continental' },
      { id: 'Atlantic/Madeira', label: 'Funchal / Madeira' },
      { id: 'Atlantic/Azores', label: 'Ponta Delgada / Açores (UTC-1)' }
    ]
  },
  es: {
    tz: 'Europe/Madrid',
    art: 'na',
    syn: ['espanha', 'madri', 'barcelona', 'canarias', 'ibiza'],
    zones: [
      { id: 'Europe/Madrid', label: 'Madri / Barcelona / Península' },
      { id: 'Atlantic/Canary', label: 'Ilhas Canárias (UTC±0)' }
    ]
  },
  fr: { tz: 'Europe/Paris', art: 'na', syn: ['franca', 'paris', 'marselha', 'lyon'] },
  gb: { tz: 'Europe/London', art: 'no', syn: ['reino unido', 'inglaterra', 'londres', 'uk', 'gra bretanha', 'escocia', 'gales', 'irlanda do norte'] },
  ie: { tz: 'Europe/Dublin', art: 'na', syn: ['irlanda', 'dublin'] },
  de: { tz: 'Europe/Berlin', art: 'na', syn: ['alemanha', 'berlim', 'munique', 'frankfurt'] },
  it: { tz: 'Europe/Rome', art: 'na', syn: ['italia', 'roma', 'milao', 'veneza', 'napoles'] },
  ch: { tz: 'Europe/Zurich', art: 'na', syn: ['suica', 'zurique', 'genebra', 'berna'] },
  at: { tz: 'Europe/Vienna', art: 'na', syn: ['austria', 'viena'] },
  be: { tz: 'Europe/Brussels', art: 'na', syn: ['belgica', 'bruxelas'] },
  nl: { tz: 'Europe/Amsterdam', art: 'nos', syn: ['paises baixos', 'holanda', 'amsterdam'] },
  lu: { tz: 'Europe/Luxembourg', art: 'em', syn: ['luxemburgo'] },
  mc: { tz: 'Europe/Monaco', art: 'em', syn: ['monaco'] },
  ad: { tz: 'Europe/Andorra', art: 'em', syn: ['andorra'] },
  li: { tz: 'Europe/Vaduz', art: 'em', syn: ['liechtenstein', 'vaduz'] },
  sm: { tz: 'Europe/San_Marino', art: 'em', syn: ['san marino'] },
  va: { tz: 'Europe/Vatican', art: 'no', syn: ['vaticano', 'santa se'] },
  mt: { tz: 'Europe/Malta', art: 'em', syn: ['malta', 'valletta'] },
  gr: { tz: 'Europe/Athens', art: 'na', syn: ['grecia', 'atenas'] },
  cy: { tz: 'Asia/Nicosia', art: 'em', syn: ['chipre', 'nicosia'] },
  pl: { tz: 'Europe/Warsaw', art: 'na', syn: ['polonia', 'varsovia', 'cracovia'] },
  cz: { tz: 'Europe/Prague', art: 'na', syn: ['republica tcheca', 'tchequia', 'praga'] },
  sk: { tz: 'Europe/Bratislava', art: 'na', syn: ['eslovaquia', 'bratislava'] },
  hu: { tz: 'Europe/Budapest', art: 'na', syn: ['hungria', 'budapeste'] },
  ro: { tz: 'Europe/Bucharest', art: 'na', syn: ['romenia', 'bucareste'] },
  bg: { tz: 'Europe/Sofia', art: 'na', syn: ['bulgaria', 'sofia'] },
  no: { tz: 'Europe/Oslo', art: 'na', syn: ['noruega', 'oslo'] },
  se: { tz: 'Europe/Stockholm', art: 'na', syn: ['suecia', 'estocolmo'] },
  fi: { tz: 'Europe/Helsinki', art: 'na', syn: ['finlandia', 'helsinque'] },
  dk: {
    tz: 'Europe/Copenhagen',
    art: 'na',
    syn: ['dinamarca', 'copenhague', 'groenlandia'],
    zones: [
      { id: 'Europe/Copenhagen', label: 'Copenhague / Dinamarca' },
      { id: 'America/Nuuk', label: 'Nuuk / Groenlândia (UTC-2)' },
      { id: 'Atlantic/Faroe', label: 'Tórshavn / Ilhas Faroé (UTC±0)' }
    ]
  },
  is: { tz: 'Atlantic/Reykjavik', art: 'na', syn: ['islandia', 'reykjavik'] },
  ee: { tz: 'Europe/Tallinn', art: 'na', syn: ['estonia', 'tallinn'] },
  lv: { tz: 'Europe/Riga', art: 'na', syn: ['letonia', 'riga'] },
  lt: { tz: 'Europe/Vilnius', art: 'na', syn: ['lituania', 'vilnius'] },
  ua: { tz: 'Europe/Kyiv', art: 'na', syn: ['ucrania', 'kiev', 'kyiv'] },
  by: { tz: 'Europe/Minsk', art: 'na', syn: ['bielorrussia', 'belarus', 'minsk'] },
  md: { tz: 'Europe/Chisinau', art: 'na', syn: ['moldavia', 'chisinau'] },
  al: { tz: 'Europe/Tirane', art: 'na', syn: ['albania', 'tirana'] },
  mk: { tz: 'Europe/Skopje', art: 'na', syn: ['macedonia do norte', 'skopje'] },
  me: { tz: 'Europe/Podgorica', art: 'em', syn: ['montenegro', 'podgorica'] },
  rs: { tz: 'Europe/Belgrade', art: 'na', syn: ['servia', 'belgrado'] },
  ba: { tz: 'Europe/Sarajevo', art: 'na', syn: ['bosnia', 'sarajevo'] },
  hr: { tz: 'Europe/Zagreb', art: 'na', syn: ['croacia', 'zagreb'] },
  si: { tz: 'Europe/Ljubljana', art: 'na', syn: ['eslovenia', 'liubliana'] },
  xk: { tz: 'Europe/Belgrade', art: 'no', syn: ['kosovo', 'pristina'] },
  ru: {
    tz: 'Europe/Moscow',
    art: 'na',
    syn: ['russia', 'moscou', 'sao petersburgo', 'vladivostok', 'siberia'],
    zones: [
      { id: 'Europe/Moscow', label: 'Moscou / São Petersburgo (MSK UTC+3)' },
      { id: 'Europe/Kaliningrad', label: 'Kaliningrado (UTC+2)' },
      { id: 'Europe/Samara', label: 'Samara (UTC+4)' },
      { id: 'Asia/Yekaterinburg', label: 'Ecaterimburgo / Urais (UTC+5)' },
      { id: 'Asia/Omsk', label: 'Omsk (UTC+6)' },
      { id: 'Asia/Krasnoyarsk', label: 'Krasnoiarsk (UTC+7)' },
      { id: 'Asia/Irkutsk', label: 'Irkutsk / Lago Baikal (UTC+8)' },
      { id: 'Asia/Yakutsk', label: 'Iacutsk (UTC+9)' },
      { id: 'Asia/Vladivostok', label: 'Vladivostok (UTC+10)' },
      { id: 'Asia/Magadan', label: 'Magadan (UTC+11)' },
      { id: 'Asia/Kamchatka', label: 'Petropavlovsk-Kamtchatski (UTC+12)' }
    ]
  },

  // Ásia
  cn: { tz: 'Asia/Shanghai', art: 'na', syn: ['china', 'pequim', 'beijing', 'xangai', 'shanghai', 'cantao'] },
  jp: { tz: 'Asia/Tokyo', art: 'no', syn: ['japao', 'toquio', 'tokyo', 'osaka', 'quioto'] },
  kr: { tz: 'Asia/Seoul', art: 'na', syn: ['coreia do sul', 'seul', 'seoul', 'busan'] },
  kp: { tz: 'Asia/Pyongyang', art: 'na', syn: ['coreia do norte', 'pyongyang'] },
  in: { tz: 'Asia/Kolkata', art: 'na', syn: ['india', 'nova delhi', 'mumbai', 'calcuta', 'bangalore'] },
  pk: { tz: 'Asia/Karachi', art: 'no', syn: ['paquistao', 'islamabad', 'karachi'] },
  id: {
    tz: 'Asia/Jakarta',
    art: 'na',
    syn: ['indonesia', 'jacarta', 'bali'],
    zones: [
      { id: 'Asia/Jakarta', label: 'Jacarta / Java / Sumatra (WIB UTC+7)' },
      { id: 'Asia/Makassar', label: 'Bali / Macassar / Celebes (WITA UTC+8)' },
      { id: 'Asia/Jayapura', label: 'Papua / Jayapura (WIT UTC+9)' }
    ]
  },
  ph: { tz: 'Asia/Manila', art: 'nas', syn: ['filipinas', 'manila'] },
  vn: { tz: 'Asia/Ho_Chi_Minh', art: 'no', syn: ['vietna', 'hanoi', 'ho chi minh'] },
  th: { tz: 'Asia/Bangkok', art: 'na', syn: ['tailandia', 'bangcoc', 'bangkok'] },
  my: { tz: 'Asia/Kuala_Lumpur', art: 'na', syn: ['malasia', 'kuala lumpur'] },
  sg: { tz: 'Asia/Singapore', art: 'em', syn: ['cingapura', 'singapura'] },
  kz: {
    tz: 'Asia/Almaty',
    art: 'no',
    syn: ['cazaquistao', 'astana', 'almaty'],
    zones: [
      { id: 'Asia/Almaty', label: 'Astana / Almaty (UTC+5)' },
      { id: 'Asia/Oral', label: 'Oral / Ocidental (UTC+5)' }
    ]
  },
  uz: { tz: 'Asia/Tashkent', art: 'no', syn: ['uzbequistao', 'tashkent'] },
  tm: { tz: 'Asia/Ashgabat', art: 'no', syn: ['turcomenistao', 'ashgabat'] },
  kg: { tz: 'Asia/Bishkek', art: 'no', syn: ['quirguistao', 'bishkek'] },
  tj: { tz: 'Asia/Dushanbe', art: 'no', syn: ['tadjiquistao', 'dushanbe'] },
  sa: { tz: 'Asia/Riyadh', art: 'na', syn: ['arabia saudita', 'riad', 'mecca'] },
  ir: { tz: 'Asia/Tehran', art: 'no', syn: ['ira', 'teera', 'tehran'] },
  iq: { tz: 'Asia/Baghdad', art: 'no', syn: ['iraque', 'bagda'] },
  tr: { tz: 'Europe/Istanbul', art: 'na', syn: ['turquia', 'ancara', 'istambul'] },
  il: { tz: 'Asia/Jerusalem', art: 'em', syn: ['israel', 'jerusalem', 'tel aviv'] },
  ps: { tz: 'Asia/Gaza', art: 'na', syn: ['palestina', 'gaza', 'cisjordania'] },
  jo: { tz: 'Asia/Amman', art: 'na', syn: ['jordania', 'ama'] },
  lb: { tz: 'Asia/Beirut', art: 'no', syn: ['libano', 'beirute'] },
  sy: { tz: 'Asia/Damascus', art: 'na', syn: ['siria', 'damasco'] },
  ae: { tz: 'Asia/Dubai', art: 'nos', syn: ['emirados arabes', 'emirados arabes unidos', 'dubai', 'abu dhabi', 'uae'] },
  qa: { tz: 'Asia/Qatar', art: 'no', syn: ['catar', 'doha'] },
  kw: { tz: 'Asia/Kuwait', art: 'no', syn: ['kuwait'] },
  om: { tz: 'Asia/Muscat', art: 'em', syn: ['oma', 'mascate'] },
  ye: { tz: 'Asia/Aden', art: 'no', syn: ['iemen', 'sanaa'] },
  bh: { tz: 'Asia/Bahrain', art: 'no', syn: ['bahrein', 'manama'] },
  af: { tz: 'Asia/Kabul', art: 'no', syn: ['afeganistao', 'cabul'] },
  bd: { tz: 'Asia/Dhaka', art: 'em', syn: ['bangladesh', 'daca'] },
  lk: { tz: 'Asia/Colombo', art: 'no', syn: ['sri lanka', 'colombo'] },
  np: { tz: 'Asia/Kathmandu', art: 'no', syn: ['nepal', 'katmandu'] },
  bt: { tz: 'Asia/Thimphu', art: 'no', syn: ['butao', 'timphu'] },
  mv: { tz: 'Indian/Maldives', art: 'nas', syn: ['maldivas', 'male'] },
  mn: { tz: 'Asia/Ulaanbaatar', art: 'na', syn: ['mongolia', 'ulan bator'] },
  tw: { tz: 'Asia/Taipei', art: 'em', syn: ['taiwan', 'taipei'] },
  mm: { tz: 'Asia/Yangon', art: 'em', syn: ['mianmar', 'birmania', 'yangon'] },
  kh: { tz: 'Asia/Phnom_Penh', art: 'no', syn: ['camboja', 'phnom penh'] },
  la: { tz: 'Asia/Vientiane', art: 'no', syn: ['laos', 'vientiane'] },
  bn: { tz: 'Asia/Brunei', art: 'em', syn: ['brunei'] },
  tl: { tz: 'Asia/Dili', art: 'em', syn: ['timor leste', 'dili'] },
  ge: { tz: 'Asia/Tbilisi', art: 'na', syn: ['georgia', 'tbilisi'] },
  am: { tz: 'Asia/Yerevan', art: 'na', syn: ['armenia', 'yerevan'] },
  az: { tz: 'Asia/Baku', art: 'no', syn: ['azerbaijao', 'baku'] },

  // África
  eg: { tz: 'Africa/Cairo', art: 'no', syn: ['egito', 'cairo', 'alexandria'] },
  za: { tz: 'Africa/Johannesburg', art: 'na', syn: ['africa do sul', 'joanesburgo', 'cidade do cabo', 'pretoria'] },
  ng: { tz: 'Africa/Lagos', art: 'na', syn: ['nigeria', 'lagos', 'abuja'] },
  dz: { tz: 'Africa/Algiers', art: 'na', syn: ['argelia', 'argel'] },
  ma: { tz: 'Africa/Casablanca', art: 'no', syn: ['marrocos', 'rabat', 'casablanca', 'marrakech'] },
  et: { tz: 'Africa/Addis_Ababa', art: 'na', syn: ['etiopia', 'adis abeba'] },
  ke: { tz: 'Africa/Nairobi', art: 'no', syn: ['quenia', 'nairobi'] },
  tz: { tz: 'Africa/Dar_es_Salaam', art: 'na', syn: ['tanzania', 'dodoma', 'zanzibar'] },
  cd: {
    tz: 'Africa/Kinshasa',
    art: 'na',
    syn: ['congo rdc', 'republica democratica do congo', 'kinshasa'],
    zones: [
      { id: 'Africa/Kinshasa', label: 'Kinshasa / Ocidente (UTC+1)' },
      { id: 'Africa/Lubumbashi', label: 'Lubumbashi / Oriente (UTC+2)' }
    ]
  },
  cg: { tz: 'Africa/Brazzaville', art: 'na', syn: ['republica do congo', 'brazzaville'] },
  ao: { tz: 'Africa/Luanda', art: 'em', syn: ['angola', 'luanda'] },
  gh: { tz: 'Africa/Accra', art: 'em', syn: ['gana', 'acra'] },
  ci: { tz: 'Africa/Abidjan', art: 'na', syn: ['costa do marfim', 'abidjan', 'yamoussoukro'] },
  sn: { tz: 'Africa/Dakar', art: 'no', syn: ['senegal', 'dacar'] },
  gm: { tz: 'Africa/Banjul', art: 'na', syn: ['gambia', 'banjul'] },
  ml: { tz: 'Africa/Bamako', art: 'no', syn: ['mali', 'bamako'] },
  bf: { tz: 'Africa/Ouagadougou', art: 'em', syn: ['burquina faso', 'uagadugu'] },
  ne: { tz: 'Africa/Niamey', art: 'no', syn: ['niger', 'niamei'] },
  td: { tz: 'Africa/Ndjamena', art: 'no', syn: ['chade', 'ndjamena'] },
  sd: { tz: 'Africa/Khartoum', art: 'no', syn: ['sudao', 'cartum'] },
  ss: { tz: 'Africa/Juba', art: 'no', syn: ['sudao do sul', 'juba'] },
  ug: { tz: 'Africa/Kampala', art: 'em', syn: ['uganda', 'campala'] },
  rw: { tz: 'Africa/Kigali', art: 'em', syn: ['ruanda', 'kigali'] },
  bi: { tz: 'Africa/Bujumbura', art: 'no', syn: ['burundi', 'gitega'] },
  so: { tz: 'Africa/Mogadishu', art: 'na', syn: ['somalia', 'mogadicio'] },
  dj: { tz: 'Africa/Djibouti', art: 'no', syn: ['djibuti'] },
  er: { tz: 'Africa/Asmara', art: 'na', syn: ['eritreia', 'asmara'] },
  mg: { tz: 'Indian/Antananarivo', art: 'em', syn: ['madagascar', 'antananarivo'] },
  mz: { tz: 'Africa/Maputo', art: 'em', syn: ['mocambique', 'maputo'] },
  zm: { tz: 'Africa/Lusaka', art: 'na', syn: ['zambia', 'lusaka'] },
  zw: { tz: 'Africa/Harare', art: 'no', syn: ['zimbabue', 'harare'] },
  na: { tz: 'Africa/Windhoek', art: 'na', syn: ['namibia', 'windhoek'] },
  bw: { tz: 'Africa/Gaborone', art: 'em', syn: ['botsuana', 'gaborone'] },
  ls: { tz: 'Africa/Maseru', art: 'no', syn: ['lesoto', 'maseru'] },
  sz: { tz: 'Africa/Mbabane', art: 'em', syn: ['essuatini', 'suazilandia', 'mbabane'] },
  ly: { tz: 'Africa/Tripoli', art: 'na', syn: ['libia', 'tripoli'] },
  tn: { tz: 'Africa/Tunis', art: 'na', syn: ['tunisia', 'tunis'] },
  mr: { tz: 'Africa/Nouakchott', art: 'na', syn: ['mauritania', 'nuaquechote'] },
  cm: { tz: 'Africa/Douala', art: 'em', syn: ['camaroes', 'yaounde', 'douala'] },
  ga: { tz: 'Africa/Libreville', art: 'no', syn: ['gabao', 'libreville'] },
  gq: { tz: 'Africa/Malabo', art: 'na', syn: ['guine equatorial', 'malabo'] },
  cv: { tz: 'Atlantic/Cape_Verde', art: 'em', syn: ['cabo verde', 'praia'] },
  st: { tz: 'Africa/Sao_Tome', art: 'em', syn: ['sao tome e principe'] },
  sc: { tz: 'Indian/Mahe', art: 'nas', syn: ['seicheles', 'victoria'] },
  mu: { tz: 'Indian/Mauritius', art: 'em', syn: ['mauricio', 'port louis'] },
  km: { tz: 'Indian/Comoro', art: 'nas', syn: ['comores', 'moroni'] },
  cf: { tz: 'Africa/Bangui', art: 'na', syn: ['republica centro africana', 'bangui'] },
  gn: { tz: 'Africa/Conakry', art: 'na', syn: ['guine', 'conacri'] },
  gw: { tz: 'Africa/Bissau', art: 'na', syn: ['guine bissau', 'bissau'] },
  lr: { tz: 'Africa/Monrovia', art: 'na', syn: ['liberia', 'monrovia'] },
  sl: { tz: 'Africa/Freetown', art: 'em', syn: ['serra leoa', 'freetown'] },
  tg: { tz: 'Africa/Lome', art: 'no', syn: ['togo', 'lome'] },
  bj: { tz: 'Africa/Porto-Novo', art: 'no', syn: ['benim', 'porto novo'] },
  mw: { tz: 'Africa/Blantyre', art: 'no', syn: ['malaui', 'lilongue'] },
  eh: { tz: 'Africa/El_Aaiun', art: 'no', syn: ['saara ocidental', 'el aaiun'] },

  // Oceania
  au: {
    tz: 'Australia/Sydney',
    art: 'na',
    syn: ['australia', 'sydney', 'melbourne', 'brisbane', 'perth', 'canberra'],
    zones: [
      { id: 'Australia/Sydney', label: 'Sydney / Melbourne / Canberra (AEST/AEDT UTC+10/11)' },
      { id: 'Australia/Brisbane', label: 'Brisbane / Queensland (AEST UTC+10 sem horário de verão)' },
      { id: 'Australia/Adelaide', label: 'Adelaide / Sul (ACST/ACDT UTC+9:30/10:30)' },
      { id: 'Australia/Darwin', label: 'Darwin / Norte (ACST UTC+9:30)' },
      { id: 'Australia/Perth', label: 'Perth / Ocidente (AWST UTC+8)' },
      { id: 'Pacific/Norfolk', label: 'Ilha Norfolk (NFT UTC+11/12)' }
    ]
  },
  nz: {
    tz: 'Pacific/Auckland',
    art: 'na',
    syn: ['nova zelandia', 'auckland', 'wellington'],
    zones: [
      { id: 'Pacific/Auckland', label: 'Auckland / Wellington (NZST/NZDT UTC+12/13)' },
      { id: 'Pacific/Chatham', label: 'Ilhas Chatham (CHAST UTC+12:45)' }
    ]
  },
  pg: { tz: 'Pacific/Port_Moresby', art: 'na', syn: ['papua nova guine', 'port moresby'] },
  fj: { tz: 'Pacific/Fiji', art: 'em', syn: ['fiji', 'suva'] },
  sb: { tz: 'Pacific/Guadalcanal', art: 'nas', syn: ['ilhas salomao', 'honiara'] },
  vu: { tz: 'Pacific/Efate', art: 'em', syn: ['vanuatu', 'port vila'] },
  ws: { tz: 'Pacific/Apia', art: 'em', syn: ['samoa', 'apia'] },
  to: { tz: 'Pacific/Tongatapu', art: 'em', syn: ['tonga', 'nukualofa'] },
  fm: { tz: 'Pacific/Pohnpei', art: 'na', syn: ['micronesia', 'palikir'] },
  pw: { tz: 'Pacific/Palau', art: 'em', syn: ['palau', 'ngerulmud'] },
  mh: { tz: 'Pacific/Majuro', art: 'nas', syn: ['ilhas marshall', 'majuro'] },
  ki: {
    tz: 'Pacific/Tarawa',
    art: 'em',
    syn: ['kiribati', 'tarawa', 'kiritimati'],
    zones: [
      { id: 'Pacific/Tarawa', label: 'Tarawa / Ilhas Gilbert (UTC+12)' },
      { id: 'Pacific/Kiritimati', label: 'Kiritimati / Ilhas da Linha (UTC+14 - Mais adiantado da Terra)' }
    ]
  },
  tv: { tz: 'Pacific/Funafuti', art: 'em', syn: ['tuvalu', 'funafuti'] },
  nr: { tz: 'Pacific/Nauru', art: 'em', syn: ['nauru', 'yaren'] }
};

function slugify(text) {
  return text.toString().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const resultado = [];
let comErro = 0;

for (const p of paisesOriginais) {
  const iso2 = (p.iso2 || '').toLowerCase();
  const cfg = TZ_MAP[iso2];

  if (!cfg) {
    console.warn(`[AVISO] País sem configuração de timezone: ${p.nome} (${iso2})`);
    comErro++;
    continue;
  }

  // Validar timezone principal
  try {
    new Intl.DateTimeFormat('pt-BR', { timeZone: cfg.tz }).format(new Date());
  } catch (err) {
    console.error(`[ERRO TZ] ${p.nome}: Timezone inválida ${cfg.tz}`);
    comErro++;
    continue;
  }

  // Validar zonas extras se houver
  if (cfg.zones) {
    for (const z of cfg.zones) {
      try {
        new Intl.DateTimeFormat('pt-BR', { timeZone: z.id }).format(new Date());
      } catch (err) {
        console.error(`[ERRO SUB-TZ] ${p.nome} / ${z.label}: Timezone inválida ${z.id}`);
        comErro++;
      }
    }
  }

  const slug = slugify(p.nome);
  const syns = Array.from(new Set([
    slug,
    p.nome.toLowerCase(),
    (p.capital || '').toLowerCase(),
    ...(cfg.syn || [])
  ])).filter(Boolean);

  resultado.push({
    slug,
    nome: p.nome,
    nome_oficial: p.nome_oficial || p.nome,
    iso2: iso2,
    iso3: (p.iso3 || '').toLowerCase(),
    capital: p.capital || '',
    continente: p.continente || '',
    artigo: cfg.art || 'em',
    defaultZone: cfg.tz,
    zones: cfg.zones || [{ id: cfg.tz, label: `${p.capital || p.nome}` }],
    synonyms: syns,
    lat: p.lat,
    lng: p.lng
  });
}

console.log(`\nPaíses mapeados com sucesso: ${resultado.length} de ${paisesOriginais.length}. Erros: ${comErro}`);

// Salvar JSON e JS
const outDir = path.join(PASTA_RAIZ, 'ferramentas/que-horas-sao');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'paises-fusos.json'), JSON.stringify(resultado, null, 2), 'utf8');

const jsContent = `// Base oficial de 198 Países e Fusos Horários Mundiais - VitaleGeo
window.PAISES_FUSOS = ${JSON.stringify(resultado)};
`;
fs.writeFileSync(path.join(outDir, 'paises-fusos.js'), jsContent, 'utf8');

console.log(`Arquivos gerados em ${outDir}: paises-fusos.json e paises-fusos.js`);
