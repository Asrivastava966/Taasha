import { by, $, ElementFinder } from "protractor";
import { BaseGrid } from "../base/BaseGrid";

export class MyTasksGrid extends BaseGrid {
    private orderNumberColumnIndex = 1;
    private patientNameColumnIndex = 2;
    
    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }
    
    //grid-settings
    private saveGridSettingsButton = $('#save'); 
    private getSaveGridSettingsButton(){
        return this.saveGridSettingsButton;
    }
    //TO-DO :: grid-settings methods 
    
    //grid-menu
    private getGridMenuButton() {
        return this.getGridContentsWrapper().element(by.className('ui-grid-menu-button'));
    }
    //TO-DO :: grid-menu button methods

    getGridContainer() {
        return this.getGridContentsWrapper().all(by.css('[role=\"grid\"]')).get(1);
    }

    private getOrderNumberHeaderCell() {
        return this.getGridHeaderCells().get((this.orderNumberColumnIndex - 1));
    }

    private getPatientNameHeaderCell() {
        return this.getGridHeaderCells().get((this.patientNameColumnIndex - 1));
    }

    private getPatientNameFilter(){
        return this.getPatientNameHeaderCell().element(by.className('ui-grid-filter-input'));
    }

    getOrderNumberLink(rowNumber:number) {
        return this.getGridBodyRowCell(rowNumber, this.orderNumberColumnIndex).element(by.tagName('a'));
    }

    getPatientNameLink(rowNumber:number){
        return this.getGridBodyRowCell(rowNumber, this.patientNameColumnIndex).element(by.tagName('a'));
    }

    async getPatientName(rowNumber:number){
        return await this.getPatientNameLink(rowNumber).getText();
    }

    //Workflow methods
    private firstRowIndex = 1;

    async searchViaPatientNameFilter(patientName:string){
        await this.getPatientNameFilter().clear();
        await this.getPatientNameFilter().sendKeys(patientName);
    }

    async searchViaPatientNameFilterAndClickOnPatientNameLink(patientName:string) {
        await this.searchViaPatientNameFilter(patientName);
        await this.getPatientNameLink(this.firstRowIndex).click();
    }

    async searchViaPatientNameFilterAndClickOnOrderNumberLink(patientName:string) {
        await this.searchViaPatientNameFilter(patientName);
        await this.getOrderNumberLink(this.firstRowIndex).click();
    }
}