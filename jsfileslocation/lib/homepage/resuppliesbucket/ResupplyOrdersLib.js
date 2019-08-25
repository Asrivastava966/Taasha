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
const ResupplyOrdersPO_1 = require("../../../po/homepage/resuppliesbucket/ResupplyOrdersPO");
const CommonUtils_1 = require("../../../utils/CommonUtils");
class ResupplyOrdersLib {
    constructor() {
        this.commonUtils = new CommonUtils_1.CommonUtils();
        this.resupplyOrdersPO = new ResupplyOrdersPO_1.ResupplyOrdersPO();
    }
    getCommonUtils() {
        return this.commonUtils;
    }
    getResupplyOrdersPO() {
        return this.resupplyOrdersPO;
    }
    navigateToResuppliesDashboard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCommonUtils().scrollIntoView(this.getResupplyOrdersPO().getCSSHeaderLogo());
            yield this.getResupplyOrdersPO().getResuppliesDashboardButton().click();
        });
    }
    filterResupplyOrdersViaPatientName(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCommonUtils().scrollIntoView(this.getResupplyOrdersPO().getCSSHeaderLogo());
            yield this.getResupplyOrdersPO().getFilterButton().click();
            yield this.getResupplyOrdersPO().getPatientNameFilterInputField().sendKeys(patientName);
            yield this.getResupplyOrdersPO().getSearchButton().click();
        });
    }
    navigateToResuppliesContactInformationPage(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstRowIndex = 1;
            yield this.filterResupplyOrdersViaPatientName(patientName);
            yield this.getResupplyOrdersPO().getResupplyOrdersGrid().getPatientNameColumnCell(firstRowIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
    navigateToResuppliesContactInformationPageViaRowNumber(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getResupplyOrdersPO().getResupplyOrdersGrid().getPatientNameColumnCell(rowNumber).element(protractor_1.by.tagName('a')).click();
        });
    }
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getResupplyOrdersPO().getResupplyOrdersGrid().getPatientName(rowNumber);
        });
    }
    getNumberOfPatientContactNotes(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getResupplyOrdersPO().getResupplyOrdersGrid().getNumberOfContacts(rowNumber);
        });
    }
}
exports.ResupplyOrdersLib = ResupplyOrdersLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbHlPcmRlcnNMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9ob21lcGFnZS9yZXN1cHBsaWVzYnVja2V0L1Jlc3VwcGx5T3JkZXJzTGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMsNkZBQTBGO0FBQzFGLDREQUF5RDtBQUV6RCxNQUFhLGlCQUFpQjtJQUkxQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQUVLLDZCQUE2Qjs7WUFDL0IsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUMxRixNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLDRCQUE0QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUUsQ0FBQztLQUFBO0lBRUssa0NBQWtDLENBQUMsV0FBa0I7O1lBQ3ZELE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFDMUYsTUFBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzRCxNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLDhCQUE4QixFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hGLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0QsQ0FBQztLQUFBO0lBRUssMENBQTBDLENBQUMsV0FBa0I7O1lBQy9ELElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztZQUV0QixNQUFNLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzRCxNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0SSxDQUFDO0tBQUE7SUFFSyxzREFBc0QsQ0FBQyxTQUFnQjs7WUFDekUsTUFBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEksQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLFNBQWdCOztZQUNqQyxPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUYsQ0FBQztLQUFBO0lBRUssOEJBQThCLENBQUMsU0FBZ0I7O1lBQ2pELE9BQU8sTUFBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25HLENBQUM7S0FBQTtDQUNKO0FBL0NELDhDQStDQyJ9