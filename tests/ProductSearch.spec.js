import { test } from "@playwright/test";
import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
import UserHomePage from "../pages/UserHomePage";
import CheckoutPage from "../pages/ChekoutPage";

test('Verify Product Search', async ({page}) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);
    const userHomePage = new UserHomePage(page);
    const checkoutPage = new CheckoutPage(page);

    await basePage.PageOpen();
    await loginPage.LoginButtonOnClick();
    await loginPage.EnterEmail(process.env.EMAIL);
    await loginPage.EnterPassword(process.env.PASSWORD);
    await loginPage.RememberMeCheckBoxOnClick();
    // await page.pause();
    await loginPage.SubmitButtonOnClick();
    // await page.pause();

    // search and open product
    await userHomePage.SearchProductByName("Laptop");
    // await userHomePage.SearchButtonOnClick();
    await userHomePage.VerifyAndOpenProduct();
    // await page.pause();
    await userHomePage.SetProductQuantity(2);
    // await page.pause();

    // add searched product to cart
    await checkoutPage.AddToCartOnClick();
    await userHomePage.ShoppingCartButtonOnClick();
    await checkoutPage.AgreeTermsOfServiceOnClick();
    await checkoutPage.CheckoutButtonOnClick();
    // await page.pause();

    // complete billing info
    await checkoutPage.ChooseBillingCountry(process.env.COUNTRY);
    // await page.pause();
    await checkoutPage.EnterCity(process.env.CITY);
    // await page.pause();
    await checkoutPage.EnterBillingAddress(process.env.ADDRESS);
    // await page.pause();
    await checkoutPage.EnterZipCode(process.env.ZIP);
    // await page.pause();
    await checkoutPage.EnterPhoneNumber(process.env.PHONE_NUMBER);
    // await page.pause();
    await checkoutPage.CompleteCheckoutSteps();
    // await page.pause();

    //vefify order success
    await checkoutPage.VerifyOrderSuccessAndDetails();
})