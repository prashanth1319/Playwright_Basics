class LoginPage{

    //crate constructor
    constructor(page)
    {
        this.page=page;
        this.emailField = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signButton = page.locator("[value='Login']");
    }
    async url(page)
    {
        await page.goto("https://rahulshettyacademy.com/client");
    }
    async validLogin(username,psd)
    {
        await this.emailField.fill(username);
        await this.password.fill(psd);
        await this.signButton.click();
        await this.page.waitForLoadState('networkidle');
        

    
    }
}
module.exports = {LoginPage};