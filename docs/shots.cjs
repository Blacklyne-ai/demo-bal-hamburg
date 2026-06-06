const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const sites = [
    { url: 'https://www.bal-hamburg.de/', out: 'docs/old-site.png', full: true },
    { url: 'https://www.route66-hh.de/', out: 'docs/ref-route66.png', full: false },
    { url: 'https://www.auto-motorrad-freigang.de/', out: 'docs/ref-amf.png', full: false },
  ];
  for (const s of sites) {
    try {
      console.log(s.url);
      await page.goto(s.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.screenshot({ path: s.out, fullPage: s.full });
      console.log('  ->', s.out);
    } catch(e) { console.log('  FAIL:', e.message); }
  }
  await browser.close();
})();
