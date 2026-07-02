import { Given, When, Then } from '@cucumber/cucumber';
import { Page,Browser } from '@playwright/test';
import HomePage from '../../IHMPages/HomePage';
import { chromium } from 'playwright';
import { FixturePage } from '../../../Hooks/FixturePage';

//let browser : Browser;
//let page: Page;
let homePage : HomePage;
       
         Given('I am on the main page', async () => {
            //browser = await chromium.launch({ headless: false });
            //page = await browser.newPage();
            
            //await page.goto('http://zero.webappsecurity.com/');
            //const homePage = new HomePage(page);
            homePage = new HomePage(FixturePage.page);
         });
       
         When('I fill {string} in the search field', async (text : string) => {
            await homePage.fillSearchInput(text);
         });
       
         When('I click on Enter', async () => {
            await FixturePage.page.keyboard.press('Enter');
         });
       
         Then('I should see the {string} results', async (text : string) => {
            await homePage.checkSearchResults(text);
            //await FixturePage.page.close();
            //await FixturePage.page.context().browser().close();
         });