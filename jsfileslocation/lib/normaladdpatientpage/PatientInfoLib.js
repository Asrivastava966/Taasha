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
const PatientInfoPO_1 = require("../../po/normaladdpatientpage/PatientInfoPO");
class PatientInfoLib {
    constructor() {
        this.patientInfoPO = new PatientInfoPO_1.PatientInfoPO();
    }
    getPatientInfoPO() {
        return this.patientInfoPO;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Saving...");
            yield this.getPatientInfoPO().getSaveButton().click();
        });
    }
    getSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info(yield this.getPatientInfoPO().getSuccessMessage().getText());
            return yield this.getPatientInfoPO().getSuccessMessage().getText();
        });
    }
    getValidationMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientInfoPO().getValidationMessage().getText();
        });
    }
    //General Info
    fillFirstName(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getFirstNameInputField().sendKeys(firstName);
        });
    }
    getFirstNameRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientInfoPO().getFirstNameRequiredFieldError().getText();
        });
    }
    fillMI(mi) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getMIInputField().sendKeys(mi);
        });
    }
    fillLastName(lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getLastNameInputField().sendKeys(lastName);
        });
    }
    getLastNameRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientInfoPO().getLastNameRequiredFieldError().getText();
        });
    }
    selectBirthDate(date, isDatePickerSmall) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getBirthdateInputField().selectDate(date, isDatePickerSmall);
        });
    }
    getBirthDateRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientInfoPO().getBirthDateRequiredFieldError().getText();
        });
    }
    selectStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getStatusDropdown().selectOption(status);
        });
    }
    getPatientStatusDropdownRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientInfoPO().getStatusDropdownRequiredFieldError().getText();
        });
    }
    selectBranchOffice(branchOffice) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getBranchOfficeDropdown().selectOption(branchOffice);
        });
    }
    getBranchOfficeRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientInfoPO().getBranchOfficeRequiredFieldError().getText();
        });
    }
    fillLegacyID(legacyID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getLegacyIDInputField().sendKeys(legacyID);
        });
    }
    fillCustom(custom) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getCustomInputField().sendKeys(custom);
        });
    }
    selectGender(gender) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getGenderDropdown().selectOption(gender);
        });
    }
    getGenderDropdownRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientInfoPO().getGenderDropdownRequiredFieldError().getText();
        });
    }
    fillEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getEmailInputField().sendKeys(email);
        });
    }
    //Billing Address 
    fillAddressOne(addressOne) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getAddressOneInputField().sendKeys(addressOne);
        });
    }
    fillAddressTwo(addressTwo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getAddressTwoInputField().sendKeys(addressTwo);
        });
    }
    fillCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getCityInputField().sendKeys(city);
        });
    }
    selectState(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getStateSelectDropdown().selectOption(state);
        });
    }
    fillZipCode(zipCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getZipCodeInputField().sendKeys(zipCode);
        });
    }
    selectTimeZone(timeZone) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getTimezoneSelectDropdown().selectOption(timeZone);
        });
    }
    //Delivery Address 
    toggleDeliveryAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getToggleDeliveryAddress().click();
        });
    }
    checkCommonAddressCheckbox(commonAddressCheckboxValue) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getCommonAddressCheckbox().click();
        });
    }
    /**
     * Workflow methods
     */
    fillPatientInfo(patientInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Filling in the -Patient Info- section of: " + patientInfo.getLastName() + ", " + patientInfo.getFirstName());
            let isDatePickerSmall = true;
            //Fill the required fields
            if (patientInfo.getFirstName() != null) {
                yield this.fillFirstName(patientInfo.getFirstName());
            }
            if (patientInfo.getLastName() != null) {
                yield this.fillLastName(patientInfo.getLastName());
            }
            if (patientInfo.getBirthDate() != null) {
                yield this.selectBirthDate(patientInfo.getBirthDate(), isDatePickerSmall);
            }
            if (patientInfo.getStatus() != null) {
                yield this.selectStatus(patientInfo.getStatus());
            }
            if (patientInfo.getBranchOffice() != null) {
                yield this.selectBranchOffice(patientInfo.getBranchOffice());
            }
            if (patientInfo.getGender() != null) {
                yield this.selectGender(patientInfo.getGender());
            }
            //Fill the non-mandatory fields : General Info
            if (patientInfo.getMI() != null) {
                yield this.fillMI(patientInfo.getMI());
            }
            if (patientInfo.getLegacyId() != null) {
                yield this.fillLegacyID(patientInfo.getLegacyId());
            }
            if (patientInfo.getCustom() != null) {
                yield this.fillCustom(patientInfo.getCustom());
            }
            if (patientInfo.getEmail() != null) {
                yield this.fillEmail(patientInfo.getEmail());
            }
            //Fill the non-mandatory fields : Billing Address
            if (patientInfo.getAddressOne() != null) {
                yield this.fillAddressOne(patientInfo.getAddressOne());
            }
            if (patientInfo.getAddressTwo() != null) {
                yield this.fillAddressTwo(patientInfo.getAddressTwo());
            }
            if (patientInfo.getCity() != null) {
                yield this.fillCity(patientInfo.getCity());
            }
            if (patientInfo.getState() != null) {
                yield this.selectState(patientInfo.getState());
            }
            if (patientInfo.getZipCode() != null) {
                yield this.fillZipCode(patientInfo.getZipCode());
            }
            if (patientInfo.getTimeZone() != null) {
                yield this.selectTimeZone(patientInfo.getTimeZone());
            }
            //Fill the non-mandatory fields : Delivery Address
            if (patientInfo.getCommonAddressCheckboxValue() != null) {
                yield this.toggleDeliveryAddress();
                yield this.checkCommonAddressCheckbox(patientInfo.getCommonAddressCheckboxValue());
            }
        });
    }
    //Existing Patient warning modal dialog 
    closeModal() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientInfoPO().getExistingPatientModalDialog().closeModal();
        });
    }
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientInfoPO().getExistingPatientModalDialog().getPatientName(rowNumber);
        });
    }
    getDOB(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientInfoPO().getExistingPatientModalDialog().getDOB(rowNumber);
        });
    }
}
exports.PatientInfoLib = PatientInfoLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudEluZm9MaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9ub3JtYWxhZGRwYXRpZW50cGFnZS9QYXRpZW50SW5mb0xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBSXJDLCtFQUE0RTtBQUU1RSxNQUFhLGNBQWM7SUFHdkI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVLLElBQUk7O1lBQ04sb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUQsQ0FBQztLQUFBO0lBRUssaUJBQWlCOztZQUNuQixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDakYsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkUsQ0FBQztLQUFBO0lBRUssb0JBQW9COztZQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxRSxDQUFDO0tBQUE7SUFFRCxjQUFjO0lBQ1IsYUFBYSxDQUFDLFNBQWdCOztZQUNoQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FB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