"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
class RoleTabPO {
    getStatusDropdown() {
        return new SelectDropdown_1.SelectDropdown(RoleTabPO.statusDropdown);
    }
    getDescriptionInputField() {
        return RoleTabPO.descriptionInputField;
    }
    getTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(RoleTabPO.typeDropdown);
    }
    getSubmitOrUpdateButton() {
        return RoleTabPO.submitOrUpdateButton;
    }
}
RoleTabPO.statusDropdown = protractor_1.element(protractor_1.by.id('inputStatus'));
RoleTabPO.descriptionInputField = protractor_1.element(protractor_1.by.id('inputRoleDsc'));
RoleTabPO.typeDropdown = protractor_1.element(protractor_1.by.id('inputRoleType'));
RoleTabPO.submitOrUpdateButton = protractor_1.element(protractor_1.by.css('[ng-click*=\"saveRoleInfo\"]'));
exports.RoleTabPO = RoleTabPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZVRhYlBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9hZG1pbmRhc2hib2FyZHBhZ2Uvcm9sZXNidWNrZXQvUm9sZVRhYlBPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlDO0FBQ3pDLDJFQUF3RTtBQUV4RSxNQUFhLFNBQVM7SUFNbEIsaUJBQWlCO1FBQ2IsT0FBTyxJQUFJLCtCQUFjLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx3QkFBd0I7UUFDcEIsT0FBTyxTQUFTLENBQUMscUJBQXFCLENBQUM7SUFDM0MsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLElBQUksK0JBQWMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMxQyxDQUFDOztBQW5CYyx3QkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQy9DLCtCQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELHNCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDL0MsOEJBQW9CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztBQUoxRiw4QkFxQkMifQ==