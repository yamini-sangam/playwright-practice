export const LoginPage = {
  async login(page, username, password){
    await page.goto('https://www.saucedemo.com/')
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button');
  },
  async getErrorMessage(page){
    await this.waitForError(page);
    return await page.textContent('[data-test="error"]');

  }
}