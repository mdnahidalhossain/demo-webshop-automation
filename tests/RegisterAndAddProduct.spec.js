import { test } from "@playwright/test";
import RegisterPage from "../pages/RegisterPage";
import BasePage from "../pages/BasePage";

test('Verify Register + Add Product To Cart', async ({page}) => {
    const basePage = new BasePage(page);
    const registerPage = new RegisterPage(page);

    await basePage.PageOpen();
    await page.pause();
    await registerPage.RegisterButtonOnClick();
    await page.pause();

    //register new user
    await registerPage.SelectGenderRadioButton();
    await page.pause();
    await registerPage.EnterFirstName();
    await page.pause();
    await registerPage.EnterLastName();
    await page.pause();
    await registerPage.EnterEmail();
    await page.pause();
    await registerPage.EnterNewPassword();
    await page.pause();
    await registerPage.EnterConfirmPassword();

    await page.pause();
    await registerPage.SubmitButtonOnClick();

    //verify successful registration
    await registerPage.VerifyRegistrationComplete();
    await page.pause();
    await registerPage.ContinueButtonOnClick();
    await page.pause();
    await registerPage.LogoutButtonOnClick();
    await page.pause();
})