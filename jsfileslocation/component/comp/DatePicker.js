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
const DatePickerPO_1 = require("../po/DatePickerPO");
const WaitUtils_1 = require("../../utils/WaitUtils");
class DatePicker {
    constructor(datePickerInputElement) {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.datePickerPO = new DatePickerPO_1.DatePickerPO(datePickerInputElement);
    }
    getWaitUtils() {
        return this.waitUtils;
    }
    getDatePickerPO() {
        return this.datePickerPO;
    }
    selectYear(defaultDatePickerYear, year, isDatePickerSmall) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDatePickerPO().getCalendarToggleButton().click();
            if (year < defaultDatePickerYear) {
                yield this.getDatePickerPO().getCalendarToggleButton().click();
                if (isDatePickerSmall) {
                    if (year < 2000) {
                        yield this.getDatePickerPO().getPreviousButton().click();
                    }
                    let yearString = year.toString();
                    year = +yearString.substring(2, 4);
                }
                for (let i = 0; i < 5; i++) {
                    let firstCellIndex = 1;
                    let firstCellValueString = yield this.getDatePickerPO().getCalendarTableCellValueElements().get(--firstCellIndex).getText();
                    let firstCellValue = +firstCellValueString;
                    if (year < firstCellValue) {
                        yield this.getDatePickerPO().getPreviousButton().click();
                    }
                    else {
                        break;
                    }
                }
                let totalCellCount = 20;
                for (let i = 0; i < totalCellCount; i++) {
                    let cellValueString = yield this.getDatePickerPO().getCalendarTableCellValueElements().get(i).getText();
                    let cellValue = +cellValueString;
                    if (year == cellValue) {
                        yield this.getDatePickerPO().getCalendarTableCells().get(i).click();
                        break;
                    }
                }
            }
            else if (year > defaultDatePickerYear) {
                yield this.getDatePickerPO().getCalendarToggleButton().click();
                for (let i = 0; i < 5; i++) {
                    let lastCellIndex = 20;
                    let lastCellValueString = yield this.getDatePickerPO().getCalendarTableCellValueElements().get(--lastCellIndex).getText();
                    let lastCellValue = +lastCellValueString;
                    if (year > lastCellValue) {
                        yield this.getDatePickerPO().getNextButton().click();
                    }
                    else {
                        break;
                    }
                }
                let totalCellCount = 20;
                for (let i = 0; i < totalCellCount; i++) {
                    let cellValueString = yield this.getDatePickerPO().getCalendarTableCellValueElements().get(i).getText();
                    let cellValue = +cellValueString;
                    if (year == cellValue) {
                        yield this.getDatePickerPO().getCalendarTableCells().get(i).click();
                        break;
                    }
                }
            }
        });
    }
    selectMonth(month) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDatePickerPO().getCalendarTableCells().get(month).click();
        });
    }
    selectDateOfTheMonth(date) {
        return __awaiter(this, void 0, void 0, function* () {
            let totalCellCount = 42;
            let classAttributeValue;
            let calendarCellElements = this.getDatePickerPO().getCalendarTableCells();
            let calendarCellValueElements = this.getDatePickerPO().getCalendarTableCellValueElements();
            for (let i = 0; i < totalCellCount; i++) {
                classAttributeValue = yield calendarCellValueElements.get(i).getAttribute('class');
                if (classAttributeValue.includes('text-muted')) {
                }
                else {
                    let cellValueString = yield calendarCellValueElements.get(i).getText();
                    let cellValue = +cellValueString;
                    if (date == cellValue) {
                        yield calendarCellElements.get(i).click();
                        break;
                    }
                }
            }
        });
    }
    selectDate(dateObject, isDatePickerSmall) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getWaitUtils().waitForElementToBeClickable(this.getDatePickerPO().getDatePickerButton());
            yield this.getDatePickerPO().getDatePickerButton().click();
            let datePickerToggleElementText = yield this.getDatePickerPO().getCalendarToggleButton().getText();
            let datePickerToggleElementTextArray = datePickerToggleElementText.split(" ");
            let defaultDatePickerYear = +datePickerToggleElementTextArray[1];
            yield this.selectYear(defaultDatePickerYear, dateObject.getFullYear(), isDatePickerSmall);
            yield this.selectMonth(dateObject.getMonth());
            yield this.selectDateOfTheMonth(dateObject.getDate());
        });
    }
    selectToday() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getWaitUtils().waitForElementToBeClickable(this.getDatePickerPO().getDatePickerButton());
            yield this.getDatePickerPO().getDatePickerButton().click();
            yield this.getDatePickerPO().getTodayButton().click();
        });
    }
}
exports.DatePicker = DatePicker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvRGF0ZVBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscURBQWtEO0FBQ2xELHFEQUFrRDtBQUVsRCxNQUFhLFVBQVU7SUFJbkIsWUFBWSxzQkFBb0M7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFSyxVQUFVLENBQUMscUJBQTRCLEVBQUUsSUFBVyxFQUFFLGlCQUEwQjs7WUFDbEYsTUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUUvRCxJQUFHLElBQUksR0FBRyxxQkFBcUIsRUFBRTtnQkFDN0IsTUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDL0QsSUFBRyxpQkFBaUIsRUFBRTtvQkFDbEIsSUFBRyxJQUFJLEdBQUcsSUFBSSxFQUFFO3dCQUNaLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQzVEO29CQUVELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDakMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3RDO2dCQUVE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