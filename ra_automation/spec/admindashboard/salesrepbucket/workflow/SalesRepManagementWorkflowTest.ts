import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { User } from "../../../../data/basedata/User";
import { UserType } from "../../../../data/enums/UserType";
import { AdminDashboardLib } from "../../../../lib/admindashboardpage/AdminDashboardLib";
import { AdminDashboardBucket } from "../../../../data/enums/AdminDashboardBucket";
import { UserManagementLib } from "../../../../lib/admindashboardpage/usersbucket/UserManagementLib";
import { SalesRepManagementLib } from "../../../../lib/admindashboardpage/salesrepbucket/SalesRepManagementLib";
import { SalesRepInfo } from "../../../../data/info/SalesRepInfo";

let propertiesReader = require('properties-reader');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Admin Dashboard > Sales Rep. bucket: Workflow tests', async function() {
    let loginLib: LoginLib;
    let homepageLib: HomepageLib;
    let adminDashboardLib: AdminDashboardLib;
    let userManagementLib: UserManagementLib;
    let user:User;
    let salesRepManagementLib:SalesRepManagementLib;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        adminDashboardLib = new AdminDashboardLib();
        userManagementLib = new UserManagementLib();
        user = new User(UserType.SALES_REP);
        salesRepManagementLib = new SalesRepManagementLib();

        await loginLib.doBaseLogin();
        await homepageLib.navigateToAdminDashboardPage();
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.USERS);
        await userManagementLib.navigateToAddNewUserFormPage();
    });

    it('[TEST]: Add a Sales Rep. with only mandatory fields', async function() {
        let salesRepInfo = await user.addBaseUser();
        let expectedValidationMessage:string = validationMessagesProperties.get('success.adduser');
        await expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);

        await userManagementLib.navigateBackToUsersGridPage();
        await userManagementLib.navigateBackToAdminDashboardPage();
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.SALES_REP);
        await salesRepManagementLib.filterByName(salesRepInfo.getFirstName());

        let firstRowIndex = 1;
        let expectedName = salesRepInfo.getLastName() + ', ' + salesRepInfo.getFirstName();
        expect(await salesRepManagementLib.getName(firstRowIndex)).toBe(expectedName);
    });

    it('[TEST]: Update info of an existing Sales Rep.', async function() {
        let salesRepInfo = await user.addBaseUser();
        let expectedValidationMessage:string = validationMessagesProperties.get('success.adduser');
        await expect(userManagementLib.getSuccessMessage()).toEqual(expectedValidationMessage);

        await userManagementLib.navigateBackToUsersGridPage();
        await userManagementLib.navigateBackToAdminDashboardPage();
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.SALES_REP);
        await salesRepManagementLib.updateSalesRep(salesRepInfo.getFirstName());
        
        let updateSalesRepInfo = new SalesRepInfo();
        updateSalesRepInfo.setLegacySalesID('12345');
        
        await salesRepManagementLib.fillSalesRepInfo(updateSalesRepInfo);
        await salesRepManagementLib.update();
        
        expect(await salesRepManagementLib.getSuccessMessage()).toBe(validationMessagesProperties.get('success.admindashboard.updatesalesrep'));
    });
});
