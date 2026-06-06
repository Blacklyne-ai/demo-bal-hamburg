const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  // Desktop Hero
  let ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  let page = await ctx.newPage();
  await page.goto('http://localhost:4400/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'docs/qa-d-hero.png' });
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/qa-d-video-section.png' });
  await page.evaluate(() => window.scrollTo(0, 1800));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/qa-d-services.png' });
  await page.evaluate(() => window.scrollTo(0, 3000));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/qa-d-presse.png' });
  await page.evaluate(() => window.scrollTo(0, 4000));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/qa-d-warum.png' });
  await page.evaluate(() => window.scrollTo(0, 5000));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/qa-d-standort.png' });
  await page.evaluate(() => window.scrollTo(0, 99999));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/qa-d-footer.png' });
  await ctx.close();

  // Mobile Sections
  ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  page = await ctx.newPage();
  await page.goto('http://localhost:4400/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'docs/qa-m-hero-top.png' });
  await page.evaluate(() => window.scrollTo(0, 600));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/qa-m-stats.png' });
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/qa-m-video.png' });
  await page.evaluate(() => window.scrollTo(0, 99999));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/qa-m-footer.png' });
  await ctx.close();

  await browser.close();
  console.log('Done.');
})();
