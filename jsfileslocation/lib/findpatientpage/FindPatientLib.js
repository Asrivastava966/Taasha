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
const FindPatientPO_1 = require("../../po/findpatientpage/FindPatientPO");
class FindPatientLib {
    constructor() {
        //Existing Patient(s) table 
        this.lastNameColumnIndex = 1;
        this.firstNameColumnIndex = 2;
        this.dobColumnIndex = 3;
        this.emailColumnIndex = 9;
        this.findPatientPO = new FindPatientPO_1.FindPatientPO();
    }
    getFindPatientPO() {
        return this.findPatientPO;
    }
    searchPatientWithLastName(lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getLastNameInputField().sendKeys(lastName);
        });
    }
    searchPatientWithFirstName(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getFirstNameInputField().sendKeys(firstName);
        });
    }
    searchPatientWithBirthDate(birthDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getFindPatientPO().getBirthDateInputField().selectDate(birthDate, isDatePickerSmall);
        });
    }
    searchPatientWithPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getPhoneInputField().sendKeys(phoneNumber);
        });
    }
    searchPatientWithEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getEmailInputField().sendKeys(email);
        });
    }
    searchPatientWithAddressOne(addressOne) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getAddressOneInputField().sendKeys(addressOne);
        });
    }
    searchPatientWithAddressTwo(addressTwo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getAddressTwoInputField().sendKeys(addressTwo);
        });
    }
    searchPatientWithCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getCityInputField().sendKeys(city);
        });
    }
    searchPatientWithState(state) {
        //component
    }
    searchPatientWithZipCode(zipCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getZipCodeInputField().sendKeys(zipCode);
        });
    }
    searchPatientWithStatus(status) {
        //component
    }
    searchPatientWithOrderNumber(orderNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getOrderNumberInputField().sendKeys(orderNumber);
        });
    }
    searchPatientWithLegacyID(legacyID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getLegacyIDInputField().sendKeys(legacyID);
        });
    }
    searchPatientWithPatientID(patientID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getPatientIdInputField().sendKeys(patientID);
        });
    }
    searchPatientWithBranchOffices(branchOffice) {
        //component
    }
    //search
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFindPatientPO().getSearchButton().click();
        });
    }
    //search results
    getNoSearchCriteriaValidationMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFindPatientPO().getNoSearchCriteriaValidation().getText();
        });
    }
    getLastNameValue(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFindPatientPO().getExistingPatientsTable().getTableBodyRowCell(rowNumber, this.lastNameColumnIndex).getText();
        });
    }
    getFirstNameLink(rowNumber) {
        return this.getFindPatientPO().getExistingPatientsTable().getTableBodyRowCell(rowNumber, this.firstNameColumnIndex).element(protractor_1.by.tagName('a'));
    }
    getFirstNameValue(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFindPatientPO().getExistingPatientsTable().getTableBodyRowCell(rowNumber, this.firstNameColumnIndex).element(protractor_1.by.tagName('a')).getText();
        });
    }
    getDOBColumnValue(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFindPatientPO().getExistingPatientsTable().getTableBodyRowCell(rowNumber, this.dobColumnIndex).getText();
        });
    }
    getEmailValue(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFindPatientPO().getExistingPatientsTable().getTableBodyRowCell(rowNumber, this.emailColumnIndex).getText();
        });
    }
}
exports.FindPatientLib = FindPatientLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluZFBhdGllbnRMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9maW5kcGF0aWVudHBhZ2UvRmluZFBhdGllbnRMaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFnQztBQUNoQywwRUFBdUU7QUFFdkUsTUFBYSxjQUFjO0lBR3ZCO1FBK0VBLDRCQUE0QjtRQUNwQix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEIseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQWxGekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFSyx5QkFBeUIsQ0FBQyxRQUFlOztZQUMzQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLENBQUM7S0FBQTtJQUVLLDBCQUEwQixDQUFDLFNBQWdCOztZQUM3QyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9FLENBQUM7S0FBQTtJQUVLLDBCQUEwQixDQUFDLFNBQWM7O1lBQzNDLElBQUksaUJBQWlCLEdBQVcsS0FBSyxDQUFDO1lBQ3RDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDcEcsQ0FBQztLQUFBO0lBRUssNEJBQTRCLENBQUMsV0FBa0I7O1lBQ2pELE1BQU0sSUFBSSxDQUFDLGdCQUFn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