"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const RoleTabPO_1 = require("./RoleTabPO");
const RolePermissionTabPO_1 = require("./RolePermissionTabPO");
class AddUpdateRolesPO {
    constructor() {
        this.roleTabPO = new RoleTabPO_1.RoleTabPO();
        this.rolePermissionTabPO = new RolePermissionTabPO_1.RolePermissionTabPO();
    }
    getRoleTabPO() {
        return this.roleTabPO;
    }
    getRolePermissionTabPO() {
        return this.rolePermissionTabPO;
    }
    getBackToRolesButton() {
        return AddUpdateRolesPO.backToRolesButton;
    }
    getRoleTabLink() {
        return AddUpdateRolesPO.roleTabLink;
    }
    getRolePermissionTabLink() {
        return AddUpdateRolesPO.rolePermissionTabLink;
    }
}
AddUpdateRolesPO.backToRolesButton = protractor_1.element(protractor_1.by.css('[ng-click=\"backToRole()\"]'));
AddUpdateRolesPO.roleTabLink = protractor_1.element(protractor_1.by.css('[aria-controls=\"home\"]'));
AddUpdateRolesPO.rolePermissionTabLink = protractor_1.element(protractor_1.by.css('[aria-controls=\"profile\"]'));
exports.AddUpdateRolesPO = AddUpdateRolesPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVXBkYXRlUm9sZXNQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vYWRtaW5kYXNoYm9hcmRwYWdlL3JvbGVzYnVja2V0L0FkZFVwZGF0ZVJvbGVzUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsMkNBQXdDO0FBQ3hDLCtEQUE0RDtBQUU1RCxNQUFhLGdCQUFnQjtJQUl6QjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BDLENBQUM7SUFJRCxvQkFBb0I7UUFDaEIsT0FBTyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QyxDQUFDO0lBS0QsY0FBYztRQUNWLE9BQU8sZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3QkFBd0I7UUFDcEIsT0FBTyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUNsRCxDQUFDOztBQWZjLGtDQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFNbkUsNEJBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0FBQzFELHNDQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUF4QjFGLDRDQWlDQyJ9