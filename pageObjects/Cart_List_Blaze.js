class Cart_List
{
    constructor(page)
    {
        this.page=page;
        this.itemInCart='.table';
    }

    async checkProductInCart(productName)
    {
        const productInCart = await this.page.$$(this.itemInCart)
        for(const product of productInCart)
        {
            console.log(await product.textContent())
            if(productName === await product.textContent())
            {
                return true;
                break;
            }
        }
    }
}
module.exports={Cart_List};