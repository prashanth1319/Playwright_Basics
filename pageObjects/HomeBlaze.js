class HomeBlaze
{
    constructor(page)
    {
        this.page=page;
        this.listOfProduct="a[class='hrefch']";
        //"#tbodyid";
        this.addToCart="[onclick*='addToCart']";
        this.cartIocn="#cartur";

    }
    async addProductToCart(prodcutName)
    {
        //$$-refreng multiple elements
        const productList =  await this.page.$$(this.listOfProduct);
        for(const product of productList)
        {
            if(prodcutName === await product.textContent())
            {
                console.log(product.textContent());
                
                await product.click()
                break;
            }
        }  
        await this.page.waitForTimeout(5000);
        
        await this.page.on('dialog',dialog=> dialog.accept());

        await this.page.locator(this.addToCart).click();
    
    }

    async clickAddCart(page){
        await this.page.locator(this.addToCart).click();
        await this.page.on('dialog',dialog=> dialog.accept()); 

    }

    async goToCart()
    {
        await this.page.locator(this.cartIocn).click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports={HomeBlaze};