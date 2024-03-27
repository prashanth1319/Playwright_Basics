const {test, expect} = require('@playwright/test');
const { POM_manager } = require('../pageObjects/POM_manager');
const { status } = require('wd/lib/commands');
const dataset = require("../utils/blaz_testData.json");

test.only('test', async({page})=>
{
    const poManager = new POM_manager(page);
    //Login
    // user='prashudp45@gmail.com';
    // password='Prashu@123';
    const loginpay = poManager.loginPage();
    await this.page.goto("https://qa-admin.paypenny.io/pages/login");
    //await this.page.goto("https://qa-admin.paypenny.io/pages/login");
    await loginpay.signin(dataset.useremail,dataset.password, dataset.selectcountry);

})