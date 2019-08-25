import { ElementFinder, browser, protractor } from "protractor";

export class WaitUtils{

    private smallTimeout:number = 5000;
    private mediumTimeout:number = 10000;
    private largeTimeout:number = 20000;
    private holyFKTimeout:number = 30000;

    async insertStaticWait(timeInMilliseconds:number) {
        await browser.sleep(timeInMilliseconds);
    }

    async waitForElementToBePresent(elementFinder:ElementFinder) {
        browser.logger.info('Waiting for the element:' + elementFinder.locator() + 'to be present.');
        
        let expectedConditions = protractor.ExpectedConditions;
        let timeout:number = this.holyFKTimeout;

        try {
            await browser.wait(expectedConditions.presenceOf(elementFinder), timeout);   
        } catch (err) {
            browser.logger.error(err);
        }
    }

    async waitForTextToBePresentInElement(elementFinder:ElementFinder, text:string) {
        browser.logger.info('Waiting for the text: \' ' + text + ' \' to be present in the element: '+ elementFinder.locator());
        
        let expectedConditions = protractor.ExpectedConditions;
        let timeout:number = this.holyFKTimeout;

        try {
            await browser.wait(expectedConditions.textToBePresentInElement(elementFinder, text), timeout);
        } catch (err) {
            browser.logger.error(err);
        }
    }

    async waitForElementToBeVisible(elementFinder:ElementFinder) {
        browser.logger.info('Waiting for the element: ' + elementFinder.locator() + ' to be visible.');

        let expectedConditions = protractor.ExpectedConditions;
        let timeout:number = this.holyFKTimeout;

        try {
            await browser.wait(expectedConditions.visibilityOf(elementFinder), timeout);
        } catch (err) {
            browser.logger.info(err);
        }
    }

    async waitForElementToBeClickable(elementFinder:ElementFinder) {
        browser.logger.info('Waiting for the element: ' + elementFinder.locator() + ' to be clickable.');
        
        let expectedConditions = protractor.ExpectedConditions;
        let timeout:number = this.holyFKTimeout;

        try {
            await browser.wait(expectedConditions.elementToBeClickable(elementFinder), timeout);
        } catch (err) {
            browser.logger.info(err);
        }
    }

    async waitForElementToBeSelected(elementFinder:ElementFinder) {
        browser.logger.info('Waiting for the element: ' + elementFinder.locator() + ' to be selected.');
        
        let expectedConditions = protractor.ExpectedConditions;
        let timeout:number = this.holyFKTimeout;

        try {
            await browser.wait(expectedConditions.elementToBeSelected(elementFinder), timeout);
        } catch (err) {
            browser.logger.error(err);
        }
    }
}