import { element, by } from "protractor";
import { SelectDropdown } from "../../component/comp/SelectDropdown";
import { DatePicker } from "../../component/comp/DatePicker";
import { CustomDropdownMenu } from "../../component/comp/CustomDropdownMenu";
import { CustomDropdownMenuOrigin } from "../../data/enums/CustomDropdownMenuOrigin";
import { ExistingPatientGrid } from "../../component/comp/ExistingPatientGrid";

export class QuickAddPatientPO{

    //header
    private static modalHeader = element(by.className("modal-header")); 
    private static modalTitle = element(by.className("modal-title")); 
    private static closeButton = element(by.className("close"));

    getModalHeader(){
        return QuickAddPatientPO.modalHeader;
    }

    getModalTitle(){
        return QuickAddPatientPO.modalTitle;
    }

    getCloseButton(){
        return QuickAddPatientPO.closeButton;
    }

    private static validationMessage = element(by.className('alert')).element(by.tagName('div'));
    getValidationMessage() {
        return QuickAddPatientPO.validationMessage;
    }

    //form - Patient Info
    private static firstNameInputField = element(by.name("inputfirstNm"));
    private static miInputField = element(by.css("[data-ng-model='payload.patient.mi']"));
    private static lastNameInputField = element(by.name("inputlastNm"));
    private static birthDateInputField = element(by.id("inputBirthDate"));
    private static genderDropdown = element(by.id("inputGender"));
    private static statusDropdown = element(by.id("inputStatus"));
    private static branchOfficeDropdown = element(by.name("inputBranchOffice"));
    private static emailInputField = element(by.id('inputEmail'));

    getFirstNameInputField(){
        return QuickAddPatientPO.firstNameInputField;
    }

    getMIInputField(){
        return QuickAddPatientPO.miInputField;
    }

    getLastNameInputField(){
        return QuickAddPatientPO.lastNameInputField;
    }

    getBirthDateInputField(){
        return new DatePicker(QuickAddPatientPO.birthDateInputField);
    }

    getGenderDropdown(){
        return new SelectDropdown(QuickAddPatientPO.genderDropdown);
    }

    getStatusDropdown(){
        return new SelectDropdown(QuickAddPatientPO.statusDropdown);
    }

    getBranchOfficeDropdown(){
        return new SelectDropdown(QuickAddPatientPO.branchOfficeDropdown);
    }

    getEmailInputField(){
        return QuickAddPatientPO.emailInputField;
    }

    //Existing Patient found: Warning 
    private static existingPatientWarningToggle = element(by.css('[ng-click*=\"toggleExistancePatient\"]'));
    getExistingPatientFoundWarningToggle() {
        return QuickAddPatientPO.existingPatientWarningToggle;
    }

    //form - Insurance Info 
    private static insuranceInfoToggle = element(by.css("[ng-click*='InsuranceInfo']"));

    getInsuranceInfoToggle(){
        return QuickAddPatientPO.insuranceInfoToggle;
    }

    private static insuranceTypeDropdown = element(by.id('inputInsuranceType'));
    private static providerDropdown = element(by.id('inputprovider'));
    private static policyNumberInputField = element(by.id('inputPolicyNum'));
    private static groupNumberInputField = element(by.id('inputGroupNum'));
    private static planTypeDropdown = element(by.id('inputInsPlanType'));
    private static relationshipDropdown = element(by.id('inputRelationshipType'));
    private static startDateInputField = element(by.id('inputStartDate'));
    private static endDateInputField = element(by.id('inputEndDate'));

    getInsuranceTypeDropdown() {
        return new SelectDropdown(QuickAddPatientPO.insuranceTypeDropdown);
    }
    
    getProviderDropdown() {
        return new SelectDropdown(QuickAddPatientPO.providerDropdown);
    }

    getPolicyNumberInputField() {
        return QuickAddPatientPO.policyNumberInputField;
    }

    getGroupNumberInputField() {
        return QuickAddPatientPO.groupNumberInputField;
    }

    getPlanTypeDropdown() {
        return new SelectDropdown(QuickAddPatientPO.planTypeDropdown);
    }

    getRelationshipDropdown() {
        return new SelectDropdown(QuickAddPatientPO.relationshipDropdown);
    }

    getStartdateInputField() {
        return new DatePicker(QuickAddPatientPO.startDateInputField);
    }

    getEndDateInputField() {
        return new DatePicker(QuickAddPatientPO.endDateInputField);
    }

    //form - Doctor Info 
    private static doctorInfoToggle = element(by.css("[ng-click*='DoctorInfo']"));

    getDoctorInfoToggle(){
        return QuickAddPatientPO.doctorInfoToggle;
    }

    private static orderingDoctorDropdown = element(by.id('inputOrderingDoc'));
    private static primaryDoctorDropdown = element(by.id('inputPhysician'));
    private static facilityDropdown = element(by.id('inputFacilityRef'));
    private static salesRepDropdown = element(by.id('inputMarketingRep'));

    getOrderingDoctorDropdown() {
        return new CustomDropdownMenu(QuickAddPatientPO.orderingDoctorDropdown, CustomDropdownMenuOrigin.INPUT_FIELD);
    }

    getFacilityDropdown() {
        return new SelectDropdown(QuickAddPatientPO.facilityDropdown);
    }

    getPrimaryDoctorDropdown() {
        return new CustomDropdownMenu(QuickAddPatientPO.primaryDoctorDropdown, CustomDropdownMenuOrigin.BUTTON);
    }

    getSalesRepDropdown() {
        return new SelectDropdown(QuickAddPatientPO.salesRepDropdown);
    }

    //form - Order Info 
    private static orderInfoToggle = element(by.css("[ng-click*='OrderInfo']"));

    getOrderInfoToggle(){
        return QuickAddPatientPO.orderInfoToggle;
    }

    private static orderTypeDropdown = element(by.id('inputOrderType'));
    private static workflowStatusDropdown = element(by.id('inputworkflowStatus'));
    private static orderOwnerDropdown = element(by.id('inputOrderOwner'));
    private static assignToDropdown = element(by.id('inputAssignTo'));
    private static branchDropdown = element(by.id('inputOrderBranchOffice'));
    private static billingOrSetupDateCalendarInputField = element(by.id('inputSetupDate'));

    getOrderTypeDropdown() {
        return new SelectDropdown(QuickAddPatientPO.orderTypeDropdown);
    }

    getWorkflowStatusDropdown() {
        return new SelectDropdown(QuickAddPatientPO.workflowStatusDropdown);
    }

    getOrderOwnerDropdown() {
        return new SelectDropdown(QuickAddPatientPO.orderOwnerDropdown);
    }

    getAssignToDropdown() {
        return new SelectDropdown(QuickAddPatientPO.assignToDropdown);
    }

    getBranchDropdown() {
        return new SelectDropdown(QuickAddPatientPO.branchDropdown);
    }

    getBillingOrSetupDateCalenderInputField() {
        return new DatePicker(QuickAddPatientPO.billingOrSetupDateCalendarInputField);
    }

    //footer 
    private static saveButton = element(by.buttonText('Save'));
    private static cancelButton = element(by.buttonText('Close'));

    getSaveButton(){
        return QuickAddPatientPO.saveButton;
    }

    getCancelButton(){
        return QuickAddPatientPO.cancelButton;
    }

    //Inline error: Required Field
    private static firstNameRequiredFieldError = QuickAddPatientPO.firstNameInputField.all(by.xpath("following-sibling::span")).first();
    private static lastNameRequiredFieldError = QuickAddPatientPO.lastNameInputField.all(by.xpath("following-sibling::span")).first();
    private static birthDateRequiredFieldError = QuickAddPatientPO.birthDateInputField.all(by.xpath("ancestor::p")).first().all(by.xpath("following-sibling::span")).get(1);
    private static genderDropdownRequiredFieldError = QuickAddPatientPO.genderDropdown.all(by.xpath("following-sibling::span")).first();
    private static statusDropdownRequiredFieldError = QuickAddPatientPO.statusDropdown.all(by.xpath("following-sibling::span")).first();
    private static branchOfficeRequiredFieldError = QuickAddPatientPO.branchOfficeDropdown.all(by.xpath("following-sibling::span")).get(1);

    getFirstNameRequiredFieldError(){
        return QuickAddPatientPO.firstNameRequiredFieldError;
    }

    getLastNameRequiredFieldError(){
        return QuickAddPatientPO.lastNameRequiredFieldError;
    }
    
    getBirthDateRequiredFieldError(){
        return QuickAddPatientPO.birthDateRequiredFieldError;
    }
    
    getGenderDropdownRequiredFieldError(){
        return QuickAddPatientPO.genderDropdownRequiredFieldError;
    }
    
    getStatusDropdownRequiredFieldError(){
        return QuickAddPatientPO.statusDropdownRequiredFieldError;
    }

    getBranchOfficeRequiredFieldError(){
        return QuickAddPatientPO.branchOfficeRequiredFieldError;
    }

    //Existing Patient Grid
    private static existingPatientGrid = element(by.id('docGrid'));
    
    getExistingPatientGrid() {
        return new ExistingPatientGrid(QuickAddPatientPO.existingPatientGrid);
    }
}