import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { User } from "../../../../data/basedata/User";
import { UserType } from "../../../../data/enums/UserType";
import { AdminDashboardLib } from "../../../../lib/admindashboardpage/AdminDashboardLib";
import { AdminDashboardBucket } from "../../../../data/enums/AdminDashboardBucket";
import { UserManagementLib } from "../../../../lib/admindashboardpage/usersbucket/UserManagementLib";

let propertiesReader = require('properties-reader');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Admin Dashboard > Users bucket: Workflow tests', async function() {
    let loginLib: LoginLib;
    let homepageLib: HomepageLib;
    let adminDashboardLib: AdminDashboardLib;
    let userManagementLib: UserManagementLib;
    let user:User;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        adminDashboardLib = new AdminDashboardLib();
        userManagementLib = new UserManagementLib();

        await loginLib.doBaseLogin();
        await homepageLib.navigateToAdminDashboardPage();
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.USERS);
        await userManagementLib.navigateToAddNewUserFormPage();
    });

    it('[TEST]: Add a Normal User with only mandatory fields', async function() {
        user = new User(UserType.NORMAL_USER);
        await user.addBaseUser();
        
        let expectedValidationMessage:string = validationMessagesProperties.get('success.adduser');
        await expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);
    });

    it('[TEST]: Add an Admin User with only mandatory fields', async function() {
        user = new User(UserType.ADMIN);
        await user.addBaseUser();
        
        let expectedValidationMessage:string = validationMessagesProperties.get('success.adduser');
        await expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);
    });
});
