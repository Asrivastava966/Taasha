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
let propertiesReader = require('properties-reader');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Admin Dashboard > Users bucket: Workflow tests', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let loginLib;
        let homepageLib;
        let adminDashboardLib;
        let userManagementLib;
        let user;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                loginLib = new LoginLib_1.LoginLib();
                homepageLib = new HomepageLib_1.HomepageLib();
                adminDashboardLib = new AdminDashboardLib_1.AdminDashboardLib();
                userManagementLib = new UserManagementLib_1.UserManagementLib();
                yield loginLib.doBaseLogin();
                yield homepageLib.navigateToAdminDashboardPage();
                yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.USERS);
                yield userManagementLib.navigateToAddNewUserFormPage();
            });
        });
        it('[TEST]: Add a Normal User with only mandatory fields', function () {
            return __awaiter(this, void 0, void 0, function* () {
                user = new User_1.User(UserType_1.UserType.NORMAL_USER);
                yield user.addBaseUser();
                let expectedValidationMessage = validationMessagesProperties.get('success.adduser');
                yield expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);
            });
        });
        it('[TEST]: Add an Admin User with only mandatory fields', function () {
            return __awaiter(this, void 0, void 0, function* () {
                user = new User_1.User(UserType_1.UserType.ADMIN);
                yield user.addBaseUser();
                let expectedValidationMessage = validationMessagesProperties.get('success.adduser');
                yield expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1hbmFnZW1lbnRXb3JrZmxvd1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvYWRtaW5kYXNoYm9hcmQvdXNlcnNidWNrZXQvd29ya2Zsb3cvVXNlck1hbmFnZW1lbnRXb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlFQUE4RDtBQUM5RCxzRUFBbUU7QUFDbkUseURBQXNEO0FBQ3RELDhEQUEyRDtBQUMzRCw0RkFBeUY7QUFDekYsc0ZBQW1GO0FBQ25GLHdHQUFxRztBQUVyRyxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksNEJBQTRCLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUU3RyxRQUFRLENBQUMsd0RBQXdELEVBQUU7O1FBQy9ELElBQUksUUFBa0IsQ0FBQztRQUN2QixJQUFJLFdBQXdCLENBQUM7UUFDN0IsSUFBSSxpQkFBb0MsQ0FBQztRQUN6QyxJQUFJLGlCQUFvQyxDQUFDO1FBQ3pDLElBQUksSUFBUyxDQUFDO1FBRWQsVUFBVSxDQUFDOztnQkFDUCxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7Z0JBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztnQkFDaEMsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO2dCQUM1QyxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7Z0JBRTVDLE1BQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM3QixNQUFNLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO2dCQUNqRCxNQUFNLGlCQUFpQixDQUFDLDhCQUE4QixDQUFDLDJDQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuRixNQUFNLGlCQUFpQixDQUFDLDRCQUE0QixFQUFFLENBQUM7WUFDM0QsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxzREFBc0QsRUFBRTs7Z0JBQ3ZELElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFekIsSUFBSSx5QkFBeUIsR0FBVSw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDM0YsTUFBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzNGLENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUU7O2dCQUN2RCxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsbUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRXpCLElBQUkseUJBQXlCLEdBQVUsNEJBQTRCLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzNGLE1BQU0sTUFBTSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUMzRixDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9