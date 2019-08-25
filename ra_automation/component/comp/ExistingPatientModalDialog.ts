import { BaseModal } from "../base/BaseModal";
import { ElementFinder, by, element } from "protractor";
import { ExistingPatientGrid } from "./ExistingPatientGrid";

export class ExistingPatientModalDialog extends BaseModal {

    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
    }

    private getCloseButton() {
        return this.getModalHeader().element(by.className('close'));
    }

    async closeModal() {
        await this.getCloseButton().click();
    }

    private static existingPatientGrid= element(by.id('docGrid'));

    private getExistingPatientGrid() {
        return new ExistingPatientGrid(ExistingPatientModalDialog.existingPatientGrid);
    }

    async getPatientName(rowNumber:number) {
        return await this.getExistingPatientGrid().getPatientName(rowNumber);
    }

    async getDOB(rowNumber:number) {
        return await this.getExistingPatientGrid().getDOB(rowNumber);
    }
}