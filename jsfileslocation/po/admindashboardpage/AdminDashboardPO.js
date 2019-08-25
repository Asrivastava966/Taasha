"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AdminDashboardPO {
    getAdminDashboardBucketMaster() {
        return AdminDashboardPO.adminDashboardBucketMaster;
    }
    getAdminDashboardBucketElement(adminDashboardBucket) {
        return this.getAdminDashboardBucketMaster().element(protractor_1.by.css('[data-ng-click*=' + adminDashboardBucket + ']'));
    }
}
//Admin Dashboard buckets
AdminDashboardPO.adminDashboardBucketMaster = protractor_1.element(protractor_1.by.className('masterActions'));
exports.AdminDashboardPO = AdminDashboardPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5EYXNoYm9hcmRQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vYWRtaW5kYXNoYm9hcmRwYWdlL0FkbWluRGFzaGJvYXJkUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFHekMsTUFBYSxnQkFBZ0I7SUFLekIsNkJBQTZCO1FBQ3pCLE9BQU8sZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7SUFDdkQsQ0FBQztJQUVELDhCQUE4QixDQUFDLG9CQUF5QztRQUNwRSxPQUFPLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakgsQ0FBQzs7QUFURCx5QkFBeUI7QUFDViwyQ0FBMEIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUh2Riw0Q0FZQyJ9