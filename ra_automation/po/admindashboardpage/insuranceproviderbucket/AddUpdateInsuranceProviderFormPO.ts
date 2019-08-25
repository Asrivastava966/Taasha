import { element, by } from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";
import { CustomDropdownMenu } from "../../../component/comp/CustomDropdownMenu";
import { CustomDropdownMenuOrigin } from "../../../data/enums/CustomDropdownMenuOrigin";

export class AddUpdateInsuranceProviderFormPO {
    private static backToProvidersButton = element(by.css('[ng-click=\"backtoproviders()\"]'));
    getBackToProvidersButton() {
        return AddUpdateInsuranceProviderFormPO.backToProvidersButton;
    }

    private static successMessage = element(by.css('[ng-if=\"successMessage\"]'));
    getSuccessMessage() {
        return AddUpdateInsuranceProviderFormPO.successMessage;
    }

    //General Info
    private static providerNameInputField = element(by.id('inputProviderName'));
    private static groupSelectDropdown = element(by.model('provider.payload.groupTypeCd'));
    private static statusDropdown = element(by.id('inputProviderStatus'));
    private static legacyIdInputField = element(by.id('inputProviderLegacy'));
    private static taxTypeDropdown = element(by.id('inputTaxType'));
    private static npiInputField = element(by.id('inputNPI'));
    private static websiteInputField = element(by.id('inputWebsite'));
    private static providerNumberInputField = element(by.id('inputProviderNum'));
    private static medicareFeeScheduleCheckbox = element(by.id('inputMadicareInsuFlg'));
    private static feeScheduleDropdown = element(by.id('inputFeeSchedule'));
    private static branchOfficesSelectAllCheckbox = element(by.model('provider.payload.allBranchAccessFlg'));
    private static branchOfficeDropdown = element.all(by.className('dropdown-toggle')).get(1);

    getProviderNameInputField() {
        return AddUpdateInsuranceProviderFormPO.providerNameInputField;
    }

    getGroupSelectDropdown() {
        return new SelectDropdown(AddUpdateInsuranceProviderFormPO.groupSelectDropdown);
    }

    getStatusDropdown() {
        return new SelectDropdown(AddUpdateInsuranceProviderFormPO.statusDropdown);
    }

    getLegacyIdInputField() {
        return AddUpdateInsuranceProviderFormPO.legacyIdInputField;
    }

    getTaxTypeDropdown() {
        return new SelectDropdown(AddUpdateInsuranceProviderFormPO.taxTypeDropdown);
    }

    getNpiInputField() {
        return AddUpdateInsuranceProviderFormPO.npiInputField;
    }

    getWebsiteInputField() {
        return AddUpdateInsuranceProviderFormPO.websiteInputField;
    }

    getProviderNumberInputField() {
        return AddUpdateInsuranceProviderFormPO.providerNumberInputField;
    }

    getMedicareFeeScheduleCheckbox() {
        return AddUpdateInsuranceProviderFormPO.medicareFeeScheduleCheckbox;
    }

    getFeeScheduleDropdown() {
        return new SelectDropdown(AddUpdateInsuranceProviderFormPO.feeScheduleDropdown);
    }

    getBranchOfficesSelectAllCheckbox() {
        return AddUpdateInsuranceProviderFormPO.branchOfficesSelectAllCheckbox;
    }

    getBranchOfficeDropdown() {
        return new CustomDropdownMenu(AddUpdateInsuranceProviderFormPO.branchOfficeDropdown, CustomDropdownMenuOrigin.BUTTON);
    }

    //Billing Address 

    //Verification Info 

    //1500 Claim Forms 

    //Commercial Eligibility 

    //eClaims Carrier

    //Insurance Note 
    private static insuranceNoteToggle = element(by.css('[ng-click*=\"toggleInsuranceNote\"]'));
    getInsuranceNoteToggle() {
        return AddUpdateInsuranceProviderFormPO.insuranceNoteToggle;
    }

    private static notesTextarea = element(by.id('inputInsuranceNote'));
    getNotesTextarea() {
        return AddUpdateInsuranceProviderFormPO.notesTextarea;
    }

    //Contact Info
    private static contactInfoToggle = element(by.css('[ng-click*=\"toggleContactInfo\"]'));
    getContactInfoToggle() {
        return AddUpdateInsuranceProviderFormPO.contactInfoToggle;
    }

    private static phoneNumberInputField = element(by.model('provider.payload.phoneNo'));
    private static phoneExtNumberInputField = element(by.model('provider.payload.phoneNoExt'));
    private static emailInputField = element(by.model('provider.payload.email'));

    getPhoneNumberInputField() {
        return AddUpdateInsuranceProviderFormPO.phoneNumberInputField;
    }

    getPhoneExtNumberInputField() {
        return AddUpdateInsuranceProviderFormPO.phoneExtNumberInputField;
    }

    getEmailInputField() {
        return AddUpdateInsuranceProviderFormPO.emailInputField;
    }

    //Footer 
    private static submitButton = element(by.css('[value=\"Submit\"]'));
    private static updateButton = element(by.css('[value=\"Update\"]'));

    getSubmitButton() {
        return AddUpdateInsuranceProviderFormPO.submitButton;
    }

    getUpdateButton() {
        return AddUpdateInsuranceProviderFormPO.updateButton;
    }
}