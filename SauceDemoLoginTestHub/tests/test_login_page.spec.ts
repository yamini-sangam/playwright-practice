import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('valid login', async ({ page }) => {
    await LoginPage.login(page, 'standard_user', 'secret_sauce');
    await expect(page.title()).resolves.toMatch(/Swag Labs/);
    await expect(page.textContent('.header_secondary_container .title')).resolves.toBe('Products');
});


test('invalid login', async ({ page }) => {
    await LoginPage.login(page, 'standard_use', 'secret_sauce');
    const errorMessage = await LoginPage.getErrorMessage(page);
    expect(errorMessage).toMatch(/Username and password do not match any user in this service/);
   
  });