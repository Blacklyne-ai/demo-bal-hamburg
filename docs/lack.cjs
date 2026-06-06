const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.addInitScript(() => { try { localStorage.setItem('bal-hamburg-cookie-consent','accepted'); } catch(e){} });
  await page.goto('http://localhost:4357/', { waitUntil: 'networkidle' });
  // Scroll to lackmarken section, then wait for paint
  await page.evaluate(() => {
    const el = document.querySelector('.lackmarken-section');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'docs/v3-lackmarken-direct.png', fullPage: false });
  await browser.close();
  console.log('done');
})();
