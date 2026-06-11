import { chromium } from 'playwright-core';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const shots = [['cine-noir.html','cine-noir.png'],['cine-shift.html','cine-shift.png'],['cine-mono.html','cine-mono.png']];
const browser = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const context = await browser.newContext({ viewport:{width:1366,height:860}, deviceScaleFactor:2, ignoreHTTPSErrors:true });
const page = await context.newPage();
for (const [html,png] of shots){ await page.goto('file://'+join(__dirname,html),{waitUntil:'networkidle'}); await page.evaluate(()=>document.fonts.ready); await page.waitForTimeout(900); await page.screenshot({path:join(__dirname,png)}); console.log('shot',png); }
await browser.close();
