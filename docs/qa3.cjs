const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await page.addInitScript(() => { try { localStorage.setItem('bal-hamburg-cookie-consent','accepted'); } catch(e){} });
  await page.goto('http://localhost:4357/?t='+Date.now(), { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'docs/v3-d-hero.png', fullPage: false });
  for (const [name, frac] of [['about', 0.42], ['philo', 0.55], ['lackmarken', 0.70]]) {
    await page.evaluate((f) => window.scrollTo(0, document.body.scrollHeight * f), frac);
    await page.waitForTimeout(600);
    await page.screenshot({ path: `docs/v3-d-${name}.png`, fullPage: false });
  }
  // Mobile
  const mpage = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await mpage.addInitScript(() => { try { localStorage.setItem('bal-hamburg-cookie-consent','accepted'); } catch(e){} });
  await mpage.goto('http://localhost:4357/?t='+Date.now(), { waitUntil: 'networkidle' });
  await mpage.screenshot({ path: 'docs/v3-m-hero.png', fullPage: false });
  await browser.close();
  console.log('done');
})();
