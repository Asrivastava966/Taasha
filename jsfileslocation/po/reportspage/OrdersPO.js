"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const ReportsOrderGrid_1 = require("../../component/comp/ReportsOrderGrid");
class OrdersPO {
    getReportDashboardButton() {
        return OrdersPO.reportDashboardButton;
    }
    getFilterButton() {
        return OrdersPO.filterButton;
    }
    getPatientNameFilterInputField() {
        return OrdersPO.patientNameFilterInputField;
    }
    getSearchButton() {
        return OrdersPO.searchButton;
    }
    getSaveGridSettingsButton() {
        return OrdersPO.saveGridSettingsButton;
    }
    getOrdersGrid() {
        return new ReportsOrderGrid_1.ReportsOrderGrid(OrdersPO.ordersGrid);
    }
}
OrdersPO.reportDashboardButton = protractor_1.element(protractor_1.by.buttonText('Report Dashboard'));
OrdersPO.filterButton = protractor_1.element(protractor_1.by.id('filter'));
OrdersPO.patientNameFilterInputField = protractor_1.element(protractor_1.by.model('filterData.ptNm'));
OrdersPO.searchButton = protractor_1.element(protractor_1.by.css('[ng-click=\"filter()\"]'));
OrdersPO.saveGridSettingsButton = protractor_1.element(protractor_1.by.id('save'));
OrdersPO.ordersGrid = protractor_1.element(protractor_1.by.id('grid1'));
exports.OrdersPO = OrdersPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJzUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL3JlcG9ydHNwYWdlL09yZGVyc1BPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlDO0FBQ3pDLDRFQUF5RTtBQUV6RSxNQUFhLFFBQVE7SUFHakIsd0JBQXdCO1FBQ3BCLE9BQU8sUUFBUSxDQUFDLHFCQUFxQixDQUFDO0lBQzFDLENBQUM7SUFJRCxlQUFlO1FBQ1gsT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQ2pDLENBQUM7SUFHRCw4QkFBOEI7UUFDMUIsT0FBTyxRQUFRLENBQUMsMkJBQTJCLENBQUM7SUFDaEQsQ0FBQztJQUdELGVBQWU7UUFDWCxPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDakMsQ0FBQztJQUlELHlCQUF5QjtRQUNyQixPQUFPLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQztJQUMzQyxDQUFDO0lBSUQsYUFBYTtRQUNULE9BQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7QUEvQmMsOEJBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUtuRSxxQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBTXhDLG9DQUEyQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7QUFLbkUscUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0FBSzFELCtCQUFzQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBTWhELG1CQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUE3QnhELDRCQWtDQyJ9