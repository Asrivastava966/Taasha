import { element, by } from "protractor";
import { DatePicker } from "../../component/comp/DatePicker";
import { BaseTable } from "../../component/base/BaseTable";

export class FindPatientPO{
    private static pageName = element(by.className("pageheader")).element(by.tagName("h3"));

    getPageName(){
        return FindPatientPO.pageName; 
    }

    private static findPatientForm = element(by.id('frmFaxLookup'));

    //search criteria 
    private static lastNameInputField = element(by.model("model.filter.lastNm"));
    private static firstNameInputField = element(by.model("model.filter.firstNm"));
    private static birthDateInputField = element(by.model("UI.search.dob"));
    private static phoneInputField = element(by.model("model.filter.phoneNo"));
    private static emailInputField = element(by.id("inputEmail"));
    private static addressOneInputField = element(by.model("model.filter.address1"));
    private static addressTwoInputField = element(by.model("model.filter.address2"));
    private static cityInputField = element(by.model("model.filter.city"));
    private static stateDropdown = element(by.model("model.filter.state"));
    private static zipCodeInputField = element(by.model("model.filter.zip"));
    private static statusDropdown = element(by.model("model.filter.statusCd"));
    private static orderNumberInputField = element(by.model("model.filter.orderNo"));
    private static legacyIDInputField = element(by.model("model.filter.legacyId"));
    private static patientIDInputField = element(by.model("model.filter.patientId"));
    private static branchOfficeDropdown = element(by.model("model.filter.branchOfficeCd"));

    getLastNameInputField(){
        return FindPatientPO.lastNameInputField;
    }

    getFirstNameInputField(){
        return FindPatientPO.firstNameInputField;
    }

    getBirthDateInputField(){
        return new DatePicker(FindPatientPO.birthDateInputField);
    }

    getPhoneInputField(){
        return FindPatientPO.phoneInputField;
    }

    getEmailInputField(){
        return FindPatientPO.emailInputField;
    }

    getAddressOneInputField(){
        return FindPatientPO.addressOneInputField;
    }

    getAddressTwoInputField(){
        return FindPatientPO.addressTwoInputField;
    }

    getCityInputField(){
        return FindPatientPO.cityInputField;
    }

    getStateDropdown(){
        return FindPatientPO.stateDropdown;
    }

    getZipCodeInputField(){
        return FindPatientPO.zipCodeInputField;
    }

    getStatusDropdown(){
        return FindPatientPO.statusDropdown;
    }

    getOrderNumberInputField(){
        return FindPatientPO.orderNumberInputField;
    }

    getLegacyIDInputField(){
        return FindPatientPO.legacyIDInputField;
    }

    getPatientIdInputField(){
        return FindPatientPO.patientIDInputField;
    }

    getBranchOfficeDropdown(){
        return FindPatientPO.branchOfficeDropdown;
    }

    //search button 
    private static searchButton = element(by.className("btn-primary btn-sm"));

    getSearchButton(){
        return FindPatientPO.searchButton;
    }

    //search results 
    private static existingPatientsTableTitle = element(by.tagName('h4'));

    getExistingPatientsTableTitle() {
        return FindPatientPO.existingPatientsTableTitle;
    }

    private static noSearchCriteriaValidation = FindPatientPO.existingPatientsTableTitle.all(by.xpath("following-sibling::div")).get(1);

    getNoSearchCriteriaValidation(){
        return FindPatientPO.noSearchCriteriaValidation;
    }
    
    private static existingPatientsTable = FindPatientPO.findPatientForm.all(by.tagName('table')).get(1); 

    getExistingPatientsTable() {
        return new BaseTable(FindPatientPO.existingPatientsTable);
    }
}