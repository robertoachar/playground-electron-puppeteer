import puppeteer from 'puppeteer';

export const takeScreenshot = async (url) => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
    headless: true,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  console.log(`Browser is connected: ${browser.isConnected()}`);

  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
  });

  console.log(`Loading ${url}`);
  await page.goto(url, {
    timeout: 30000,
    waitUntil: 'networkidle0',
  });

  console.log(`Taking screenshot...`);
  const screenshot = await page.screenshot();

  await browser.close();
  console.log(`Browser is connected: ${browser.isConnected()}`);

  return screenshot;
};
