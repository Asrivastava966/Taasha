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
const SelectDropdown_1 = require("./SelectDropdown");
class InsuranceProviderManagementGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.statusColumnIndex = 1;
        this.providerNameColumnIndex = 2;
        this.legacyIdColumnIndex = 3;
        this.feeScheduleColumnIndex = 4;
        this.providerNumberColumnIndex = 5;
        this.groupColumnIndex = 6;
        this.actionColumnIndex = 7;
    }
    getGridContainer() {
        return this.getGridContentsWrapper().all(protractor_1.by.css('[role=\"grid\"]')).get(1);
    }
    getStatusDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getGridHeaderCell(this.statusColumnIndex).element(protractor_1.by.tagName('select')));
    }
    selectStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getStatusDropdown().selectOption(status);
        });
    }
    searchViaProviderNameFilter(providerName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridHeaderCell(this.providerNameColumnIndex).element(protractor_1.by.className('ui-grid-filter-input')).sendKeys(providerName);
        });
    }
    searchViaLegacyIdFilter(legacyId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridHeaderCell(this.legacyIdColumnIndex).element(protractor_1.by.className('ui-grid-filter-input')).sendKeys(legacyId);
        });
    }
    searchViaFeeScheduleFilter(feeSchedule) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridHeaderCell(this.feeScheduleColumnIndex).element(protractor_1.by.className('ui-grid-filter-input')).sendKeys(feeSchedule);
        });
    }
    searchViaProviderNumberFilter(providerNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridHeaderCell(this.providerNumberColumnIndex).element(protractor_1.by.className('ui-grid-filter-input')).sendKeys(providerNumber);
        });
    }
    searchViaGroupFilter(group) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridHeaderCell(this.groupColumnIndex).element(protractor_1.by.className('ui-grid-filter-input')).sendKeys(group);
        });
    }
    getActionCell(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.actionColumnIndex);
    }
    updateInsuranceProvider(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getActionCell(rowNumber).element(protractor_1.by.css('[title=\"Update Provider\"]')).click();
        });
    }
    deleteInsuranceProvider(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getActionCell(rowNumber).element(protractor_1.by.css('[title=\"Delete Provider\"]')).click();
        });
    }
}
exports.InsuranceProviderManagementGrid = InsuranceProviderManagementGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlUHJvdmlkZXJNYW5hZ2VtZW50R3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvSW5zdXJhbmNlUHJvdmlkZXJNYW5hZ2VtZW50R3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQStDO0FBQy9DLCtDQUE0QztBQUU1QyxxREFBa0Q7QUFFbEQsTUFBYSwrQkFBZ0MsU0FBUSxtQkFBUTtJQVN6RCxZQUFZLFdBQXlCO1FBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQVRmLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qiw0QkFBdUIsR0FBRyxDQUFDLENBQUM7UUFDNUIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLDJCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQiw4QkFBeUIsR0FBRyxDQUFDLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztJQUk5QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxpQkFBaUI7UUFDYixPQUFPLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFSyxZQUFZLENBQUMsTUFBYTs7WUFDNUIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUFBO0lBRUssMkJBQTJCLENBQUMsWUFBbUI7O1lBQ2pELE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEksQ0FBQztLQUFBO0lBRUssdUJBQXVCLENBQUMsUUFBZTs7WUFDekMsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1SCxDQUFDO0tBQUE7SUFFSywwQkFBMEIsQ0FBQyxXQUFrQjs7WUFDL0MsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsSSxDQUFDO0tBQUE7SUFFSyw2QkFBNkIsQ0FBQyxjQUFxQjs7WUFDckQsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4SSxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxLQUFZOztZQUNuQyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RILENBQUM7S0FBQTtJQUVPLGFBQWEsQ0FBQyxTQUFnQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVZLHVCQUF1QixDQUFDLFNBQWdCOztZQUNqRCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9GLENBQUM7S0FBQTtJQUVZLHVCQUF1QixDQUFDLFNBQWdCOztZQUNqRCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9GLENBQUM7S0FBQTtDQUNKO0FBeERELDBFQXdEQyJ9