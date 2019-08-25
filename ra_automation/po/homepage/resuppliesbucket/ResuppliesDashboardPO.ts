import { element, by } from "protractor";
import { ResuppliesDashboardBucket } from "../../../data/enums/ResuppliesDashboardBucket";

export class ResuppliesDashboardPO {
    private static dashboardButton = element(by.buttonText('Dashboard'));
    
    getDashboardButton() {
        return ResuppliesDashboardPO.dashboardButton;
    }

    //Resupplies Dashboard buckets
    private static resuppliesDashboardBucketMaster = element(by.className('masterActions'));

    private getResuppliesDashboardBucketMaster() {
        return ResuppliesDashboardPO.resuppliesDashboardBucketMaster;
    }

    getResuppliesDashboardBucketElement(resuppliesDashboardBucket:ResuppliesDashboardBucket) {
        return this.getResuppliesDashboardBucketMaster().element(by.css('[data-ng-click*=' + resuppliesDashboardBucket + ']'));
    }
}