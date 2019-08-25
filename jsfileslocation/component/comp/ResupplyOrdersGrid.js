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
const BaseGrid_1 = require("../base/BaseGrid");
class ResupplyOrdersGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.patientNameColumnIndex = 1;
        this.resupplyOrderNumberColumnIndex = 2;
        this.assignedToColumnIndex = 3;
        this.numberOfContactsColumnIndex = 4;
        this.dateNeededColumnIndex = 5;
        this.daysOutstandingColumnIndex = 6;
        this.lastOrderDateColumnIndex = 7;
        this.orderOwnerColumnIndex = 8;
        this.complianceStatusColumnIndex = 9;
    }
    searchViaPatientNameFilter(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridHeaderCell(this.patientNameColumnIndex).element(protractor_1.by.className('ui-grid-filter-input')).sendKeys(patientName);
        });
    }
    getPatientNameColumnCell(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.patientNameColumnIndex);
    }
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientNameColumnCell(rowNumber).element(protractor_1.by.tagName('a')).getText();
        });
    }
    navigateToResuppliesContactInformationPage(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstRowIndex = 1;
            yield this.searchViaPatientNameFilter(patientName);
            yield this.getPatientNameColumnCell(firstRowIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
    getNumberOfContactsColumnCell(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.numberOfContactsColumnIndex);
    }
    getNumberOfContacts(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            let numberOfContacts = yield this.getNumberOfContactsColumnCell(rowNumber).element(protractor_1.by.tagName('a')).getText();
            return +numberOfContacts;
        });
    }
}
exports.ResupplyOrdersGrid = ResupplyOrdersGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbHlPcmRlcnNHcmlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9jb21wb25lbnQvY29tcC9SZXN1cHBseU9yZGVyc0dyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUMvQywrQ0FBNEM7QUFFNUMsTUFBYSxrQkFBbUIsU0FBUSxtQkFBUTtJQVk1QyxZQUFZLFdBQXlCO1FBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQVhmLDJCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQixtQ0FBOEIsR0FBRyxDQUFDLENBQUM7UUFDbkMsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLGdDQUEyQixHQUFHLENBQUMsQ0FBQztRQUNoQywwQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDMUIsK0JBQTBCLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLDZCQUF3QixHQUFHLENBQUMsQ0FBQztRQUM3QiwwQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDMUIsZ0NBQTJCLEdBQUcsQ0FBQyxDQUFDO0lBSXhDLENBQUM7SUFFSywwQkFBMEIsQ0FBQyxXQUFrQjs7WUFDL0MsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsSSxDQUFDO0tBQUE7SUFFRCx3QkFBd0IsQ0FBQyxTQUFnQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVLLGNBQWMsQ0FBQyxTQUFnQjs7WUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdGLENBQUM7S0FBQTtJQUVLLDBDQUEwQyxDQUFDLFdBQWtCOztZQUMvRCxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFFdEIsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkQsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4RixDQUFDO0tBQUE7SUFFRCw2QkFBNkIsQ0FBQyxTQUFnQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVLLG1CQUFtQixDQUFDLFNBQWdCOztZQUN0QyxJQUFJLGdCQUFnQixHQUFHLE1BQU0sSUFBSSxDQUFDLDZCQUE2QixDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLENBQUM7S0FBQTtDQUNKO0FBM0NELGdEQTJDQyJ9