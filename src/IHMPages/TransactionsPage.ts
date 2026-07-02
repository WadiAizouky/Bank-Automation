import { Keywords } from "../../utils/Keywords";
import { BasePage } from "./BasePage";
import { locater } from "../../Locaters/locater";
import { Page } from "playwright";
import { Table } from "../../Components/Table";
import { expect } from "playwright/test";


export default class TransactionsPage extends BasePage {
    private locators: locater
    private keywords: Keywords;
    private table: Table;

    constructor(page: Page) {
        super(page);
        this.locators = new locater(page);
        this.keywords = new Keywords(page);
        this.table = new Table(page);
    }

    async selectAccount(account: string) {
        await this.keywords.selectDropdownOption(this.locators.accountDropdownTransactions, account);
    }

    async checkDescriptionInTable(description: string) {
        //let texte = "1 dollar (AUD) = 1.0987 U.S. dollar (USD)"
          //  const regex = /(\d+\s+dollar)/; // Correspond à un nombre suivi de "dollar"
    //const match = texte.match(regex);
    //console.log(match ? match[0] : "Aucune correspondance trouvée");
            let expectedResult : boolean = true
            if (description === "nul") {
                expectedResult = false;
            }
            await expect(await this.table.searchElementInTable(this.locators.transactionTable, description)).toBe(expectedResult);
    }

    async checkDepositInTable(deposit: string) {
            let expectedResult : boolean = true
            if (deposit === "nul") {
                expectedResult = false;
            }
            await expect(await this.table.searchElementInTable(this.locators.transactionTable, deposit)).toBe(expectedResult);

    }
}