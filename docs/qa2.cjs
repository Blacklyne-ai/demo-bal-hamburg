const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  // DESKTOP
  let page = await (await browser.newContext({
    viewport: { width: 1440, height: 900 },
  })).newPage();
  await page.addInitScript(() => { try { localStorage.setItem('bal-hamburg-cookie-consent','accepted'); } catch(e){} });
  await page.goto('http://localhost:4357/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'docs/v2-d-hero.png', fullPage: false });
  await page.screenshot({ path: 'docs/v2-d-full.png', fullPage: true });
  // Sections scroll
  for (const [name, frac] of [['usps', 0.13], ['services', 0.27], ['about', 0.42], ['philo', 0.58], ['lackmarken', 0.72], ['standort', 0.85], ['cta', 0.95], ['footer', 1.0]]) {
    await page.evaluate((f) => window.scrollTo(0, document.body.scrollHeight * f), frac);
    await page.waitForTimeout(450);
    await page.screenshot({ path: `docs/v2-d-${name}.png`, fullPage: false });
  }
  // SUBPAGES
  for (const slug of ['leistungen', 'philosophie', 'qualitaet', 'galerie', 'kontakt', 'impressum']) {
    await page.goto('http://localhost:4357/' + slug, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `docs/v2-d-${slug}-hero.png`, fullPage: false });
  }
  // MOBILE
  page = await (await browser.newContext({
    viewport: { width: 390, height: 844 },
  })).newPage();
  await page.addInitScript(() => { try { localStorage.setItem('bal-hamburg-cookie-consent','accepted'); } catch(e){} });
  await page.goto('http://localhost:4357/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'docs/v2-m-hero.png', fullPage: false });
  await page.screenshot({ path: 'docs/v2-m-full.png', fullPage: true });
  await browser.close();
  console.log('done');
})();
