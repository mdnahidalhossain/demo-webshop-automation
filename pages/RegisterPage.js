import { expect } from "@playwright/test";

class RegisterPage {
    constructor(page) {
        this.page = page;

        this.registerButton = page.locator("//a[@class='ico-register']");
        this.genderRadioButton = page.locator("#gender-male");
        this.firstName = page.locator("#FirstName");
        this.lastName = page.locator("#LastName");
        this.email = page.locator("#Email");
        this.newPassword = page.locator("#Password");
        this.confirmPassword = page.locator("#ConfirmPassword");
        this.submitButton = page.locator("#register-button");

        this.registrationCompleteMessage = page.locator("//div[@class='result']")
        this.continueButton = page.locator("//input[@class='button-1 register-continue-button']")

        this.logout = page.locator("//a[@class='ico-logout']");
    }

    async RegisterButtonOnClick() {
        await this.registerButton.click();
    }

    async SelectGenderRadioButton() {
        await this.genderRadioButton.click();
    }

    async EnterFirstName() {
        await this.firstName.fill(process.env.FIRST_NAME);
    }

    async EnterLastName() {
        await this.lastName.fill(process.env.LAST_NAME);
    }

    async EnterEmail() {
        await this.email.fill(process.env.EMAIL);
    }

    async EnterNewPassword() {
        await this.newPassword.fill(process.env.NEW_PASSWORD);
    }

    async EnterConfirmPassword() {
        await this.confirmPassword.fill(process.env.CONFIRM_PASSWORD);
    }

    async SubmitButtonOnClick() {
        await this.submitButton.click();
    }

    async VerifyRegistrationComplete() {
        await expect(this.registrationCompleteMessage).toBeVisible();
    }

    async ContinueButtonOnClick() {
        await this.continueButton.click();
    }

    async LogoutButtonOnClick() {
        await this.logout.click();
    }
}
export default RegisterPage