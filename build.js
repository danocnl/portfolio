#!/usr/bin/env node
// Reads content/*.md files and generates content.js
// Usage: node build.js

const fs   = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, 'content');
const OUTPUT_FILE = path.join(__dirname, 'content.js');

// ── Inline formatting ──────────────────────────────────────────
function inline(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<span class="tag">$1</span>')
    // Auto-link --command patterns: display as --name, run as name
    .replace(/(--[\w-]+)/g, (_, m) =>
      `<span class="cmd-chip" onclick="run('${m.replace(/^--/, '')}')">${m}</span>`);
}

// Undo entity encoding for raw HTML lines we pass through
function rawLine(text) { return text; }

// ── Markdown → HTML ────────────────────────────────────────────
function parse(md) {
  const lines = md.split('\n');
  let html = '';
  let tableRows = [];   // buffered table rows
  let listItems = [];   // buffered list items
  let rawBlock  = [];   // buffered raw HTML lines

  function flushTable() {
    if (!tableRows.length) return;
    const rowsHtml = tableRows.map(([left, right]) =>
      `  <div class="row"><div class="left">${left}</div><div class="right">${right}</div></div>`
    ).join('\n');
    html += `<div class="rows">\n${rowsHtml}\n</div>\n`;
    tableRows = [];
  }

  function flushList() {
    if (!listItems.length) return;
    // If every item is "key: value", render as contact rows
    const isKV = listItems.every(t => t.includes(': '));
    if (isKV) {
      const rowsHtml = listItems.map(item => {
        const idx = item.indexOf(': ');
        const key = item.slice(0, idx).trim();
        const val = item.slice(idx + 2).trim();
        return `  <div class="contact-row"><span class="ck">${key}</span><span class="cv">${val}</span></div>`;
      }).join('\n');
      html += `<div class="contact-rows">\n${rowsHtml}\n</div>\n`;
    } else {
      html += `<ul>\n${listItems.map(i => `  <li>${inline(i)}</li>`).join('\n')}\n</ul>\n`;
    }
    listItems = [];
  }

  function flushRaw() {
    if (!rawBlock.length) return;
    html += rawBlock.join('\n') + '\n';
    rawBlock = [];
  }

  let inRaw = false;

  for (let i = 0; i < lines.length; i++) {
    const line  = lines[i];
    const trim  = line.trim();

    // ── Raw HTML block (starts with <tag, ends when we hit a blank line
    //    or the matching closing tag) ──────────────────────────────────
    if (!inRaw && trim.match(/^<[a-zA-Z]/)) {
      flushTable();
      flushList();
      inRaw = true;
      rawBlock.push(rawLine(line));
      continue;
    }

    if (inRaw) {
      if (trim === '') {
        flushRaw();
        inRaw = false;
      } else {
        rawBlock.push(rawLine(line));
      }
      continue;
    }

    // ── Blank line ────────────────────────────────────────────────────
    if (!trim) {
      flushTable();
      flushList();
      continue;
    }

    // ── Blockquote ────────────────────────────────────────────────────
    if (trim.startsWith('> ')) {
      flushTable();
      flushList();
      html += `<blockquote><p>${inline(trim.slice(2))}</p></blockquote>\n`;
      continue;
    }

    // ── Headings (h1–h6) ──────────────────────────────────────────────
    const headingMatch = trim.match(/^(#{1,6}) (.+)/);
    if (headingMatch) {
      flushTable();
      flushList();
      const level = headingMatch[1].length;
      html += `<h${level}>${headingMatch[2]}</h${level}>\n`;
      continue;
    }

    // ── Table separator → skip ────────────────────────────────────────
    if (trim.match(/^\|[\s\-:|]+\|/)) {
      continue;
    }

    // ── Table row ─────────────────────────────────────────────────────
    if (trim.startsWith('|')) {
      flushList();
      const cells = trim.split('|').map(c => c.trim()).filter((c, idx, arr) =>
        idx > 0 && idx < arr.length - 1
      );
      tableRows.push([inline(cells[0] || ''), inline(cells[1] || '')]);
      continue;
    }

    // ── List item ─────────────────────────────────────────────────────
    if (trim.startsWith('- ')) {
      flushTable();
      listItems.push(trim.slice(2));
      continue;
    }

    // ── Regular paragraph ─────────────────────────────────────────────
    flushTable();
    flushList();
    html += `<p>${inline(trim)}</p>\n`;
  }

  flushTable();
  flushList();
  flushRaw();

  return html;
}

// ── Build ──────────────────────────────────────────────────────
const files = fs.readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.md'))
  .sort(); // numeric prefixes (01-, 02-...) give natural order

const content  = {};
const commands = []; // ordered, excludes -- prefixed commands

for (const file of files) {
  // Strip leading -- prefix, remove extension → command name
  const rawName = file.replace(/^--/, '').replace(/\.md$/, '');
  const md = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
  content[rawName] = parse(md);
  // Exclude system/meta commands from the suggestion bar
  if (!['help', 'intro'].includes(rawName)) commands.push(rawName);
}

const out = `// Auto-generated by build.js — edit files in content/ then re-run: node build.js
window.FOLIO_CONTENT  = ${JSON.stringify(content, null, 2)};
window.FOLIO_COMMANDS = ${JSON.stringify(commands)};
`;

fs.writeFileSync(OUTPUT_FILE, out);
console.log(`✓ content.js — commands: ${[...commands, ...Object.keys(content).filter(k => k.startsWith('--'))].join(', ')}`);
