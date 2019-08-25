"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BaseTable_1 = require("../../component/base/BaseTable");
const SelectDropdown_1 = require("../../component/comp/SelectDropdown");
const DatePicker_1 = require("../../component/comp/DatePicker");
class InsuranceInfoPO {
    getAddInsuranceButton() {
        return InsuranceInfoPO.addInsuranceButton;
    }
    getValidationMessage() {
        return InsuranceInfoPO.validationMessage;
    }
    getInsuranceTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(InsuranceInfoPO.insuranceTypeDropdown);
    }
    getProviderDropdown() {
        return new SelectDropdown_1.SelectDropdown(InsuranceInfoPO.providerDropdown);
    }
    getPolicyNumberInputField() {
        return InsuranceInfoPO.policyNumberInputField;
    }
    getGroupNumberInputField() {
        return InsuranceInfoPO.groupNumberInputField;
    }
    getPlanTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(InsuranceInfoPO.planTypeDropdown);
    }
    getRelationshipDropdown() {
        return new SelectDropdown_1.SelectDropdown(InsuranceInfoPO.relationshipDropdown);
    }
    getRelationshipDropdownText() {
        return InsuranceInfoPO.relationshipDropdownText;
    }
    getStartdateInputField() {
        return new DatePicker_1.DatePicker(InsuranceInfoPO.startDateInputField);
    }
    getEndDateInputField() {
        return new DatePicker_1.DatePicker(InsuranceInfoPO.endDateInputField);
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
    getProviderRequiredFieldError() {
        return InsuranceInfoPO.providerRequiredFieldError;
    }
    getPolicyNumberRequiredFieldError() {
        return InsuranceInfoPO.policyNumberRequiredFieldError;
    }
    getStartDateRequiredFieldError() {
        return InsuranceInfoPO.startDateRequiredFieldError;
    }
    getActivePolicyTable() {
        return new BaseTable_1.BaseTable(InsuranceInfoPO.activePolicyTable);
    }
    getInactivePolicyTable() {
        return new BaseTable_1.BaseTable(InsuranceInfoPO.inactivePolicyTable);
    }
    getLastnameInputField() {
        return InsuranceInfoPO.lastName;
    }
    getFirstNameInputField() {
        return InsuranceInfoPO.firstName;
    }
    getBirthDateInputField() {
        return new DatePicker_1.DatePicker(InsuranceInfoPO.birthDate);
    }
    getGenderDropDown() {
        return new SelectDropdown_1.SelectDropdown(InsuranceInfoPO.gender);
    }
}
InsuranceInfoPO.addInsuranceButton = protractor_1.element(protractor_1.by.css('[ng-click=\"addInsurance()\"]'));
InsuranceInfoPO.validationMessage = protractor_1.element(protractor_1.by.className('alert'));
InsuranceInfoPO.insuranceTypeDropdown = protractor_1.element(protractor_1.by.id('inputInsuranceType'));
InsuranceInfoPO.providerDropdown = protractor_1.element(protractor_1.by.id('inputProvider'));
InsuranceInfoPO.policyNumberInputField = protractor_1.element(protractor_1.by.id('inputPolicyNum'));
InsuranceInfoPO.groupNumberInputField = protractor_1.element(protractor_1.by.id('inputGroupNum'));
InsuranceInfoPO.planTypeDropdown = protractor_1.element(protractor_1.by.id('inputInsPlanType'));
InsuranceInfoPO.relationshipDropdown = protractor_1.element(protractor_1.by.id('inputRelationshipType'));
InsuranceInfoPO.relationshipDropdownText = protractor_1.element(protractor_1.by.model('insurance.payload.relationshipTypeCd'));
InsuranceInfoPO.startDateInputField = protractor_1.element(protractor_1.by.id('inputStartDate'));
InsuranceInfoPO.endDateInputField = protractor_1.element(protractor_1.by.id('inputEndDate'));
InsuranceInfoPO.saveButton = protractor_1.element(protractor_1.by.css('[value=\"Save\"]'));
InsuranceInfoPO.updateButton = protractor_1.element(protractor_1.by.css('[value=\"Update\"]'));
InsuranceInfoPO.cancelButton = protractor_1.element(protractor_1.by.css('[value=\"Cancel\"]'));
//Inline error: Required Field
InsuranceInfoPO.providerRequiredFieldError = InsuranceInfoPO.providerDropdown.all(protractor_1.by.xpath("following-sibling::span")).get(1);
InsuranceInfoPO.policyNumberRequiredFieldError = InsuranceInfoPO.policyNumberInputField.all(protractor_1.by.xpath("following-sibling::span")).first();
InsuranceInfoPO.startDateRequiredFieldError = InsuranceInfoPO.startDateInputField.all(protractor_1.by.xpath("ancestor::p")).first().all(protractor_1.by.xpath("following-sibling::span")).first();
//Active Policy Table 
InsuranceInfoPO.activePolicyTable = protractor_1.element(protractor_1.by.css("[data-ng-table=\"UI_ACTIVE.tableParams\"]"));
//Inactive Policy Table 
InsuranceInfoPO.inactivePolicyTable = protractor_1.element(protractor_1.by.css("[data-ng-table=\"UI_IN_ACTIVE.tableParams\"]"));
// Insured
InsuranceInfoPO.lastName = protractor_1.element(protractor_1.by.model("insurance.payload.insuranceAddInfo.lastNm"));
InsuranceInfoPO.firstName = protractor_1.element(protractor_1.by.model("insurance.payload.insuranceAddInfo.firstNm"));
InsuranceInfoPO.birthDate = protractor_1.element(protractor_1.by.model("insurance.payload.insuranceAddInfo.dob"));
InsuranceInfoPO.gender = protractor_1.element(protractor_1.by.model("insurance.payload.insuranceAddInfo.gender"));
exports.InsuranceInfoPO = InsuranceInfoPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlSW5mb1BPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ub3JtYWxhZGRwYXRpZW50cGFnZS9JbnN1cmFuY2VJbmZvUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsOERBQTJEO0FBQzNELHdFQUFxRTtBQUNyRSxnRUFBNkQ7QUFFN0QsTUFBYSxlQUFlO0lBR3hCLHFCQUFxQjtRQUNqQixPQUFPLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztJQUM5QyxDQUFDO0lBR0Qsb0JBQW9CO1FBQ2hCLE9BQU8sZUFBZSxDQUFDLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7SUFlRCx3QkFBd0I7UUFDcEIsT0FBTyxJQUFJLCtCQUFjLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE9BQU8sSUFBSSwrQkFBYyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCx5QkFBeUI7UUFDckIsT0FBTyxlQUFlLENBQUMsc0JBQXNCLENBQUM7SUFDbEQsQ0FBQztJQUVELHdCQUF3QjtRQUNwQixPQUFPLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQztJQUNqRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLCtCQUFjLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLElBQUksK0JBQWMsQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsMkJBQTJCO1FBQ3ZCLE9BQU8sZUFBZSxDQUFDLHdCQUF3QixDQUFDO0lBQ3BELENBQUM7SUFFRCxzQkFBc0I7UUFDbEIsT0FBTyxJQUFJLHVCQUFVLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELG9C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