import { test, expect } from '@playwright/test';
import { titleCheck } from '../pages/ProductPage.ts';

test.beforeEach(async ({ page }) => {
    await titleCheck.login(page, 'standard_user', 'secret_sauce');
});

test.afterEach(async ({ page }) => {
  await titleCheck.logout(page);

});

test('has title', async ({ page }) => {
  await expect(titleCheck.getPageTitle(page)).resolves.toMatch(/Swag Labs/);
  await expect(titleCheck.getSecondaryTitleText(page)).resolves.toBe('Products');
});

