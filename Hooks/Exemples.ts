import { Page } from '@playwright/test';
import { test, Browser } from '@playwright/test';
import { BeforeAll, AfterAll, Before, After, setDefaultTimeout, context } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { FixturePage } from './FixturePage';
import HomePage from '../src/IHMPages/HomePage';
import LoginPage from '../src/IHMPages/LoginPage';

// Augmenter le timeout    par défaut à 60 secondes
setDefaultTimeout(60000);

    let browser : Browser;
    let page: Page;
    let homePage: HomePage;
    let loginPage: LoginPage;

    BeforeAll( async () => {
       /*
        // browser = await chromium.launch({ headless: false });
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        await page.goto('https://example.com');

        // Attendre l'apparition d'un pop-up​
        const [popup] = await Promise.all([
        page.waitForEvent('popup'), // Attendre un nouvel événement de page (pop-up)​
        page.click('xpath=//a[text()="Learn more"]'), // Action qui déclenche le pop-up​
        ]);
        await popup.waitForSelector('h1'); // Attendre un élément spécifique dans le pop-up​
        // Fermer le pop-up​
        await popup.close();
        await page.waitForTimeout(15000);
        */

        /*
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
        await page.goto("http://zero.webappsecurity.com/bank/online-statements.html");
        */

        //Se connecter à un navigateur ouvert
    // Se connecter à l'instance de navigateur existante
    const browser = await chromium.connect({ wsEndpoint: 'ws://localhost:9222/devtools/browser/<id>' });

    // Ouvrir une nouvelle page ou interagir avec les pages existantes
    const context = await browser.newContext();
    const page = await context.newPage();

    // Exemple d'interaction
    await page.goto('http://example.com');
    
    // Fermer le navigateur si nécessaire
    // await browser.close();
        
    });