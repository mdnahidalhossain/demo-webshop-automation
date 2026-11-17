// @ts-check
import { test, expect } from '@playwright/test';
import BasePage from '../pages/BasePage';
import LoginPage from '../pages/LoginPage';

test('Verify Invalid Login', async ({ page }) => {
  const basePage = new BasePage(page);
  const loginPage = new LoginPage(page);

  await basePage.PageOpen();
  await page.pause();
  await loginPage.LoginButtonOnClick();
  await page.pause();

  //enter email & password
  await loginPage.EnterEmail();
  await page.pause();
  await loginPage.EnterPassword();
  await page.pause();

  //verify invalid login credentials
  await loginPage.SubmitButtonOnClick()
  await loginPage.VerifyErrorMessage();
  await page.pause();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
