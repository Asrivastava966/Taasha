import { BaseGrid } from "../base/BaseGrid";
import { ElementFinder, by } from "protractor";
import { SelectDropdown } from "./SelectDropdown";
import { Status } from "../../data/enums/Status";

export class TechnicianManagementGrid extends BaseGrid {
    private nameColumnIndex = 1;
    private createdOnColumnIndex = 2; 
    private emailColumnIndex = 3;
    private statusColumnIndex = 4; 
    private phoneColumnIndex = 5; 
    private actionColumnIndex = 6; 

    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }

    getNameColumnHeaderInputFilter() {
        return this.getGridHeaderCell(this.nameColumnIndex).element(by.className('ui-grid-filter-input'));
    }

    async filterByName(name:string) {
        await this.getNameColumnHeaderInputFilter().sendKeys(name);
    }

    getEmailColumnHeaderInputFilter() {
        return this.getGridHeaderCell(this.emailColumnIndex).element(by.className('ui-grid-filter-input'));
    }

    async filterByEmail(email:string) {
        await this.getEmailColumnHeaderInputFilter().sendKeys(email);
    }

    getStatusColumnHeaderSelectFilter() {
        return new SelectDropdown(this.getGridHeaderCell(this.statusColumnIndex).element(by.className('ui-grid-filter-select')));
    }

    async filterByStatus(status:Status) {
        await this.getStatusColumnHeaderSelectFilter().selectOption(status);
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

    async getCreatedOnDate(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.createdOnColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async getEmail(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.emailColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async getPhone(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.phoneColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async updateTechnician(rowNumber:number) {
        await this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(by.tagName('a')).click();
    }
}