import { by, ElementFinder } from 'protractor';
import { BaseModal } from '../base/BaseModal';

export class ConfirmationModalYesNoDialog extends BaseModal{

    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
    }

    async getConfirmationModalMessage() {
        return await this.getModalBody().getText();
    }

    async confirmYes() {
        await this.getModalFooter().element(by.css('[ng-click=\"closeModalWindow(true)\"]')).click();
    }

    async confirmNo() {
        await this.getModalFooter().element(by.css('[ng-click=\"closeModalWindow(false)\"]')).click();
    }
}