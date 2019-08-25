import { TechnicianManagementPO } from "../../../po/admindashboardpage/techniciansbucket/TechnicianManagementPO";
import { SkillSet } from "../../../data/enums/SkillSet";
import { TechnicianType } from "../../../data/enums/TechnicianType";
import { Status } from "../../../data/enums/Status";
import { TechnicianInfo } from "../../../data/info/TechnicianInfo";

export class TechnicianManagementLib {
    private technicianManagementPO:TechnicianManagementPO;

    constructor() {
        this.technicianManagementPO = new TechnicianManagementPO();
    }

    getTechnicianManagementPO() {
        return this.technicianManagementPO;
    }

    async navigateBackToAdminDashboardPage() {
        await this.getTechnicianManagementPO().getAdminDashboardButton().click();
    }

    async filterByName(name:string) {
        await this.getTechnicianManagementPO().getTechnicianManagementGrid().filterByName(name);
    }

    async getName(rowNumber:number) {
        return await this.getTechnicianManagementPO().getTechnicianManagementGrid().getName(rowNumber);
    }

    async updateTechnician(technicianName:string) {
        let firstRowIndex = 1;
        await this.filterByName(technicianName);
        await this.getTechnicianManagementPO().getTechnicianManagementGrid().updateTechnician(firstRowIndex);
    }

    async navigateBackToTechniciansGridPage() {
        await this.getTechnicianManagementPO().getBackToTechniciansButton().click();
    }

    async getSuccessMessage() {
        return await this.getTechnicianManagementPO().getSuccessMessage().getText();
    }

    //Update Form - workflow
    async selectSkillSet(skillSet:SkillSet) {
        await this.getTechnicianManagementPO().getSkillSetSelectDropdown().selectOption(skillSet);
    }

    async selectTechnicianType(technicianType:TechnicianType) {
        await this.getTechnicianManagementPO().getTechnicianTypeSelectDropdown().selectOption(technicianType);
    }

    async selectStatus(status:Status) {
        await this.getTechnicianManagementPO().getStatusSelectDropdown().selectOption(status);
    }

    async checkWarehouseSelectAllCheckbox() {
        await this.getTechnicianManagementPO().getWarehousesSelectAllCheckbox().click();
    }

    async fillNotes(notes:string) {
        await this.getTechnicianManagementPO().getNotesTextarea().sendKeys(notes);
    }

    async fillTechnicianInfo(technicianInfo:TechnicianInfo) {
        if(technicianInfo.getSkillSet() != null) {
            await this.selectSkillSet(technicianInfo.getSkillSet());
        }

        if(technicianInfo.getTechnicianType() != null) {
            await this.selectTechnicianType(technicianInfo.getTechnicianType());
        }
        
        if(technicianInfo.getStatus() != null) {
            await this.selectStatus(technicianInfo.getStatus());
        }

        if(technicianInfo.getWarehouseSelectAllCheckbox() != null) {
            if(technicianInfo.getWarehouseSelectAllCheckbox() == true) {
                await this.checkWarehouseSelectAllCheckbox();
            }
        }

        if(technicianInfo.getNotes() != null) {
            await this.fillNotes(technicianInfo.getNotes());
        }
    }

    async update() {
        await this.getTechnicianManagementPO().getUpdateButton().click();
    }

    //Update Form - read auto-populated values
    async getFirstNameFieldValue() {
        return await this.getTechnicianManagementPO().getFirstNameInputField().getAttribute('value');
    }

    async getLastNameFieldValue() {
        return await this.getTechnicianManagementPO().getLastNameInputField().getAttribute('value');
    }

    async getEmailFieldValue() {
        return await this.getTechnicianManagementPO().getEmailInputField().getAttribute('value');
    }

    async getPhoneFieldValue() {
        return await this.getTechnicianManagementPO().getPhoneInputField().getAttribute('value');
    }

    async getAddressOneFieldValue() {
        return await this.getTechnicianManagementPO().getAddressOneInputField().getAttribute('value');
    }

    async getCityFieldValue() {
        return await this.getTechnicianManagementPO().getCityInputField().getAttribute('value');
    }

    async getZipCodeFieldValue() {
        return await this.getTechnicianManagementPO().getZipCodeInputField().getAttribute('value');
    }
}