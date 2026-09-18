function scramble(element, newText, duration) {
  const noiseChars = '!@#$%&*·&<>+-=~#';
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

scrambleFromDOM(document.querySelector('.header-name .name'),    340);
scrambleFromDOM(document.querySelector('.header-name .tagline'), 340);
scrambleFromDOM(document.getElementById('content-title'),        450);
scrambleFromDOM(document.getElementById('content-summary'),      540);
scrambleFromDOM(document.getElementById('content-intro'),        600);

document.querySelectorAll('.header-nav li:not(.divider) a span').forEach(el => {
  scrambleFromDOM(el, 450);
});
