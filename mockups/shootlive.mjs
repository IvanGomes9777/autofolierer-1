import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const ctx = await browser.newContext({ viewport:{width:1366,height:860}, deviceScaleFactor:2, ignoreHTTPSErrors:true });
const page = await ctx.newPage();
await page.goto('http://localhost:3210', { waitUntil:'networkidle' });
await page.evaluate(()=>document.fonts.ready);
await page.waitForTimeout(1600);
await page.screenshot({ path:'mockups/live-hero-desktop.png' });
// mobile
await page.setViewportSize({ width:390, height:844 });
await page.waitForTimeout(600);
await page.screenshot({ path:'mockups/live-hero-mobile.png' });
console.log('done');
await browser.close();
