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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id=\'termsofservice\']')

```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - generic [ref=f5e3]:
    - generic [ref=f5e4]:
      - link [ref=f5e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f5e7]
      - list [ref=f5e10]:
        - listitem [ref=f5e11]:
          - link "Register" [ref=f5e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f5e13]:
          - link "Log in" [ref=f5e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f5e15]:
          - link "Shopping cart (0)" [ref=f5e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f5e17]: Shopping cart
            - generic [ref=f5e18]: (0)
        - listitem [ref=f5e19]:
          - link "Wishlist (0)" [ref=f5e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f5e21]: Wishlist
            - generic [ref=f5e22]: (0)
      - generic [ref=f5e24]:
        - status [ref=f5e25]
        - textbox [ref=f5e26]: Search store
        - button "Search" [ref=f5e27] [cursor=pointer]
    - list [ref=f5e29]:
      - listitem [ref=f5e30]:
        - link "Books" [ref=f5e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f5e32]:
        - link "Computers" [ref=f5e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f5e34]:
        - link "Electronics" [ref=f5e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f5e36]:
        - link "Apparel & Shoes" [ref=f5e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f5e38]:
        - link "Digital downloads" [ref=f5e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f5e40]:
        - link "Jewelry" [ref=f5e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f5e42]:
        - link "Gift Cards" [ref=f5e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic [ref=f5e44]:
      - list [ref=f5e46]:
        - listitem [ref=f5e47]:
          - link "Cart" [ref=f5e48] [cursor=pointer]:
            - /url: /cart
        - listitem [ref=f5e49]: Address
        - listitem [ref=f5e50]: Shipping
        - listitem [ref=f5e51]: Payment
        - listitem [ref=f5e52]: Confirm
        - listitem [ref=f5e53]: Complete
      - generic [ref=f5e54]:
        - heading "Shopping cart" [level=1] [ref=f5e56]
        - generic [ref=f5e57]: Your Shopping Cart is empty!
  - generic [ref=f5e59]:
    - generic [ref=f5e60]:
      - generic [ref=f5e61]:
        - heading "Information" [level=3] [ref=f5e62]
        - list [ref=f5e63]:
          - listitem [ref=f5e64]:
            - link "Sitemap" [ref=f5e65] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f5e66]:
            - link "Shipping & Returns" [ref=f5e67] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f5e68]:
            - link "Privacy Notice" [ref=f5e69] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f5e70]:
            - link "Conditions of Use" [ref=f5e71] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f5e72]:
            - link "About us" [ref=f5e73] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f5e74]:
            - link "Contact us" [ref=f5e75] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f5e76]:
        - heading "Customer service" [level=3] [ref=f5e77]
        - list [ref=f5e78]:
          - listitem [ref=f5e79]:
            - link "Search" [ref=f5e80] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f5e81]:
            - link "News" [ref=f5e82] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f5e83]:
            - link "Blog" [ref=f5e84] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f5e85]:
            - link "Recently viewed products" [ref=f5e86] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f5e87]:
            - link "Compare products list" [ref=f5e88] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f5e89]:
            - link "New products" [ref=f5e90] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f5e91]:
        - heading "My account" [level=3] [ref=f5e92]
        - list [ref=f5e93]:
          - listitem [ref=f5e94]:
            - link "My account" [ref=f5e95] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f5e96]:
            - link "Orders" [ref=f5e97] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f5e98]:
            - link "Addresses" [ref=f5e99] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f5e100]:
            - link "Shopping cart" [ref=f5e101] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f5e102]:
            - link "Wishlist" [ref=f5e103] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f5e104]:
        - heading "Follow us" [level=3] [ref=f5e105]
        - list [ref=f5e106]:
          - listitem [ref=f5e107]:
            - link "Facebook" [ref=f5e108] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f5e109]:
            - link "Twitter" [ref=f5e110] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f5e111]:
            - link "RSS" [ref=f5e112] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f5e113]:
            - link "YouTube" [ref=f5e114] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f5e115]:
            - link "Google+" [ref=f5e116] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f5e117]:
      - text: Powered by
      - link "nopCommerce" [ref=f5e118] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f5e119]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
> 36  |         await this.termsOfServiceCheckBox.click();
      |                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  37  |     }
  38  | 
  39  |     async CheckoutButtonOnClick() {
  40  |         await this.checkoutButton.click();
  41  |     }
  42  | 
  43  |     async ChooseBillingCountry(countryName) {
  44  |         await this.billingCountry.selectOption(countryName);
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