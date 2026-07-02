import { BasePage } from './BasePage';
import { locater } from '../../Locaters/locater';
import { Page } from '@playwright/test';

export default class LoginPage extends BasePage {
    public locators: locater;

    constructor(page : Page) {
        super(page);
        this.locators = new locater(page);
    }

    async enterUsername(username : string) {
        await this.locators.usernameInput.fill(username);
    }

    async enterPassword(password : string) {
        await this.locators.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.locators.loginButton.click();
    }
}