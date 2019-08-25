import { BaseGrid } from "../base/BaseGrid";
import { ElementFinder, by } from "protractor";

export class ExistingPatientGrid extends BaseGrid {
    private patientNameColumnIndex = 1; 
    private dobColumnIndex = 2; 
    private genderColumnIndex = 3; 
    private statusColumnIndex = 4; 
    private phoneNumberColumnIndex = 5; 
    private legacyIdColumnIndex = 6; 

    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }

    getPatientNameColumnCell(rowNumber:number) {
        return this.getGridBodyRowCell(rowNumber, this.patientNameColumnIndex).element(by.tagName('a'));
    }

    async getPatientName(rowNumber:number) {
        return await this.getPatientNameColumnCell(rowNumber).getText();
    }

    getDOBColumnCell(rowNumber:number) {
        return this.getGridBodyRowCell(rowNumber, this.dobColumnIndex).element(by.className('ui-grid-cell-contents'));
    }

    async getDOB(rowNumber:number) {
        return await this.getDOBColumnCell(rowNumber).getText();
    }
}