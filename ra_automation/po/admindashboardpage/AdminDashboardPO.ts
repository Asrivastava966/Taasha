import { element, by } from "protractor";
import { AdminDashboardBucket } from "../../data/enums/AdminDashboardBucket";

export class AdminDashboardPO {

    //Admin Dashboard buckets
    private static adminDashboardBucketMaster = element(by.className('masterActions'));

    getAdminDashboardBucketMaster() {
        return AdminDashboardPO.adminDashboardBucketMaster;
    }

    getAdminDashboardBucketElement(adminDashboardBucket:AdminDashboardBucket) {
        return this.getAdminDashboardBucketMaster().element(by.css('[data-ng-click*=' + adminDashboardBucket + ']'));
    }
}