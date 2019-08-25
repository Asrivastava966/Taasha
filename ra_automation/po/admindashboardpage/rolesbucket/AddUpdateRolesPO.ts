import { element, by } from "protractor";
import { RoleTabPO } from "./RoleTabPO";
import { RolePermissionTabPO } from "./RolePermissionTabPO";

export class AddUpdateRolesPO {
    private roleTabPO:RoleTabPO;
    private rolePermissionTabPO:RolePermissionTabPO;

    constructor() {
        this.roleTabPO = new RoleTabPO();
        this.rolePermissionTabPO = new RolePermissionTabPO();
    }

    getRoleTabPO() {
        return this.roleTabPO;
    }

    getRolePermissionTabPO() {
        return this.rolePermissionTabPO;
    }

    private static backToRolesButton = element(by.css('[ng-click=\"backToRole()\"]'));

    getBackToRolesButton() {
        return AddUpdateRolesPO.backToRolesButton;
    }

    private static roleTabLink = element(by.css('[aria-controls=\"home\"]'));
    private static rolePermissionTabLink = element(by.css('[aria-controls=\"profile\"]'));

    getRoleTabLink() {
        return AddUpdateRolesPO.roleTabLink;
    }

    getRolePermissionTabLink() {
        return AddUpdateRolesPO.rolePermissionTabLink;
    }
}