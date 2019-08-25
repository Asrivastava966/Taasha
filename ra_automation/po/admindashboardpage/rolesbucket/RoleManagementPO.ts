import { element, by } from "protractor";
import { RoleManagementGrid } from "../../../component/comp/RoleManagementGrid";

export class RoleManagementPO {
    
    private static adminDashboardButton = element(by.buttonText('Admin Dashboard'));

    getAdminDashboardButton() {
        return RoleManagementPO.adminDashboardButton;
    }

    private static addNewRoleButton = element(by.buttonText('Add New Role'));

    getAddNewRoleButton() {
        return RoleManagementPO.addNewRoleButton;
    }

    private static roleManagementGrid = element(by.id('grid1'));

    getRoleManagementGrid() {
        return new RoleManagementGrid(RoleManagementPO.roleManagementGrid);
    }
}