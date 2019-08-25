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
class TechnicianManagementGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.nameColumnIndex = 1;
        this.createdOnColumnIndex = 2;
        this.emailColumnIndex = 3;
        this.statusColumnIndex = 4;
        this.phoneColumnIndex = 5;
        this.actionColumnIndex = 6;
    }
    getNameColumnHeaderInputFilter() {
        return this.getGridHeaderCell(this.nameColumnIndex).element(protractor_1.by.className('ui-grid-filter-input'));
    }
    filterByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNameColumnHeaderInputFilter().sendKeys(name);
        });
    }
    getEmailColumnHeaderInputFilter() {
        return this.getGridHeaderCell(this.emailColumnIndex).element(protractor_1.by.className('ui-grid-filter-input'));
    }
    filterByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getEmailColumnHeaderInputFilter().sendKeys(email);
        });
    }
    getStatusColumnHeaderSelectFilter() {
        return new SelectDropdown_1.SelectDropdown(this.getGridHeaderCell(this.statusColumnIndex).element(protractor_1.by.className('ui-grid-filter-select')));
    }
    filterByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getStatusColumnHeaderSelectFilter().selectOption(status);
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
    getCreatedOnDate(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.createdOnColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    getEmail(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.emailColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    getPhone(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.phoneColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    updateTechnician(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
}
exports.TechnicianManagementGrid = TechnicianManagementGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVjaG5pY2lhbk1hbmFnZW1lbnRHcmlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9jb21wb25lbnQvY29tcC9UZWNobmljaWFuTWFuYWdlbWVudEdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQUM1QywyQ0FBK0M7QUFDL0MscURBQWtEO0FBR2xELE1BQWEsd0JBQXlCLFNBQVEsbUJBQVE7SUFRbEQsWUFBWSxXQUF5QjtRQUNqQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFSZixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBSTlCLENBQUM7SUFFRCw4QkFBOEI7UUFDMUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUssWUFBWSxDQUFDLElBQVc7O1lBQzFCLE1BQU0sSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUM7S0FBQTtJQUVELCtCQUErQjtRQUMzQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVLLGFBQWEsQ0FBQyxLQUFZOztZQUM1QixNQUFNLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxDQUFDO0tBQUE7SUFFRCxpQ0FBaUM7UUFDN0IsT0FBTyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdILENBQUM7SUFFSyxjQUFjLENBQUMsTUFBYTs7WUFDOUIsTUFBTSxJQUFJLENBQUMsaUNBQWlDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEUsQ0FBQztLQUFBO0lBRUQsK0JBQStCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRUssYUFBYSxDQUFDLEtBQVk7O1lBQzVCLE1BQU0sSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxTQUFnQjs7WUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuSSxDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxTQUFnQjs7WUFDbkMsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hJLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxTQUFnQjs7WUFDM0IsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BJLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxTQUFnQjs7WUFDM0IsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BJLENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUFDLFNBQWdCOztZQUNuQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0RyxDQUFDO0tBQUE7Q0FDSjtBQS9ERCw0REErREMifQ==