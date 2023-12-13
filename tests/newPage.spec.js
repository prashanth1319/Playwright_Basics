const {test, expect} = require('@playwright/test');
const { url } = require('inspector');
const { urlToHttpOptions } = require('url');

test.only('Page Playwright Test', async({page,browser})=>
{
const context = await browser.newContext();
//const page = await context.newPage();
const url = 'https://rahulshettyacademy.com/client';  
const email = "prashudp45@gmail.com";

   const productName = 'adidas original';
   const products = page.locator(".card-body");
   await page.goto(url);
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Prashu@123");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   //await page.locator(".card-body b").waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);
   //itterate product have tittle and click
   const count  =await products.count();
   for(let i=0; i<count; ++i)
   {
     if( await products.nth(i).locator("b").textContent() === productName)
     {
      //add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
     }
   }
    //Get toast message text
    const Cart_text = await page.locator("text= Product Added To Cart ").textContent();
    console.log(Cart_text);
    //click on cart icon
    await page.locator("[routerlink*='cart']").click();
    //Check added product are loaded or not 
    await page.locator("div li").first().waitFor();
    //validate added product is in cart or not
    const boolen = page.locator("h3:has-text('adidas original')").isVisible();
    expect(boolen).toBeTruthy();
    //click on checkout
    await page.locator("text=Checkout").click();
    //select country
    await page.locator("[placeholder='Select Country']").pressSequentially('ind',{delay:100});
    const dropdown = page.locator("[class='ta-results list-group ng-star-inserted']");
    await dropdown.waitFor();
    const optionscount = await dropdown.locator('button').count();
    for(let i=0; i<optionscount; ++i)
    {
    const text = await dropdown.locator("button").nth(i).textContent();
    if(text ===' India')
    {
      await dropdown.locator("button").nth(i).click();
      break;
    }
   }
   //select expiry date
    await page.locator('[class="input ddl"]').first().selectOption('11');
    await page.locator('[class="input ddl"]').last().selectOption('12');
   //Enter cvv and name
    await page.locator("[class='input txt']").first().fill('Tester');
    await page.locator("[class='input txt']").last().fill('Tester');
   //Apply copun
    await page.locator("[name='coupon']").fill('rahulshettyacademy');
   //Click om Apply copun
   // await page.locator("text=Apply Coupon").click();
   //Click on Place order
    await page.locator('.action__submit').click();
   //Get order id 
    const order_id = await page.locator('.em-spacer-1 label').last().textContent();
    console.log('order id' + order_id);
   //Go to order history page
    await page.locator('.em-spacer-1 label').first().click();
   //Verify order id in order page
   const count2  =await products.count();

   for(let i=0; i<count2; ++i)
   {
     if( await products.nth(i).locator("body").textContent() === order_id)
     {
      //add to cart
      await products.nth(i).locator("[routerlink='/dashboard']").last().click();
      break;
     }
   }



   await page.pause();
});