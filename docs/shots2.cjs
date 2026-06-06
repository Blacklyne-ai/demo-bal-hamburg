const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Safari/605.1.15',
    viewport: { width: 1440, height: 900 },
  });
  const page = await ctx.newPage();
  for (const s of [
    { url: 'https://www.route66-hh.de/', out: 'docs/ref-route66.png' },
    { url: 'https://www.auto-motorrad-freigang.de/', out: 'docs/ref-amf.png' },
  ]) {
    try {
      console.log(s.url);
      await page.goto(s.url, { waitUntil: 'domcontentloaded', timeout: 25000 });
      await page.waitForTimeout(2500);
      await page.screenshot({ path: s.out, fullPage: false });
      console.log('  done');
    } catch(e) { console.log('  FAIL:', e.message); }
  }
  await browser.close();
})();
