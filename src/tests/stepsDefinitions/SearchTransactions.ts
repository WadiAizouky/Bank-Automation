import { Given, When, Then } from '@cucumber/cucumber';
import  HomePage  from '../../IHMPages/HomePage';
import { Page } from '@playwright/test';
import TransactionsPage from '../../IHMPages/TransactionsPage';
import { TopBarMenu } from '../../../Components/TopBarMenu';
import { FixturePage } from '../../../Hooks/FixturePage';

let homePage: HomePage;
let transactionsPage: TransactionsPage;

Given('I am on the main page and I am logged in', async () => {
        //précondition
        homePage = new HomePage(FixturePage.page);
        transactionsPage = new TransactionsPage(FixturePage.page);
});


When('I click on Online Banking', async () => {
        const topBarMenu = new TopBarMenu(FixturePage.page);
        await topBarMenu.clickTab("Online Banking");
});


When('I click on Account Activity then I click on Search Transactions', async () =>{
    await homePage.clickActivity();
    const topBarMenu = new TopBarMenu(FixturePage.page);
    await topBarMenu.clickTab("Find Transactions");
});


When('I select the account Type with Deposit', async () => {
    FixturePage.page.locator('#aa_type').selectOption({ label: 'Deposit' });
});


When('I click on find button', async () => {
    FixturePage.page.getByRole('button', { name: 'Find' }).click();
});


Then('I should find results', async  () =>{

});

When('I select the account Type with Deposit and date 2026-07-01', async () => {
    FixturePage.page.locator('#aa_type').selectOption({ label: 'Deposit' });
    FixturePage.page.locator('#aa_fromDate').fill('2026-07-01');
});

Then('I should see no result message', async  () =>{

});