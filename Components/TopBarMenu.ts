import { Page } from '@playwright/test';
import { locater } from '../Locaters/locater';

export class TopBarMenu {
    private page: Page;
    private locater: locater;
    constructor(page: Page) {
        this.page = page;
        this.locater = new locater(page);
    }

    async clickTab(tabname: string) {
        this.page.waitForTimeout(3000);
    switch (tabname) {
      case 'Online Banking':
        await this.locater.onlineBankingMenu.click()
        break
      case 'Account Summary':
        await this.locater.accountSummaryTab.click()
        break
      case 'Account Activity':
        await this.locater.accountActivityTab.click()
        break
      case 'Transfer Funds':
        await this.locater.transferFundsTab.click()
        break
      case 'Pay Bills':
        await this.locater.payBillsTab.click()
        break
      case 'My Money App':
        await this.locater.myMoneyMapTab.click()
        break
      case 'Online Statements':
        await this.locater.onlineStatementsTab.click()
        break
      case 'Find Transactions':
        await this.locater.findTransactionsTab.click()
        break
      default:
        throw new Error('Could not find a tab with a given name')
    }
}
}