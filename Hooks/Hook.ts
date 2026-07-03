import { Page } from '@playwright/test';
import { test, Browser } from '@playwright/test';
import { BeforeAll, AfterAll, Before, After, setDefaultTimeout, context } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { FixturePage } from './FixturePage';
import HomePage from '../src/IHMPages/HomePage';
import LoginPage from '../src/IHMPages/LoginPage';

// Augmenter le timeout par défaut à 60 secondes
setDefaultTimeout(60000);

    let browser : Browser;
    let page: Page;
    let homePage: HomePage;
    let loginPage: LoginPage;

    BeforeAll( async () => {
       // browser = await chromium.launch({ headless: false });
    });

    Before({ tags: '@TNR_Login' }, async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        await page.goto(FixturePage.url);
        FixturePage.page = page;
        homePage = new HomePage(FixturePage.page);
        loginPage = new LoginPage(FixturePage.page);
        await homePage.clickSignIn();
        await loginPage.enterUsername('username');
        await loginPage.enterPassword('password');
        await loginPage.clickLoginButton();
        await FixturePage.page.waitForTimeout(3000);
        await FixturePage.page.goBack();
    });
    
    Before({ tags: '@TNR' }, async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        await page.goto(FixturePage.url);
        FixturePage.page = page;
    });

    After( async () => {
        //await browser.close();
        //await page.close();
    });

    AfterAll( async () => {
       // await browser.close();
    });