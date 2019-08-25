import { by } from 'protractor';
import { FindPatientPO } from "../../po/findpatientpage/FindPatientPO";

export class FindPatientLib{
    findPatientPO:FindPatientPO;

    constructor(){
        this.findPatientPO = new FindPatientPO();
    }

    getFindPatientPO(){
        return this.findPatientPO;
    }

    async searchPatientWithLastName(lastName:string){
        await this.getFindPatientPO().getLastNameInputField().sendKeys(lastName);
    }

    async searchPatientWithFirstName(firstName:string){
        await this.getFindPatientPO().getFirstNameInputField().sendKeys(firstName);
    }

    async searchPatientWithBirthDate(birthDate:Date){
        let isDatePickerSmall:boolean = false;
        await this.getFindPatientPO().getBirthDateInputField().selectDate(birthDate, isDatePickerSmall);
    }

    async searchPatientWithPhoneNumber(phoneNumber:string){
        await this.getFindPatientPO().getPhoneInputField().sendKeys(phoneNumber);
    }

    async searchPatientWithEmail(email:string){
        await this.getFindPatientPO().getEmailInputField().sendKeys(email);
    }

    async searchPatientWithAddressOne(addressOne:string){
        await this.getFindPatientPO().getAddressOneInputField().sendKeys(addressOne);
    }

    async searchPatientWithAddressTwo(addressTwo:string){
        await this.getFindPatientPO().getAddressTwoInputField().sendKeys(addressTwo);
    }

    async searchPatientWithCity(city:string){
        await this.getFindPatientPO().getCityInputField().sendKeys(city);
    }

    searchPatientWithState(state:string){
        //component
    }

    async searchPatientWithZipCode(zipCode:string){
        await this.getFindPatientPO().getZipCodeInputField().sendKeys(zipCode);
    }

    searchPatientWithStatus(status:string){
        //component
    }

    async searchPatientWithOrderNumber(orderNumber:string){
        await this.getFindPatientPO().getOrderNumberInputField().sendKeys(orderNumber);
    }

    async searchPatientWithLegacyID(legacyID:string){
        await this.getFindPatientPO().getLegacyIDInputField().sendKeys(legacyID);
    }

    async searchPatientWithPatientID(patientID:string){
        await this.getFindPatientPO().getPatientIdInputField().sendKeys(patientID);
    }

    searchPatientWithBranchOffices(branchOffice:string){
        //component
    }

    //search
    async search(){
        await this.getFindPatientPO().getSearchButton().click();
    }

    //search results
    async getNoSearchCriteriaValidationMessage(){
        return await this.getFindPatientPO().getNoSearchCriteriaValidation().getText();
    }

    //Existing Patient(s) table 
    private lastNameColumnIndex = 1;
    private firstNameColumnIndex = 2;
    private dobColumnIndex = 3;
    private emailColumnIndex = 9;

    async getLastNameValue(rowNumber:number){
        return await this.getFindPatientPO().getExistingPatientsTable().getTableBodyRowCell(rowNumber, this.lastNameColumnIndex).getText();
    }

    getFirstNameLink(rowNumber:number){
        return this.getFindPatientPO().getExistingPatientsTable().getTableBodyRowCell(rowNumber, this.firstNameColumnIndex).element(by.tagName('a'));
    }

    async getFirstNameValue(rowNumber:number){
        return await this.getFindPatientPO().getExistingPatientsTable().getTableBodyRowCell(rowNumber, this.firstNameColumnIndex).element(by.tagName('a')).getText();
    }

    async getDOBColumnValue(rowNumber:number){
        return await this.getFindPatientPO().getExistingPatientsTable().getTableBodyRowCell(rowNumber, this.dobColumnIndex).getText();
    }

    async getEmailValue(rowNumber:number){
        return await this.getFindPatientPO().getExistingPatientsTable().getTableBodyRowCell(rowNumber, this.emailColumnIndex).getText();
    }
}