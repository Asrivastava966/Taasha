"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
const DoctorManagementGrid_1 = require("../../../component/comp/DoctorManagementGrid");
class DoctorManagementPO {
    getAdminDashboardButton() {
        return DoctorManagementPO.adminDashboardButton;
    }
    getNPIRegistrySearchButton() {
        return DoctorManagementPO.npiRegistrySearchButton;
    }
    getAddNewDoctorButton() {
        return DoctorManagementPO.addNewDoctorButton;
    }
    getLastNameFilterInputField() {
        return DoctorManagementPO.lastNameFilterInputField;
    }
    getFirstNameFilterInputField() {
        return DoctorManagementPO.firstNameFilterInputField;
    }
    getMiddleFilterInputField() {
        return DoctorManagementPO.middleFilterInputField;
    }
    getNpiFilterInputField() {
        return DoctorManagementPO.npiFilterInputField;
    }
    getPhoneFilterInputField() {
        return DoctorManagementPO.phoneFilterInputField;
    }
    getAddress1FilterInputField() {
        return DoctorManagementPO.addressOneFilterInputField;
    }
    getAddress2FilterInputField() {
        return DoctorManagementPO.addressTwoFilterInputField;
    }
    getCityFilterInputField() {
        return DoctorManagementPO.cityFilterInputField;
    }
    getStateFilterSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(DoctorManagementPO.stateFilterSelectDropdown);
    }
    getZipCodeFilterInputField() {
        return DoctorManagementPO.zipCodeFilterInputField;
    }
    getFacilityFilterSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(DoctorManagementPO.facilityFilterSelectDropdown);
    }
    getMarketingRepFilterSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(DoctorManagementPO.marketingRepFilterSelectDropdown);
    }
    getFilterButton() {
        return DoctorManagementPO.filterButton;
    }
    getClearButton() {
        return DoctorManagementPO.clearButton;
    }
    getDoctorManagementGrid() {
        return new DoctorManagementGrid_1.DoctorManagementGrid(DoctorManagementPO.doctorManagementGrid);
    }
}
DoctorManagementPO.adminDashboardButton = protractor_1.element(protractor_1.by.buttonText('Admin Dashboard'));
DoctorManagementPO.npiRegistrySearchButton = protractor_1.element(protractor_1.by.buttonText('NPI Registry Search'));
DoctorManagementPO.addNewDoctorButton = protractor_1.element(protractor_1.by.buttonText('Add New Doctor'));
//Filter Info
DoctorManagementPO.lastNameFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.lastNm'));
DoctorManagementPO.firstNameFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.firstNm'));
DoctorManagementPO.middleFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.middle'));
DoctorManagementPO.npiFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.npi'));
DoctorManagementPO.phoneFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.phoneNo'));
DoctorManagementPO.addressOneFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.addrLine1'));
DoctorManagementPO.addressTwoFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.addrLine2'));
DoctorManagementPO.cityFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.city'));
DoctorManagementPO.stateFilterSelectDropdown = protractor_1.element(protractor_1.by.model('filterValue.stateCd'));
DoctorManagementPO.zipCodeFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.zip'));
DoctorManagementPO.facilityFilterSelectDropdown = protractor_1.element(protractor_1.by.model('filterValue.facilityCd'));
DoctorManagementPO.marketingRepFilterSelectDropdown = protractor_1.element(protractor_1.by.model('filterValue.priMRId'));
DoctorManagementPO.filterButton = protractor_1.element(protractor_1.by.buttonText('Filter'));
DoctorManagementPO.clearButton = protractor_1.element(protractor_1.by.css('button[ng-click="clearData()"]'));
//Doctor Management Grid
DoctorManagementPO.doctorManagementGrid = protractor_1.element(protractor_1.by.id('grid1'));
exports.DoctorManagementPO = DoctorManagementPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdG9yTWFuYWdlbWVudFBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9hZG1pbmRhc2hib2FyZHBhZ2UvZG9jdG9yc2J1Y2tldC9Eb2N0b3JNYW5hZ2VtZW50UE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsMkVBQXdFO0FBQ3hFLHVGQUFvRjtBQUVwRixNQUFhLGtCQUFrQjtJQUszQix1QkFBdUI7UUFDbkIsT0FBTyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQTtJQUNsRCxDQUFDO0lBQ0QsMEJBQTBCO1FBQ3RCLE9BQU8sa0JBQWtCLENBQUMsdUJBQXVCLENBQUE7SUFDckQsQ0FBQztJQUNELHFCQUFxQjtRQUNqQixPQUFPLGtCQUFrQixDQUFDLGtCQUFrQixDQUFBO0lBQ2hELENBQUM7SUFrQkQsMkJBQTJCO1FBQ3ZCLE9BQU8sa0JBQWtCLENBQUMsd0JBQXdCLENBQUE7SUFDdEQsQ0FBQztJQUNELDRCQUE0QjtRQUN4QixPQUFPLGtCQUFrQixDQUFDLHlCQUF5QixDQUFBO0lBQ3ZELENBQUM7SUFDRCx5QkFBeUI7UUFDckIsT0FBTyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQTtJQUNwRCxDQUFDO0lBQ0Qsc0JBQXNCO1FBQ2xCLE9BQU8sa0JBQWtCLENBQUMsbUJBQW1CLENBQUE7SUFDakQsQ0FBQztJQUNELHdCQUF3QjtRQUNwQixPQUFPLGtCQUFrQixDQUFDLHFCQUFxQixDQUFBO0lBQ25ELENBQUM7SUFDRCwyQkFBMkI7UUFDdkIsT0FBTyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQTtJQUN4RCxDQUFDO0lBQ0QsMkJBQTJCO1FBQ3ZCLE9BQU8sa0JBQWtCLENBQUMsMEJBQTBCLENBQUE7SUFDeEQsQ0FBQztJQUNELHVCQUF1QjtRQUNuQixPQUFPLGtCQUFrQixDQUFDLG9CQUFvQixDQUFBO0lBQ2xELENBQUM7SUFDRCw0QkFBNEI7UUFDeEIsT0FB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