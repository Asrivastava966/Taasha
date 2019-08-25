"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const UserManagementGrid_1 = require("../../../component/comp/UserManagementGrid");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
const CustomDropdownMenu_1 = require("../../../component/comp/CustomDropdownMenu");
const CustomDropdownMenuOrigin_1 = require("../../../data/enums/CustomDropdownMenuOrigin");
const DatePicker_1 = require("../../../component/comp/DatePicker");
class UserManagementPO {
    getAdminDashboardButton() {
        return UserManagementPO.adminDashboardButton;
    }
    getAddNewUserButton() {
        return UserManagementPO.addNewUserButton;
    }
    getLastNameFilterInputField() {
        return UserManagementPO.lastNameFilterInputField;
    }
    getFirstNameFilterInputField() {
        return UserManagementPO.firstNameFilterInputField;
    }
    getUserNameFilterInputField() {
        return UserManagementPO.userNameFilterInputField;
    }
    getEmailIdFilterInputField() {
        return UserManagementPO.emailIdFilterInputField;
    }
    getFilterButton() {
        return UserManagementPO.filterButton;
    }
    getUserManagementGrid() {
        return new UserManagementGrid_1.UserManagementGrid(UserManagementPO.userManagementGrid);
    }
    getBackToUsersButton() {
        return UserManagementPO.backToUsersButton;
    }
    getSuccessMessageElement() {
        return UserManagementPO.successMessageElement;
    }
    getUserNameInputField() {
        return UserManagementPO.userNameInputField;
    }
    getPasswordInputField() {
        return UserManagementPO.passwordInputField;
    }
    getRepeatPasswordInputField() {
        return UserManagementPO.resetPasswordInputField;
    }
    getStatusSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(UserManagementPO.statusSelectDropdown);
    }
    getBranchOfficeDropdown() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(UserManagementPO.branchOfficeDropdown, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.BUTTON);
    }
    getBranchOfficeSelectAllCheckbox() {
        return UserManagementPO.branchOfficeSelectAllCheckbox;
    }
    getUserTypeSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(UserManagementPO.userTypeSelectDropdown);
    }
    getRoleSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(UserManagementPO.roleSelectDropdown);
    }
    getFirstNameInputField() {
        return UserManagementPO.firstNameInputField;
    }
    getMiInputField() {
        return UserManagementPO.miInputField;
    }
    getLastNameInputField() {
        return UserManagementPO.lastNameInputField;
    }
    getBirthDatePicker() {
        return new DatePicker_1.DatePicker(UserManagementPO.birthDatePicker);
    }
    getGenderSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(UserManagementPO.genderSelectDropdown);
    }
    getAddressTypeSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(UserManagementPO.addressTypeSelectDropdown);
    }
    getAddressOneInputField() {
        return UserManagementPO.addressOneInputField;
    }
    getAddressTwoInputField() {
        return UserManagementPO.addressTwoInputField;
    }
    getCityInputField() {
        return UserManagementPO.cityInputField;
    }
    getStateSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(UserManagementPO.stateSelectDropdown);
    }
    getZipCodeInputField() {
        return UserManagementPO.zipCodeInputField;
    }
    getHomePhoneInputField() {
        return UserManagementPO.homePhoneInputField;
    }
    getOfficePhoneInputField() {
        return UserManagementPO.officePhoneInputField;
    }
    getOfficePhoneExtInputField() {
        return UserManagementPO.officePhoneExtInputField;
    }
    getMobileInputField() {
        return UserManagementPO.mobileInputField;
    }
    getFaxInputField() {
        return UserManagementPO.faxInputField;
    }
    getEmailInputField() {
        return UserManagementPO.emailInputField;
    }
    getSecondaryEmailInputField() {
        return UserManagementPO.secondaryEmailInputField;
    }
    getTechnicianTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(UserManagementPO.technicianTypeDropdown);
    }
    getSkillSetDropdown() {
        return new SelectDropdown_1.SelectDropdown(UserManagementPO.skillSetDropdown);
    }
    getWarehousesSelectAllCheckbox() {
        return UserManagementPO.warehousesSelectAllCheckbox;
    }
    getSubmitButton() {
        return UserManagementPO.submitButton;
    }
    getUpdateButton() {
        return UserManagementPO.updateButton;
    }
}
UserManagementPO.adminDashboardButton = protractor_1.element(protractor_1.by.buttonText('Admin Dashboard'));
UserManagementPO.addNewUserButton = protractor_1.element(protractor_1.by.buttonText('Add New User'));
//Filter
UserManagementPO.lastNameFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.lastNm'));
UserManagementPO.firstNameFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.firstNm'));
UserManagementPO.userNameFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.userNm'));
UserManagementPO.emailIdFilterInputField = protractor_1.element(protractor_1.by.model('filterValue.emailId'));
UserManagementPO.filterButton = protractor_1.element(protractor_1.by.css('[ng-click=\"filter()\"]'));
UserManagementPO.userManagementGrid = protractor_1.element(protractor_1.by.className('grid'));
//Form - Add New User
UserManagementPO.backToUsersButton = protractor_1.element(protractor_1.by.css('[ng-click=\"backtousers()\"]'));
UserManagementPO.successMessageElement = protractor_1.element(protractor_1.by.css('[ng-if=\"successMessage\"]'));
UserManagementPO.userNameInputField = protractor_1.element(protractor_1.by.model('user.payload.userName'));
UserManagementPO.passwordInputField = protractor_1.element(protractor_1.by.model('user.payload.password'));
UserManagementPO.resetPasswordInputField = protractor_1.element(protractor_1.by.model('user.payload.passwordRepeated'));
UserManagementPO.statusSelectDropdown = protractor_1.element(protractor_1.by.model('user.payload.statusCd'));
UserManagementPO.branchOfficeDropdown = protractor_1.element(protractor_1.by.css('[ng-click=\"toggleDropdown()\"]'));
UserManagementPO.branchOfficeSelectAllCheckbox = protractor_1.element(protractor_1.by.model('user.payload.allBOAccessFlg'));
UserManagementPO.userTypeSelectDropdown = protractor_1.element(protractor_1.by.model('user.payload.userTypeCd'));
UserManagementPO.roleSelectDropdown = protractor_1.element(protractor_1.by.model('roleVal'));
UserManagementPO.firstNameInputField = protractor_1.element(protractor_1.by.model('user.payload.firstNm'));
UserManagementPO.miInputField = protractor_1.element(protractor_1.by.model('user.payload.middleNm'));
UserManagementPO.lastNameInputField = protractor_1.element(protractor_1.by.model('user.payload.lastNm'));
UserManagementPO.birthDatePicker = protractor_1.element(protractor_1.by.model('UIDate.dob'));
UserManagementPO.genderSelectDropdown = protractor_1.element(protractor_1.by.model('user.payload.gender'));
UserManagementPO.addressTypeSelectDropdown = protractor_1.element(protractor_1.by.model('user.payload.correspondenceAddress.addressType'));
UserManagementPO.addressOneInputField = protractor_1.element(protractor_1.by.model('user.payload.correspondenceAddress.addressLine1'));
UserManagementPO.addressTwoInputField = protractor_1.element(protractor_1.by.model('user.payload.correspondenceAddress.addressLine2'));
UserManagementPO.cityInputField = protractor_1.element(protractor_1.by.model('user.payload.correspondenceAddress.city'));
UserManagementPO.stateSelectDropdown = protractor_1.element(protractor_1.by.model('user.payload.correspondenceAddress.state'));
UserManagementPO.zipCodeInputField = protractor_1.element(protractor_1.by.model('user.payload.correspondenceAddress.zip'));
UserManagementPO.homePhoneInputField = protractor_1.element(protractor_1.by.model('user.payload.phoneNo'));
UserManagementPO.officePhoneInputField = protractor_1.element(protractor_1.by.model('user.payload.officeNo'));
UserManagementPO.officePhoneExtInputField = protractor_1.element(protractor_1.by.model('user.payload.officeNoExt'));
UserManagementPO.mobileInputField = protractor_1.element(protractor_1.by.model('user.payload.mobileNo'));
UserManagementPO.faxInputField = protractor_1.element(protractor_1.by.model('user.payload.faxNo'));
UserManagementPO.emailInputField = protractor_1.element(protractor_1.by.model('user.payload.emailId'));
UserManagementPO.secondaryEmailInputField = protractor_1.element(protractor_1.by.model('user.payload.secondaryEmailId'));
//User Type:Technician specific fields
UserManagementPO.technicianTypeDropdown = protractor_1.element(protractor_1.by.id('inputTechnicianType'));
UserManagementPO.skillSetDropdown = protractor_1.element(protractor_1.by.id('inputSkillSet'));
UserManagementPO.warehousesSelectAllCheckbox = protractor_1.element(protractor_1.by.model('user.payload.allWHAccessFlg'));
UserManagementPO.submitButton = protractor_1.element(protractor_1.by.css('[value=\"Submit\"]'));
UserManagementPO.updateButton = protractor_1.element(protractor_1.by.css('[value=\"Update\"]'));
exports.UserManagementPO = UserManagementPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1hbmFnZW1lbnRQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vYWRtaW5kYXNoYm9hcmRwYWdlL3VzZXJzYnVja2V0L1VzZXJNYW5hZ2VtZW50UE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsbUZBQWdGO0FBQ2hGLDJFQUF3RTtBQUN4RSxtRkFBZ0Y7QUFDaEYsMkZBQXdGO0FBQ3hGLG1FQUFnRTtBQUVoRSxNQUFhLGdCQUFnQjtJQUd6Qix1QkFBdUI7UUFDbkIsT0FBTyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztJQUNqRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM3QyxDQUFDO0lBU0QsMkJBQTJCO1FBQ3ZCLE9BQU8sZ0JBQWdCLENBQUMsd0JBQXdCLENBQUM7SUFDckQsQ0FBQztJQUVELDRCQUE0QjtRQUN4QixPQUFPLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDO0lBQ3RELENBQUM7SUFFRCwyQkFBMkI7UUFDdkIsT0FBTyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQztJQUNyRCxDQUFDO0lBRUQsMEJBQTBCO1FBQ3RCLE9BQU8sZ0JBQWdCLENBQUMsdUJBQXVCLENBQUM7SUFDcEQsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBR0QscUJBQXFCO1FBQ2pCLE9BQU8sSUFBSSx1Q0FBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFJRCxvQkFBb0I7UUFDaEIsT0FBTyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QyxDQUFDO0lBR0Qsd0JBQXdCO1FBQ3BCLE9BQU8sZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7SUFDbEQsQ0FBQztJQXdDRCxxQkFBcUI7UUFDakIsT0FBTyxnQkFBZ0Is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