import { element, by } from "protractor";
import { CustomDropdownMenu } from "../../../component/comp/CustomDropdownMenu";
import { CustomDropdownMenuOrigin } from "../../../data/enums/CustomDropdownMenuOrigin";

export class RolePermissionTabPO {

    private static resetPermissionButton = element(by.css('[ng-click=\"resetPermission()\"]'));
    private static permissionDropdownMenu = element(by.className('dropdown-toggle'));

    getResetPermissionButton() {
        return RolePermissionTabPO.resetPermissionButton;
    }

    getPermissionDropdownMenu() {
        return new CustomDropdownMenu(RolePermissionTabPO.permissionDropdownMenu, CustomDropdownMenuOrigin.BUTTON);
    }
}