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
const LoginLib_1 = require("../../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../../lib/homepage/HomepageLib");
const AdminDashboardLib_1 = require("../../../../lib/admindashboardpage/AdminDashboardLib");
const AdminDashboardBucket_1 = require("../../../../data/enums/AdminDashboardBucket");
const FeeScheduleManagementLib_1 = require("../../../../lib/admindashboardpage/feeschedulebucket/FeeScheduleManagementLib");
const FeeScheduleInfo_1 = require("../../../../data/info/FeeScheduleInfo");
const FeeScheduleDetailsLib_1 = require("../../../../lib/admindashboardpage/feeschedulebucket/FeeScheduleDetailsLib");
const FeeScheduleDetailsInfo_1 = require("../../../../data/info/FeeScheduleDetailsInfo");
const CommonUtils_1 = require("../../../../utils/CommonUtils");
const HCPCS_Code_1 = require("../../../../data/enums/HCPCS_Code");
const FeeSchedulePriceType_1 = require("../../../../data/enums/FeeSchedulePriceType");
let propertiesReader = require('properties-reader');
let feeSchedulesProperties = propertiesReader('ra_automation/data/properties/FeeSchedulesInfo.file');
let description = feeSchedulesProperties.get('feeSchedules.Description') + "" + Math.floor(Math.random() * 1000);
let type = feeSchedulesProperties.get('feeSchedules.Type');
let feeScheduleInfo = new FeeScheduleInfo_1.FeeScheduleInfo;
feeScheduleInfo.setDescription(description);
feeScheduleInfo.setType(type);
let feeScheduleDetailsPropewrties = propertiesReader('ra_automation/data/properties/FeeScheduleDetailsInfo.file');
let feeScheduleDetailsInfo = new FeeScheduleDetailsInfo_1.FeeScheduleDetailsInfo;
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Admin Dashboard > Fee Schedules : Workflow tests', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let loginLib = new LoginLib_1.LoginLib();
        let homepageLib = new HomepageLib_1.HomepageLib();
        let adminDashboardLib = new AdminDashboardLib_1.AdminDashboardLib();
        let feeScheduleManagement = new FeeScheduleManagementLib_1.FeeScheduleManagementLib();
        let feeScheduleDetails = new FeeScheduleDetailsLib_1.FeeScheduleDetailsLib();
        beforeEach(() => __awaiter(this, void 0, void 0, function* () {
            yield loginLib.doBaseLogin();
            yield homepageLib.navigateToAdminDashboardPage();
            yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.FEE_SCHEDULE);
        }));
        it('[Fee Schedule Details]: Try to generate duplicate Fee Schedule Details', () => __awaiter(this, void 0, void 0, function* () {
            yield feeScheduleManagement.navigateToFeeSchedulesDetailsTab();
            yield feeScheduleDetails.navigateAddNewFeeScheduleDetailsForm();
            feeScheduleDetailsInfo.setFeeSchedule(description);
            feeScheduleDetailsInfo.setHCPCS_Code(HCPCS_Code_1.HCPCS_Code.A7034);
            feeScheduleDetailsInfo.setPriceType(FeeSchedulePriceType_1.FeeSchedulePriceType.Purchase);
            let beginDate = commonUtils.getDateFromString(feeScheduleDetailsPropewrties.get('feeScheduleDetail.BeginDate'));
            feeScheduleDetailsInfo.setBegindate(beginDate);
            yield feeScheduleDetails.addFeeScheduleDetailsGernalInfo(feeScheduleDetailsInfo);
            yield expect(yield feeScheduleDetails.duplicatedMessagePresent()).toBe(true);
            yield expect(yield feeScheduleDetails.duplicateMessageText()).toBe('');
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlU2NoZWR1bGVNYW5hZ2VtZW50VUlWYWxpZGF0aW9uVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy9hZG1pbmRhc2hib2FyZC9mZWVzY2hlZHVsZWJ1Y2tldC91aXZhbGlkYXRpb25jaGVja3MvRmVlU2NoZWR1bGVNYW5hZ2VtZW50VUlWYWxpZGF0aW9uVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUVBQThEO0FBQzlELHNFQUFtRTtBQUNuRSw0RkFBeUY7QUFDekYsc0ZBQW1GO0FBQ25GLDRIQUF3SDtBQUN4SCwyRUFBdUU7QUFDdkUsc0hBQW1IO0FBQ25ILHlGQUFzRjtBQUN0RiwrREFBNEQ7QUFDNUQsa0VBQStEO0FBQy9ELHNGQUFtRjtBQUVuRixJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksc0JBQXNCLEdBQUcsZ0JBQWdCLENBQUMscURBQXFELENBQUMsQ0FBQTtBQUVwRyxJQUFJLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7QUFDaEgsSUFBSSxJQUFJLEdBQUcsc0JBQXNCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7QUFFMUQsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFBO0FBQ3pDLGVBQWUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDM0MsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUU3QixJQUFJLDZCQUE2QixHQUFHLGdCQUFnQixDQUFDLDJEQUEyRCxDQUFDLENBQUE7QUFDakgsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLCtDQUFzQixDQUFBO0FBQ3ZELElBQUksV0FBVyxHQUFnQixJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVqRCxRQUFRLENBQUMsMERBQTBELEVBQUU7O1FBQ2pFLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1FBQ2hELElBQUkscUJBQXFCLEdBQUcsSUFBSSxtREFBd0IsRUFBRSxDQUFDO1FBQzNELElBQUksa0JBQWtCLEdBQUcsSUFBSSw2Q0FBcUIsRUFBRSxDQUFDO1FBRXJELFVBQVUsQ0FBQyxHQUFTLEVBQUU7WUFDbEIsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsTUFBTSxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUNqRCxNQUFNLGlCQUFpQixDQUFDLDhCQUE4QixDQUFDLDJDQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlGLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsd0VBQXdFLEVBQUUsR0FBUyxFQUFFO1lBQ3BGLE1BQU0scUJBQXFCLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQTtZQUM5RCxNQUFNLGtCQUFrQixDQUFDLG9DQUFvQyxFQUFFLENBQUE7WUFFL0Qsc0JBQXNCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ2xELHNCQUFzQixDQUFDLGFBQWEsQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3RELHNCQUFzQixDQUFDLFlBQVksQ0FBQywyQ0FBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNsRSxJQUFJLFNBQVMsR0FBUyxXQUFXLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQTtZQUNySCxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFOUMsTUFBTSxrQkFBa0IsQ0FBQywrQkFBK0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBQ2hGLE1BQU0sTUFBTSxDQUFDLE1BQU0sa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM1RSxNQUFNLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FBQSxDQUFDLENBQUEifQ==