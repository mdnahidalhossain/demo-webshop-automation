import { expect } from "@playwright/test";

class UserHomePage {
    constructor(page) {
        this.page = page;
        this.booksCategory = page.locator("//ul[@class='list']/li/a[@href='/books']");
        this.selectProduct = page.locator("//h2[@class='product-title']/a[normalize-space(text())='Computing and Internet']");
        this.addToCart = page.locator("//input[@data-productid='13' and @class='button-1 add-to-cart-button']");
        this.shoppingCart = page.locator("//li[@id='topcartlink']");

        this.productName = page.locator("//a[@class='product-name']");
        this.quantityInput = page.locator("input.qty-input");
    }

    async SelectBooksCategory() {
        await this.booksCategory.click();
    }

    async SelectProduct() {
        // await this.selectProduct.click();
        await Promise.all([
            this.page.waitForLoadState('domcontentloaded'),
            this.selectProduct.click()
        ]);
    }

    async AddToCardButtonOnClick() {
        await this.addToCart.click();
    }

    async ShoopingCartButtonOnClick() {
        await this.shoppingCart.click();
    }

    async VerifyProduct() {
        await expect(this.productName).toBeVisible();
    }

    async VerifyProducQuantity() {
        // await expect(this.quantityInput).toBeVisible();
        await expect(this.quantityInput).toHaveValue(/^\d+$/);
    }
}
export default UserHomePage