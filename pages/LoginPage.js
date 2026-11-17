import { expect } from "@playwright/test";

class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginRoute = page.locator("//a[@class='ico-login']")
        this.email = page.locator("#Email")
        this.password = page.locator("#Password")
        this.remeberMeCheckbox = page.locator("#RememberMe")
        this.submitButton = page.locator("//input[@class='button-1 login-button']")
        this.errorMessage = page.locator("//div[@class='validation-summary-errors']")
    }

    async LoginButtonOnClick() {
        await this.loginRoute.click();
    }

    async EnterEmail(email) {
        await this.email.fill(email);
    }

    async EnterPassword(password) {
        await this.password.fill(password);
    }

    async RememberMeCheckBoxOnClick() {
        await this.remeberMeCheckbox.click();
    }

    async SubmitButtonOnClick() {
        await this.submitButton.click();
    }

    async VerifyErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
    }
}

export default LoginPage