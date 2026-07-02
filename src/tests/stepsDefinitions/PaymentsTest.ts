import { Given, When, Then } from '@cucumber/cucumber';
import { Page,Browser } from '@playwright/test';
import HomePage from '../../IHMPages/HomePage';
import { PayBills } from '../../IHMPages/PayBills';
import { chromium } from 'playwright';
import { FixturePage } from '../../../Hooks/FixturePage';
import { TopBarMenu } from '../../../Components/TopBarMenu';
import LoginPage from '../../IHMPages/LoginPage';

let topBarMenu: TopBarMenu;
let payBills: PayBills;
let homePage: HomePage;
let loginPage: LoginPage;

         Given('I am logged into my online banking account', async  ()  => {
            topBarMenu = new TopBarMenu(FixturePage.page);
            payBills = new PayBills(FixturePage.page);
            homePage = new HomePage(FixturePage.page);
            //loginPage = new LoginPage(FixturePage.page);
            //await homePage.clickSignIn();
            //await loginPage.enterUsername('username');
            //await loginPage.enterPassword('password');
            //await loginPage.clickLoginButton();
            //await FixturePage.page.waitForTimeout(2000);
            //await FixturePage.page.goBack();
         });

         When('I click on online banking', async  () => {
            await topBarMenu.clickTab("Online Banking");
         });

         When('I click on Pay Bills', async () => {
            await homePage.clickPayBills();
         });
       
       
         When('I select Payee Type as {string}', async (payeeType : string) => {
            await payBills.selectPayee(payeeType);
         });

       
         When('I select Account Type as {string}', async (accountType : string) => {
            await payBills.selectAccount(accountType);
         });

       
         When('I fill in the Amount field with {string}', async (amount : string) => {
            await payBills.enterAmount(amount);
         });

       
         When('I fill in the Date field with {string}', async (paymentDate : string) => {
            await payBills.enterDate(paymentDate);
         });

       
         When('I fill in the Description field with {string}', async (paymentDescription : string) => {
            await payBills.enterDescription(paymentDescription);
         });

       
         When('I click on Pay', async () => {
            await payBills.clickPayButton();
         });
       
       
         Then('I should see the message {string}', async (message : string) => {
            await payBills.checkPaymentSuccessMessage(message);
         });
       

