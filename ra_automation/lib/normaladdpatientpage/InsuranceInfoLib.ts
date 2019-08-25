import { by, browser,WebDriver } from "protractor";
import { InsuranceType } from "../../data/enums/InsuranceType";
import { InsurancePlanType } from "../../data/enums/InsurancePlanType";
import { InsuranceInfoRelationship } from "../../data/enums/InsuranceInfoRelationship";
import { InsuranceInfo } from "../../data/info/InsuranceInfo";
import { InsuranceInfoPO } from "../../po/normaladdpatientpage/InsuranceInfoPO";
import { Gender } from "../../data/enums/Gender";
import { CommonUtils } from "../../utils/CommonUtils";
import { WebdriverBy } from "protractor/built/locators";
let commonUtils:CommonUtils = new CommonUtils();

export class InsuranceInfoLib{
    private insuranceInfoPO:InsuranceInfoPO;

    constructor(){
        this.insuranceInfoPO = new InsuranceInfoPO();
    }

    getInsuranceInfoPO(){
        return this.insuranceInfoPO;
    }
    async navigateToAddInsuranceForm() {
        await this.getInsuranceInfoPO().getAddInsuranceButton().click();
    }

    async getValidationMessage() {
        return await this.getInsuranceInfoPO().getValidationMessage().getText();
    }

    async selectInsuranceType(insuranceType:InsuranceType) {
        await this.getInsuranceInfoPO().getInsuranceTypeDropdown().selectOption(insuranceType);
    }

    async selectProvider(insuranceProvider:string) {
        await this.getInsuranceInfoPO().getProviderDropdown().selectOption(insuranceProvider);
    }

    async getProviderRequirdFieldError() {
        return await this.getInsuranceInfoPO().getProviderRequiredFieldError().getText();
    }

    async fillPolicyNumber(policyNumber:number) {
        await this.getInsuranceInfoPO().getPolicyNumberInputField().sendKeys(policyNumber);
    }

    async getPolicyNumberRequiredFieldError() {
        return await this.getInsuranceInfoPO().getPolicyNumberRequiredFieldError().getText();
    }

    async fillGroupNumber(groupNumber:number) {
        await this.getInsuranceInfoPO().getGroupNumberInputField().sendKeys(groupNumber);
    }

    async selectPlanType(planType:InsurancePlanType) {
        await this.getInsuranceInfoPO().getPlanTypeDropdown().selectOption(planType);
    }

    async selectRelationship(relationship:InsuranceInfoRelationship) {
        await this.getInsuranceInfoPO().getRelationshipDropdown().selectOption(relationship);
    }

    async selectStartDate(startDate:Date) {
        let isDatePickerSmall = false;
        await this.getInsuranceInfoPO().getStartdateInputField().selectDate(startDate, isDatePickerSmall);
    }

    async getStartDateRequiredFieldError() {
        return await this.getInsuranceInfoPO().getStartDateRequiredFieldError().getText();
    }

    async selectEndDate(endDate:Date) {
        let isDatePickerSmall = false;
        await this.getInsuranceInfoPO().getEndDateInputField().selectDate(endDate, isDatePickerSmall);
    }

    // insured Detail
    async selectLastName(lastName:string){
        await this.getInsuranceInfoPO().getLastnameInputField().sendKeys(lastName)
    }
    async selectFirstName(firstName:string){
        await this.getInsuranceInfoPO().getFirstNameInputField().sendKeys(firstName)
    }
    async selectBirthDate(birthDate:Date){
        //let isDatePickerSmall = false;
        //await this.getInsuranceInfoPO().getBirthDateInputField().selectDate(birthDate, isDatePickerSmall)
        await this.getInsuranceInfoPO().getBirthDateInputField().selectToday()
    }
    async selectGender(gender:Gender){
        await this.getInsuranceInfoPO().getGenderDropDown().selectOption(gender)
    }
//
    async save() {
        browser.logger.info("Saving...");
        await this.getInsuranceInfoPO().getSaveButton().click();
    }

    async update() {
        browser.logger.info("Updating...");
        await this.getInsuranceInfoPO().getUpdateButton().click();
    }

    async cancel() {
        await this.getInsuranceInfoPO().getCancelButton().click();
    }

    /**
     * Workflow methods
     */
    async addInsurance(insuranceInfo:InsuranceInfo)
     {
        browser.logger.info("Filling in the -Insurance Info- section for Insurance Type : " + insuranceInfo.getInsuranceType());

        if(insuranceInfo.getInsuranceType() != null) {
            await this.selectInsuranceType(insuranceInfo.getInsuranceType()); 
        }
        
        if(insuranceInfo.getProvider() != null) {
            await this.selectProvider(insuranceInfo.getProvider()); 
        }

        if(insuranceInfo.getPolicyNumber() != null) {
            await this.fillPolicyNumber(insuranceInfo.getPolicyNumber()); 
        }

        if(insuranceInfo.getGroupNumber() != null) {
            await this.fillGroupNumber(insuranceInfo.getGroupNumber());
        }
        if(insuranceInfo.getPlanType() != null) {
            await this.selectPlanType(insuranceInfo.getPlanType());
        }
        if(insuranceInfo.getStartDate() != null) {
            await this.selectStartDate(insuranceInfo.getStartDate()); 
        }
        if(insuranceInfo.getRelationship() != null) {
            await this.selectRelationship(insuranceInfo.getRelationship())
               // return this.getInsuranceInfoPO().getRelationshipDropdownText().getText()
              //await console.log(insuranceInfo.getRelationship() + " Ashish 123")
              //var select= await insuranceInfo.getRelationship()
             await browser.sleep(1000)
             if(insuranceInfo.getRelationship() != "Self"){
                if(insuranceInfo.getLastName() !=null){
                    await this.selectLastName(insuranceInfo.getLastName());
                }
                if(insuranceInfo.getFirstName() !=null){
                    await this.selectFirstName(insuranceInfo.getFirstName());
                }
                if (insuranceInfo.getBirthdate() !=null){
                    await this.selectBirthDate(insuranceInfo.getBirthdate());
                }
                if (insuranceInfo.getGender()!=null){
                    await this.selectGender(insuranceInfo.getGender());
                }

             }   
        }

    }

    //Policy Tables
    private insuranceTypeColumnIndex = 1;
    private insuranceNameColumnIndex = 2;
    private policyNoColumnIndex = 3;
    private groupNumberColumnIndex = 4;
    private statusColumnIndex = 5;
    private planTypeColumnIndex = 6;
    private startDateColumnIndex = 7;
    private endDateColumnIndex = 8;
    private relationshipColumnIndex = 9;

    getActivePolicyTable() {
        return this.getInsuranceInfoPO().getActivePolicyTable();
    }

    getInactivePolicyTable() {
        return this.getInsuranceInfoPO().getInactivePolicyTable();
    }

    async updateInsuranceFromActivePolicyTable(rowNumber:number) {
        await this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.insuranceTypeColumnIndex).element(by.tagName('a')).click();
    }

    async getInsuranceTypeValueFromActivePolicyTable(rowNumber:number) {
        return await this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.insuranceTypeColumnIndex).element(by.tagName('a')).getText();
    }

    async getInsuranceNameFromPolicyTable(rowNumber:number) {
        return await this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.insuranceNameColumnIndex).element(by.tagName('a')).getText();
    }

    async getPolicyNoFromPolicyTable(rowNumber:number) {
        let policyNo = await this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.policyNoColumnIndex).getText();
        return +policyNo;
    }

    async getGroupNumberFromPolicyTable(rowNumber:number) { 
        let groupNumber = await this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.groupNumberColumnIndex).getText();
        return +groupNumber;
    }

    async getStatusFromPolicyTable(rowNumber:number) { 
        return await this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.statusColumnIndex).element(by.tagName('span')).getAttribute('ng-if');
    }

    async getPlanTypeFromPolicyTable(rowNumber:number) { 
        return await this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.planTypeColumnIndex).getText();
    }

    async getStartDateFromPolicyTable(rowNumber:number) {
        return await this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.startDateColumnIndex).getText();
    }

    async getEndDateFromPolicyTable(rowNumber:number) { 
        return await this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.endDateColumnIndex).getText();
    }

    async getRelationshipFromPolicyTable(rowNumber:number) {
        return await this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.relationshipColumnIndex).getText();
    }
}