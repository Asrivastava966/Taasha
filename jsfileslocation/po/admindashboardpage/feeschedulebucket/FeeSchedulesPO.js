"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
class FeeSchedulesPO {
    getAdminDashboardButton() {
        return FeeSchedulesPO.adminDashboardButton;
    }
    getAddNewFeeScheduleButton() {
        return FeeSchedulesPO.addNewFeeScheduleButton;
    }
    getDescriptionFilterInputField() {
        return FeeSchedulesPO.descriptionFilterInputField;
    }
    getTypeFilterSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(FeeSchedulesPO.typeFilterSelectDropdown);
    }
    getStatusFilterSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(FeeSchedulesPO.statusFilterSelectDropdown);
    }
    getSearchButton() {
        return FeeSchedulesPO.searchButton;
    }
    getBackToFeeScheduleButton() {
        return FeeSchedulesPO.backToFeeScheduleButton;
    }
    getFeeSchedulesSuccessMessage() {
        return FeeSchedulesPO.feeSchedulesSuccessMessage;
    }
    getDescriptionInputField() {
        return FeeSchedulesPO.descriptionInputField;
    }
    getTypeSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(FeeSchedulesPO.typeSelectDropdown);
    }
    getStatusSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(FeeSchedulesPO.statusSelectDropdown);
    }
    getCommentsTextarea() {
        return FeeSchedulesPO.commentsTextarea;
    }
    getSubmitButton() {
        return FeeSchedulesPO.submitButton;
    }
    getUpdateButton() {
        return FeeSchedulesPO.updateButton;
    }
}
FeeSchedulesPO.adminDashboardButton = protractor_1.element(protractor_1.by.buttonText('Admin Dashboard'));
FeeSchedulesPO.addNewFeeScheduleButton = protractor_1.element(protractor_1.by.buttonText('Add New Fee Schedule'));
//Fee Schedules Filter
FeeSchedulesPO.descriptionFilterInputField = protractor_1.element(protractor_1.by.model("initData.filter.name"));
FeeSchedulesPO.typeFilterSelectDropdown = protractor_1.element(protractor_1.by.model("initData.filter.typeCd"));
FeeSchedulesPO.statusFilterSelectDropdown = protractor_1.element(protractor_1.by.model("initData.filter.statusCd"));
FeeSchedulesPO.searchButton = protractor_1.element(protractor_1.by.css("[ng-click='search()']"));
//Add New Fee Schedule Fields 
FeeSchedulesPO.backToFeeScheduleButton = protractor_1.element(protractor_1.by.css('[ng-click="backtoFeeSchedule()"]'));
FeeSchedulesPO.feeSchedulesSuccessMessage = protractor_1.element(protractor_1.by.css('[ng-if="successMessage"]'));
FeeSchedulesPO.descriptionInputField = protractor_1.element(protractor_1.by.model("addFeeSchedule.payload.description"));
FeeSchedulesPO.typeSelectDropdown = protractor_1.element(protractor_1.by.model("addFeeSchedule.payload.typeCd"));
FeeSchedulesPO.statusSelectDropdown = protractor_1.element(protractor_1.by.model("addFeeSchedule.payload.statusCd"));
FeeSchedulesPO.commentsTextarea = protractor_1.element(protractor_1.by.model("addFeeSchedule.payload.comments"));
FeeSchedulesPO.submitButton = protractor_1.element(protractor_1.by.buttonText("Submit"));
FeeSchedulesPO.updateButton = protractor_1.element(protractor_1.by.buttonText("Update"));
exports.FeeSchedulesPO = FeeSchedulesPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlU2NoZWR1bGVzUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL2FkbWluZGFzaGJvYXJkcGFnZS9mZWVzY2hlZHVsZWJ1Y2tldC9GZWVTY2hlZHVsZXNQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QywyRUFBd0U7QUFFeEUsTUFBYSxjQUFjO0lBSXZCLHVCQUF1QjtRQUNuQixPQUFPLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMvQyxDQUFDO0lBRUQsMEJBQTBCO1FBQ3RCLE9BQU8sY0FBYyxDQUFDLHVCQUF1QixDQUFBO0lBQ2pELENBQUM7SUFRRCw4QkFBOEI7UUFDMUIsT0FBTyxjQUFjLENBQUMsMkJBQTJCLENBQUE7SUFDckQsQ0FBQztJQUVELDJCQUEyQjtRQUN2QixPQUFPLElBQUksK0JBQWMsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0lBRUQsNkJBQTZCO1FBQ3pCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQ3hFLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFBO0lBQ3RDLENBQUM7SUFJRCwwQkFBMEI7UUFDdEIsT0FBTyxjQUFjLENBQUMsdUJBQXVCLENBQUE7SUFDakQsQ0FBQztJQUdELDZCQUE2QjtRQUN6QixPQUFPLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQTtJQUNwRCxDQUFDO0lBU0Qsd0JBQXdCO1FBQ3BCLE9BQU8sY0FBYyxDQUFDLHFCQUFxQixDQUFBO0lBQy9DLENBQUM7SUFFRCxxQkFBcUI7UUFDakIsT0FBTyxJQUFJLCtCQUFjLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLElBQUksK0JBQWMsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxjQUFjLENBQUMsZ0JBQWdCLENBQUE7SUFDMUMsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUE7SUFDdEMsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUE7SUFDdEMsQ0FBQzs7QUF6RWMsbUNBQW9CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUNqRSxzQ0FBdUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFBO0FBVXZGLHNCQUFzQjtBQUNQLDBDQUEyQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7QUFDdkUsdUNBQXdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtBQUN0RSx5Q0FBMEIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFBO0FBQzFFLDJCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQTtBQWtCdEUsOEJBQThCO0FBQ2Ysc0NBQXVCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQTtBQUs3RSx5Q0FBMEIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFBO0FBS3hFLG9DQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUE7QUFDL0UsaUNBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQTtBQUN2RSxtQ0FBb0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFBO0FBQzNFLCtCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUE7QUFDdkUsMkJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtBQUMvQywyQkFBWSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0FBbERqRSx3Q0EyRUMifQ==