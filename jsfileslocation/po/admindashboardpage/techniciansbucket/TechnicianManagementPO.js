"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const TechnicianManagementGrid_1 = require("../../../component/comp/TechnicianManagementGrid");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
class TechnicianManagementPO {
    getAdminDashboardButton() {
        return TechnicianManagementPO.adminDashboardButton;
    }
    getTechnicianManagementGrid() {
        return new TechnicianManagementGrid_1.TechnicianManagementGrid(TechnicianManagementPO.technicianManagementGrid);
    }
    getSuccessMessage() {
        return TechnicianManagementPO.successMessage;
    }
    getBackToTechniciansButton() {
        return TechnicianManagementPO.backToTechniciansButton;
    }
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
        return new SelectDropdown_1.SelectDropdown(TechnicianManagementPO.skillSetSelectDropdown);
    }
    getTechnicianTypeSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(TechnicianManagementPO.technicianTypeSelectDropdown);
    }
    getStatusSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(TechnicianManagementPO.statusSelectDropdown);
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
TechnicianManagementPO.adminDashboardButton = protractor_1.element(protractor_1.by.buttonText('Admin Dashboard'));
TechnicianManagementPO.technicianManagementGrid = protractor_1.element(protractor_1.by.className('grid'));
TechnicianManagementPO.successMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"successMessage\"]'));
TechnicianManagementPO.backToTechniciansButton = protractor_1.element(protractor_1.by.css('[ng-click=\"backtotechnicians()\"]'));
//Update Form
TechnicianManagementPO.firstNameInputField = protractor_1.element(protractor_1.by.model('technician.payload.firstNm'));
TechnicianManagementPO.miInputField = protractor_1.element(protractor_1.by.model('technician.payload.middleNm'));
TechnicianManagementPO.lastNameInputField = protractor_1.element(protractor_1.by.model('technician.payload.lastNm'));
TechnicianManagementPO.skillSetSelectDropdown = protractor_1.element(protractor_1.by.model('technician.payload.skillSetCd'));
TechnicianManagementPO.technicianTypeSelectDropdown = protractor_1.element(protractor_1.by.model('technician.payload.techTypeCd'));
TechnicianManagementPO.statusSelectDropdown = protractor_1.element(protractor_1.by.model('technician.payload.statusCd'));
TechnicianManagementPO.warehousesSelectAllCheckbox = protractor_1.element(protractor_1.by.model('technician.payload.allWHAccessFlg'));
TechnicianManagementPO.emailInputField = protractor_1.element(protractor_1.by.model('technician.payload.email'));
TechnicianManagementPO.phoneInputField = protractor_1.element(protractor_1.by.model('technician.payload.phoneNo'));
TechnicianManagementPO.extInputField = protractor_1.element(protractor_1.by.model('technician.payload.phoneNoExt'));
TechnicianManagementPO.addressOneInputField = protractor_1.element(protractor_1.by.model('technician.payload.address.addressLine1'));
TechnicianManagementPO.addressTwoInputField = protractor_1.element(protractor_1.by.model('technician.payload.address.addressLine2'));
TechnicianManagementPO.cityInputField = protractor_1.element(protractor_1.by.model('technician.payload.address.city'));
TechnicianManagementPO.stateSelectDropdown = protractor_1.element(protractor_1.by.model('technician.payload.address.state'));
TechnicianManagementPO.zipCodeInputField = protractor_1.element(protractor_1.by.model('technician.payload.address.zip'));
TechnicianManagementPO.notesTextarea = protractor_1.element(protractor_1.by.model('technician.payload.notes'));
TechnicianManagementPO.updateButton = protractor_1.element(protractor_1.by.css('[value=\"Update\"]'));
exports.TechnicianManagementPO = TechnicianManagementPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVjaG5pY2lhbk1hbmFnZW1lbnRQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vYWRtaW5kYXNoYm9hcmRwYWdlL3RlY2huaWNpYW5zYnVja2V0L1RlY2huaWNpYW5NYW5hZ2VtZW50UE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsK0ZBQTRGO0FBQzVGLDJFQUF3RTtBQUV4RSxNQUFhLHNCQUFzQjtJQUUvQix1QkFBdUI7UUFDbkIsT0FBTyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQztJQUN2RCxDQUFDO0lBR0QsMkJBQTJCO1FBQ3ZCLE9BQU8sSUFBSSxtREFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFHRCxpQkFBaUI7UUFDYixPQUFPLHNCQUFzQixDQUFDLGNBQWMsQ0FBQztJQUNqRCxDQUFDO0lBR0QsMEJBQTBCO1FBQ3RCLE9BQU8sc0JBQXNCLENBQUMsdUJBQXVCLENBQUM7SUFDMUQsQ0FBQztJQXFCRCxzQkFBc0I7UUFDbEIsT0FBTyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUN0RCxDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sc0JBQXNCLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUM7SUFFRCxxQkFBcUI7UUFDakIsT0FBTyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUJBQXlCO1FBQ3JCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELCtCQUErQjtRQUMzQixPQUFPLElBQUksK0JBQWMsQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCx1QkFBdUI7UUFDbkIsT0FBTyxJQUFJLCtCQUFjLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJ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