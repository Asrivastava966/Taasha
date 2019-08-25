import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { User } from "../../../../data/basedata/User";
import { UserType } from "../../../../data/enums/UserType";
import { AdminDashboardLib } from "../../../../lib/admindashboardpage/AdminDashboardLib";
import { AdminDashboardBucket } from "../../../../data/enums/AdminDashboardBucket";
import { UserManagementLib } from "../../../../lib/admindashboardpage/usersbucket/UserManagementLib";
import { UserInfo } from "../../../../data/info/UserInfo";
import { TechnicianManagementLib } from "../../../../lib/admindashboardpage/techniciansbucket/TechnicianManagementLib";
import { TechnicianInfo } from "../../../../data/info/TechnicianInfo";

let propertiesReader = require('properties-reader');
let userInfoProperties = propertiesReader('ra_automation/data/properties/UserInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Admin Dashboard > Technicians bucket: Workflow tests', async function() {
    let loginLib: LoginLib;
    let homepageLib: HomepageLib;
    let adminDashboardLib: AdminDashboardLib;
    let userManagementLib: UserManagementLib;
    let user:User;
    let userInfo:UserInfo;
    let technicianManagementLib:TechnicianManagementLib;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        adminDashboardLib = new AdminDashboardLib();
        userManagementLib = new UserManagementLib();
        user = new User(UserType.TECHNICIANS);
        technicianManagementLib = new TechnicianManagementLib();

        await loginLib.doBaseLogin();
        await homepageLib.navigateToAdminDashboardPage();
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.USERS);
        await userManagementLib.navigateToAddNewUserFormPage();
    });

    it('[TEST]: Add a Technician with only mandatory fields', async function() {
        let technicianInfo = await user.addBaseUser();
        let expectedValidationMessage:string = validationMessagesProperties.get('success.adduser');
        await expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);

        await userManagementLib.navigateBackToUsersGridPage();
        await userManagementLib.navigateBackToAdminDashboardPage();
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.TECHNICIANS);
        await technicianManagementLib.filterByName(technicianInfo.getFirstName());

        let firstRowIndex = 1;
        let expectedName = technicianInfo.getLastName() + ', ' + technicianInfo.getFirstName();
        expect(await technicianManagementLib.getName(firstRowIndex)).toBe(expectedName);
    });

    it('[TEST]: Update info of an existing Technician', async function() {
        let technicianInfo = await user.addBaseUser();
        let expectedValidationMessage:string = validationMessagesProperties.get('success.adduser');
        await expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);

        await userManagementLib.navigateBackToUsersGridPage();
        await userManagementLib.navigateBackToAdminDashboardPage();
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.TECHNICIANS);
        await technicianManagementLib.updateTechnician(technicianInfo.getFirstName());
        
        let updateTechnicianInfo = new TechnicianInfo();
        updateTechnicianInfo.setNotes('test');
        await technicianManagementLib.fillTechnicianInfo(updateTechnicianInfo);
        await technicianManagementLib.update();
        
        expect(await technicianManagementLib.getSuccessMessage()).toBe(validationMessagesProperties.get('success.admindashboard.updatetechnician'));
    });
});
