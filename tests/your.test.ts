import test, { expect } from "@fixtures/basePages";
import { Page } from '@playwright/test';
import { LoginPage } from "@pages/Login.page";
import * as data from "@testData/data.json";
const clipboard = require("clipboardy");
import ENV from "@utils/env";
import { webHelper } from "@helper/webHelper";

let page: Page;

function logStep(description: string) {
    console.log(`Annotation: ${description}`);
  }
test.only(`Your Test ID | Your Test Modiul | Test Title`, async ({ yourPage, loginPage, page,context }, testInfo) => {
        const WebHelper = new webHelper(page, 'keyPageValue');  

// Step 01: Navigate to the Login Page
// Description: This step navigates to the base URL and waits until the network activities are idle, ensuring the page has fully loaded.
await test.step('01 | Given: Navigates to the login page', async () => {
    logStep(`Go To: Go to the page: ${ENV.BASE_URL}`);
    await page.goto(ENV.BASE_URL, { waitUntil: "networkidle" });
});

// Step 02: Input Admin Login Credentials
// Description: This step performs the login action using the admin credentials provided via environment variables.
await test.step('02 | When: Input admin login credentials', async () => {
    await loginPage.loginWithUser(ENV.USERNAME, ENV.PASSWORD);
});

// Step 03: Validate Main Menu Settings
// Description: This step validates that all main menu setting options are correctly configured to navigate directly to the gameplay URL.
await test.step('03 | Then: validates that app logo is displayed correctly', async () => {
    await WebHelper.compareElementScreenshot(yourPage.logo, "logo.png", 100);
    
    
});


})


// eslint-disable-next-line playwright/expect-expect
test('Login with valid user load inventory page', async ({ page, loginPage }) => {
    //ACT
    // const loginPage = new LoginPage(page);
    await loginPage.goTo();
    //For security is better add your user info in environment variables or some Key Value service 
    //ARRANGE
    await loginPage.loginWithUser(ENV.USERNAME, ENV.PASSWORD);
    // await page.waitForLoadState("networkidle")
    const expectedPage = loginPage.BASE_URL + '/inventory.htmlddd';
    //ASSERT
    loginPage.AssertEqual(expectedPage, page.url(), 'Check URL Page is equal to: "' + expectedPage + '"');
});


