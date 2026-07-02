import { Given, When, Then } from '@cucumber/cucumber';
import  HomePage  from '../../IHMPages/HomePage';
import { Page } from '@playwright/test';
import TransactionsPage from '../../IHMPages/TransactionsPage';
import { TopBarMenu } from '../../../Components/TopBarMenu';
import { FixturePage } from '../../../Hooks/FixturePage';

let homePage: HomePage;
let transactionsPage: TransactionsPage;

    Given('I am on the main page and I am logged in', async () =>{
        //précondition
        homePage = new HomePage(FixturePage.page);
        transactionsPage = new TransactionsPage(FixturePage.page);
    });

       
    When('I click on Online Banking', async () => {
        const topBarMenu = new TopBarMenu(FixturePage.page);
        await topBarMenu.clickTab("Online Banking");
    });

       
    When('I click on Account Activity', async () => {
        await homePage.clickActivity();
    });

       
    Then('I should see the Show Transactions page', async () => {

    });
       
       
    Then('I select the account {string}', async (account : string) => {
        await transactionsPage.selectAccount(account);
    });

       
    Then('I should have Description value {string}', async (description: string) => {
        await transactionsPage.checkDescriptionInTable(description);
    })

    Then('I should have Deposit value {string}', async (deposit: string) => {
        await transactionsPage.checkDepositInTable(deposit);
    })