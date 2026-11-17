# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductSearch.spec.js >> Verify Product Search
- Location: tests\ProductSearch.spec.js:7:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@class=\'button-1 search-box-button\']')
    - locator resolved to <input type="submit" value="Search" class="button-1 search-box-button"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

```
Error: browserContext.close: Target page, context or browser has been closed
```