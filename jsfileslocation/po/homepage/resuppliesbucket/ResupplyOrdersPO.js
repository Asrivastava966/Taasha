"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const ResupplyOrdersGrid_1 = require("../../../component/comp/ResupplyOrdersGrid");
class ResupplyOrdersPO {
    getCSSHeaderLogo() {
        return ResupplyOrdersPO.cssHeaderLogo;
    }
    getResuppliesDashboardButton() {
        return ResupplyOrdersPO.resuppliesDashboardButton;
    }
    getFilterButton() {
        return ResupplyOrdersPO.filterButton;
    }
    getPatientNameFilterInputField() {
        return ResupplyOrdersPO.patientNameFilterInputField;
    }
    getSearchButton() {
        return ResupplyOrdersPO.searchButton;
    }
    getSaveGridSettingsButton() {
        return ResupplyOrdersPO.saveGridSettingsButton;
    }
    getResupplyOrdersGrid() {
        return new ResupplyOrdersGrid_1.ResupplyOrdersGrid(ResupplyOrdersPO.resupplyOrdersGrid);
    }
}
ResupplyOrdersPO.cssHeaderLogo = protractor_1.element(protractor_1.by.tagName('img'));
ResupplyOrdersPO.resuppliesDashboardButton = protractor_1.element(protractor_1.by.buttonText('Resupplies Dashboard'));
ResupplyOrdersPO.filterButton = protractor_1.element(protractor_1.by.id('filter'));
ResupplyOrdersPO.patientNameFilterInputField = protractor_1.element(protractor_1.by.model('filterData.ptNm'));
ResupplyOrdersPO.searchButton = protractor_1.element(protractor_1.by.css('[ng-click=\"filter()\"]'));
ResupplyOrdersPO.saveGridSettingsButton = protractor_1.element(protractor_1.by.id('save'));
ResupplyOrdersPO.resupplyOrdersGrid = protractor_1.element(protractor_1.by.id('grid1'));
exports.ResupplyOrdersPO = ResupplyOrdersPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbHlPcmRlcnNQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vaG9tZXBhZ2UvcmVzdXBwbGllc2J1Y2tldC9SZXN1cHBseU9yZGVyc1BPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlDO0FBQ3pDLG1GQUFnRjtBQUVoRixNQUFhLGdCQUFnQjtJQUl6QixnQkFBZ0I7UUFDWixPQUFPLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUMxQyxDQUFDO0lBSUQsNEJBQTRCO1FBQ3hCLE9BQU8sZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7SUFDdEQsQ0FBQztJQUlELGVBQWU7UUFDWCxPQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBR0QsOEJBQThCO1FBQzFCLE9BQU8sZ0JBQWdCLENBQUMsMkJBQTJCLENBQUM7SUFDeEQsQ0FBQztJQUdELGVBQWU7UUFDWCxPQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBSUQseUJBQXlCO1FBQ3JCLE9BQU8sZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7SUFDbkQsQ0FBQztJQUlELHFCQUFxQjtRQUNqQixPQUFPLElBQUksdUNBQWtCLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN2RSxDQUFDOztBQXRDYyw4QkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBTTNDLDBDQUF5QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFNM0UsNkJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQU14Qyw0Q0FBMkIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0FBS25FLDZCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztBQUsxRCx1Q0FBc0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQU1oRCxtQ0FBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQXBDaEUsNENBeUNDIn0=