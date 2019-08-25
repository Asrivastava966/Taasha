"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
const BaseTable_1 = require("../../../component/base/BaseTable");
class NPIRegistrySearchPO {
    getBackToDoctorsButton() {
        return NPIRegistrySearchPO.backToDoctorsButton;
    }
    getNpiNumberFilterInput() {
        return NPIRegistrySearchPO.npiNumberFilterInput;
    }
    getFirstNameFilterInput() {
        return NPIRegistrySearchPO.firstNameFilterInput;
    }
    getLastNameFilterInput() {
        return NPIRegistrySearchPO.lastNameFilterInput;
    }
    getTaxonomyDescFilterInput() {
        return NPIRegistrySearchPO.taxonomyDescFilterInput;
    }
    getPostalCodeFilterInput() {
        return NPIRegistrySearchPO.postalCodeFilterInput;
    }
    getCountryTextInput() {
        return NPIRegistrySearchPO.countryTextInput;
    }
    getCityFilterInput() {
        return NPIRegistrySearchPO.cityFilterInput;
    }
    getStateFilterSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(NPIRegistrySearchPO.stateFilterSelectDropdown);
    }
    getSearchButton() {
        return NPIRegistrySearchPO.searchButton;
    }
    // Grid 
    getExistingPatientsTable() {
        return new BaseTable_1.BaseTable(NPIRegistrySearchPO.existingPatientsTable);
    }
    getUpdateButtonOfFirstRow() {
        return NPIRegistrySearchPO.updateButtonOnFirstRow;
    }
    getTotalPatientsCount() {
        return NPIRegistrySearchPO.totalPatients;
    }
}
NPIRegistrySearchPO.backToDoctorsButton = protractor_1.element(protractor_1.by.buttonText('Back to Doctors'));
// Information
NPIRegistrySearchPO.npiNumberFilterInput = protractor_1.element(protractor_1.by.model('model.filter.npiNo'));
NPIRegistrySearchPO.firstNameFilterInput = protractor_1.element(protractor_1.by.model('model.filter.firstNm'));
NPIRegistrySearchPO.lastNameFilterInput = protractor_1.element(protractor_1.by.model('model.filter.lastNm'));
NPIRegistrySearchPO.taxonomyDescFilterInput = protractor_1.element(protractor_1.by.model('model.filter.taxoDesc'));
NPIRegistrySearchPO.postalCodeFilterInput = protractor_1.element(protractor_1.by.model('model.filter.zip'));
NPIRegistrySearchPO.countryTextInput = protractor_1.element(protractor_1.by.model('model.filter.country'));
NPIRegistrySearchPO.cityFilterInput = protractor_1.element(protractor_1.by.model('model.filter.city'));
NPIRegistrySearchPO.stateFilterSelectDropdown = protractor_1.element(protractor_1.by.model('model.filter.state'));
NPIRegistrySearchPO.searchButton = protractor_1.element(protractor_1.by.buttonText('Search'));
//Existing Patient(s) table 
NPIRegistrySearchPO.existingPatientsTable = protractor_1.element(protractor_1.by.css('table.table'));
NPIRegistrySearchPO.updateButtonOnFirstRow = protractor_1.element(protractor_1.by.repeater('result in $data track by $index')).element(protractor_1.by.css('[ng-click="getDoctorForEditing(result.physicianId,result)"]'));
NPIRegistrySearchPO.totalPatients = protractor_1.element.all(protractor_1.by.repeater('result in $data track by $index'));
exports.NPIRegistrySearchPO = NPIRegistrySearchPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTlBJUmVnaXN0ZXJ5U2VhcmNoUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL2FkbWluZGFzaGJvYXJkcGFnZS9kb2N0b3JzYnVja2V0L05QSVJlZ2lzdGVyeVNlYXJjaFBPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZEO0FBQzdELDJFQUF3RTtBQUN4RSxpRUFBOEQ7QUFFOUQsTUFBYSxtQkFBbUI7SUFHNUIsc0JBQXNCO1FBQ2xCLE9BQU8sbUJBQW1CLENBQUMsbUJBQW1CLENBQUE7SUFDbEQsQ0FBQztJQWtCRCx1QkFBdUI7UUFDbkIsT0FBTyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQTtJQUNuRCxDQUFDO0lBQ0QsdUJBQXVCO1FBQ25CLE9BQU8sbUJBQW1CLENBQUMsb0JBQW9CLENBQUE7SUFDbkQsQ0FBQztJQUNELHNCQUFzQjtRQUNsQixPQUFPLG1CQUFtQixDQUFDLG1CQUFtQixDQUFBO0lBQ2xELENBQUM7SUFDRCwwQkFBMEI7UUFDdEIsT0FBTyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQTtJQUN0RCxDQUFDO0lBQ0Qsd0JBQXdCO1FBQ3BCLE9BQU8sbUJBQW1CLENBQUMscUJBQXFCLENBQUE7SUFDcEQsQ0FBQztJQUNELG1CQUFtQjtRQUNmLE9BQU8sbUJBQW1CLENBQUMsZ0JBQWdCLENBQUE7SUFDL0MsQ0FBQztJQUNELGtCQUFrQjtRQUNkLE9BQU8sbUJBQW1CLENBQUMsZUFBZSxDQUFBO0lBQzlDLENBQUM7SUFDRCw0QkFBNEI7UUFDeEIsT0FBTyxJQUFJLCtCQUFjLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUM1RSxDQUFDO0lBQ0QsZUFBZTtRQUNYLE9BQU8sbUJBQW1CLENBQUMsWUFBWSxDQUFBO0lBQzNDLENBQUM7SUFFRCxRQUFRO0lBQ1Isd0JBQXdCO1FBQ3BCLE9BQU8sSUFBSSxxQkFBUyxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELHlCQUF5QjtRQUNyQixPQUFPLG1CQUFtQixDQUFDLHNCQUFzQixDQUFBO0lBQ3JELENBQUM7SUFDRCxxQkFBcUI7UUFDakIsT0FBTyxtQkFBbUIsQ0FBQyxhQUFhLENBQUE7SUFDNUMsQ0FBQzs7QUEzRGMsdUNBQW1CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtBQU05RSxjQUFjO0FBQ0Msd0NBQW9CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtBQUM5RCx3Q0FBb0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFBO0FBQ2hFLHVDQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7QUFDOUQsMkNBQXVCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQTtBQUNwRSx5Q0FBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO0FBQzdELG9DQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7QUFDNUQsbUNBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO0FBQ3hELDZDQUF5QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7QUFDbkUsZ0NBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtBQUU5RCw0QkFBNEI7QUFDYix5Q0FBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUN2RCwwQ0FBc0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZEQUE2RCxDQUFDLENBQUMsQ0FBQTtBQUMvSixpQ0FBYSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFBO0FBckI5RixrREE2REMifQ==