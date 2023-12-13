//In playwright module we have imported test from jar
const {test, expect} = require('@playwright/test');
const { Console } = require('console');
const { TIMEOUT } = require('dns');
const { url } = require('inspector');
const { title } = require('process');

test('Page Playwright Test', async({page, browser})=>
{
const context = await browser.newContext();
//const page = await context.newPage();
//URL       
const url = "https://www.amazon.in";
//Tittle
const title = ("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
//Got ot URL
await page.goto(url);

//Log tittle and validate it
const pageTitle = await page.title();
    console.log('Page Title:', pageTitle);
await expect(page).toHaveTitle(title);
//css selector
await page.locator("#nav-link-accountList-nav-line-1").click();
//Code for sign in pop-up
//await page.locator("div[id='nav-flyout-ya-signin'] span[class='nav-action-inner']").click();

//Login
await page.locator("#ap_email").fill('pachhesmlp1319@gmail.com');
await page.locator(".a-button-inner input").click();
await page.locator("#ap_password").fill('Prashu@123')
await page.locator("#signInSubmit").click();

//Account Name
const account = await page.locator(".nav-line-1-container").textContent();
console.log(account);

//Search product
await page.locator("#twotabsearchtextbox").fill('iphone 15 pro max');
await page.locator("#nav-search-submit-button").click();

const [newPage] = await Promise.all
(
    [
        //context.waitForEvent("page"),
        //Select item by index and clcik
        page.locator('[data-image-index="1"]').click()
    ]
)
//console.log(await newPage.title());
//Get the product tittle
//console.log(await newPage.locator("[class='a-size-large a-spacing-none']").textContent());
//Select colour
//await newPage.locator("#color_name_1").click();
//add to kart button
await page.locator("#nav-cart-count").click();
//verify product is added into cart ot not
//console.log(await page.locator("#attachDisplayAddBaseAlert").textContent());
//close modal
//await page.locator("#attach-close_sideSheet-link").click();
//Click on Cart icon
await page.locator("#nav-cart-count-container").click();
//Get device name
//console.log(await page.locator("#titleSection").textContent());
//Get total price
console.log(await page.locator('[data-name="Subtotals"]').textContent());
//Get Quntaity
console.log(await page.locator(".a-dropdown-label").textContent());



// //console.log(await page.locator("[style='block']").textContext());
// await expect(page.locator('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')).toContainText('Dashboard');
// await page.locator('.oxd-userdropdown').click();
// console.log(await page.locator('[role="document"]').allTextContents());
// const TIMEOUT = 5000;
// await page.locator('.oxd-dialog-close-button.oxd-dialog-close-button-position').click();
// // console.log(await page.locator('.oxd-grid-3 orangehrm-quick-launch ').textContent());
});