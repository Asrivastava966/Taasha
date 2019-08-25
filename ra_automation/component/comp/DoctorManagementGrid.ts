import { BaseGrid } from "../base/BaseGrid";
import { ElementFinder, by } from "protractor";

export class DoctorManagementGrid extends BaseGrid {
    private lastNameColumnIndex = 1;
    private firstNameColumnIndex = 2;
    private npiColumnIndex = 3;
    private actionColumnIndex = 4;

    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }

    //grid-menu
    private getGridMenuButton() {
        return this.getGridContentsWrapper().element(by.className('ui-grid-menu-button'));
    }
    //TO-DO :: grid-menu button methods

    getGridContainer() {
        return this.getGridContentsWrapper().all(by.css('[role=\"grid\"]')).get(1);
    }

    async getLastName(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.lastNameColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async getFirstName(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.firstNameColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async getNPI(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.npiColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async updateDoctor(rowNumber:number) {
        await this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(by.css('[title=\"Update Doctor\"]')).click();
    }

    async deleteDoctor(rowNumber:number) {
        await this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(by.css('[title=\"Delete Doctor\"]')).click();
    }
}