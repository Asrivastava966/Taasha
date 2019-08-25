import { element, by } from "protractor";
import { ReportsBucket } from "../../data/enums/ReportsBucket";

export class ReportsPO {
    //Reports Dashboard buckets
    private static reportsBucketMaster = element(by.className('masterActions'));

    getReportsBucketMaster() {
        return ReportsPO.reportsBucketMaster;
    }

    getReportsBucketElement(reportsBucket:ReportsBucket) {
        return this.getReportsBucketMaster().element(by.css('[data-ng-click*=' + reportsBucket + ']'));
    }
}