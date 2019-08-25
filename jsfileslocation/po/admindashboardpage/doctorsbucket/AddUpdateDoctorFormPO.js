"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
class AddUpdateDoctorFormPO {
    getBackToDoctorsButton() {
        return AddUpdateDoctorFormPO.backToDoctorsButton;
    }
    getSuccessMessageElement() {
        return AddUpdateDoctorFormPO.successMessage;
    }
    getDuplicateMessageElement() {
        return AddUpdateDoctorFormPO.duplicateValidationMessage;
    }
    getTitleSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateDoctorFormPO.titleSelectDropdown);
    }
    getFirstNameSelectInputField() {
        return AddUpdateDoctorFormPO.firstNameInputField;
    }
    getMiInputField() {
        return AddUpdateDoctorFormPO.miInputField;
    }
    getLastNameInputField() {
        return AddUpdateDoctorFormPO.lastNameInputField;
    }
    getNpiInputField() {
        return AddUpdateDoctorFormPO.npiInputField;
    }
    getSpecialtySelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateDoctorFormPO.specialtySelectDropdown);
    }
    getStatusSelectDropDown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateDoctorFormPO.statusSelectDropDown);
    }
    getLegacyIDInputField() {
        return AddUpdateDoctorFormPO.legacyIDInputField;
    }
    getAddressOneInputField() {
        return AddUpdateDoctorFormPO.addressOneInputField;
    }
    getAddressTwoInputField() {
        return AddUpdateDoctorFormPO.addressTwoInputField;
    }
    getCityInputField() {
        return AddUpdateDoctorFormPO.cityInputField;
    }
    getStateSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateDoctorFormPO.stateSelectDropdown);
    }
    getZipCodeInputField() {
        return AddUpdateDoctorFormPO.zipCodeInputField;
    }
    getOfficeContactInputField() {
        return AddUpdateDoctorFormPO.officeContactInputField;
    }
    getPhoneInputField() {
        return AddUpdateDoctorFormPO.phoneInputField;
    }
    getExtInputField() {
        return AddUpdateDoctorFormPO.extInputField;
    }
    getPhoneCheckbox() {
        return AddUpdateDoctorFormPO.phoneCheckbox;
    }
    getMobileInputField() {
        return AddUpdateDoctorFormPO.mobileInputField;
    }
    getMobileCheckbox() {
        return AddUpdateDoctorFormPO.mobileCheckbox;
    }
    getEmailInputField() {
        return AddUpdateDoctorFormPO.emailInputField;
    }
    getEmailCheckbox() {
        return AddUpdateDoctorFormPO.emailCheckbox;
    }
    getFaxInputField() {
        return AddUpdateDoctorFormPO.faxInputField;
    }
    getFaxCheckbox() {
        return AddUpdateDoctorFormPO.faxCheckbox;
    }
    getPrimaryFacilitySelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateDoctorFormPO.primaryFacilitySelectDropdown);
    }
    getPrimaryMarketingSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateDoctorFormPO.primaryMarketingSelectDropdown);
    }
    getSecondaryMarketingSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateDoctorFormPO.secondaryMarketingSelectDropdown);
    }
    getDeliveredBySelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateDoctorFormPO.deliveredBySelectDropdown);
    }
    getNotesTextarea() {
        return AddUpdateDoctorFormPO.notesTextarea;
    }
    getSubmitButton() {
        return AddUpdateDoctorFormPO.submitButton;
    }
    getUpdateButton() {
        return AddUpdateDoctorFormPO.updateButton;
    }
}
AddUpdateDoctorFormPO.backToDoctorsButton = protractor_1.element(protractor_1.by.buttonText('Back to Doctors'));
AddUpdateDoctorFormPO.successMessage = protractor_1.element(protractor_1.by.css("[ng-if='successMessage']"));
//Duplicate validation message
AddUpdateDoctorFormPO.duplicateValidationMessage = protractor_1.element(protractor_1.by.repeater("value in errArr"));
AddUpdateDoctorFormPO.titleSelectDropdown = protractor_1.element(protractor_1.by.model('doctor.payload.titleCd'));
AddUpdateDoctorFormPO.firstNameInputField = protractor_1.element(protractor_1.by.model('doctor.payload.firstNm'));
AddUpdateDoctorFormPO.miInputField = protractor_1.element(protractor_1.by.model('doctor.payload.middleNm'));
AddUpdateDoctorFormPO.lastNameInputField = protractor_1.element(protractor_1.by.model('doctor.payload.lastNm'));
AddUpdateDoctorFormPO.npiInputField = protractor_1.element(protractor_1.by.model('doctor.payload.npiNo'));
AddUpdateDoctorFormPO.specialtySelectDropdown = protractor_1.element(protractor_1.by.model('doctor.payload.specialtyCd'));
AddUpdateDoctorFormPO.statusSelectDropDown = protractor_1.element(protractor_1.by.model('doctor.payload.statusCd'));
AddUpdateDoctorFormPO.legacyIDInputField = protractor_1.element(protractor_1.by.model('doctor.payload.legacyId'));
AddUpdateDoctorFormPO.addressOneInputField = protractor_1.element(protractor_1.by.model('doctor.payload.address.addressLine1'));
AddUpdateDoctorFormPO.addressTwoInputField = protractor_1.element(protractor_1.by.model('doctor.payload.address.addressLine2'));
AddUpdateDoctorFormPO.cityInputField = protractor_1.element(protractor_1.by.model('doctor.payload.address.city'));
AddUpdateDoctorFormPO.stateSelectDropdown = protractor_1.element(protractor_1.by.model('doctor.payload.address.state'));
AddUpdateDoctorFormPO.zipCodeInputField = protractor_1.element(protractor_1.by.model('doctor.payload.address.zip'));
// Other Identifiers - pending
//Contact Information
AddUpdateDoctorFormPO.officeContactInputField = protractor_1.element(protractor_1.by.model('doctor.payload.officeContact'));
AddUpdateDoctorFormPO.phoneInputField = protractor_1.element(protractor_1.by.model('doctor.payload.contactPhone'));
AddUpdateDoctorFormPO.extInputField = protractor_1.element(protractor_1.by.model('doctor.payload.contactPhoneExt'));
AddUpdateDoctorFormPO.phoneCheckbox = protractor_1.element(protractor_1.by.model('doctor.payload.contactPhPrefFlg'));
AddUpdateDoctorFormPO.mobileInputField = protractor_1.element(protractor_1.by.model('doctor.payload.mobileNo'));
AddUpdateDoctorFormPO.mobileCheckbox = protractor_1.element(protractor_1.by.model('doctor.payload.contactMobPrefFlg'));
AddUpdateDoctorFormPO.emailInputField = protractor_1.element(protractor_1.by.model('doctor.payload.contactEmail'));
AddUpdateDoctorFormPO.emailCheckbox = protractor_1.element(protractor_1.by.model('doctor.payload.contactEmailPrefFlg'));
AddUpdateDoctorFormPO.faxInputField = protractor_1.element(protractor_1.by.model('doctor.payload.contactFax'));
AddUpdateDoctorFormPO.faxCheckbox = protractor_1.element(protractor_1.by.model('doctor.payload.contactFaxPrefFlg'));
//Marketing Information
AddUpdateDoctorFormPO.primaryFacilitySelectDropdown = protractor_1.element(protractor_1.by.model('doctor.payload.facilityCd'));
AddUpdateDoctorFormPO.primaryMarketingSelectDropdown = protractor_1.element(protractor_1.by.model('doctor.payload.priMRId'));
AddUpdateDoctorFormPO.secondaryMarketingSelectDropdown = protractor_1.element(protractor_1.by.model('doctor.payload.secMRId'));
// Delivery Instruction
AddUpdateDoctorFormPO.deliveredBySelectDropdown = protractor_1.element(protractor_1.by.model('doctor.payload.deliveryTypCd'));
AddUpdateDoctorFormPO.notesTextarea = protractor_1.element(protractor_1.by.model('doctor.payload.notes'));
AddUpdateDoctorFormPO.submitButton = protractor_1.element(protractor_1.by.buttonText('Submit'));
AddUpdateDoctorFormPO.updateButton = protractor_1.element(protractor_1.by.buttonText('Update'));
exports.AddUpdateDoctorFormPO = AddUpdateDoctorFormPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVXBkYXRlRG9jdG9yRm9ybVBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9hZG1pbmRhc2hib2FyZHBhZ2UvZG9jdG9yc2J1Y2tldC9BZGRVcGRhdGVEb2N0b3JGb3JtUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsMkVBQXdFO0FBRXhFLE1BQWEscUJBQXFCO0lBRTlCLHNCQUFzQjtRQUNsQixPQUFPLHFCQUFxQixDQUFDLG1CQUFtQixDQUFBO0lBQ3BELENBQUM7SUFHRCx3QkFBd0I7UUFDcEIsT0FBTyxxQkFBcUIsQ0FBQyxjQUFjLENBQUM7SUFDaEQsQ0FBQztJQUlELDBCQUEwQjtRQUN0QixPQUFPLHFCQUFxQixDQUFDLDBCQUEwQixDQUFBO0lBQzNELENBQUM7SUFnQkQsc0JBQXNCO1FBQ2xCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDeEUsQ0FBQztJQUNELDRCQUE0QjtRQUN4QixPQUFPLHFCQUFxQixDQUFDLG1CQUFtQixDQUFBO0lBQ3BELENBQUM7SUFDRCxlQUFlO1FBQ1gsT0FBTyxxQkFBcUIsQ0FBQyxZQUFZLENBQUE7SUFDN0MsQ0FBQztJQUNELHFCQUFxQjtRQUNqQixPQUFPLHFCQUFxQixDQUFDLGtCQUFrQixDQUFBO0lBQ25ELENBQUM7SUFDRCxnQkFBZ0I7UUFDWixPQUFPLHFCQUFxQixDQUFDLGFBQWEsQ0FBQTtJQUM5QyxDQUFDO0lBQ0QsMEJBQTBCO1FBQ3RCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDNUUsQ0FBQztJQUNELHVCQUF1QjtRQUNuQixPQUFPLElBQUksK0JBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUFDRCxxQkFBcUI7UUFDakIsT0FBTyxxQkFBcUIsQ0FB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