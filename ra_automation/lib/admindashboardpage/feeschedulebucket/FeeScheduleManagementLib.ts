import { FeeScheduleManagementPO } from "../../../po/admindashboardpage/feeschedulebucket/FeeScheduleManagementPO";
import { WaitUtils } from "../../../utils/WaitUtils";

export class FeeScheduleManagementLib {
    private feeScheduleManagementPO: FeeScheduleManagementPO;
    private waitUtils: WaitUtils;

    constructor() {
        this.feeScheduleManagementPO = new FeeScheduleManagementPO();
        this.waitUtils = new WaitUtils();
    }

    getFeeScheduleManagementPO() {
        return this.feeScheduleManagementPO;
    }

    async navigateToFeeSchedulesTab() {
        await this.getFeeScheduleManagementPO().getFeeSchedulesTab().click()
    }

    async navigateToFeeSchedulesDetailsTab() {
        await this.waitUtils.waitForElementToBeClickable(this.getFeeScheduleManagementPO().getFeeScheduleDetailsTab())
        await this.getFeeScheduleManagementPO().getFeeScheduleDetailsTab().click()
    }
}