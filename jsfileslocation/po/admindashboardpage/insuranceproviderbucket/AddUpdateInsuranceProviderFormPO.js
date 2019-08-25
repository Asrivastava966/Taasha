"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
const CustomDropdownMenu_1 = require("../../../component/comp/CustomDropdownMenu");
const CustomDropdownMenuOrigin_1 = require("../../../data/enums/CustomDropdownMenuOrigin");
class AddUpdateInsuranceProviderFormPO {
    getBackToProvidersButton() {
        return AddUpdateInsuranceProviderFormPO.backToProvidersButton;
    }
    getSuccessMessage() {
        return AddUpdateInsuranceProviderFormPO.successMessage;
    }
    getProviderNameInputField() {
        return AddUpdateInsuranceProviderFormPO.providerNameInputField;
    }
    getGroupSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateInsuranceProviderFormPO.groupSelectDropdown);
    }
    getStatusDropdown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateInsuranceProviderFormPO.statusDropdown);
    }
    getLegacyIdInputField() {
        return AddUpdateInsuranceProviderFormPO.legacyIdInputField;
    }
    getTaxTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(AddUpdateInsuranceProviderFormPO.taxTypeDropdown);
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
        return new SelectDropdown_1.SelectDropdown(AddUpdateInsuranceProviderFormPO.feeScheduleDropdown);
    }
    getBranchOfficesSelectAllCheckbox() {
        return AddUpdateInsuranceProviderFormPO.branchOfficesSelectAllCheckbox;
    }
    getBranchOfficeDropdown() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(AddUpdateInsuranceProviderFormPO.branchOfficeDropdown, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.BUTTON);
    }
    getInsuranceNoteToggle() {
        return AddUpdateInsuranceProviderFormPO.insuranceNoteToggle;
    }
    getNotesTextarea() {
        return AddUpdateInsuranceProviderFormPO.notesTextarea;
    }
    getContactInfoToggle() {
        return AddUpdateInsuranceProviderFormPO.contactInfoToggle;
    }
    getPhoneNumberInputField() {
        return AddUpdateInsuranceProviderFormPO.phoneNumberInputField;
    }
    getPhoneExtNumberInputField() {
        return AddUpdateInsuranceProviderFormPO.phoneExtNumberInputField;
    }
    getEmailInputField() {
        return AddUpdateInsuranceProviderFormPO.emailInputField;
    }
    getSubmitButton() {
        return AddUpdateInsuranceProviderFormPO.submitButton;
    }
    getUpdateButton() {
        return AddUpdateInsuranceProviderFormPO.updateButton;
    }
}
AddUpdateInsuranceProviderFormPO.backToProvidersButton = protractor_1.element(protractor_1.by.css('[ng-click=\"backtoproviders()\"]'));
AddUpdateInsuranceProviderFormPO.successMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"successMessage\"]'));
//General Info
AddUpdateInsuranceProviderFormPO.providerNameInputField = protractor_1.element(protractor_1.by.id('inputProviderName'));
AddUpdateInsuranceProviderFormPO.groupSelectDropdown = protractor_1.element(protractor_1.by.model('provider.payload.groupTypeCd'));
AddUpdateInsuranceProviderFormPO.statusDropdown = protractor_1.element(protractor_1.by.id('inputProviderStatus'));
AddUpdateInsuranceProviderFormPO.legacyIdInputField = protractor_1.element(protractor_1.by.id('inputProviderLegacy'));
AddUpdateInsuranceProviderFormPO.taxTypeDropdown = protractor_1.element(protractor_1.by.id('inputTaxType'));
AddUpdateInsuranceProviderFormPO.npiInputField = protractor_1.element(protractor_1.by.id('inputNPI'));
AddUpdateInsuranceProviderFormPO.websiteInputField = protractor_1.element(protractor_1.by.id('inputWebsite'));
AddUpdateInsuranceProviderFormPO.providerNumberInputField = protractor_1.element(protractor_1.by.id('inputProviderNum'));
AddUpdateInsuranceProviderFormPO.medicareFeeScheduleCheckbox = protractor_1.element(protractor_1.by.id('inputMadicareInsuFlg'));
AddUpdateInsuranceProviderFormPO.feeScheduleDropdown = protractor_1.element(protractor_1.by.id('inputFeeSchedule'));
AddUpdateInsuranceProviderFormPO.branchOfficesSelectAllCheckbox = protractor_1.element(protractor_1.by.model('provider.payload.allBranchAccessFlg'));
AddUpdateInsuranceProviderFormPO.branchOfficeDropdown = protractor_1.element.all(protractor_1.by.className('dropdown-toggle')).get(1);
//Billing Address 
//Verification Info 
//1500 Claim Forms 
//Commercial Eligibility 
//eClaims Carrier
//Insurance Note 
AddUpdateInsuranceProviderFormPO.insuranceNoteToggle = protractor_1.element(protractor_1.by.css('[ng-click*=\"toggleInsuranceNote\"]'));
AddUpdateInsuranceProviderFormPO.notesTextarea = protractor_1.element(protractor_1.by.id('inputInsuranceNote'));
//Contact Info
AddUpdateInsuranceProviderFormPO.contactInfoToggle = protractor_1.element(protractor_1.by.css('[ng-click*=\"toggleContactInfo\"]'));
AddUpdateInsuranceProviderFormPO.phoneNumberInputField = protractor_1.element(protractor_1.by.model('provider.payload.phoneNo'));
AddUpdateInsuranceProviderFormPO.phoneExtNumberInputField = protractor_1.element(protractor_1.by.model('provider.payload.phoneNoExt'));
AddUpdateInsuranceProviderFormPO.emailInputField = protractor_1.element(protractor_1.by.model('provider.payload.email'));
//Footer 
AddUpdateInsuranceProviderFormPO.submitButton = protractor_1.element(protractor_1.by.css('[value=\"Submit\"]'));
AddUpdateInsuranceProviderFormPO.updateButton = protractor_1.element(protractor_1.by.css('[value=\"Update\"]'));
exports.AddUpdateInsuranceProviderFormPO = AddUpdateInsuranceProviderFormPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVXBkYXRlSW5zdXJhbmNlUHJvdmlkZXJGb3JtUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL2FkbWluZGFzaGJvYXJkcGFnZS9pbnN1cmFuY2Vwcm92aWRlcmJ1Y2tldC9BZGRVcGRhdGVJbnN1cmFuY2VQcm92aWRlckZvcm1QTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QywyRUFBd0U7QUFDeEUsbUZBQWdGO0FBQ2hGLDJGQUF3RjtBQUV4RixNQUFhLGdDQUFnQztJQUV6Qyx3QkFBd0I7UUFDcEIsT0FBTyxnQ0FBZ0MsQ0FBQyxxQkFBcUIsQ0FBQztJQUNsRSxDQUFDO0lBR0QsaUJBQWlCO1FBQ2IsT0FBTyxnQ0FBZ0MsQ0FBQyxjQUFjLENBQUM7SUFDM0QsQ0FBQztJQWdCRCx5QkFBeUI7UUFDckIsT0FBTyxnQ0FBZ0MsQ0FBQyxzQkFBc0IsQ0FBQztJQUNuRSxDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLGdDQUFnQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU8sSUFBSSwrQkFBYyxDQUFDLGdDQUFnQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxxQkFBcUI7UUFDakIsT0FBTyxnQ0FBZ0MsQ0FBQyxrQkFBa0IsQ0FBQztJQUMvRCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxJQUFJLCtCQUFjLENBQUMsZ0NBQWdDLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELGdCQUFnQjtRQUNaLE9BQU8sZ0NBQWdDLENBQUMsYUFBYSxDQUFDO0lBQzFELENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsT0FBTyxnQ0FBZ0MsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5RCxDQUFDO0lBRUQsMkJBQTJCO1FBQ3ZCLE9BQU8sZ0NBQWdDLENBQUMsd0JBQXdCLENBQUM7SUFDckUsQ0FBQztJQUVELDhCQUE4QjtRQUMxQixPQUFPLGdDQUFnQyxDQUFDLDJCQUEyQixDQUFDO0lBQ3hFLENBQUM7SUFFRCxzQkFBc0I7UUFDbEIsT0FBTyxJQUFJLCtCQUFjLENBQUMsZ0NBQWdDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsaUNBQWlDO1FBQzdCLE9BQU8sZ0NBQWdDLENBQUMsOEJBQThCLENBQUM7SUFDM0UsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLElBQUksdUNBQWtCLENBQUMsZ0NBQWdDLENBQUMsb0JBQW9CLEVBQUUsbURBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUgsQ0FBQztJQWNELHNCQUFzQjtRQUNsQixPQUFPLGdDQUFnQyxDQUFDLG1CQUFtQixDQUFDO0lBQ2hFLENBQUM7SUFHRCxnQkFBZ0I7UUFDWixPQUFPLGdDQUFnQyxDQUFDLGFBQWEsQ0FBQztJQUMxRCxDQUFDO0lBSUQsb0JBQW9CO1FBQ2hCLE9BQU8sZ0NBQWdDLENBQUMsaUJBQWlCLENBQUM7SUFDOUQsQ0FBQztJQU1ELHdCQUF3QjtRQUNwQixPQUFPLGdDQUFnQyxDQUFDLHFCQUFxQixDQUFDO0lBQ2xFLENBQUM7SUFFRCwyQkFBMkI7UUFDdkIsT0FBTyxnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQztJQUNyRSxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxnQ0FBZ0MsQ0FBQyxlQUFlLENBQUM7SUFDNUQsQ0FBQztJQU1ELGVBQWU7UUFDWCxPQUFPLGdDQUFnQyxDQUFDLFlBQVksQ0FBQztJQUN6RCxDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sZ0NBQWdDLENBQUMsWUFBWSxDQUFDO0lBQ3pELENBQUM7O0FBN0hjLHNEQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7QUFLNUUsK0NBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0FBSzlFLGNBQWM7QUFDQyx1REFBc0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0FBQzdELG9EQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7QUFDeEUsK0NBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELG1EQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7QUFDM0QsZ0RBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNqRCw4Q0FBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzNDLGtEQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ25ELHlEQUF3QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDOUQsNERBQTJCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUNyRSxvREFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQ3pELCtEQUE4QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7QUFDMUYscURBQW9CLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBa0QxRixrQkFBa0I7QUFFbEIsb0JBQW9CO0FBRXBCLG1CQUFtQjtBQUVuQix5QkFBeUI7QUFFekIsaUJBQWlCO0FBRWpCLGlCQUFpQjtBQUNGLG9EQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7QUFLN0UsOENBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0FBS3BFLGNBQWM7QUFDQyxrREFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO0FBS3pFLHNEQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7QUFDdEUseURBQXdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztBQUM1RSxnREFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7QUFjN0UsU0FBUztBQUNNLDZDQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztBQUNyRCw2Q0FBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7QUF0SHhFLDRFQStIQyJ9