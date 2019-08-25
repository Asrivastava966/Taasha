import { element, by } from "protractor";
import { ReportsOrderGrid } from "../../component/comp/ReportsOrderGrid";

export class OrdersPO {

    private static reportDashboardButton = element(by.buttonText('Report Dashboard'));
    getReportDashboardButton() {
        return OrdersPO.reportDashboardButton;
    }

    private static filterButton = element(by.id('filter'));

    getFilterButton() {
        return OrdersPO.filterButton;
    }

    private static patientNameFilterInputField = element(by.model('filterData.ptNm'));
    getPatientNameFilterInputField() {
        return OrdersPO.patientNameFilterInputField;
    }

    private static searchButton = element(by.css('[ng-click=\"filter()\"]'));
    getSearchButton() {
        return OrdersPO.searchButton;
    }

    private static saveGridSettingsButton = element(by.id('save'));

    getSaveGridSettingsButton() {
        return OrdersPO.saveGridSettingsButton;
    }

    private static ordersGrid = element(by.id('grid1'));

    getOrdersGrid() {
        return new ReportsOrderGrid(OrdersPO.ordersGrid);
    }
}