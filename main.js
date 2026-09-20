function toggleMenu() {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('menu-toggle');
  if (!header || !toggle) return;
  const isOpen = header.classList.toggle('menu-open');
  toggle.innerHTML = isOpen ? '&#x2715;' : '&#9776;';
}

// On mobile nav click: close menu first, then navigate after animation
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const header = document.getElementById('site-header');
    const toggle = document.getElementById('menu-toggle');
    if (!header || !header.classList.contains('menu-open')) return;

    e.preventDefault();
    const href = link.getAttribute('href');
    const nav = header.querySelector('.mobile-nav');

    // Fade links out, then collapse, then navigate
    if (nav) nav.classList.add('mobile-nav--fading');

    setTimeout(() => {
      header.classList.remove('menu-open');
      if (toggle) toggle.innerHTML = '&#9776;';
      setTimeout(() => { window.location.href = href; }, 350);
    }, 150);
  });
});

const noiseChars = '!@#$%&*·&<>+-=~#';

function scramble(element, newText, duration) {
  const totalFrames = 28;
  const frameInterval = duration / totalFrames;
  let frame = 0;

  element.textContent = newText.split('').map(ch =>
    ch === ' ' ? ' ' : noiseChars[Math.floor(Math.random() * noiseChars.length)]
  ).join('');

  const tick = setInterval(() => {
    frame++;
    const t = frame / totalFrames;
    const resolved = Math.floor((t * t) * newText.length);
    element.textContent = newText.split('').map((ch, i) => {
      if (ch === ' ') return ' ';
      if (i < resolved) return ch;
      return noiseChars[Math.floor(Math.random() * noiseChars.length)];
    }).join('');

    if (frame >= totalFrames) {
      clearInterval(tick);
      element.textContent = newText;
    }
  }, frameInterval);
}

function scrambleFromDOM(el, duration) {
  if (!el) return;
  scramble(el, el.textContent.trim(), duration);
}

const stagger = [
  [() => document.getElementById('content-title'),   450],
  [() => document.getElementById('content-summary'), 540],
  [() => document.getElementById('content-intro'),   600],
];

stagger.forEach(([getEl, duration], i) => {
  setTimeout(() => {
    const el = getEl();
    if (!el) return;
    if (el instanceof NodeList) el.forEach(n => scrambleFromDOM(n, duration));
    else scrambleFromDOM(el, duration);
  }, i * 120);
});

function addScrambleHover(el) {
  if (!el) return;
  el.style.cursor = 'crosshair';
  const original = el.textContent.trim();
  let scrambling = false;
  const trigger = () => {
    if (scrambling) return;
    scrambling = true;
    scramble(el, original, 400);
    setTimeout(() => { scrambling = false; }, 400);
  };
  el.addEventListener('mouseenter', trigger);
  el.addEventListener('mouseleave', trigger);
}

addScrambleHover(document.querySelector('.header-name .name'));
addScrambleHover(document.getElementById('content-title'));

// ─── Cursor noise trail ───

(function() {
  let lastX = 0, lastY = 0;
  document.addEventListener('mousemove', e => {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    if (Math.sqrt(dx * dx + dy * dy) < 24) return;
    lastX = e.clientX;
    lastY = e.clientY;

    const el = document.createElement('span');
    el.textContent = noiseChars[Math.floor(Math.random() * noiseChars.length)];
    el.style.cssText = `
      position:fixed;left:${e.clientX}px;top:${e.clientY}px;
      font-family:'Geist Mono',monospace;font-size:0.75rem;
      color:#9a8f82;pointer-events:none;user-select:none;z-index:9999;
      transform:translate(-50%,-50%);opacity:1;
      transition:opacity 0.4s ease,transform 0.4s ease;
    `;
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.style.opacity = '0';
      el.style.transform = 'translate(-50%,-120%)';
    });
    setTimeout(() => el.remove(), 450);
  });
})();

document.querySelectorAll('.work-card-link').forEach(link => {
  link.style.cursor = 'crosshair';
  const title = link.querySelector('.card-title');
  const meta  = link.querySelector('.card-meta');
  const originalTitle = title?.textContent.trim();
  const originalMeta  = meta?.textContent.trim();
  let scrambling = false;

  link.addEventListener('mouseenter', () => {
    if (scrambling) return;
    scrambling = true;
    if (title) scramble(title, originalTitle, 400);
    if (meta)  scramble(meta,  originalMeta,  400);
    setTimeout(() => { scrambling = false; }, 400);
  });

  link.addEventListener('mouseleave', () => {
    if (scrambling) return;
    scrambling = true;
    if (title) scramble(title, originalTitle, 400);
    if (meta)  scramble(meta,  originalMeta,  400);
    setTimeout(() => { scrambling = false; }, 400);
  });
});
