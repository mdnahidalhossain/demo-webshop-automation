import { expect } from "@playwright/test";

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator("input.add-to-cart-button");
        this.barNotification = page.locator("#bar-notification");
        this.termsOfServiceCheckBox = page.locator("//input[@id='termsofservice']");
        this.checkoutButton = page.locator("//button[@class='button-1 checkout-button']");

        //billing page
        this.billingCountry = page.locator("//div[@id='billing-new-address-form']//select[@id='BillingNewAddress_CountryId']");
        this.city = page.locator("#BillingNewAddress_City");
        this.adress1 = page.locator("#BillingNewAddress_Address1");
        this.zipCode = page.locator("#BillingNewAddress_ZipPostalCode");
        this.phoneNumber = page.locator("#BillingNewAddress_PhoneNumber");
        this.billingAddressContinueButton = page.locator("//div[@id='billing-buttons-container']//input[@value='Continue']");
        this.shippingAddressContinueButton = page.locator("//div[@id='shipping-buttons-container']//input[@value='Continue']");
        this.shippingMethodContinueButton = page.locator("//div[@id='shipping-method-buttons-container']//input[@value='Continue']");
        this.paymentMethodContinueButton = page.locator("//div[@id='payment-method-buttons-container']//input[@value='Continue']");
        this.paymentInfoContinueButton = page.locator("//div[@id='payment-info-buttons-container']//input[@value='Continue']");
        this.confirmOrderButton = page.locator("//div[@id='confirm-order-buttons-container']//input[@value='Confirm']");

        //verify order details
        this.orderSuccessMessage = page.locator("//div[@class='section order-completed']//div[@class='title']");
        this.orderNumber = page.locator("//div[@class='section order-completed']//ul[@class='details']");
        this.orderDetails = page.locator("//div[@class='section order-completed']//a[starts-with(@href, '/orderdetails/')]");
        this.orderDetailsPage = page.locator("//div[@class='page order-details-page']");
    }

    async AddToCartOnClick() {
        await this.addToCartButton.click();
    }

    async AgreeTermsOfServiceOnClick() {
        await this.termsOfServiceCheckBox.click();
    }

    async CheckoutButtonOnClick() {
        await this.checkoutButton.click();
    }

    async ChooseBillingCountry(countryName) {
        await this.billingCountry.selectOption({ label: countryName });
    }

    async EnterCity(cityName) {
        await this.city.fill(cityName);
    }

    async EnterBillingAddress(address) {
        await this.adress1.fill(address);
    }

    async EnterZipCode(zip) {
        await this.zipCode.fill(zip);
    }

    async EnterPhoneNumber(number) {
        await this.phoneNumber.fill(number);
    }

    async CompleteCheckoutSteps() {
        // billing Address
        if (await this.billingAddressContinueButton.isVisible()) {
            await this.billingAddressContinueButton.click();
        }

        // shipping address
        if (await this.shippingAddressContinueButton.isVisible()) {
            await this.shippingAddressContinueButton.click();
        }

        // shipping method
        if (await this.shippingMethodContinueButton.isVisible()) {
            await this.shippingMethodContinueButton.click();
        }

        // payment method
        if (await this.paymentMethodContinueButton.isVisible()) {
            await this.paymentMethodContinueButton.click();
        }

        // payment info
        if (await this.paymentInfoContinueButton.isVisible()) {
            await this.paymentInfoContinueButton.click();
        }

        // confirm order
        if (await this.confirmOrderButton.isVisible()) {
            await this.confirmOrderButton.click();
        }
    }

    async VerifyOrderSuccessAndDetails() {
        await expect(this.orderSuccessMessage).toBeVisible();
        
        //verify order number
        await expect(this.orderNumber).toBeVisible();

        // click on order details and verify
        await this.orderDetails.click();
        await expect(this.orderDetailsPage).toBeVisible();
    }
}
export default CheckoutPage