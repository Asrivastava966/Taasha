import { FeeScheduleDetailsPO } from "../../../po/admindashboardpage/feeschedulebucket/FeeScheduleDetailsPO"
import { FeeScheduleStatus } from "../../../data/enums/FeeScheduleStatus"
import { HCPCS_Code } from "../../../data/enums/HCPCS_Code"
import { FeeSchedulePriceType } from "../../../data/enums/FeeSchedulePriceType"
import { FeeScheduleAuthorization } from "../../../data/enums/FeeScheduleAuthorization";
import { FeeScheduleDetailsInfo } from "../../../data/info/FeeScheduleDetailsInfo";
import { FeeScheduleDetail_AllowedFrequency } from "../../../data/enums/FeeScheduleDetail_AllowedFrequency";
import { FeeScheduleDetail_BillingPeriod } from "../../../data/enums/FeeScheduleDetail_BillingPeriod";
import { FeeScheduleDetail_Taxable } from "../../../data/enums/FeeScheduleDetail_Taxable";
import { ConvertToPurchase } from "../../../data/enums/ConvertToPurchase"
import { Modifiers } from "../../../data/enums/Modifiers";
import { WaitUtils } from "../../../utils/WaitUtils";

export class FeeScheduleDetailsLib {
   private feeScheduleDetailsPO: FeeScheduleDetailsPO;
   private waitUtils: WaitUtils;

    constructor() {
        this.feeScheduleDetailsPO = new FeeScheduleDetailsPO();
        this.waitUtils = new WaitUtils();
    }

    getFeeScheduleDetailsPO() {
        return this.feeScheduleDetailsPO
    }

    // Set Search FeeScheduledetail Info
    async selectFeeScheduleDetailsStatusFilter(status: FeeScheduleStatus) {
        await this.getFeeScheduleDetailsPO().getStatusFilterSelectDropdown().selectOption(status)
    }
    async selectFeescheduleDetailsFeeScheduleFilter(feeSchedule: string) {
        await this.getFeeScheduleDetailsPO().getFeeScheduleFilterSelectDropdown().selectOption(feeSchedule)
    }
    async selectFeeScheduleDetailsHCPCSCodeFilter(hcpcsCode: HCPCS_Code) {
        await this.getFeeScheduleDetailsPO().getHCPCScodeFilterCustomDropdownMenu().selectDropdownMenuOptionByLinkText(hcpcsCode)
    }
    async selectFeeScheduleDetailsPriceTypeFilter(priceType: FeeSchedulePriceType) {
        await this.getFeeScheduleDetailsPO().getPriceTypeFilterDropdown().selectOption(priceType)
    }
    async selectFeeScheduledetailsAuthorizationFilter(authorization: FeeScheduleAuthorization) {
        await this.getFeeScheduleDetailsPO().getAuthorizationFilterSelectDropdown().selectOption(authorization)
    }
    // get the FeeScheduleDeatils search result
    async filterFeeScheduleDetails(searchFeeScheduleDetailsInfo: FeeScheduleDetailsInfo) {
        if (searchFeeScheduleDetailsInfo.getStatus() != null) {
            await this.selectFeeScheduleDetailsStatusFilter(searchFeeScheduleDetailsInfo.getStatus())
        }
        if (searchFeeScheduleDetailsInfo.getFeeSchedule() != null) {
            await this.selectFeescheduleDetailsFeeScheduleFilter(searchFeeScheduleDetailsInfo.getFeeSchedule())
        }
        if (searchFeeScheduleDetailsInfo.getHCPCS_Code() != null) {
            await this.selectFeeScheduleDetailsHCPCSCodeFilter(searchFeeScheduleDetailsInfo.getHCPCS_Code())
        }
        if (searchFeeScheduleDetailsInfo.getPriceType() != null) {
            await this.selectFeeScheduleDetailsPriceTypeFilter(searchFeeScheduleDetailsInfo.getPriceType())
        }
        if (searchFeeScheduleDetailsInfo.getAuthorization() != null) {
            await this.selectFeeScheduledetailsAuthorizationFilter(searchFeeScheduleDetailsInfo.getAuthorization())
        }
    }
    async search() {
        await this.getFeeScheduleDetailsPO().getSearchButton().click()
    }
    async navigateToAdminDashboard() {
        await this.getFeeScheduleDetailsPO().getAdminDashboardButton().click()
    }
    async navigateAddNewFeeScheduleDetailsForm() {
        await this.getFeeScheduleDetailsPO().getAddNewFeeScheduleDetailsButton().click()
    }
    //Edit/submit General Info
    async selectFeeSchedule(feesuchedule: string) {
        await this.getFeeScheduleDetailsPO().getFeeScheduleSelectDropdown().selectOption(feesuchedule)
    }
    async selectHCPCSCode(hcpcCode: HCPCS_Code) {
        await this.getFeeScheduleDetailsPO().getHCPCSCodeInputField().selectDropdownMenuOptionByLinkText(hcpcCode)
    }
    async selectPriceType(priceType: FeeSchedulePriceType) {
        await this.getFeeScheduleDetailsPO().getPriceTypeSelectDropdown().selectOption(priceType)
    }
    async selectBeginDate(date: Date) {
        let isDatePickerSmall = false;
        await this.getFeeScheduleDetailsPO().getBringDateInputField().selectDate(date, isDatePickerSmall)
    }
    async selectEndDate(date: Date) {
        let isDatePickerSmall = false;
        await this.getFeeScheduleDetailsPO().getEndDateInputField().selectDate(date, isDatePickerSmall)
    }
    async selectAuthorization(authorization: FeeScheduleAuthorization) {
        await this.getFeeScheduleDetailsPO().getAuthorizationSelectDropDown().selectOption(authorization)
    }
    async selectMaxUnit(maxUnit: number) {
        await this.getFeeScheduleDetailsPO().getMaxUnitInputField().sendKeys(maxUnit)
    }
    async selectAllowedFrequency(allowedFrequency: FeeScheduleDetail_AllowedFrequency) {
        await this.getFeeScheduleDetailsPO().getAllowedFrequencySelectDropdown().selectOption(allowedFrequency)
    }
    async selectBillingPeriod(billingPeriod: FeeScheduleDetail_BillingPeriod) {
        await this.getFeeScheduleDetailsPO().getBillingPeriodSelectDropdown().selectOption(billingPeriod)
    }
    async selectInterval(interval: string) {
        await this.getFeeScheduleDetailsPO().getIntervalInputField().sendKeys(interval)
    }
    async selectTaxable(taxable: FeeScheduleDetail_Taxable) {
        await this.getFeeScheduleDetailsPO().getTaxableSelectDropdown().selectOption(taxable)
    }
    // General Info information Field

    async addFeeScheduleDetailsGernalInfo(addFeeScheduledetailGeneralInfo: FeeScheduleDetailsInfo) {

        if (addFeeScheduledetailGeneralInfo.getFeeSchedule() != null) {
            await this.selectFeeSchedule(addFeeScheduledetailGeneralInfo.getFeeSchedule())
        }
        if (addFeeScheduledetailGeneralInfo.getHCPCS_Code() != null) {
            await this.selectHCPCSCode(addFeeScheduledetailGeneralInfo.getHCPCS_Code())
        }
        if (addFeeScheduledetailGeneralInfo.getPriceType() != null) {
            await this.selectPriceType(addFeeScheduledetailGeneralInfo.getPriceType())
        }
        if (addFeeScheduledetailGeneralInfo.getBegindate() != null) {
            await this.selectBeginDate(addFeeScheduledetailGeneralInfo.getBegindate())
        }
        if (addFeeScheduledetailGeneralInfo.getEndDate() != null) {
            await this.selectEndDate(addFeeScheduledetailGeneralInfo.getEndDate())
        }
        if (addFeeScheduledetailGeneralInfo.getAuthorization() != null) {
            await this.selectAuthorization(addFeeScheduledetailGeneralInfo.getAuthorization())
        }
        if (addFeeScheduledetailGeneralInfo.getMaxUnit() != null) {
            await this.selectMaxUnit(addFeeScheduledetailGeneralInfo.getMaxUnit())
        }
        if (addFeeScheduledetailGeneralInfo.getAllowedFrequency() != null) {
            await this.selectAllowedFrequency(addFeeScheduledetailGeneralInfo.getAllowedFrequency())
        }
        if (addFeeScheduledetailGeneralInfo.getBillingPeriod() != null) {
            await this.selectBillingPeriod(addFeeScheduledetailGeneralInfo.getBillingPeriod())
        }
        if (addFeeScheduledetailGeneralInfo.getInterval() != null) {
            await this.selectInterval(addFeeScheduledetailGeneralInfo.getInterval())
        }
        if (addFeeScheduledetailGeneralInfo.getTaxable() != null) {
            await this.selectTaxable(addFeeScheduledetailGeneralInfo.getTaxable())
        }
        await this.getFeeScheduleDetailsPO().getAddNewFeeSchedulePeriodButton().click()

        if (addFeeScheduledetailGeneralInfo.getConvertToPurchase() != null) {
            await this.selectConvertToPurchase(addFeeScheduledetailGeneralInfo.getConvertToPurchase())
        }
        if (addFeeScheduledetailGeneralInfo.getPeriodName() != null) {
            await this.selectPeriodName(addFeeScheduledetailGeneralInfo.getPeriodName())
        }
        if (addFeeScheduledetailGeneralInfo.getBeginPeriod() != null) {
            await this.selectBeginPeriod(addFeeScheduledetailGeneralInfo.getBeginPeriod())
        }
        if (addFeeScheduledetailGeneralInfo.getEndPeriod() != null) {
            await this.selectEndPeriod(addFeeScheduledetailGeneralInfo.getEndPeriod())
        }
        if (addFeeScheduledetailGeneralInfo.getCharge() != null) {
            await this.selectCharge(addFeeScheduledetailGeneralInfo.getCharge())
        }
        if (addFeeScheduledetailGeneralInfo.getAllow() != null) {
            await this.selectCharge(addFeeScheduledetailGeneralInfo.getAllow())
        }
        if (addFeeScheduledetailGeneralInfo.getModifiers() != null) {
            await this.selectMofifiers1(addFeeScheduledetailGeneralInfo.getModifiers())
        }
        if (addFeeScheduledetailGeneralInfo.getModifiers() != null) {
            await this.selectModifiers2(addFeeScheduledetailGeneralInfo.getModifiers())
        }
        if (addFeeScheduledetailGeneralInfo.getModifiers() != null) {
            await this.selectModifiers3(addFeeScheduledetailGeneralInfo.getModifiers())
        }
        if (addFeeScheduledetailGeneralInfo.getModifiers() != null) {
            await this.selectModifiers4(addFeeScheduledetailGeneralInfo.getModifiers())
        }
        await this.addButton()
        await this.submitButton()
    }


    // Add New FeeSchedule Period
    async selectCharge(charge: number) {
        await this.getFeeScheduleDetailsPO().getChargeInputField().sendKeys(charge)
    }
    async selectAllow(allow: number) {
        await this.getFeeScheduleDetailsPO().getAllowInputField().sendKeys(allow)
    }
    async navigateAddNewFeeSchedulePeriodForm() {
        await this.getFeeScheduleDetailsPO().getAddNewFeeSchedulePeriodButton().click()
    }
    async selectConvertToPurchase(convert: ConvertToPurchase) {
        await this.getFeeScheduleDetailsPO().getConvertToPurchaseSelectDropdown().selectOption(convert)
    }
    async selectPeriodName(value: string) {
        await this.getFeeScheduleDetailsPO().getPeriodNameInputField().sendKeys(value)
    }
    async selectBeginPeriod(value: number) {
        await this.getFeeScheduleDetailsPO().getBeginPeriodInputField().sendKeys(value)
    }
    async selectEndPeriod(value: number) {
        await this.getFeeScheduleDetailsPO().getEndPeriodInputField().sendKeys(value)
    }
    async selectMofifiers1(value: Modifiers) {
        await this.getFeeScheduleDetailsPO().getModifiers1SelectDropDown().selectOption(value)
    }
    async selectModifiers2(value: Modifiers) {
        await this.getFeeScheduleDetailsPO().getModifiers2SelectDropDown().selectOption(value)
    }
    async selectModifiers3(value: Modifiers) {
        await this.getFeeScheduleDetailsPO().getModifiers3SelectDropDown().selectOption(value)
    }
    async selectModifiers4(value: Modifiers) {
        await this.getFeeScheduleDetailsPO().getModifiers4SelectDropDown().selectOption(value)
    }

    // addNewFeeSchedulePeriod Submit/Cancel//Update Button 

    async addButton() {
        await this.getFeeScheduleDetailsPO().getAddButton().click()
    }
    async cancelButton() {
        await this.getFeeScheduleDetailsPO().getCancelButton().click()
    }
    async submitButton() {
        await this.getFeeScheduleDetailsPO().getSubmitButton().click()
    }
    async updateButton() {
        await this.getFeeScheduleDetailsPO().getUpdateButton().click()
    }
    async successMessageText(){
        return await this.getFeeScheduleDetailsPO().getSuccessMessage().getText()
    }
    async successMessagePresent(){
        return await this.getFeeScheduleDetailsPO().getSuccessMessage().isPresent()
    }
    async duplicatedMessagePresent(){
        return await this.getFeeScheduleDetailsPO().getDuplicateValidationMessage().isPresent()
    }
    async duplicateMessageText(){
        return await this.getFeeScheduleDetailsPO().getDuplicateValidationMessage().getText()
    }
}