import { by, ElementFinder } from "protractor";
import { DatePicker } from "./DatePicker";
import { BaseModal } from "../base/BaseModal";

export class InsVerificationManualEligibilityCheckModal extends BaseModal {
    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
    }

    private getCloseButton() {
        return this.getModalHeader().element(by.className('close'));
    }

    async closeModal() {
        await this.getCloseButton().click();
    }
    
    getEligibleRadioInputField() {
        return this.getModalBody().element(by.id('inputStatusEligible'));
    }

    getNotEligibleRadioInputField() {
        return this.getModalBody().element(by.id('inputStatusNotEligible'));
    }

    getDateCheckedDateInputField() {
        return new DatePicker(this.getModalBody().element(by.id('inputDateChecked')));
    }

    getSaveButton() {
        return this.getModalFooter().element(by.css('[ng-click*=\"doSaveEligibility\"]'));
    }

    getCancelButton() {
        return this.getModalFooter().element(by.css('[ng-click=\"cancel()\"]'));
    }
}