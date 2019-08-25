import { ReportsPO } from "../../po/reportspage/ReportsPO";
import { ReportsBucket } from "../../data/enums/ReportsBucket";

export class ReportsLib {
    reportsPO:ReportsPO;

    constructor() {
        this.reportsPO = new ReportsPO();
    }

    getReportsPO() {
        return this.reportsPO;
    }

    async navigateToReportsBucket(reportsBucket:ReportsBucket) {
        await this.getReportsPO().getReportsBucketElement(reportsBucket).click();
    }
}