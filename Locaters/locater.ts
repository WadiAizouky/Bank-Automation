import { Locator,Page } from '@playwright/test';
import { BasePage } from '../src/IHMPages/BasePage';

export class locater extends BasePage {
    //components
    readonly onlineBankingMenu: Locator;
    readonly accountSummaryTab: Locator;
    readonly accountActivityTab: Locator;
    readonly transferFundsTab: Locator;
    readonly payBillsTab: Locator;
    readonly myMoneyMapTab: Locator;
    readonly onlineStatementsTab: Locator;

    //Home page locaters
    readonly signInButton: Locator;
    readonly profileIcon: Locator;
    readonly searchInput: Locator;
    readonly paysBillsButton: Locator;
    readonly activityButton: Locator;

    //Login page locaters
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    //Pay Bills page locaters
    readonly payeeDropdown: Locator;
    readonly accountDropdown: Locator;
    readonly amountInput: Locator;
    readonly dateInput: Locator;
    readonly descriptionInput: Locator;
    readonly payButton: Locator;
    readonly paymentSuccessMessage: Locator;

    //TransactionsPage locaters
    readonly accountDropdownTransactions: Locator;
    readonly transactionTable: Locator;

    constructor(page: Page) {
        super(page);
        this.signInButton = page.locator("#signin_button");
        this.usernameInput = page.locator('xpath=//input[@id="user_login"]');
        this.passwordInput = page.locator('xpath=//input[@id="user_password"]');
        this.loginButton = page.getByRole('button', { name: 'Sign in' });
        this.profileIcon = page.locator("xpath=//i[@class='icon-user']");
        this.searchInput = page.locator("#searchTerm");
        this.paysBillsButton = page.locator("xpath=//span[@id='pay_bills_link']");
        this.activityButton = page.locator("xpath=//span[@id='account_activity_link']");

        this.onlineBankingMenu = page.locator("#onlineBankingMenu");
        this.accountSummaryTab = page.locator("#account_summary_tab");
        this.accountActivityTab = page.locator("#account_activity_tab");
        this.transferFundsTab = page.locator("#transfer_funds_tab");
        this.payBillsTab = page.locator("#pay_bills_tab");
        this.myMoneyMapTab = page.locator("#money_map_tab");
        this.onlineStatementsTab = page.locator("#online_statements_tab");

        this.payeeDropdown = page.locator("#sp_payee");
        this.accountDropdown = page.locator("#sp_account");
        this.amountInput = page.locator("#sp_amount");
        this.dateInput = page.locator("#sp_date");
        this.descriptionInput = page.locator("#sp_description");
        this.payButton = page.locator("#pay_saved_payees");
        this.paymentSuccessMessage = page.locator("xpath=//div[@id='alert_content']/span");

        this.accountDropdownTransactions = page.locator("#aa_accountId");
        this.transactionTable = page.locator("xpath=//table[contains(@class, 'table-condensed')]");
    }
}