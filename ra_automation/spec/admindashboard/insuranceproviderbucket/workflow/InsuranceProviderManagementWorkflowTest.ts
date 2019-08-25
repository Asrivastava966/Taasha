import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AdminDashboardLib } from "../../../../lib/admindashboardpage/AdminDashboardLib";
import { AdminDashboardBucket } from "../../../../data/enums/AdminDashboardBucket";
import { InsuranceProviderManagementLib } from "../../../../lib/admindashboardpage/insuranceproviderbucket/InsuranceProviderManagementLib";
import { InsuranceProvider } from "../../../../data/basedata/InsuranceProvider";
import { InsuranceProviderInfo } from "../../../../data/info/InsuranceProviderInfo";

let propertiesReader = require('properties-reader');
let insuranceProviderInfoProperties = propertiesReader('ra_automation/data/properties/InsuranceProviderInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Admin Dashboard > Insurance Provider bucket: Workflow tests', async function() {
    let loginLib: LoginLib;
    let homepageLib: HomepageLib;
    let adminDashboardLib: AdminDashboardLib;
    let insuranceProviderManagementLib:InsuranceProviderManagementLib;
    let insuranceProvider:InsuranceProvider;
    let insuranceProviderInfo:InsuranceProviderInfo;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        adminDashboardLib = new AdminDashboardLib();
        insuranceProviderManagementLib = new InsuranceProviderManagementLib();
        insuranceProvider = new InsuranceProvider();
        insuranceProviderInfo = new InsuranceProviderInfo();

        await loginLib.doBaseLogin();
        await homepageLib.navigateToAdminDashboardPage();
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.INSURANCE_PROVIDER);
    });

    it('[TEST]: Add an Insurance Provider with only mandatory fields', async function() {
        await insuranceProviderManagementLib.navigateToAddNewProviderForm();
        insuranceProviderInfo = await insuranceProvider.addBaseInsuranceProvider(true);
        
        let expectedSuccessMessage =await insuranceProviderInfo.getProviderName() + ' ' + validationMessagesProperties.get('success.admindashboard.addinsuranceprovider');
        expect(await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().getSuccessMessage()).toBe(expectedSuccessMessage);
    });

    it('[TEST]: Update info of an existing Insurance Provider', async function() {
        await insuranceProviderManagementLib.navigateToAddNewProviderForm();
        insuranceProviderInfo = await insuranceProvider.addBaseInsuranceProvider(true);
        
        let expectedSuccessMessage = await insuranceProviderInfo.getProviderName() + ' ' + validationMessagesProperties.get('success.admindashboard.addinsuranceprovider');
        expect(await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().getSuccessMessage()).toBe(expectedSuccessMessage);

        await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().navigateBackToInsuranceProvidersGridPage();
        await insuranceProviderManagementLib.updateInsuranceProvider(insuranceProviderInfo);

        let updateInsuranceProviderInfo = new InsuranceProviderInfo();
        updateInsuranceProviderInfo.setNotes(insuranceProviderInfoProperties.get('insuranceproviderinfo.notes'));
        updateInsuranceProviderInfo.setPhoneNumber(insuranceProviderInfoProperties.get('insuranceproviderinfo.phonenumber'));
        updateInsuranceProviderInfo.setPhoneExtNumber(insuranceProviderInfoProperties.get('insuranceproviderinfo.phoneextnumber'));
        updateInsuranceProviderInfo.setEmail(insuranceProviderInfoProperties.get('insuranceproviderinfo.email'));
        await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().fillInsuranceProviderInsuranceNote(updateInsuranceProviderInfo);
        await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().fillInsuranceProviderContactInfo(updateInsuranceProviderInfo);
        await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().update();

        let expectedUpdateSuccessMessage =await insuranceProviderInfo.getProviderName() + ' ' + validationMessagesProperties.get('success.admindashboard.updateinsuranceprovider');
        expect(await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().getSuccessMessage()).toBe(expectedUpdateSuccessMessage);
    });

    it('[TEST]: Delete Insurance Provider', async function() {
        await insuranceProviderManagementLib.navigateToAddNewProviderForm();
        insuranceProviderInfo = await insuranceProvider.addBaseInsuranceProvider(true);
        
        let expectedSuccessMessage = insuranceProviderInfo.getProviderName() + ' ' + validationMessagesProperties.get('success.admindashboard.addinsuranceprovider');
        expect(await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().getSuccessMessage()).toBe(expectedSuccessMessage);

        await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().navigateBackToInsuranceProvidersGridPage();
        await insuranceProviderManagementLib.deleteInsuranceProvider(insuranceProviderInfo);

        let expectedConfirmationModalDialogMessage = validationMessagesProperties.get('confirmation.modal.deleteinsuranceprovider') + ' (' + insuranceProviderInfo.getProviderName() + ')?';
        expect(await insuranceProviderManagementLib.getDeleteInsProviderConfirmationModalMessage()).toBe(expectedConfirmationModalDialogMessage);

        let expectedNoInsProviderFoundValidationMessage = validationMessagesProperties.get('validation.admindashboard.insprovider.noinsproviderfound');
        await insuranceProviderManagementLib.deleteInsProviderConfirmYes();
        await insuranceProviderManagementLib.filterByInsuranceProviderInfo(insuranceProviderInfo);
        expect(await insuranceProviderManagementLib.getNoInsProviderFoundValidationMessage()).toBe(expectedNoInsProviderFoundValidationMessage);
    });
});
