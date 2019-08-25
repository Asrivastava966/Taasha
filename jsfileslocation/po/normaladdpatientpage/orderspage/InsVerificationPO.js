"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BaseTable_1 = require("../../../component/base/BaseTable");
const InsVerificationManualEligibilityVerificationModal_1 = require("../../../component/comp/InsVerificationManualEligibilityVerificationModal");
class InsVerificationPO {
    getActivePolicyTable() {
        return new BaseTable_1.BaseTable(InsVerificationPO.activePolicyTable);
    }
    getInactivePolicyTable() {
        return new BaseTable_1.BaseTable(InsVerificationPO.inactivePolicyTable);
    }
    getOrderInsuranceSuccessMessage() {
        return InsVerificationPO.orderInsuranceSuccessMessage;
    }
    getOrderDetailsToggle() {
        return InsVerificationPO.orderDetailsToggle;
    }
    getOnlineEligibilityToggle() {
        return InsVerificationPO.onlineEligibilityToggle;
    }
    getEletronicEligibilityCheckButton() {
        return InsVerificationPO.eletronicEligibilityCheckButton;
    }
    getManualEligibilityCheckButton() {
        return InsVerificationPO.manualEligibilityCheckButton;
    }
    getManualEligibilityCheckModal() {
        return new InsVerificationManualEligibilityVerificationModal_1.InsVerificationManualEligibilityCheckModal(InsVerificationPO.manualEligibilityCheckModal);
    }
    getStatusInputField() {
        return InsVerificationPO.statusInputField;
    }
    getCheckedDateInputField() {
        return InsVerificationPO.checkedDateInputField;
    }
    getCheckedByInputField() {
        return InsVerificationPO.checkedByInputField;
    }
    getMethodInputField() {
        return InsVerificationPO.methodInputField;
    }
    getLastElectronicEligibilityCheckedInputField() {
        return InsVerificationPO.lastElectronicEligibilityCheckedInputField;
    }
    getInNetworkBenefitsToggle() {
        return InsVerificationPO.inNetworkBenefitsToggle;
    }
    getOutOfNetworkBenefitsToggle() {
        return InsVerificationPO.outOfNetworkBenefitsToggle;
    }
    getSaveButton() {
        return InsVerificationPO.saveButton;
    }
    getCancelButton() {
        return InsVerificationPO.cancelButton;
    }
}
InsVerificationPO.activePolicyTable = protractor_1.element(protractor_1.by.css('[data-ng-table=\"UI_ACTIVE.tableParams\"]'));
InsVerificationPO.inactivePolicyTable = protractor_1.element(protractor_1.by.css('[data-ng-table=\"UI_IN_ACTIVE.tableParams\"]'));
InsVerificationPO.orderInsuranceSuccessMessage = protractor_1.element(protractor_1.by.binding('renderSuccessMessage()'));
//// Insurance Details ////
//General Info 
//Order Details 
InsVerificationPO.orderDetailsToggle = protractor_1.element(protractor_1.by.css('[ng-click*=\"openProductList()\"]'));
//Online Eligibility 
InsVerificationPO.onlineEligibilityToggle = protractor_1.element(protractor_1.by.css('[ng-click*=\"toggleEligibilityVerification\"]'));
InsVerificationPO.eletronicEligibilityCheckButton = protractor_1.element(protractor_1.by.id('btnEletronicEligibilityCheck'));
InsVerificationPO.manualEligibilityCheckButton = protractor_1.element(protractor_1.by.id('btnManulEligibilityCheck'));
InsVerificationPO.manualEligibilityCheckModal = protractor_1.element(protractor_1.by.className('modal-dialog'));
InsVerificationPO.statusInputField = protractor_1.element(protractor_1.by.model('orderInsurance.payload.ebStatus'));
InsVerificationPO.checkedDateInputField = protractor_1.element(protractor_1.by.model('orderInsurance.payload.ebCheckedOn'));
InsVerificationPO.checkedByInputField = protractor_1.element(protractor_1.by.model('orderInsurance.payload.ebCheckedBy'));
InsVerificationPO.methodInputField = protractor_1.element(protractor_1.by.model('orderInsurance.payload.ebCheckMethod'));
InsVerificationPO.lastElectronicEligibilityCheckedInputField = protractor_1.element(protractor_1.by.model('orderInsurance.payload.ebLastChecked'));
//In Network Benefits 
InsVerificationPO.inNetworkBenefitsToggle = protractor_1.element(protractor_1.by.css('[ng-click*=\"toggleINBenefits\"]'));
//Out of Network Benefits
InsVerificationPO.outOfNetworkBenefitsToggle = protractor_1.element(protractor_1.by.css('[ng-click*=\"toggleONBenefits\"]'));
//Footer 
InsVerificationPO.saveButton = protractor_1.element(protractor_1.by.css('[ng-click*=\"saveOrderInsurance\"]'));
InsVerificationPO.cancelButton = protractor_1.element(protractor_1.by.css('[ng-click=\"cancelOrderInsurace()\"]'));
exports.InsVerificationPO = InsVerificationPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zVmVyaWZpY2F0aW9uUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL25vcm1hbGFkZHBhdGllbnRwYWdlL29yZGVyc3BhZ2UvSW5zVmVyaWZpY2F0aW9uUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsaUVBQThEO0FBQzlELGlKQUF1STtBQUV2SSxNQUFhLGlCQUFpQjtJQUcxQixvQkFBb0I7UUFDaEIsT0FBTyxJQUFJLHFCQUFTLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBSUQsc0JBQXNCO1FBQ2xCLE9BQU8sSUFBSSxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUlELCtCQUErQjtRQUMzQixPQUFPLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDO0lBQzFELENBQUM7SUFRRCxxQkFBcUI7UUFDakIsT0FBTyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztJQUNoRCxDQUFDO0lBS0QsMEJBQTBCO1FBQ3RCLE9BQU8saUJBQWlCLENBQUMsdUJBQXVCLENBQUM7SUFDckQsQ0FBQztJQU1ELGtDQUFrQztRQUM5QixPQUFPLGlCQUFpQixDQUFDLCtCQUErQixDQUFDO0lBQzdELENBQUM7SUFFRCwrQkFBK0I7UUFDM0IsT0FBTyxpQkFBaUIsQ0FBQyw0QkFBNEIsQ0FBQztJQUMxRCxDQUFDO0lBRUQsOEJBQThCO1FBQzFCLE9BQU8sSUFBSSw4RkFBMEMsQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFRRCxtQkFBbUI7UUFDZixPQUFPLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDO0lBQzlDLENBQUM7SUFFRCx3QkFBd0I7UUFDcEIsT0FBTyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLE9B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