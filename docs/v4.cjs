const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.addInitScript(() => { try { localStorage.setItem('bal-hamburg-cookie-consent','accepted'); } catch(e){} });
  await page.goto('http://localhost:4357/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'docs/v4-d-hero.png', fullPage: false });
  // Services
  await page.evaluate(() => { const el = document.querySelector('.services-section'); if(el) el.scrollIntoView({behavior:'instant', block:'start'}); });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'docs/v4-d-services.png', fullPage: false });
  // Full
  await page.screenshot({ path: 'docs/v4-d-full.png', fullPage: true });
  // Mobile
  const m = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await m.addInitScript(() => { try { localStorage.setItem('bal-hamburg-cookie-consent','accepted'); } catch(e){} });
  await m.goto('http://localhost:4357/', { waitUntil: 'networkidle' });
  await m.screenshot({ path: 'docs/v4-m-hero.png', fullPage: false });
  await m.evaluate(() => { const el = document.querySelector('.services-section'); if(el) el.scrollIntoView({behavior:'instant', block:'start'}); });
  await m.waitForTimeout(1000);
  await m.screenshot({ path: 'docs/v4-m-services.png', fullPage: false });
  await browser.close();
  console.log('done');
})();
