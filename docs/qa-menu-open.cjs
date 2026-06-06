const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4400/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.click('#menu-toggle');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/qa-mobile-menu-open.png', fullPage: false });
  console.log('Done.');
  await browser.close();
})();
