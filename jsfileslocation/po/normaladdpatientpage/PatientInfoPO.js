"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const DatePicker_1 = require("../../component/comp/DatePicker");
const SelectDropdown_1 = require("../../component/comp/SelectDropdown");
const ExistingPatientModalDialog_1 = require("../../component/comp/ExistingPatientModalDialog");
class PatientInfoPO {
    getSuccessMessage() {
        return PatientInfoPO.successMessage;
    }
    getValidationMessage() {
        return PatientInfoPO.validationMessage;
    }
    getSaveButton() {
        return PatientInfoPO.saveButton;
    }
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
        return new DatePicker_1.DatePicker(PatientInfoPO.birthdateInputField);
    }
    getStatusDropdown() {
        return new SelectDropdown_1.SelectDropdown(PatientInfoPO.statusDropdown);
    }
    getBranchOfficeDropdown() {
        return new SelectDropdown_1.SelectDropdown(PatientInfoPO.branchOfficeDropdown);
    }
    getLegacyIDInputField() {
        return PatientInfoPO.legacyIdInputField;
    }
    getCustomInputField() {
        return PatientInfoPO.customInputField;
    }
    getGenderDropdown() {
        return new SelectDropdown_1.SelectDropdown(PatientInfoPO.genderDropdown);
    }
    getEmailInputField() {
        return PatientInfoPO.emailInputField;
    }
    getFirstNameRequiredFieldError() {
        return PatientInfoPO.firstNameRequiredFieldError;
    }
    getLastNameRequiredFieldError() {
        return PatientInfoPO.lastNameRequiredFieldError;
    }
    getBirthDateRequiredFieldError() {
        return PatientInfoPO.birthDateRequiredFieldError;
    }
    getGenderDropdownRequiredFieldError() {
        return PatientInfoPO.genderDropdownRequiredFieldError;
    }
    getStatusDropdownRequiredFieldError() {
        return PatientInfoPO.statusDropdownRequiredFieldError;
    }
    getBranchOfficeRequiredFieldError() {
        return PatientInfoPO.branchOfficeRequiredFieldError;
    }
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
        return new SelectDropdown_1.SelectDropdown(PatientInfoPO.stateSelectDropdown);
    }
    getZipCodeInputField() {
        return PatientInfoPO.zipCodeInputField;
    }
    getTimezoneSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(PatientInfoPO.timezoneSelectDropdown);
    }
    getToggleDeliveryAddress() {
        return PatientInfoPO.toggleDeliveryAddress;
    }
    getCommonAddressCheckbox() {
        return PatientInfoPO.commonAddressCheckbox;
    }
    getExistingPatientModalDialog() {
        return new ExistingPatientModalDialog_1.ExistingPatientModalDialog(PatientInfoPO.existingPatientModalDialog);
    }
}
PatientInfoPO.successMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"successMessage\"]'));
PatientInfoPO.validationMessage = protractor_1.element(protractor_1.by.className('alert')).element(protractor_1.by.tagName('div'));
PatientInfoPO.saveButton = protractor_1.element(protractor_1.by.css('[type=\"submit\"]'));
//General info
PatientInfoPO.firstNameInputField = protractor_1.element(protractor_1.by.id('inputfirstNm'));
PatientInfoPO.miInputField = protractor_1.element(protractor_1.by.id('inputMiddleNm'));
PatientInfoPO.lastNameInputField = protractor_1.element(protractor_1.by.id('inputlastNm'));
PatientInfoPO.birthdateInputField = protractor_1.element(protractor_1.by.id('inputBirthDate'));
PatientInfoPO.statusDropdown = protractor_1.element(protractor_1.by.id('inputStatus'));
PatientInfoPO.branchOfficeDropdown = protractor_1.element(protractor_1.by.id('inputBranchOffice'));
PatientInfoPO.legacyIdInputField = protractor_1.element(protractor_1.by.model('patient.payload.vndrPtId'));
PatientInfoPO.customInputField = protractor_1.element(protractor_1.by.model('patient.payload.custom1'));
PatientInfoPO.genderDropdown = protractor_1.element(protractor_1.by.id('inputGender'));
PatientInfoPO.emailInputField = protractor_1.element(protractor_1.by.id('inputEmail'));
//Inline error: Required Field
PatientInfoPO.firstNameRequiredFieldError = PatientInfoPO.firstNameInputField.all(protractor_1.by.xpath("following-sibling::span")).first();
PatientInfoPO.lastNameRequiredFieldError = PatientInfoPO.lastNameInputField.all(protractor_1.by.xpath("following-sibling::span")).first();
PatientInfoPO.birthDateRequiredFieldError = PatientInfoPO.birthdateInputField.all(protractor_1.by.xpath("ancestor::p")).first().all(protractor_1.by.xpath("following-sibling::span")).get(1);
PatientInfoPO.genderDropdownRequiredFieldError = PatientInfoPO.genderDropdown.all(protractor_1.by.xpath("following-sibling::span")).first();
PatientInfoPO.statusDropdownRequiredFieldError = PatientInfoPO.statusDropdown.all(protractor_1.by.xpath("following-sibling::span")).first();
PatientInfoPO.branchOfficeRequiredFieldError = PatientInfoPO.branchOfficeDropdown.all(protractor_1.by.xpath("following-sibling::span")).get(1);
//Billing Address 
PatientInfoPO.addressOneInputField = protractor_1.element(protractor_1.by.id('inputBillingAddressline1'));
PatientInfoPO.addressTwoInputField = protractor_1.element(protractor_1.by.id('inputBillingAddressline2'));
PatientInfoPO.cityInputField = protractor_1.element(protractor_1.by.id('inputBillingCity'));
PatientInfoPO.stateSelectDropdown = protractor_1.element(protractor_1.by.id('inputBillingState'));
PatientInfoPO.zipCodeInputField = protractor_1.element(protractor_1.by.id('inputBillingZipCode'));
PatientInfoPO.timezoneSelectDropdown = protractor_1.element(protractor_1.by.id('inputTimeZone'));
//Emergency Contact 
//Responsible Party Contact 
//Delivery Address 
PatientInfoPO.toggleDeliveryAddress = protractor_1.element(protractor_1.by.css('[ng-click*=\"toggleShipping\"]'));
PatientInfoPO.commonAddressCheckbox = protractor_1.element(protractor_1.by.model('patient.payload.commonAddrFlag'));
//Existing Patient warning modal dialog 
PatientInfoPO.existingPatientModalDialog = protractor_1.element(protractor_1.by.className('modal-dialog'));
exports.PatientInfoPO = PatientInfoPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudEluZm9QTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vbm9ybWFsYWRkcGF0aWVudHBhZ2UvUGF0aWVudEluZm9QTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QyxnRUFBNkQ7QUFDN0Qsd0VBQXFFO0FBQ3JFLGdHQUE2RjtBQUU3RixNQUFhLGFBQWE7SUFHdEIsaUJBQWlCO1FBQ2IsT0FBTyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFJRCxvQkFBb0I7UUFDaEIsT0FBTyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDM0MsQ0FBQztJQUlELGFBQWE7UUFDVCxPQUFPLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQWNELHNCQUFzQjtRQUNsQixPQUFPLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sYUFBYSxDQUFDLFlBQVksQ0FBQztJQUN0QyxDQUFDO0lBRUQscUJBQXFCO1FBQ2pCLE9BQU8sYUFBYSxDQUFDLGtCQUFrQixDQUFDO0lBQzVDLENBQUM7SUFFRCxzQkFBc0I7UUFDbEIsT0FBTyxJQUFJLHVCQUFVLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU8sSUFBSSwrQkFBYyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsdUJBQXVCO1FBQ25CLE9BQU8sSUFBSSwrQkFBYyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxxQkFBcUI7UUFDakIsT0FBTyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDNUMsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE9BQU8sYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQzFDLENBQUM7SUFFRCxpQkFBaUI7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