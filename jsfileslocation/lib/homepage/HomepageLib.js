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
const protractor_1 = require("protractor");
const HomepagePO_1 = require("../../po/homepage/HomepagePO");
const AddPatientMode_1 = require("../../data/enums/AddPatientMode");
class HomepageLib {
    constructor() {
        this.homepagePO = new HomepagePO_1.HomepagePO();
    }
    getHomepagePO() {
        return this.homepagePO;
    }
    //header
    navigateToHomepage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getHomepagePO().getPageTitle().click();
        });
    }
    getLoggedInUserInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getHomepagePO().getLoggedInUserInfo().getText();
        });
    }
    navigateToAdminDashboardPage() {
        return __awaiter(this, void 0, void 0, function* () {
            let adminDashboardLinkText = 'Admin Dashboard';
            yield this.getHomepagePO().getNavigationDropdownButton().selectDropdownMenuOptionByLinkText(adminDashboardLinkText);
        });
    }
    navigateToReportsPage() {
        return __awaiter(this, void 0, void 0, function* () {
            let adminDashboardLinkText = 'Reports';
            yield this.getHomepagePO().getNavigationDropdownButton().selectDropdownMenuOptionByLinkText(adminDashboardLinkText);
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getHomepagePO().getLogoutButton().click();
        });
    }
    addPatientViaQuickAddLink() {
        return __awaiter(this, void 0, void 0, function* () {
            let quickAddLinkText = 'Quick Add';
            yield this.getHomepagePO().getAddPatientDropdownButton().selectDropdownMenuOptionByLinkText(quickAddLinkText);
        });
    }
    addPatientViaNormalAddLink() {
        return __awaiter(this, void 0, void 0, function* () {
            let normalAddLinkText = 'Normal Add';
            yield this.getHomepagePO().getAddPatientDropdownButton().selectDropdownMenuOptionByLinkText(normalAddLinkText);
        });
    }
    //dashboard 
    selectAddPatientMode(mode) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Clicking on the \' " + mode + " \' link from the Add Patient dropdown.");
            switch (mode) {
                case AddPatientMode_1.AddPatientMode.QUICK_ADD: {
                    yield this.addPatientViaQuickAddLink();
                    break;
                }
                case AddPatientMode_1.AddPatientMode.NORMAL_ADD: {
                    yield this.addPatientViaNormalAddLink();
                    break;
                }
            }
        });
    }
    findPatient() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Navigating to the 'Find Patient' form...");
            yield this.getHomepagePO().getSearchPatientButton().click();
        });
    }
    /**
     *
     * @param bucketIndex starts at 1.
     */
    getHomepageDashboardBucket(bucketIndex) {
        return this.getHomepagePO().getHomepageDashboardBuckets().get(--bucketIndex);
    }
    getHomepageDashboardBucketCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getHomepagePO().getHomepageDashboardBuckets().count();
        });
    }
    /**
     *
     * @param bucketIndex starts at 1.
     */
    getHomepageDashboardBucketName(bucketIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getHomepagePO().getHomepageDashboardBuckets().get(--bucketIndex).element(protractor_1.by.tagName('h1')).getText();
        });
    }
    getHomepageDashboardBucketDataCount(homepageDashboardBucket) {
        return __awaiter(this, void 0, void 0, function* () {
            let totalBucketCount = yield this.getHomepageDashboardBucketCount();
            for (let i = 1; i <= totalBucketCount; i++) {
                let bucketName = yield this.getHomepageDashboardBucketName(i);
                if (bucketName == homepageDashboardBucket) {
                    return yield this.getHomepageDashboardBucket(i).element(protractor_1.by.tagName('div'));
                }
            }
        });
    }
    navigateToHomepageDashboardBucket(homepageDashboardBucket) {
        return __awaiter(this, void 0, void 0, function* () {
            let totalBucketCount = yield this.getHomepageDashboardBucketCount();
            for (let i = 1; i <= totalBucketCount; i++) {
                let bucketName = yield this.getHomepageDashboardBucketName(i);
                if (bucketName == homepageDashboardBucket) {
                    yield this.getHomepageDashboardBucket(i).click();
                    break;
                }
            }
        });
    }
    //'My Tasks' grid on Homepage
    getMyTasksGrid() {
        return this.getHomepagePO().getMyTasksGrid();
    }
}
exports.HomepageLib = HomepageLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZXBhZ2VMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9ob21lcGFnZS9Ib21lcGFnZUxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLDZEQUEwRDtBQUMxRCxvRUFBaUU7QUFHakUsTUFBYSxXQUFXO0lBR3BCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUTtJQUNGLGtCQUFrQjs7WUFDcEIsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEQsQ0FBQztLQUFBO0lBRUssbUJBQW1COztZQUNyQixPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEUsQ0FBQztLQUFBO0lBRUssNEJBQTRCOztZQUM5QixJQUFJLHNCQUFzQixHQUFHLGlCQUFpQixDQUFDO1lBQy9DLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLDJCQUEyQixFQUFFLENBQUMsa0NBQWtDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN4SCxDQUFDO0tBQUE7SUFFSyxxQkFBcUI7O1lBQ3ZCLElBQUksc0JBQXNCLEdBQUcsU0FBUyxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLDJCQUEyQixFQUFFLENBQUMsa0NBQWtDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN4SCxDQUFDO0tBQUE7SUFFSyxNQUFNOztZQUNSLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pELENB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