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
class MyTasksGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.orderNumberColumnIndex = 1;
        this.patientNameColumnIndex = 2;
        //grid-settings
        this.saveGridSettingsButton = protractor_1.$('#save');
        //Workflow methods
        this.firstRowIndex = 1;
    }
    getSaveGridSettingsButton() {
        return this.saveGridSettingsButton;
    }
    //TO-DO :: grid-settings methods 
    //grid-menu
    getGridMenuButton() {
        return this.getGridContentsWrapper().element(protractor_1.by.className('ui-grid-menu-button'));
    }
    //TO-DO :: grid-menu button methods
    getGridContainer() {
        return this.getGridContentsWrapper().all(protractor_1.by.css('[role=\"grid\"]')).get(1);
    }
    getOrderNumberHeaderCell() {
        return this.getGridHeaderCells().get((this.orderNumberColumnIndex - 1));
    }
    getPatientNameHeaderCell() {
        return this.getGridHeaderCells().get((this.patientNameColumnIndex - 1));
    }
    getPatientNameFilter() {
        return this.getPatientNameHeaderCell().element(protractor_1.by.className('ui-grid-filter-input'));
    }
    getOrderNumberLink(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.orderNumberColumnIndex).element(protractor_1.by.tagName('a'));
    }
    getPatientNameLink(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.patientNameColumnIndex).element(protractor_1.by.tagName('a'));
    }
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientNameLink(rowNumber).getText();
        });
    }
    searchViaPatientNameFilter(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPatientNameFilter().clear();
            yield this.getPatientNameFilter().sendKeys(patientName);
        });
    }
    searchViaPatientNameFilterAndClickOnPatientNameLink(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchViaPatientNameFilter(patientName);
            yield this.getPatientNameLink(this.firstRowIndex).click();
        });
    }
    searchViaPatientNameFilterAndClickOnOrderNumberLink(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchViaPatientNameFilter(patientName);
            yield this.getOrderNumberLink(this.firstRowIndex).click();
        });
    }
}
exports.MyTasksGrid = MyTasksGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlUYXNrc0dyaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2NvbXBvbmVudC9jb21wL015VGFza3NHcmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsK0NBQTRDO0FBRTVDLE1BQWEsV0FBWSxTQUFRLG1CQUFRO0lBSXJDLFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBSmYsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLDJCQUFzQixHQUFHLENBQUMsQ0FBQztRQU1uQyxlQUFlO1FBQ1AsMkJBQXNCLEdBQUcsY0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBd0M1QyxrQkFBa0I7UUFDVixrQkFBYSxHQUFHLENBQUMsQ0FBQztJQTVDMUIsQ0FBQztJQUlPLHlCQUF5QjtRQUM3QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsaUNBQWlDO0lBRWpDLFdBQVc7SUFDSCxpQkFBaUI7UUFDckIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUNELG1DQUFtQztJQUVuQyxnQkFBZ0I7UUFDWixPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVPLHdCQUF3QjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTyx3QkFBd0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU8sb0JBQW9CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxTQUFnQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsU0FBZ0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVLLGNBQWMsQ0FBQyxTQUFnQjs7WUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5RCxDQUFDO0tBQUE7SUFLSywwQkFBMEIsQ0FBQyxXQUFrQjs7WUFDL0MsTUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFSyxtREFBbUQsQ0FBQyxXQUFrQjs7WUFDeEUsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkQsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlELENBQUM7S0FBQTtJQUVLLG1EQUFtRCxDQUFDLFdBQWtCOztZQUN4RSxNQUFNLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRCxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUQsQ0FBQztLQUFBO0NBQ0o7QUFsRUQsa0NBa0VDIn0=