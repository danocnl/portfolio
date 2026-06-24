const contentEl = document.getElementById('content');
const heroText  = document.getElementById('hero-text');
const feed      = document.getElementById('feed');
const input     = document.getElementById('cmd-input');
const sugsEl    = document.getElementById('prompt-sugs');

const ALL   = window.FOLIO_COMMANDS;
const shown = new Set();
let   feedActive = false;

// Build suggestion buttons from discovered commands
ALL.forEach(cmd => {
  const btn = document.createElement('button');
  btn.className   = 'sug';
  btn.id          = 'sug-' + cmd;
  btn.textContent = cmd;
  btn.onclick     = () => run(cmd);
  sugsEl.appendChild(btn);
});

/* ── TYPEWRITER ───────────────────────────────────────────────── */
const delay = ms => new Promise(r => setTimeout(r, ms));

async function type(el, text, speed = 30) {
  for (const ch of text) {
    el.textContent += ch;
    await delay(speed + (Math.random() * 12 - 6));
  }
}

/* ── ANIMATIONS ───────────────────────────────────────────────── */
const ANIM_SEL = 'h1, h2, h3, h4, h5, h6, p, blockquote, .img-grid, .row, .contact-row, .avail';

function fadeInElements(container, startDelay = 0) {
  const items = [...container.querySelectorAll(ANIM_SEL)];
  items.forEach((item, i) => {
    item.classList.add('anim');
    item.style.animationDelay = `${startDelay + i * 65}ms`;
  });
}

/* ── REVEAL ENTRY ─────────────────────────────────────────────── */
async function revealEntry(el) {
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const cmdSpan = el.querySelector('.entry-prompt .cmd');
  const cmdText = cmdSpan.textContent;
  cmdSpan.textContent = '';
  await delay(40);
  await type(cmdSpan, cmdText, 32);

  fadeInElements(el, 80);
}

/* ── BOOT ─────────────────────────────────────────────────────── */
function boot() {
  heroText.innerHTML = window.FOLIO_CONTENT['intro'] || '';
  fadeInElements(heroText, 150);
  input.focus();
}

/* ── ACTIVATE FEED ────────────────────────────────────────────── */
function activateFeed() {
  if (feedActive) return;
  feedActive = true;
  heroText.style.flex = '0 0 auto';
  feed.classList.add('active');
}

/* ── RUN ──────────────────────────────────────────────────────── */
function run(name) {
  const c = (name || '').trim().toLowerCase();
  input.value = '';

  const ex = document.getElementById('sec-' + c);
  if (ex) {
    activateFeed();
    ex.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  const html = window.FOLIO_CONTENT[c];
  if (!html) {
    const rem = [...ALL, 'help'].filter(a => !shown.has(a)).join(', ');
    input.placeholder = `not found — try: ${rem}`;
    setTimeout(() => input.placeholder = 'type a command…', 2400);
    return;
  }

  shown.add(c);
  const sug = document.getElementById('sug-' + c);
  if (sug) sug.classList.add('used');

  activateFeed();

  const el = document.createElement('div');
  el.className = 'entry';
  el.id = 'sec-' + c;
  el.innerHTML = `
    <div class="entry-prompt"><span class="chr">$</span><span class="cmd">${c}</span></div>
    <div class="entry-body">${html}</div>
  `;
  feed.appendChild(el);
  revealEntry(el);
  input.focus();
}

/* ── INPUT ────────────────────────────────────────────────────── */
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') { run(input.value); return; }
  if (e.key === 'Tab') {
    e.preventDefault();
    const v = input.value.trim();
    if (!v) return;
    const m = ALL.filter(c => !shown.has(c)).find(c => c.startsWith(v));
    if (m) input.value = m;
  }
});

contentEl.addEventListener('click', e => {
  if (!e.target.closest('a, button')) input.focus();
});

document.fonts.ready.then(boot);
