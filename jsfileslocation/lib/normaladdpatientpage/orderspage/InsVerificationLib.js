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
const WaitUtils_1 = require("../../../utils/WaitUtils");
const InsVerificationPO_1 = require("../../../po/normaladdpatientpage/orderspage/InsVerificationPO");
class InsVerificationLib {
    constructor() {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.insVarificationPO = new InsVerificationPO_1.InsVerificationPO();
    }
    getWaitUtils() {
        return this.waitUtils;
    }
    getInsVerificationPO() {
        return this.insVarificationPO;
    }
    getOrderInsuranceSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsVerificationPO().getOrderInsuranceSuccessMessage().getText();
        });
    }
    /**
     *
     * @param activePolicyIndex starts at 1
     */
    navigateToActiveInsurancePolicyDetailsPage(activePolicyIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            let insuranceTypeColumnIndex = 1;
            yield this.getInsVerificationPO().getActivePolicyTable().getTableBodyRowCell(insuranceTypeColumnIndex, activePolicyIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
    navigateToInactiveInsurancePolicyDetailsPage(inactivePolicyIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            let insuranceTypeColumnIndex = 1;
            yield this.getInsVerificationPO().getInactivePolicyTable().getTableBodyRowCell(insuranceTypeColumnIndex, inactivePolicyIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
    //Online Eligibility
    toggleOnlineEligibility() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsVerificationPO().getOnlineEligibilityToggle().click();
        });
    }
    performManualEligibilityCheck(verificationDate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.toggleOnlineEligibility();
            yield this.getInsVerificationPO().getManualEligibilityCheckButton().click();
            yield this.getWaitUtils().waitForElementToBeVisible(this.getInsVerificationPO().getManualEligibilityCheckModal().getEligibleRadioInputField());
            yield this.getWaitUtils().waitForElementToBeClickable(this.getInsVerificationPO().getManualEligibilityCheckModal().getEligibleRadioInputField());
            yield this.getInsVerificationPO().getManualEligibilityCheckModal().getEligibleRadioInputField().click();
            let isDatePickerSmall = false;
            yield this.getInsVerificationPO().getManualEligibilityCheckModal().getDateCheckedDateInputField().selectDate(verificationDate, isDatePickerSmall);
            yield this.getInsVerificationPO().getManualEligibilityCheckModal().getSaveButton().click();
        });
    }
    getStatusValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsVerificationPO().getStatusInputField().getAttribute('value');
        });
    }
    getCheckedDateValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsVerificationPO().getCheckedDateInputField().getAttribute('value');
        });
    }
    getCheckedByValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsVerificationPO().getCheckedByInputField().getAttribute('value');
        });
    }
    getMethodValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsVerificationPO().getMethodInputField().getAttribute('value');
        });
    }
    getLastElectronicEligibilityCheckedValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsVerificationPO().getLastElectronicEligibilityCheckedInputField().getAttribute('value');
        });
    }
    //Footer
    saveOrderInsurance() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getWaitUtils().waitForElementToBeVisible(this.getInsVerificationPO().getSaveButton());
            yield this.getWaitUtils().waitForElementToBeClickable(this.getInsVerificationPO().getSaveButton());
            yield this.getInsVerificationPO().getSaveButton().click();
        });
    }
}
exports.InsVerificationLib = InsVerificationLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zVmVyaWZpY2F0aW9uTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvbm9ybWFsYWRkcGF0aWVudHBhZ2Uvb3JkZXJzcGFnZS9JbnNWZXJpZmljYXRpb25MaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFnQztBQUNoQyx3REFBcUQ7QUFDckQscUdBQWtHO0FBRWxHLE1BQWEsa0JBQWtCO0lBSTNCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVLLCtCQUErQjs7WUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLCtCQUErQixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekYsQ0FBQztLQUFBO0lBRUQ7OztPQUdHO0lBQ0csMENBQTBDLENBQUMsaUJBQXdCOztZQUNyRSxJQUFJLHdCQUF3QixHQUFHLENBQUMsQ0FBQztZQUVqQyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUMsbUJBQW1CLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9KLENBQUM7S0FBQTtJQUVLLDRDQUE0QyxDQUFDLG1CQUEwQjs7WUFDekUsSUFBSSx3QkFBd0IsR0FBRyxDQUFDLENBQUM7WUFFakMsTUFBTSxJQUFJLENBQUMsb0JB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