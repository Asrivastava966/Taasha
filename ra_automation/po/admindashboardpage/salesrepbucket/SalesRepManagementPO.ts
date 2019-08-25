import { element, by } from "protractor";
import { SalesRepManagementGrid } from "../../../component/comp/SalesRepManagementGrid";

export class SalesRepManagementPO {
    private static adminDashboardButton = element(by.buttonText('Admin Dashboard'));
    getAdminDashboardButton() {
        return SalesRepManagementPO.adminDashboardButton;
    }

    private static salesRepManagementGrid = element(by.className('grid'));
    getSalesRepManagementGrid() {
        return new SalesRepManagementGrid(SalesRepManagementPO.salesRepManagementGrid);
    }

    private static backToSalesRepButton = element(by.css('[ng-click=\"backtomarketingreps()\"]'));
    getBackToSalesRepButton() {
        return SalesRepManagementPO.backToSalesRepButton;
    }

    //Update Form
    private static successMessage = element(by.css('[ng-if=\"successMessage\"]'));
    getSuccessMessage() {
        return SalesRepManagementPO.successMessage;
    }

    private static firstNameInputField = element(by.model('marketingRep.payload.firstNm'));
    private static miInputField = element(by.model('marketingRep.payload.middleNm'));
    private static lastNameInputField = element(by.model('marketingRep.payload.lastNm'));
    private static statusSelectDropdown = element(by.model('marketingRep.payload.statusCd'));
    private static legacySalesIDInputField = element(by.model('marketingRep.payload.lgcSalesId'));
    private static addressOneInputField = element(by.model('marketingRep.payload.address.addressLine1'));
    private static addressTwoInputField = element(by.model('marketingRep.payload.address.addressLine2'));
    private static cityInputField = element(by.model('marketingRep.payload.address.city'));
    private static stateSelectDropdown = element(by.model('marketingRep.payload.address.state'));
    private static zipCodeInputField = element(by.model('marketingRep.payload.address.zip'));
    private static phoneInputField = element(by.model('marketingRep.payload.phoneNo'));
    private static extInputField = element(by.model('marketingRep.payload.phoneNoExt'));
    private static mobileInputField = element(by.model('marketingRep.payload.mobileNo'));
    private static faxInputField = element(by.model('marketingRep.payload.faxNo'));
    private static emailInputField = element(by.model('marketingRep.payload.email'));
    private static secondaryEmailInputField = element(by.model('marketingRep.payload.secondaryEmail'));
    private static updateButton = element(by.css('[value=\"Update\"]'));

    getFirstNameInputField() {
        return SalesRepManagementPO.firstNameInputField;
    }

    getMiInputField() {
        return SalesRepManagementPO.miInputField;
    }

    getLastNameInputField() {
        return SalesRepManagementPO.lastNameInputField;
    }

    getStatusSelectDropdown() {
        return SalesRepManagementPO.statusSelectDropdown;
    }

    getLegacySalesIDInputField() {
        return SalesRepManagementPO.legacySalesIDInputField;
    }

    getAddressOneInputField() {
        return SalesRepManagementPO.addressOneInputField;
    }

    getAddressTwoInputField() {
        return SalesRepManagementPO.addressTwoInputField;
    }

    getCityInputField() {
        return SalesRepManagementPO.cityInputField;
    }

    getStateSelectDropdown() {
        return SalesRepManagementPO.stateSelectDropdown;
    }

    getZipCodeInputField() {
        return SalesRepManagementPO.zipCodeInputField;
    }

    getPhoneInputField() {
        return SalesRepManagementPO.phoneInputField;
    }

    getExtInputField() {
        return SalesRepManagementPO.extInputField;
    }

    getMobileInputField() {
        return SalesRepManagementPO.mobileInputField;
    }

    getFaxInputField() {
        return SalesRepManagementPO.faxInputField;
    }

    getEmailInputField() {
        return SalesRepManagementPO.emailInputField;
    }

    getSecondaryEmailInputField() {
        return SalesRepManagementPO.secondaryEmailInputField;
    }

    getUpdateButton() {
        return SalesRepManagementPO.updateButton;
    }
}