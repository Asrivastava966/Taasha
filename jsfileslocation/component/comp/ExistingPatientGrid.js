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
class ExistingPatientGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.patientNameColumnIndex = 1;
        this.dobColumnIndex = 2;
        this.genderColumnIndex = 3;
        this.statusColumnIndex = 4;
        this.phoneNumberColumnIndex = 5;
        this.legacyIdColumnIndex = 6;
    }
    getPatientNameColumnCell(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.patientNameColumnIndex).element(protractor_1.by.tagName('a'));
    }
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPatientNameColumnCell(rowNumber).getText();
        });
    }
    getDOBColumnCell(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.dobColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents'));
    }
    getDOB(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getDOBColumnCell(rowNumber).getText();
        });
    }
}
exports.ExistingPatientGrid = ExistingPatientGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhpc3RpbmdQYXRpZW50R3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvRXhpc3RpbmdQYXRpZW50R3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQTRDO0FBQzVDLDJDQUErQztBQUUvQyxNQUFhLG1CQUFvQixTQUFRLG1CQUFRO0lBUTdDLFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBUmYsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztJQUloQyxDQUFDO0lBRUQsd0JBQXdCLENBQUMsU0FBZ0I7UUFDckMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVLLGNBQWMsQ0FBQyxTQUFnQjs7WUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwRSxDQUFDO0tBQUE7SUFFRCxnQkFBZ0IsQ0FBQyxTQUFnQjtRQUM3QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRUssTUFBTSxDQUFDLFNBQWdCOztZQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVELENBQUM7S0FBQTtDQUNKO0FBM0JELGtEQTJCQyJ9