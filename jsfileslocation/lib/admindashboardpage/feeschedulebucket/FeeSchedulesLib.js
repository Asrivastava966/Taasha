"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const FeeSchedulesPO_1 = require("../../../po/admindashboardpage/feeschedulebucket/FeeSchedulesPO");
class FeeSchedulesLib {
    constructor() {
        this.feeSchedulesPO = new FeeSchedulesPO_1.FeeSchedulesPO();
    }
    getFeeSchedulesPO() {
        return this.feeSchedulesPO;
    }
    selectFeeSchedulesTypeFilter(typeFilter) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getTypeFilterSelectDropdown().selectOption(typeFilter);
        });
    }
    selectFeeSchedulesStatusFilter(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getStatusFilterSelectDropdown().selectOption(status);
        });
    }
    fillFeeSchedulesDescriptionFilter(description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getDescriptionFilterInputField().sendKeys(description);
        });
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getSearchButton().isEnabled();
            yield this.getFeeSchedulesPO().getSearchButton().click();
        });
    }
    filterFeeSchedules(feeScheduleInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (feeScheduleInfo.getDescription() != null) {
                yield this.fillFeeSchedulesDescriptionFilter(feeScheduleInfo.getDescription());
            }
            if (feeScheduleInfo.getType() != null) {
                yield this.selectFeeSchedulesTypeFilter(feeScheduleInfo.getType());
            }
            if (feeScheduleInfo.getStatus() != null) {
                yield this.selectFeeSchedulesStatusFilter(feeScheduleInfo.getStatus());
            }
        });
    }
    //Add New Fee Schedule
    navigateToAddNewFeeSchedulesForm() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getAddNewFeeScheduleButton().click();
        });
    }
    navigateBackToFeeSchedulesPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getBackToFeeScheduleButton().click();
        });
    }
    fillDescription(description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getDescriptionInputField().sendKeys(description);
        });
    }
    selectType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getTypeSelectDropdown().selectOption(type);
        });
    }
    selectStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getStatusSelectDropdown().selectOption(status);
        });
    }
    fillComments(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getCommentsTextarea().sendKeys(message);
        });
    }
    feeSchedule_AddNewFeeScheduleInfo(feeScheduleInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (feeScheduleInfo.getDescription() != null) {
                yield this.fillDescription(feeScheduleInfo.getDescription());
            }
            if (feeScheduleInfo.getType() != null) {
                yield this.selectType(feeScheduleInfo.getType());
            }
            if (feeScheduleInfo.getStatus() != null) {
                yield this.selectStatus(feeScheduleInfo.getStatus());
            }
            if (feeScheduleInfo.getComment() != null) {
                yield this.fillComments(feeScheduleInfo.getComment());
            }
        });
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getSubmitButton().click();
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeSchedulesPO().getUpdateButton().click();
        });
    }
    addNewFeeschedulesValidateSuccessMessageText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getFeeSchedulesPO().getFeeSchedulesSuccessMessage().getText();
        });
    }
    //Method to click Action button on given description
    clickOnActionGrid(description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath("(//div[@class='ui-grid-canvas'])[2]")).all(protractor_1.by.repeater("(rowRenderIndex, row) in rowContainer.renderedRows track by $index")).each(function (item) {
                item.element(protractor_1.by.css("div:nth-child(2)")).getText().then(function (readText) {
                    if (readText === description) {
                        item.element(protractor_1.by.css("div:nth-child(6)")).click();
                    }
                });
            });
        });
    }
}
exports.FeeSchedulesLib = FeeSchedulesLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlU2NoZWR1bGVzTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvYWRtaW5kYXNoYm9hcmRwYWdlL2ZlZXNjaGVkdWxlYnVja2V0L0ZlZVNjaGVkdWxlc0xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLG9HQUFnRztBQUtoRyxNQUFhLGVBQWU7SUFHeEI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFBO0lBQzlDLENBQUM7SUFFRCxpQkFBaUI7UUFDYixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDOUIsQ0FBQztJQUVLLDRCQUE0QixDQUFDLFVBQTRCOztZQUMzRCxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLDJCQUEyQixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3pGLENBQUM7S0FBQTtJQUVLLDhCQUE4QixDQUFDLE1BQXlCOztZQUMxRCxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLDZCQUE2QixFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3ZGLENBQUM7S0FBQTtJQUVLLGlDQUFpQyxDQUFDLFdBQW1COztZQUN2RCxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLDhCQUE4QixFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pGLENBQUM7S0FBQTtJQUVLLE1BQU07O1lBQ1IsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUM1RCxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzVELENBQUM7S0FBQTtJQUVLLGtCQUFrQixDQUFDLGVBQWdDOztZQUNyRCxJ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