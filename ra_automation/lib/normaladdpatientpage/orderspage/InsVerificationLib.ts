import { by } from "protractor";
import { WaitUtils } from "../../../utils/WaitUtils";
import { InsVerificationPO } from "../../../po/normaladdpatientpage/orderspage/InsVerificationPO";

export class InsVerificationLib {
    waitUtils:WaitUtils;
    insVarificationPO:InsVerificationPO;

    constructor() {
        this.waitUtils = new WaitUtils();
        this.insVarificationPO = new InsVerificationPO();
    }

    getWaitUtils() {
        return this.waitUtils;
    }

    getInsVerificationPO() {
        return this.insVarificationPO;
    }

    async getOrderInsuranceSuccessMessage() {
        return await this.getInsVerificationPO().getOrderInsuranceSuccessMessage().getText(); 
    }
    
    /**
     * 
     * @param activePolicyIndex starts at 1
     */
    async navigateToActiveInsurancePolicyDetailsPage(activePolicyIndex:number) {
        let insuranceTypeColumnIndex = 1;
        
        await this.getInsVerificationPO().getActivePolicyTable().getTableBodyRowCell(insuranceTypeColumnIndex, activePolicyIndex).element(by.tagName('a')).click();
    }

    async navigateToInactiveInsurancePolicyDetailsPage(inactivePolicyIndex:number) {
        let insuranceTypeColumnIndex = 1;

        await this.getInsVerificationPO().getInactivePolicyTable().getTableBodyRowCell(insuranceTypeColumnIndex, inactivePolicyIndex).element(by.tagName('a')).click();
    }

    //Online Eligibility
    async toggleOnlineEligibility() {
        await this.getInsVerificationPO().getOnlineEligibilityToggle().click();
    }

    async performManualEligibilityCheck(verificationDate:Date) {
        await this.toggleOnlineEligibility();
        await this.getInsVerificationPO().getManualEligibilityCheckButton().click(); 

        await this.getWaitUtils().waitForElementToBeVisible(this.getInsVerificationPO().getManualEligibilityCheckModal().getEligibleRadioInputField());
        await this.getWaitUtils().waitForElementToBeClickable(this.getInsVerificationPO().getManualEligibilityCheckModal().getEligibleRadioInputField());
        await this.getInsVerificationPO().getManualEligibilityCheckModal().getEligibleRadioInputField().click();

        let isDatePickerSmall = false;
        await this.getInsVerificationPO().getManualEligibilityCheckModal().getDateCheckedDateInputField().selectDate(verificationDate, isDatePickerSmall);
        await this.getInsVerificationPO().getManualEligibilityCheckModal().getSaveButton().click();
    }

    async getStatusValue() {
        return await this.getInsVerificationPO().getStatusInputField().getAttribute('value');
    }

    async getCheckedDateValue() {
        return await this.getInsVerificationPO().getCheckedDateInputField().getAttribute('value');
    }

    async getCheckedByValue() {
        return await this.getInsVerificationPO().getCheckedByInputField().getAttribute('value');
    }

    async getMethodValue() {
        return await this.getInsVerificationPO().getMethodInputField().getAttribute('value');
    }

    async getLastElectronicEligibilityCheckedValue() {
        return await this.getInsVerificationPO().getLastElectronicEligibilityCheckedInputField().getAttribute('value');
    }

    //Footer
    async saveOrderInsurance() {
        await this.getWaitUtils().waitForElementToBeVisible(this.getInsVerificationPO().getSaveButton());
        await this.getWaitUtils().waitForElementToBeClickable(this.getInsVerificationPO().getSaveButton());
        await this.getInsVerificationPO().getSaveButton().click();
    }
}