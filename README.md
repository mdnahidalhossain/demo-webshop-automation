# Demo Web Shop Automation

Automated end-to-end testing of the [Tricentis Demo Web Shop](https://demowebshop.tricentis.com/) using **Playwright** and **JavaScript**.

## Project Overview

This project contains automated test cases covering key functionalities of the Demo Web Shop application.

### Test Scenarios

| Test Case | Description |
|---|---|
| Q1 – Invalid Login | Verifies that login with invalid credentials is handled correctly. |
| Q2 – Register and Add to Cart | Tests user registration and adding products to the shopping cart. |
| Q3 – Product Search | Verifies product search functionality and the subsequent shopping and checkout workflow. |

### Technologies Used

- JavaScript
- Playwright
- Node.js
- Allure Report
- Git and GitHub

## Project Structure

```text
demo-webshop-automation/
│
├── pages/
│   ├── CheckoutPage.js
│   ├── UserHomePage.js
│   └── ... 
│
├── tests/
│   ├── InvalidLogin.spec.js
│   ├── RegisterAndAddProduct.spec.js
│   └── ProductSearch.spec.js
│
├── playwright-report/
├── allure-results/
├── allure-report/
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

*Note: The directory structure above illustrates the main project components. Your actual page-object filenames and folders may vary.*

## Prerequisites

Make sure the following are installed:

1. **Node.js and npm** – [Download Node.js](https://nodejs.org/)
2. **Visual Studio Code** (recommended) – [Download VS Code](https://code.visualstudio.com/)
3. **Git** – [Download Git](https://git-scm.com/)

## Installation and Setup

### 1. Clone the Repository

Open a terminal and execute:

```bash
git clone https://github.com/mdnahidalhossain/demo-webshop-automation.git
```

### 2. Navigate to the Project Directory

```bash
cd demo-webshop-automation
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Playwright Browsers

```bash
npx playwright install
```

The project is now ready for test execution.

## Test Execution

### Run Tests in Headed Mode

To watch the browser while tests are executing:

```bash
npx playwright test tests/InvalidLogin.spec.js --headed
or,
npx playwright test tests/RegisterAndAddProduct.spec.js --headed
or,
npx playwright test tests/ProductSearch.spec.js --headed
```

##Playwright HTML Report

After test execution, generate and open the HTML report:

```bash
npx playwright show-report
```


## Run Individually and Sequentially Test Cases
### Disclaimer: In order to generate Allure report. Each test should be first run/executed individually and sequentially. If for any reason the third test "ProductSearch.spec.js" fails. Set up new unregistered user data (do not use old user data) and run the test from the begining and main the sequence. 

**Q1 – Invalid Login**

```bash
npx playwright test tests/InvalidLogin.spec.js
```

**Q2 – Register and Add to Cart**

```bash
npx playwright test tests/RegisterAndAddProduct.spec.js
```

**Q3 – Product Search**

```bash
npx playwright test tests/ProductSearch.spec.js
```


### 2. Allure Report

The project uses `allure-playwright` to generate detailed test reports.
After running test execution sequentially, generate Allure report.

**Step 1 – Execute the tests**

```bash
npx allure generate allure-results --clean -o allure-report
```

**Step 3 – Open the report**

```bash
npx allure open allure-report
```

The Allure report provides an overview of test execution, including passed and failed tests, execution details, and attached screenshots when configured.

### Screenshots

Screenshots can be captured automatically on test failure by configuring the following in `playwright.config.js`:

```javascript
use: {
    screenshot: 'only-on-failure'
}
```

To attach screenshots manually at specific checkpoints, use Playwright's `testInfo.attach()` functionality.

## Playwright Configuration

The project uses `playwright.config.js` to configure test execution and reporting.

Example reporter configuration:

```javascript
reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright']
],
```

## GitHub Repository

Source code and test implementations:

[https://github.com/mdnahidalhossain/demo-webshop-automation](https://github.com/mdnahidalhossain/demo-webshop-automation)

---

**Author:** QA Automation Project  
**Framework:** Playwright  
**Application Under Test:** Tricentis Demo Web Shop
