const milestones = [
  {
    id: 'about',
    label: 'Dan O\'Connell', years: '', type: 'major',
    tagline: 'Product Designer & Engineer',
    summary: 'About section — add your intro here.',
    hideBadge: true,
    projects: []
  },
  {
    id: 'school',
    label: 'Chislehurst & Sidcup Grammar', years: '1999–2004', type: 'minor',
    tagline: '11 GCSEs',
    summary: 'Chislehurst and Sidcup Grammar School, Sidcup, London. 11 GCSEs.',
    projects: [
      {
        id: 'school-p1',
        label: 'Creative & hands-on subjects', year: '1999–2004',
        brief: 'Realised I preferred creative subjects and hands-on learning over more academic ones — an early signal of where things were heading.'
      }
    ]
  },
  {
    id: 'college',
    label: 'North West Kent College', years: '2004–2006', type: 'minor',
    tagline: 'BTEC Multimedia',
    summary: 'North West Kent College, Dartford, Kent. BTEC Multimedia — first real exposure to web design, motion graphics, and digital production.',
    projects: []
  },
  {
    id: 'uni',
    label: 'Ravensbourne University', years: '2006–2009', type: 'medium',
    tagline: 'BA Interaction Design',
    summary: 'Ravensbourne University, Greenwich, London. BA Interaction Design — where design thinking and web craft came together properly for the first time.',
    projects: [
      {
        id: 'uni-p1',
        label: 'Arduino tinkering', year: '2006–2009',
        brief: 'Got a hankering for hands-on making — built projects with Arduino including an interactive musical instrument and a giant physical/digital game of Pong.'
      }
    ]
  },
  {
    id: 'internship',
    label: 'Nebulo Strata', years: '2010', type: 'minor',
    tagline: 'Web Designer',
    summary: 'Web designer at Nebulo Strata, Sandling, Kent. First professional role — real briefs, real clients, real deadlines.',
    projects: [
      {
        id: 'internship-p1',
        label: 'WordPress for small businesses', year: '2010',
        brief: 'Learned to design and develop WordPress sites for small businesses — first time building things that real people and real organisations actually depended on.'
      }
    ]
  },
  {
    id: 'job1',
    label: 'Bostock & Pollitt', years: '2010–2012', type: 'medium',
    tagline: 'Front End Developer',
    summary: 'First full-time frontend role in London. Building and shipping for real products in a fast-moving environment.',
    projects: [
      {
        id: 'job1-p1',
        label: 'Working with bigger clients', year: '2010–2012',
        brief: 'Learned to work with larger enterprise clients like BT — navigating bigger stakeholder structures, longer feedback cycles, and higher-stakes deliverables.'
      },
      {
        id: 'job1-p2',
        label: 'Responsive design', year: '2010–2012',
        brief: 'Adopted responsive design at a time when it was genuinely innovative — fluid grids, media queries, and device-agnostic thinking before it became the default.'
      }
    ]
  },
  {
    id: 'job2',
    label: 'Jamie Oliver', years: '2012–2013', type: 'medium',
    tagline: 'Front End Developer / Designer',
    summary: 'Straddling the line between design and development — building interfaces and shaping the visual direction behind them.',
    projects: []
  },
  {
    id: 'freelance',
    label: 'Freelance', years: '2013–2014', type: 'minor',
    tagline: 'Design & Development',
    summary: 'Independent design and development work across London. Varied engagements — the freedom and accountability of owning the full thing.',
    projects: []
  },
  {
    id: 'bijenkorf',
    label: 'de Bijenkorf', years: '2014–2018', type: 'major',
    tagline: 'UX Engineer',
    summary: 'UX Engineer at de Bijenkorf, Amsterdam — one of the Netherlands\' most iconic department store brands. Working at the intersection of design systems, UX, and frontend engineering.',
    projects: [
      {
        id: 'bijenkorf-p1',
        label: 'Scrum & project management', year: '2014–2018',
        brief: 'Learned project management methodologies including Scrum — first real experience working within structured agile cycles and cross-functional product teams.'
      },
      {
        id: 'bijenkorf-p2',
        label: 'Scaling up the product', year: '2014–2018',
        brief: 'Experienced the product scaling significantly — growing in complexity, user base, and team size, and learning how to design and build systems that hold up under that pressure.'
      },
      {
        id: 'bijenkorf-p3',
        label: 'Design systems', year: '2014–2018',
        brief: 'First deep involvement in design systems thinking — building shared patterns and components that scaled across teams and reduced duplication across the product.'
      }
    ]
  },
  {
    id: 'wpp',
    label: 'WPP', years: '2018–Present', type: 'major',
    tagline: 'Product Designer',
    summary: 'Product Designer at WPP, across Eindhoven, Netherlands and London. Working within one of the world\'s largest creative organisations on product design at scale.',
    projects: [
      {
        id: 'wpp-p1',
        label: 'Startup to acquisition', year: '2018–Present',
        brief: 'Joined as sole designer at a startup and helped build it to a point where it was successfully acquired by WPP — experiencing the full arc from scrappy to scaled.'
      },
      {
        id: 'wpp-p2',
        label: 'Larger design org', year: '2018–Present',
        brief: 'Transitioned into working as part of a larger design organisation — adapting to new structures, collaborative rituals, and the challenge of staying aligned at scale.',
        caseStudy: 'choreograph'
      },
      {
        id: 'wpp-p3',
        label: 'AI & engineering crossover', year: '2018–Present',
        brief: 'Leaned into the intersection of design, AI, and engineering — adopting new AI tooling early and applying a strong technical foundation to shape how the team builds and ships.'
      }
    ]
  },
  {
    id: 'opportunity',
    label: 'What\'s Next', years: '2026', type: 'major',
    tagline: 'Open to new opportunities',
    summary: 'Looking for a new opportunity — add details about what you\'re looking for here.',
    projects: []
  }
];

// ─── Category + background mapping ───

const MILESTONE_CATEGORY = {
  about:       'ABOUT',
  school:      'EDUCATION',
  college:     'EDUCATION',
  uni:         'EDUCATION',
  internship:  'WORK',
  job1:        'WORK',
  job2:        'WORK',
  freelance:   'FREELANCE',
  bijenkorf:   'WORK',
  wpp:         'WORK',
  opportunity: 'OPEN TO WORK'
};

const CATEGORY_BG = {
  'ABOUT':        '#f6f1eb',
  'EDUCATION':    '#f0ece5',
  'WORK':         '#f4ede2',
  'FREELANCE':    '#f7f3ec',
  'OPEN TO WORK': '#f2ebe0'
};

const CATEGORY_COLOR = {
  'ABOUT':        '#a06845',
  'EDUCATION':    '#4a7c94',
  'WORK':         '#c05a2f',
  'FREELANCE':    '#7a9a76',
  'OPEN TO WORK': '#9b7bb0'
};

// ─── ASCII texture generation ───

function generateAsciiTexture() {
  const chars = ['o', 'e', 'm', 'R', 'c', '·'];
  const width = 120;
  const rows = 30;
  let result = '';
  for (let r = 0; r < rows; r++) {
    let line = '';
    for (let c = 0; c < width; c++) {
      const density = 0.08 + (c / width) * 0.62;
      line += Math.random() < density
        ? chars[Math.floor(Math.random() * chars.length)]
        : ' ';
    }
    result += line + '\n';
  }
  return result;
}

document.getElementById('ascii-texture').textContent = generateAsciiTexture();

// ─── Dense ASCII for full-frame flash ───

function generateAsciiFlash() {
  const chars = ['o','e','m','R','c','·','#','%','&','+','~','/','\\'];
  const width = 150, rows = 45;
  let out = '';
  for (let r = 0; r < rows; r++) {
    let line = '';
    for (let c = 0; c < width; c++) {
      line += chars[Math.floor(Math.random() * chars.length)];
    }
    out += line + '\n';
  }
  return out;
}

function triggerAsciiFlash(targetBg, callback) {
  document.querySelectorAll('.ascii-flash').forEach(el => el.remove());
  const area = document.querySelector('.content-area');
  const flash = document.createElement('div');
  flash.className = 'ascii-flash';
  flash.style.background = targetBg;
  flash.textContent = generateAsciiFlash();
  area.appendChild(flash);

  requestAnimationFrame(() => {
    flash.style.opacity = '1';
    setTimeout(() => {
      if (callback) callback();
      setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => flash.remove(), 120);
      }, 80);
    }, 90);
  });
}

// ─── Background + counter + category updates ───

function updateBackground(milestone) {
  const cat   = MILESTONE_CATEGORY[milestone.id] || 'WORK';
  const bg    = CATEGORY_BG[cat]    || '#f6f1eb';
  const color = CATEGORY_COLOR[cat] || '#c05a2f';
  document.body.style.background = bg;
  document.querySelector('.content-area').style.background = bg;
  document.querySelector('.site-header').style.background  = bg;
  document.documentElement.style.setProperty('--cat-color', color);
}

function updateCounter(milestone) {
  const el = document.getElementById('milestone-counter');
  if (!el) return;
  const idx   = milestones.indexOf(milestone) + 1;
  const total = milestones.length;
  const text  = `${String(idx).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
  scramble(el, text, 180);
}

// ─── ASCII dissolve / scramble transition ───

function scramble(element, newText, duration) {
  const noiseChars = '!@#$%&*·░▒▓';
  const totalFrames = 14;
  const frameInterval = duration / totalFrames;
  let frame = 0;

  element.textContent = newText.split('').map(ch =>
    ch === ' ' ? ' ' : noiseChars[Math.floor(Math.random() * noiseChars.length)]
  ).join('');

  const tick = setInterval(() => {
    frame++;
    const resolved = Math.floor((frame / totalFrames) * newText.length);
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

// ─── Node registry ───

const nodes = [];
let activeNode = null;
let isFirstLoad = false;

// ─── Build timeline track ───

function buildOverview() {
  const track = document.getElementById('ov-track');

  const progress = document.createElement('div');
  progress.className = 'track-progress';
  progress.id = 'track-progress';
  track.appendChild(progress);

  milestones.forEach((m, i) => {
    if (i > 0) {
      const g = document.createElement('div');
      g.className = 'ov-gap';
      track.appendChild(g);
    }

    const col = document.createElement('div');
    col.className = 'ov-col';
    const item = { milestone: m, project: null };
    col.onclick = () => setActive(item);

    const above = document.createElement('div');
    above.className = 'node-above';

    const name = document.createElement('div');
    name.className = `node-name ${m.type}`;
    name.textContent = m.label;
    above.appendChild(name);

    if (m.tagline) {
      const tagline = document.createElement('div');
      tagline.className = 'node-tagline';
      tagline.textContent = m.tagline;
      above.appendChild(tagline);
    }

    const years = document.createElement('div');
    years.className = 'node-years';
    years.textContent = m.years;
    above.appendChild(years);

    col.appendChild(above);

    const dot = document.createElement('div');
    dot.className = `ov-dot ${m.type}`;
    col.appendChild(dot);

    const group = document.createElement('div');
    group.className = `milestone-group${m.projects.length === 0 ? ' single' : ''}`;
    group.appendChild(col);
    nodes.push({ col, dot, item });

    m.projects.forEach(p => {
      const sg = document.createElement('div');
      sg.className = 'ov-gap ov-gap--sub';
      group.appendChild(sg);

      const scol = document.createElement('div');
      scol.className = 'ov-col ov-col--sub';
      const subItem = { milestone: m, project: p };
      scol.onclick = () => setActive(subItem);

      const sabove = document.createElement('div');
      sabove.className = 'node-above';
      const sname = document.createElement('div');
      sname.className = 'node-name sub';
      sname.textContent = p.label;
      sabove.appendChild(sname);
      scol.appendChild(sabove);

      const sdot = document.createElement('div');
      sdot.className = 'ov-dot sub';
      scol.appendChild(sdot);

      group.appendChild(scol);
      nodes.push({ col: scol, dot: sdot, item: subItem });
    });

    track.appendChild(group);
  });
}

// ─── Active state ───

function setActive(item, fromScroll = false) {
  if (activeNode) {
    activeNode.dot.classList.remove('active');
    activeNode.col.classList.remove('active');
  }

  const node = nodes.find(n =>
    n.item.milestone === item.milestone && n.item.project === item.project
  );
  if (!node) return;

  node.dot.classList.add('active');
  node.col.classList.add('active');
  activeNode = node;

  updateBackground(item.milestone);
  updateCounter(item.milestone);
  updateNavButtons();
  updateProgress();
  updateBgLine();
  updateTimelineTitle(item);

  renderContent(item);
  isFirstLoad = false;

  const hashId = item.project ? `${item.milestone.id}-${item.project.id}` : item.milestone.id;
  history.replaceState(null, '', `#${hashId}`);
  document.body.dataset.page = hashId;
}

function updateTimelineTitle(item) {
  const el = document.getElementById('timeline-title');
  if (!el) return;
  el.textContent = item.project ? item.project.label : item.milestone.label;
}

function updateProgress() {
  if (!activeNode) return;
  const el = document.getElementById('track-progress');
  if (!el) return;
  const track = document.getElementById('ov-track');
  const colRect   = activeNode.col.getBoundingClientRect();
  const trackRect = track.getBoundingClientRect();
  const x = (colRect.left - trackRect.left) + activeNode.col.offsetWidth / 2;
  el.style.width = Math.max(0, x - 8) + 'px';
}

function renderContent({ milestone, project }) {
  const inner = document.getElementById('content-inner');
  const pane  = document.getElementById('content-pane');

  pane.classList.remove('magazine-mode');

  const cat      = MILESTONE_CATEGORY[milestone.id] || 'WORK';
  const catLabel = cat.charAt(0) + cat.slice(1).toLowerCase();
  const badge    = milestone.hideBadge ? '' : `<div class="category-badge">${catLabel}</div>`;
  const animate  = !isFirstLoad;

  const set = (el, text, duration) => {
    if (!el) return;
    if (animate) scramble(el, text, duration);
    else el.textContent = text;
  };

  if (project) {
    const csLink = project.caseStudy
      ? `<button class="cs-link" onclick="openCaseStudy()">Read case study</button>`
      : '';
    inner.innerHTML = `${badge}
      <div class="content-title"></div>
      <div class="content-meta"></div>
      <div class="content-summary"></div>
      ${csLink}`;
    set(inner.querySelector('.content-title'),    project.label,    260);
    set(inner.querySelector('.content-meta'),     project.year,     160);
    set(inner.querySelector('.content-summary'),  project.brief,    320);
  } else {
    const meta = [milestone.tagline, milestone.years].filter(Boolean).join(' · ');
    inner.innerHTML = `${badge}
      <div class="content-title"></div>
      <div class="content-meta"></div>
      ${milestone.summary ? '<div class="content-summary"></div>' : ''}`;
    set(inner.querySelector('.content-title'),    milestone.label,     260);
    set(inner.querySelector('.content-meta'),     meta,                160);
    set(inner.querySelector('.content-summary'),  milestone.summary,   320);
  }
}

function initBgLine() {}
function updateBgLine() {}

// ─── Navigation ───

function navigateTo(index) {
  if (index < 0 || index >= nodes.length) return;
  const node = nodes[index];
  setActive(node.item);
  clearTimeout(snapDebounce);
  const dotRect   = node.dot.getBoundingClientRect();
  const dotCenter = dotRect.left + dotRect.width / 2;
  const isLast    = index === nodes.length - 1;
  let targetX;
  if (isLast) {
    targetX = RIGHT_TARGET();
  } else {
    const leftBound  = 48 + 18;
    const rightBound = window.innerWidth - 48 - 18;
    if (dotCenter < leftBound)       targetX = 100;
    else if (dotCenter > rightBound) targetX = rightBound;
    else                             targetX = dotCenter;
  }
  isNavigating = true;
  const delta = dotCenter - targetX;
  if (Math.abs(delta) > 2) {
    scroller.scrollTo({ left: scroller.scrollLeft + delta, behavior: 'smooth' });
  }
  navTimer = setTimeout(endNav, 1000);
}

function prev() { navigateTo(nodes.indexOf(activeNode) - 1); }
function next() { navigateTo(nodes.indexOf(activeNode) + 1); }

function updateNavButtons() {
  const idx = nodes.indexOf(activeNode);
  const p = document.getElementById('btn-prev');
  const n = document.getElementById('btn-next');
  if (p) p.disabled = idx <= 0;
  if (n) n.disabled = idx >= nodes.length - 1;
}

// ─── Overlay ───

function openOverlay(p, parentLabel) {
  document.getElementById('ol-title').textContent = p.label;
  document.getElementById('ol-parent').textContent = parentLabel;
  document.getElementById('ol-brief').textContent = p.brief;
  document.getElementById('overlay').classList.add('open');
}

function closeOverlay() {
  document.getElementById('overlay').classList.remove('open');
}

function openCaseStudy() {
  document.getElementById('cs-overlay').classList.add('open');
}

function closeCaseStudy() {
  document.getElementById('cs-overlay').classList.remove('open');
}

// ─── Init ───

buildOverview();

const scroller = document.getElementById('ov-scroll');

requestAnimationFrame(() => {
  initBgLine();
  const hash = location.hash.slice(1);
  const initial = hash
    ? nodes.find(n => {
        const id = n.item.project
          ? `${n.item.milestone.id}-${n.item.project.id}`
          : n.item.milestone.id;
        return id === hash;
      })
    : null;
  setActive((initial || nodes[0]).item);
  if (initial) {
    const dotRect = initial.dot.getBoundingClientRect();
    scroller.scrollLeft += dotRect.left + dotRect.width / 2 - window.innerWidth / 2;
  }
});

// ─── Scroll → update active item ───

const RIGHT_TARGET = () => window.innerWidth - 48 - 18 - 8;
let isNavigating = false;
let navTimer, snapDebounce;

function endNav() {
  clearTimeout(navTimer);
  isNavigating = false;
}

function snapLastToRight() {
  const lastNode = nodes[nodes.length - 1];
  if (!lastNode || activeNode !== lastNode || isNavigating) return;
  const lr    = lastNode.dot.getBoundingClientRect();
  const lcx   = lr.left + lr.width / 2;
  const delta = lcx - RIGHT_TARGET();
  if (Math.abs(delta) < 4) return;
  isNavigating = true;
  scroller.scrollTo({ left: scroller.scrollLeft + delta, behavior: 'smooth' });
  navTimer = setTimeout(endNav, 1000);
}

scroller.addEventListener('scroll', () => {
  if (isNavigating) return;

  const lastNode = nodes[nodes.length - 1];
  const focalX   = scroller.getBoundingClientRect().left + 100;

  if (lastNode) {
    const lr  = lastNode.dot.getBoundingClientRect();
    const lcx = lr.left + lr.width / 2;
    if (lcx <= RIGHT_TARGET() + 40) {
      if (lastNode !== activeNode) setActive(lastNode.item, true);
      clearTimeout(snapDebounce);
      snapDebounce = setTimeout(snapLastToRight, 300);
      return;
    }
  }
  clearTimeout(snapDebounce);

  let closest = null, closestDist = Infinity;
  nodes.forEach(n => {
    const r = n.dot.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const dist = Math.abs(cx - focalX);
    if (dist < closestDist) { closestDist = dist; closest = n; }
  });
  if (closest && closest !== activeNode) setActive(closest.item, true);
}, { passive: true });

scroller.addEventListener('scrollend', endNav);

// ─── Keyboard navigation ───

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); }
  if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
});

// ─── Wheel → horizontal scroll ───

window.addEventListener('wheel', (e) => {
  if (document.getElementById('overlay').classList.contains('open')) return;
  if (document.getElementById('cs-overlay').classList.contains('open')) return;
  if (document.getElementById('content-pane').classList.contains('magazine-mode')) return;
  e.preventDefault();
  const px = e.deltaMode === 1 ? (e.deltaY + e.deltaX) * 20
           : e.deltaMode === 2 ? (e.deltaY + e.deltaX) * window.innerWidth
           : e.deltaY + e.deltaX;
  if (px > 0 && activeNode === nodes[nodes.length - 1]) return;
  scroller.scrollLeft += px;
}, { passive: false });
