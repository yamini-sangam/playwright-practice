export const PageModel = {
    async login(page) {
      await page.goto('https://www.saucedemo.com/');
      await page.fill('#user-name', 'standard_user');
      await page.fill('#password', 'secret_sauce');
      await page.click('#login-button');
    },
  
    async logout(page) {
      await page.click('.bm-burger-button');
      await page.click('#logout_sidebar_link');
    },
  
    async getPageTitle(page) {
      return await page.title();
    },
  
    async getSecondaryTitleText(page) {
      return await page.textContent('.header_secondary_container .title');
    }
  };
  