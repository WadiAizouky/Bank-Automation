import { Page } from '@playwright/test';
import { locater } from '../Locaters/locater';
import { Locator } from '@playwright/test';

export class Table {
    private page: Page
    private locater: locater;

    constructor(page: Page) {
        this.page = page;
        this.locater = new locater(page);
    }

    async searchElementInTable(table : Locator, element: string) {
        await this.page.waitForTimeout(3000); // Attendre 2 secondes pour s'assurer que la table est chargée
        const rows = await table.locator(' tbody tr').elementHandles();
        for (const row of rows) {
            const cells = await row.$$('td');
            for (const cell of cells) {
                const cellText = await cell.textContent();
                if (cellText && cellText.includes(element)) {
                    console.log(`Cell text: ${cellText}, Searching for: ${element}`);
                    return true;
                }
            }
        }
        return false;
    }

    async checkTableEmpty(table: Locator): Promise<boolean> {
        await this.page.waitForTimeout(3000); // Attendre 2 secondes pour s'assurer que la table est chargée
        const rows = await table.locator('tr').elementHandles();
        return rows.length === 0;
    }
}