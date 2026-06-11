import { chromium } from 'playwright-core';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const shots = [['hero-bold.html','hero-bold.png'],['hero-clean.html','hero-clean.png'],['hero-urban.html','hero-urban.png'],['hero-b2b.html','hero-b2b.png']];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const context = await browser.newContext({ viewport:{width:1366,height:860}, deviceScaleFactor:2, ignoreHTTPSErrors:true });
const page = await context.newPage();
for (const [html,png] of shots){
  await page.goto('file://'+join(__dirname,html), { waitUntil:'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(900);
  await page.screenshot({path:join(__dirname,png)});
  const n = await page.evaluate(() => document.fonts.size);
  console.log('shot',png,'fonts:',n);
}
await browser.close();
