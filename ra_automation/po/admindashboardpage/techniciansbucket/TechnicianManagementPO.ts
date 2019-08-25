import { element, by } from "protractor";
import { TechnicianManagementGrid } from "../../../component/comp/TechnicianManagementGrid";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";

export class TechnicianManagementPO {
    private static adminDashboardButton = element(by.buttonText('Admin Dashboard'));
    getAdminDashboardButton() {
        return TechnicianManagementPO.adminDashboardButton;
    }

    private static technicianManagementGrid = element(by.className('grid'));
    getTechnicianManagementGrid() {
        return new TechnicianManagementGrid(TechnicianManagementPO.technicianManagementGrid);
    }

    private static successMessage = element(by.css('[ng-if=\"successMessage\"]'));
    getSuccessMessage() {
        return TechnicianManagementPO.successMessage;
    }

    private static backToTechniciansButton = element(by.css('[ng-click=\"backtotechnicians()\"]'));
    getBackToTechniciansButton() {
        return TechnicianManagementPO.backToTechniciansButton;
    }

    //Update Form
    private static firstNameInputField = element(by.model('technician.payload.firstNm'));
    private static miInputField = element(by.model('technician.payload.middleNm'));
    private static lastNameInputField = element(by.model('technician.payload.lastNm'));
    private static skillSetSelectDropdown = element(by.model('technician.payload.skillSetCd'));
    private static technicianTypeSelectDropdown = element(by.model('technician.payload.techTypeCd'));
    private static statusSelectDropdown = element(by.model('technician.payload.statusCd'));
    private static warehousesSelectAllCheckbox = element(by.model('technician.payload.allWHAccessFlg'));
    private static emailInputField = element(by.model('technician.payload.email'));
    private static phoneInputField = element(by.model('technician.payload.phoneNo'));
    private static extInputField = element(by.model('technician.payload.phoneNoExt'));
    private static addressOneInputField = element(by.model('technician.payload.address.addressLine1'));
    private static addressTwoInputField = element(by.model('technician.payload.address.addressLine2'));
    private static cityInputField = element(by.model('technician.payload.address.city'));
    private static stateSelectDropdown = element(by.model('technician.payload.address.state'));
    private static zipCodeInputField = element(by.model('technician.payload.address.zip'));
    private static notesTextarea = element(by.model('technician.payload.notes'));
    private static updateButton = element(by.css('[value=\"Update\"]'));

    getFirstNameInputField() {
        return TechnicianManagementPO.firstNameInputField;
    }

    getMiInputField() {
        return TechnicianManagementPO.miInputField;
    }

    getLastNameInputField() {
        return TechnicianManagementPO.lastNameInputField;
    }

    getSkillSetSelectDropdown() {
        return new SelectDropdown(TechnicianManagementPO.skillSetSelectDropdown);
    }

    getTechnicianTypeSelectDropdown() {
        return new SelectDropdown(TechnicianManagementPO.technicianTypeSelectDropdown);
    }

    getStatusSelectDropdown() {
        return new SelectDropdown(TechnicianManagementPO.statusSelectDropdown);
    }

    getWarehousesSelectAllCheckbox() {
        return TechnicianManagementPO.warehousesSelectAllCheckbox;
    }

    getEmailInputField() {
        return TechnicianManagementPO.emailInputField;
    }

    getPhoneInputField() {
        return TechnicianManagementPO.phoneInputField;
    }

    getExtInputField() {
        return TechnicianManagementPO.extInputField;
    }

    getAddressOneInputField() {
        return TechnicianManagementPO.addressOneInputField;
    }

    getAddressTwoInputField() {
        return TechnicianManagementPO.addressTwoInputField;
    }

    getCityInputField() {
        return TechnicianManagementPO.cityInputField;
    }

    getStateSelectDropdown() {
        return TechnicianManagementPO.stateSelectDropdown;
    }

    getZipCodeInputField() {
        return TechnicianManagementPO.zipCodeInputField;
    }

    getNotesTextarea() {
        return TechnicianManagementPO.notesTextarea;
    }

    getUpdateButton() {
        return TechnicianManagementPO.updateButton;
    }
}