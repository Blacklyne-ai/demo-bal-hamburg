const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 600 } });
  // Render each logo on a dark BG and screenshot to see actual rendered output
  const brands = ['mercedes','bmw','audi','vw','porsche','volvo','opel','ford','toyota','jaguar','skoda','seat','renault','chevrolet','chrysler'];
  let html = '<html><head><style>body{background:#121214;padding:20px;font-family:sans-serif;color:#fff}.row{display:flex;gap:20px;flex-wrap:wrap}.item{width:140px;height:90px;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px;background:#1a1a1f;border:1px solid #333;border-radius:8px}img{height:50px;width:auto;max-width:120px;object-fit:contain;filter:grayscale(1) brightness(2.2) contrast(1.05);opacity:.7}.label{font-size:10px;color:#888;text-transform:uppercase;letter-spacing:1px}</style></head><body><h2>15 Brand Logos with current filter</h2><div class="row">';
  for (const b of brands) {
    html += `<div class="item"><img src="http://localhost:4400/images/brands/${b}.svg" alt="${b}"/><span class="label">${b}</span></div>`;
  }
  html += '</div><h2 style="margin-top:30px">Without filter (original)</h2><style>.row2 img{filter:none !important;opacity:1 !important}</style><div class="row row2">';
  for (const b of brands) {
    html += `<div class="item"><img src="http://localhost:4400/images/brands/${b}.svg" alt="${b}"/><span class="label">${b}</span></div>`;
  }
  html += '</div></body></html>';
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'docs/logo-grid-test.png', fullPage: true });
  await browser.close();
  console.log('Done.');
})();
