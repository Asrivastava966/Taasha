import { InsuranceProviderManagementPO } from "../../../po/admindashboardpage/insuranceproviderbucket/InsuranceProviderManagementPO";
import { InsuranceProviderInfo } from "../../../data/info/InsuranceProviderInfo";
import { Status } from "../../../data/enums/Status";
import { InsuranceProviderGroup } from "../../../data/enums/InsuranceProviderGroup";
import { AddUpdateInsuranceProviderFormLib } from "./AddUpdateInsuranceProviderFormLib";
import { browser } from "protractor";

export class InsuranceProviderManagementLib {
    private insuranceProviderManagementPO:InsuranceProviderManagementPO;
    private addUpdateInsuranceProviderFormLib:AddUpdateInsuranceProviderFormLib;

    constructor() {
        this.insuranceProviderManagementPO = new InsuranceProviderManagementPO();
        this.addUpdateInsuranceProviderFormLib = new AddUpdateInsuranceProviderFormLib();
    }

    getInsuranceProviderManagementPO() {
        return this.insuranceProviderManagementPO;
    }

    getAddUpdateInsuranceProviderFormLib() {
        return this.addUpdateInsuranceProviderFormLib;
    }

    async getDeleteInsProviderConfirmationModalMessage() {
        return await this.getInsuranceProviderManagementPO().getDeleteInsProviderConfirmationModal().getConfirmationModalMessage();
    }

    async deleteInsProviderConfirmYes() {
        await this.getInsuranceProviderManagementPO().getDeleteInsProviderConfirmationModal().confirmYes();
    }

    async getSuccessMessage() {
        return await this.getInsuranceProviderManagementPO().getSuccessMessage().getText();
    }

    async navigateBackToAdminDashboardPage() {
        await this.getInsuranceProviderManagementPO().getAdminDashboardButton().click();
    }

    async navigateToAddNewProviderForm() {
        await this.getInsuranceProviderManagementPO().getAddNewProvidersButton().click();
    }

    //filters
    async selectStatusFilter(status:Status) {
        await this.getInsuranceProviderManagementPO().getStatusFilterDropdown().selectOption(status);
    }

    async fillProviderNameFilter(providerName:string) {
        await this.getInsuranceProviderManagementPO().getProviderNameFilterInputField().sendKeys(providerName);
    }

    async fillLegacyIDFilter(legacyID:string) {
        await this.getInsuranceProviderManagementPO().getLegacyIDFilterInputField().sendKeys(legacyID);
    }

    async selectFeeScheduleFilter(feeSchedule:string) {
        await this.getInsuranceProviderManagementPO().getFeeScheduleFilterDropdown().selectOption(feeSchedule);
    }

    async fillProviderNumberFilter(providerNumber:number) {
        await this.getInsuranceProviderManagementPO().getProviderNumberFilterInputField().sendKeys(providerNumber);
    }

    async selectGroupFilter(group:InsuranceProviderGroup) {
        await this.getInsuranceProviderManagementPO().getGroupFilterDropdown().selectOption(group);
    }

    async search() {
        await this.getInsuranceProviderManagementPO().getSearchButton().click();
    }

    async filterByInsuranceProviderInfo(insuranceProviderInfo:InsuranceProviderInfo) {
        if(insuranceProviderInfo.getStatus() !=null) {
            await this.selectStatusFilter(insuranceProviderInfo.getStatus());
        }

        if(insuranceProviderInfo.getProviderName() !=null) {
            await this.fillProviderNameFilter(insuranceProviderInfo.getProviderName());
        }

        if(insuranceProviderInfo.getLegacyId() !=null) {
            await this.fillLegacyIDFilter(insuranceProviderInfo.getLegacyId());
        }

        if(insuranceProviderInfo.getFeeSchedule() !=null) {
            await this.selectFeeScheduleFilter(insuranceProviderInfo.getFeeSchedule());
        }

        if(insuranceProviderInfo.getProviderNumber() !=null) {
            await this.fillProviderNumberFilter(insuranceProviderInfo.getProviderNumber());
        }

        if(insuranceProviderInfo.getGroup() !=null) {
            await this.selectGroupFilter(insuranceProviderInfo.getGroup());
        }

        await this.search();
    }

    async getNoInsProviderFoundValidationMessage() {
        return await this.getInsuranceProviderManagementPO().getNoInsuranceProviderFoundValidation().getText();
    }

    async updateInsuranceProvider(insuranceProviderInfo:InsuranceProviderInfo) {
        let firstRowIndex = 1;
        await this.filterByInsuranceProviderInfo(insuranceProviderInfo);
        await this.getInsuranceProviderManagementPO().getInsuranceProviderGrid().updateInsuranceProvider(firstRowIndex);
    }

    async deleteInsuranceProvider(insuranceProviderInfo:InsuranceProviderInfo) {
        let firstRowIndex = 1;
        await this.filterByInsuranceProviderInfo(insuranceProviderInfo);
        await this.getInsuranceProviderManagementPO().getInsuranceProviderGrid().deleteInsuranceProvider(firstRowIndex);
    }
}