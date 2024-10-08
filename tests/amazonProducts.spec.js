import {test,expect} from "@playwright/test"

test ('amazonProduct exploration', async({page})=>{

    await page.goto('https://www.amazon.in/')

    await page.waitForSelector("//div[@id='anonCarousel2']/ol/li/div/div/a/div[2]/span")

    const products = await page.$$("//div[@id='anonCarousel2']/ol/li/div/div/a/div[2]/span")

    for(const product of products)
    {
        const productName = await product.textContent()
        console.log(productName)
    }
})