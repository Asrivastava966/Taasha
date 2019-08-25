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
const InsuranceProviderManagementLib_1 = require("../../../../lib/admindashboardpage/insuranceproviderbucket/InsuranceProviderManagementLib");
const InsuranceProvider_1 = require("../../../../data/basedata/InsuranceProvider");
const InsuranceProviderInfo_1 = require("../../../../data/info/InsuranceProviderInfo");
let propertiesReader = require('properties-reader');
let insuranceProviderInfoProperties = propertiesReader('ra_automation/data/properties/InsuranceProviderInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Admin Dashboard > Insurance Provider bucket: Workflow tests', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let loginLib;
        let homepageLib;
        let adminDashboardLib;
        let insuranceProviderManagementLib;
        let insuranceProvider;
        let insuranceProviderInfo;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                loginLib = new LoginLib_1.LoginLib();
                homepageLib = new HomepageLib_1.HomepageLib();
                adminDashboardLib = new AdminDashboardLib_1.AdminDashboardLib();
                insuranceProviderManagementLib = new InsuranceProviderManagementLib_1.InsuranceProviderManagementLib();
                insuranceProvider = new InsuranceProvider_1.InsuranceProvider();
                insuranceProviderInfo = new InsuranceProviderInfo_1.InsuranceProviderInfo();
                yield loginLib.doBaseLogin();
                yield homepageLib.navigateToAdminDashboardPage();
                yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.INSURANCE_PROVIDER);
            });
        });
        it('[TEST]: Add an Insurance Provider with only mandatory fields', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield insuranceProviderManagementLib.navigateToAddNewProviderForm();
                insuranceProviderInfo = yield insuranceProvider.addBaseInsuranceProvider(true);
                let expectedSuccessMessage = (yield insuranceProviderInfo.getProviderName()) + ' ' + validationMessagesProperties.get('success.admindashboard.addinsuranceprovider');
                expect(yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().getSuccessMessage()).toBe(expectedSuccessMessage);
            });
        });
        it('[TEST]: Update info of an existing Insurance Provider', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield insuranceProviderManagementLib.navigateToAddNewProviderForm();
                insuranceProviderInfo = yield insuranceProvider.addBaseInsuranceProvider(true);
                let expectedSuccessMessage = (yield insuranceProviderInfo.getProviderName()) + ' ' + validationMessagesProperties.get('success.admindashboard.addinsuranceprovider');
                expect(yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().getSuccessMessage()).toBe(expectedSuccessMessage);
                yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().navigateBackToInsuranceProvidersGridPage();
                yield insuranceProviderManagementLib.updateInsuranceProvider(insuranceProviderInfo);
                let updateInsuranceProviderInfo = new InsuranceProviderInfo_1.InsuranceProviderInfo();
                updateInsuranceProviderInfo.setNotes(insuranceProviderInfoProperties.get('insuranceproviderinfo.notes'));
                updateInsuranceProviderInfo.setPhoneNumber(insuranceProviderInfoProperties.get('insuranceproviderinfo.phonenumber'));
                updateInsuranceProviderInfo.setPhoneExtNumber(insuranceProviderInfoProperties.get('insuranceproviderinfo.phoneextnumber'));
                updateInsuranceProviderInfo.setEmail(insuranceProviderInfoProperties.get('insuranceproviderinfo.email'));
                yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().fillInsuranceProviderInsuranceNote(updateInsuranceProviderInfo);
                yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().fillInsuranceProviderContactInfo(updateInsuranceProviderInfo);
                yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().update();
                let expectedUpdateSuccessMessage = (yield insuranceProviderInfo.getProviderName()) + ' ' + validationMessagesProperties.get('success.admindashboard.updateinsuranceprovider');
                expect(yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().getSuccessMessage()).toBe(expectedUpdateSuccessMessage);
            });
        });
        it('[TEST]: Delete Insurance Provider', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield insuranceProviderManagementLib.navigateToAddNewProviderForm();
                insuranceProviderInfo = yield insuranceProvider.addBaseInsuranceProvider(true);
                let expectedSuccessMessage = insuranceProviderInfo.getProviderName() + ' ' + validationMessagesProperties.get('success.admindashboard.addinsuranceprovider');
                expect(yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().getSuccessMessage()).toBe(expectedSuccessMessage);
                yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().navigateBackToInsuranceProvidersGridPage();
                yield insuranceProviderManagementLib.deleteInsuranceProvider(insuranceProviderInfo);
                let expectedConfirmationModalDialogMessage = validationMessagesProperties.get('confirmation.modal.deleteinsuranceprovider') + ' (' + insuranceProviderInfo.getProviderName() + ')?';
                expect(yield insuranceProviderManagementLib.getDeleteInsProviderConfirmationModalMessage()).toBe(expectedConfirmationModalDialogMessage);
                let expectedNoInsProviderFoundValidationMessage = validationMessagesProperties.get('validation.admindashboard.insprovider.noinsproviderfound');
                yield insuranceProviderManagementLib.deleteInsProviderConfirmYes();
                yield insuranceProviderManagementLib.filterByInsuranceProviderInfo(insuranceProviderInfo);
                expect(yield insuranceProviderManagementLib.getNoInsProviderFoundValidationMessage()).toBe(expectedNoInsProviderFoundValidationMessage);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlUHJvdmlkZXJNYW5hZ2VtZW50V29ya2Zsb3dUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FkbWluZGFzaGJvYXJkL2luc3VyYW5jZXByb3ZpZGVyYnVja2V0L3dvcmtmbG93L0luc3VyYW5jZVByb3ZpZGVyTWFuYWdlbWVudFdvcmtmbG93VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUVBQThEO0FBQzlELHNFQUFtRTtBQUNuRSw0RkFBeUY7QUFDekYsc0ZBQW1GO0FBQ25GLDhJQUEySTtBQUMzSSxtRkFBZ0Y7QUFDaEYsdUZBQW9GO0FBRXBGLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSwrQkFBK0IsR0FBRyxnQkFBZ0IsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0FBQ25ILElBQUksNEJBQTRCLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUU3RyxRQUFRLENBQUMscUVBQXFFLEVBQUU7O1FBQzVFLElBQUksUUFBa0IsQ0FBQztRQUN2QixJQUFJLFdBQXdCLENBQUM7UUFDN0IsSUFBSSxpQkFBb0MsQ0FBQztRQUN6QyxJQUFJLDhCQUE2RCxDQUFDO1FBQ2xFLElBQUksaUJBQW1DLENBQUM7UUFDeEMsSUFBSSxxQkFBMkMsQ0FBQztRQUVoRCxVQUFVLENBQUM7O2dCQUNQLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztnQkFDMUIsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO2dCQUNoQyxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7Z0JBQzVDLDhCQUE4QixHQUFHLElBQUksK0RBQThCLEVBQUUsQ0FBQztnQkFDdEUsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO2dCQUM1QyxxQkFBcUIsR0FBRyxJQUFJ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