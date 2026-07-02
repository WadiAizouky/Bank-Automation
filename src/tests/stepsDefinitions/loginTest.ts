import { Given, When, Then } from '@cucumber/cucumber';
import { Page,Browser } from '@playwright/test';
import HomePage from '../../IHMPages/HomePage';
import LoginPage from '../../IHMPages/LoginPage';
import { chromium } from 'playwright';
import * as fs from 'fs';
import { JsonDataRead } from '../../../utils/JsonDataRead';
import { ExcelDataRead } from '../../../utils/ExcelDataRead';

let browser : Browser;
let page: Page;

function readJsonFile(filePath: string) {
    const data = fs.readFileSync(filePath, 'utf-8'); // Lire le fichier en tant que chaîne
    return JSON.parse(data); // Convertir la chaîne en objet JSON
}

Given('the user is on the home page and he click on the login', async  (  ) => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  await page.goto('http://zero.webappsecurity.com/');
  const homePage = new HomePage(page);
  await homePage.clickSignIn();
});

When('the user enters valid username and password', async () => {
  const loginPage = new LoginPage(page);
  await loginPage.enterUsername('username');
  await loginPage.enterPassword('password');
  //const data = readJsonFile('resources\\Identifiants.json');

  //const data = JsonDataRead.readJsonFile('resources\\Identifiants.json');
  //await loginPage.enterUsername(data.users[0].username);
  //await loginPage.enterPassword(data.users[0].password);
  //const data = ExcelDataRead.readExcelFile('resources\\Identifiants.xlsx');
  //await loginPage.enterUsername(data[1][0]);
  //await loginPage.enterPassword(data[1][1]);
});

When('clicks the login button', async () => {
  const loginPage = new LoginPage(page);
  await loginPage.clickLoginButton();
  await page.waitForTimeout(2000);
  await page.goBack();
  await page.getByRole('link', { name: 'Zero Bank' }).click();
});

Then('the user should be redirected to the dashboard', async function () {
  const homePage = new HomePage(page);
  const screenshot = await homePage.checkUserProfile();
  await this.attach(screenshot, 'image/png');
  await page.close();
  await browser.close();
});