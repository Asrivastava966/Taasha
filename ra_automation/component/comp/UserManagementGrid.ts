import { ElementFinder, by } from "protractor";
import { BaseGrid } from "../base/BaseGrid";

export class UserManagementGrid extends BaseGrid {
    private actionColumnIndex = 7;

    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }

    private getActionCell(rowNumber:number) {
        return this.getGridBodyRowCell(rowNumber, this.actionColumnIndex);
    }

    public async updateUser(rowNumber:number) {
        await this.getActionCell(rowNumber).element(by.css('[title=\"Update User\"]'));
    }

    public async deleteUser(rowNumber:number) {
        await this.getActionCell(rowNumber).element(by.css('[title=\"Delete User\"]'));
    }

    public async resetPasswordOfUser(rowNumber:number) {
        await this.getActionCell(rowNumber).element(by.css('[title=\"Reset Password\"]'));
    }
}