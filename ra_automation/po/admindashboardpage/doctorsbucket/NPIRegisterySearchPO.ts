import { element, by, ElementArrayFinder } from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";
import { BaseTable } from "../../../component/base/BaseTable";

export class NPIRegistrySearchPO {
    private static backToDoctorsButton = element(by.buttonText('Back to Doctors'))

    getBackToDoctorsButton() {
        return NPIRegistrySearchPO.backToDoctorsButton
    }

    // Information
    private static npiNumberFilterInput = element(by.model('model.filter.npiNo'))
    private static firstNameFilterInput = element(by.model('model.filter.firstNm'))
    private static lastNameFilterInput = element(by.model('model.filter.lastNm'))
    private static taxonomyDescFilterInput = element(by.model('model.filter.taxoDesc'))
    private static postalCodeFilterInput = element(by.model('model.filter.zip'))
    private static countryTextInput = element(by.model('model.filter.country'))
    private static cityFilterInput = element(by.model('model.filter.city'))
    private static stateFilterSelectDropdown = element(by.model('model.filter.state'))
    private static searchButton = element(by.buttonText('Search'))
    
    //Existing Patient(s) table 
    private static existingPatientsTable = element(by.css('table.table'));
    private static updateButtonOnFirstRow = element(by.repeater('result in $data track by $index')).element(by.css('[ng-click="getDoctorForEditing(result.physicianId,result)"]'))
    private static totalPatients = element.all(by.repeater('result in $data track by $index'))

    getNpiNumberFilterInput() {
        return NPIRegistrySearchPO.npiNumberFilterInput
    }
    getFirstNameFilterInput() {
        return NPIRegistrySearchPO.firstNameFilterInput
    }
    getLastNameFilterInput() {
        return NPIRegistrySearchPO.lastNameFilterInput
    }
    getTaxonomyDescFilterInput() {
        return NPIRegistrySearchPO.taxonomyDescFilterInput
    }
    getPostalCodeFilterInput() {
        return NPIRegistrySearchPO.postalCodeFilterInput
    }
    getCountryTextInput() {
        return NPIRegistrySearchPO.countryTextInput
    }
    getCityFilterInput() {
        return NPIRegistrySearchPO.cityFilterInput
    }
    getStateFilterSelectDropdown() {
        return new SelectDropdown(NPIRegistrySearchPO.stateFilterSelectDropdown)
    }
    getSearchButton() {
        return NPIRegistrySearchPO.searchButton
    }

    // Grid 
    getExistingPatientsTable() {
        return new BaseTable(NPIRegistrySearchPO.existingPatientsTable);
    }
    getUpdateButtonOfFirstRow() {
        return NPIRegistrySearchPO.updateButtonOnFirstRow
    }
    getTotalPatientsCount() {
        return NPIRegistrySearchPO.totalPatients
    }
}