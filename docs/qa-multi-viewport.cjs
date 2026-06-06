const { chromium } = require('playwright');

const PAGES = ['', 'diagnose', 'reparatur', 'preise', 'anfahrt', 'kontakt', 'fotos', 'shop', 'bezahlmethoden', 'agbs', 'impressum', 'datenschutz'];
const VIEWPORTS = [
  { name: 'mobile',  width: 375,  height: 812 },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

(async () => {
  const browser = await chromium.launch();
  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    for (const slug of PAGES) {
      const url = 'http://localhost:4400/' + slug;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
        await page.waitForTimeout(400);
        const name = slug || 'home';
        await page.screenshot({ path: `docs/qa-${vp.name}-${name}.png`, fullPage: true });
        console.log(`${vp.name} ${name}`);
      } catch (e) {
        console.log(`ERR ${vp.name} ${slug}: ${e.message}`);
      }
    }
    await context.close();
  }
  await browser.close();
  console.log('Done.');
})();
