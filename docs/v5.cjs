const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.addInitScript(() => { try { localStorage.setItem('bal-hamburg-cookie-consent','accepted'); } catch(e){} });
  await page.goto('http://localhost:4357/', { waitUntil: 'networkidle' });
  // Philosophie-Section
  await page.evaluate(() => { const sections = document.querySelectorAll('section'); sections.forEach((s,i) => { if (s.textContent.includes('Eine gute Arbeit beginnt')) s.scrollIntoView({behavior:'instant', block:'start'}); }); });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'docs/v5-d-philo.png', fullPage: false });
  // Footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'docs/v5-d-footer.png', fullPage: false });
  // Hero zoom
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'docs/v5-d-hero.png', fullPage: false });
  await browser.close();
  console.log('done');
})();
