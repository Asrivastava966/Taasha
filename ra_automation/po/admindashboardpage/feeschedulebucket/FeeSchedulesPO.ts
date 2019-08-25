import { element, by } from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";

export class FeeSchedulesPO {
    private static adminDashboardButton = element(by.buttonText('Admin Dashboard'));
    private static addNewFeeScheduleButton = element(by.buttonText('Add New Fee Schedule'))

    getAdminDashboardButton() {
        return FeeSchedulesPO.adminDashboardButton;
    }

    getAddNewFeeScheduleButton() {
        return FeeSchedulesPO.addNewFeeScheduleButton
    }

    //Fee Schedules Filter
    private static descriptionFilterInputField = element(by.model("initData.filter.name"))
    private static typeFilterSelectDropdown = element(by.model("initData.filter.typeCd"))
    private static statusFilterSelectDropdown = element(by.model("initData.filter.statusCd"))
    private static searchButton = element(by.css("[ng-click='search()']"))

    getDescriptionFilterInputField() {
        return FeeSchedulesPO.descriptionFilterInputField
    }

    getTypeFilterSelectDropdown() {
        return new SelectDropdown(FeeSchedulesPO.typeFilterSelectDropdown)
    }

    getStatusFilterSelectDropdown() {
        return new SelectDropdown(FeeSchedulesPO.statusFilterSelectDropdown)
    }

    getSearchButton() {
        return FeeSchedulesPO.searchButton
    }

    //Add New Fee Schedule Fields 
    private static backToFeeScheduleButton = element(by.css('[ng-click="backtoFeeSchedule()"]'))
    getBackToFeeScheduleButton() {
        return FeeSchedulesPO.backToFeeScheduleButton
    }

    private static feeSchedulesSuccessMessage = element(by.css('[ng-if="successMessage"]'))
    getFeeSchedulesSuccessMessage() {
        return FeeSchedulesPO.feeSchedulesSuccessMessage
    }

    private static descriptionInputField = element(by.model("addFeeSchedule.payload.description"))
    private static typeSelectDropdown = element(by.model("addFeeSchedule.payload.typeCd"))
    private static statusSelectDropdown = element(by.model("addFeeSchedule.payload.statusCd"))
    private static commentsTextarea = element(by.model("addFeeSchedule.payload.comments"))
    private static submitButton = element(by.buttonText("Submit"))
    private static updateButton= element(by.buttonText("Update"))

    getDescriptionInputField() {
        return FeeSchedulesPO.descriptionInputField
    }

    getTypeSelectDropdown() {
        return new SelectDropdown(FeeSchedulesPO.typeSelectDropdown)
    }

    getStatusSelectDropdown() {
        return new SelectDropdown(FeeSchedulesPO.statusSelectDropdown)
    }

    getCommentsTextarea() {
        return FeeSchedulesPO.commentsTextarea
    }

    getSubmitButton() {
        return FeeSchedulesPO.submitButton
    }

    getUpdateButton(){
        return FeeSchedulesPO.updateButton
    }
}