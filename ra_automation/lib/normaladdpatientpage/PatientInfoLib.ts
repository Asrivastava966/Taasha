import { browser } from "protractor";
import { PatientStatus } from "../../data/enums/PatientStatus";
import { Gender } from "../../data/enums/Gender";
import { PatientInfo } from "../../data/info/PatientInfo";
import { PatientInfoPO } from "../../po/normaladdpatientpage/PatientInfoPO";

export class PatientInfoLib{
    patientInfoPO:PatientInfoPO;

    constructor(){
        this.patientInfoPO = new PatientInfoPO();
    }

    getPatientInfoPO(){
        return this.patientInfoPO;
    }

    async save() {
        browser.logger.info("Saving...");
        await this.getPatientInfoPO().getSaveButton().click(); 
    }

    async getSuccessMessage() {
        browser.logger.info(await this.getPatientInfoPO().getSuccessMessage().getText());
        return await this.getPatientInfoPO().getSuccessMessage().getText();
    }

    async getValidationMessage() {
        return await this.getPatientInfoPO().getValidationMessage().getText();
    }

    //General Info
    async fillFirstName(firstName:string) {
        await this.getPatientInfoPO().getFirstNameInputField().sendKeys(firstName);
    }

    async getFirstNameRequiredFieldError(){
        return await this.getPatientInfoPO().getFirstNameRequiredFieldError().getText();
    }

    async fillMI(mi:string) {
        await this.getPatientInfoPO().getMIInputField().sendKeys(mi);
    }

    async fillLastName(lastName:string) {
        await this.getPatientInfoPO().getLastNameInputField().sendKeys(lastName);
    }

    async getLastNameRequiredFieldError(){
        return await this.getPatientInfoPO().getLastNameRequiredFieldError().getText();
    }

    async selectBirthDate(date:Date, isDatePickerSmall:boolean) {
        await this.getPatientInfoPO().getBirthdateInputField().selectDate(date, isDatePickerSmall);
    }

    async getBirthDateRequiredFieldError(){
        return await this.getPatientInfoPO().getBirthDateRequiredFieldError().getText();
    }

    async selectStatus(status:PatientStatus) {
        await this.getPatientInfoPO().getStatusDropdown().selectOption(status);
    }

    async getPatientStatusDropdownRequiredFieldError(){
        return await this.getPatientInfoPO().getStatusDropdownRequiredFieldError().getText();
    }

    async selectBranchOffice(branchOffice:string) {
        await this.getPatientInfoPO().getBranchOfficeDropdown().selectOption(branchOffice);
    }

    async getBranchOfficeRequiredFieldError(){
        return await this.getPatientInfoPO().getBranchOfficeRequiredFieldError().getText();
    }

    async fillLegacyID(legacyID:string) {
        await this.getPatientInfoPO().getLegacyIDInputField().sendKeys(legacyID);
    }

    async fillCustom(custom:string) {
        await this.getPatientInfoPO().getCustomInputField().sendKeys(custom);
    }

    async selectGender(gender:Gender) {
        await this.getPatientInfoPO().getGenderDropdown().selectOption(gender);
    }

    async getGenderDropdownRequiredFieldError(){
        return await this.getPatientInfoPO().getGenderDropdownRequiredFieldError().getText();
    }

    async fillEmail(email:string) {
        await this.getPatientInfoPO().getEmailInputField().sendKeys(email);
    }

    //Billing Address 
    async fillAddressOne(addressOne:string) {
        await this.getPatientInfoPO().getAddressOneInputField().sendKeys(addressOne);
    }

    async fillAddressTwo(addressTwo:string) {
        await this.getPatientInfoPO().getAddressTwoInputField().sendKeys(addressTwo);
    }

    async fillCity(city:string) {
        await this.getPatientInfoPO().getCityInputField().sendKeys(city);
    }

    async selectState(state:string) {
        await this.getPatientInfoPO().getStateSelectDropdown().selectOption(state);
    }

    async fillZipCode(zipCode:string) {
        await this.getPatientInfoPO().getZipCodeInputField().sendKeys(zipCode);
    }

    async selectTimeZone(timeZone:string) {
        await this.getPatientInfoPO().getTimezoneSelectDropdown().selectOption(timeZone);
    }

    //Delivery Address 
    async toggleDeliveryAddress() {
        await this.getPatientInfoPO().getToggleDeliveryAddress().click();
    }
    
    async checkCommonAddressCheckbox(commonAddressCheckboxValue:boolean) {
        await this.getPatientInfoPO().getCommonAddressCheckbox().click();
    }

    /**
     * Workflow methods
     */
    async fillPatientInfo(patientInfo:PatientInfo) {
        browser.logger.info("Filling in the -Patient Info- section of: " + patientInfo.getLastName() + ", " + patientInfo.getFirstName());
        let isDatePickerSmall = true;

        //Fill the required fields
        if(patientInfo.getFirstName() != null) {
            await this.fillFirstName(patientInfo.getFirstName());
        }

        if(patientInfo.getLastName() != null) {
            await this.fillLastName(patientInfo.getLastName());
        }
        
        if(patientInfo.getBirthDate() != null) {
            await this.selectBirthDate(patientInfo.getBirthDate(), isDatePickerSmall);
        }

        if(patientInfo.getStatus() != null) {
            await this.selectStatus(patientInfo.getStatus());
        }

        if(patientInfo.getBranchOffice() != null) {
            await this.selectBranchOffice(patientInfo.getBranchOffice());
        }

        if(patientInfo.getGender() != null) {
            await this.selectGender(patientInfo.getGender());
        }

        //Fill the non-mandatory fields : General Info
        if(patientInfo.getMI() != null) {
            await this.fillMI(patientInfo.getMI());
        }

        if(patientInfo.getLegacyId() != null) {
            await this.fillLegacyID(patientInfo.getLegacyId());
        }
        
        if(patientInfo.getCustom() != null) {
            await this.fillCustom(patientInfo.getCustom());
        }

        if(patientInfo.getEmail() != null) {
            await this.fillEmail(patientInfo.getEmail());
        }

        //Fill the non-mandatory fields : Billing Address
        if(patientInfo.getAddressOne() != null) {
            await this.fillAddressOne(patientInfo.getAddressOne());
        }

        if(patientInfo.getAddressTwo() != null) {
            await this.fillAddressTwo(patientInfo.getAddressTwo());
        }

        if(patientInfo.getCity() != null) {
            await this.fillCity(patientInfo.getCity());
        }

        if(patientInfo.getState() != null) {
            await this.selectState(patientInfo.getState());
        }

        if(patientInfo.getZipCode() != null) {
            await this.fillZipCode(patientInfo.getZipCode());
        }

        if(patientInfo.getTimeZone() != null) {
            await this.selectTimeZone(patientInfo.getTimeZone());
        }

        //Fill the non-mandatory fields : Delivery Address
        if(patientInfo.getCommonAddressCheckboxValue() != null) {
            await this.toggleDeliveryAddress();
            await this.checkCommonAddressCheckbox(patientInfo.getCommonAddressCheckboxValue());
        }
    }

    //Existing Patient warning modal dialog 
    async closeModal() {
        await this.getPatientInfoPO().getExistingPatientModalDialog().closeModal();
    }

    async getPatientName(rowNumber:number) {
        return await this.getPatientInfoPO().getExistingPatientModalDialog().getPatientName(rowNumber);
    }

    async getDOB(rowNumber:number) {
        return await this.getPatientInfoPO().getExistingPatientModalDialog().getDOB(rowNumber);
    }
}