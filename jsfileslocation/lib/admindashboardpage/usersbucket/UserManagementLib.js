"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const UserManagementPO_1 = require("../../../po/admindashboardpage/usersbucket/UserManagementPO");
class UserManagementLib {
    constructor() {
        this.firstRowIndex = 1;
        this.userManagementPO = new UserManagementPO_1.UserManagementPO();
    }
    getUserManagementPO() {
        return this.userManagementPO;
    }
    navigateBackToAdminDashboardPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getAdminDashboardButton().click();
        });
    }
    navigateToAddNewUserFormPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getAddNewUserButton().click();
        });
    }
    //Filter
    searchUserUsingLastName(lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getLastNameFilterInputField().sendKeys(lastName);
        });
    }
    searchUserUsingFirstName(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getFirstNameFilterInputField().sendKeys(firstName);
        });
    }
    searchUserUsingUserName(UserName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getUserNameFilterInputField().sendKeys(UserName);
        });
    }
    searchUserUsingEmailID(emailId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getEmailIdFilterInputField().sendKeys(emailId);
        });
    }
    updateUser(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchUserUsingUserName(userName);
            yield this.getUserManagementPO().getFilterButton().click();
            yield this.getUserManagementPO().getUserManagementGrid().updateUser(this.firstRowIndex);
        });
    }
    deleteUser(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchUserUsingUserName(userName);
            yield this.getUserManagementPO().getFilterButton().click();
            yield this.getUserManagementPO().getUserManagementGrid().deleteUser(this.firstRowIndex);
        });
    }
    resetPasswordOfUser(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchUserUsingUserName(userName);
            yield this.getUserManagementPO().getFilterButton().click();
            yield this.getUserManagementPO().getUserManagementGrid().resetPasswordOfUser(this.firstRowIndex);
        });
    }
    //Form - Add New User
    navigateBackToUsersGridPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getBackToUsersButton().click();
        });
    }
    getSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getUserManagementPO().getSuccessMessageElement().getText();
        });
    }
    fillUserName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getUserNameInputField().sendKeys(userName);
        });
    }
    fillPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getPasswordInputField().sendKeys(password);
        });
    }
    fillRepeatPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getRepeatPasswordInputField().sendKeys(password);
        });
    }
    selectStatus(userStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getStatusSelectDropdown().selectOption(userStatus);
        });
    }
    selectBranchOffice(branchOffice) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getBranchOfficeDropdown().selectDropdownMenuOptionByLinkText(branchOffice);
        });
    }
    selectAllBranchOffices() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getBranchOfficeSelectAllCheckbox().click();
        });
    }
    selectUserType(userType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getUserTypeSelectDropdown().selectOption(userType);
        });
    }
    selectRole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getRoleSelectDropdown().selectOption(role);
        });
    }
    fillFirstName(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getFirstNameInputField().sendKeys(firstName);
        });
    }
    fillMI(mi) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getMiInputField().sendKeys(mi);
        });
    }
    fillLastName(lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getLastNameInputField().sendKeys(lastName);
        });
    }
    selectBirthDate(birthDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getUserManagementPO().getBirthDatePicker().selectDate(birthDate, isDatePickerSmall);
        });
    }
    selectGender(gender) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getGenderSelectDropdown().selectOption(gender);
        });
    }
    selectAddressType(addressType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getAddressTypeSelectDropdown().selectOption(addressType);
        });
    }
    fillAddressOne(addressOne) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getAddressOneInputField().sendKeys(addressOne);
        });
    }
    fillAddressTwo(addressTwo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getAddressTwoInputField().sendKeys(addressTwo);
        });
    }
    fillCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getCityInputField().sendKeys(city);
        });
    }
    selectState(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getStateSelectDropdown().selectOption(state);
        });
    }
    fillZipCode(zipCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getZipCodeInputField().sendKeys(zipCode);
        });
    }
    fillHomePhone(homePhoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getHomePhoneInputField().sendKeys(homePhoneNumber);
        });
    }
    fillOfficePhone(officePhoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getOfficePhoneInputField().sendKeys(officePhoneNumber);
        });
    }
    fillOfficePhoneExtNumber(officePhoneExtNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getOfficePhoneExtInputField().sendKeys(officePhoneExtNumber);
        });
    }
    fillMobile(mobileNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getMobileInputField().sendKeys(mobileNumber);
        });
    }
    fillFax(faxNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getFaxInputField().sendKeys(faxNumber);
        });
    }
    fillEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getEmailInputField().sendKeys(email);
        });
    }
    fillSecondaryEmail(secondaryEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getSecondaryEmailInputField().sendKeys(secondaryEmail);
        });
    }
    selectTechnicianType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getTechnicianTypeDropdown().selectOption(type);
        });
    }
    selectSkillSet(skillSet) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getSkillSetDropdown().selectOption(skillSet);
        });
    }
    checkWarehouseSelectAllCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getWarehousesSelectAllCheckbox().click();
        });
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getSubmitButton().click();
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserManagementPO().getUpdateButton().click();
        });
    }
    fillUserInfo(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Filling in the -User Info- form:: Username:" + userInfo.getUserName() + ", User Type:" + userInfo.getUserType());
            if (userInfo.getUserName() != null) {
                yield this.fillUserName(userInfo.getUserName());
            }
            if (userInfo.getPassword() != null) {
                yield this.fillPassword(userInfo.getPassword());
            }
            if (userInfo.getRepeatPassword() != null) {
                yield this.fillRepeatPassword(userInfo.getRepeatPassword());
            }
            if (userInfo.getStatus() != null) {
                yield this.selectStatus(userInfo.getStatus());
            }
            if (userInfo.getBranchOfficeSelectAllCheckbox() != null) {
                yield this.selectAllBranchOffices();
            }
            if (userInfo.getBranchOffice() != null) {
                yield this.selectBranchOffice(userInfo.getBranchOffice());
            }
            if (userInfo.getUserType() != null) {
                yield this.selectUserType(userInfo.getUserType());
            }
            if (userInfo.getRole() != null) {
                yield this.selectRole(userInfo.getRole());
            }
            if (userInfo.getFirstName() != null) {
                yield this.fillFirstName(userInfo.getFirstName());
            }
            if (userInfo.getMi() != null) {
                yield this.fillMI(userInfo.getMi());
            }
            if (userInfo.getLastName() != null) {
                yield this.fillLastName(userInfo.getLastName());
            }
            if (userInfo.getBirthDate() != null) {
                yield this.selectBirthDate(userInfo.getBirthDate());
            }
            if (userInfo.getGender() != null) {
                yield this.selectGender(userInfo.getGender());
            }
            if (userInfo.getAddressType() != null) {
                yield this.selectAddressType(userInfo.getAddressType());
            }
            if (userInfo.getAddressOne() != null) {
                yield this.fillAddressOne(userInfo.getAddressOne());
            }
            if (userInfo.getAddressTwo() != null) {
                yield this.fillAddressTwo(userInfo.getAddressTwo());
            }
            if (userInfo.getCity() != null) {
                yield this.fillCity(userInfo.getCity());
            }
            if (userInfo.getState() != null) {
                yield this.selectState(userInfo.getState());
            }
            if (userInfo.getZipCode() != null) {
                yield this.fillZipCode(userInfo.getZipCode());
            }
            if (userInfo.getHomePhoneNumber() != null) {
                yield this.fillHomePhone(userInfo.getHomePhoneNumber());
            }
            if (userInfo.getOfficePhoneNumber() != null) {
                yield this.fillOfficePhone(userInfo.getOfficePhoneNumber());
            }
            if (userInfo.getOfficePhoneExtNumber() != null) {
                yield this.fillOfficePhoneExtNumber(userInfo.getOfficePhoneExtNumber());
            }
            if (userInfo.getMobileNumber() != null) {
                yield this.fillMobile(userInfo.getMobileNumber());
            }
            if (userInfo.getFaxNumber() != null) {
                yield this.fillFax(userInfo.getFaxNumber());
            }
            if (userInfo.getEmail() != null) {
                yield this.fillEmail(userInfo.getEmail());
            }
            if (userInfo.getSecondaryEmail() != null) {
                yield this.fillSecondaryEmail(userInfo.getSecondaryEmail());
            }
            if (userInfo.getTechnicianType() != null) {
                yield this.selectTechnicianType(userInfo.getTechnicianType());
            }
            if (userInfo.getSkillSet() != null) {
                yield this.selectSkillSet(userInfo.getSkillSet());
            }
            if (userInfo.getWarehouseSelectAllFlag() != null) {
                if (userInfo.getWarehouseSelectAllFlag() == true) {
                    yield this.checkWarehouseSelectAllCheckbox();
                }
            }
        });
    }
}
exports.UserManagementLib = UserManagementLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1hbmFnZW1lbnRMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9hZG1pbmRhc2hib2FyZHBhZ2UvdXNlcnNidWNrZXQvVXNlck1hbmFnZW1lbnRMaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyxrR0FBK0Y7QUFTL0YsTUFBYSxpQkFBaUI7SUFJMUI7UUFGUSxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUd0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQkFBbUI7UUFDZixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBRUssZ0NBQWdDOztZQUNsQyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkUsQ0FBQztLQUFBO0lBRUssNEJBQTRCOztZQUM5QixNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkUsQ0FBQztLQUFBO0lBRUQsUUFBUTtJQUNGLHVCQUF1QixDQUFFLFFBQWU7O1lBQzFDLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEYsQ0FBQztLQUFBO0lBRUssd0JBQXdCLENBQUUsU0FBZ0I7O1lBQzVDLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEYsQ0FBQztLQUFBO0lBRUssdUJBQXVCLENBQUUsUUFBZTs7WUFDMUMsTUFBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxD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