import { test, expect } from '@playwright/test';
import { PageModel } from '../pages/loginPage.ts';

test.beforeEach(async ({ page }) => {
  await PageModel.login(page);
});

test.afterEach(async ({ page }) => {
  await PageModel.logout(page);
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(PageModel.getPageTitle(page)).resolves.toMatch(/Swag Labs/);

  // Assert the secondary title "Products"
  await expect(PageModel.getSecondaryTitleText(page)).resolves.toBe('Products');
});

// Add more tests if needed
