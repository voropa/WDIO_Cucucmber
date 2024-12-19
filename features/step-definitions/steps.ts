import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

Then(/^I should see logout button$/, async () => {
    await expect(SecurePage.logoutButton).toBeDisplayed();
});

Then(/^bal bal$/, async () => {
    await SecurePage.logoutButton.click();
});

When(/^bal bal$/, async () => {
    console.log('qwe');
});

Given('I on the login page', async () => {
    await LoginPage.open();
});
