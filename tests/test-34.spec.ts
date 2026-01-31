import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa yanavanam maath ennam');
  await page.getByText('ඔයා යනවනම් මාත් එන්නම්').click();
  await page.getByLabel('Clear').click();
});