const{test,expect}=require('@playwright/test');
const { LoginPage } = require('../../pageObjects/LoginPage');
const { HomePage } = require('../../pageObjects/HomePage');
//const {POM_manager} = require('../../pageObjects/POM_manager');

test('app flow', async({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    const email = "prashudp45@gmail.com";
    const password1 = "Prashu@123";
    const productName = 'adidas original';
    //const products = page.locator(".card-body");
    const loginPage = new LoginPage(page);
    //await page.goto('https://rahulshettyacademy.com/client');
    await loginPage.url(page);
    await loginPage.validLogin(email,password1);
    //await page.waitForLoadState('networkidle');
    const homePage = new HomePage(page);
    await homePage.searchProduct(productName);
    await homePage.navigationToCart();
    
});