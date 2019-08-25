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
const FeeSchedulesLib_1 = require("../../../../lib/admindashboardpage/feeschedulebucket/FeeSchedulesLib");
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
        let feeSchedules = new FeeSchedulesLib_1.FeeSchedulesLib();
        let feeScheduleManagement = new FeeScheduleManagementLib_1.FeeScheduleManagementLib();
        let feeScheduleDetails = new FeeScheduleDetailsLib_1.FeeScheduleDetailsLib();
        beforeEach(() => __awaiter(this, void 0, void 0, function* () {
            yield loginLib.doBaseLogin();
            yield homepageLib.navigateToAdminDashboardPage();
            yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.FEE_SCHEDULE);
        }));
        it('[Fee Schedules]: Add new Fee Schedule', () => __awaiter(this, void 0, void 0, function* () {
            let comments = feeSchedulesProperties.get('feeSchedules.Comments') + " " + description;
            feeScheduleInfo.setComment(comments);
            yield feeSchedules.navigateToAddNewFeeSchedulesForm();
            yield feeSchedules.feeSchedule_AddNewFeeScheduleInfo(feeScheduleInfo);
            yield feeSchedules.submit();
            yield expect(yield feeSchedules.addNewFeeschedulesValidateSuccessMessageText()).toBe(description + " " + '');
        }));
        it('[Fee Schedules Test]:filter the feeSchedule result', () => __awaiter(this, void 0, void 0, function* () {
            yield feeSchedules.filterFeeSchedules(feeScheduleInfo);
            yield feeSchedules.search();
            yield feeSchedules.clickOnActionGrid(description);
        }));
        it('[Fee Schedules Details]: Add new Fee Schedule Details', () => __awaiter(this, void 0, void 0, function* () {
            yield feeScheduleManagement.navigateToFeeSchedulesDetailsTab();
            yield feeScheduleDetails.navigateAddNewFeeScheduleDetailsForm();
            feeScheduleDetailsInfo.setFeeSchedule(description);
            feeScheduleDetailsInfo.setHCPCS_Code(HCPCS_Code_1.HCPCS_Code.A7034);
            feeScheduleDetailsInfo.setPriceType(FeeSchedulePriceType_1.FeeSchedulePriceType.Purchase);
            let beginDate = commonUtils.getDateFromString(feeScheduleDetailsPropewrties.get('feeScheduleDetail.BeginDate'));
            feeScheduleDetailsInfo.setBegindate(beginDate);
            yield feeScheduleDetails.addFeeScheduleDetailsGernalInfo(feeScheduleDetailsInfo);
            yield expect(yield feeScheduleDetails.successMessagePresent()).toBe(true);
            yield expect(yield feeScheduleDetails.successMessageText()).toBe('');
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlU2NoZWR1bGVNYW5hZ2VtZW50V29ya2Zsb3dUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FkbWluZGFzaGJvYXJkL2ZlZXNjaGVkdWxlYnVja2V0L3dvcmtmbG93L0ZlZVNjaGVkdWxlTWFuYWdlbWVudFdvcmtmbG93VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUVBQThEO0FBQzlELHNFQUFtRTtBQUNuRSw0RkFBeUY7QUFDekYsc0ZBQW1GO0FBQ25GLDRIQUF3SDtBQUN4SCwyRUFBdUU7QUFDdkUsMEdBQXVHO0FBQ3ZHLHNIQUFtSDtBQUNuSCx5RkFBc0Y7QUFDdEYsK0RBQTREO0FBQzVELGtFQUErRDtBQUMvRCxzRkFBbUY7QUFFbkYsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLHNCQUFzQixHQUFHLGdCQUFnQixDQUFDLHFEQUFxRCxDQUFDLENBQUE7QUFFcEcsSUFBSSxXQUFXLEdBQUcsc0JBQXNCLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBO0FBQ2hILElBQUksSUFBSSxHQUFHLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRTFELElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQTtBQUN6QyxlQUFlLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzNDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFN0IsSUFBSSw2QkFBNkIsR0FBRyxnQkFBZ0IsQ0FBQywyREFBMkQsQ0FBQyxDQUFBO0FBQ2pILElBQUksc0JBQXNCLEdBQUcsSUFBSSwrQ0FBc0IsQ0FBQTtBQUN2RCxJ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