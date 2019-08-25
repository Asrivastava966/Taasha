import { BaseGrid } from "../base/BaseGrid";
import { ElementFinder, by } from "protractor";
import { Status } from "../../data/enums/Status";
import { SelectDropdown } from "./SelectDropdown";

export class SalesRepManagementGrid extends BaseGrid {
    private statusColumnIndex = 1; 
    private nameColumnIndex = 2; 
    private createdOnColumnIndex = 3; 
    private phoneColumnIndex = 4; 
    private actionColumnIndex = 5; 

    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }

    getStatusColumnHeaderSelectFilter() {
        return new SelectDropdown(this.getGridHeaderCell(this.statusColumnIndex).element(by.className('ui-grid-filter-select')));
    }

    async filterByStatus(status:Status) {
        await this.getStatusColumnHeaderSelectFilter().selectOption(status);
    }

    getNameColumnHeaderInputFilter() {
        return this.getGridHeaderCell(this.nameColumnIndex).element(by.className('ui-grid-filter-input'));
    }

    async filterByName(name:string) {
        await this.getNameColumnHeaderInputFilter().sendKeys(name);
    }

    getPhoneColumnHeaderInputFilter() {
        return this.getGridHeaderCell(this.phoneColumnIndex).element(by.className('ui-grid-filter-input'));
    }

    async filterByPhone(phone:number) {
        await this.getNameColumnHeaderInputFilter().sendKeys(phone);
    }

    async getName(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.nameColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async getPhone(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.phoneColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async getCreatedOnDate(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.createdOnColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async updateSalesRep(rowNumber:number) {
        await this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(by.tagName('a')).click();
    }
}