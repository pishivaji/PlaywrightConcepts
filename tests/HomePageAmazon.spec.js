const {test, expect} = require('@playwright/test');

test('Amazon Home page asseting URL and title', async({page})=>{

    await page.goto('https://www.amazon.in/');

    const pageTitle = await page.title();

    console.log('Amazon title fetched is : ' + pageTitle);

    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    const pageURL = await page.url();
    console.log('Amazon URL fetched is : ' + pageURL);

    await expect(page).toHaveURL('https://www.amazon.in/');

    await page.close();

})