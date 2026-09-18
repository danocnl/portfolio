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
  [() => document.getElementById('content-title'),        450],
  [() => document.getElementById('content-summary'),      540],
  [() => document.getElementById('content-intro'),        600],
  ...Array.from(document.querySelectorAll('.work-card')).map(card => [
    () => card.querySelectorAll('.card-title, .card-meta'),
    380
  ]),
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
