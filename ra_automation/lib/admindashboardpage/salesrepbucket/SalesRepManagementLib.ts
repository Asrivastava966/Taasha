import { SalesRepManagementPO } from "../../../po/admindashboardpage/salesrepbucket/SalesRepManagementPO";
import { SalesRepInfo } from "../../../data/info/SalesRepInfo";

export class SalesRepManagementLib {
    private salesRepManagementPO:SalesRepManagementPO;

    constructor() {
        this.salesRepManagementPO = new SalesRepManagementPO();
    }

    getSalesRepManagementPO() {
        return this.salesRepManagementPO;
    }

    async navigateBackToAdminDashboardPage() {
        await this.getSalesRepManagementPO().getAdminDashboardButton().click();
    }

    async filterByName(name:string) {
        await this.getSalesRepManagementPO().getSalesRepManagementGrid().filterByName(name);
    }

    async getName(rowNumber:number) {
        return await this.getSalesRepManagementPO().getSalesRepManagementGrid().getName(rowNumber);
    }

    async updateSalesRep(salesRepName:string) {
        let firstRowIndex = 1;
        await this.filterByName(salesRepName);
        await this.getSalesRepManagementPO().getSalesRepManagementGrid().updateSalesRep(firstRowIndex);
    }

    async navigateBackToSalesRepGridPage() {
        await this.getSalesRepManagementPO().getBackToSalesRepButton().click();
    }

    //Update Form - workflow
    async getSuccessMessage() {
        return await this.getSalesRepManagementPO().getSuccessMessage().getText();
    }

    async fillLegacySalesID(legacySalesID:string) {
        await this.getSalesRepManagementPO().getLegacySalesIDInputField().sendKeys(legacySalesID);
    }

    async fillPhoneNumber(phone:number) {
        await this.getSalesRepManagementPO().getPhoneInputField().sendKeys(phone)
    }

    async fillPhoneExt(ext:number) {
        await this.getSalesRepManagementPO().getExtInputField().sendKeys(ext);
    }

    async fillSalesRepInfo(salesRepInfo:SalesRepInfo) {
        if(salesRepInfo.getLegacySalesID() != null) {
            await this.fillLegacySalesID(salesRepInfo.getLegacySalesID());
        }

        if(salesRepInfo.getPhone() != null) {
            await this.fillPhoneNumber(salesRepInfo.getPhone());
        }

        if(salesRepInfo.getExt() != null) {
            await this.fillPhoneExt(salesRepInfo.getExt());
        }
    }

    async update() {
        await this.getSalesRepManagementPO().getUpdateButton().click();
    }

    //Update Form - read auto-populated values
    async getFirstNameFieldValue() {
        return await this.getSalesRepManagementPO().getFirstNameInputField().getAttribute('value');
    }

    async getLastNameFieldValue() {
        return await this.getSalesRepManagementPO().getLastNameInputField().getAttribute('value');
    }

    async getStatusFieldValue() {
        return await this.getSalesRepManagementPO().getStatusSelectDropdown().getAttribute('value');
    }

    async getPhoneFieldValue() {
        return await this.getSalesRepManagementPO().getPhoneInputField().getAttribute('value');
    }

    async getEmailFieldValue() {
        return await this.getSalesRepManagementPO().getEmailInputField().getAttribute('value');
    }
}