const {test, expect, request}=require('@playwright/test');
const loginPayLoad = {userEmail:"prashudp45@gmail.com",userPassword:"Prashu@123"};
const orderPayload = {orders: [{country: "India", productOrderedId: "6262e990e26b7e1a10e89bfa"}]};
let token;
let orderId;

test.beforeAll( async()=>
{
 const apiContext = await request.newContext();
 //Post request
 const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
 {
  data:loginPayLoad

 })
 //200, 201
 console.log(loginResponse.status())
 expect(loginResponse.ok()).toBeTruthy(); 
 const loginResponseJson = await loginResponse.json();
 const token = loginResponseJson.token;
 console.log(token);

 //
 const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
 {
  data: orderPayload, 
  headers:{
    'Authorization' : token,
    'Content-Type' : 'application/json'
  },
 })
 const orderResponseJson = await orderResponse.json();
 console.log(orderResponseJson);
 orderId = orderResponseJson.orders[1];

});
test.beforeEach(()=>
{

})

test('Page Playwright Test', async({page,browser})=>
{

const url = 'https://rahulshettyacademy.com/client/';  

  page.addInitScript(value =>
    {
      window.localStorage.setItem('token', value);
    }, token);

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("button[routerlink*='myorders']").click();
    //loading order id in table 
    await page.locator("tbody").waitFor();
   const rows  =await page.locator("tbody tr");

   for(let i=0; i<await rows.count(); ++i)
   {
     const rowOrderId =  await rows.nth(i).locator("th").textContent();
     if(orderId.includes(rowOrderId))
     {
      await rows.nth(i).locator("button").first().click();
      break;
     }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   await page.pause();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();

});