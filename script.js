/* =========================================================
   ABRS Tecidos — v40: atendimento no estilo WhatsApp do iPhone
   ---------------------------------------------------------
   Para editar textos: procure as listas FABRICS, PURCHASE, FORMATS, QTY_SETS, PROJECTS, FAQ e STORIES abaixo.
   Nada é enviado para servidor nenhum: o pedido só sai quando a pessoa toca em "Enviar no WhatsApp".
   ========================================================= */

const WHATSAPP_NUMBER = '5511994724695';
const PHONE_LABEL = '(11) 99472-4695';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- CONTEÚDO ---------------- */

/* Tecidos. Foto opcional: assets/tecidos/<id>.jpg (se não existir, aparece a cor com a trama) */
const FABRICS = [
  /* mais procurados */
  { id: 'jeans', name: 'Jeans', use: 'calças, jaquetas, saias', c: '#3b5a85', tex: 'denim' },
  { id: 'malha', name: 'Malha', use: 'camisetas, dia a dia', c: '#cfc8bd', tex: 'knit' },
  { id: 'brim', name: 'Brim / Sarja', use: 'uniformes, calças de trabalho', c: '#8a7a5c', tex: 'twill' },
  { id: 'viscose', name: 'Viscose', use: 'vestidos, blusas leves', c: '#c8342b', tex: 'print' },
  { id: 'viscolycra', name: 'Viscolycra', use: 'vestidos e blusas com elástico', c: '#6b3d8f', tex: 'knit' },
  { id: 'linho', name: 'Linho', use: 'camisas, calças de verão', c: '#d6c8ab', tex: 'linen' },
  { id: 'tricoline', name: 'Tricoline', use: 'camisas, vestidos, artesanato', c: '#e9dfc8', tex: 'check' },
  { id: 'moletom', name: 'Moletom', use: 'blusas de frio, conjuntos', c: '#8b8f96', tex: 'fleece' },
  { id: 'cotton', name: 'Cotton', use: 'blusas e peças com elástico', c: '#e08a1e', tex: 'knit' },
  { id: 'lycra', name: 'Lycra', use: 'moda praia e fitness', c: '#d0457a', tex: 'knit' },
  { id: 'suplex', name: 'Suplex', use: 'legging e top fitness', c: '#138a83', tex: 'knit' },
  { id: 'crepe', name: 'Crepe', use: 'vestidos, blusas sociais', c: '#1f4a48', tex: 'crepe' },
  { id: 'cetim', name: 'Cetim', use: 'festa, pijamas', c: '#b8862e', tex: 'satin' },
  { id: 'percal', name: 'Percal', use: 'lençóis e roupa de cama', c: '#e8eef2', tex: 'linen' },
  { id: 'forro', name: 'Forro', use: 'forro de roupas e bolsas', c: '#a9b4c2', tex: 'satin' },
  { id: 'liocel', name: 'Liocel', use: 'camisas e vestidos fluidos', c: '#7c9a8a', tex: 'satin' },
  /* malhas */
  { id: 'malhapv', name: 'Malha PV (fria)', use: 'camisetas, uniformes', c: '#9aa7b4', tex: 'knit' },
  { id: 'canelada', name: 'Canelada', use: 'blusas justas, vestidos', c: '#c9876b', tex: 'knit' },
  { id: 'ribana', name: 'Ribana', use: 'golas, punhos e barras', c: '#b3a79a', tex: 'knit' },
  { id: 'twoway', name: 'Two way', use: 'leggings, macacões, vestidos', c: '#2d2d34', tex: 'knit' },
  { id: 'dryfit', name: 'Dry fit', use: 'camisetas esportivas', c: '#2f7fc1', tex: 'knit' },
  { id: 'helanca', name: 'Helanca', use: 'agasalhos, uniforme escolar', c: '#1f3f7a', tex: 'knit' },
  { id: 'moletinho', name: 'Moletinho', use: 'conjuntos leves, meia-estação', c: '#c4b29a', tex: 'fleece' },
  { id: 'microfibra', name: 'Microfibra', use: 'shorts, pijamas, praia', c: '#5f8f9e', tex: 'crepe' },
  { id: 'tactel', name: 'Tactel', use: 'shorts e agasalhos', c: '#2f5d50', tex: 'crepe' },
  { id: 'neoprene', name: 'Neoprene', use: 'jaquetas, saias, peças estruturadas', c: '#3c3c44', tex: 'fleece' },
  /* planos para roupa */
  { id: 'alfaiataria', name: 'Alfaiataria', use: 'calças e blazers sociais', c: '#3a332e', tex: 'twill' },
  { id: 'gabardine', name: 'Gabardine', use: 'calças, saias, uniformes', c: '#6e6252', tex: 'twill' },
  { id: 'bengaline', name: 'Bengaline', use: 'calças e saias com elastano', c: '#4a3a5c', tex: 'twill' },
  { id: 'duna', name: 'Duna', use: 'calças e vestidos fluidos', c: '#b07a5a', tex: 'crepe' },
  { id: 'viscolinho', name: 'Viscolinho', use: 'camisas, vestidos de verão', c: '#9fb08a', tex: 'linen' },
  { id: 'oxford', name: 'Oxford', use: 'uniformes, toalhas de mesa', c: '#5b7fa6', tex: 'twill' },
  { id: 'popeline', name: 'Popeline', use: 'camisas, vestidos, uniformes', c: '#dfe5ea', tex: 'twill' },
  { id: 'cambraia', name: 'Cambraia', use: 'camisas, batas, enxoval', c: '#eef0ea', tex: 'linen' },
  { id: 'musseline', name: 'Musseline', use: 'blusas e vestidos leves', c: '#e6a5b4', tex: 'sheer' },
  { id: 'laise', name: 'Laise', use: 'vestidos, blusas, infantil', c: '#f4f1ea', tex: 'lace' },
  /* festa */
  { id: 'chiffon', name: 'Chiffon', use: 'blusas e vestidos de festa', c: '#d9b8c4', tex: 'sheer' },
  { id: 'georgette', name: 'Georgette', use: 'vestidos e blusas fluidas', c: '#3f6c8a', tex: 'crepe' },
  { id: 'organza', name: 'Organza', use: 'festa, noivas, laços', c: '#e8dcc0', tex: 'sheer' },
  { id: 'renda', name: 'Renda', use: 'vestidos, blusas, lingerie', c: '#f2ece2', tex: 'lace' },
  { id: 'tule', name: 'Tule', use: 'saias de festa, véus', c: '#f1d6dc', tex: 'sheer' },
  { id: 'veludo', name: 'Veludo', use: 'festa, inverno, decoração', c: '#6d1f3a', tex: 'velvet' },
  { id: 'paete', name: 'Paetê', use: 'festa, fantasias, Carnaval', c: '#b9a36a', tex: 'sequin' },
  { id: 'jacquard', name: 'Jacquard', use: 'vestidos, saias, decoração', c: '#8c6a3c', tex: 'check' },
  /* inverno, casa e artesanato */
  { id: 'plush', name: 'Plush', use: 'pijamas, mantas, bichinhos', c: '#d8c3b0', tex: 'fleece' },
  { id: 'soft', name: 'Soft', use: 'mantas, roupões, pijamas', c: '#a3b8c9', tex: 'fleece' },
  { id: 'suede', name: 'Suede', use: 'jaquetas, saias, bolsas', c: '#9a6a44', tex: 'fleece' },
  { id: 'corino', name: 'Corino', use: 'bolsas, jaquetas, estofados', c: '#2b2420', tex: 'crepe' },
  { id: 'lona', name: 'Lona', use: 'bolsas, sacolas, estofados', c: '#b8a57e', tex: 'linen' },
  { id: 'algodaocru', name: 'Algodão cru', use: 'artesanato, sacolas, moldes', c: '#e4d8bd', tex: 'linen' },
  { id: 'voil', name: 'Voil', use: 'cortinas, blusas leves', c: '#f3f3ef', tex: 'sheer' },
  { id: 'chita', name: 'Chita', use: 'festa junina, decoração', c: '#d63a3a', tex: 'print' },
  { id: 'feltro', name: 'Feltro', use: 'artesanato, enfeites', c: '#3f8f4f', tex: 'fleece' }
];
/* tecidos que a cliente escreve (não estão na lista) */
function addCustomFabric(name) {
  const clean = name.replace(/\s+/g, ' ').trim().slice(0, 40);
  const id = 'x-' + clean.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  if (!FABRICS.some((f) => f.id === id)) FABRICS.push({ id, name: clean, use: 'escrito por você', c: '#efe6da', tex: 'other', custom: true });
  return id;
}
(function restoreCustom() { try { (JSON.parse(localStorage.getItem('abrs_custom') || '[]')).forEach(addCustomFabric); } catch { /* ok */ } })();

/* Sequência igual ao questionário do site: como compra → formato → quantidade → contato */
/* Segmentos: grupos de tecidos por tipo de costura (um tecido pode estar em mais de um) */
const SEGMENTS = [
  { id: 'casual', name: 'Dia a dia', desc: 'Camisetas, blusas, vestidos e peças básicas.', fabrics: ['malha', 'viscose', 'viscolycra', 'cotton', 'malhapv', 'canelada', 'viscolinho', 'musseline', 'jeans', 'ribana'] },
  { id: 'jeanswear', name: 'Jeanswear', desc: 'Calças, jaquetas, saias e bermudas.', fabrics: ['jeans', 'brim', 'bengaline', 'gabardine'] },
  { id: 'social', name: 'Social e alfaiataria', desc: 'Calças sociais, blazers, camisas e vestidos arrumados.', fabrics: ['alfaiataria', 'gabardine', 'bengaline', 'crepe', 'duna', 'linho', 'viscolinho', 'liocel', 'tricoline', 'popeline'] },
  { id: 'fitness', name: 'Fitness e praia', desc: 'Leggings, tops, maiôs, biquínis e shorts esportivos.', fabrics: ['suplex', 'lycra', 'twoway', 'dryfit', 'cotton', 'tactel', 'microfibra', 'neoprene'] },
  { id: 'uniformes', name: 'Uniformes', desc: 'Uniformes, jalecos, calças e camisas de trabalho.', fabrics: ['brim', 'gabardine', 'oxford', 'popeline', 'tricoline', 'malhapv', 'helanca', 'dryfit'] },
  { id: 'inverno', name: 'Inverno', desc: 'Blusas de frio, conjuntos, pijamas e agasalhos.', fabrics: ['moletom', 'moletinho', 'plush', 'soft', 'veludo', 'suede', 'helanca', 'ribana'] },
  { id: 'festa', name: 'Festa e noite', desc: 'Vestidos de festa, noivas, saias e pijamas.', fabrics: ['cetim', 'crepe', 'chiffon', 'georgette', 'organza', 'renda', 'tule', 'veludo', 'paete', 'jacquard'] },
  { id: 'infantil', name: 'Infantil e bebê', desc: 'Roupinhas, enxoval, pijamas e mantas.', fabrics: ['malha', 'cotton', 'tricoline', 'cambraia', 'laise', 'soft', 'plush', 'moletinho'] },
  { id: 'casa', name: 'Cama, mesa e decoração', desc: 'Lençóis, fronhas, toalhas de mesa, cortinas e almofadas.', fabrics: ['percal', 'tricoline', 'oxford', 'linho', 'voil', 'jacquard', 'veludo', 'chita'] },
  { id: 'artesanato', name: 'Artesanato, bolsas e acessórios', desc: 'Bolsas, sacolas, enfeites, moldes e personalizados.', fabrics: ['algodaocru', 'lona', 'corino', 'feltro', 'chita', 'tricoline', 'suede', 'neoprene'] },
  { id: 'acabamentos', name: 'Forros e acabamentos', desc: 'Forro de roupas e bolsas, golas, punhos e barras.', fabrics: ['forro', 'ribana', 'tule', 'organza'] }
];

const PURCHASE = [
  { v: 'Varejo', label: 'Varejo', hint: 'pequenas quantidades' },
  { v: 'Atacado', label: 'Atacado', hint: 'maior volume' },
  { v: 'Ainda estou avaliando', label: 'Ainda estou avaliando', hint: 'quero orientação' }
];
const FORMATS = [
  { v: 'Retalhos', label: 'Retalhos', hint: 'compra em quilos' },
  { v: 'Na peça', label: 'Na peça', hint: 'peça / rolo inteiro' }
];
/* quantidades conforme a forma de compra e o formato (volumes de atacado: ajuste à vontade) */
const QTY_SETS = {
  'Varejo': {
    'Retalhos': ['Até 5 kg', 'De 5 a 20 kg', 'Mais de 20 kg', 'Ainda não sei'],
    'Na peça': ['1 peça / rolo', '2 a 5 peças / rolos', 'Mais de 5 peças / rolos', 'Ainda não sei']
  },
  'Atacado': {
    'Retalhos': ['De 20 a 50 kg', 'De 50 a 100 kg', 'De 100 a 300 kg', 'Acima de 300 kg', 'Ainda não sei'],
    'Na peça': ['5 a 10 peças / rolos', '10 a 30 peças / rolos', '30 a 50 peças / rolos', 'Mais de 50 peças / rolos', 'Ainda não sei']
  },
  'Ainda estou avaliando': {
    'Retalhos': ['Até 5 kg', 'Mais de 5 até 20 kg', 'Mais de 20 até 50 kg', 'Acima de 50 kg', 'Ainda não sei'],
    'Na peça': ['1 peça / rolo', '2 a 5 peças / rolos', 'Mais de 5 peças / rolos', 'Ainda não sei']
  }
};
const qtyOptions = () => (QTY_SETS[state.purchase] || QTY_SETS['Ainda estou avaliando'])[state.format];

const PROJECTS = [
  { id: 'vestido', emo: '👗', label: 'Vestido', text: 'Para um vestido soltinho e fresco, a *viscose* é a mais pedida. Para algo mais arrumado, o *crepe* cai muito bem.', fabrics: ['viscose', 'crepe', 'viscolycra', 'linho'] },
  { id: 'calca', emo: '👖', label: 'Calça', text: '*Jeans* para o dia a dia, *alfaiataria* para calça social e *brim* para calça de trabalho, que aguenta uso pesado.', fabrics: ['jeans', 'alfaiataria', 'brim', 'linho'] },
  { id: 'camiseta', emo: '👕', label: 'Camiseta / blusa', text: 'As *malhas* são as mais usadas: confortáveis, com elasticidade e fáceis de costurar na overloque.', fabrics: ['malha', 'cotton', 'viscolycra'] },
  { id: 'fitness', emo: '🏃‍♀️', label: 'Moda fitness', text: '*Suplex* é o clássico de legging e top: firme, estica e não fica transparente.', fabrics: ['suplex', 'cotton'] },
  { id: 'camisa', emo: '👔', label: 'Camisa', text: '*Tricoline* é o tecido de camisa por excelência. O *linho* é a opção fresquinha para o verão.', fabrics: ['tricoline', 'linho'] },
  { id: 'frio', emo: '🧥', label: 'Roupa de frio', text: '*Moletom* para blusas, conjuntos e calças de frio. Muito procurado no inverno.', fabrics: ['moletom'] },
  { id: 'uniforme', emo: '🦺', label: 'Uniforme', text: '*Brim* e *sarja* aguentam muita lavagem. *Tricoline* vai bem em camisas de uniforme.', fabrics: ['brim', 'tricoline'] },
  { id: 'festa', emo: '✨', label: 'Festa / pijama', text: '*Cetim* tem brilho e caimento para festa e pijama, e também serve de forro. O *crepe* é o mais elegante.', fabrics: ['cetim', 'crepe'] }
];

/* [confirmar] = informação que a loja ainda precisa confirmar (aparece em amarelo) */
const FAQ = [
  { q: '🚚 Frete e entrega', a: ['Envio para *todo o Brasil pelos Correios*. 📦', 'Mande seu *CEP* no WhatsApp que a gente calcula o frete na hora.'] },
  { q: '💳 Pagamento', a: ['Você pode pagar no *Pix ou cartão*. 👍'] },
  { q: '⚖️ Quantidade mínima', a: ['*Não temos quantidade mínima!* 🙌 Você compra o quanto precisar.', 'Atendemos do varejo ao atacado: no retalho a compra é por *quilo*; na peça, por *rolo inteiro*.'] },
  { q: '👀 Ver antes de comprar', a: ['Sim! *Enviamos amostras* do tecido. 🧵', 'E também mandamos *fotos e vídeo* de perto no WhatsApp, mostrando a cor e o caimento.'] },
  { q: '🏷️ O que é saldo?', a: ['*Saldo* é a sobra de produção de fábricas e confecções.', 'O tecido é bom, o preço é menor, mas a quantidade é limitada. *Quando acaba, acabou.*'] },
  { q: '📍 Retirar no Brás', a: ['Pode, sim! Nossa loja fica na *Rua Santa Clara, 187*, no Brás (São Paulo). 📍', 'Combine a retirada com a gente pelo WhatsApp.'] },
  { q: '🕗 Horário', a: ['Atendemos de *segunda a sábado, das 8h às 18h*.', 'Fora do horário, pode mandar a mensagem que a gente responde assim que possível.'] },
  { q: '🏬 Sobre a loja', a: ['A *ABRS Tecidos* é uma loja de tecidos no *Brás*, em São Paulo. Vendemos no atacado e no varejo, com envio para todo o Brasil.', 'Este chat organiza a sua consulta. No WhatsApp, quem responde é gente de verdade, da loja. 😊'] }
];

/* Novidades (tipo "status" do WhatsApp). Fotos de saldos: assets/semana/1.jpg ... 8.jpg
   ic = ícone (ver os <symbol> no index.html) ou num = número grande */
const STORIES = [
  { id: 'saldos', label: 'Saldos', ic: 'tag', c: '#c8342b', tex: 'print', slides: [
      { c: '#c8342b', tex: 'print', ic: 'tag', h: 'Saldos de fábrica', p: 'Tecido bom com preço menor.' },
      { c: '#3d271d', tex: 'twill', ic: 'clock', h: 'Quantidade limitada', p: 'Quando acaba, acabou. Chega novidade toda semana.' },
      { weekPhotos: true }
    ], cta: { label: 'Ver saldos desta semana', run: () => flowSaldos() } },
  { id: 'foto', label: 'Mande foto', ic: 'camera', c: '#138a83', tex: 'knit', slides: [
      { c: '#138a83', tex: 'knit', ic: 'camera', h: 'Não sabe o nome do tecido?', p: 'Tire uma foto do retalho ou da roupa.' },
      { c: '#0f5f5a', tex: 'linen', ic: 'search', h: 'A gente confere no estoque', p: 'E te mostra o mesmo tecido ou um bem parecido.' }
    ], cta: { label: 'Mandar uma foto', run: () => flowPhoto() } },
  { id: 'envio', label: 'Envio Brasil', ic: 'truck', c: '#e08a1e', tex: 'knit', slides: [
      { c: '#e08a1e', tex: 'knit', ic: 'truck', h: 'Envio para todo o Brasil', p: 'Pelos Correios, direto na sua casa.' },
      { c: '#8a5a1e', tex: 'twill', ic: 'box', h: 'Frete calculado na hora', p: 'É só passar seu CEP no WhatsApp.' }
    ], cta: { label: 'Quero um tecido', run: () => flowFabric() } },
  { id: 'pagamento', label: 'Pix e cartão', ic: 'card', c: '#6b3d8f', tex: 'knit', slides: [
      { c: '#6b3d8f', tex: 'knit', ic: 'card', h: 'Pix ou cartão', p: 'Você escolhe como pagar.' }
    ], cta: { label: 'Quero um tecido', run: () => flowFabric() } },
  { id: 'como', label: 'Como funciona', ic: 'scissors', c: '#5a3a2b', tex: 'linen', slides: [
      { c: '#5a3a2b', tex: 'linen', num: '1', h: 'Você escolhe o tecido', p: 'Pelo nome, pela peça que vai costurar ou por uma foto.' },
      { c: '#3b5a85', tex: 'denim', num: '2', h: 'Mandamos fotos e preço', p: 'Do tecido disponível na loja, direto no seu WhatsApp.' },
      { c: '#0e8a43', tex: 'knit', num: '3', h: 'Você paga e recebe', p: 'Pix ou cartão. Entrega pelos Correios.' }
    ], cta: { label: 'Começar minha consulta', run: () => flowFabric() } }
];

/* ---------------- ESTADO ---------------- */
const store = {
  get(key, fallback) { try { const v = localStorage.getItem('abrs_' + key); return v === null ? fallback : JSON.parse(v); } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem('abrs_' + key, JSON.stringify(value)); } catch { /* sem armazenamento: tudo bem */ } }
};

const state = {
  name: store.get('name', ''),
  city: store.get('city', ''),
  company: store.get('company', ''),
  cart: store.get('cart', []).filter((id) => FABRICS.some((f) => f.id === id)),
  purchase: store.get('purchase', ''),
  format: store.get('format', ''),
  qty: store.get('qty', ''),
  project: '',
  notes: [],
  awaiting: null     // { handler, placeholder }
};
function saveOrder() {
  ['cart', 'purchase', 'format', 'qty'].forEach((k) => store.set(k, state[k]));
  store.set('custom', FABRICS.filter((f) => f.custom && state.cart.includes(f.id)).map((f) => f.name));
}
function resetOrder() { state.cart = []; state.purchase = ''; state.format = ''; state.qty = ''; state.notes = []; state.project = ''; saveOrder(); updateCart(false); }

/* ---------------- ELEMENTOS ---------------- */
const $ = (id) => document.getElementById(id);
const app = $('app');
const chatEl = $('chat');
const repliesEl = $('replies');
const statusEl = $('status');
const input = $('input');
const cartBtn = $('cartBtn');
const cartCount = $('cartCount');

/* ---------------- UTILITÁRIOS ---------------- */
const sleep = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? Math.min(ms, 150) : ms));
const now = () => new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const fmt = (s) => esc(s)
  .replace(/\*(.+?)\*/g, '<strong>$1</strong>')
  .replace(/\[(confirmar[^\]]*|preencher[^\]]*)\]/g, '<em class="confirmar">[$1]</em>');
const plain = (s) => String(s).replace(/\*/g, '').replace(/\[(confirmar|preencher)[^\]]*\]/g, '');
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const fabric = (id) => FABRICS.find((f) => f.id === id);
const firstName = () => (state.name || '').split(' ')[0];
const icon = (id, cls = 'ico') => `<svg class="${cls}" aria-hidden="true"><use href="#ico-${id}"/></svg>`;
const haptic = (ms = 8) => { try { if (navigator.vibrate) navigator.vibrate(ms); } catch { /* sem vibração */ } };
const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };

function greeting() {
  const hr = new Date().getHours();
  return hr < 12 ? 'Bom dia' : hr < 18 ? 'Boa tarde' : 'Boa noite';
}

/* ---------------- ROLAGEM E MEDIDAS ---------------- */
let stuck = true; // a conversa está "colada" no fim?
let userAt = 0;  // só a rolagem feita pela pessoa "descola" a conversa do fim
['wheel', 'touchmove', 'keydown'].forEach((ev) => chatEl.addEventListener(ev, () => { userAt = Date.now(); compactStories(); }, { passive: true }));
chatEl.addEventListener('scroll', () => {
  if (Date.now() - userAt < 900) stuck = chatEl.scrollHeight - chatEl.scrollTop - chatEl.clientHeight < 80;
}, { passive: true });
function scrollDown(force = true) {
  if (!force && !stuck) return;
  stuck = true;
  requestAnimationFrame(() => {
    // rolagem nativa do navegador: é a mais fluida (roda fora do JavaScript)
    const far = chatEl.scrollHeight - chatEl.scrollTop - chatEl.clientHeight > chatEl.clientHeight * 1.5;
    if (reduceMotion || far) chatEl.scrollTop = chatEl.scrollHeight;
    else chatEl.scrollTo({ top: chatEl.scrollHeight, behavior: 'smooth' });
  });
  // garantia: se a rolagem suave não acontecer (aba em segundo plano, economia de bateria), pula para o fim
  clearTimeout(scrollDown.safety);
  scrollDown.safety = setTimeout(() => {
    if (stuck && chatEl.scrollHeight - chatEl.scrollTop - chatEl.clientHeight > 4) chatEl.scrollTop = chatEl.scrollHeight;
  }, 900);
}
function measure() {
  app.style.setProperty('--top-h', $('bar').offsetHeight + 'px');
  app.style.setProperty('--dock-h', $('dock').offsetHeight + 'px');
}
if ('ResizeObserver' in window) {
  const ro = new ResizeObserver(() => { measure(); scrollDown(false); });
  ro.observe($('bar')); ro.observe($('dock'));
} else { window.addEventListener('resize', measure); }
measure();

/* ---------------- WHATSAPP ---------------- */
function getOrigin() {
  const p = new URLSearchParams(location.search);
  return (p.get('origem') || p.get('utm_source') || '').trim();
}
function waUrl(lines) {
  const origin = getOrigin();
  const text = [...lines, ...(origin ? ['', `(Origem: ${origin})`] : [])].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function orderLines() {
  const L = ['Olá, ABRS Tecidos! 👋', ''];
  if (state.name) L.push(state.city ? `Me chamo ${state.name} e sou de ${state.city}.` : `Me chamo ${state.name}.`);
  if (state.cart.length) {
    const what = state.cart.map((id) => fabric(id).name).join(', ');
    const how = !state.purchase ? '' : state.purchase === 'Ainda estou avaliando' ? ', a princípio ainda estou avaliando a forma de compra' : `, a princípio no ${state.purchase.toLowerCase()}`;
    const det = [state.format && `formato: ${state.format}`, state.qty && `quantidade aproximada: ${state.qty}`].filter(Boolean).join('; ');
    L.push(`Gostaria de comprar ${what}${how}${det ? ` (${det})` : ''}.`);
  } else {
    L.push('Vim pelo site da ABRS Tecidos e estou procurando tecido.');
  }
  if (state.project) L.push(`Vou costurar: ${state.project}.`);
  L.push('', 'Pode me mostrar o que vocês têm disponível e os valores?');
  if (state.company) L.push('', `Empresa / ateliê: ${state.company}`);
  state.notes.forEach((n) => L.push('', `Observação: ${n}`));
  return L;
}

/* Transição: tela verde abre a partir do toque, com a linha costurando em volta do logo */
let lastTap = { x: innerWidth / 2, y: innerHeight - 80 };
document.addEventListener('pointerdown', (e) => { lastTap = { x: e.clientX, y: e.clientY }; }, { capture: true, passive: true });

function launchWA(url, text) {
  const el = $('launch');
  $('launchBtn').href = url;
  if (text) $('launchText').innerHTML = text;
  el.hidden = false;
  const r = app.getBoundingClientRect();
  const x = lastTap.x - r.left, y = lastTap.y - r.top;
  if (!reduceMotion && el.animate) {
    el.animate([{ clipPath: `circle(0px at ${x}px ${y}px)` }, { clipPath: `circle(${Math.hypot(r.width, r.height)}px at ${x}px ${y}px)` }],
      { duration: 650, easing: 'cubic-bezier(.32,.72,0,1)' });
  }
  haptic(15);
  setTimeout(() => { window.location.href = url; }, reduceMotion ? 300 : 1400); // location.href: mais confiável no app do Facebook
}
function hideLaunch() { $('launch').hidden = true; }
$('launchBack').addEventListener('click', hideLaunch);
window.addEventListener('pageshow', hideLaunch);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') setTimeout(hideLaunch, 600); });

document.querySelectorAll('[data-wa-direct]').forEach((a) => {
  a.href = waUrl(['Olá, ABRS Tecidos! Tudo bem?', 'Vim pelo site da ABRS Tecidos e estou procurando tecido.']);
  a.addEventListener('click', (e) => { e.preventDefault(); launchWA(waUrl(orderLines())); });
});

/* ---------------- VOZ (ler mensagens em voz alta) ---------------- */
const canSpeak = 'speechSynthesis' in window;
let voiceOn = false; // leitura em voz alta desativada a pedido do Daniel (o código fica pronto caso volte)
const voiceBtn = $('voiceBtn');
if (!canSpeak) voiceBtn.hidden = true;
function setVoice(on) {
  voiceOn = on;
  store.set('voice', on);
  voiceBtn.setAttribute('aria-pressed', String(on));
  document.querySelectorAll('[data-voice-switch]').forEach((s) => s.setAttribute('aria-checked', String(on)));
  if (on) speak('Pronto! Agora eu leio as mensagens em voz alta.');
  else if (canSpeak) speechSynthesis.cancel();
}
voiceBtn.setAttribute('aria-pressed', String(voiceOn));
voiceBtn.addEventListener('click', () => { haptic(); setVoice(!voiceOn); });
function speak(text) {
  if (!voiceOn) return;
  const u = new SpeechSynthesisUtterance(plain(text).replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, ''));
  u.lang = 'pt-BR';
  u.rate = 0.95;
  const v = speechSynthesis.getVoices().find((x) => x.lang && x.lang.toLowerCase().startsWith('pt'));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

/* ---------------- TAMANHO DA LETRA ---------------- */
const SCALES = [1, 1.15, 1.3];
let scaleIdx = Math.min(store.get('scale', 0), SCALES.length - 1);
const fontBtn = $('fontBtn');
function applyScale() {
  document.documentElement.style.setProperty('--font-scale', SCALES[scaleIdx]);
  document.documentElement.classList.toggle('is-big', scaleIdx === SCALES.length - 1);
  fontBtn.setAttribute('aria-label', scaleIdx === SCALES.length - 1 ? 'Voltar a letra ao normal' : 'Aumentar a letra');
  fontBtn.setAttribute('aria-pressed', String(scaleIdx > 0));
  document.querySelectorAll('[data-scale]').forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.scale === scaleIdx)));
}
function setScale(i) { scaleIdx = i; store.set('scale', i); applyScale(); scrollDown(false); }
fontBtn.addEventListener('click', () => { haptic(); setScale((scaleIdx + 1) % SCALES.length); });
applyScale();

/* ---------------- MENSAGENS ---------------- */
let queue = Promise.resolve();
function enqueue(fn) { queue = queue.then(fn).catch((e) => console.error(e)); return queue; }

function addBubble(side, html, { wide = false } = {}) {
  const prev = chatEl.lastElementChild;
  const cont = prev && prev.classList.contains(`msg--${side}`) && !prev.classList.contains('typing');
  const el = document.createElement('div');
  el.className = `msg msg--${side}${wide ? ' msg--wide' : ''}${cont ? ' msg--cont' : ''}${side === 'in' && justTyped ? ' msg--settle' : ''}`;
  justTyped = false;
  const ticks = side === 'out' ? '<svg class="msg__ticks" aria-label="enviada"><use href="#ico-check2"/></svg>' : '';
  el.innerHTML = `<div class="msg__body">${html}</div><div class="msg__meta"><time>${now()}</time>${ticks}</div>`;
  chatEl.append(el);
  scrollDown();
  if (side === 'out') setTimeout(() => el.querySelector('.msg__ticks')?.classList.add('is-read'), 900);
  return el;
}

function setStatus(text, cls) {
  statusEl.textContent = text;
  statusEl.className = 'who__status' + (cls ? ' ' + cls : '');
}

let justTyped = false;
async function typing(ms) {
  setStatus('digitando…', 'is-typing');
  const prev = chatEl.lastElementChild;
  const cont = prev && prev.classList.contains('msg--in');
  const t = document.createElement('div');
  t.className = `msg msg--in typing${cont ? ' msg--cont' : ''}`;
  t.setAttribute('aria-hidden', 'true');
  // agulha costurando uma linha tracejada
  t.innerHTML = '<svg viewBox="0 0 62 22"><path class="st" d="M2 13H50"/><g class="needle"><path d="M54 1v15" stroke="#8e8e93" stroke-width="2" stroke-linecap="round"/><ellipse cx="54" cy="4" rx="1" ry="1.8" fill="#fff" stroke="#8e8e93" stroke-width="1"/><path d="M54 4q-6 6-4 9" fill="none" stroke="#c8342b" stroke-width="1.4"/></g></svg>';
  chatEl.append(t);
  scrollDown();
  await sleep(ms);
  t.remove();
  justTyped = true;
  setStatus('online');
}

/* bot: texto (string ou lista de parágrafos) */
function bot(text) {
  return enqueue(async () => {
    const parts = Array.isArray(text) ? text : [text];
    const len = parts.join(' ').length;
    await typing(Math.min(450 + len * 14, 1400));
    addBubble('in', parts.map((p) => `<p>${fmt(p)}</p>`).join(''));
    speak(parts.join('. '));
  });
}

/* bot: conteúdo especial (pedido, galeria). build() devolve um elemento */
function botBlock(build, { wide = true, delay = 600 } = {}) {
  return enqueue(async () => {
    await typing(delay);
    const el = addBubble('in', '', { wide });
    el.querySelector('.msg__body').append(build());
    scrollDown();
  });
}

function user(text) {
  compactStories();
  return addBubble('out', `<p>${fmt(text)}</p>`);
}

/* respostas rápidas: [{label, run, kind, icon, color, say, echo}] */
const EMOJI_RE = /^((?:\p{Extended_Pictographic}|[☀-➿↩☰])[️‍\p{Extended_Pictographic}♀♂]*)\s+(.+)$/u;
const wideLayout = window.matchMedia('(min-width: 1100px)');
function replies(list) {
  return enqueue(async () => {
    repliesEl.classList.remove('is-leaving');
    repliesEl.innerHTML = '';
    repliesEl.dataset.n = list.filter((r) => !r.kind).length;
    // principal, "ver opções" e textos longos ocupam a linha toda; os demais vão em pares.
    const wide = list.map((r) => r.kind === 'main' || r.kind === 'wa' || r.kind === 'soft' || r.kind === 'back' || r.label.length > 24);
    let run = [];
    const flush = () => { if (!wideLayout.matches && run.length % 2) wide[run[run.length - 1]] = true; run = []; };
    list.forEach((r, i) => { if (wide[i]) flush(); else run.push(i); });
    flush();
    list.forEach((r, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `reply${r.kind ? ' reply--' + r.kind : ''}${wide[i] ? ' reply--wide' : ''}`;
      b.style.setProperty('--i', i);
      let label = r.label;
      if (r.icon && (r.kind === 'main' || r.kind === 'wa' || r.kind === 'back')) {
        b.insertAdjacentHTML('beforeend', icon(r.icon));
      } else if (r.icon) {
        b.insertAdjacentHTML('beforeend', `<span class="sq" style="--ic:${r.color || '#8e8e93'}">${icon(r.icon)}</span>`);
      } else {
        const m = label.match(EMOJI_RE);
        if (m && r.kind !== 'soft') { label = m[2]; b.insertAdjacentHTML('beforeend', `<span class="sq sq--emoji" aria-hidden="true">${m[1]}</span>`); }
      }
      const txt = document.createElement('span'); txt.className = 'reply__txt'; txt.textContent = label;
      b.append(txt);
      b.addEventListener('click', () => pick(b, r));
      repliesEl.append(b);
    });
    measure();
    repliesEl.classList.toggle('is-scrollable', repliesEl.scrollHeight > repliesEl.clientHeight + 4);
    scrollDown();
  });
}
repliesEl.addEventListener('scroll', () => {
  repliesEl.classList.toggle('is-scrollable', repliesEl.scrollTop + repliesEl.clientHeight < repliesEl.scrollHeight - 4);
}, { passive: true });
function pick(b, r) {
  if (repliesEl.classList.contains('is-leaving')) return;
  haptic();
  b.classList.add('is-picked');
  repliesEl.classList.add('is-leaving');
  setTimeout(() => {
    clearReplies();
    if (r.echo !== false) user(r.say || r.label);
    r.run();
  }, reduceMotion ? 0 : 170);
}
function clearReplies() { repliesEl.innerHTML = ''; repliesEl.classList.remove('is-leaving', 'is-scrollable'); measure(); }

function ask(placeholder, handler) {
  enqueue(() => {
    state.awaiting = { handler, placeholder };
    input.placeholder = placeholder;
    input.focus({ preventScroll: true });
  });
}

const backToMenu = { label: 'Ver todas as opções', kind: 'soft', echo: false, run: () => mainMenu(true) };

/* ---------------- PROGRESSO (fita métrica) ---------------- */
const STEPS = ['Tecidos', 'Compra', 'Quantidade', 'Contato', 'Enviar'];
function progress(step) {
  if (step === null) { app.classList.remove('has-order'); return; }
  app.classList.add('has-order');
  $('tapeLabel').textContent = `Consulta: ${STEPS[step]} · ${step + 1} de ${STEPS.length}`;
  requestAnimationFrame(() => $('tapeFill').style.setProperty('--p', `${((step + 1) / STEPS.length) * 100}%`));
}

/* ---------------- CARRINHO ---------------- */
function updateCart(bump = true) {
  cartBtn.hidden = state.cart.length === 0;
  cartCount.textContent = state.cart.length;
  if (bump) { cartBtn.classList.remove('bump'); void cartBtn.offsetWidth; cartBtn.classList.add('bump'); }
  saveOrder();
}
function toggleCart(id) {
  const i = state.cart.indexOf(id);
  if (i >= 0) state.cart.splice(i, 1); else state.cart.push(id);
  updateCart();
  return i < 0;
}
cartBtn.addEventListener('click', () => { haptic(); clearReplies(); summary(); });

/* ---------------- COMPONENTES ---------------- */
/* fotos dos tecidos: só entram na amostra DEPOIS de carregar (no iPhone, foto que não existe deixava a amostra em branco) */
const photoCache = new Map(); // id -> Promise<url|null>
function fabricPhoto(id) {
  if (!photoCache.has(id)) {
    photoCache.set(id, new Promise((res) => {
      const probe = new Image();
      probe.onload = () => res(probe.naturalWidth ? probe.src : null);
      probe.onerror = () => res(null);
      probe.src = `assets/tecidos/${id}.jpg`;
    }));
  }
  return photoCache.get(id);
}
function swatch(f, cls = '') {
  const s = document.createElement('span');
  s.className = `sw sw--${f.tex} ${cls}`;
  s.style.setProperty('--c', f.c);
  s.style.backgroundColor = f.c; // cor garantida mesmo se o navegador ignorar a variável
  if (f.tex === 'other') s.innerHTML = icon('spool');
  else {
    fabricPhoto(f.id).then((url) => {
      if (!url) return;
      const img = new Image();
      img.alt = '';
      img.src = url;
      s.append(img);
    });
  }
  return s;
}

function chipsOf(ids) {
  const wrap = document.createElement('div');
  wrap.className = 'chips';
  ids.map(fabric).forEach((f) => {
    const c = document.createElement('span');
    c.className = 'chip';
    c.append(swatch(f));
    c.append(document.createTextNode(f.name));
    wrap.append(c);
  });
  return wrap;
}

function waLink(label, lines) {
  const a = document.createElement('a');
  a.className = 'inlink';
  a.href = waUrl(lines);
  a.innerHTML = `${icon('wa')}${esc(label)}`;
  a.addEventListener('click', (e) => { e.preventDefault(); launchWA(a.href); });
  return a;
}

/* fotos dos saldos da semana (só as que existem) */
let weekPhotos = [];
const weekReady = Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map((n) => new Promise((res) => {
  const img = new Image();
  img.onload = () => res(img.src);
  img.onerror = () => res(null);
  img.src = `assets/semana/${n}.jpg`;
}))).then((list) => { weekPhotos = list.filter(Boolean); });

/* ---------------- JANELAS (sheets no estilo iPhone) ---------------- */
const sheet = $('sheet'), scrim = $('scrim');
let sheetOnClose = null;
function openSheet({ title = '', body, foot = null, size = 'large', kind = '', onClose = null, from = 'bottom' }) {
  sheet.className = `sheet${size === 'large' ? ' sheet--large' : ''}${kind ? ' sheet--' + kind : ''}`;
  sheet.setAttribute('aria-label', title || 'Janela');
  $('sheetTitle').textContent = title;
  const b = $('sheetBody'); b.innerHTML = ''; b.scrollTop = 0; b.append(body);
  const f = $('sheetFoot'); f.innerHTML = ''; f.hidden = !foot; if (foot) f.append(foot);
  sheetOnClose = onClose;
  sheet.hidden = false; scrim.hidden = false;
  sheet.style.removeProperty('--drag');
  const page = from === 'right' && !reduceMotion && !!sheet.animate;
  if (page) sheet.classList.add('is-page');
  void sheet.offsetWidth;
  sheet.classList.add('is-open'); scrim.classList.add('is-on');
  app.classList.add('has-sheet');
  if (page) {
    // folha de tecido entrando pela direita: chega inclinada, desenrola e assenta
    sheet.animate([
      { transform: 'perspective(1400px) translateX(104%) rotateY(-34deg)', opacity: .6 },
      { transform: 'perspective(1400px) translateX(9%) rotateY(-9deg)', opacity: 1, offset: .62 },
      { transform: 'perspective(1400px) translateX(0) rotateY(0)', opacity: 1 }
    ], { duration: 900, easing: 'cubic-bezier(.2,.75,.25,1)' });
    const curl = document.createElement('span');
    curl.className = 'sheet__curl';
    sheet.append(curl);
    curl.animate([{ opacity: 1, transform: 'translateX(0)' }, { opacity: 0, transform: 'translateX(-40px)' }], { duration: 900, easing: 'ease-out', fill: 'forwards' }).onfinish = () => curl.remove();
  }
  haptic(6);
  setTimeout(() => (sheet.querySelector('[data-autofocus]') || sheet).focus({ preventScroll: true }), 350);
}
function closeSheet(after) {
  if (sheet.hidden) { if (after) after(); return; }
  const page = sheet.classList.contains('is-page') && !sheet.style.getPropertyValue('--drag') && !!sheet.animate;
  scrim.classList.remove('is-on');
  app.classList.remove('has-sheet');
  const cb = sheetOnClose; sheetOnClose = null;
  const finish = () => { sheet.hidden = true; scrim.hidden = true; sheet.classList.remove('is-page'); if (cb) cb(); if (after) after(); };
  if (page) {
    // volta como folha para a direita
    const a = sheet.animate([
      { transform: 'perspective(1400px) translateX(0) rotateY(0)' },
      { transform: 'perspective(1400px) translateX(104%) rotateY(-26deg)', opacity: .7 }
    ], { duration: 480, easing: 'cubic-bezier(.4,0,.6,1)', fill: 'forwards' });
    let ended = false;
    const end = () => { if (ended) return; ended = true; sheet.classList.remove('is-open'); a.cancel(); finish(); };
    a.onfinish = end;
    setTimeout(end, 700); // garantia, caso a animação não rode
    return;
  }
  sheet.classList.remove('is-open', 'is-dragging');
  sheet.style.removeProperty('--drag');
  setTimeout(finish, reduceMotion ? 0 : 420);
}
$('sheetClose').addEventListener('click', () => closeSheet());
scrim.addEventListener('click', () => closeSheet());

/* arrastar a janela para baixo para fechar */
(function dragToClose() {
  let y0 = null, dy = 0, t0 = 0;
  const start = (e) => {
    if (sheet.classList.contains('sheet--actions')) return;
    const onHead = e.target.closest('.sheet__grab, .sheet__head');
    const body = $('sheetBody');
    if (!onHead && !(e.target.closest('.sheet__body') && body.scrollTop <= 0)) return;
    if (e.target.closest('button, input, a') && !onHead) return;
    y0 = e.clientY; dy = 0; t0 = Date.now();
  };
  const move = (e) => {
    if (y0 === null) return;
    dy = Math.max(0, e.clientY - y0);
    if (dy > 6) { sheet.classList.add('is-dragging'); sheet.style.setProperty('--drag', `${dy}px`); }
  };
  const end = () => {
    if (y0 === null) return;
    const v = dy / Math.max(1, Date.now() - t0);
    sheet.classList.remove('is-dragging');
    if (dy > 140 || (dy > 40 && v > 0.6)) closeSheet(); else sheet.style.removeProperty('--drag');
    y0 = null;
  };
  sheet.addEventListener('pointerdown', start);
  window.addEventListener('pointermove', move, { passive: true });
  window.addEventListener('pointerup', end);
  window.addEventListener('pointercancel', end);
})();

/* folha de ações (botão +) */
function openActions(title, items) {
  const body = h(`<div><div class="acts">${title ? `<div class="acts__title">${esc(title)}</div>` : ''}</div><div class="acts acts--cancel"><button type="button">Cancelar</button></div></div>`);
  const group = body.firstElementChild;
  items.forEach((it) => {
    const b = h(`<button type="button"${it.danger ? ' class="is-danger"' : ''}>${it.icon ? icon(it.icon) : ''}<span>${esc(it.label)}</span></button>`);
    b.addEventListener('click', () => closeSheet(it.run));
    group.append(b);
  });
  body.lastElementChild.firstElementChild.addEventListener('click', () => closeSheet());
  openSheet({ title: title || 'Opções', body, size: 'auto', kind: 'actions' });
}

/* ---------------- CATÁLOGO (janela) ---------------- */
function catalogIds() { return FABRICS.filter((f) => !f.custom).map((f) => f.id); }
function openCatalog(ids, { title = 'Escolha os tecidos', lead = 'Toque em um ou mais. Não achou? Escreva o nome no fim da lista.', onDone = afterFabric } = {}) {
  let done = false;
  let q = '';
  const body = document.createElement('div');
  body.innerHTML = `<p class="sheet__lead">${esc(lead)}</p>`;
  const grid = document.createElement('div');
  grid.className = 'fgrid';
  const empty = h('<p class="fgrid__empty" hidden>Não está na lista? Sem problema: adicione o nome que você digitou.</p>');
  // adicionar o nome digitado na busca
  const addTyped = h(`<button type="button" class="fcard fcard--write fcard--typed" hidden>${icon('plus')}<strong></strong><small>Toque para incluir na consulta</small></button>`);
  const full = ids.length > 6;
  let segId = null;
  const cards = () => grid.querySelectorAll('.fcard:not(.fcard--write)');
  const segHead = h(`<div class="seghead" hidden><button type="button" class="seghead__back">${icon('back')}Segmentos</button><strong></strong><small></small></div>`);
  const segList = h('<div class="segs" hidden></div>');
  let search = null;
  // mostra: todos (com busca), a lista de segmentos, ou os tecidos do segmento escolhido
  const view = (mode) => {
    const inSeg = mode === 'seg';
    if (search) search.hidden = inSeg;
    segList.hidden = !(inSeg && !segId);
    segHead.hidden = !(inSeg && segId);
    grid.hidden = inSeg && !segId;
    const seg = SEGMENTS.find((x) => x.id === segId);
    const nq = norm(q);
    cards().forEach((c) => { c.hidden = inSeg ? !(seg && seg.fabrics.includes(c.dataset.id)) : !!nq && !norm(c.dataset.k).includes(nq); });
    if (seg) { segHead.querySelector('strong').textContent = seg.name; segHead.querySelector('small').textContent = seg.desc; }
    addTyped.hidden = inSeg || !q;
    empty.hidden = inSeg || [...cards()].some((c) => !c.hidden);
  };
  if (full) {
    const modes = h(`<div class="seg seg--two" role="group" aria-label="Como ver os tecidos"><button type="button" aria-pressed="true" data-m="all">Todos</button><button type="button" aria-pressed="false" data-m="seg">Por segmento</button></div>`);
    let mode = 'all';
    modes.querySelectorAll('button').forEach((m) => m.addEventListener('click', () => {
      haptic();
      mode = m.dataset.m; segId = null;
      modes.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === m)));
      view(mode);
    }));
    search = h(`<label class="search">${icon('search')}<span class="sr-only">Buscar tecido</span><input type="search" placeholder="Buscar tecido" enterkeyhint="search" /></label>`);
    search.querySelector('input').addEventListener('input', (e) => {
      q = e.target.value.trim();
      addTyped.querySelector('strong').textContent = `Adicionar “${q}”`;
      view('all');
    });
    SEGMENTS.forEach((sg, i) => {
      const t = h(`<button type="button" class="segtile"><span class="segtile__sw"></span><strong>${esc(sg.name)}</strong><small>${esc(sg.desc)}</small>${icon('chevron')}</button>`);
      t.style.setProperty('--i', i);
      sg.fabrics.slice(0, 3).map(fabric).forEach((f) => t.querySelector('.segtile__sw').append(swatch(f)));
      t.addEventListener('click', () => { haptic(); segId = sg.id; view('seg'); $('sheetBody').scrollTop = 0; });
      segList.append(t);
    });
    segHead.querySelector('button').addEventListener('click', () => { haptic(); segId = null; view('seg'); });
    body.append(modes, search, segList, segHead);
  }
  const btn = h('<button type="button" class="btn"></button>');
  const sync = () => {
    const n = state.cart.length;
    btn.disabled = n === 0;
    btn.innerHTML = n ? `Continuar com ${n} ${n === 1 ? 'tecido' : 'tecidos'} ${icon('chevron')}` : 'Toque nos tecidos que você quer';
  };
  ids.map(fabric).forEach((f, i) => {
    const c = document.createElement('button');
    c.type = 'button';
    c.className = 'fcard';
    c.dataset.k = `${f.name} ${f.use}`;
    c.dataset.id = f.id;
    c.style.setProperty('--i', i);
    c.setAttribute('aria-pressed', String(state.cart.includes(f.id)));
    c.append(swatch(f));
    c.insertAdjacentHTML('beforeend', `<strong>${esc(f.name)}</strong><small>${esc(f.use)}</small><span class="fcard__check">${icon('check')}</span>`);
    c.addEventListener('click', () => { haptic(); c.setAttribute('aria-pressed', String(toggleCart(f.id))); sync(); });
    grid.append(c);
  });
  addTyped.addEventListener('click', () => {
    haptic();
    const id = addCustomFabric(q);
    if (!state.cart.includes(id)) state.cart.push(id);
    updateCart();
    done = true; closeSheet(onDone);
  });
  // escrever o tecido na conversa
  const write = h(`<button type="button" class="fcard fcard--write">${icon('pencil')}<strong>Outro tecido</strong><small>Escreva o nome do tecido que você quer</small></button>`);
  write.style.setProperty('--i', ids.length);
  write.addEventListener('click', () => { haptic(); done = true; closeSheet(askTypedFabric); });
  grid.append(addTyped, write, empty);
  body.append(grid);
  btn.addEventListener('click', () => { done = true; closeSheet(onDone); });
  sync();
  openSheet({ title, body, foot: btn, from: 'right', onClose: () => { if (!done) catalogClosed(); } });
}
function askTypedFabric() {
  bot('Claro! Escreva aqui embaixo o nome do tecido que você quer. ✍️');
  ask('Ex.: Two way, Bengaline, Chiffon…', (t) => {
    const id = addCustomFabric(t);
    if (!state.cart.includes(id)) state.cart.push(id);
    updateCart();
    bot(`Anotei *${fabric(id).name}*! ✅`);
    if (state.cart.length > 1) bot(`Você escolheu até agora: *${state.cart.map((x) => fabric(x).name).join(', ')}*.`);
    askPurchase();
  });
  replies([{ label: 'Voltar ao catálogo', icon: 'spool', color: '#a2845e', echo: false, run: () => { state.awaiting = null; input.placeholder = 'Digite uma mensagem'; openCatalog(catalogIds()); } }]);
}
function catalogClosed() {
  if (state.cart.length) {
    replies([{ label: 'Continuar', kind: 'main', icon: 'chevron', echo: false, run: afterFabric }, { label: 'Ver os tecidos de novo', icon: 'spool', color: '#a2845e', echo: false, run: () => openCatalog(catalogIds()) }, backToMenu]);
  } else {
    replies([{ label: 'Ver os tecidos', kind: 'main', icon: 'spool', echo: false, run: () => openCatalog(catalogIds()) }, notListed, backToMenu]);
  }
}

/* ---------------- DADOS DA LOJA (janela "perfil") ---------------- */
function openInfo() {
  const body = h(`<div>
    <div class="profile">
      <div class="profile__avatar"><img src="assets/logo-mark-transparent.png?v=2" alt="" /></div>
      <h2 class="brand-h"><img src="assets/abrs-wordmark.png?v=3" alt="ABRS Tecidos" width="840" height="242" /></h2>
      <p>${PHONE_LABEL}</p>
    </div>
    <div class="actions">
      <a href="#" class="is-wa" data-act="wa">${icon('wa')}WhatsApp</a>
      <a href="tel:+${WHATSAPP_NUMBER}">${icon('phone')}Ligar</a>
      <button type="button" data-act="share">${icon('share')}Compartilhar</button>
    </div>
    <p class="group__title">Como funciona</p>
    <div class="group">
      <div class="row"><span class="sq" style="--ic:#a2845e">${icon('chat')}</span><span class="row__txt">Você escolhe o tecido<small>Pelo nome, pela peça ou por uma foto</small></span></div>
      <div class="row"><span class="sq" style="--ic:#007aff">${icon('search')}</span><span class="row__txt">Mandamos fotos e preço<small>Do tecido disponível na loja, no WhatsApp</small></span></div>
      <div class="row"><span class="sq" style="--ic:#34c759">${icon('box')}</span><span class="row__txt">Você paga e recebe<small>Pix ou cartão · Correios para todo o Brasil</small></span></div>
    </div>
    <p class="group__title">Informações</p>
    <div class="group">
      <div class="row"><span class="sq" style="--ic:#ff9500">${icon('truck')}</span><span class="row__txt">Envio para todo o Brasil<small>Pelos Correios. Frete calculado pelo CEP</small></span></div>
      <div class="row"><span class="sq" style="--ic:#af52de">${icon('card')}</span><span class="row__txt">Pix ou cartão</span></div>
      <div class="row"><span class="sq" style="--ic:#ff3b30">${icon('pin')}</span><span class="row__txt">Rua Santa Clara, 187 · Brás<small>Loja em São Paulo · Atacado e varejo</small></span></div>
      <div class="row"><span class="sq" style="--ic:#5856d6">${icon('person')}</span><span class="row__txt">Atendimento pelo WhatsApp<small>Gente de verdade, da loja</small></span></div>
      <button type="button" class="row" data-act="faq"><span class="sq" style="--ic:#8e8e93">${icon('help')}</span><span class="row__txt">Outras dúvidas</span>${icon('chevron')}</button>
    </div>
    <p class="group__title">Para ler melhor</p>
    <div class="group">
      <div class="row"><span class="sq" style="--ic:#007aff"><b style="font-size:15px">Aa</b></span><span class="row__txt">Tamanho da letra</span></div>
      <div class="row" style="padding-top:0"><div class="seg" style="flex:1" role="group" aria-label="Tamanho da letra">
        <button type="button" data-scale="0" style="font-size:15px">A</button><button type="button" data-scale="1" style="font-size:19px">A</button><button type="button" data-scale="2" style="font-size:23px">A</button>
      </div></div>
    </div>
    <div class="group"><button type="button" class="row row--danger" data-act="clear"><span class="row__txt">Limpar conversa</span></button></div>
    <div class="credit"><span>site por</span><img src="assets/beriz-tec-logo.png" alt="Beriz Tec" /></div>
  </div>`);
  body.querySelector('[data-act="wa"]').addEventListener('click', (e) => { e.preventDefault(); closeSheet(() => launchWA(waUrl(orderLines()))); });
  body.querySelector('[data-act="share"]').addEventListener('click', share);
  body.querySelector('[data-act="clear"]').addEventListener('click', () => closeSheet(confirmClear));
  body.querySelector('[data-act="faq"]').addEventListener('click', () => closeSheet(() => { clearReplies(); user('Tenho outras dúvidas'); flowFaq(); }));
  body.querySelectorAll('[data-scale]').forEach((b) => b.addEventListener('click', () => { haptic(); setScale(+b.dataset.scale); }));
  body.querySelectorAll('[data-voice-switch]').forEach((s) => s.addEventListener('click', () => { haptic(); setVoice(!voiceOn); }));
  openSheet({ title: 'Dados', body });
  applyScale();
}
$('infoBtn').addEventListener('click', openInfo);

/* limpar a conversa e tudo que ficou salvo neste celular (só aparece em "Dados") */
function confirmClear() {
  openActions('A conversa e as escolhas salvas neste celular serão apagadas.', [
    { label: 'Limpar conversa', danger: true, run: clearHistory }
  ]);
}
function clearHistory() {
  try {
    Object.keys(localStorage).filter((k) => k.startsWith('abrs_') && k !== 'abrs_scale').forEach((k) => localStorage.removeItem(k));
  } catch { /* sem armazenamento */ }
  // a conversa some suavemente e o atendimento recomeça do zero
  chatEl.style.transition = 'opacity .35s ease';
  chatEl.style.opacity = '0';
  setTimeout(() => location.reload(), reduceMotion ? 0 : 380);
}

async function share() {
  const url = location.origin + location.pathname;
  const data = { title: 'ABRS Tecidos', text: 'Loja de tecidos no Brás com envio para todo o Brasil. Escolha pelo atendimento online:', url };
  try {
    if (navigator.share) { await navigator.share(data); return; }
    await navigator.clipboard.writeText(url);
    const b = document.querySelector('[data-act="share"]');
    if (b) { b.lastChild.textContent = 'Link copiado!'; }
  } catch { /* cancelado */ }
}

/* ---------------- FOTO EM TELA CHEIA (zoom a partir da miniatura) ---------------- */
async function zoomImage(img) {
  const from = img.getBoundingClientRect();
  const box = h('<div class="lightbox" role="dialog" aria-label="Foto"><img alt="" /></div>');
  const big = box.querySelector('img');
  big.src = img.src;
  document.body.append(box);
  try { await big.decode(); } catch { /* ok */ }
  const to = big.getBoundingClientRect();
  const inv = `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})`;
  requestAnimationFrame(() => box.classList.add('is-on'));
  const opts = { duration: reduceMotion ? 1 : 480, easing: 'cubic-bezier(.32,.72,0,1)' };
  big.style.transformOrigin = '0 0';
  big.animate([{ transform: inv }, { transform: 'none' }], opts);
  const close = () => {
    box.classList.remove('is-on');
    const a = big.animate([{ transform: 'none' }, { transform: inv }], { ...opts, duration: reduceMotion ? 1 : 360 });
    a.onfinish = () => box.remove();
  };
  box.addEventListener('click', close);
  document.addEventListener('keydown', function k(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', k); } });
}
chatEl.addEventListener('click', (e) => {
  const img = e.target.closest('img.photo, .gallery img');
  if (img) zoomImage(img);
});

/* ---------------- CONVERSAS (FLUXOS) ---------------- */

function mainMenu(withText = false) {
  if (withText) bot('Como posso te ajudar? Toque numa opção 👇');
  progress(null);
  trail = [];
  replies([
    { label: 'Quero um tecido', icon: 'spool', color: '#a2845e', run: flowFabric },
    { label: 'Tenho uma foto', say: 'Não sei o nome, tenho foto', icon: 'camera', color: '#007aff', run: flowPhoto },
    { label: 'Frete e pagamento', icon: 'truck', color: '#ff9500', run: flowShipPay },
    { label: 'Outras dúvidas', icon: 'help', color: '#8e8e93', run: flowFaq },
    { label: 'Falar com a loja no WhatsApp', kind: 'wa', icon: 'wa', run: flowDirect }
  ]);
}

const notListed = { label: 'Escrever o tecido', icon: 'pencil', color: '#8e8e93', echo: false, run: askTypedFabric };

function flowFabric() {
  progress(0);
  bot('Vou abrir o catálogo. Toque nos tecidos que você quer. 👇');
  // tempo para a cliente ler a mensagem antes de o catálogo entrar
  enqueue(async () => { await sleep(1700); openCatalog(catalogIds()); });
}

function afterFabric() {
  if (!state.cart.length) { catalogClosed(); return; }
  const el = user(`Quero ${state.cart.length === 1 ? 'este tecido' : 'estes tecidos'}:`);
  el.querySelector('.msg__body').append(chipsOf(state.cart));
  bot(`Ótima escolha! Anotei *${state.cart.map((id) => fabric(id).name).join(', ')}*. ✅`);
  askPurchase();
}

const hinted = (o) => ({ label: `${o.label} · ${o.hint}`, say: o.label });

/* "Voltar" no questionário: guarda as etapas mostradas e desfaz a anterior */
let trail = [];
function stepShown(id) {
  if (!trail.length) trail.push('catalog');
  if (trail[trail.length - 1] !== id) trail.push(id);
}
const UNDO = {
  catalog: () => {},
  purchase: () => { state.purchase = ''; },
  format: () => { state.format = ''; state.qty = ''; },
  qty: () => { state.qty = ''; },
  name: () => { state.name = ''; store.set('name', ''); },
  city: () => { state.city = ''; store.set('city', ''); },
  company: () => { companyAsked = false; state.company = ''; store.set('company', ''); }
};
const RERUN = {
  catalog: () => openCatalog(catalogIds()),
  purchase: () => askPurchase(), format: () => askFormat(), qty: () => askQty(),
  name: () => askName(), city: () => askCity(), company: () => askCompany()
};
function goBack() {
  state.awaiting = null;
  input.placeholder = 'Digite uma mensagem';
  const cur = trail.pop();
  if (cur && cur !== 'catalog') UNDO[cur](); // a etapa atual também volta ao zero (ex.: empresa pode ser perguntada de novo)
  const prev = trail.pop();
  if (!prev) { mainMenu(true); return; }
  UNDO[prev]();
  saveOrder();
  RERUN[prev]();
}
const backStep = { label: 'Voltar', kind: 'back', icon: 'back', echo: false, run: goBack };

function askPurchase() {
  if (state.purchase) return askFormat();
  stepShown('purchase');
  progress(1);
  bot('Como você quer comprar?');
  replies([...PURCHASE.map((o) => ({ ...hinted(o), run: () => { if (state.purchase !== o.v) state.qty = ''; state.purchase = o.v; saveOrder(); askFormat(); } })), backStep]);
}

function askFormat() {
  if (state.format) return askQty();
  stepShown('format');
  progress(2);
  bot('E você estaria precisando de:');
  replies([...FORMATS.map((o) => ({ ...hinted(o), run: () => { state.format = o.v; state.qty = ''; saveOrder(); askQty(); } })), backStep]);
}

function askQty() {
  if (state.qty) return askName();
  if (!state.format) return askFormat();
  stepShown('qty');
  progress(2);
  bot(state.format === 'Retalhos' ? 'Quantos quilos, mais ou menos? Uma referência aproximada já ajuda.' : 'Quantas peças ou rolos, mais ou menos?');
  replies([...qtyOptions().map((q) => ({ label: q, run: () => { state.qty = q; saveOrder(); askName(); } })), backStep]);
}

function askName() {
  if (state.name) return askCity();
  stepShown('name');
  progress(3);
  bot('Com quem vamos falar? Escreva seu nome aqui embaixo. ✍️');
  ask('Ex.: Maria', (t) => {
    state.name = t.replace(/\s+/g, ' ').slice(0, 40);
    store.set('name', state.name);
    bot(`Prazer, *${firstName()}*! 😊`);
    askCity();
  });
  replies([backStep]);
}

function askCity() {
  if (state.city) return askCompany();
  stepShown('city');
  progress(3);
  bot('De qual cidade você é? Assim já calculamos o frete dos Correios. 🚚');
  ask('Ex.: Campinas / SP', (t) => { state.city = t.slice(0, 50); store.set('city', state.city); askCompany(); });
  replies([{ label: 'Prefiro não dizer agora', kind: 'soft', run: () => { state.awaiting = null; input.placeholder = 'Digite uma mensagem'; askCompany(); } }, backStep]);
}

let companyAsked = false;
function askCompany() {
  if (state.company || companyAsked) return summary();
  companyAsked = true;
  stepShown('company');
  progress(3);
  bot('Você tem empresa ou ateliê? Se quiser, escreva o nome. *(opcional)*');
  ask('Ex.: Oficina da Moda', (t) => { state.company = t.slice(0, 60); store.set('company', state.company); summary(); });
  replies([{ label: 'Não tenho / pular', kind: 'soft', run: () => { state.awaiting = null; input.placeholder = 'Digite uma mensagem'; summary(); } }, backStep]);
}

function summary() {
  if (!state.cart.length && !state.project) {
    bot('Você ainda não escolheu nenhum tecido. Quer escolher agora?');
    replies([{ label: 'Escolher tecido', kind: 'main', icon: 'spool', run: flowFabric }, backToMenu]);
    return;
  }
  progress(4);
  bot('Prontinho! Confira o resumo do que você procura: 📋');
  botBlock(() => {
    const box = document.createElement('div');
    box.className = 'order';
    const rows = [
      ...(state.project ? [['Para', state.project]] : []),
      ['Formato', state.format || 'a combinar'],
      ['Quantidade', state.qty || 'a combinar'],
      ['Nome', state.name || '—'],
      ['Cidade', state.city || '—'],
      ...(state.company ? [['Empresa', state.company]] : []),
      ...state.notes.map((n) => ['Observação', n])
    ];
    box.innerHTML = `<div class="order__head"><span class="sq" style="--ic:#0e8a43">${icon('bag')}</span><span><strong class="order__title">RESUMO</strong></span></div>`;
    if (state.cart.length) box.append(chipsOf(state.cart));
    box.insertAdjacentHTML('beforeend', `<dl>${rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
      <p class="order__note">${icon('eye')}<span>Antes de você pagar, mandamos fotos e preço do tecido. Você revisa a mensagem no WhatsApp antes de enviar.</span></p>`);
    return box;
  });
  replies([
    { label: 'Enviar consulta no WhatsApp', kind: 'main', icon: 'wa', run: sendOrder },
    { label: 'Mais um tecido', icon: 'spool', color: '#a2845e', echo: false, run: () => openCatalog(catalogIds()) },
    { label: 'Observação', say: 'Quero escrever uma observação', icon: 'pencil', color: '#ff9500', run: () => { bot('Pode escrever: cor, para quando precisa, qualquer detalhe. ✍️'); ask('Escreva sua observação', (t) => { state.notes.push(t); bot('Anotado! 📝'); summary(); }); } },
    backToMenu
  ]);
}

function sendOrder() {
  const url = waUrl(orderLines());
  bot(`Perfeito${state.name ? ', ' + firstName() : ''}! Vou abrir o WhatsApp com sua mensagem já escrita. É só tocar em *Enviar* lá. 👍`);
  botBlock(() => waLink('Abrir o WhatsApp', orderLines()), { delay: 300 });
  enqueue(async () => { await sleep(500); progress(null); launchWA(url); });
  replies([backToMenu]);
}

/* foto: o chat não anexa imagem; leva direto ao WhatsApp com a mensagem pronta e lá a cliente envia a foto */
function flowPhoto() {
  bot('Ótimo! Pela foto a gente confere no estoque e te mostra o mesmo tecido ou um bem parecido. 📷');
  sendPhotoWA();
}

function sendPhotoWA() {
  const lines = ['Olá, ABRS Tecidos! 👋', ''];
  if (state.name) lines.push(`Aqui é ${state.name}${state.city ? `, de ${state.city}` : ''}.`);
  lines.push('Tenho uma foto do tecido que procuro e vou mandar aqui em seguida. 📷', 'Vocês conseguem ver se têm na loja e me passar o valor?');
  bot('Vou abrir o nosso WhatsApp com a mensagem pronta. Lá, toque no *clipe 📎* ou na *câmera 📷* e envie a foto do tecido. 👍');
  botBlock(() => waLink('Abrir o WhatsApp', lines), { delay: 300 });
  enqueue(async () => { await sleep(900); launchWA(waUrl(lines), 'Lá, toque no <b>clipe</b> ou na <b>câmera</b> e envie a foto do tecido.'); });
  replies([backToMenu]);
}

$('camBtn').addEventListener('click', () => { haptic(); clearReplies(); user('Quero mandar uma foto do tecido'); flowPhoto(); });

function flowProject() {
  bot('Me conta: o que você vai costurar? ✂️');
  replies([...PROJECTS.map((p) => ({ label: `${p.emo} ${p.label}`, run: () => showProject(p) })), backToMenu]);
}

function showProject(p) {
  state.project = p.label.toLowerCase();
  progress(0);
  bot(p.text);
  bot('Separei os tecidos certos para isso. Toque nos que te interessam. 👇');
  enqueue(async () => { await sleep(1500); openCatalog(p.fabrics, { title: `Para ${p.label.toLowerCase()}`, lead: 'Sugestões para a sua peça. Toque em um ou mais.' }); });
}

function flowSaldos() {
  bot(['🏷️ *Saldo* é a sobra de produção das fábricas.', 'Tecido bom, preço menor e quantidade limitada. *Quando acaba, acabou!*']);
  enqueue(() => weekReady);
  enqueue(() => {
    if (weekPhotos.length) {
      bot('Olha o que chegou esta semana. Toque na foto para ver de perto: 👇');
      botBlock(() => {
        const g = document.createElement('div');
        g.className = 'gallery';
        weekPhotos.forEach((src) => { const i = new Image(); i.src = src; i.alt = 'Saldo da semana'; g.append(i); });
        return g;
      });
    } else {
      bot('As fotos dos saldos desta semana a gente manda na hora pelo WhatsApp. 📸');
    }
    replies([
      { label: 'Ver saldos no WhatsApp', kind: 'main', icon: 'wa', run: () => {
        const lines = ['Olá, ABRS Tecidos! Tudo bem?', 'Quero ver os saldos que chegaram esta semana.', 'Pode me mandar as fotos e os valores?'];
        botBlock(() => waLink('Abrir o WhatsApp', lines), { delay: 300 });
        enqueue(async () => { await sleep(500); launchWA(waUrl(lines)); });
      } },
      { label: 'Escolher um tecido', icon: 'spool', color: '#a2845e', run: flowFabric },
      backToMenu
    ]);
  });
}

function flowShipPay() {
  bot(FAQ[0].a);
  bot(FAQ[1].a);
  replies([{ label: 'Quero um tecido', icon: 'spool', color: '#a2845e', run: flowFabric }, { label: 'Outras dúvidas', icon: 'help', color: '#8e8e93', run: flowFaq }, backToMenu]);
}

function flowFaq() {
  bot('Sobre o que é sua dúvida? 👇');
  replies([...FAQ.map((f) => ({ label: f.q, run: () => answer(f) })), backToMenu]);
}
function answer(f) {
  bot(f.a);
  replies([{ label: 'Outra dúvida', icon: 'help', color: '#8e8e93', run: flowFaq }, { label: 'Quero um tecido', icon: 'spool', color: '#a2845e', run: flowFabric }, backToMenu]);
}

function flowDirect() {
  bot(`Claro! Vou abrir o WhatsApp da loja${state.cart.length ? ' com o que você já escolheu' : ''}. 😊`);
  botBlock(() => waLink('Abrir o WhatsApp', orderLines()), { delay: 300 });
  enqueue(async () => { await sleep(500); launchWA(waUrl(orderLines())); });
  replies([backToMenu]);
}

/* ---------------- TEXTO LIVRE (o cliente digita) ---------------- */
/* palavras (sem acento, minúsculas) que ativam cada tecido / peça */
const FABRIC_KEYS = {
  jeans: ['jeans', 'denim'], brim: ['brim', 'sarja'], malha: ['malha '], viscose: ['viscose '], viscolycra: ['viscolycra', 'viscolaica'],
  linho: [' linho'], moletom: ['moletom ', 'moleton '], tricoline: ['tricoline'], alfaiataria: ['alfaiataria'], crepe: ['crepe'],
  cetim: ['cetim'], suplex: ['suplex'], cotton: ['cotton'], percal: ['percal'], forro: ['forro'], lycra: [' lycra', 'licra'],
  liocel: ['liocel', 'lyocell', 'tencel'], oxford: ['oxford'], tactel: ['tactel'], ribana: ['ribana'], tule: [' tule'],
  malhapv: ['malha pv', ' pv ', 'malha fria'], canelada: ['canelad'], twoway: ['two way', 'twoway'], dryfit: ['dry fit', 'dryfit'],
  helanca: ['helanca'], moletinho: ['moletinho'], microfibra: ['microfibra'], neoprene: ['neoprene', 'neopreme'],
  gabardine: ['gabardine'], bengaline: ['bengaline'], duna: [' duna'], viscolinho: ['viscolinho'], popeline: ['popeline'],
  cambraia: ['cambraia'], musseline: ['musseline', 'musselina'], laise: ['laise', 'lese'], chiffon: ['chiffon', 'chifon'],
  georgette: ['georgette', 'georgete'], organza: ['organza'], renda: ['renda'], veludo: ['veludo'], paete: ['paete'],
  jacquard: ['jacquard', 'jacar'], plush: ['plush'], soft: [' soft'], suede: ['suede'], corino: ['corino', 'couro sintetico', 'courino'],
  lona: [' lona'], algodaocru: ['algodao cru'], voil: [' voil', ' voal'], chita: ['chita'], feltro: ['feltro']
};
const PROJECT_KEYS = {
  vestido: ['vestido'], calca: ['calca'], camiseta: ['camiseta', 'blusa', 'blusinha'], fitness: ['fitness', 'legging', 'academia', 'praia', 'biquini'],
  camisa: ['camisa ', 'camisas '], frio: ['frio', 'inverno', 'agasalho'], uniforme: ['uniforme'], festa: ['festa', 'pijama', 'forro']
};
const ROUTES = [
  { re: /\b(oi|ola|bom dia|boa tarde|boa noite|tudo bem)\b/, run: () => { bot(`${greeting()}! 😊`); mainMenu(true); } },
  { re: /\b(foto|imagem|nao sei o nome|nao sei qual)\b/, run: flowPhoto },
  { re: /\b(frete|correio|correios|envio|enviar|entrega|cep|mandam|manda pra)\b/, run: () => answer(FAQ[0]) },
  { re: /\b(pix|cartao|pagamento|pagar|parcel)/, run: () => answer(FAQ[1]) },
  { re: /\b(saldo|saldos|promoc|novidade|chegou)/, run: flowSaldos },
  { re: /\b(minimo|minima)\b/, run: () => answer(FAQ[2]) },
  { re: /\b(amostra|ver antes|video)\b/, run: () => answer(FAQ[3]) },
  { re: /\b(retirar|endereco|loja|bras|pessoalmente)\b/, run: () => answer(FAQ[5]) },
  { re: /\b(horario|abre|fecha|sabado|domingo)\b/, run: () => answer(FAQ[6]) },
  { re: /\b(preco|valor|quanto custa|quanto e|kg|quilo|metro)\b/, run: () => {
      bot(['Os valores mudam conforme o saldo disponível na semana. 💰', 'Me diga qual tecido você quer que a gente passa o preço certinho no WhatsApp.']);
      flowFabric();
    } },
  { re: /\b(daniel|humano|atendente|vendedor|vendedora|pessoa|falar com)\b/, run: flowDirect }
];

function handleText(text) {
  const t = ` ${norm(text).replace(/[^a-z0-9]+/g, ' ')} `;
  const found = FABRICS.filter((f) => (FABRIC_KEYS[f.id] || [f.id]).some((k) => t.includes(k)));
  if (found.length) {
    found.forEach((f) => { if (!state.cart.includes(f.id)) state.cart.push(f.id); });
    updateCart();
    bot(`Anotei *${found.map((f) => f.name).join(', ')}*! ✅`);
    askPurchase();
    return;
  }
  const proj = PROJECTS.find((p) => PROJECT_KEYS[p.id].some((k) => t.includes(k)));
  if (proj) { showProject(proj); return; }
  const route = ROUTES.find((r) => r.re.test(t));
  if (route) { route.run(); return; }
  state.notes.push(text);
  bot(['Anotei sua mensagem! 📝', 'Vou deixar ela junto da sua consulta para a loja ler no WhatsApp.']);
  replies([{ label: 'Mandar para a loja agora', kind: 'main', icon: 'wa', run: flowDirect }, backToMenu]);
}

$('composer').addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) { clearReplies(); mainMenu(true); return; }
  input.value = '';
  syncComposer();
  clearReplies();
  user(text);
  if (state.awaiting) {
    const { handler } = state.awaiting;
    state.awaiting = null;
    input.placeholder = 'Digite uma mensagem';
    handler(text);
  } else {
    handleText(text);
  }
});

$('plusBtn').addEventListener('click', () => {
  haptic();
  openActions('O que você quer fazer?', [
    { label: 'Mandar foto do tecido', icon: 'camera', run: () => { clearReplies(); user('Quero mandar uma foto do tecido'); flowPhoto(); } },
    { label: 'Ver catálogo de tecidos', icon: 'spool', run: () => { clearReplies(); progress(0); openCatalog(catalogIds()); } },
    { label: 'Ver todas as opções', icon: 'menu', run: () => { clearReplies(); mainMenu(true); } },
    { label: 'Dados da ABRS Tecidos', icon: 'info', run: openInfo }
  ]);
});

/* campo: a câmera some enquanto a pessoa digita (o microfone foi retirado a pedido do Daniel) */
const camBtn = $('camBtn');
function syncComposer() { camBtn.hidden = !!input.value.trim(); }
input.addEventListener('input', syncComposer);
syncComposer();

/* ---------------- NOVIDADES (status) ---------------- */
const seen = new Set(store.get('seen', []));
const storyEl = $('story');
let storyIdx = 0, slideIdx = 0, storyTimer = null, slideStart = 0, remaining = 0, paused = false, storyOrigin = null;
const SLIDE_MS = reduceMotion ? 9000 : 6000;

function storyThumb(s) { return `<span class="sw sw--${s.tex}" style="--c:${s.c}">${icon(s.ic)}</span>`; }
function renderStoryList() {
  const ul = $('storyList');
  ul.innerHTML = '';
  STORIES.forEach((s, i) => {
    const li = document.createElement('li');
    li.className = seen.has(s.id) ? 'seen' : '';
    li.innerHTML = `<button type="button"><span class="ring">${storyThumb(s)}</span>${esc(s.label)}</button>`;
    li.querySelector('button').addEventListener('click', (e) => { haptic(); openStory(i, e.currentTarget.querySelector('.ring')); });
    ul.append(li);
  });
  const stack = $('storyStack');
  stack.className = 'stack' + (STORIES.every((s) => seen.has(s.id)) ? ' seen' : '');
  stack.innerHTML = STORIES.slice(0, 3).map((s) => `<span class="sw sw--${s.tex}" style="--c:${s.c}"></span>`).join('');
}
function compactStories() { app.classList.add('is-compact'); }
$('storiesMini').addEventListener('click', () => { haptic(); app.classList.remove('is-compact'); });

async function openStory(i, originEl) {
  await weekReady;
  const first = storyEl.hidden;
  storyIdx = i; slideIdx = 0;
  storyEl.hidden = false;
  seen.add(STORIES[i].id); store.set('seen', [...seen]); renderStoryList();
  $('storyTitle').textContent = STORIES[i].label;
  $('storyCta').textContent = STORIES[i].cta.label;
  showSlide();
  if (first) {
    const r = storyEl.getBoundingClientRect();
    const o = originEl ? originEl.getBoundingClientRect() : { left: r.left + r.width / 2, top: r.top + r.height / 2, width: 0, height: 0 };
    storyOrigin = { x: o.left + o.width / 2 - r.left, y: o.top + o.height / 2 - r.top, r: Math.max(o.width / 2, 10), R: Math.hypot(r.width, r.height) };
    if (!reduceMotion && storyEl.animate) {
      storyEl.animate([{ clipPath: `circle(${storyOrigin.r}px at ${storyOrigin.x}px ${storyOrigin.y}px)` }, { clipPath: `circle(${storyOrigin.R}px at ${storyOrigin.x}px ${storyOrigin.y}px)` }],
        { duration: 520, easing: 'cubic-bezier(.32,.72,0,1)' });
    }
    storyEl.focus({ preventScroll: true });
  }
}

function slidesOf(story) {
  return story.slides.flatMap((s) => (s.weekPhotos ? weekPhotos.map((src) => ({ img: src })) : [s]));
}

function showSlide() {
  const slides = slidesOf(STORIES[storyIdx]);
  const s = slides[slideIdx];
  const bars = $('storyBars');
  bars.innerHTML = slides.map((_, k) => `<span class="${k < slideIdx ? 'done' : k === slideIdx ? 'now' : ''}"><i></i></span>`).join('');
  bars.style.setProperty('--dur', SLIDE_MS + 'ms');
  const box = $('storySlide');
  box.className = 'story__slide';
  box.removeAttribute('style');
  if (s.img) {
    box.innerHTML = `<img class="full" src="${s.img}" alt="Saldo da semana" />`;
  } else {
    box.classList.add('sw', `sw--${s.tex}`);
    box.style.setProperty('--c', s.c);
    box.innerHTML = `<div class="big">${s.num ? esc(s.num) : icon(s.ic)}</div><h2>${fmt(s.h)}</h2><p>${fmt(s.p)}</p>`;
  }
  box.style.animation = 'none'; void box.offsetWidth; box.style.animation = '';
  paused = false; storyEl.classList.remove('is-paused');
  startTimer(SLIDE_MS);
  speak(s.img ? 'Saldo da semana' : `${s.h}. ${s.p}`);
}
function startTimer(ms) { clearTimeout(storyTimer); remaining = ms; slideStart = Date.now(); storyTimer = setTimeout(nextSlide, ms); }
function pauseStory() { if (paused) return; paused = true; clearTimeout(storyTimer); remaining -= Date.now() - slideStart; storyEl.classList.add('is-paused'); }
function resumeStory() { if (!paused) return; paused = false; storyEl.classList.remove('is-paused'); startTimer(Math.max(remaining, 300)); }

function nextSlide() {
  const slides = slidesOf(STORIES[storyIdx]);
  if (slideIdx < slides.length - 1) { slideIdx++; showSlide(); }
  else if (storyIdx < STORIES.length - 1) { openStory(storyIdx + 1); }
  else closeStory();
}
function prevSlide() { if (slideIdx > 0) { slideIdx--; showSlide(); } else if (storyIdx > 0) { openStory(storyIdx - 1); } }
function closeStory() {
  clearTimeout(storyTimer);
  if (canSpeak) speechSynthesis.cancel();
  const done = () => { storyEl.hidden = true; storyEl.style.transform = ''; storyEl.style.opacity = ''; };
  if (!reduceMotion && storyOrigin && storyEl.animate) {
    const a = storyEl.animate([{ clipPath: `circle(${storyOrigin.R}px at ${storyOrigin.x}px ${storyOrigin.y}px)` }, { clipPath: `circle(${storyOrigin.r}px at ${storyOrigin.x}px ${storyOrigin.y}px)`, opacity: .4 }],
      { duration: 380, easing: 'cubic-bezier(.32,.72,0,1)' });
    a.onfinish = done;
  } else done();
}

/* gestos: tocar (avançar/voltar), segurar (pausar), deslizar para o lado (trocar) e para baixo (fechar) */
(function storyGestures() {
  let p = null, holdT = null;
  storyEl.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.story__cta, .story__close')) return;
    p = { x: e.clientX, y: e.clientY, t: Date.now(), dx: 0, dy: 0 };
    holdT = setTimeout(pauseStory, 220);
  });
  storyEl.addEventListener('pointermove', (e) => {
    if (!p) return;
    p.dx = e.clientX - p.x; p.dy = e.clientY - p.y;
    if (p.dy > 8 && Math.abs(p.dy) > Math.abs(p.dx)) {
      pauseStory();
      storyEl.classList.add('is-dragging');
      storyEl.style.transform = `translateY(${p.dy}px) scale(${1 - Math.min(p.dy, 400) / 2000})`;
      storyEl.style.opacity = String(1 - Math.min(p.dy, 400) / 900);
    }
  });
  const end = (e) => {
    if (!p) return;
    clearTimeout(holdT);
    const { dx, dy, t, x } = p; p = null;
    storyEl.classList.remove('is-dragging');
    if (dy > 110) { closeStory(); return; }
    storyEl.style.transform = ''; storyEl.style.opacity = '';
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? nextSlide() : prevSlide(); return; }
    if (Date.now() - t < 220 && Math.abs(dx) < 10 && Math.abs(dy) < 10 && e.type === 'pointerup') {
      const r = storyEl.getBoundingClientRect();
      const relY = (e.clientY - r.top) / r.height;
      if (relY > 0.12 && relY < 0.85) { (x - r.left) < r.width * 0.35 ? prevSlide() : nextSlide(); return; }
    }
    resumeStory();
  };
  storyEl.addEventListener('pointerup', end);
  storyEl.addEventListener('pointercancel', end);
})();
// botões invisíveis de avançar/voltar: só pelo teclado (o toque é tratado acima)
$('storyNext').addEventListener('click', (e) => { if (e.detail === 0) nextSlide(); });
$('storyPrev').addEventListener('click', (e) => { if (e.detail === 0) prevSlide(); });
$('storyClose').addEventListener('click', closeStory);
$('storyCta').addEventListener('click', () => {
  const s = STORIES[storyIdx];
  closeStory();
  clearReplies();
  user(s.cta.label);
  s.cta.run();
});
document.addEventListener('keydown', (e) => {
  if (!storyEl.hidden) {
    if (e.key === 'Escape') closeStory();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    return;
  }
  if (e.key === 'Escape' && !sheet.hidden) closeSheet();
});

/* ---------------- INÍCIO ---------------- */
function bizCard() {
  chatEl.insertAdjacentHTML('beforeend', `
    <div class="biz">
      <div class="biz__logo"><img src="assets/logo-mark-transparent.png?v=2" alt="" /></div>
      <h2>ABRS Tecidos</h2>
      <p>Loja de tecidos · Brás, São Paulo</p>
      <div class="biz__chips">
        <span>${icon('truck')}Envio para todo o Brasil</span>
        <span>${icon('card')}Pix ou cartão</span>
        <span>${icon('camera')}Escolha pela foto</span>
      </div>
    </div>
    <div class="sys">Hoje</div>
    <div class="notice">${icon('lock')}<span>Esta conversa fica só no seu celular. Nada é enviado até você tocar em <strong>Enviar no WhatsApp</strong>.</span></div>`);
}

/* "toque aqui para ver os dados", como no WhatsApp */
function statusHint() {
  setTimeout(() => {
    if (statusEl.classList.contains('is-typing')) return;
    setStatus('toque aqui para ver os dados', 'swap');
    setTimeout(() => { if (!statusEl.classList.contains('is-typing')) setStatus('online', 'swap'); }, 4500);
  }, 6500);
}

function start() {
  renderStoryList();
  // no celular (ou tela baixa) as novidades já começam recolhidas; tocar em "Novidades" abre
  if (window.innerWidth < 900 || window.innerHeight < 760) compactStories();
  updateCart(false);
  bizCard();
  if (state.name) bot(`${greeting()}, *${firstName()}*! Que bom te ver de novo. 😊`);
  else bot(`${greeting()}! Que bom ter você aqui na *ABRS Tecidos*, do Brás (SP). 👋`);
  if (state.cart.length) {
    bot(`Você tinha separado: *${state.cart.map((id) => fabric(id).name).join(', ')}*. Quer continuar de onde parou?`);
    replies([
      { label: 'Continuar de onde parei', kind: 'main', icon: 'chevron', run: () => askPurchase() },
      { label: 'Começar de novo', icon: 'pencil', color: '#8e8e93', run: () => { resetOrder(); mainMenu(true); } },
      backToMenu
    ]);
  } else {
    bot('Aqui você escolhe seu tecido rapidinho e já manda tudo para o nosso WhatsApp, com tudo anotado.');
    mainMenu();
  }
  statusHint();
}
start();
