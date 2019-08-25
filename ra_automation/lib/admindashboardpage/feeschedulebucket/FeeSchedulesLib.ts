import { element, by } from "protractor";
import { FeeSchedulesPO } from "../../../po/admindashboardpage/feeschedulebucket/FeeSchedulesPO"
import { FeeScheduleStatus } from "../../../data/enums/FeeScheduleStatus"
import { FeeSchedulesType } from "../../../data/enums/FeeSchedulesType"
import { FeeScheduleInfo } from "../../../data/info/FeeScheduleInfo"

export class FeeSchedulesLib {
    private feeSchedulesPO: FeeSchedulesPO

    constructor() {
        this.feeSchedulesPO = new FeeSchedulesPO()
    }

    getFeeSchedulesPO() {
        return this.feeSchedulesPO
    }

    async selectFeeSchedulesTypeFilter(typeFilter: FeeSchedulesType) {
        await this.getFeeSchedulesPO().getTypeFilterSelectDropdown().selectOption(typeFilter)
    }

    async selectFeeSchedulesStatusFilter(status: FeeScheduleStatus) {
        await this.getFeeSchedulesPO().getStatusFilterSelectDropdown().selectOption(status)
    }

    async fillFeeSchedulesDescriptionFilter(description: string) {
        await this.getFeeSchedulesPO().getDescriptionFilterInputField().sendKeys(description)
    }

    async search() {
        await this.getFeeSchedulesPO().getSearchButton().isEnabled()
        await this.getFeeSchedulesPO().getSearchButton().click()
    }

    async filterFeeSchedules(feeScheduleInfo: FeeScheduleInfo) {
        if (feeScheduleInfo.getDescription() != null) {
            await this.fillFeeSchedulesDescriptionFilter(feeScheduleInfo.getDescription());
        }

        if (feeScheduleInfo.getType() != null) {
            await this.selectFeeSchedulesTypeFilter(feeScheduleInfo.getType());
        }

        if (feeScheduleInfo.getStatus() != null) {
            await this.selectFeeSchedulesStatusFilter(feeScheduleInfo.getStatus());
        }
    }

    //Add New Fee Schedule
    async navigateToAddNewFeeSchedulesForm() {
        await this.getFeeSchedulesPO().getAddNewFeeScheduleButton().click()
    }

    async navigateBackToFeeSchedulesPage() {
        await this.getFeeSchedulesPO().getBackToFeeScheduleButton().click()
    }

    async fillDescription(description: string) {
        await this.getFeeSchedulesPO().getDescriptionInputField().sendKeys(description)
    }

    async selectType(type: FeeSchedulesType) {
        await this.getFeeSchedulesPO().getTypeSelectDropdown().selectOption(type)
    }

    async selectStatus(status: FeeScheduleStatus) {
        await this.getFeeSchedulesPO().getStatusSelectDropdown().selectOption(status)
    }

    async fillComments(message: string) {
        await this.getFeeSchedulesPO().getCommentsTextarea().sendKeys(message)
    }

    async feeSchedule_AddNewFeeScheduleInfo(feeScheduleInfo: FeeScheduleInfo) {

        if (feeScheduleInfo.getDescription() != null) {
            await this.fillDescription(feeScheduleInfo.getDescription())
        }

        if (feeScheduleInfo.getType() != null) {
            await this.selectType(feeScheduleInfo.getType())
        }

        if (feeScheduleInfo.getStatus() != null) {
            await this.selectStatus(feeScheduleInfo.getStatus())
        }

        if (feeScheduleInfo.getComment() != null) {
            await this.fillComments(feeScheduleInfo.getComment())
        }
    }

    async submit() {
        await this.getFeeSchedulesPO().getSubmitButton().click()
    }
    async update() {
        await this.getFeeSchedulesPO().getUpdateButton().click()
    }
    async addNewFeeschedulesValidateSuccessMessageText() {
        return await this.getFeeSchedulesPO().getFeeSchedulesSuccessMessage().getText()
    }

    //Method to click Action button on given description
    async clickOnActionGrid(description) {
        await element(by.xpath("(//div[@class='ui-grid-canvas'])[2]")).all(by.repeater("(rowRenderIndex, row) in rowContainer.renderedRows track by $index")).each(function(item) {
            item.element(by.css("div:nth-child(2)")).getText().then(function(readText) {
                if (readText === description) {
                    item.element(by.css("div:nth-child(6)")).click()
                }
            })
        })
    }
}