import { ResuppliesCampaignListPO } from "../../../po/admindashboardpage/resupplycampaignsbucket/ResuppliesCampaignListPO";
import { WaitUtils } from "../../../utils/WaitUtils";

export class ResuppliesCampaignListLib {
    waitUtils:WaitUtils;
    resuppliesCampaignListPO:ResuppliesCampaignListPO;

    constructor() {
        this.waitUtils = new WaitUtils();
        this.resuppliesCampaignListPO = new ResuppliesCampaignListPO();
    }

    getResuppliesCampaignListPO() {
        return this.resuppliesCampaignListPO;
    }

    async navigateBackToAdminDashboardPage() {
        await this.getResuppliesCampaignListPO().getAdminDashboardButton().click();
    }

    async processCustomCronJob(startDate:Date, endDate:Date) {
        let isDatePickerSmall = false;

        await this.getResuppliesCampaignListPO().getProcessCustomCronButton().click();
        await this.getResuppliesCampaignListPO().getCronModalStartDatePicker().selectDate(startDate, isDatePickerSmall);
        await this.getResuppliesCampaignListPO().getCronModalEndDatePicker().selectDate(endDate, isDatePickerSmall);
        await this.getResuppliesCampaignListPO().getCronModalProcessCustomCronButton().click();
        await this.getResuppliesCampaignListPO().getProcessCustomCronModalCloseButton().click();
        await this.waitUtils.insertStaticWait(2000);
    }
}