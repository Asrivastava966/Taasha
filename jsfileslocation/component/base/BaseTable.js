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
class BaseTable {
    constructor(tblElement) {
        this.tableElement = tblElement;
    }
    getTable() {
        return this.tableElement;
    }
    getTableHeader() {
        return this.getTable().element(protractor_1.by.tagName('thead'));
    }
    getTableBody() {
        return this.getTable().element(protractor_1.by.tagName('tbody'));
    }
    getTableHeaderColumns() {
        return this.getTableHeader().all(protractor_1.by.tagName('tr')).get(0).all(protractor_1.by.tagName('th'));
    }
    getTableHeaderColumnCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTableHeaderColumns().count();
        });
    }
    /**
     *
     * @param columnNumber index starts with 1
     */
    getTableHeaderColumnTitle(columnNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTableHeaderColumns().get(--columnNumber).element(protractor_1.by.tagName('div')).getText();
        });
    }
    getTableBodyRows() {
        return this.getTableBody().all(protractor_1.by.tagName('tr'));
    }
    getTableBodyRowCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTableBodyRows().count();
        });
    }
    /**
     *
     * @param rowNumber index starts with 1
     */
    getTableBodyRowCells(rowNumber) {
        return this.getTableBodyRows().get(--rowNumber).all(protractor_1.by.tagName('td'));
    }
    /**
     *
     * @param rowNumber index starts with 1
     * @param columnNumber index starts with 1
     *
     */
    getTableBodyRowCell(rowNumber, columnNumber) {
        return this.getTableBodyRowCells(rowNumber).get(--columnNumber);
    }
}
exports.BaseTable = BaseTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9jb21wb25lbnQvYmFzZS9CYXNlVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUUvQyxNQUFhLFNBQVM7SUFHbEIsWUFBWSxVQUF3QjtRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxxQkFBcUI7UUFDakIsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUsseUJBQXlCOztZQUMzQixPQUFPLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEQsQ0FBQztLQUFBO0lBRUQ7OztPQUdHO0lBQ0cseUJBQXlCLENBQUMsWUFBbUI7O1lBQy9DLE9BQU8sTUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZHLENBQUM7S0FBQTtJQUVELGdCQUFnQjtRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVLLG9CQUFvQjs7WUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pELENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNILG9CQUFvQixDQUFDLFNBQWdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxtQkFBbUIsQ0FBQyxTQUFnQixFQUFFLFlBQW1CO1FBQ3JELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FDSjtBQTVERCw4QkE0REMifQ==