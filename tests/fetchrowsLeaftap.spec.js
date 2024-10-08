import {test, expect} from "@playwright/test"

test ('extract Rows from lead table', async ({page})=>{

    await page.goto('http://leaftaps.com/opentaps')

    const pageTitle =await page.title()
    console.log('Page Title is : ' + pageTitle)
    const pageUrl =await page.url()
    console.log('Page URL is : ' + pageUrl)

    await expect(page).toHaveTitle(pageTitle)
    await expect(page).toHaveURL(pageUrl)

    //await page.fill('input.USERNAME','DemoSalesManager')
    await page.locator("//input[@name='USERNAME']").fill('DemoSalesManager')
    //await page.fill('input.PASSWORD','crmsfa')
    await page.locator("//input[@name='PASSWORD']").fill('crmsfa')
    //await page.locator('input.Login').click()
    await page.locator("//input[@value='Login']").click()

    await page.waitForSelector("//div[@class='crmsfa']")

    await page.locator("//div[@class='crmsfa']").click()

    //await page.locator('id=ext-gen883').click()
    await page.waitForSelector('//ul/li/div/div/div/div/div/a')

    const mheaders = await page.$$('//ul/li/div/div/div/div/div/a')

    //const leadaction = "Leads"

    for(const mheader of mheaders)
    {
        const mcontent = await mheader.textContent()
        console.log(mcontent)
        //await page.waitForSelector(mcontent)

        /*if(mcontent.localeCompare(leadaction))
        {
            await mheader.click()
        } */
    }
    await page.locator('(//ul/li/div/div/div/div/div/a)[2]').click()

    await page.waitForSelector("//div[@id='ext-gen470']/div/div/div/preceding-sibling::div")

    const leadrows = await page.$$("//div[@id='ext-gen470']/div/div/div/preceding-sibling::div")

    for (const leadrow of leadrows)
    {
        const rowContent = await leadrow.textContent()
        console.log(rowContent)
    }
    
    await page.close()

})

/* http://leaftaps.com/opentaps

DemoSalesManager

crmsfa

//div[@id='ext-gen470']/div/div/div/preceding-sibling::div */