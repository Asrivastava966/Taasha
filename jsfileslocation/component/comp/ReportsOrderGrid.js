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
class ReportsOrderGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.patientNameColumnIndex = 1;
        this.orderNumberColumnIndex = 2;
        this.orderTypeColumnIndex = 3;
        this.refDoctorColumnIndex = 4;
        this.insuranceColumnIndex = 5;
        this.contactNotesColiumnIndex = 6;
        this.otherNotesColumnIndex = 7;
        this.daysOutstandingColumnIndex = 8;
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
    updatePatient(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstRowIndex = 1;
            yield this.searchViaPatientNameFilter(patientName);
            yield this.getPatientNameColumnCell(firstRowIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
}
exports.ReportsOrderGrid = ReportsOrderGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0c09yZGVyR3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvUmVwb3J0c09yZGVyR3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQTRDO0FBQzVDLDJDQUErQztBQUUvQyxNQUFhLGdCQUFpQixTQUFRLG1CQUFRO0lBVzFDLFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBVmYsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLDJCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qiw2QkFBd0IsR0FBRyxDQUFDLENBQUM7UUFDN0IsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLCtCQUEwQixHQUFHLENBQUMsQ0FBQztJQUl2QyxDQUFDO0lBRUssMEJBQTBCLENBQUMsV0FBa0I7O1lBQy9DLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEksQ0FBQztLQUFBO0lBRUQsd0JBQXdCLENBQUMsU0FBZ0I7UUFDckMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFSyxjQUFjLENBQUMsU0FBZ0I7O1lBQ2pDLE9BQU8sTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3RixDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsV0FBa0I7O1lBQ2xDLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztZQUV0QixNQUFNLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRCxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hGLENBQUM7S0FBQTtDQUNKO0FBakNELDRDQWlDQyJ9