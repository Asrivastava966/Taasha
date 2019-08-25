"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FeeSchedulesPO_1 = require("../feeschedulebucket/FeeSchedulesPO");
const FeeScheduleDetailsPO_1 = require("../feeschedulebucket/FeeScheduleDetailsPO");
const protractor_1 = require("protractor");
class FeeScheduleManagementPO {
    constructor() {
        this.feeScheduleDetails = new FeeScheduleDetailsPO_1.FeeScheduleDetailsPO();
        this.feeSchedules = new FeeSchedulesPO_1.FeeSchedulesPO();
    }
    getFeeSchedulesPO() {
        return this.feeSchedules;
    }
    getFeeScheduleDetailsPO() {
        return this.feeScheduleDetails;
    }
    getFeeSchedulesTab() {
        return FeeScheduleManagementPO.feeScheduleTab;
    }
    getFeeScheduleDetailsTab() {
        return FeeScheduleManagementPO.feeScheduleDetailsTab;
    }
}
// Fee Schedule Tabs
FeeScheduleManagementPO.feeScheduleDetailsTab = protractor_1.element.all(protractor_1.by.css('[ng-click="select($event)"]')).last();
FeeScheduleManagementPO.feeScheduleTab = protractor_1.element.all(protractor_1.by.css('[ng-click="select($event)"]')).first();
exports.FeeScheduleManagementPO = FeeScheduleManagementPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlU2NoZWR1bGVNYW5hZ2VtZW50UE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL2FkbWluZGFzaGJvYXJkcGFnZS9mZWVzY2hlZHVsZWJ1Y2tldC9GZWVTY2hlZHVsZU1hbmFnZW1lbnRQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdFQUFvRTtBQUNwRSxvRkFBZ0Y7QUFDaEYsMkNBQXlDO0FBRXpDLE1BQWEsdUJBQXVCO0lBSWhDO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQTtRQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFBO0lBQzVDLENBQUM7SUFFRCxpQkFBaUI7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDNUIsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQTtJQUNsQyxDQUFDO0lBTUQsa0JBQWtCO1FBQ2QsT0FBTyx1QkFBdUIsQ0FBQyxjQUFjLENBQUE7SUFDakQsQ0FBQztJQUVELHdCQUF3QjtRQUNwQixPQUFPLHVCQUF1QixDQUFDLHFCQUFxQixDQUFBO0lBQ3hELENBQUM7O0FBVkQsb0JBQW9CO0FBQ0wsNkNBQXFCLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7QUFDakYsc0NBQWMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtBQW5COUYsMERBNkJDIn0=