import { by } from "protractor";
import { BaseGrid } from "../base/BaseGrid";

export class OrdersGrid extends BaseGrid {

    private patientNameColumnIndex = 1;
    private orderNumberColumnIndex = 2; 
    private orderTypeColumnIndex = 3;  

    getGridContainer() {
        return this.getGridContentsWrapper().all(by.css('[role=\"grid\"]')).get(1);
    }

    private getPatientNameHeaderCell() {
        return this.getGridHeaderCells().get((this.patientNameColumnIndex - 1));
    }

    private getPatientNameFilter(){
        return this.getPatientNameHeaderCell().element(by.className('ui-grid-filter-input'));
    }

    async searchViaPatientNameFilter(patientName:string){
        await this.getPatientNameFilter().clear();
        await this.getPatientNameFilter().sendKeys(patientName);
    }

    getPatientNameLink(rowNumber:number){
        return this.getGridBodyRowCell(rowNumber, this.patientNameColumnIndex).element(by.tagName('a'));
    }

    async getPatientName(rowNumber:number){
        return await this.getPatientNameLink(rowNumber).getText();
    }

    getOrderType(rowNumber:number) {
        return this.getGridBodyRowCell(rowNumber, this.orderTypeColumnIndex).element(by.className('ui-grid-cell-contents'));
    }
}