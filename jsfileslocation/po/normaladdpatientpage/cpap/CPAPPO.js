"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const CompliancePO_1 = require("./CompliancePO");
const ResuppliesPO_1 = require("./ResuppliesPO");
class CPAPPO {
    constructor() {
        this.compliancePO = new CompliancePO_1.CompliancePO();
        this.resuppliesPO = new ResuppliesPO_1.ResuppliesPO();
    }
    getCompliancePO() {
        return this.compliancePO;
    }
    getResuppliesPO() {
        return this.resuppliesPO;
    }
    getBackToComplianceDashboardButton() {
        return CPAPPO.backToComplianceDashboardButton;
    }
    getResuppliesTabButton() {
        return CPAPPO.resuppliesTabButton;
    }
    getComplianceTabButton() {
        return CPAPPO.complianceTabButton;
    }
}
CPAPPO.backToComplianceDashboardButton = protractor_1.element(protractor_1.by.css('[ng-click="navigate(\'complianceDashboard\')"]'));
CPAPPO.resuppliesTabButton = protractor_1.element(protractor_1.by.buttonText('Resupplies'));
CPAPPO.complianceTabButton = protractor_1.element(protractor_1.by.buttonText('Compliance'));
exports.CPAPPO = CPAPPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1BBUFBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ub3JtYWxhZGRwYXRpZW50cGFnZS9jcGFwL0NQQVBQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QyxpREFBOEM7QUFDOUMsaURBQThDO0FBRTlDLE1BQWEsTUFBTTtJQUlmO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFJRCxrQ0FBa0M7UUFDOUIsT0FBTyxNQUFNLENBQUMsK0JBQStCLENBQUM7SUFDbEQsQ0FBQztJQUtELHNCQUFzQjtRQUNsQixPQUFPLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUN0QyxDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLE9BQU8sTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQ3RDLENBQUM7O0FBZmMsc0NBQStCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztBQU1wRywwQkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUMzRCwwQkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQXhCOUUsd0JBaUNDIn0=