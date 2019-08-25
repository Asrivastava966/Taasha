import { element, by } from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";

export class AddUpdateDoctorFormPO {
    private static backToDoctorsButton = element(by.buttonText('Back to Doctors'))
    getBackToDoctorsButton() {
        return AddUpdateDoctorFormPO.backToDoctorsButton
    }

    private static successMessage = element(by.css("[ng-if='successMessage']"));
    getSuccessMessageElement() {
        return AddUpdateDoctorFormPO.successMessage;
    }

    //Duplicate validation message
    private static duplicateValidationMessage = element(by.repeater("value in errArr"))
    getDuplicateMessageElement() {
        return AddUpdateDoctorFormPO.duplicateValidationMessage
    }

    private static titleSelectDropdown = element(by.model('doctor.payload.titleCd'))
    private static firstNameInputField = element(by.model('doctor.payload.firstNm'))
    private static miInputField = element(by.model('doctor.payload.middleNm'))
    private static lastNameInputField = element(by.model('doctor.payload.lastNm'))
    private static npiInputField = element(by.model('doctor.payload.npiNo'))
    private static specialtySelectDropdown = element(by.model('doctor.payload.specialtyCd'))
    private static statusSelectDropDown = element(by.model('doctor.payload.statusCd'))
    private static legacyIDInputField = element(by.model('doctor.payload.legacyId'))
    private static addressOneInputField = element(by.model('doctor.payload.address.addressLine1'))
    private static addressTwoInputField = element(by.model('doctor.payload.address.addressLine2'))
    private static cityInputField = element(by.model('doctor.payload.address.city'))
    private static stateSelectDropdown = element(by.model('doctor.payload.address.state'))
    private static zipCodeInputField = element(by.model('doctor.payload.address.zip'))

    getTitleSelectDropdown() {
        return new SelectDropdown(AddUpdateDoctorFormPO.titleSelectDropdown)
    }
    getFirstNameSelectInputField() {
        return AddUpdateDoctorFormPO.firstNameInputField
    }
    getMiInputField() {
        return AddUpdateDoctorFormPO.miInputField
    }
    getLastNameInputField() {
        return AddUpdateDoctorFormPO.lastNameInputField
    }
    getNpiInputField() {
        return AddUpdateDoctorFormPO.npiInputField
    }
    getSpecialtySelectDropdown() {
        return new SelectDropdown(AddUpdateDoctorFormPO.specialtySelectDropdown)
    }
    getStatusSelectDropDown() {
        return new SelectDropdown(AddUpdateDoctorFormPO.statusSelectDropDown)
    }
    getLegacyIDInputField() {
        return AddUpdateDoctorFormPO.legacyIDInputField
    }
    getAddressOneInputField() {
        return AddUpdateDoctorFormPO.addressOneInputField
    }
    getAddressTwoInputField() {
        return AddUpdateDoctorFormPO.addressTwoInputField
    }
    getCityInputField() {
        return AddUpdateDoctorFormPO.cityInputField
    }
    getStateSelectDropdown() {
        return new SelectDropdown(AddUpdateDoctorFormPO.stateSelectDropdown)
    }
    getZipCodeInputField() {
        return AddUpdateDoctorFormPO.zipCodeInputField
    }

    // Other Identifiers - pending

    //Contact Information
    private static officeContactInputField = element(by.model('doctor.payload.officeContact'))
    private static phoneInputField = element(by.model('doctor.payload.contactPhone'))
    private static extInputField = element(by.model('doctor.payload.contactPhoneExt'))
    private static phoneCheckbox = element(by.model('doctor.payload.contactPhPrefFlg'))
    private static mobileInputField = element(by.model('doctor.payload.mobileNo'))
    private static mobileCheckbox = element(by.model('doctor.payload.contactMobPrefFlg'))
    private static emailInputField = element(by.model('doctor.payload.contactEmail'))
    private static emailCheckbox = element(by.model('doctor.payload.contactEmailPrefFlg'))
    private static faxInputField = element(by.model('doctor.payload.contactFax'))
    private static faxCheckbox = element(by.model('doctor.payload.contactFaxPrefFlg'))

    getOfficeContactInputField() {
        return AddUpdateDoctorFormPO.officeContactInputField
    }
    getPhoneInputField() {
        return AddUpdateDoctorFormPO.phoneInputField
    }
    getExtInputField() {
        return AddUpdateDoctorFormPO.extInputField
    }
    getPhoneCheckbox() {
        return AddUpdateDoctorFormPO.phoneCheckbox
    }
    getMobileInputField() {
        return AddUpdateDoctorFormPO.mobileInputField
    }
    getMobileCheckbox() {
        return AddUpdateDoctorFormPO.mobileCheckbox
    }
    getEmailInputField() {
        return AddUpdateDoctorFormPO.emailInputField
    }
    getEmailCheckbox() {
        return AddUpdateDoctorFormPO.emailCheckbox
    }
    getFaxInputField() {
        return AddUpdateDoctorFormPO.faxInputField
    }
    getFaxCheckbox() {
        return AddUpdateDoctorFormPO.faxCheckbox
    }

    //Marketing Information
    private static primaryFacilitySelectDropdown = element(by.model('doctor.payload.facilityCd'))
    private static primaryMarketingSelectDropdown = element(by.model('doctor.payload.priMRId'))
    private static secondaryMarketingSelectDropdown = element(by.model('doctor.payload.secMRId'))

    getPrimaryFacilitySelectDropdown() {
        return new SelectDropdown(AddUpdateDoctorFormPO.primaryFacilitySelectDropdown)
    }
    getPrimaryMarketingSelectDropdown() {
        return new SelectDropdown(AddUpdateDoctorFormPO.primaryMarketingSelectDropdown)
    }
    getSecondaryMarketingSelectDropdown() {
        return new SelectDropdown(AddUpdateDoctorFormPO.secondaryMarketingSelectDropdown)
    }

    // Delivery Instruction
    private static deliveredBySelectDropdown = element(by.model('doctor.payload.deliveryTypCd'))
    private static notesTextarea = element(by.model('doctor.payload.notes'))
    
    getDeliveredBySelectDropdown() {
        return new SelectDropdown(AddUpdateDoctorFormPO.deliveredBySelectDropdown)
    }
    getNotesTextarea() {
        return AddUpdateDoctorFormPO.notesTextarea
    }
    
    private static submitButton = element(by.buttonText('Submit'))
    private static updateButton = element(by.buttonText('Update'))
    
    getSubmitButton() {
        return AddUpdateDoctorFormPO.submitButton
    }
    getUpdateButton() {
        return AddUpdateDoctorFormPO.updateButton
    }
}