import { browser } from "protractor";
import { UserManagementPO } from "../../../po/admindashboardpage/usersbucket/UserManagementPO";
import { UserStatus } from "../../../data/enums/UserStatus";
import { UserType } from "../../../data/enums/UserType";
import { Gender } from "../../../data/enums/Gender";
import { AddressType } from "../../../data/enums/AddressType";
import { UserInfo } from "../../../data/info/UserInfo";
import { TechnicianType } from "../../../data/enums/TechnicianType";
import { SkillSet } from "../../../data/enums/SkillSet";

export class UserManagementLib {
    userManagementPO:UserManagementPO;
    private firstRowIndex = 1;

    constructor() {
        this.userManagementPO = new UserManagementPO();
    }

    getUserManagementPO() {
        return this.userManagementPO;
    }

    async navigateBackToAdminDashboardPage() {
        await this.getUserManagementPO().getAdminDashboardButton().click();
    }

    async navigateToAddNewUserFormPage() {
        await this.getUserManagementPO().getAddNewUserButton().click();
    }

    //Filter
    async searchUserUsingLastName (lastName:string) {
        await this.getUserManagementPO().getLastNameFilterInputField().sendKeys(lastName);
    }

    async searchUserUsingFirstName (firstName:string) {
        await this.getUserManagementPO().getFirstNameFilterInputField().sendKeys(firstName);
    }

    async searchUserUsingUserName (UserName:string) {
        await this.getUserManagementPO().getUserNameFilterInputField().sendKeys(UserName);
    }

    async searchUserUsingEmailID (emailId:string) {
        await this.getUserManagementPO().getEmailIdFilterInputField().sendKeys(emailId);
    }

    async updateUser(userName:string) {
        await this.searchUserUsingUserName(userName);
        await this.getUserManagementPO().getFilterButton().click();
        await this.getUserManagementPO().getUserManagementGrid().updateUser(this.firstRowIndex);
    }

    async deleteUser(userName:string) {
        await this.searchUserUsingUserName(userName);
        await this.getUserManagementPO().getFilterButton().click();
        await this.getUserManagementPO().getUserManagementGrid().deleteUser(this.firstRowIndex);
    }

    async resetPasswordOfUser(userName:string) {
        await this.searchUserUsingUserName(userName);
        await this.getUserManagementPO().getFilterButton().click();
        await this.getUserManagementPO().getUserManagementGrid().resetPasswordOfUser(this.firstRowIndex);
    }

    //Form - Add New User
    async navigateBackToUsersGridPage() {
        await this.getUserManagementPO().getBackToUsersButton().click();
    }

    async getSuccessMessage() {
        return await this.getUserManagementPO().getSuccessMessageElement().getText();
    }

    async fillUserName(userName:string) {
        await this.getUserManagementPO().getUserNameInputField().sendKeys(userName);
    }

    async fillPassword(password:string) {
        await this.getUserManagementPO().getPasswordInputField().sendKeys(password);
    }

    async fillRepeatPassword(password:string) {
        await this.getUserManagementPO().getRepeatPasswordInputField().sendKeys(password);
    }

    async selectStatus(userStatus:UserStatus) {
        await this.getUserManagementPO().getStatusSelectDropdown().selectOption(userStatus);
    }

    async selectBranchOffice(branchOffice:string) {
        await this.getUserManagementPO().getBranchOfficeDropdown().selectDropdownMenuOptionByLinkText(branchOffice);
    }

    async selectAllBranchOffices() {
        await this.getUserManagementPO().getBranchOfficeSelectAllCheckbox().click();
    }

    async selectUserType(userType:UserType) {
        await this.getUserManagementPO().getUserTypeSelectDropdown().selectOption(userType);
    }

    async selectRole(role:string) {
        await this.getUserManagementPO().getRoleSelectDropdown().selectOption(role);
    }

    async fillFirstName(firstName:string) {
        await this.getUserManagementPO().getFirstNameInputField().sendKeys(firstName);
    }

    async fillMI(mi:string) {
        await this.getUserManagementPO().getMiInputField().sendKeys(mi);
    }

    async fillLastName(lastName:string) {
        await this.getUserManagementPO().getLastNameInputField().sendKeys(lastName);
    }

    async selectBirthDate(birthDate:Date) {
        let isDatePickerSmall = false;
        await this.getUserManagementPO().getBirthDatePicker().selectDate(birthDate, isDatePickerSmall);
    }

    async selectGender(gender:Gender) {
        await this.getUserManagementPO().getGenderSelectDropdown().selectOption(gender);
    }

    async selectAddressType(addressType:AddressType) {
        await this.getUserManagementPO().getAddressTypeSelectDropdown().selectOption(addressType);
    }

    async fillAddressOne(addressOne:string) {
        await this.getUserManagementPO().getAddressOneInputField().sendKeys(addressOne);
    }

    async fillAddressTwo(addressTwo:string) {
        await this.getUserManagementPO().getAddressTwoInputField().sendKeys(addressTwo);
    }

    async fillCity(city:string) {
        await this.getUserManagementPO().getCityInputField().sendKeys(city);
    }

    async selectState(state:string) {
        await this.getUserManagementPO().getStateSelectDropdown().selectOption(state);
    }

    async fillZipCode(zipCode:string) {
        await this.getUserManagementPO().getZipCodeInputField().sendKeys(zipCode);
    }

    async fillHomePhone(homePhoneNumber:string) {
        await this.getUserManagementPO().getHomePhoneInputField().sendKeys(homePhoneNumber);
    }

    async fillOfficePhone(officePhoneNumber:string) {
        await this.getUserManagementPO().getOfficePhoneInputField().sendKeys(officePhoneNumber);
    }

    async fillOfficePhoneExtNumber(officePhoneExtNumber:string) {
        await this.getUserManagementPO().getOfficePhoneExtInputField().sendKeys(officePhoneExtNumber);
    }

    async fillMobile(mobileNumber:string) {
        await this.getUserManagementPO().getMobileInputField().sendKeys(mobileNumber);
    }

    async fillFax(faxNumber:string) {
        await this.getUserManagementPO().getFaxInputField().sendKeys(faxNumber);
    }

    async fillEmail(email:string) {
        await this.getUserManagementPO().getEmailInputField().sendKeys(email);
    }

    async fillSecondaryEmail(secondaryEmail:string) {
        await this.getUserManagementPO().getSecondaryEmailInputField().sendKeys(secondaryEmail);
    }

    async selectTechnicianType(type:TechnicianType) {
        await this.getUserManagementPO().getTechnicianTypeDropdown().selectOption(type);
    }

    async selectSkillSet(skillSet:SkillSet) {
        await this.getUserManagementPO().getSkillSetDropdown().selectOption(skillSet);
    }

    async checkWarehouseSelectAllCheckbox() {
        await this.getUserManagementPO().getWarehousesSelectAllCheckbox().click();
    }

    async submit() {
        await this.getUserManagementPO().getSubmitButton().click();
    }

    async update() {
        await this.getUserManagementPO().getUpdateButton().click();
    }

    async fillUserInfo(userInfo:UserInfo) {
        browser.logger.info("Filling in the -User Info- form:: Username:" + userInfo.getUserName() + ", User Type:" + userInfo.getUserType());

        if(userInfo.getUserName() != null) {
            await this.fillUserName(userInfo.getUserName());
        }

        if(userInfo.getPassword() != null) {
            await this.fillPassword(userInfo.getPassword());
        }

        if(userInfo.getRepeatPassword() != null) {
            await this.fillRepeatPassword(userInfo.getRepeatPassword());
        }

        if(userInfo.getStatus() != null) {
            await this.selectStatus(userInfo.getStatus());
        }

        if(userInfo.getBranchOfficeSelectAllCheckbox() != null) {
            await this.selectAllBranchOffices();
        }

        if(userInfo.getBranchOffice() != null) {
            await this.selectBranchOffice(userInfo.getBranchOffice());
        }

        if(userInfo.getUserType() != null) {
            await this.selectUserType(userInfo.getUserType());
        }

        if(userInfo.getRole() != null) {
            await this.selectRole(userInfo.getRole());
        }

        if(userInfo.getFirstName() != null) {
            await this.fillFirstName(userInfo.getFirstName());
        }
        
        if(userInfo.getMi() != null) {
            await this.fillMI(userInfo.getMi());
        }

        if(userInfo.getLastName() != null) {
            await this.fillLastName(userInfo.getLastName());
        }
        
        if(userInfo.getBirthDate() != null) {
            await this.selectBirthDate(userInfo.getBirthDate());
        }

        if(userInfo.getGender() != null) {
            await this.selectGender(userInfo.getGender());
        }

        if(userInfo.getAddressType() != null) {
            await this.selectAddressType(userInfo.getAddressType());
        }

        if(userInfo.getAddressOne() != null) {
            await this.fillAddressOne(userInfo.getAddressOne());
        }

        if(userInfo.getAddressTwo() != null) {
            await this.fillAddressTwo(userInfo.getAddressTwo());
        }

        if(userInfo.getCity() != null) {
            await this.fillCity(userInfo.getCity());
        }

        if(userInfo.getState() != null) {
            await this.selectState(userInfo.getState());
        }

        if(userInfo.getZipCode() != null) {
            await this.fillZipCode(userInfo.getZipCode());
        }

        if(userInfo.getHomePhoneNumber() != null) {
            await this.fillHomePhone(userInfo.getHomePhoneNumber());
        }

        if(userInfo.getOfficePhoneNumber() != null) {
            await this.fillOfficePhone(userInfo.getOfficePhoneNumber());
        }

        if(userInfo.getOfficePhoneExtNumber() != null) {
            await this.fillOfficePhoneExtNumber(userInfo.getOfficePhoneExtNumber());
        }

        if(userInfo.getMobileNumber() != null) {
            await this.fillMobile(userInfo.getMobileNumber());
        }

        if(userInfo.getFaxNumber() != null) {
            await this.fillFax(userInfo.getFaxNumber());
        }

        if(userInfo.getEmail() != null) {
            await this.fillEmail(userInfo.getEmail());
        }

        if(userInfo.getSecondaryEmail() != null) {
            await this.fillSecondaryEmail(userInfo.getSecondaryEmail());
        }

        if(userInfo.getTechnicianType() != null) {
            await this.selectTechnicianType(userInfo.getTechnicianType());
        }

        if(userInfo.getSkillSet() != null) {
            await this.selectSkillSet(userInfo.getSkillSet());
        }

        if(userInfo.getWarehouseSelectAllFlag() != null) {
            if(userInfo.getWarehouseSelectAllFlag() == true) {
                await this.checkWarehouseSelectAllCheckbox();
            }
        }
    }
}