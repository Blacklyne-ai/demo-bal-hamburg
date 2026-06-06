const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4400/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'docs/qa-home-full.png', fullPage: true });

  for (const slug of ['diagnose','reparatur','preise','anfahrt','kontakt','fotos','bezahlmethoden','shop','agbs','impressum']) {
    await page.goto('http://localhost:4400/' + slug, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `docs/qa-${slug}.png`, fullPage: false });
  }
  await browser.close();
  console.log('Done.');
})();
