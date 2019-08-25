import { element, by } from "protractor";
import { UserManagementGrid } from "../../../component/comp/UserManagementGrid";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";
import { CustomDropdownMenu } from "../../../component/comp/CustomDropdownMenu";
import { CustomDropdownMenuOrigin } from "../../../data/enums/CustomDropdownMenuOrigin";
import { DatePicker } from "../../../component/comp/DatePicker";

export class UserManagementPO {
    private static adminDashboardButton = element(by.buttonText('Admin Dashboard'));
    private static addNewUserButton = element(by.buttonText('Add New User'));
    getAdminDashboardButton() {
        return UserManagementPO.adminDashboardButton;
    }

    getAddNewUserButton() {
        return UserManagementPO.addNewUserButton;
    }

    //Filter
    private static lastNameFilterInputField = element(by.model('filterValue.lastNm'));
    private static firstNameFilterInputField = element(by.model('filterValue.firstNm'));
    private static userNameFilterInputField = element(by.model('filterValue.userNm'));
    private static emailIdFilterInputField = element(by.model('filterValue.emailId'));
    private static filterButton = element(by.css('[ng-click=\"filter()\"]'));
    
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

    private static userManagementGrid = element(by.className('grid'));
    getUserManagementGrid() {
        return new UserManagementGrid(UserManagementPO.userManagementGrid);
    }

    //Form - Add New User
    private static backToUsersButton = element(by.css('[ng-click=\"backtousers()\"]'));
    getBackToUsersButton() {
        return UserManagementPO.backToUsersButton;
    }

    private static successMessageElement = element(by.css('[ng-if=\"successMessage\"]'));
    getSuccessMessageElement() {
        return UserManagementPO.successMessageElement;
    }

    private static userNameInputField = element(by.model('user.payload.userName'));
    private static passwordInputField = element(by.model('user.payload.password'));
    private static resetPasswordInputField = element(by.model('user.payload.passwordRepeated'));
    private static statusSelectDropdown = element(by.model('user.payload.statusCd'));
    private static branchOfficeDropdown = element(by.css('[ng-click=\"toggleDropdown()\"]'));
    private static branchOfficeSelectAllCheckbox = element(by.model('user.payload.allBOAccessFlg'));
    private static userTypeSelectDropdown = element(by.model('user.payload.userTypeCd'));
    private static roleSelectDropdown = element(by.model('roleVal'));
    
    private static firstNameInputField = element(by.model('user.payload.firstNm'));
    private static miInputField = element(by.model('user.payload.middleNm'));
    private static lastNameInputField = element(by.model('user.payload.lastNm'));
    private static birthDatePicker = element(by.model('UIDate.dob'));
    private static genderSelectDropdown = element(by.model('user.payload.gender'));
    
    private static addressTypeSelectDropdown = element(by.model('user.payload.correspondenceAddress.addressType'));
    private static addressOneInputField = element(by.model('user.payload.correspondenceAddress.addressLine1'));
    private static addressTwoInputField = element(by.model('user.payload.correspondenceAddress.addressLine2'));
    private static cityInputField = element(by.model('user.payload.correspondenceAddress.city'));
    private static stateSelectDropdown = element(by.model('user.payload.correspondenceAddress.state'));
    private static zipCodeInputField = element(by.model('user.payload.correspondenceAddress.zip'));
    
    private static homePhoneInputField = element(by.model('user.payload.phoneNo'));
    private static officePhoneInputField = element(by.model('user.payload.officeNo'));
    private static officePhoneExtInputField = element(by.model('user.payload.officeNoExt'));
    private static mobileInputField = element(by.model('user.payload.mobileNo'));
    private static faxInputField = element(by.model('user.payload.faxNo'));
    private static emailInputField = element(by.model('user.payload.emailId'));
    private static secondaryEmailInputField = element(by.model('user.payload.secondaryEmailId'));

    //User Type:Technician specific fields
    private static technicianTypeDropdown = element(by.id('inputTechnicianType'));
    private static skillSetDropdown = element(by.id('inputSkillSet'));
    private static warehousesSelectAllCheckbox = element(by.model('user.payload.allWHAccessFlg'));

    private static submitButton = element(by.css('[value=\"Submit\"]'));
    private static updateButton = element(by.css('[value=\"Update\"]'));

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
        return new SelectDropdown(UserManagementPO.statusSelectDropdown);
    }

    getBranchOfficeDropdown() {
        return new CustomDropdownMenu(UserManagementPO.branchOfficeDropdown, CustomDropdownMenuOrigin.BUTTON);
    }

    getBranchOfficeSelectAllCheckbox() {
        return UserManagementPO.branchOfficeSelectAllCheckbox;
    }

    getUserTypeSelectDropdown() {
        return new SelectDropdown(UserManagementPO.userTypeSelectDropdown);
    }

    getRoleSelectDropdown() {
        return new SelectDropdown(UserManagementPO.roleSelectDropdown);
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
        return new DatePicker(UserManagementPO.birthDatePicker);
    }

    getGenderSelectDropdown() {
        return new SelectDropdown(UserManagementPO.genderSelectDropdown);
    }

    getAddressTypeSelectDropdown() {
        return new SelectDropdown(UserManagementPO.addressTypeSelectDropdown);
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
        return new SelectDropdown(UserManagementPO.stateSelectDropdown);
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
        return new SelectDropdown(UserManagementPO.technicianTypeDropdown);
    }

    getSkillSetDropdown() {
        return new SelectDropdown(UserManagementPO.skillSetDropdown);
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