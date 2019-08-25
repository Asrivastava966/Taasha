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
const User_1 = require("../../../../data/basedata/User");
const UserType_1 = require("../../../../data/enums/UserType");
const AdminDashboardLib_1 = require("../../../../lib/admindashboardpage/AdminDashboardLib");
const AdminDashboardBucket_1 = require("../../../../data/enums/AdminDashboardBucket");
const UserManagementLib_1 = require("../../../../lib/admindashboardpage/usersbucket/UserManagementLib");
const SalesRepManagementLib_1 = require("../../../../lib/admindashboardpage/salesrepbucket/SalesRepManagementLib");
const SalesRepInfo_1 = require("../../../../data/info/SalesRepInfo");
let propertiesReader = require('properties-reader');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Admin Dashboard > Sales Rep. bucket: Workflow tests', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let loginLib;
        let homepageLib;
        let adminDashboardLib;
        let userManagementLib;
        let user;
        let salesRepManagementLib;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                loginLib = new LoginLib_1.LoginLib();
                homepageLib = new HomepageLib_1.HomepageLib();
                adminDashboardLib = new AdminDashboardLib_1.AdminDashboardLib();
                userManagementLib = new UserManagementLib_1.UserManagementLib();
                user = new User_1.User(UserType_1.UserType.SALES_REP);
                salesRepManagementLib = new SalesRepManagementLib_1.SalesRepManagementLib();
                yield loginLib.doBaseLogin();
                yield homepageLib.navigateToAdminDashboardPage();
                yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.USERS);
                yield userManagementLib.navigateToAddNewUserFormPage();
            });
        });
        it('[TEST]: Add a Sales Rep. with only mandatory fields', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let salesRepInfo = yield user.addBaseUser();
                let expectedValidationMessage = validationMessagesProperties.get('success.adduser');
                yield expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);
                yield userManagementLib.navigateBackToUsersGridPage();
                yield userManagementLib.navigateBackToAdminDashboardPage();
                yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.SALES_REP);
                yield salesRepManagementLib.filterByName(salesRepInfo.getFirstName());
                let firstRowIndex = 1;
                let expectedName = salesRepInfo.getLastName() + ', ' + salesRepInfo.getFirstName();
                expect(yield salesRepManagementLib.getName(firstRowIndex)).toBe(expectedName);
            });
        });
        it('[TEST]: Update info of an existing Sales Rep.', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let salesRepInfo = yield user.addBaseUser();
                let expectedValidationMessage = validationMessagesProperties.get('success.adduser');
                yield expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);
                yield userManagementLib.navigateBackToUsersGridPage();
                yield userManagementLib.navigateBackToAdminDashboardPage();
                yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.SALES_REP);
                yield salesRepManagementLib.updateSalesRep(salesRepInfo.getFirstName());
                let updateSalesRepInfo = new SalesRepInfo_1.SalesRepInfo();
                updateSalesRepInfo.setLegacySalesID('12345');
                yield salesRepManagementLib.fillSalesRepInfo(updateSalesRepInfo);
                yield salesRepManagementLib.update();
                expect(yield salesRepManagementLib.getSuccessMessage()).toBe(validationMessagesProperties.get('success.admindashboard.updatesalesrep'));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FsZXNSZXBNYW5hZ2VtZW50V29ya2Zsb3dUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FkbWluZGFzaGJvYXJkL3NhbGVzcmVwYnVja2V0L3dvcmtmbG93L1NhbGVzUmVwTWFuYWdlbWVudFdvcmtmbG93VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUVBQThEO0FBQzlELHNFQUFtRTtBQUNuRSx5REFBc0Q7QUFDdEQsOERBQTJEO0FBQzNELDRGQUF5RjtBQUN6RixzRkFBbUY7QUFDbkYsd0dBQXFHO0FBQ3JHLG1IQUFnSDtBQUNoSCxxRUFBa0U7QUFFbEUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLDRCQUE0QixHQUFHLGdCQUFnQixDQUFDLHVEQUF1RCxDQUFDLENBQUM7QUFFN0csUUFBUSxDQUFDLDZEQUE2RCxFQUFFOztRQUNwRSxJQUFJLFFBQWtCLENBQUM7UUFDdkIsSUFBSSxXQUF3QixDQUFDO1FBQzdCLElBQUksaUJBQW9DLENBQUM7UUFDekMsSUFBSSxpQkFBb0MsQ0FBQztRQUN6QyxJQUFJLElBQVMsQ0FBQztRQUNkLElBQUkscUJBQTJDLENBQUM7UUFFaEQsVUFBVSxDQUFDOztnQkFDUCxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7Z0JBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztnQkFDaEMsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO2dCQUM1QyxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7Z0JBQzVDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwQyxxQkFBcUIsR0FBRyxJQUFJLDZDQUFxQixFQUFFLENBQUM7Z0JBRXBELE1BQU0sUUFBUSxDQUFD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