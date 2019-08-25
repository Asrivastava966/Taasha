import { AddUpdateInsuranceProviderFormPO } from "../../../po/admindashboardpage/insuranceproviderbucket/AddUpdateInsuranceProviderFormPO";
import { InsuranceProviderGroup } from "../../../data/enums/InsuranceProviderGroup";
import { Status } from "../../../data/enums/Status";
import { InsuranceProviderTaxType } from "../../../data/enums/InsuranceProviderTaxType";
import { InsuranceProviderInfo } from "../../../data/info/InsuranceProviderInfo";

export class AddUpdateInsuranceProviderFormLib {
    private addUpdateInsuranceProviderFormPO:AddUpdateInsuranceProviderFormPO;

    constructor() {
        this.addUpdateInsuranceProviderFormPO = new AddUpdateInsuranceProviderFormPO();
    }

    getAddUpdateInsuranceProviderFormPO() {
        return this.addUpdateInsuranceProviderFormPO;
    }

    async navigateBackToInsuranceProvidersGridPage() {
        await this.getAddUpdateInsuranceProviderFormPO().getBackToProvidersButton().click();
    }

    async getSuccessMessage() {
        return await this.getAddUpdateInsuranceProviderFormPO().getSuccessMessage().getText();
    }

    //General Info
    async fillProviderName(name:string) {
        await this.getAddUpdateInsuranceProviderFormPO().getProviderNameInputField().sendKeys(name);
    }

    async selectGroup(group:InsuranceProviderGroup) {
        await this.getAddUpdateInsuranceProviderFormPO().getGroupSelectDropdown().selectOption(group);
    }

    async selectStatus(status:Status) {
        await this.getAddUpdateInsuranceProviderFormPO().getStatusDropdown().selectOption(status);
    }

    async fillLegacyID(legacyID:string) {
        await this.getAddUpdateInsuranceProviderFormPO().getLegacyIdInputField().sendKeys(legacyID);
    }

    async selectTaxType(taxType:InsuranceProviderTaxType) {
        await this.getAddUpdateInsuranceProviderFormPO().getTaxTypeDropdown().selectOption(taxType);
    }

    async fillNPI(npi:number) {
        await this.getAddUpdateInsuranceProviderFormPO().getNpiInputField().sendKeys(npi);
    }

    async fillWebsite(website:string) {
        await this.getAddUpdateInsuranceProviderFormPO().getWebsiteInputField().sendKeys(website);
    }

    async fillProviderNumber(providerNumber:number) {
        await this.getAddUpdateInsuranceProviderFormPO().getProviderNumberInputField().sendKeys(providerNumber);
    }

    async checkMedicareFeeScheduleCheckbox() {
        await this.getAddUpdateInsuranceProviderFormPO().getMedicareFeeScheduleCheckbox().click();
    }

    async checkBranchOfficesSelectAllCheckbox() {
        await this.getAddUpdateInsuranceProviderFormPO().getBranchOfficesSelectAllCheckbox().click();
    }

    //Billing Address 

    //Verification Info

    //1500 Claim Forms 

    //Commercial Eligibility 

    //eClaims Carrier 

    //Insurance Note 
    async toggleInsuranceNote() {
        await this.getAddUpdateInsuranceProviderFormPO().getInsuranceNoteToggle().click();
    }

    async fillNotes(notes:string) {
        await this.getAddUpdateInsuranceProviderFormPO().getNotesTextarea().sendKeys(notes);
    }

    //Contact Info
    async toggleContactInfo() {
        await this.getAddUpdateInsuranceProviderFormPO().getContactInfoToggle().click();
    }

    async fillPhoneNumber(phoneNumber:number) {
        await this.getAddUpdateInsuranceProviderFormPO().getPhoneNumberInputField().sendKeys(phoneNumber);
    }

    async fillPhoneExtNumber(phoneExtNumber:number) {
        await this.getAddUpdateInsuranceProviderFormPO().getPhoneExtNumberInputField().sendKeys(phoneExtNumber);
    }

    async fillEmailID(email:string) {
        await this.getAddUpdateInsuranceProviderFormPO().getEmailInputField().sendKeys(email);
    }

    //Workflow methods
    async fillInsuranceProviderManagementInfo(insuranceProviderInfo:InsuranceProviderInfo) {
        if(insuranceProviderInfo.getProviderName() != null) {
            await this.fillProviderName(insuranceProviderInfo.getProviderName());
        }

        if(insuranceProviderInfo.getGroup() != null) {
            await this.selectGroup(insuranceProviderInfo.getGroup());
        }

        if(insuranceProviderInfo.getStatus() != null) {
            await this.selectStatus(insuranceProviderInfo.getStatus());
        }

        if(insuranceProviderInfo.getLegacyId() != null) {
            await this.fillLegacyID(insuranceProviderInfo.getLegacyId());
        }

        if(insuranceProviderInfo.getTaxType() != null) {
            await this.selectTaxType(insuranceProviderInfo.getTaxType());
        }

        if(insuranceProviderInfo.getNpi() != null) {
            await this.fillNPI(insuranceProviderInfo.getNpi());
        }

        if(insuranceProviderInfo.getWebsite() != null) {
            await this.fillWebsite(insuranceProviderInfo.getWebsite());
        }

        if(insuranceProviderInfo.getProviderNumber() != null) {
            await this.fillProviderNumber(insuranceProviderInfo.getProviderNumber());
        }

        if(insuranceProviderInfo.getMedicareFeeScheduleCheckbox() != null) {
            if(insuranceProviderInfo.getMedicareFeeScheduleCheckbox() == true) {
                await this.checkMedicareFeeScheduleCheckbox();
            }
        }

        if(insuranceProviderInfo.getBranchOfficeSelectAllCheckbox() != null) {
            if(insuranceProviderInfo.getBranchOfficeSelectAllCheckbox() == true) {
                await this.checkBranchOfficesSelectAllCheckbox();
            }
        }
    }

    async fillInsuranceProviderInsuranceNote(insuranceProviderInfo:InsuranceProviderInfo) {
        await this.toggleInsuranceNote();
        
        if(insuranceProviderInfo.getNotes() != null) {
            await this.fillNotes(insuranceProviderInfo.getNotes());
        }
    }

    async fillInsuranceProviderContactInfo(insuranceProviderInfo:InsuranceProviderInfo) {
        await this.toggleContactInfo();

        if(insuranceProviderInfo.getPhoneNumber() != null) {
            await this.fillPhoneNumber(insuranceProviderInfo.getPhoneNumber());
        }

        if(insuranceProviderInfo.getPhoneExtNumber() != null) {
            await this.fillPhoneExtNumber(insuranceProviderInfo.getPhoneExtNumber());
        }

        if(insuranceProviderInfo.getEmail() != null) {
            await this.fillEmailID(insuranceProviderInfo.getEmail());
        }
    }

    //Footer
    async submit() {
        await this.getAddUpdateInsuranceProviderFormPO().getSubmitButton().click();
    }

    async update() {
        await this.getAddUpdateInsuranceProviderFormPO().getUpdateButton().click();
    }
}