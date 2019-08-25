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
class OrdersGrid extends BaseGrid_1.BaseGrid {
    constructor() {
        super(...arguments);
        this.patientNameColumnIndex = 1;
        this.orderNumberColumnIndex = 2;
        this.orderTypeColumnIndex = 3;
    }
    getGridContainer() {
        return this.getGridContentsWrapper().all(protractor_1.by.css('[role=\"grid\"]')).get(1);
    }
    getPatientNameHeaderCell() {
        return this.getGridHeaderCells().get((this.patientNameColumnIndex - 1));
    }
    getPatientNameFilter() {
        return this.getPatientNameHeaderCell().element(protractor_1.by.className('ui-grid-filter-input'));
    }
    searchViaPatientNameFilter(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientNameFilter().clear();
            yield this.getPatientNameFilter().sendKeys(patientName);
        });
    }
    getPatientNameLink(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.patientNameColumnIndex).element(protractor_1.by.tagName('a'));
    }
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientNameLink(rowNumber).getText();
        });
    }
    getOrderType(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.orderTypeColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents'));
    }
}
exports.OrdersGrid = OrdersGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJzR3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvT3JkZXJzR3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWdDO0FBQ2hDLCtDQUE0QztBQUU1QyxNQUFhLFVBQVcsU0FBUSxtQkFBUTtJQUF4Qzs7UUFFWSwyQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDM0IsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztJQThCckMsQ0FBQztJQTVCRyxnQkFBZ0I7UUFDWixPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVPLHdCQUF3QjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTyxvQkFBb0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVLLDBCQUEwQixDQUFDLFdBQWtCOztZQUMvQyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFDLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVELENBQUM7S0FBQTtJQUVELGtCQUFrQixDQUFDLFNBQWdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFSyxjQUFjLENBQUMsU0FBZ0I7O1lBQ2pDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUQsQ0FBQztLQUFBO0lBRUQsWUFBWSxDQUFDLFNBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDeEgsQ0FBQztDQUNKO0FBbENELGdDQWtDQyJ9