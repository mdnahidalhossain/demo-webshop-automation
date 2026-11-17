// @ts-check
import { test, expect } from '@playwright/test';
import BasePage from '../pages/BasePage';
import LoginPage from '../pages/LoginPage';

test('Verify Invalid Login', async ({ page }) => {
  const basePage = new BasePage(page);
  const loginPage = new LoginPage(page);

  await basePage.PageOpen();
  // await page.pause();
  await loginPage.LoginButtonOnClick();
  // await page.pause();

  //enter email & password
  await loginPage.EnterEmail("nahid123@gmail.com");
  // await page.pause();
  await loginPage.EnterPassword("123456");
  // await page.pause();
  await loginPage.RememberMeCheckBoxOnClick();
  // await page.pause();

  //verify invalid login credentials
  await loginPage.SubmitButtonOnClick()
  await loginPage.VerifyErrorMessage();
});