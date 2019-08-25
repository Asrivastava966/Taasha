"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const RoleManagementGrid_1 = require("../../../component/comp/RoleManagementGrid");
class RoleManagementPO {
    getAdminDashboardButton() {
        return RoleManagementPO.adminDashboardButton;
    }
    getAddNewRoleButton() {
        return RoleManagementPO.addNewRoleButton;
    }
    getRoleManagementGrid() {
        return new RoleManagementGrid_1.RoleManagementGrid(RoleManagementPO.roleManagementGrid);
    }
}
RoleManagementPO.adminDashboardButton = protractor_1.element(protractor_1.by.buttonText('Admin Dashboard'));
RoleManagementPO.addNewRoleButton = protractor_1.element(protractor_1.by.buttonText('Add New Role'));
RoleManagementPO.roleManagementGrid = protractor_1.element(protractor_1.by.id('grid1'));
exports.RoleManagementPO = RoleManagementPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZU1hbmFnZW1lbnRQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vYWRtaW5kYXNoYm9hcmRwYWdlL3JvbGVzYnVja2V0L1JvbGVNYW5hZ2VtZW50UE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsbUZBQWdGO0FBRWhGLE1BQWEsZ0JBQWdCO0lBSXpCLHVCQUF1QjtRQUNuQixPQUFPLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0lBQ2pELENBQUM7SUFJRCxtQkFBbUI7UUFDZixPQUFPLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7SUFJRCxxQkFBcUI7UUFDakIsT0FBTyxJQUFJLHVDQUFrQixDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdkUsQ0FBQzs7QUFoQmMscUNBQW9CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQU1qRSxpQ0FBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQU0xRCxtQ0FBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQWRoRSw0Q0FtQkMifQ==