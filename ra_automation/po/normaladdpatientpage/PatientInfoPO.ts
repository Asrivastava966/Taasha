import { element, by } from "protractor";
import { DatePicker } from "../../component/comp/DatePicker";
import { SelectDropdown } from "../../component/comp/SelectDropdown";
import { ExistingPatientModalDialog } from "../../component/comp/ExistingPatientModalDialog";

export class PatientInfoPO{
    private static successMessage = element(by.css('[ng-if=\"successMessage\"]'));
    
    getSuccessMessage() {
        return PatientInfoPO.successMessage;
    }

    private static validationMessage = element(by.className('alert')).element(by.tagName('div'));

    getValidationMessage() {
        return PatientInfoPO.validationMessage;
    }

    private static saveButton = element(by.css('[type=\"submit\"]'));

    getSaveButton() {
        return PatientInfoPO.saveButton;
    }

    //General info
    private static firstNameInputField = element(by.id('inputfirstNm'));
    private static miInputField = element(by.id('inputMiddleNm'));
    private static lastNameInputField = element(by.id('inputlastNm'));
    private static birthdateInputField = element(by.id('inputBirthDate'));
    private static statusDropdown = element(by.id('inputStatus'));
    private static branchOfficeDropdown = element(by.id('inputBranchOffice'));
    private static legacyIdInputField = element(by.model('patient.payload.vndrPtId'));
    private static customInputField = element(by.model('patient.payload.custom1'));
    private static genderDropdown = element(by.id('inputGender'));
    private static emailInputField = element(by.id('inputEmail'));

    getFirstNameInputField() {
        return PatientInfoPO.firstNameInputField;
    }

    getMIInputField() {
        return PatientInfoPO.miInputField;
    }

    getLastNameInputField() {
        return PatientInfoPO.lastNameInputField;
    }

    getBirthdateInputField() {
        return new DatePicker(PatientInfoPO.birthdateInputField);
    }

    getStatusDropdown() {
        return new SelectDropdown(PatientInfoPO.statusDropdown);
    }

    getBranchOfficeDropdown() {
        return new SelectDropdown(PatientInfoPO.branchOfficeDropdown);
    }

    getLegacyIDInputField() {
        return PatientInfoPO.legacyIdInputField;
    }

    getCustomInputField() {
        return PatientInfoPO.customInputField;
    }

    getGenderDropdown() {
        return new SelectDropdown(PatientInfoPO.genderDropdown);
    }

    getEmailInputField() {
        return PatientInfoPO.emailInputField;
    }

    //Inline error: Required Field
    private static firstNameRequiredFieldError = PatientInfoPO.firstNameInputField.all(by.xpath("following-sibling::span")).first();
    private static lastNameRequiredFieldError = PatientInfoPO.lastNameInputField.all(by.xpath("following-sibling::span")).first();
    private static birthDateRequiredFieldError = PatientInfoPO.birthdateInputField.all(by.xpath("ancestor::p")).first().all(by.xpath("following-sibling::span")).get(1);
    private static genderDropdownRequiredFieldError = PatientInfoPO.genderDropdown.all(by.xpath("following-sibling::span")).first();
    private static statusDropdownRequiredFieldError = PatientInfoPO.statusDropdown.all(by.xpath("following-sibling::span")).first();
    private static branchOfficeRequiredFieldError = PatientInfoPO.branchOfficeDropdown.all(by.xpath("following-sibling::span")).get(1);

    getFirstNameRequiredFieldError(){
        return PatientInfoPO.firstNameRequiredFieldError;
    }

    getLastNameRequiredFieldError(){
        return PatientInfoPO.lastNameRequiredFieldError;
    }
    
    getBirthDateRequiredFieldError(){
        return PatientInfoPO.birthDateRequiredFieldError;
    }
    
    getGenderDropdownRequiredFieldError(){
        return PatientInfoPO.genderDropdownRequiredFieldError;
    }
    
    getStatusDropdownRequiredFieldError(){
        return PatientInfoPO.statusDropdownRequiredFieldError;
    }

    getBranchOfficeRequiredFieldError(){
        return PatientInfoPO.branchOfficeRequiredFieldError;
    }

    //Billing Address 
    private static addressOneInputField = element(by.id('inputBillingAddressline1'));
    private static addressTwoInputField = element(by.id('inputBillingAddressline2'));
    private static cityInputField = element(by.id('inputBillingCity'));
    private static stateSelectDropdown = element(by.id('inputBillingState'));
    private static zipCodeInputField = element(by.id('inputBillingZipCode'));
    private static timezoneSelectDropdown = element(by.id('inputTimeZone'));

    getAddressOneInputField() {
        return PatientInfoPO.addressOneInputField;
    }

    getAddressTwoInputField() {
        return PatientInfoPO.addressTwoInputField;
    }

    getCityInputField() {
        return PatientInfoPO.cityInputField;
    }

    getStateSelectDropdown() {
        return new SelectDropdown(PatientInfoPO.stateSelectDropdown);
    }

    getZipCodeInputField() {
        return PatientInfoPO.zipCodeInputField;
    }

    getTimezoneSelectDropdown() {
        return new SelectDropdown(PatientInfoPO.timezoneSelectDropdown);
    }

    //Emergency Contact 

    //Responsible Party Contact 

    //Delivery Address 
    private static toggleDeliveryAddress = element(by.css('[ng-click*=\"toggleShipping\"]'));
    private static commonAddressCheckbox = element(by.model('patient.payload.commonAddrFlag'));

    getToggleDeliveryAddress() {
        return PatientInfoPO.toggleDeliveryAddress;
    }

    getCommonAddressCheckbox() {
        return PatientInfoPO.commonAddressCheckbox;
    }

    //Existing Patient warning modal dialog 
    private static existingPatientModalDialog = element(by.className('modal-dialog'));
    getExistingPatientModalDialog() {
        return new ExistingPatientModalDialog(PatientInfoPO.existingPatientModalDialog);
    }
}