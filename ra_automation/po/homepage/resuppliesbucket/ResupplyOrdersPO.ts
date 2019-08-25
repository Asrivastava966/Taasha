import { element, by } from "protractor";
import { ResupplyOrdersGrid } from "../../../component/comp/ResupplyOrdersGrid";

export class ResupplyOrdersPO {

    private static cssHeaderLogo = element(by.tagName('img'));

    getCSSHeaderLogo() {
        return ResupplyOrdersPO.cssHeaderLogo;
    }
    
    private static resuppliesDashboardButton = element(by.buttonText('Resupplies Dashboard'));
    
    getResuppliesDashboardButton() {
        return ResupplyOrdersPO.resuppliesDashboardButton;
    }

    private static filterButton = element(by.id('filter'));

    getFilterButton() {
        return ResupplyOrdersPO.filterButton;
    }

    private static patientNameFilterInputField = element(by.model('filterData.ptNm'));
    getPatientNameFilterInputField() {
        return ResupplyOrdersPO.patientNameFilterInputField;
    }

    private static searchButton = element(by.css('[ng-click=\"filter()\"]'));
    getSearchButton() {
        return ResupplyOrdersPO.searchButton;
    }

    private static saveGridSettingsButton = element(by.id('save'));

    getSaveGridSettingsButton() {
        return ResupplyOrdersPO.saveGridSettingsButton;
    }

    private static resupplyOrdersGrid = element(by.id('grid1'));

    getResupplyOrdersGrid() {
        return new ResupplyOrdersGrid(ResupplyOrdersPO.resupplyOrdersGrid);
    }
}