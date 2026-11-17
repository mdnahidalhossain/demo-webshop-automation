# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductSearch.spec.js >> Verify Product Search
- Location: tests\ProductSearch.spec.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[@id=\'billing-new-address-form\']//select[@id=\'BillingNewAddress_CountryId\']')

```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - generic [ref=f6e3]:
    - generic [ref=f6e4]:
      - link [ref=f6e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f6e7]
      - list [ref=f6e10]:
        - listitem [ref=f6e11]:
          - link "Register" [ref=f6e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f6e13]:
          - link "Log in" [ref=f6e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f6e15]:
          - link "Shopping cart (2)" [ref=f6e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f6e17]: Shopping cart
            - generic [ref=f6e18]: (2)
        - listitem [ref=f6e19]:
          - link "Wishlist (0)" [ref=f6e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f6e21]: Wishlist
            - generic [ref=f6e22]: (0)
      - generic [ref=f6e24]:
        - status [ref=f6e25]
        - textbox [ref=f6e26]: Search store
        - button "Search" [ref=f6e27] [cursor=pointer]
    - list [ref=f6e29]:
      - listitem [ref=f6e30]:
        - link "Books" [ref=f6e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f6e32]:
        - link "Computers" [ref=f6e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f6e34]:
        - link "Electronics" [ref=f6e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f6e36]:
        - link "Apparel & Shoes" [ref=f6e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f6e38]:
        - link "Digital downloads" [ref=f6e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f6e40]:
        - link "Jewelry" [ref=f6e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f6e42]:
        - link "Gift Cards" [ref=f6e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f6e44]:
        - generic [ref=f6e45]:
          - strong [ref=f6e47]: Categories
          - list [ref=f6e49]:
            - listitem [ref=f6e50]:
              - link "Books" [ref=f6e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f6e52]:
              - link "Computers" [ref=f6e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f6e54]:
              - link "Electronics" [ref=f6e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f6e56]:
              - link "Apparel & Shoes" [ref=f6e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f6e58]:
              - link "Digital downloads" [ref=f6e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f6e60]:
              - link "Jewelry" [ref=f6e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f6e62]:
              - link "Gift Cards" [ref=f6e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f6e64]:
          - strong [ref=f6e66]: Manufacturers
          - list [ref=f6e68]:
            - listitem [ref=f6e69]:
              - link "Tricentis" [ref=f6e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f6e71]:
          - strong [ref=f6e73]: Newsletter
          - generic [ref=f6e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f6e77]
            - button "Subscribe" [ref=f6e79] [cursor=pointer]
      - generic [ref=f6e81]:
        - heading "Welcome, Please Sign In!" [level=1] [ref=f6e83]
        - generic [ref=f6e84]:
          - generic [ref=f6e85]:
            - generic [ref=f6e86]:
              - strong [ref=f6e88]: Checkout as a guest or register
              - generic [ref=f6e91]:
                - paragraph [ref=f6e92]:
                  - strong [ref=f6e93]: Register and save time!
                  - text: "Register with us for future convenience:"
                - list [ref=f6e94]:
                  - listitem [ref=f6e95]: Fast and easy check out
                  - listitem [ref=f6e96]: Easy access to your order history and status
              - generic [ref=f6e97]:
                - button "Checkout as Guest" [ref=f6e98] [cursor=pointer]
                - button "Register" [ref=f6e99] [cursor=pointer]
            - generic [ref=f6e100]:
              - strong [ref=f6e102]: Returning Customer
              - generic [ref=f6e104]:
                - generic [ref=f6e105]:
                  - generic [ref=f6e106]: "Email:"
                  - textbox "Email:" [active] [ref=f6e107]
                - generic [ref=f6e108]:
                  - generic [ref=f6e109]: "Password:"
                  - textbox "Password:" [ref=f6e110]
                - generic [ref=f6e111]:
                  - checkbox "Remember me?" [ref=f6e112]
                  - generic [ref=f6e113]: Remember me?
                  - link "Forgot password?" [ref=f6e115] [cursor=pointer]:
                    - /url: /passwordrecovery
                - button "Log in" [ref=f6e117] [cursor=pointer]
          - generic [ref=f6e118]:
            - heading "About login / registration" [level=2] [ref=f6e120]
            - paragraph [ref=f6e122]: Put your login / registration information here. You can edit this in the admin site.
  - generic [ref=f6e123]:
    - generic [ref=f6e124]:
      - generic [ref=f6e125]:
        - heading "Information" [level=3] [ref=f6e126]
        - list [ref=f6e127]:
          - listitem [ref=f6e128]:
            - link "Sitemap" [ref=f6e129] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f6e130]:
            - link "Shipping & Returns" [ref=f6e131] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f6e132]:
            - link "Privacy Notice" [ref=f6e133] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f6e134]:
            - link "Conditions of Use" [ref=f6e135] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f6e136]:
            - link "About us" [ref=f6e137] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f6e138]:
            - link "Contact us" [ref=f6e139] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f6e140]:
        - heading "Customer service" [level=3] [ref=f6e141]
        - list [ref=f6e142]:
          - listitem [ref=f6e143]:
            - link "Search" [ref=f6e144] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f6e145]:
            - link "News" [ref=f6e146] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f6e147]:
            - link "Blog" [ref=f6e148] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f6e149]:
            - link "Recently viewed products" [ref=f6e150] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f6e151]:
            - link "Compare products list" [ref=f6e152] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f6e153]:
            - link "New products" [ref=f6e154] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f6e155]:
        - heading "My account" [level=3] [ref=f6e156]
        - list [ref=f6e157]:
          - listitem [ref=f6e158]:
            - link "My account" [ref=f6e159] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f6e160]:
            - link "Orders" [ref=f6e161] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f6e162]:
            - link "Addresses" [ref=f6e163] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f6e164]:
            - link "Shopping cart" [ref=f6e165] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f6e166]:
            - link "Wishlist" [ref=f6e167] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f6e168]:
        - heading "Follow us" [level=3] [ref=f6e169]
        - list [ref=f6e170]:
          - listitem [ref=f6e171]:
            - link "Facebook" [ref=f6e172] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f6e173]:
            - link "Twitter" [ref=f6e174] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f6e175]:
            - link "RSS" [ref=f6e176] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f6e177]:
            - link "YouTube" [ref=f6e178] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f6e179]:
            - link "Google+" [ref=f6e180] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f6e181]:
      - text: Powered by
      - link "nopCommerce" [ref=f6e182] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f6e183]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | 
  3   | class CheckoutPage {
  4   |     constructor(page) {
  5   |         this.page = page;
  6   |         this.addToCartButton = page.locator("input.add-to-cart-button");
  7   |         this.barNotification = page.locator("#bar-notification");
  8   |         this.termsOfServiceCheckBox = page.locator("//input[@id='termsofservice']");
  9   |         this.checkoutButton = page.locator("//button[@class='button-1 checkout-button']");
  10  | 
  11  |         //billing page
  12  |         this.billingCountry = page.locator("//div[@id='billing-new-address-form']//select[@id='BillingNewAddress_CountryId']");
  13  |         this.city = page.locator("#BillingNewAddress_City");
  14  |         this.adress1 = page.locator("#BillingNewAddress_Address1");
  15  |         this.zipCode = page.locator("#BillingNewAddress_ZipPostalCode");
  16  |         this.phoneNumber = page.locator("#BillingNewAddress_PhoneNumber");
  17  |         this.billingAddressContinueButton = page.locator("//div[@id='billing-buttons-container']//input[@value='Continue']");
  18  |         this.shippingAddressContinueButton = page.locator("//div[@id='shipping-buttons-container']//input[@value='Continue']");
  19  |         this.shippingMethodContinueButton = page.locator("//div[@id='shipping-method-buttons-container']//input[@value='Continue']");
  20  |         this.paymentMethodContinueButton = page.locator("//div[@id='payment-method-buttons-container']//input[@value='Continue']");
  21  |         this.paymentInfoContinueButton = page.locator("//div[@id='payment-info-buttons-container']//input[@value='Continue']");
  22  |         this.confirmOrderButton = page.locator("//div[@id='confirm-order-buttons-container']//input[@value='Confirm']");
  23  | 
  24  |         //verify order details
  25  |         this.orderSuccessMessage = page.locator("//div[@class='section order-completed']//div[@class='title']");
  26  |         this.orderNumber = page.locator("//div[@class='section order-completed']//ul[@class='details']");
  27  |         this.orderDetails = page.locator("//div[@class='section order-completed']//a[starts-with(@href, '/orderdetails/')]");
  28  |         this.orderDetailsPage = page.locator("//div[@class='page order-details-page']");
  29  |     }
  30  | 
  31  |     async AddToCartOnClick() {
  32  |         await this.addToCartButton.click();
  33  |     }
  34  | 
  35  |     async AgreeTermsOfServiceOnClick() {
  36  |         await this.termsOfServiceCheckBox.click();
  37  |     }
  38  | 
  39  |     async CheckoutButtonOnClick() {
  40  |         await this.checkoutButton.click();
  41  |     }
  42  | 
  43  |     async ChooseBillingCountry(countryName) {
> 44  |         await this.billingCountry.selectOption({ label: countryName });
      |                                   ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  45  |     }
  46  | 
  47  |     async EnterCity(cityName) {
  48  |         await this.city.fill(cityName);
  49  |     }
  50  | 
  51  |     async EnterBillingAddress(address) {
  52  |         await this.adress1.fill(address);
  53  |     }
  54  | 
  55  |     async EnterZipCode(zip) {
  56  |         await this.zipCode.fill(zip);
  57  |     }
  58  | 
  59  |     async EnterPhoneNumber(number) {
  60  |         await this.phoneNumber.fill(number);
  61  |     }
  62  | 
  63  |     async CompleteCheckoutSteps() {
  64  |         // billing Address
  65  |         if (await this.billingAddressContinueButton.isVisible()) {
  66  |             await this.billingAddressContinueButton.click();
  67  |         }
  68  | 
  69  |         // shipping address
  70  |         if (await this.shippingAddressContinueButton.isVisible()) {
  71  |             await this.shippingAddressContinueButton.click();
  72  |         }
  73  | 
  74  |         // shipping method
  75  |         if (await this.shippingMethodContinueButton.isVisible()) {
  76  |             await this.shippingMethodContinueButton.click();
  77  |         }
  78  | 
  79  |         // payment method
  80  |         if (await this.paymentMethodContinueButton.isVisible()) {
  81  |             await this.paymentMethodContinueButton.click();
  82  |         }
  83  | 
  84  |         // payment info
  85  |         if (await this.paymentInfoContinueButton.isVisible()) {
  86  |             await this.paymentInfoContinueButton.click();
  87  |         }
  88  | 
  89  |         // confirm order
  90  |         if (await this.confirmOrderButton.isVisible()) {
  91  |             await this.confirmOrderButton.click();
  92  |         }
  93  |     }
  94  | 
  95  |     async VerifyOrderSuccessAndDetails() {
  96  |         await expect(this.orderSuccessMessage).toBeVisible();
  97  |         
  98  |         //verify order number
  99  |         await expect(this.orderNumber).toBeVisible();
  100 | 
  101 |         // click on order details and verify
  102 |         await this.orderDetails.click();
  103 |         await expect(this.orderDetailsPage).toBeVisible();
  104 |     }
  105 | }
  106 | export default CheckoutPage
```