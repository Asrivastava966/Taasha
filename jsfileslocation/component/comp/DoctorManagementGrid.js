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
class DoctorManagementGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.lastNameColumnIndex = 1;
        this.firstNameColumnIndex = 2;
        this.npiColumnIndex = 3;
        this.actionColumnIndex = 4;
    }
    //grid-menu
    getGridMenuButton() {
        return this.getGridContentsWrapper().element(protractor_1.by.className('ui-grid-menu-button'));
    }
    //TO-DO :: grid-menu button methods
    getGridContainer() {
        return this.getGridContentsWrapper().all(protractor_1.by.css('[role=\"grid\"]')).get(1);
    }
    getLastName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.lastNameColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    getFirstName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.firstNameColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    getNPI(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.npiColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    updateDoctor(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(protractor_1.by.css('[title=\"Update Doctor\"]')).click();
        });
    }
    deleteDoctor(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(protractor_1.by.css('[title=\"Delete Doctor\"]')).click();
        });
    }
}
exports.DoctorManagementGrid = DoctorManagementGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdG9yTWFuYWdlbWVudEdyaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2NvbXBvbmVudC9jb21wL0RvY3Rvck1hbmFnZW1lbnRHcmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNEM7QUFDNUMsMkNBQStDO0FBRS9DLE1BQWEsb0JBQXFCLFNBQVEsbUJBQVE7SUFNOUMsWUFBWSxXQUF5QjtRQUNqQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFOZix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEIseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHNCQUFpQixHQUFHLENBQUMsQ0FBQztJQUk5QixDQUFDO0lBRUQsV0FBVztJQUNILGlCQUFpQjtRQUNyQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBQ0QsbUNBQW1DO0lBRW5DLGdCQUFnQjtRQUNaLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUssV0FBVyxDQUFDLFNBQWdCOztZQUM5QixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkksQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLFNBQWdCOztZQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEksQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFNBQWdCOztZQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xJLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxTQUFnQjs7WUFDL0IsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxSCxDQUFDO0tBQUE7SUFFSyxZQUFZLENBQUMsU0FBZ0I7O1lBQy9CLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUgsQ0FBQztLQUFBO0NBQ0o7QUF2Q0Qsb0RBdUNDIn0=