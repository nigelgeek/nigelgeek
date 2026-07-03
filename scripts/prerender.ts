import fs from 'fs/promises';
import path from 'path';

async function prerender() {
  const distIndex = path.resolve(process.cwd(), 'dist', 'index.html');
  let html = await fs.readFile(distIndex, 'utf8');

  // Lightweight static snapshot of key content for crawlers
  const appHtml = `
    <header>
      <h1>Nigel Henaku</h1>
      <p>Tech-driven innovator and IT strategist focusing on digital transformation, AI adoption, and practical technology education.</p>
      <p><a href="/#about">About</a> • <a href="https://www.linkedin.com/in/nigel-henaku/">LinkedIn</a></p>
    </header>
    <main>
      <section id="about">
        <h2>Who I Am</h2>
        <p>Hello! I'm Nigel Henaku, a tech-driven innovator and IT strategist with a strong focus on digital transformation, AI adoption, and practical technology education.</p>
        <p>I operate at the intersection of technology, business, and leadership, often bridging the gap between technical implementation and strategic decision-making.</p>
      </section>
    </main>
  `;

  const replaced = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  await fs.writeFile(distIndex, replaced, 'utf8');
  console.log('Prerender complete — dist/index.html updated');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
