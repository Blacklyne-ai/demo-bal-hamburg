const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.addInitScript(() => { try { localStorage.setItem('bal-hamburg-cookie-consent','accepted'); } catch(e){} });
  await page.goto('http://localhost:4357/?t='+Date.now(), { waitUntil: 'networkidle' });
  await page.evaluate(() => { const sections = document.querySelectorAll('section'); sections.forEach((s) => { if (s.textContent.includes('Eine gute Arbeit beginnt')) s.scrollIntoView({behavior:'instant', block:'start'}); }); });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'docs/v6-d-philo.png', fullPage: false });
  await page.evaluate(() => { const sections = document.querySelectorAll('section.final-cta'); if(sections[0]) sections[0].scrollIntoView({behavior:'instant', block:'start'}); });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'docs/v6-d-cta.png', fullPage: false });
  await browser.close();
  console.log('done');
})();
