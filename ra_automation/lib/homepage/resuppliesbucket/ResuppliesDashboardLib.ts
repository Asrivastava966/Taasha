import { ResuppliesDashboardPO } from "../../../po/homepage/resuppliesbucket/ResuppliesDashboardPO";
import { ResuppliesDashboardBucket } from "../../../data/enums/ResuppliesDashboardBucket";

export class ResuppliesDashboardLib {
    resuppliesDashboardPO:ResuppliesDashboardPO;

    constructor() {
        this.resuppliesDashboardPO = new ResuppliesDashboardPO();
    }

    getResuppliesDashboardPO() {
        return this.resuppliesDashboardPO;
    }

    async navigateBackToHomepageDashboard() {
        await this.getResuppliesDashboardPO().getDashboardButton().click();
    }

    async navigateToResuppliesDashboardBucket(resuppliesDashboardBucket:ResuppliesDashboardBucket) {
        await this.getResuppliesDashboardPO().getResuppliesDashboardBucketElement(resuppliesDashboardBucket).click();
    }
}