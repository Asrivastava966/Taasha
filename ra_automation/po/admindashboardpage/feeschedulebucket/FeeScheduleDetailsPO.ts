import { element, by } from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";
import { DatePicker } from "../../../component/comp/DatePicker";
import { CustomDropdownMenu } from "../../../component/comp/CustomDropdownMenu";
import { CustomDropdownMenuOrigin } from "../../../data/enums/CustomDropdownMenuOrigin";

export class FeeScheduleDetailsPO {
    private static adminDashboardButton = element(by.css('[class="btn btn-default pull-left"]'))
    private static addNewFeeScheduleDetailsButton = element(by.css('[ng-click="addFeeScheduleDetails()"]'))

    getAdminDashboardButton() {
        return FeeScheduleDetailsPO.adminDashboardButton
    }

    getAddNewFeeScheduleDetailsButton() {
        return FeeScheduleDetailsPO.addNewFeeScheduleDetailsButton
    }

    private static statusFilterSelectDropdown = element(by.model("initData.filter.statusCd"))
    private static feeScheduleFilterSelectDropdown = element(by.model("initData.filter.feeScheduleId"))
    private static hcpcsCodeFilterCustomDropdownMenu = element(by.model("CPTSearch"))
    private static priceTypeFilterDropdown = element(by.model("initData.filter.priceTypCd"))
    private static authorizationFilterSelectDropdown = element(by.model("initData.filter.authReqdFlg"))
    private static searchButton = element(by.css('[ng-click="search()"]'))

    getStatusFilterSelectDropdown() {
        return new SelectDropdown(FeeScheduleDetailsPO.statusFilterSelectDropdown)
    }
    getFeeScheduleFilterSelectDropdown() {
        return new SelectDropdown(FeeScheduleDetailsPO.feeScheduleFilterSelectDropdown)
    }
    getHCPCScodeFilterCustomDropdownMenu() {
        return new CustomDropdownMenu(FeeScheduleDetailsPO.hcpcsCodeFilterCustomDropdownMenu, CustomDropdownMenuOrigin.INPUT_FIELD)
    }
    getPriceTypeFilterDropdown() {
        return new SelectDropdown(FeeScheduleDetailsPO.priceTypeFilterDropdown)
    }
    getAuthorizationFilterSelectDropdown() {
        return new SelectDropdown(FeeScheduleDetailsPO.authorizationFilterSelectDropdown)
    }
    getSearchButton() {
        return FeeScheduleDetailsPO.searchButton
    }

    // Add New FeeSchedule Details GeneralInfo
    private static feeScheduleSelectDropdown = element(by.model("feeSchedule.payload.feeScheduleId"))
    private static hcpcsCodeAddCustomDropdownMenu = element(by.id("inputCPTAdd"))
    private static priceTypeSelectDropdown = element(by.model("feeSchedule.payload.priceTypCd"))
    private static bringDateInputField = element(by.model("feeSchedule.payload.beginDt"))
    private static endDateInputField = element(by.model("feeSchedule.payload.endDt"))
    private static authorizationSelectDropdown = element(by.model("feeSchedule.payload.authReqdFlg"))
    private static maxUnitInputField = element(by.model("feeSchedule.payload.maxUnit"))
    private static allowedFrequencySelectDropdown = element(by.model("feeSchedule.payload.allowedFreqCd"))
    private static billingPeriodSelectDropdown = element(by.model("feeSchedule.payload.billingPeriodCd"))
    private static intervalInputField = element(by.model("feeSchedule.payload.intervl"))
    private static taxableSelectDropdown = element(by.model("feeSchedule.payload.taxable"))
    private static submitButton = element(by.css('[ng-click="saveFeeScheduleDetails(feeScheduleDetailsForm.$valid)"]'))
    private static updateButton = element(by.css('[ng-click="updateFeeScheduleDetails(feeScheduleDetailsForm.$valid)"]'))

    getFeeScheduleSelectDropdown() {
        return new SelectDropdown(FeeScheduleDetailsPO.feeScheduleSelectDropdown)
    }
    getHCPCSCodeInputField() {
        return new CustomDropdownMenu(FeeScheduleDetailsPO.hcpcsCodeAddCustomDropdownMenu, CustomDropdownMenuOrigin.INPUT_FIELD)
    }
    getPriceTypeSelectDropdown() {
        return new SelectDropdown(FeeScheduleDetailsPO.priceTypeSelectDropdown)
    }
    getBringDateInputField() {
        return new DatePicker(FeeScheduleDetailsPO.bringDateInputField)
    }
    getEndDateInputField() {
        return new DatePicker(FeeScheduleDetailsPO.endDateInputField)
    }
    getAuthorizationSelectDropDown() {
        return new SelectDropdown(FeeScheduleDetailsPO.authorizationSelectDropdown)
    }
    getMaxUnitInputField() {
        return FeeScheduleDetailsPO.maxUnitInputField
    }
    getAllowedFrequencySelectDropdown() {
        return new SelectDropdown(FeeScheduleDetailsPO.allowedFrequencySelectDropdown)
    }
    getBillingPeriodSelectDropdown() {
        return new SelectDropdown(FeeScheduleDetailsPO.billingPeriodSelectDropdown)
    }
    getIntervalInputField() {
        return FeeScheduleDetailsPO.intervalInputField
    }
    getTaxableSelectDropdown() {
        return new SelectDropdown(FeeScheduleDetailsPO.taxableSelectDropdown)
    }
    getSubmitButton() {
        return FeeScheduleDetailsPO.submitButton
    }

    private static addNewFeeSchedulePeriodButton = element(by.css("[ng-click='newPeriod()']"))
    getAddNewFeeSchedulePeriodButton() {
        return FeeScheduleDetailsPO.addNewFeeSchedulePeriodButton
    }

    // Add New Fee Schedule Period
    private static chargeInputField = element(by.model("feeSchedulePeriod.charge"))
    private static allowInputField = element(by.model("feeSchedulePeriod.allowedAmt"))
    private static modifiers1SelectDropdown = element(by.model("feeSchedulePeriod.modTypeCd1"))
    private static modifiers2SelectDropdown = element(by.model("feeSchedulePeriod.modTypeCd2"))
    private static modifiers3SelectDropdown = element(by.model("feeSchedulePeriod.modTypeCd3"))
    private static modifiers4SelectDropdown = element(by.model("feeSchedulePeriod.modTypeCd4"))
    private static addButton = element(by.buttonText("Add"))
    private static cancelButton = element(by.buttonText("Cancel"))
    private static convertToPurchaseSelectDropdown = element(by.model("feeSchedulePeriod.convertToPurchase"))
    private static periodNameInputField = element(by.model("feeSchedulePeriod.periodNm"))
    private static beginPeriodInputField = element(by.model("feeSchedulePeriod.beginPeriod"))
    private static endPeriodInputField = element(by.model("feeSchedulePeriod.endPeriod"))

    getChargeInputField() {
        return FeeScheduleDetailsPO.chargeInputField
    }
    getAllowInputField() {
        return FeeScheduleDetailsPO.allowInputField
    }
    getModifiers1SelectDropDown() {
        return new SelectDropdown(FeeScheduleDetailsPO.modifiers1SelectDropdown)
    }
    getModifiers2SelectDropDown() {
        return new SelectDropdown(FeeScheduleDetailsPO.modifiers2SelectDropdown)
    }
    getModifiers3SelectDropDown() {
        return new SelectDropdown(FeeScheduleDetailsPO.modifiers3SelectDropdown)
    }
    getModifiers4SelectDropDown() {
        return new SelectDropdown(FeeScheduleDetailsPO.modifiers4SelectDropdown)
    }
    getAddButton() {
        return FeeScheduleDetailsPO.addButton
    }
    getCancelButton() {
        return FeeScheduleDetailsPO.cancelButton
    }
    getConvertToPurchaseSelectDropdown() {
        return new SelectDropdown(FeeScheduleDetailsPO.convertToPurchaseSelectDropdown)
    }
    getPeriodNameInputField() {
        return FeeScheduleDetailsPO.periodNameInputField
    }
    getBeginPeriodInputField() {
        return FeeScheduleDetailsPO.beginPeriodInputField
    }
    getEndPeriodInputField() {
        return FeeScheduleDetailsPO.endPeriodInputField
    }
    getUpdateButton() {
        return FeeScheduleDetailsPO.updateButton
    }
    
    private static successMessage=element(by.css("[ng-if='successMessage']"))
    private static duplicateValidationMessage=element(by.repeater("value in errArr"))

    getSuccessMessage(){
        return FeeScheduleDetailsPO.successMessage
    }
    getDuplicateValidationMessage(){
        return FeeScheduleDetailsPO.duplicateValidationMessage
    }
}