"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
class TypeManagementPO {
    getSelectTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(TypeManagementPO.selectTypeDropdown);
    }
    getGoButton() {
        return TypeManagementPO.goButton;
    }
    getAdminDashboardButton() {
        return TypeManagementPO.adminDashboardButton;
    }
    getAddNewtypeButton() {
        return TypeManagementPO.addNewtypeButton;
    }
    getStatusDropdown() {
        return new SelectDropdown_1.SelectDropdown(TypeManagementPO.statusDropdown);
    }
    getDescriptionInputText() {
        return TypeManagementPO.descriptionInputText;
    }
    getLegacyIdInputTextBox() {
        return TypeManagementPO.legacyIdInputText;
    }
    getUpdateButtton() {
        return TypeManagementPO.updateButton;
    }
    getSuccessMessage() {
        return TypeManagementPO.successsUpdateMessage;
    }
}
TypeManagementPO.selectTypeDropdown = protractor_1.element(protractor_1.by.model("manageObjectTypeId"));
TypeManagementPO.goButton = protractor_1.element(protractor_1.by.buttonText("GO"));
TypeManagementPO.adminDashboardButton = protractor_1.element(protractor_1.by.buttonText("Admin Dashboard"));
TypeManagementPO.addNewtypeButton = protractor_1.element(protractor_1.by.buttonText("Add New Type"));
TypeManagementPO.statusDropdown = protractor_1.element(protractor_1.by.model("types.payload.statusCd"));
TypeManagementPO.descriptionInputText = protractor_1.element(protractor_1.by.model("types.payload.typeDsc"));
TypeManagementPO.legacyIdInputText = protractor_1.element(protractor_1.by.model("types.payload.legacyId"));
TypeManagementPO.updateButton = protractor_1.element(protractor_1.by.css("input[ng-click='updateType(addForm.$valid)']"));
TypeManagementPO.successsUpdateMessage = protractor_1.element(protractor_1.by.css("div[ng-if='successMessage']"));
exports.TypeManagementPO = TypeManagementPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZU1hbmFnZW1lbnRQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vYWRtaW5kYXNoYm9hcmRwYWdlL3R5cGVzYnVja2V0L1R5cGVNYW5hZ2VtZW50UE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0M7QUFDdEMsMkVBQXdFO0FBRXhFLE1BQWEsZ0JBQWdCO0lBTXpCLHFCQUFxQjtRQUNqQixPQUFPLElBQUksK0JBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUE7SUFDcEMsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLGdCQUFnQixDQUFDLG9CQUFvQixDQUFBO0lBQ2hELENBQUM7SUFJRCxtQkFBbUI7UUFDZixPQUFPLGdCQUFnQixDQUFDLGdCQUFnQixDQUFBO0lBQzVDLENBQUM7SUFRRCxpQkFBaUI7UUFDYixPQUFPLElBQUksK0JBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRUQsdUJBQXVCO1FBQ25CLE9BQU8sZ0JBQWdCLENBQUMsb0JBQW9CLENBQUE7SUFDaEQsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLGdCQUFnQixDQUFDLGlCQUFpQixDQUFBO0lBQzdDLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQTtJQUN4QyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQTtJQUNqRCxDQUFDOztBQTlDYyxtQ0FBa0IsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO0FBQzNELHlCQUFRLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDdEMscUNBQW9CLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtBQWMvRCxpQ0FBZ0IsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtBQU14RCwrQkFBYyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUE7QUFDM0QscUNBQW9CLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQTtBQUNoRSxrQ0FBaUIsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFBO0FBQzlELDZCQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQTtBQUM3RSxzQ0FBcUIsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFBO0FBNUJ4Riw0Q0FrREMifQ==