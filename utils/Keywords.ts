import { Locator,Page } from '@playwright/test';

export class Keywords {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillInputField(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    async clickButton(locator: Locator): Promise<void> {
        await locator.click();
    }

    async selectDropdownOption(locator: Locator, option: string): Promise<void> {
        await locator.selectOption(option);
    }

    async checkBox(locator: Locator): Promise<void> {
        await locator.check();
    }

    async uncheckBox(locator: Locator): Promise<void> {
        await locator.uncheck();
    }

    async checkElementVisibility(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    async isElementEnabled(locator: Locator): Promise<boolean> {
        return await locator.isEnabled();
    }

    async getElementText(locator: Locator): Promise<string> {
        const elementText = await locator.textContent();
        return elementText == null ? "" : elementText;
    }
}