const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.context().addCookies([]);
  // accept cookie banner via localStorage on page load
  await page.addInitScript(() => {
    try { localStorage.setItem('bal-hamburg-cookie-consent','accepted'); } catch(e) {}
  });
  await page.goto('http://localhost:4357/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'docs/qa-d-full.png', fullPage: true });
  await page.screenshot({ path: 'docs/qa-d-hero.png', fullPage: false });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.18));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'docs/qa-d-usps.png', fullPage: false });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.34));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'docs/qa-d-services.png', fullPage: false });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.50));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'docs/qa-d-about.png', fullPage: false });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.66));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'docs/qa-d-philo.png', fullPage: false });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.80));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'docs/qa-d-lackmarken.png', fullPage: false });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.92));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'docs/qa-d-cta.png', fullPage: false });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'docs/qa-d-footer.png', fullPage: false });
  // Subpages
  for (const slug of ['leistungen', 'philosophie', 'qualitaet', 'galerie', 'kontakt', 'impressum', 'datenschutz', 'haftungsausschluss']) {
    await page.goto('http://localhost:4357/' + slug, { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'docs/qa-d-' + slug + '.png', fullPage: true });
  }
  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:4357/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'docs/qa-m-full.png', fullPage: true });
  await browser.close();
  console.log('done');
})();
