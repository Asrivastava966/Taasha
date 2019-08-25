import { by, ElementFinder, browser } from "protractor";
import { WaitUtils } from "../../utils/WaitUtils";

export class SelectDropdown{
    private waitUtils:WaitUtils;
    private selectDropdownElement:ElementFinder;

    constructor(dropdownElement:ElementFinder) {
        this.waitUtils = new WaitUtils();
        this.selectDropdownElement = dropdownElement;
    }

    getDropdownElement() {
        return this.selectDropdownElement;
    }

    async selectOption(option: string) {
        if(await this.selectDropdownElement.element(by.cssContainingText('option', option)).isDisplayed()) {
            await this.selectDropdownElement.element(by.cssContainingText('option', option)).click();
        } else {
            browser.log('The option: ' + option + ' is not available in the dropdown.');
        }
    }

    async selectOptionByIndex(optionIndex: number) {
        await this.selectDropdownElement.all(by.tagName('option')).get(optionIndex).click();
    }
}