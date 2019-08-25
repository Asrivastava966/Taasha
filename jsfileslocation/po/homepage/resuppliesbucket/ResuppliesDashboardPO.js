"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ResuppliesDashboardPO {
    getDashboardButton() {
        return ResuppliesDashboardPO.dashboardButton;
    }
    getResuppliesDashboardBucketMaster() {
        return ResuppliesDashboardPO.resuppliesDashboardBucketMaster;
    }
    getResuppliesDashboardBucketElement(resuppliesDashboardBucket) {
        return this.getResuppliesDashboardBucketMaster().element(protractor_1.by.css('[data-ng-click*=' + resuppliesDashboardBucket + ']'));
    }
}
ResuppliesDashboardPO.dashboardButton = protractor_1.element(protractor_1.by.buttonText('Dashboard'));
//Resupplies Dashboard buckets
ResuppliesDashboardPO.resuppliesDashboardBucketMaster = protractor_1.element(protractor_1.by.className('masterActions'));
exports.ResuppliesDashboardPO = ResuppliesDashboardPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbGllc0Rhc2hib2FyZFBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ob21lcGFnZS9yZXN1cHBsaWVzYnVja2V0L1Jlc3VwcGxpZXNEYXNoYm9hcmRQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUd6QyxNQUFhLHFCQUFxQjtJQUc5QixrQkFBa0I7UUFDZCxPQUFPLHFCQUFxQixDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDO0lBS08sa0NBQWtDO1FBQ3RDLE9BQU8scUJBQXFCLENBQUMsK0JBQStCLENBQUM7SUFDakUsQ0FBQztJQUVELG1DQUFtQyxDQUFDLHlCQUFtRDtRQUNuRixPQUFPLElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0gsQ0FBQzs7QUFmYyxxQ0FBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBTXJFLDhCQUE4QjtBQUNmLHFEQUErQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBUjVGLHNEQWlCQyJ9