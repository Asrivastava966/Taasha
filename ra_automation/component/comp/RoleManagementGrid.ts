import { ElementFinder, by } from "protractor";
import { BaseGrid } from "../base/BaseGrid";

export class RoleManagementGrid extends BaseGrid {
 
    private actionColumnIndex = 6; 

    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }

    private getActionCell(rowNumber:number) {
        return this.getGridBodyRowCell(rowNumber, this.actionColumnIndex);
    }

    public async updateRole(rowNumber:number) {
        await this.getActionCell(rowNumber).element(by.className('streamline-file-edit-2'));
    }
}