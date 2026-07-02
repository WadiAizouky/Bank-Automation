import { Page, expect } from "@playwright/test";
import { locater } from "../../Locaters/locater";
import { Keywords } from "../../utils/Keywords";


export class PayBills {
    private page: Page
    private locater: locater;
    private keywords: Keywords;

    constructor(page: Page) {
        this.page = page;
        this.locater = new locater(page);
        this.keywords = new Keywords(page);
    }

    async selectPayee(payee: string) {
        await this.keywords.selectDropdownOption(this.locater.payeeDropdown, payee);
    }

    async selectAccount(account: string) {
        await this.keywords.selectDropdownOption(this.locater.accountDropdown, account);
    }

    async enterAmount(amount: string) {
        await this.keywords.fillInputField(this.locater.amountInput, amount);
    }

    async enterDate(date: string) {
        await this.keywords.fillInputField(this.locater.dateInput, date);
    }

    async enterDescription(description: string) {
        await this.keywords.fillInputField(this.locater.descriptionInput, description);
    }

    async clickPayButton() {
        await this.keywords.clickButton(this.locater.payButton);
    }

    async checkPaymentSuccessMessage(message : string) {
        await expect(await this.keywords.getElementText(this.locater.paymentSuccessMessage)).toBe(message);
    }
}