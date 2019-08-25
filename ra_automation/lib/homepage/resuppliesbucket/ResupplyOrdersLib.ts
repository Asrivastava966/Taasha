import { by, browser } from 'protractor';
import { ResupplyOrdersPO } from "../../../po/homepage/resuppliesbucket/ResupplyOrdersPO";
import { CommonUtils } from '../../../utils/CommonUtils';

export class ResupplyOrdersLib {
    private commonUtils:CommonUtils;
    private resupplyOrdersPO:ResupplyOrdersPO;

    constructor() {
        this.commonUtils = new CommonUtils();
        this.resupplyOrdersPO = new ResupplyOrdersPO();
    }

    getCommonUtils() {
        return this.commonUtils;
    }

    getResupplyOrdersPO() {
        return this.resupplyOrdersPO;
    }

    async navigateToResuppliesDashboard() {
        await this.getCommonUtils().scrollIntoView(this.getResupplyOrdersPO().getCSSHeaderLogo());
        await this.getResupplyOrdersPO().getResuppliesDashboardButton().click();
    }

    async filterResupplyOrdersViaPatientName(patientName:string) {
        await this.getCommonUtils().scrollIntoView(this.getResupplyOrdersPO().getCSSHeaderLogo());
        await this.getResupplyOrdersPO().getFilterButton().click();
        await this.getResupplyOrdersPO().getPatientNameFilterInputField().sendKeys(patientName);
        await this.getResupplyOrdersPO().getSearchButton().click();
    }

    async navigateToResuppliesContactInformationPage(patientName:string) {
        let firstRowIndex = 1;

        await this.filterResupplyOrdersViaPatientName(patientName);
        await this.getResupplyOrdersPO().getResupplyOrdersGrid().getPatientNameColumnCell(firstRowIndex).element(by.tagName('a')).click();
    }

    async navigateToResuppliesContactInformationPageViaRowNumber(rowNumber:number) {
        await this.getResupplyOrdersPO().getResupplyOrdersGrid().getPatientNameColumnCell(rowNumber).element(by.tagName('a')).click();
    }

    async getPatientName(rowNumber:number) {
        return await this.getResupplyOrdersPO().getResupplyOrdersGrid().getPatientName(rowNumber); 
    }

    async getNumberOfPatientContactNotes(rowNumber:number) {
        return await this.getResupplyOrdersPO().getResupplyOrdersGrid().getNumberOfContacts(rowNumber);
    }
}