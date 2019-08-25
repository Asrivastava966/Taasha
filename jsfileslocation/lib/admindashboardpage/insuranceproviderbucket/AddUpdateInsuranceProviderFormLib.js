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
const AddUpdateInsuranceProviderFormPO_1 = require("../../../po/admindashboardpage/insuranceproviderbucket/AddUpdateInsuranceProviderFormPO");
class AddUpdateInsuranceProviderFormLib {
    constructor() {
        this.addUpdateInsuranceProviderFormPO = new AddUpdateInsuranceProviderFormPO_1.AddUpdateInsuranceProviderFormPO();
    }
    getAddUpdateInsuranceProviderFormPO() {
        return this.addUpdateInsuranceProviderFormPO;
    }
    navigateBackToInsuranceProvidersGridPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getBackToProvidersButton().click();
        });
    }
    getSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getAddUpdateInsuranceProviderFormPO().getSuccessMessage().getText();
        });
    }
    //General Info
    fillProviderName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getProviderNameInputField().sendKeys(name);
        });
    }
    selectGroup(group) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getGroupSelectDropdown().selectOption(group);
        });
    }
    selectStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getStatusDropdown().selectOption(status);
        });
    }
    fillLegacyID(legacyID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getLegacyIdInputField().sendKeys(legacyID);
        });
    }
    selectTaxType(taxType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getTaxTypeDropdown().selectOption(taxType);
        });
    }
    fillNPI(npi) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getNpiInputField().sendKeys(npi);
        });
    }
    fillWebsite(website) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getWebsiteInputField().sendKeys(website);
        });
    }
    fillProviderNumber(providerNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getProviderNumberInputField().sendKeys(providerNumber);
        });
    }
    checkMedicareFeeScheduleCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getMedicareFeeScheduleCheckbox().click();
        });
    }
    checkBranchOfficesSelectAllCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getBranchOfficesSelectAllCheckbox().click();
        });
    }
    //Billing Address 
    //Verification Info
    //1500 Claim Forms 
    //Commercial Eligibility 
    //eClaims Carrier 
    //Insurance Note 
    toggleInsuranceNote() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getInsuranceNoteToggle().click();
        });
    }
    fillNotes(notes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getNotesTextarea().sendKeys(notes);
        });
    }
    //Contact Info
    toggleContactInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getContactInfoToggle().click();
        });
    }
    fillPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getPhoneNumberInputField().sendKeys(phoneNumber);
        });
    }
    fillPhoneExtNumber(phoneExtNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getPhoneExtNumberInputField().sendKeys(phoneExtNumber);
        });
    }
    fillEmailID(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getEmailInputField().sendKeys(email);
        });
    }
    //Workflow methods
    fillInsuranceProviderManagementInfo(insuranceProviderInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (insuranceProviderInfo.getProviderName() != null) {
                yield this.fillProviderName(insuranceProviderInfo.getProviderName());
            }
            if (insuranceProviderInfo.getGroup() != null) {
                yield this.selectGroup(insuranceProviderInfo.getGroup());
            }
            if (insuranceProviderInfo.getStatus() != null) {
                yield this.selectStatus(insuranceProviderInfo.getStatus());
            }
            if (insuranceProviderInfo.getLegacyId() != null) {
                yield this.fillLegacyID(insuranceProviderInfo.getLegacyId());
            }
            if (insuranceProviderInfo.getTaxType() != null) {
                yield this.selectTaxType(insuranceProviderInfo.getTaxType());
            }
            if (insuranceProviderInfo.getNpi() != null) {
                yield this.fillNPI(insuranceProviderInfo.getNpi());
            }
            if (insuranceProviderInfo.getWebsite() != null) {
                yield this.fillWebsite(insuranceProviderInfo.getWebsite());
            }
            if (insuranceProviderInfo.getProviderNumber() != null) {
                yield this.fillProviderNumber(insuranceProviderInfo.getProviderNumber());
            }
            if (insuranceProviderInfo.getMedicareFeeScheduleCheckbox() != null) {
                if (insuranceProviderInfo.getMedicareFeeScheduleCheckbox() == true) {
                    yield this.checkMedicareFeeScheduleCheckbox();
                }
            }
            if (insuranceProviderInfo.getBranchOfficeSelectAllCheckbox() != null) {
                if (insuranceProviderInfo.getBranchOfficeSelectAllCheckbox() == true) {
                    yield this.checkBranchOfficesSelectAllCheckbox();
                }
            }
        });
    }
    fillInsuranceProviderInsuranceNote(insuranceProviderInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.toggleInsuranceNote();
            if (insuranceProviderInfo.getNotes() != null) {
                yield this.fillNotes(insuranceProviderInfo.getNotes());
            }
        });
    }
    fillInsuranceProviderContactInfo(insuranceProviderInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.toggleContactInfo();
            if (insuranceProviderInfo.getPhoneNumber() != null) {
                yield this.fillPhoneNumber(insuranceProviderInfo.getPhoneNumber());
            }
            if (insuranceProviderInfo.getPhoneExtNumber() != null) {
                yield this.fillPhoneExtNumber(insuranceProviderInfo.getPhoneExtNumber());
            }
            if (insuranceProviderInfo.getEmail() != null) {
                yield this.fillEmailID(insuranceProviderInfo.getEmail());
            }
        });
    }
    //Footer
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getSubmitButton().click();
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddUpdateInsuranceProviderFormPO().getUpdateButton().click();
        });
    }
}
exports.AddUpdateInsuranceProviderFormLib = AddUpdateInsuranceProviderFormLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVXBkYXRlSW5zdXJhbmNlUHJvdmlkZXJGb3JtTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvYWRtaW5kYXNoYm9hcmRwYWdlL2luc3VyYW5jZXByb3ZpZGVyYnVja2V0L0FkZFVwZGF0ZUluc3VyYW5jZVByb3ZpZGVyRm9ybUxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsOElBQTJJO0FBTTNJLE1BQWEsaUNBQWlDO0lBRzFDO1FBQ0ksSUFBSSxDQUFDLGdDQUFnQyxHQUFHLElBQUksbUVBQWdDLEVBQUUsQ0FBQztJQUNuRixDQUFDO0lBRUQsbUNBQW1DO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDO0lBQ2pELENBQUM7SUFFSyx3Q0FBd0M7O1lBQzFDLE1BQU0sSUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4RixDQUFDO0tBQUE7SUFFSyxpQkFBaUI7O1lBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsbUNBQW1DLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFGLENBQUM7S0FBQTtJQUVELGNBQWM7SUFDUixnQkFBZ0IsQ0FBQyxJQUFXOztZQUM5QixNQUFNLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hHLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxLQUE0Qjs7WUFDMUMsTUFBTSxJQUFJLENBQUMsbUNBQW1DLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRyxDQUFDO0tBQUE7SUFFSyxZQUFZLENBQUMsTUFBYTs7WUFDNUIsTUFBTSxJQUFJLENBQUMsbUNBQW1DLEVBQUUsQ0FBQyxpQkFBaUIs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