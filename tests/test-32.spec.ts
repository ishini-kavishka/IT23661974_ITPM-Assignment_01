import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata @ WiFi password ekak oona');
  await page.getByText('මට @ WiFi password එකක් ඕන').click();
  await page.getByLabel('Clear').click();
  await page.getByLabel('Clear').click();
});