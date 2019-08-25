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
const AddUpdateDoctorFormPO_1 = require("../../../po/admindashboardpage/doctorsbucket/AddUpdateDoctorFormPO");
class AddUpdateDoctorFormLib {
    constructor() {
        this.addUpdateDoctorFormPO = new AddUpdateDoctorFormPO_1.AddUpdateDoctorFormPO();
    }
    getAddNewDoctorPO() {
        return this.addUpdateDoctorFormPO;
    }
    navigateBackToDoctorManagementPage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getAddNewDoctorPO().getBackToDoctorsButton().click();
        });
    }
    selectFirstNameTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getTitleSelectDropdown().selectOption(title);
        });
    }
    fillFirstName(firstname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getFirstNameSelectInputField().sendKeys(firstname);
        });
    }
    fillMI(mi) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getMiInputField().sendKeys(mi);
        });
    }
    fillLastName(lastname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getLastNameInputField().sendKeys(lastname);
        });
    }
    fillNPI(npi) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getNpiInputField().sendKeys(npi);
        });
    }
    selectSpecialty(specialty) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getSpecialtySelectDropdown().selectOption(specialty);
        });
    }
    selectStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getStatusSelectDropDown().selectOption(status);
        });
    }
    fillLegacyID(legacyid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getLegacyIDInputField().sendKeys(legacyid);
        });
    }
    fillAddressOne(address1) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getAddressOneInputField().sendKeys(address1);
        });
    }
    fillAddressTwo(address2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getAddressTwoInputField().sendKeys(address2);
        });
    }
    fillCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getCityInputField().sendKeys(city);
        });
    }
    selectState(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getStateSelectDropdown().selectOption(state);
        });
    }
    fillZipCode(zipcode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getZipCodeInputField().sendKeys(zipcode);
        });
    }
    // Other Identifiers - pending
    // Contact Information
    fillOfficeContact(officeContact) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getOfficeContactInputField().sendKeys(officeContact);
        });
    }
    CheckPhoneCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getPhoneCheckbox().click();
        });
    }
    fillPhoneNumber(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getPhoneInputField().sendKeys(phone);
        });
    }
    fillPhoneExt(ext) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getExtInputField().sendKeys(ext);
        });
    }
    checkMobileCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getMobileCheckbox().click();
        });
    }
    fillMobile(mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getMobileInputField().sendKeys(mobile);
        });
    }
    checkEmailCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getEmailCheckbox().click();
        });
    }
    fillEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getEmailInputField().sendKeys(email);
        });
    }
    checkFaxCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getFaxCheckbox().click();
        });
    }
    fillFaxNumber(faxNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getFaxInputField().sendKeys(faxNumber);
        });
    }
    // Marketing Informtion
    selectPrimaryFacility(primaryFacility) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getPrimaryFacilitySelectDropdown().selectOption(primaryFacility);
        });
    }
    selectPrimaryMarketing(primaryMarketing) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getPrimaryMarketingSelectDropdown().selectOption(primaryMarketing);
        });
    }
    selectSecondaryMarketing(secondaryMarketing) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getSecondaryMarketingSelectDropdown().selectOption(secondaryMarketing);
        });
    }
    // Delivery Instruction
    selectDeliveredBy(delivered) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getDeliveredBySelectDropdown().selectOption(delivered);
        });
    }
    fillNotesText(note) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getNotesTextarea().sendKeys(note);
        });
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getSubmitButton().click();
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddNewDoctorPO().getUpdateButton().click();
        });
    }
    //Success message 
    getSuccessMessageText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getAddNewDoctorPO().getSuccessMessageElement().getText();
        });
    }
    //Duplicated validation message
    getDuplicateDoctorValidationMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getAddNewDoctorPO().getDuplicateMessageElement().getText();
        });
    }
    //Add-Update Doctor Info
    fillDoctorInfo(doctorInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (doctorInfo.getTitle() != null) {
                yield this.selectFirstNameTitle(doctorInfo.getTitle());
            }
            if (doctorInfo.getFirstName() != null) {
                yield this.fillFirstName(doctorInfo.getFirstName());
            }
            if (doctorInfo.getLastName() != null) {
                yield this.fillLastName(doctorInfo.getLastName());
            }
            if (doctorInfo.getNpiNumber() != null) {
                yield this.fillNPI(doctorInfo.getNpiNumber());
            }
            if (doctorInfo.getStatus() != null) {
                yield this.selectStatus(doctorInfo.getStatus());
            }
            if (doctorInfo.getPhone() != null) {
                yield this.fillPhoneNumber(doctorInfo.getPhone());
            }
            if (doctorInfo.getExt() != null) {
                yield this.fillPhoneExt(doctorInfo.getExt());
            }
            if (doctorInfo.getDeliveredBy() != null) {
                yield this.selectDeliveredBy(doctorInfo.getDeliveredBy());
            }
        });
    }
}
exports.AddUpdateDoctorFormLib = AddUpdateDoctorFormLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVXBkYXRlRG9jdG9yRm9ybUxpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL2FkbWluZGFzaGJvYXJkcGFnZS9kb2N0b3JzYnVja2V0L0FkZFVwZGF0ZURvY3RvckZvcm1MaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhHQUEyRztBQU8zRyxNQUFhLHNCQUFzQjtJQUcvQjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLDZDQUFxQixFQUFFLENBQUE7SUFDNUQsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFBO0lBQ3JDLENBQUM7SUFFSyxrQ0FBa0M7O1lBQ3BDLE9BQU8sTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzFFLENBQUM7S0FBQTtJQUVLLG9CQUFvQixDQUFDLEtBQVk7O1lBQ25DLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0UsQ0FBQztLQUFBO0lBQ0ssYUFBYSxDQUFDLFNBQWlCOztZQUNqQyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLDRCQUE0QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3JGLENBQUM7S0FBQTtJQUNLLE1BQU0sQ0FBQyxFQUFVOztZQUNuQixNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNqRSxDQUFDO0tBQUE7SUFDSyxZQUFZLENBQUMsUUFBZ0I7O1lBQy9CLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxD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