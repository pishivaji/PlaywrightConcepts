import {test, expect} from '@playwright/test'

test ('OrangeHRM login test', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const pageTitle = await page.title();
    console.log('Orange HRM page Title is : ' + pageTitle)
    await expect(page).toHaveTitle('OrangeHRM')

    const pageURL = await page.url()
    console.log('Orange HRM page URL is : ' + pageURL)
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //console.log(await page.locator("//input[@name='username']").allInnerTexts())
    //await page.fill("//input[@name='username']",'Admin')

    await page.locator("//input[@name='username']").fill('Admin')
    await page.locator("//input[@name='password']").fill('admin123')
    //await page.locator("//button[@type='submit']").click()
    await page.click("//button[@type='submit']")

    const userName = await page.locator('p.oxd-userdropdown-name')
    const name = await page.locator('p.oxd-userdropdown-name').innerText()
    console.log(name)
    //console.log(userName)

    await expect(userName).toContainText('Huma123 Huma')
 
})