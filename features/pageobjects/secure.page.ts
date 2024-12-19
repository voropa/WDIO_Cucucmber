import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert() {
        return $('#flash');
    }

    public get logoutButton() {
        return $('a.secondary');
    }
}

export default new SecurePage();
