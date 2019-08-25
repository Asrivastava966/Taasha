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
const TechnicianManagementLib_1 = require("../../../../lib/admindashboardpage/techniciansbucket/TechnicianManagementLib");
const TechnicianInfo_1 = require("../../../../data/info/TechnicianInfo");
let propertiesReader = require('properties-reader');
let userInfoProperties = propertiesReader('ra_automation/data/properties/UserInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Admin Dashboard > Technicians bucket: Workflow tests', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let loginLib;
        let homepageLib;
        let adminDashboardLib;
        let userManagementLib;
        let user;
        let userInfo;
        let technicianManagementLib;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                loginLib = new LoginLib_1.LoginLib();
                homepageLib = new HomepageLib_1.HomepageLib();
                adminDashboardLib = new AdminDashboardLib_1.AdminDashboardLib();
                userManagementLib = new UserManagementLib_1.UserManagementLib();
                user = new User_1.User(UserType_1.UserType.TECHNICIANS);
                technicianManagementLib = new TechnicianManagementLib_1.TechnicianManagementLib();
                yield loginLib.doBaseLogin();
                yield homepageLib.navigateToAdminDashboardPage();
                yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.USERS);
                yield userManagementLib.navigateToAddNewUserFormPage();
            });
        });
        it('[TEST]: Add a Technician with only mandatory fields', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let technicianInfo = yield user.addBaseUser();
                let expectedValidationMessage = validationMessagesProperties.get('success.adduser');
                yield expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);
                yield userManagementLib.navigateBackToUsersGridPage();
                yield userManagementLib.navigateBackToAdminDashboardPage();
                yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.TECHNICIANS);
                yield technicianManagementLib.filterByName(technicianInfo.getFirstName());
                let firstRowIndex = 1;
                let expectedName = technicianInfo.getLastName() + ', ' + technicianInfo.getFirstName();
                expect(yield technicianManagementLib.getName(firstRowIndex)).toBe(expectedName);
            });
        });
        it('[TEST]: Update info of an existing Technician', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let technicianInfo = yield user.addBaseUser();
                let expectedValidationMessage = validationMessagesProperties.get('success.adduser');
                yield expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);
                yield userManagementLib.navigateBackToUsersGridPage();
                yield userManagementLib.navigateBackToAdminDashboardPage();
                yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.TECHNICIANS);
                yield technicianManagementLib.updateTechnician(technicianInfo.getFirstName());
                let updateTechnicianInfo = new TechnicianInfo_1.TechnicianInfo();
                updateTechnicianInfo.setNotes('test');
                yield technicianManagementLib.fillTechnicianInfo(updateTechnicianInfo);
                yield technicianManagementLib.update();
                expect(yield technicianManagementLib.getSuccessMessage()).toBe(validationMessagesProperties.get('success.admindashboard.updatetechnician'));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVjaG5pY2lhbk1hbmFnZW1lbnRXb3JrZmxvd1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvYWRtaW5kYXNoYm9hcmQvdGVjaG5pY2lhbnNidWNrZXQvd29ya2Zsb3cvVGVjaG5pY2lhbk1hbmFnZW1lbnRXb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlFQUE4RDtBQUM5RCxzRUFBbUU7QUFDbkUseURBQXNEO0FBQ3RELDhEQUEyRDtBQUMzRCw0RkFBeUY7QUFDekYsc0ZBQW1GO0FBQ25GLHdHQUFxRztBQUVyRywwSEFBdUg7QUFDdkgseUVBQXNFO0FBRXRFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0FBQ3pGLElBQUksNEJBQTRCLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUU3RyxRQUFRLENBQUMsOERBQThELEVBQUU7O1FBQ3JFLElBQUksUUFBa0IsQ0FBQztRQUN2QixJQUFJLFdBQXdCLENBQUM7UUFDN0IsSUFBSSxpQkFBb0MsQ0FBQztRQUN6QyxJQUFJLGlCQUFvQyxDQUFDO1FBQ3pDLElBQUksSUFBUyxDQUFDO1FBQ2QsSUFBSSxRQUFpQixDQUFDO1FBQ3RCLElBQUksdUJBQStDLENBQUM7UUFFcEQsVUFBVSxDQUFDOztnQkFDUCxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7Z0JBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztnQkFDaEMsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO2dCQUM1QyxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7Z0JBQzVDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxtQkFBUSxD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