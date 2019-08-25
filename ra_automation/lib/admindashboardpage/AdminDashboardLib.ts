import { AdminDashboardPO } from "../../po/admindashboardpage/AdminDashboardPO";
import { AdminDashboardBucket } from "../../data/enums/AdminDashboardBucket";

export class AdminDashboardLib {
    adminDashboardPO:AdminDashboardPO;

    constructor() {
        this.adminDashboardPO = new AdminDashboardPO();
    }

    getAdminDashboardPO() {
        return this.adminDashboardPO;
    }

    async navigateToAdminDashboardBucket(adminDashboardBucket:AdminDashboardBucket) {
        await this.getAdminDashboardPO().getAdminDashboardBucketElement(adminDashboardBucket).click();
    }
}