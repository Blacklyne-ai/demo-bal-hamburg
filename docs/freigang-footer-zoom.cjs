const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.auto-motorrad-freigang.de/', { waitUntil: 'networkidle', timeout: 45000 });
  // Find footer element and scroll to it
  const footerHandle = await page.$('footer');
  if (footerHandle) {
    await footerHandle.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    const box = await footerHandle.boundingBox();
    if (box) {
      await page.screenshot({ 
        path: 'docs/ref-freigang-footer-only.png', 
        clip: { x: 0, y: box.y, width: 1440, height: Math.min(box.height + 100, 1200) }
      });
      console.log('Footer captured:', box);
    }
  }
  // Also capture last 1500px regardless
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 1500));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'docs/ref-freigang-cta-area.png', fullPage: false });
  await browser.close();
})();
