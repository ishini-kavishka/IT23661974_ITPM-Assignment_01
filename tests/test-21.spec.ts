import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha vudhee idhalaa api panthi yanna thamai hithagena hitiyee. eeth ekaparatama maha vaessak vahinna patan gaththa eliyatavath yanna baeri tharamatama. me vaessa nisaa bas enneth godak parakku vunaa. vaessa nisaa phone ekee signal thibbeth nae. kohoma hari try karala yaluvekta call ekak aran kivvaa adha panthi enna baeri vai kiyalaa. passee mama lecture ta mail ekak dala kivvaa adha karana lesson ekee video eka LMS ekata upload karanna kiyalaa. mee gaena mama kalin danuvath karapu nisa loku prashnayak unee nae. edhaama havasama mama ee lecture video eka balanna patan ganna plan kalaa. ');
  await page.getByText('අද වුදේ ඉදලා අපි පන්ති යන්න තමෛ හිතගෙන හිටියේ. ඒත් එකපරටම මහ වැස්සක් වහින්න පටන්').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).nth(1).click();
  await page.getByLabel('Clear').click();
});