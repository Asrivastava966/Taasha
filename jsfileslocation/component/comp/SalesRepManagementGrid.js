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
const BaseGrid_1 = require("../base/BaseGrid");
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("./SelectDropdown");
class SalesRepManagementGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.statusColumnIndex = 1;
        this.nameColumnIndex = 2;
        this.createdOnColumnIndex = 3;
        this.phoneColumnIndex = 4;
        this.actionColumnIndex = 5;
    }
    getStatusColumnHeaderSelectFilter() {
        return new SelectDropdown_1.SelectDropdown(this.getGridHeaderCell(this.statusColumnIndex).element(protractor_1.by.className('ui-grid-filter-select')));
    }
    filterByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getStatusColumnHeaderSelectFilter().selectOption(status);
        });
    }
    getNameColumnHeaderInputFilter() {
        return this.getGridHeaderCell(this.nameColumnIndex).element(protractor_1.by.className('ui-grid-filter-input'));
    }
    filterByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNameColumnHeaderInputFilter().sendKeys(name);
        });
    }
    getPhoneColumnHeaderInputFilter() {
        return this.getGridHeaderCell(this.phoneColumnIndex).element(protractor_1.by.className('ui-grid-filter-input'));
    }
    filterByPhone(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNameColumnHeaderInputFilter().sendKeys(phone);
        });
    }
    getName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.nameColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    getPhone(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.phoneColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    getCreatedOnDate(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.createdOnColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    updateSalesRep(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
}
exports.SalesRepManagementGrid = SalesRepManagementGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FsZXNSZXBNYW5hZ2VtZW50R3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvU2FsZXNSZXBNYW5hZ2VtZW50R3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQTRDO0FBQzVDLDJDQUErQztBQUUvQyxxREFBa0Q7QUFFbEQsTUFBYSxzQkFBdUIsU0FBUSxtQkFBUTtJQU9oRCxZQUFZLFdBQXlCO1FBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQVBmLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztJQUk5QixDQUFDO0lBRUQsaUNBQWlDO1FBQzdCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBRUssY0FBYyxDQUFDLE1BQWE7O1lBQzlCLE1BQU0sSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLENBQUM7S0FBQTtJQUVELDhCQUE4QjtRQUMxQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFSyxZQUFZLENBQUMsSUFBVzs7WUFDMUIsTUFBTSxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQztLQUFBO0lBRUQsK0JBQStCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRUssYUFBYSxDQUFDLEtBQVk7O1lBQzVCLE1BQU0sSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxTQUFnQjs7WUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuSSxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsU0FBZ0I7O1lBQzNCLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwSSxDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxTQUFnQjs7WUFDbkMsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hJLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxTQUFnQjs7WUFDakMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEcsQ0FBQztLQUFBO0NBQ0o7QUFsREQsd0RBa0RDIn0=