addScrambleHover(document.querySelector('.project-heading'));
scrambleFromDOM(document.querySelector('.project-eyebrow'), 340);
scrambleFromDOM(document.querySelector('.project-heading'), 450);

const sections = document.querySelectorAll('.project-section');
const tocLinks = document.querySelectorAll('.toc-link');

function updateToc() {
  const atBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100;

  let current = sections[0];
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.5) {
      current = section;
    }
  });

  if (atBottom) current = sections[sections.length - 1];

  tocLinks.forEach(l => l.classList.remove('active'));
  document.querySelector(`.toc-link[href="#${current.id}"]`)?.classList.add('active');
}

window.addEventListener('scroll', updateToc, { passive: true });
updateToc();

// Smooth TOC navigation using View Transitions
document.querySelectorAll('.toc-link').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        target.scrollIntoView({ behavior: 'instant' });
      });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
