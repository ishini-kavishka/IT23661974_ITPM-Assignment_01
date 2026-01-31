import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama heta hawasa yanavaa ');
  await page.getByText('මම හෙට හwඅස යනවා').click();
  await page.getByRole('button', { name: 'Clear' }).first().click();
});