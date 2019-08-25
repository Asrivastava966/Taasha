import { by, ElementFinder } from "protractor";
import { BaseModal } from "../base/BaseModal";
import { OrderForms } from "../../data/enums/OrderForms";
import { WaitUtils } from "../../utils/WaitUtils";
import { CommonUtils } from "../../utils/CommonUtils";

export class FormsModalDialog extends BaseModal {
    waitUtils:WaitUtils;
    commonUtils:CommonUtils;
    
    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
        this.waitUtils = new WaitUtils();
        this.commonUtils = new CommonUtils();
    }
    
    async closeFormsModalDialog() {
        await this.getModalHeader().element(by.className('close')).click();
    }

    async navigateToForm(orderForm:OrderForms) {
        await this.getModalBody().element(by.buttonText(orderForm)).click();
    }

    getCurrentForm() {
        return this.getModalBody().all(by.tagName('form')).get(0);
    }

    async navigateToTheSignatureModalDialog() {
        await this.getCurrentForm().element(by.className('btn-link')).click();
    }

    getSaveAndSubmitButton() {
        return this.getModalFooter().element(by.css('[ng-click=\"exportFormsPdf()\"]'));
    }

    async saveAndSubmit() {
        await this.waitUtils.waitForElementToBeVisible(this.getSaveAndSubmitButton());
        await this.getSaveAndSubmitButton().click();
        await this.waitUtils.insertStaticWait(3000);
        
        let firstBrowserTabIndex = 1;
        await this.commonUtils.switchBrowserTab(firstBrowserTabIndex);
    }

    async close() {
        await this.getModalFooter().element(by.buttonText('Close')).click();
    }
}
