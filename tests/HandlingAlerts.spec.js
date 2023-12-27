const {test, expect}= require('@playwright/test')


test("Popup validations", async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// await page.goto("http://google.com");
// await page.goBack();
// await page.goForward();
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
//Accept the pop-up
await page.pause();
page.on('dialog',dialog=> dialog.accept());
//Cancel pop-up alert
//page.on('dialog',dialog=> dialog.dismiss());
await page.locator("#confirmbtn").click();
//Mousehover on element
await page.locator("#mousehover").hover();
const framesPage = page.frameLocator("#courses-iframe");
await framesPage.locator("li a[href*='lifetime-access']:visible").click();
const textCheck = await framesPage.locator(".text h2").textContent();
console.log(textCheck.split(" ")[1]);

})

test("screenshot & Visual comparison",async({page})=>

{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#displayed-text").screenshot({path: './snapshots/screenshot1.png'});
await page.locator("#hide-textbox").click();
await page.screenshot({path: './snapshots/screenshot.png'});
await expect(page.locator("#displayed-text")).toBeHidden();

});

test.only('Visual',async({page})=>
{
    await page.goto("https://www.google.com/");
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');
})