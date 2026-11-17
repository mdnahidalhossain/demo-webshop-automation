import { expect } from "@playwright/test";

class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginRoute = page.locator("//a[@class='ico-login']")
        this.email = page.locator("#Email")
        this.password = page.locator("#Password")
        this.submitButton = page.locator("//input[@class='button-1 login-button']")
        this.errorMessage = page.locator("//div[@class='validation-summary-errors']")
    }

    async LoginButtonOnClick() {
        await this.loginRoute.click();
    }

    async EnterEmail() {
        await this.email.fill("nahid@gmail.com");
    }

    async EnterPassword() {
        await this.password.fill("123456");
    }

    async SubmitButtonOnClick() {
        await this.submitButton.click();
    }

    async VerifyErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
        // return await this.errorMessage.innerText();
    }
}

export default LoginPage