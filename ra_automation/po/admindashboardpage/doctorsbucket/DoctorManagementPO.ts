import { element, by } from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";
import { DoctorManagementGrid } from "../../../component/comp/DoctorManagementGrid";

export class DoctorManagementPO {
    private static adminDashboardButton = element(by.buttonText('Admin Dashboard'));
    private static npiRegistrySearchButton = element(by.buttonText('NPI Registry Search'))
    private static addNewDoctorButton = element(by.buttonText('Add New Doctor'))

    getAdminDashboardButton() {
        return DoctorManagementPO.adminDashboardButton
    }
    getNPIRegistrySearchButton() {
        return DoctorManagementPO.npiRegistrySearchButton
    }
    getAddNewDoctorButton() {
        return DoctorManagementPO.addNewDoctorButton
    }

    //Filter Info
    private static lastNameFilterInputField = element(by.model('filterValue.lastNm'))
    private static firstNameFilterInputField = element(by.model('filterValue.firstNm'))
    private static middleFilterInputField = element(by.model('filterValue.middle'))
    private static npiFilterInputField = element(by.model('filterValue.npi'))
    private static phoneFilterInputField = element(by.model('filterValue.phoneNo'))
    private static addressOneFilterInputField = element(by.model('filterValue.addrLine1'))
    private static addressTwoFilterInputField = element(by.model('filterValue.addrLine2'))
    private static cityFilterInputField = element(by.model('filterValue.city'))
    private static stateFilterSelectDropdown = element(by.model('filterValue.stateCd'))
    private static zipCodeFilterInputField = element(by.model('filterValue.zip'))
    private static facilityFilterSelectDropdown = element(by.model('filterValue.facilityCd'))
    private static marketingRepFilterSelectDropdown = element(by.model('filterValue.priMRId'))
    private static filterButton = element(by.buttonText('Filter'))
    private static clearButton = element(by.css('button[ng-click="clearData()"]'));

    getLastNameFilterInputField() {
        return DoctorManagementPO.lastNameFilterInputField
    }
    getFirstNameFilterInputField() {
        return DoctorManagementPO.firstNameFilterInputField
    }
    getMiddleFilterInputField() {
        return DoctorManagementPO.middleFilterInputField
    }
    getNpiFilterInputField() {
        return DoctorManagementPO.npiFilterInputField
    }
    getPhoneFilterInputField() {
        return DoctorManagementPO.phoneFilterInputField
    }
    getAddress1FilterInputField() {
        return DoctorManagementPO.addressOneFilterInputField
    }
    getAddress2FilterInputField() {
        return DoctorManagementPO.addressTwoFilterInputField
    }
    getCityFilterInputField() {
        return DoctorManagementPO.cityFilterInputField
    }
    getStateFilterSelectDropdown() {
        return new SelectDropdown(DoctorManagementPO.stateFilterSelectDropdown)
    }
    getZipCodeFilterInputField() {
        return DoctorManagementPO.zipCodeFilterInputField
    }
    getFacilityFilterSelectDropdown() {
        return new SelectDropdown(DoctorManagementPO.facilityFilterSelectDropdown)
    }
    getMarketingRepFilterSelectDropdown() {
        return new SelectDropdown(DoctorManagementPO.marketingRepFilterSelectDropdown)
    }
    getFilterButton() {
        return DoctorManagementPO.filterButton
    }
    getClearButton() {
        return DoctorManagementPO.clearButton;
    }

    //Doctor Management Grid
    private static doctorManagementGrid = element(by.id('grid1'));
    getDoctorManagementGrid() {
        return new DoctorManagementGrid(DoctorManagementPO.doctorManagementGrid);
    }
}