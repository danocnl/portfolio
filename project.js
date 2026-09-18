scrambleFromDOM(document.querySelector('.project-title'), 450);

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
