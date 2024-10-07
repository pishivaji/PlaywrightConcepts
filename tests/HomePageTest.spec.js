const {test, expect}= require('@playwright/test');

test ('HomePageTest' ,async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    const pageTitle = await page.title();
    console.log('Page title fetched is :' + pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL = await page.url();

    console.log('Page URL fetched is : ' + pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await page.close();

})