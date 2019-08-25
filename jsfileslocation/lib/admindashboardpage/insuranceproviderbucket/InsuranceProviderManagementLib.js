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
const InsuranceProviderManagementPO_1 = require("../../../po/admindashboardpage/insuranceproviderbucket/InsuranceProviderManagementPO");
const AddUpdateInsuranceProviderFormLib_1 = require("./AddUpdateInsuranceProviderFormLib");
class InsuranceProviderManagementLib {
    constructor() {
        this.insuranceProviderManagementPO = new InsuranceProviderManagementPO_1.InsuranceProviderManagementPO();
        this.addUpdateInsuranceProviderFormLib = new AddUpdateInsuranceProviderFormLib_1.AddUpdateInsuranceProviderFormLib();
    }
    getInsuranceProviderManagementPO() {
        return this.insuranceProviderManagementPO;
    }
    getAddUpdateInsuranceProviderFormLib() {
        return this.addUpdateInsuranceProviderFormLib;
    }
    getDeleteInsProviderConfirmationModalMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsuranceProviderManagementPO().getDeleteInsProviderConfirmationModal().getConfirmationModalMessage();
        });
    }
    deleteInsProviderConfirmYes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceProviderManagementPO().getDeleteInsProviderConfirmationModal().confirmYes();
        });
    }
    getSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsuranceProviderManagementPO().getSuccessMessage().getText();
        });
    }
    navigateBackToAdminDashboardPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceProviderManagementPO().getAdminDashboardButton().click();
        });
    }
    navigateToAddNewProviderForm() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceProviderManagementPO().getAddNewProvidersButton().click();
        });
    }
    //filters
    selectStatusFilter(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceProviderManagementPO().getStatusFilterDropdown().selectOption(status);
        });
    }
    fillProviderNameFilter(providerName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceProviderManagementPO().getProviderNameFilterInputField().sendKeys(providerName);
        });
    }
    fillLegacyIDFilter(legacyID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceProviderManagementPO().getLegacyIDFilterInputField().sendKeys(legacyID);
        });
    }
    selectFeeScheduleFilter(feeSchedule) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceProviderManagementPO().getFeeScheduleFilterDropdown().selectOption(feeSchedule);
        });
    }
    fillProviderNumberFilter(providerNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceProviderManagementPO().getProviderNumberFilterInputField().sendKeys(providerNumber);
        });
    }
    selectGroupFilter(group) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceProviderManagementPO().getGroupFilterDropdown().selectOption(group);
        });
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceProviderManagementPO().getSearchButton().click();
        });
    }
    filterByInsuranceProviderInfo(insuranceProviderInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (insuranceProviderInfo.getStatus() != null) {
                yield this.selectStatusFilter(insuranceProviderInfo.getStatus());
            }
            if (insuranceProviderInfo.getProviderName() != null) {
                yield this.fillProviderNameFilter(insuranceProviderInfo.getProviderName());
            }
            if (insuranceProviderInfo.getLegacyId() != null) {
                yield this.fillLegacyIDFilter(insuranceProviderInfo.getLegacyId());
            }
            if (insuranceProviderInfo.getFeeSchedule() != null) {
                yield this.selectFeeScheduleFilter(insuranceProviderInfo.getFeeSchedule());
            }
            if (insuranceProviderInfo.getProviderNumber() != null) {
                yield this.fillProviderNumberFilter(insuranceProviderInfo.getProviderNumber());
            }
            if (insuranceProviderInfo.getGroup() != null) {
                yield this.selectGroupFilter(insuranceProviderInfo.getGroup());
            }
            yield this.search();
        });
    }
    getNoInsProviderFoundValidationMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsuranceProviderManagementPO().getNoInsuranceProviderFoundValidation().getText();
        });
    }
    updateInsuranceProvider(insuranceProviderInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstRowIndex = 1;
            yield this.filterByInsuranceProviderInfo(insuranceProviderInfo);
            yield this.getInsuranceProviderManagementPO().getInsuranceProviderGrid().updateInsuranceProvider(firstRowIndex);
        });
    }
    deleteInsuranceProvider(insuranceProviderInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstRowIndex = 1;
            yield this.filterByInsuranceProviderInfo(insuranceProviderInfo);
            yield this.getInsuranceProviderManagementPO().getInsuranceProviderGrid().deleteInsuranceProvider(firstRowIndex);
        });
    }
}
exports.InsuranceProviderManagementLib = InsuranceProviderManagementLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlUHJvdmlkZXJNYW5hZ2VtZW50TGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvYWRtaW5kYXNoYm9hcmRwYWdlL2luc3VyYW5jZXByb3ZpZGVyYnVja2V0L0luc3VyYW5jZVByb3ZpZGVyTWFuYWdlbWVudExpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0lBQXFJO0FBSXJJLDJGQUF3RjtBQUd4RixNQUFhLDhCQUE4QjtJQUl2QztRQUNJLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLDZEQUE2QixFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLElBQUkscUVBQWlDLEVBQUUsQ0FBQztJQUNyRixDQUFDO0lBRUQsZ0NBQWdDO1FBQzVCLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFDO0lBQzlDLENBQUM7SUFFRCxvQ0FBb0M7UUFDaEMsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUM7SUFDbEQsQ0FBQztJQUVLLDRDQUE0Qzs7WUFDOUMsT0FBTyxNQUFNLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUMvSCxDQUFDO0tBQUE7SUFFSywyQkFBMkI7O1lBQzdCLE1BQU0sSUFBSSxDQUFDLGdDQUFnQyxFQUFFLENBQUMscUNBQXFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2RyxDQUFDO0tBQUE7SUFFSyxpQkFBaUI7O1lBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZGLENBQUM7S0FBQTtJQUVLLGdDQUFnQzs7WUFDbEMsTUFBTSxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BGLENBQUM7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