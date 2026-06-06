const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.auto-motorrad-freigang.de/', { waitUntil: 'networkidle', timeout: 45000 });
  // Scroll to bottom for footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'docs/ref-freigang-footer.png', fullPage: false });
  // Also save full page for context
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'docs/ref-freigang-full.png', fullPage: true });
  await browser.close();
  console.log('Done.');
})();
