"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const DatePicker_1 = require("../../component/comp/DatePicker");
const BaseTable_1 = require("../../component/base/BaseTable");
class FindPatientPO {
    getPageName() {
        return FindPatientPO.pageName;
    }
    getLastNameInputField() {
        return FindPatientPO.lastNameInputField;
    }
    getFirstNameInputField() {
        return FindPatientPO.firstNameInputField;
    }
    getBirthDateInputField() {
        return new DatePicker_1.DatePicker(FindPatientPO.birthDateInputField);
    }
    getPhoneInputField() {
        return FindPatientPO.phoneInputField;
    }
    getEmailInputField() {
        return FindPatientPO.emailInputField;
    }
    getAddressOneInputField() {
        return FindPatientPO.addressOneInputField;
    }
    getAddressTwoInputField() {
        return FindPatientPO.addressTwoInputField;
    }
    getCityInputField() {
        return FindPatientPO.cityInputField;
    }
    getStateDropdown() {
        return FindPatientPO.stateDropdown;
    }
    getZipCodeInputField() {
        return FindPatientPO.zipCodeInputField;
    }
    getStatusDropdown() {
        return FindPatientPO.statusDropdown;
    }
    getOrderNumberInputField() {
        return FindPatientPO.orderNumberInputField;
    }
    getLegacyIDInputField() {
        return FindPatientPO.legacyIDInputField;
    }
    getPatientIdInputField() {
        return FindPatientPO.patientIDInputField;
    }
    getBranchOfficeDropdown() {
        return FindPatientPO.branchOfficeDropdown;
    }
    getSearchButton() {
        return FindPatientPO.searchButton;
    }
    getExistingPatientsTableTitle() {
        return FindPatientPO.existingPatientsTableTitle;
    }
    getNoSearchCriteriaValidation() {
        return FindPatientPO.noSearchCriteriaValidation;
    }
    getExistingPatientsTable() {
        return new BaseTable_1.BaseTable(FindPatientPO.existingPatientsTable);
    }
}
FindPatientPO.pageName = protractor_1.element(protractor_1.by.className("pageheader")).element(protractor_1.by.tagName("h3"));
FindPatientPO.findPatientForm = protractor_1.element(protractor_1.by.id('frmFaxLookup'));
//search criteria 
FindPatientPO.lastNameInputField = protractor_1.element(protractor_1.by.model("model.filter.lastNm"));
FindPatientPO.firstNameInputField = protractor_1.element(protractor_1.by.model("model.filter.firstNm"));
FindPatientPO.birthDateInputField = protractor_1.element(protractor_1.by.model("UI.search.dob"));
FindPatientPO.phoneInputField = protractor_1.element(protractor_1.by.model("model.filter.phoneNo"));
FindPatientPO.emailInputField = protractor_1.element(protractor_1.by.id("inputEmail"));
FindPatientPO.addressOneInputField = protractor_1.element(protractor_1.by.model("model.filter.address1"));
FindPatientPO.addressTwoInputField = protractor_1.element(protractor_1.by.model("model.filter.address2"));
FindPatientPO.cityInputField = protractor_1.element(protractor_1.by.model("model.filter.city"));
FindPatientPO.stateDropdown = protractor_1.element(protractor_1.by.model("model.filter.state"));
FindPatientPO.zipCodeInputField = protractor_1.element(protractor_1.by.model("model.filter.zip"));
FindPatientPO.statusDropdown = protractor_1.element(protractor_1.by.model("model.filter.statusCd"));
FindPatientPO.orderNumberInputField = protractor_1.element(protractor_1.by.model("model.filter.orderNo"));
FindPatientPO.legacyIDInputField = protractor_1.element(protractor_1.by.model("model.filter.legacyId"));
FindPatientPO.patientIDInputField = protractor_1.element(protractor_1.by.model("model.filter.patientId"));
FindPatientPO.branchOfficeDropdown = protractor_1.element(protractor_1.by.model("model.filter.branchOfficeCd"));
//search button 
FindPatientPO.searchButton = protractor_1.element(protractor_1.by.className("btn-primary btn-sm"));
//search results 
FindPatientPO.existingPatientsTableTitle = protractor_1.element(protractor_1.by.tagName('h4'));
FindPatientPO.noSearchCriteriaValidation = FindPatientPO.existingPatientsTableTitle.all(protractor_1.by.xpath("following-sibling::div")).get(1);
FindPatientPO.existingPatientsTable = FindPatientPO.findPatientForm.all(protractor_1.by.tagName('table')).get(1);
exports.FindPatientPO = FindPatientPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluZFBhdGllbnRQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vZmluZHBhdGllbnRwYWdlL0ZpbmRQYXRpZW50UE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsZ0VBQTZEO0FBQzdELDhEQUEyRDtBQUUzRCxNQUFhLGFBQWE7SUFHdEIsV0FBVztRQUNQLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBcUJELHFCQUFxQjtRQUNqQixPQUFPLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUM1QyxDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLE9BQU8sYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQzdDLENBQUM7SUFFRCxzQkFBc0I7UUFDbEIsT0FBTyxJQUFJLHVCQUFVLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGtCQUFrQjtRQUNkLE9BQU8sYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQ3pDLENBQUM7SUFFRCx1QkFBdUI7UUFDbkIsT0FBTyxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFDOUMsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztJQUM5QyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELG9CQUFvQjtRQUNoQixPQUFPLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3QkFBd0I7UUFDcEIs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