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
const DoctorManagementLib_1 = require("../../../../lib/admindashboardpage/doctorsbucket/DoctorManagementLib");
const AdminDashboardBucket_1 = require("../../../../data/enums/AdminDashboardBucket");
const DoctorInfo_1 = require("../../../../data/info/DoctorInfo");
const CommonUtils_1 = require("../../../../utils/CommonUtils");
const DeliveredBy_1 = require("../../../../data/enums/DeliveredBy");
let propertiesReader = require('properties-reader');
let doctorProperties = propertiesReader('ra_automation/data/properties/DoctorInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Add/Update Doctor: Workflow tests', () => __awaiter(this, void 0, void 0, function* () {
    let loginLib;
    let homepageLib;
    let adminDashboardLib;
    let doctorManagementLib;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        loginLib = new LoginLib_1.LoginLib();
        homepageLib = new HomepageLib_1.HomepageLib();
        adminDashboardLib = new AdminDashboardLib_1.AdminDashboardLib();
        doctorManagementLib = new DoctorManagementLib_1.DoctorManagementLib();
        yield loginLib.doBaseLogin();
        yield homepageLib.navigateToAdminDashboardPage();
        yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.DOCTORS);
    })),
        it('[TEST]: Add Doctor - Fill Doctor Info for mandatory fields only', () => __awaiter(this, void 0, void 0, function* () {
            yield doctorManagementLib.navigateToAddNewDoctor();
            let firstname = doctorProperties.get('doctorinfo.firstname') + commonUtils.getTimeStamp();
            let lastname = doctorProperties.get('doctorinfo.lastname');
            let npi = Math.floor(Math.random() * 10000000000);
            let doctorInfo = new DoctorInfo_1.DoctorInfo;
            doctorInfo.setFirstName(firstname);
            doctorInfo.setLastName(lastname);
            doctorInfo.setNpiNumber(npi);
            doctorInfo.setPhone(doctorProperties.get('doctorinfo.phone'));
            doctorInfo.setExt(doctorProperties.get('doctorinfo.ext'));
            doctorInfo.setDeliveredBy(DeliveredBy_1.DeliveredBy.DRIVER);
            yield doctorManagementLib.getAddUpdateNewDoctorFormLib().fillDoctorInfo(doctorInfo);
            yield doctorManagementLib.getAddUpdateNewDoctorFormLib().submit();
            let expectedSuccessMessage = validationMessageProperties.get('success.admindashboard.adddoctor');
            expect(yield doctorManagementLib.getAddUpdateNewDoctorFormLib().getSuccessMessageText()).toBe(expectedSuccessMessage);
        }));
    it('[TEST]: Verify NPI Registry Search', () => __awaiter(this, void 0, void 0, function* () {
        yield doctorManagementLib.navigateToAddNewDoctor();
        let firstname = doctorProperties.get('doctorinfo.firstname') + commonUtils.getTimeStamp();
        let lastname = doctorProperties.get('doctorinfo.lastname');
        let npi = Math.floor(Math.random() * 10000000000);
        let doctorInfo = new DoctorInfo_1.DoctorInfo;
        doctorInfo.setFirstName(firstname);
        doctorInfo.setLastName(lastname);
        doctorInfo.setNpiNumber(npi);
        doctorInfo.setPhone(doctorProperties.get('doctorinfo.phone'));
        doctorInfo.setExt(doctorProperties.get('doctorinfo.ext'));
        doctorInfo.setDeliveredBy(DeliveredBy_1.DeliveredBy.DRIVER);
        yield doctorManagementLib.getAddUpdateNewDoctorFormLib().fillDoctorInfo(doctorInfo);
        yield doctorManagementLib.getAddUpdateNewDoctorFormLib().submit();
        yield doctorManagementLib.getAddUpdateNewDoctorFormLib().navigateBackToDoctorManagementPage();
        yield doctorManagementLib.navigateToNPIRegistrySearch();
        yield doctorManagementLib.getNPIRegistrySearchLib().searchUsingFirstNameFilter(firstname);
        yield doctorManagementLib.getNPIRegistrySearchLib().searchUsingLastNameFilter(lastname);
        yield doctorManagementLib.getNPIRegistrySearchLib().searchUsingNPINumberFilter(npi);
        yield doctorManagementLib.getNPIRegistrySearchLib().search();
        expect(yield doctorManagementLib.getNPIRegistrySearchLib().getTotalPatientsCount()).toBe(1);
    }));
    it('[TEST]: Update Doctor - ', () => __awaiter(this, void 0, void 0, function* () {
        yield doctorManagementLib.navigateToAddNewDoctor();
        let firstname = doctorProperties.get('doctorinfo.firstname') + commonUtils.getTimeStamp();
        let lastname = doctorProperties.get('doctorinfo.lastname');
        let npi = Math.floor(Math.random() * 10000000000);
        let doctorInfo = new DoctorInfo_1.DoctorInfo;
        doctorInfo.setFirstName(firstname);
        doctorInfo.setLastName(lastname);
        doctorInfo.setNpiNumber(npi);
        doctorInfo.setPhone(doctorProperties.get('doctorinfo.phone'));
        doctorInfo.setExt(doctorProperties.get('doctorinfo.ext'));
        doctorInfo.setDeliveredBy(DeliveredBy_1.DeliveredBy.DRIVER);
        yield doctorManagementLib.getAddUpdateNewDoctorFormLib().fillDoctorInfo(doctorInfo);
        yield doctorManagementLib.getAddUpdateNewDoctorFormLib().submit();
        yield doctorManagementLib.getAddUpdateNewDoctorFormLib().navigateBackToDoctorManagementPage();
        yield doctorManagementLib.updateDoctor(firstname, lastname, npi);
        let updateDoctorInfo = new DoctorInfo_1.DoctorInfo();
        updateDoctorInfo.setAddress1(doctorProperties.get('doctorinfo.addressone'));
        updateDoctorInfo.setAddress2(doctorProperties.get('doctorinfo.addresstwo'));
        yield doctorManagementLib.getAddUpdateNewDoctorFormLib().fillDoctorInfo(updateDoctorInfo);
        yield doctorManagementLib.getAddUpdateNewDoctorFormLib().submit();
        let expectedSuccessMessage = validationMessageProperties.get('success.admindashboard.updatedoctor');
        expect(yield doctorManagementLib.getAddUpdateNewDoctorFormLib().getSuccessMessageText()).toBe(expectedSuccessMessage);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdG9yTWFuYWdlbWVudFdvcmtmbG93VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy9hZG1pbmRhc2hib2FyZC9kb2N0b3JzYnVja2V0L3dvcmtmbG93L0RvY3Rvck1hbmFnZW1lbnRXb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlFQUE4RDtBQUM5RCxzRUFBbUU7QUFDbkUsNEZBQXlGO0FBQ3pGLDhHQUEyRztBQUMzRyxzRkFBbUY7QUFDbkYsaUVBQThEO0FBQzlELCtEQUE0RDtBQUM1RCxvRUFBaUU7QUFFakUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLCtDQUErQyxDQUFDLENBQUM7QUFDekYsSUFBSSwyQkFBMkIsR0FBRyxnQkFBZ0IsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0FBQzVHLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXBDLFFBQVEsQ0FBQywyQ0FBMkMsRUFBRSxHQUFTLEVBQUU7SUFDN0QsSUFBSSxRQUFpQixDQUFDO0lBQ3RCLElBQUksV0FBdUIsQ0FBQztJQUM1QixJQUFJLGlCQUFtQyxDQUFDO0lBQ3hDLElBQUksbUJBQXVDLENBQUM7SUFFNUMsVUFBVSxDQUFDLEdBQVMsRUFBRTtRQUNsQixRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDMUIsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ2hDLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztRQUM1QyxtQkFBbUIsR0FBRyxJQUFJLHlDQUFtQixFQUFFLENBQUM7UUFFaEQsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsTUFBTSxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FB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