import { element, by } from "protractor"; 
import { BaseTable } from "../../component/base/BaseTable";
import { SelectDropdown } from "../../component/comp/SelectDropdown";
import { DatePicker } from "../../component/comp/DatePicker";

export class InsuranceInfoPO{
    private static addInsuranceButton = element(by.css('[ng-click=\"addInsurance()\"]'));

    getAddInsuranceButton() {
        return InsuranceInfoPO.addInsuranceButton;
    }

    private static validationMessage = element(by.className('alert'));
    getValidationMessage() {
        return InsuranceInfoPO.validationMessage;
    }

    private static insuranceTypeDropdown = element(by.id('inputInsuranceType'));
    private static providerDropdown = element(by.id('inputProvider'));
    private static policyNumberInputField = element(by.id('inputPolicyNum'));
    private static groupNumberInputField = element(by.id('inputGroupNum'));
    private static planTypeDropdown = element(by.id('inputInsPlanType'));
    private static relationshipDropdown = element(by.id('inputRelationshipType'));
    private static relationshipDropdownText=element(by.model('insurance.payload.relationshipTypeCd'));
    private static startDateInputField = element(by.id('inputStartDate'));
    private static endDateInputField = element(by.id('inputEndDate'));
    private static saveButton = element(by.css('[value=\"Save\"]'));
    private static updateButton = element(by.css('[value=\"Update\"]'));
    private static cancelButton = element(by.css('[value=\"Cancel\"]'));

    getInsuranceTypeDropdown() {
        return new SelectDropdown(InsuranceInfoPO.insuranceTypeDropdown);
    }
    
    getProviderDropdown() {
        return new SelectDropdown(InsuranceInfoPO.providerDropdown);
    }

    getPolicyNumberInputField() {
        return InsuranceInfoPO.policyNumberInputField;
    }

    getGroupNumberInputField() {
        return InsuranceInfoPO.groupNumberInputField;
    }

    getPlanTypeDropdown() {
        return new SelectDropdown(InsuranceInfoPO.planTypeDropdown);
    }

    getRelationshipDropdown() {
        return new SelectDropdown(InsuranceInfoPO.relationshipDropdown);
    }

    getRelationshipDropdownText(){
        return InsuranceInfoPO.relationshipDropdownText;
    }

    getStartdateInputField() {
        return new DatePicker(InsuranceInfoPO.startDateInputField);
    }

    getEndDateInputField() {
        return new DatePicker(InsuranceInfoPO.endDateInputField);
    }

    getSaveButton() {
        return InsuranceInfoPO.saveButton;
    }

    getUpdateButton() {
        return InsuranceInfoPO.updateButton;
    }

    getCancelButton() {
        return InsuranceInfoPO.cancelButton;
    }

    //Inline error: Required Field
    private static providerRequiredFieldError = InsuranceInfoPO.providerDropdown.all(by.xpath("following-sibling::span")).get(1);
    private static policyNumberRequiredFieldError = InsuranceInfoPO.policyNumberInputField.all(by.xpath("following-sibling::span")).first();
    private static startDateRequiredFieldError = InsuranceInfoPO.startDateInputField.all(by.xpath("ancestor::p")).first().all(by.xpath("following-sibling::span")).first();

    getProviderRequiredFieldError() {
        return InsuranceInfoPO.providerRequiredFieldError;
    }

    getPolicyNumberRequiredFieldError() {
        return InsuranceInfoPO.policyNumberRequiredFieldError;
    }

    getStartDateRequiredFieldError() {
        return InsuranceInfoPO.startDateRequiredFieldError;
    }

    //Active Policy Table 
    private static activePolicyTable = element(by.css("[data-ng-table=\"UI_ACTIVE.tableParams\"]"));

    getActivePolicyTable() {
        return new BaseTable(InsuranceInfoPO.activePolicyTable);
    }

    //Inactive Policy Table 
    private static inactivePolicyTable = element(by.css("[data-ng-table=\"UI_IN_ACTIVE.tableParams\"]"));

    getInactivePolicyTable() {
        return new BaseTable(InsuranceInfoPO.inactivePolicyTable);
    }

    // Insured
    private static lastName = element(by.model("insurance.payload.insuranceAddInfo.lastNm"))
    private static firstName = element(by.model("insurance.payload.insuranceAddInfo.firstNm"))
    private static birthDate= element(by.model("insurance.payload.insuranceAddInfo.dob"))
    private static gender =element(by.model("insurance.payload.insuranceAddInfo.gender"))

    getLastnameInputField(){
        return InsuranceInfoPO.lastName
    }
    getFirstNameInputField(){
        return InsuranceInfoPO.firstName
    }
    getBirthDateInputField(){
        return new DatePicker(InsuranceInfoPO.birthDate);
    }
    getGenderDropDown(){
        return new SelectDropdown(InsuranceInfoPO.gender);
    }
}