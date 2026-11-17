import { test } from "@playwright/test";
import RegisterPage from "../pages/RegisterPage";
import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
import UserHomePage from "../pages/UserHomePage";

test('Verify Register + Add Product To Cart', async ({page}) => {
    const basePage = new BasePage(page);
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const userHomePage = new UserHomePage(page);

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

    // login with newly registered user
    await loginPage.LoginButtonOnClick();
    await page.pause();
    await loginPage.EnterEmail(process.env.EMAIL);
    await page.pause();
    await loginPage.EnterPassword(process.env.PASSWORD);
    await page.pause();
    await loginPage.RememberMeCheckBoxOnClick();
    await page.pause();
    await loginPage.SubmitButtonOnClick();
    await page.pause();

    // select a product from the category
    await userHomePage.SelectBooksCategory();
    await page.pause();
    await userHomePage.SelectProduct();
    await page.pause();
    await userHomePage.AddToCardButtonOnClick();
    await page.pause();
    await userHomePage.ShoppingCartButtonOnClick();
    await page.pause();

    // verify the correct product and quantity appear in the cart
    await userHomePage.VerifyProduct();
    await page.pause();
    await userHomePage.VerifyProducQuantity()
    await page.pause();

})