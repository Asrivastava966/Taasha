import { BaseModal } from "../base/BaseModal";
import { ElementFinder, by } from "protractor";

export class InformationModalDialog extends BaseModal {
    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
    }

    async getInformationModalMessage() {
        return await this.getModalBody().getText();
    }

    async confirmOK() {
        await this.getModalFooter().element(by.tagName('button')).click();
    }
}