import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { locater } from '../../Locaters/locater';
import { Keywords } from '../../utils/Keywords';

 export default class HomePage extends BasePage {
    private  locators: locater;
    private keywords: Keywords;

    constructor(page: Page) {
        super(page);
        this.locators = new locater(page);
        this.keywords = new Keywords(page);
    }

     async clickSignIn(){
        await this.keywords.clickButton(this.locators.signInButton);
    }

    async clickPayBills() {
        await this.keywords.clickButton(this.locators.paysBillsButton);
    }

    async clickActivity() {
        await this.keywords.clickButton(this.locators.activityButton);
    }

    async fillSearchInput(text: string) {
        await this.keywords.fillInputField(this.locators.searchInput, text);
    }

    async checkUserProfile() {
        await this.page.waitForTimeout(2000);
        await expect(await this.keywords.checkElementVisibility(this.locators.profileIcon)).toBe(true);
        const img = await this.page.screenshot({ path: 'screenshots/userProfile.png' });
        return img;
        }

    async checkSearchResults(text : string) {
        await expect(await this.page.locator(`xpath=//a[contains(text(),"${text}")]`).count()).toBeGreaterThan(0);
    }
}