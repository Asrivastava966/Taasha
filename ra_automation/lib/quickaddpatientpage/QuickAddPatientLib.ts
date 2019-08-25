import { browser } from "protractor";
import { QuickAddPatientPO } from "../../po/quickaddpatientpage/QuickAddPatientPO";
import { PatientInfo } from "../../data/info/PatientInfo";
import { Gender } from "../../data/enums/Gender";
import { PatientStatus } from "../../data/enums/PatientStatus";
import { WaitUtils } from "../../utils/WaitUtils";
import { InsuranceInfo } from "../../data/info/InsuranceInfo";
import { InsuranceType } from "../../data/enums/InsuranceType";
import { InsurancePlanType } from "../../data/enums/InsurancePlanType";
import { InsuranceInfoRelationship } from "../../data/enums/InsuranceInfoRelationship";
import { OrderType } from "../../data/enums/OrderType";
import { OrderWorkflowStatus } from "../../data/enums/OrderWorkflowStatus";
import { OrderInfo } from "../../data/info/OrderInfo";
import { ClinicalInfo } from "../../data/info/ClinicalInfo";

export class QuickAddPatientLib{
    waitUtils:WaitUtils;
    quickAddPatientPO: QuickAddPatientPO;

    constructor(){
        this.waitUtils = new WaitUtils();
        this.quickAddPatientPO = new QuickAddPatientPO();
    }

    getWaitUtils(){
        return this.waitUtils;
    }

    getQuickAddPatientPO(){
        return this.quickAddPatientPO;
    }

    //header
    getModalTitle(){
        return this.quickAddPatientPO.getModalTitle().getText();
    }

    async closeModal(){
        browser.logger.info("Closing the -Quick Add Patient- modal...");
        await this.getQuickAddPatientPO().getCloseButton().click();
    }

    async getValidationMessage() {
        return await this.getQuickAddPatientPO().getValidationMessage().getText();
    }

    //form- Patient Info
    async fillFirstName(firstName: string){
        await this.getQuickAddPatientPO().getFirstNameInputField().sendKeys(firstName);
    }

    async getFirstNameRequiredFieldError(){
        return await this.getQuickAddPatientPO().getFirstNameRequiredFieldError().getText();
    }

    async fillLastName(lastName: string){
        await this.getQuickAddPatientPO().getLastNameInputField().sendKeys(lastName);
    }

    async getLastNameRequiredFieldError(){
        return await this.getQuickAddPatientPO().getLastNameRequiredFieldError().getText();
    }

    async fillMI(mi: string){
        await this.getQuickAddPatientPO().getMIInputField().sendKeys(mi);
    }

    async selectBirthDate(birthDate: Date, isDatePickerSmall: boolean){
        await this.getQuickAddPatientPO().getBirthDateInputField().selectDate(birthDate, isDatePickerSmall);
    }

    async getBirthDateRequiredFieldError(){
        return await this.getQuickAddPatientPO().getBirthDateRequiredFieldError().getText();
    }

    async selectGender(gender: Gender){
        await this.getQuickAddPatientPO().getGenderDropdown().selectOption(gender);
    }

    async getGenderDropdownRequiredFieldError(){
        return await this.getQuickAddPatientPO().getGenderDropdownRequiredFieldError().getText();
    }

    async selectPatientStatus(status: PatientStatus){
        await this.getQuickAddPatientPO().getStatusDropdown().selectOption(status);
    }

    async getPatientStatusDropdownRequiredFieldError(){
        return await this.getQuickAddPatientPO().getStatusDropdownRequiredFieldError().getText();
    }

    async selectBranchOffice(branchOffice: string){
        await this.getQuickAddPatientPO().getBranchOfficeDropdown().selectOption(branchOffice);
    }

    async getBranchOfficeRequiredFieldError(){
        return await this.getQuickAddPatientPO().getBranchOfficeRequiredFieldError().getText();
    }

    async fillEmail(email:string){
        await this.getQuickAddPatientPO().getEmailInputField().sendKeys(email);
    }

    //Existing Patient found: Warning 
    async toggleExistingPatientFoundWarning() {
        await this.getQuickAddPatientPO().getExistingPatientFoundWarningToggle().click();
    }

    //form - Insurance Info 
    async toggleInsuranceInfo(){
        await this.getQuickAddPatientPO().getInsuranceInfoToggle().click();
    }

    async selectInsuranceType(insuranceType:InsuranceType) {
        await this.getQuickAddPatientPO().getInsuranceTypeDropdown().selectOption(insuranceType);
    }

    async selectProvider(insuranceProvider:string) {
        await this.getQuickAddPatientPO().getProviderDropdown().selectOption(insuranceProvider);
    }

    async fillPolicyNumber(policyNumber:number) {
        await this.getQuickAddPatientPO().getPolicyNumberInputField().sendKeys(policyNumber);
    }

    async fillGroupNumber(groupNumber:number) {
        await this.getQuickAddPatientPO().getGroupNumberInputField().sendKeys(groupNumber);
    }

    async selectPlanType(planType:InsurancePlanType) {
        await this.getQuickAddPatientPO().getPlanTypeDropdown().selectOption(planType);
    }

    async selectRelationship(relationship:InsuranceInfoRelationship) {
        await this.getQuickAddPatientPO().getRelationshipDropdown().selectOption(relationship);
    }

    async selectStartDate(startDate:Date) {
        let isDatePickerSmall = false;
        await this.getQuickAddPatientPO().getStartdateInputField().selectDate(startDate, isDatePickerSmall);
    }

    async selectEndDate(endDate:Date) {
        let isDatePickerSmall = false;
        await this.getQuickAddPatientPO().getEndDateInputField().selectDate(endDate, isDatePickerSmall);
    }

    //form - Doctor Info 
    async toggleDoctorInfo(){
        await this.getQuickAddPatientPO().getDoctorInfoToggle().click();
    }

    async selectOrderingDoctor(orderingDoctorName:string) {
        await this.getQuickAddPatientPO().getOrderingDoctorDropdown().selectDropdownMenuOptionByLinkText(orderingDoctorName);
    }

    async selectPrimaryDoctor(primaryDoctorName:string) {
        await this.getQuickAddPatientPO().getPrimaryDoctorDropdown().selectDropdownMenuOptionByLinkText(primaryDoctorName);
    }

    async selectFacility(facility:string) {
        await this.getQuickAddPatientPO().getFacilityDropdown().selectOption(facility);
    }

    async selectSalesRep(salesRepName:string) {
        await this.getQuickAddPatientPO().getSalesRepDropdown().selectOption(salesRepName);
    }

    //form - Order Info 
    async toggleOrderInfo(){
        await this.getQuickAddPatientPO().getOrderInfoToggle().click();
    }

    async getDisplayedOrderType() {
        return await this.getQuickAddPatientPO().getOrderTypeDropdown().getDropdownElement().getAttribute('value');
    }

    async selectOrderType(orderType:OrderType) {
        await this.getQuickAddPatientPO().getOrderTypeDropdown().selectOption(orderType);
    }

    async getDisplayedWorkflowStatus() {
        return await this.getQuickAddPatientPO().getWorkflowStatusDropdown().getDropdownElement().getAttribute('value');
    }

    async selectWorkflowStatus(workflowStatus:OrderWorkflowStatus) {
        await this.getQuickAddPatientPO().getWorkflowStatusDropdown().selectOption(workflowStatus);
    }

    async getDisplayedOrderOwner() {
        return await this.getQuickAddPatientPO().getOrderOwnerDropdown().getDropdownElement().getAttribute('value');
    }

    async selectOrderOwner(orderOwnerName:string) {
        await this.getQuickAddPatientPO().getOrderOwnerDropdown().selectOption(orderOwnerName);
    }

    async getDisplayedAssignTo() {
        return await this.getQuickAddPatientPO().getAssignToDropdown().getDropdownElement().getAttribute('value');
    }

    async selectAssignTo(assigneeName:string) {
        await this.getQuickAddPatientPO().getAssignToDropdown().selectOption(assigneeName);
    }

    async getDisplayedBranch() {
        return await this.getQuickAddPatientPO().getBranchDropdown().getDropdownElement().getAttribute('value');
    }

    async selectBranch(branchName:string) {
        await this.getQuickAddPatientPO().getBranchDropdown().selectOption(branchName);
    }

    async selectBillingOrSetupDateAsToday() {
        await this.getQuickAddPatientPO().getBillingOrSetupDateCalenderInputField().selectToday();
    }

    //footer 
    async save(){
        browser.logger.info("Saving -Patient Info- form...");
        await this.getQuickAddPatientPO().getSaveButton().click();
    }

    async cancel(){
        await this.getQuickAddPatientPO().getCancelButton().click();
    }

    /**
     * Workflow methods
     */
    async fillPatientInfo(patientInfo: PatientInfo){
        browser.logger.info("Filling in the -Patient Info- section of: " + patientInfo.getLastName() + ", " + patientInfo.getFirstName());

        if(patientInfo.getFirstName() != null) {
            await this.fillFirstName(patientInfo.getFirstName());
        }

        if(patientInfo.getLastName() != null) {
            await this.fillLastName(patientInfo.getLastName());
        }

        if(patientInfo.getBirthDate() != null) {
            let isDatePickerSmall = false;
            await this.selectBirthDate(patientInfo.getBirthDate(), isDatePickerSmall);
        }

        if(patientInfo.getGender() != null) {
            await this.selectGender(patientInfo.getGender());
        }

        if(patientInfo.getStatus() != null) {
            await this.selectPatientStatus(patientInfo.getStatus());
        }

        if(patientInfo.getBranchOffice() != null) {
            await this.selectBranchOffice(patientInfo.getBranchOffice());
        }

        if(patientInfo.getMI() != null) {
            await this.fillMI(patientInfo.getMI());
        }

        if(patientInfo.getEmail() != null) {
            await this.fillEmail(patientInfo.getEmail());
        }
    }

    async fillInsuranceInfo(insuranceInfo:InsuranceInfo){
        browser.logger.info("Filling in the -Insurance Info- section for Insurance Type : " + insuranceInfo.getInsuranceType());
    
        await this.toggleInsuranceInfo();

        if(insuranceInfo.getInsuranceType() != null) {
            await this.selectInsuranceType(insuranceInfo.getInsuranceType()); 
        }
            
        if(insuranceInfo.getProvider() != null) {
            await this.selectProvider(insuranceInfo.getProvider()); 
        }
    
        if(insuranceInfo.getPolicyNumber() != null) {
            await this.fillPolicyNumber(insuranceInfo.getPolicyNumber()); 
        }
    
        if(insuranceInfo.getRelationship() != null) {
            await this.selectRelationship(insuranceInfo.getRelationship()); 
        }
    
        if(insuranceInfo.getStartDate() != null) {
            await this.selectStartDate(insuranceInfo.getStartDate()); 
        }
            
        if(insuranceInfo.getGroupNumber() != null) {
            await this.fillGroupNumber(insuranceInfo.getGroupNumber());
        }
            
        if(insuranceInfo.getPlanType() != null) {
            await this.selectPlanType(insuranceInfo.getPlanType());
        }
    }

    async fillOrderInfo(orderInfo:OrderInfo) {
        browser.logger.info("Filling in the -Order Info- section for Order Type : " + orderInfo.getOrderType());
    
        await this.toggleOrderInfo();

        if(orderInfo.getOrderType() != null) {
            await this.selectOrderType(orderInfo.getOrderType());
        }

        if(orderInfo.getBillingOrSetupDate() != null) {
            await this.selectBillingOrSetupDateAsToday();
        }
    }

    async fillDoctorInfo(clinicalInfo:ClinicalInfo) {
        await this.toggleDoctorInfo();

        if(clinicalInfo.getOrderingDoctorName() != null) {
            await this.selectOrderingDoctor(clinicalInfo.getOrderingDoctorName());
        }

        if(clinicalInfo.getPrimaryDoctorName() != null) {
            await this.selectPrimaryDoctor(clinicalInfo.getPrimaryDoctorName());
        }

        if(clinicalInfo.getFacility() != null) {
            await this.selectFacility(clinicalInfo.getFacility());
        }

        if(clinicalInfo.getSalesRepName() != null) {
            await this.selectSalesRep(clinicalInfo.getSalesRepName());
        }
    }

    //Existing Patient Grid 
    async getPatientName(rowNumber:number) {
        return await this.getQuickAddPatientPO().getExistingPatientGrid().getPatientName(rowNumber);
    }

    async getDOB(rowNumber:number) {
        return await this.getQuickAddPatientPO().getExistingPatientGrid().getDOB(rowNumber);
    }
}