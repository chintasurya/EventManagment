// Renders docs/diagram-src/*.html to PNG at 2x. Output: docs/architecture (architecture-*) or docs/brainstorm.
// Run: node tools/render-diagrams.js  (needs Playwright + Chromium)
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const fs = require('fs');
const path = require('path');
(async () => {
  const src = path.join(__dirname, '..', 'docs', 'diagram-src');
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  for (const f of fs.readdirSync(src).filter(f => f.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(src, f), 'utf8');
    const w = +(html.match(/body\{width:(\d+)px/) || [0, 1600])[1];
    const h = +(html.match(/body\{width:\d+px;height:(\d+)px/) || [0, 1000])[1];
    const out = f.startsWith('architecture') ? 'architecture' : 'brainstorm';
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
    await page.goto('file://' + path.join(src, f));
    await page.screenshot({ path: path.join(__dirname, '..', 'docs', out, f.replace('.html', '.png')) });
    await page.close();
    console.log('rendered', f, w + 'x' + h);
  }
  await browser.close();
})();
