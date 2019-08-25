import { BaseGrid } from "../base/BaseGrid";
import { ElementFinder, by } from "protractor";

export class ReportsOrderGrid extends BaseGrid {

    private patientNameColumnIndex = 1; 
    private orderNumberColumnIndex = 2; 
    private orderTypeColumnIndex = 3; 
    private refDoctorColumnIndex = 4; 
    private insuranceColumnIndex = 5; 
    private contactNotesColiumnIndex = 6; 
    private otherNotesColumnIndex = 7; 
    private daysOutstandingColumnIndex = 8; 

    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }

    async searchViaPatientNameFilter(patientName:string) {
        await this.getGridHeaderCell(this.patientNameColumnIndex).element(by.className('ui-grid-filter-input')).sendKeys(patientName);
    }

    getPatientNameColumnCell(rowNumber:number) {
        return this.getGridBodyRowCell(rowNumber, this.patientNameColumnIndex);
    }

    async getPatientName(rowNumber:number) {
        return await this.getPatientNameColumnCell(rowNumber).element(by.tagName('a')).getText();
    }

    async updatePatient(patientName:string) {
        let firstRowIndex = 1;
        
        await this.searchViaPatientNameFilter(patientName);
        await this.getPatientNameColumnCell(firstRowIndex).element(by.tagName('a')).click();
    }
}