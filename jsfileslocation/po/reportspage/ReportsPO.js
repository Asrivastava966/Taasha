"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ReportsPO {
    getReportsBucketMaster() {
        return ReportsPO.reportsBucketMaster;
    }
    getReportsBucketElement(reportsBucket) {
        return this.getReportsBucketMaster().element(protractor_1.by.css('[data-ng-click*=' + reportsBucket + ']'));
    }
}
//Reports Dashboard buckets
ReportsPO.reportsBucketMaster = protractor_1.element(protractor_1.by.className('masterActions'));
exports.ReportsPO = ReportsPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0c1BPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9yZXBvcnRzcGFnZS9SZXBvcnRzUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFHekMsTUFBYSxTQUFTO0lBSWxCLHNCQUFzQjtRQUNsQixPQUFPLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQztJQUN6QyxDQUFDO0lBRUQsdUJBQXVCLENBQUMsYUFBMkI7UUFDL0MsT0FBTyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDOztBQVRELDJCQUEyQjtBQUNaLDZCQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBRmhGLDhCQVdDIn0=