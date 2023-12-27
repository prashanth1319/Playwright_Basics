class LoginBlaze
{
    constructor(page)
    {
        this.page = page
        this.loginLink = "#login2";
        this.userNameField = "#loginusername";
        this.passwordField="#loginpassword";
        this.loginButton="[onclick*='logIn()']";
    }
    async blazeUrl(page)
    {
        await this.page.goto("https://www.demoblaze.com/");
    }

    async loginBlaze(username,password)
    {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userNameField).fill(username);
        await this.page.locator(this.passwordField).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}
module.exports={LoginBlaze};