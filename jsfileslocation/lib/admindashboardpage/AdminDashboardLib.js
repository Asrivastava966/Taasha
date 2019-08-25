"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminDashboardPO_1 = require("../../po/admindashboardpage/AdminDashboardPO");
class AdminDashboardLib {
    constructor() {
        this.adminDashboardPO = new AdminDashboardPO_1.AdminDashboardPO();
    }
    getAdminDashboardPO() {
        return this.adminDashboardPO;
    }
    navigateToAdminDashboardBucket(adminDashboardBucket) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAdminDashboardPO().getAdminDashboardBucketElement(adminDashboardBucket).click();
        });
    }
}
exports.AdminDashboardLib = AdminDashboardLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5EYXNoYm9hcmRMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9hZG1pbmRhc2hib2FyZHBhZ2UvQWRtaW5EYXNoYm9hcmRMaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1GQUFnRjtBQUdoRixNQUFhLGlCQUFpQjtJQUcxQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7SUFFSyw4QkFBOEIsQ0FBQyxvQkFBeUM7O1lBQzFFLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsOEJBQThCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRyxDQUFDO0tBQUE7Q0FDSjtBQWRELDhDQWNDIn0=