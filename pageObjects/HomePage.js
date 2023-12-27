class HomePage{
    constructor(page)
    {
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.success = page.locator("text= Product Added To Cart ");
        this.successText = page.locator("text= Product Added To Cart ");
        this.navToCart = page.locator("[routerlink*='cart']");

    }
    //Searching product
    async searchProduct(productName)
    {
        const titles = await this.productsText.allTextContents();
        console.log(titles);
        const count = await this.products.count();
   for(let i=0; i<count; ++i)
   {
     if( await this.products.nth(i).locator("b").textContent() === productName)
     {
      //add to cart if product is available
      //if the locator is chaining we have to write entaire locator (we cannot write subchild)
      await this.products.nth(i).locator("text= Add To Cart").click();
      break;
     }
    }
    const Cart_text = await this.successText.textContent();
    console.log(Cart_text);
    }
    //Navigation to cart
    async navigationToCart()
    {
        await this.navToCart.click();
    }

}

module.exports={HomePage};