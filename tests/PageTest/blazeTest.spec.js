const {test, expect} = require('@playwright/test');
const { POM_manager } = require('../../pageObjects/POM_manager');
const { HomeBlaze } = require('../../pageObjects/HomeBlaze');
const { Cart_List } = require('../../pageObjects/Cart_List_Blaze');
const { status } = require('wd/lib/commands');
const dataset = JSON.parse(JSON.stringify(require("../../utils/blaz_testData.json")));
 
test('test', async({page})=>
{
    const poManager = new POM_manager(page);
    //Login
    // user='prashudp45@gmail.com';
    // password='Prashu@123';
    const login = poManager.loginBlaze();
    await login.blazeUrl();
    await login.loginBlaze('prashudp45@gmail.com','Prashu@123');
    //await page.waitForTimeout(5000);
    //Home
    await page.waitForTimeout(5000);
    const home = new HomeBlaze(page);
    await home.addProductToCart("Nexus 6");
    //await home.clickAddCart();
    //await page.pause();
    await home.goToCart();
    //await page.waitForTimeout(5000);
    //Cart
    const cart = new Cart_List(page);
    const status = await cart.checkProductInCart("Nexus 6");
    //expect(await status).toBe(true);
})