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
class BaseGrid {
    constructor(gridElement) {
        this.gridElement = gridElement;
    }
    getGrid() {
        return this.gridElement;
    }
    getGridContentsWrapper() {
        return this.getGrid().element(protractor_1.by.className('ui-grid-contents-wrapper'));
    }
    getGridContainer() {
        return this.getGridContentsWrapper().element(protractor_1.by.css('[role=\"grid\"]'));
    }
    //grid-header
    getGridHeader() {
        return this.getGridContainer().element(protractor_1.by.className('ui-grid-header'));
    }
    getGridHeaderCellRow() {
        return this.getGridHeader().element(protractor_1.by.className('ui-grid-header-cell-row'));
    }
    getGridHeaderCells() {
        return this.getGridHeaderCellRow().all(protractor_1.by.className('ui-grid-header-cell'));
    }
    getGridHeaderCellCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridHeaderCells().count();
        });
    }
    getGridHeaderCell(columnNumber) {
        return this.getGridHeaderCells().get(--columnNumber);
    }
    //grid-body
    getGridBody() {
        return this.getGridContainer().element(protractor_1.by.className('ui-grid-viewport'));
    }
    getGridBodyRows() {
        return this.getGridBody().all(protractor_1.by.className('ui-grid-row'));
    }
    getGridBodyRowCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRows().count();
        });
    }
    /**
     *
     * @param rowNumber starts at 1
     */
    getGridBodyRow(rowNumber) {
        return this.getGridBodyRows().get(--rowNumber);
    }
    /**
     *
     * @param rowNumber starts at 1
     */
    getGridBodyRowCells(rowNumber) {
        return this.getGridBodyRow(rowNumber).all(protractor_1.by.className('ui-grid-cell'));
    }
    /**
     *
     * @param rowNumber starts at 1
     * @param columnNumber starts at 1
     */
    getGridBodyRowCell(rowNumber, columnNumber) {
        return this.getGridBodyRowCells(rowNumber).get(--columnNumber);
    }
    //grid-footer
    getGridFooter() {
        return this.getGridContentsWrapper().element(protractor_1.by.className('ui-grid-footer-info'));
    }
    getTotalItemsCountElement() {
        return this.getGridFooter().element(protractor_1.by.tagName('span'));
    }
    getTotalItemsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            let totalItemsCount;
            let totalItemsCountString;
            totalItemsCountString = yield this.getTotalItemsCountElement().getText();
            totalItemsCount = totalItemsCountString.split(": ")[1];
            return +totalItemsCount;
        });
    }
}
exports.BaseGrid = BaseGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUdyaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2NvbXBvbmVudC9iYXNlL0Jhc2VHcmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0M7QUFFL0MsTUFBYSxRQUFRO0lBR2pCLFlBQVksV0FBeUI7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVTLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVTLHNCQUFzQjtRQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVTLGdCQUFnQjtRQUN0QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsYUFBYTtJQUNILGFBQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVTLG9CQUFvQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVTLGtCQUFrQjtRQUN4QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRWUsc0JBQXNCOztZQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkQsQ0FBQztLQUFBO0lBRVMsaUJBQWlCLENBQUMsWUFBbUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsV0FBVztJQUNELFdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVTLGVBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRWUsbUJBQW1COztZQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNPLGNBQWMsQ0FBQyxTQUFnQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sbUJBQW1CLENBQUMsU0FBZ0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxrQkFBa0IsQ0FBQyxTQUFnQixFQUFFLFlBQW1CO1FBQzlELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTyx5QkFBeUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUssa0JBQWtCOztZQUNwQixJQUFJLGVBQXNCLENBQUM7WUFDM0IsSUFBSSxxQkFBNEIsQ0FBQztZQUVqQyxxQkFBcUIsR0FBRyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pFLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdkQsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUM1QixDQUFDO0tBQUE7Q0FDSjtBQWhHRCw0QkFnR0MifQ==