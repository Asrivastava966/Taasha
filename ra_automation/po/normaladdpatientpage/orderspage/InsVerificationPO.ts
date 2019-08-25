import { element, by } from "protractor";
import { BaseTable } from "../../../component/base/BaseTable";
import { InsVerificationManualEligibilityCheckModal } from "../../../component/comp/InsVerificationManualEligibilityVerificationModal";

export class InsVerificationPO {
    private static activePolicyTable = element(by.css('[data-ng-table=\"UI_ACTIVE.tableParams\"]'));

    getActivePolicyTable() {
        return new BaseTable(InsVerificationPO.activePolicyTable);
    }

    private static inactivePolicyTable = element(by.css('[data-ng-table=\"UI_IN_ACTIVE.tableParams\"]'));

    getInactivePolicyTable() {
        return new BaseTable(InsVerificationPO.inactivePolicyTable);
    }

    private static orderInsuranceSuccessMessage = element(by.binding('renderSuccessMessage()'));

    getOrderInsuranceSuccessMessage() {
        return InsVerificationPO.orderInsuranceSuccessMessage;
    }

    //// Insurance Details ////
    //General Info 

    //Order Details 
    private static orderDetailsToggle = element(by.css('[ng-click*=\"openProductList()\"]'));

    getOrderDetailsToggle() {
        return InsVerificationPO.orderDetailsToggle;
    }

    //Online Eligibility 
    private static onlineEligibilityToggle = element(by.css('[ng-click*=\"toggleEligibilityVerification\"]'));

    getOnlineEligibilityToggle() {
        return InsVerificationPO.onlineEligibilityToggle;
    }

    private static eletronicEligibilityCheckButton =  element(by.id('btnEletronicEligibilityCheck'));
    private static manualEligibilityCheckButton =  element(by.id('btnManulEligibilityCheck'));
    private static manualEligibilityCheckModal = element(by.className('modal-dialog'));

    getEletronicEligibilityCheckButton() {
        return InsVerificationPO.eletronicEligibilityCheckButton;
    }

    getManualEligibilityCheckButton() {
        return InsVerificationPO.manualEligibilityCheckButton;
    }

    getManualEligibilityCheckModal() {
        return new InsVerificationManualEligibilityCheckModal(InsVerificationPO.manualEligibilityCheckModal);
    }

    private static statusInputField = element(by.model('orderInsurance.payload.ebStatus'));
    private static checkedDateInputField = element(by.model('orderInsurance.payload.ebCheckedOn'));
    private static checkedByInputField = element(by.model('orderInsurance.payload.ebCheckedBy'));
    private static methodInputField = element(by.model('orderInsurance.payload.ebCheckMethod'));
    private static lastElectronicEligibilityCheckedInputField = element(by.model('orderInsurance.payload.ebLastChecked'));

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

    //In Network Benefits 
    private static inNetworkBenefitsToggle = element(by.css('[ng-click*=\"toggleINBenefits\"]'));

    getInNetworkBenefitsToggle() {
        return InsVerificationPO.inNetworkBenefitsToggle;
    }

    //Out of Network Benefits
    private static outOfNetworkBenefitsToggle = element(by.css('[ng-click*=\"toggleONBenefits\"]'));

    getOutOfNetworkBenefitsToggle() {
        return InsVerificationPO.outOfNetworkBenefitsToggle;
    }

    //Footer 
    private static saveButton = element(by.css('[ng-click*=\"saveOrderInsurance\"]'));
    private static cancelButton = element(by.css('[ng-click=\"cancelOrderInsurace()\"]'));

    getSaveButton() {
        return InsVerificationPO.saveButton;
    }

    getCancelButton() {
        return InsVerificationPO.cancelButton;
    }
}