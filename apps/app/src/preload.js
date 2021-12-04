/* eslint no-restricted-syntax: off */
import { takeScreenshot } from '@playground/screenshot';

window.addEventListener('DOMContentLoaded', async () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }

  const screenshot = await takeScreenshot('https://robertoachar.dev');
  const sumElement = document.getElementById('screenshot');
  sumElement.innerText = screenshot.length;
});
