import { by, ElementFinder } from "protractor";
import { BaseGrid } from "../base/BaseGrid";

export class ResupplyOrdersGrid extends BaseGrid {

    private patientNameColumnIndex = 1; 
    private resupplyOrderNumberColumnIndex = 2; 
    private assignedToColumnIndex = 3; 
    private numberOfContactsColumnIndex = 4; 
    private dateNeededColumnIndex = 5; 
    private daysOutstandingColumnIndex = 6; 
    private lastOrderDateColumnIndex = 7; 
    private orderOwnerColumnIndex = 8; 
    private complianceStatusColumnIndex = 9; 

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

    async navigateToResuppliesContactInformationPage(patientName:string) {
        let firstRowIndex = 1;
        
        await this.searchViaPatientNameFilter(patientName);
        await this.getPatientNameColumnCell(firstRowIndex).element(by.tagName('a')).click();
    }

    getNumberOfContactsColumnCell(rowNumber:number) {
        return this.getGridBodyRowCell(rowNumber, this.numberOfContactsColumnIndex);
    }

    async getNumberOfContacts(rowNumber:number) {
        let numberOfContacts = await this.getNumberOfContactsColumnCell(rowNumber).element(by.tagName('a')).getText();
        return +numberOfContacts;
    }
}