class LoginPaypenny
{
    constructor(page)
    {
        this.page = page
        this.country = "#country";
        this.emailField = "#email";
        this.passworField="#password";
        this.loginButton=".button-content";
    }
    async payurl(page)
    {
        await this.page.goto("https://qa-admin.paypenny.io/pages/login");
    }

    async signin(email,password,countryvalue)
    {
        await this.page.locator(this.country).click();
        const dropdownlist = await page.locator(this.country);
        const dropdown = await page.$(dropdownlist);
        const optionValue = countryvalue;
        await dropdown.selectOption({ value: optionValue });
        await this.page.locator(this.emailField).fill(email);
        await this.page.locator(this.passworField).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}
module.exports={LoginPaypenny};