import { BaseModal } from "../base/BaseModal";
import { ElementFinder, by } from "protractor";
import { ABNFormInfo } from "../../data/info/ABNFormInfo";

export class ABNFormModalDialog extends BaseModal {
    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
    }

    private getCloseButton() {
        return this.getModalHeader().element(by.className('close'));
    }

    public async close() {
        await this.getCloseButton().click();
    }

    private getABNForm() {
        return this.getModalBody().element(by.tagName('form'));
    }

    private getSaveButton() {
        return this.getABNForm().element(by.css('[ng-click*="saveAbn"]'));
    }

    private getCancelButton() {
        return this.getABNForm().element(by.css('[ng-click*="closeModal"]'));
    }

    public async save() {
        await this.getSaveButton().click();
    }

    public async cancel() {
        await this.getCancelButton().click();
    }

    public async fillABNFormInfo(abnFormInfo) {

    }
}