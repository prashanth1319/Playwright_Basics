const{test, expect} = require('@playwright/test');
const { text } = require('stream/consumers');


test('UI Controls', async({page,browser})=>
{
const context = await browser.newContext();
//const page = await context.newPage();
const url = 'https://rahulshettyacademy.com/loginpagePractise/';  
const email = "prashudp@gmail.com";
await page.goto(url);
//enter credentials 
   await page.locator("#username");
   await page.locator("#password");
   //select option from dropdown
   await page.locator("select.form-control").selectOption("Consultant");
   //click on radio button
   await page.locator(".radiotextsty").last().click();
   await page.locator("#okayBtn").click();
   //print ASSERTION radio button is checked or not
   console.log(await page.locator(".radiotextsty").last().isChecked());
   //validate radion button us checked or not by using assertion
   await expect(page.locator(".radiotextsty").last()).toBeChecked();
    //Verify terms&Condition checked or not
   await page.locator("#terms").click();
   //validate terms&Condition checked box checked or not
   await expect(page.locator("#terms")).toBeChecked();
   //Verify terms&Condition unchecked or not
   await page.locator("#terms").uncheck();
   //validate terms&Condition checked box checked or not
   expect (await page.locator("#terms").isChecked()).toBeFalsy();
   //creating variable for blinking text 
   //Note : Blinking element should have class = blinkingText then we are able to verify it is blinking or not
   const documentLink = page.locator("[href*='documents-request']");
   await expect(documentLink).toHaveAttribute("class","blinkingText");
   //await page.locator("#signInBtn");
   
   //assertion
    //await page.pause();

});

test('child winodw handling', async({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = await page.locator("#username");
    const Password = await page.locator("#password");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ])
     const text = await newPage.locator("[class*='red']").textContent();
     console.log();
     const arrayText = text.split('@');
     const domain = arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").textContent());
});
