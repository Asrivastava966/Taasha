"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const CustomDropdownMenu_1 = require("../../../component/comp/CustomDropdownMenu");
const CustomDropdownMenuOrigin_1 = require("../../../data/enums/CustomDropdownMenuOrigin");
class RolePermissionTabPO {
    getResetPermissionButton() {
        return RolePermissionTabPO.resetPermissionButton;
    }
    getPermissionDropdownMenu() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(RolePermissionTabPO.permissionDropdownMenu, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.BUTTON);
    }
}
RolePermissionTabPO.resetPermissionButton = protractor_1.element(protractor_1.by.css('[ng-click=\"resetPermission()\"]'));
RolePermissionTabPO.permissionDropdownMenu = protractor_1.element(protractor_1.by.className('dropdown-toggle'));
exports.RolePermissionTabPO = RolePermissionTabPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZVBlcm1pc3Npb25UYWJQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vYWRtaW5kYXNoYm9hcmRwYWdlL3JvbGVzYnVja2V0L1JvbGVQZXJtaXNzaW9uVGFiUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsbUZBQWdGO0FBQ2hGLDJGQUF3RjtBQUV4RixNQUFhLG1CQUFtQjtJQUs1Qix3QkFBd0I7UUFDcEIsT0FBTyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUJBQXlCO1FBQ3JCLE9BQU8sSUFBSSx1Q0FBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxtREFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRyxDQUFDOztBQVRjLHlDQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7QUFDNUUsMENBQXNCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUhyRixrREFZQyJ9