"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReportsPO_1 = require("../../po/reportspage/ReportsPO");
class ReportsLib {
    constructor() {
        this.reportsPO = new ReportsPO_1.ReportsPO();
    }
    getReportsPO() {
        return this.reportsPO;
    }
    navigateToReportsBucket(reportsBucket) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getReportsPO().getReportsBucketElement(reportsBucket).click();
        });
    }
}
exports.ReportsLib = ReportsLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0c0xpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL3JlcG9ydHNwYWdlL1JlcG9ydHNMaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhEQUEyRDtBQUczRCxNQUFhLFVBQVU7SUFHbkI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFSyx1QkFBdUIsQ0FBQyxhQUEyQjs7WUFDckQsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0UsQ0FBQztLQUFBO0NBQ0o7QUFkRCxnQ0FjQyJ9