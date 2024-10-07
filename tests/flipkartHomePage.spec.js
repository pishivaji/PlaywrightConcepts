const {test,expect}= require('@playwright/test');

test('Asserting flipkart title and URL', async ({page})=>{

    await page.goto('https://www.flipkart.com/');

    const pageTitle = await page.title();
    console.log('Flipkarts title is : ' + pageTitle);

    await expect(page).toHaveTitle(pageTitle);

    const pageURL = await page.url();
    console.log('Flipkarts URL is : ' + pageURL);

    await expect(page).toHaveURL(pageURL);

    await page.close();
})