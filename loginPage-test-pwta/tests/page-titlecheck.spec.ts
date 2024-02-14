import { test, expect } from '@playwright/test';
import { PageModel } from '../pages/titleCheck.ts';

test.beforeEach(async ({ page }) => {
    await PageModel.login(page, 'standard_user', 'secret_sauce');
});

test.afterEach(async ({ page }) => {
  await PageModel.logout(page);

});

test('has title', async ({ page }) => {
  await expect(PageModel.getPageTitle(page)).resolves.toMatch(/Swag Labs/);
  await expect(PageModel.getSecondaryTitleText(page)).resolves.toBe('Products');
});

