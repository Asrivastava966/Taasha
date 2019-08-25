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
const FeeScheduleDetailsPO_1 = require("../../../po/admindashboardpage/feeschedulebucket/FeeScheduleDetailsPO");
const WaitUtils_1 = require("../../../utils/WaitUtils");
class FeeScheduleDetailsLib {
    constructor() {
        this.feeScheduleDetailsPO = new FeeScheduleDetailsPO_1.FeeScheduleDetailsPO();
        this.waitUtils = new WaitUtils_1.WaitUtils();
    }
    getFeeScheduleDetailsPO() {
        return this.feeScheduleDetailsPO;
    }
    // Set Search FeeScheduledetail Info
    selectFeeScheduleDetailsStatusFilter(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getStatusFilterSelectDropdown().selectOption(status);
        });
    }
    selectFeescheduleDetailsFeeScheduleFilter(feeSchedule) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getFeeScheduleFilterSelectDropdown().selectOption(feeSchedule);
        });
    }
    selectFeeScheduleDetailsHCPCSCodeFilter(hcpcsCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getHCPCScodeFilterCustomDropdownMenu().selectDropdownMenuOptionByLinkText(hcpcsCode);
        });
    }
    selectFeeScheduleDetailsPriceTypeFilter(priceType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getPriceTypeFilterDropdown().selectOption(priceType);
        });
    }
    selectFeeScheduledetailsAuthorizationFilter(authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getAuthorizationFilterSelectDropdown().selectOption(authorization);
        });
    }
    // get the FeeScheduleDeatils search result
    filterFeeScheduleDetails(searchFeeScheduleDetailsInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (searchFeeScheduleDetailsInfo.getStatus() != null) {
                yield this.selectFeeScheduleDetailsStatusFilter(searchFeeScheduleDetailsInfo.getStatus());
            }
            if (searchFeeScheduleDetailsInfo.getFeeSchedule() != null) {
                yield this.selectFeescheduleDetailsFeeScheduleFilter(searchFeeScheduleDetailsInfo.getFeeSchedule());
            }
            if (searchFeeScheduleDetailsInfo.getHCPCS_Code() != null) {
                yield this.selectFeeScheduleDetailsHCPCSCodeFilter(searchFeeScheduleDetailsInfo.getHCPCS_Code());
            }
            if (searchFeeScheduleDetailsInfo.getPriceType() != null) {
                yield this.selectFeeScheduleDetailsPriceTypeFilter(searchFeeScheduleDetailsInfo.getPriceType());
            }
            if (searchFeeScheduleDetailsInfo.getAuthorization() != null) {
                yield this.selectFeeScheduledetailsAuthorizationFilter(searchFeeScheduleDetailsInfo.getAuthorization());
            }
        });
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getSearchButton().click();
        });
    }
    navigateToAdminDashboard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getAdminDashboardButton().click();
        });
    }
    navigateAddNewFeeScheduleDetailsForm() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getAddNewFeeScheduleDetailsButton().click();
        });
    }
    //Edit/submit General Info
    selectFeeSchedule(feesuchedule) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getFeeScheduleSelectDropdown().selectOption(feesuchedule);
        });
    }
    selectHCPCSCode(hcpcCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getHCPCSCodeInputField().selectDropdownMenuOptionByLinkText(hcpcCode);
        });
    }
    selectPriceType(priceType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getPriceTypeSelectDropdown().selectOption(priceType);
        });
    }
    selectBeginDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getFeeScheduleDetailsPO().getBringDateInputField().selectDate(date, isDatePickerSmall);
        });
    }
    selectEndDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getFeeScheduleDetailsPO().getEndDateInputField().selectDate(date, isDatePickerSmall);
        });
    }
    selectAuthorization(authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getAuthorizationSelectDropDown().selectOption(authorization);
        });
    }
    selectMaxUnit(maxUnit) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getMaxUnitInputField().sendKeys(maxUnit);
        });
    }
    selectAllowedFrequency(allowedFrequency) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getAllowedFrequencySelectDropdown().selectOption(allowedFrequency);
        });
    }
    selectBillingPeriod(billingPeriod) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getBillingPeriodSelectDropdown().selectOption(billingPeriod);
        });
    }
    selectInterval(interval) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getIntervalInputField().sendKeys(interval);
        });
    }
    selectTaxable(taxable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getTaxableSelectDropdown().selectOption(taxable);
        });
    }
    // General Info information Field
    addFeeScheduleDetailsGernalInfo(addFeeScheduledetailGeneralInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (addFeeScheduledetailGeneralInfo.getFeeSchedule() != null) {
                yield this.selectFeeSchedule(addFeeScheduledetailGeneralInfo.getFeeSchedule());
            }
            if (addFeeScheduledetailGeneralInfo.getHCPCS_Code() != null) {
                yield this.selectHCPCSCode(addFeeScheduledetailGeneralInfo.getHCPCS_Code());
            }
            if (addFeeScheduledetailGeneralInfo.getPriceType() != null) {
                yield this.selectPriceType(addFeeScheduledetailGeneralInfo.getPriceType());
            }
            if (addFeeScheduledetailGeneralInfo.getBegindate() != null) {
                yield this.selectBeginDate(addFeeScheduledetailGeneralInfo.getBegindate());
            }
            if (addFeeScheduledetailGeneralInfo.getEndDate() != null) {
                yield this.selectEndDate(addFeeScheduledetailGeneralInfo.getEndDate());
            }
            if (addFeeScheduledetailGeneralInfo.getAuthorization() != null) {
                yield this.selectAuthorization(addFeeScheduledetailGeneralInfo.getAuthorization());
            }
            if (addFeeScheduledetailGeneralInfo.getMaxUnit() != null) {
                yield this.selectMaxUnit(addFeeScheduledetailGeneralInfo.getMaxUnit());
            }
            if (addFeeScheduledetailGeneralInfo.getAllowedFrequency() != null) {
                yield this.selectAllowedFrequency(addFeeScheduledetailGeneralInfo.getAllowedFrequency());
            }
            if (addFeeScheduledetailGeneralInfo.getBillingPeriod() != null) {
                yield this.selectBillingPeriod(addFeeScheduledetailGeneralInfo.getBillingPeriod());
            }
            if (addFeeScheduledetailGeneralInfo.getInterval() != null) {
                yield this.selectInterval(addFeeScheduledetailGeneralInfo.getInterval());
            }
            if (addFeeScheduledetailGeneralInfo.getTaxable() != null) {
                yield this.selectTaxable(addFeeScheduledetailGeneralInfo.getTaxable());
            }
            yield this.getFeeScheduleDetailsPO().getAddNewFeeSchedulePeriodButton().click();
            if (addFeeScheduledetailGeneralInfo.getConvertToPurchase() != null) {
                yield this.selectConvertToPurchase(addFeeScheduledetailGeneralInfo.getConvertToPurchase());
            }
            if (addFeeScheduledetailGeneralInfo.getPeriodName() != null) {
                yield this.selectPeriodName(addFeeScheduledetailGeneralInfo.getPeriodName());
            }
            if (addFeeScheduledetailGeneralInfo.getBeginPeriod() != null) {
                yield this.selectBeginPeriod(addFeeScheduledetailGeneralInfo.getBeginPeriod());
            }
            if (addFeeScheduledetailGeneralInfo.getEndPeriod() != null) {
                yield this.selectEndPeriod(addFeeScheduledetailGeneralInfo.getEndPeriod());
            }
            if (addFeeScheduledetailGeneralInfo.getCharge() != null) {
                yield this.selectCharge(addFeeScheduledetailGeneralInfo.getCharge());
            }
            if (addFeeScheduledetailGeneralInfo.getAllow() != null) {
                yield this.selectCharge(addFeeScheduledetailGeneralInfo.getAllow());
            }
            if (addFeeScheduledetailGeneralInfo.getModifiers() != null) {
                yield this.selectMofifiers1(addFeeScheduledetailGeneralInfo.getModifiers());
            }
            if (addFeeScheduledetailGeneralInfo.getModifiers() != null) {
                yield this.selectModifiers2(addFeeScheduledetailGeneralInfo.getModifiers());
            }
            if (addFeeScheduledetailGeneralInfo.getModifiers() != null) {
                yield this.selectModifiers3(addFeeScheduledetailGeneralInfo.getModifiers());
            }
            if (addFeeScheduledetailGeneralInfo.getModifiers() != null) {
                yield this.selectModifiers4(addFeeScheduledetailGeneralInfo.getModifiers());
            }
            yield this.addButton();
            yield this.submitButton();
        });
    }
    // Add New FeeSchedule Period
    selectCharge(charge) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getChargeInputField().sendKeys(charge);
        });
    }
    selectAllow(allow) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getAllowInputField().sendKeys(allow);
        });
    }
    navigateAddNewFeeSchedulePeriodForm() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getAddNewFeeSchedulePeriodButton().click();
        });
    }
    selectConvertToPurchase(convert) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getConvertToPurchaseSelectDropdown().selectOption(convert);
        });
    }
    selectPeriodName(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getPeriodNameInputField().sendKeys(value);
        });
    }
    selectBeginPeriod(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getBeginPeriodInputField().sendKeys(value);
        });
    }
    selectEndPeriod(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getEndPeriodInputField().sendKeys(value);
        });
    }
    selectMofifiers1(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getModifiers1SelectDropDown().selectOption(value);
        });
    }
    selectModifiers2(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getModifiers2SelectDropDown().selectOption(value);
        });
    }
    selectModifiers3(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getModifiers3SelectDropDown().selectOption(value);
        });
    }
    selectModifiers4(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getModifiers4SelectDropDown().selectOption(value);
        });
    }
    // addNewFeeSchedulePeriod Submit/Cancel//Update Button 
    addButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getAddButton().click();
        });
    }
    cancelButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getCancelButton().click();
        });
    }
    submitButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getSubmitButton().click();
        });
    }
    updateButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleDetailsPO().getUpdateButton().click();
        });
    }
    successMessageText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFeeScheduleDetailsPO().getSuccessMessage().getText();
        });
    }
    successMessagePresent() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFeeScheduleDetailsPO().getSuccessMessage().isPresent();
        });
    }
    duplicatedMessagePresent() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFeeScheduleDetailsPO().getDuplicateValidationMessage().isPresent();
        });
    }
    duplicateMessageText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFeeScheduleDetailsPO().getDuplicateValidationMessage().getText();
        });
    }
}
exports.FeeScheduleDetailsLib = FeeScheduleDetailsLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlU2NoZWR1bGVEZXRhaWxzTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvYWRtaW5kYXNoYm9hcmRwYWdlL2ZlZXNjaGVkdWxlYnVja2V0L0ZlZVNjaGVkdWxlRGV0YWlsc0xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0hBQTRHO0FBVzVHLHdEQUFxRDtBQUVyRCxNQUFhLHFCQUFxQjtJQUk5QjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLDJDQUFvQixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsdUJBQXVCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFBO0lBQ3BDLENBQUM7SUFFRCxvQ0FBb0M7SUFDOUIsb0NBQW9DLENBQUMsTUFBeUI7O1lBQ2hFLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUMsNkJBQTZCLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0YsQ0FBQztLQUFBO0lBQ0sseUNBQXlDLENBQUMsV0FBbUI7O1lBQy9ELE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUMsa0NBQWtDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdkcsQ0FBQztLQUFBO0lBQ0ssdUNBQXVDLENBQUMsU0FBcUI7O1lBQy9ELE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUMsb0NBQW9DLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM3SCxDQUFDO0tBQUE7SUFDSyx1Q0FBdUMsQ0FBQyxTQUErQjs7WUFDekUsTUFBTSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM3RixD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