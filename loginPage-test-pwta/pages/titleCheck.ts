export const PageModel = {
  async login(page, username, password) {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', username);
    await page.fill('#password', password);
    await page.click('#login-button');
  },
  
    async logout(page) {
      await page.click('.bm-burger-button');
      await page.click('#logout_sidebar_link');
      await page.waitForTimeout(5000);
    },
  
    async getPageTitle(page) {
      return await page.title();
    },
  
    async getSecondaryTitleText(page) {
      return await page.textContent('.header_secondary_container .title');
    }
  };
  