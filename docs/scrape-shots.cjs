const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Old site...');
  try {
    await page.goto('http://www.getriebe-hamburg.de/', { waitUntil: 'networkidle', timeout: 45000 });
    await page.screenshot({ path: 'docs/old-site.png', fullPage: true });
  } catch (e) { console.log('old-site err:', e.message); }

  console.log('Route66...');
  try {
    await page.goto('https://www.route66-hh.de/', { waitUntil: 'networkidle', timeout: 45000 });
    await page.screenshot({ path: 'docs/ref-route66.png', fullPage: false });
  } catch (e) { console.log('route66 err:', e.message); }

  console.log('AMF...');
  try {
    await page.goto('https://www.auto-motorrad-freigang.de/', { waitUntil: 'networkidle', timeout: 45000 });
    await page.screenshot({ path: 'docs/ref-amf.png', fullPage: false });
  } catch (e) { console.log('amf err:', e.message); }

  await browser.close();
  console.log('Done.');
})();
