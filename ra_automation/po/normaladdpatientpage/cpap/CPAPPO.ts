import { element, by } from "protractor";
import { CompliancePO } from "./CompliancePO";
import { ResuppliesPO } from "./ResuppliesPO";

export class CPAPPO{
    compliancePO:CompliancePO;
    resuppliesPO:ResuppliesPO;

    constructor() {
        this.compliancePO = new CompliancePO();
        this.resuppliesPO = new ResuppliesPO();
    }

    getCompliancePO() {
        return this.compliancePO;
    }

    getResuppliesPO() {
        return this.resuppliesPO;
    }

    private static backToComplianceDashboardButton = element(by.css('[ng-click="navigate(\'complianceDashboard\')"]'));

    getBackToComplianceDashboardButton() {
        return CPAPPO.backToComplianceDashboardButton;
    }

    private static resuppliesTabButton = element(by.buttonText('Resupplies'));
    private static complianceTabButton = element(by.buttonText('Compliance'));

    getResuppliesTabButton() {
        return CPAPPO.resuppliesTabButton;
    }

    getComplianceTabButton() {
        return CPAPPO.complianceTabButton;
    }
}