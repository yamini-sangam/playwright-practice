import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
});

test.afterEach(async ({ page }) => {
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);

  // Assert the secondary title "Products"
  await expect(await page.textContent('.header_secondary_container .title')).toBe('Products');
});