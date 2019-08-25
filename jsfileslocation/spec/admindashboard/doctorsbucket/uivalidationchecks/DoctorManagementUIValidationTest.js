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
describe('[SPEC]: Add/Update Doctor: UI Validation tests', () => __awaiter(this, void 0, void 0, function* () {
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
        it('[TEST]: Add Doctor - Try to create duplicate doctor', () => __awaiter(this, void 0, void 0, function* () {
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
            yield doctorManagementLib.navigateToAddNewDoctor();
            yield doctorManagementLib.getAddUpdateNewDoctorFormLib().fillDoctorInfo(doctorInfo);
            yield doctorManagementLib.getAddUpdateNewDoctorFormLib().submit();
            // let expectedValidationMessage ="Physician Name: "+lastname+", "+firstname+" NPI# "+npi +" "+validationMessageProperties.get('validation.admindashboard.doctors.duplicatedoctor')+", " +"Physician with NPI# " + npi +" " + validationMessageProperties.get('validation.admindashboard.doctors.duplicatedoctor');
            let expectedValidation = "Physician with NPI# " + npi + " " + validationMessageProperties.get('validation.admindashboard.doctors.duplicatedoctor');
            yield expect(expectedValidation).toBe(doctorManagementLib.getAddUpdateNewDoctorFormLib().getDuplicateDoctorValidationMessage());
        }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdG9yTWFuYWdlbWVudFVJVmFsaWRhdGlvblRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvYWRtaW5kYXNoYm9hcmQvZG9jdG9yc2J1Y2tldC91aXZhbGlkYXRpb25jaGVja3MvRG9jdG9yTWFuYWdlbWVudFVJVmFsaWRhdGlvblRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlFQUE4RDtBQUM5RCxzRUFBbUU7QUFDbkUsNEZBQXlGO0FBQ3pGLDhHQUEyRztBQUMzRyxzRkFBbUY7QUFDbkYsaUVBQThEO0FBQzlELCtEQUE0RDtBQUM1RCxvRUFBaUU7QUFFakUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLCtDQUErQyxDQUFDLENBQUM7QUFDekYsSUFBSSwyQkFBMkIsR0FBRyxnQkFBZ0IsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0FBQzVHLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXBDLFFBQVEsQ0FBQyxnREFBZ0QsRUFBRSxHQUFTLEVBQUU7SUFDbEUsSUFBSSxRQUFpQixDQUFDO0lBQ3RCLElBQUksV0FBdUIsQ0FBQztJQUM1QixJQUFJLGlCQUFtQyxDQUFDO0lBQ3hDLElBQUksbUJBQXVDLENBQUM7SUFFNUMsVUFBVSxDQUFDLEdBQVMsRUFBRTtRQUNsQixRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDMUIsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ2hDLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztRQUM1QyxtQkFBbUIsR0FBRyxJQUFJLHlDQUFtQixFQUFFLENBQUM7UUFFaEQsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsTUFBTSxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQTtRQUNoRCxNQUFNLGlCQUFpQixDQUFDLDhCQUE4QixDQUFDLDJDQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pGLENBQUMsQ0FBQSxDQUFDO1FBRUYsRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEdBQVMsRUFBRTtZQUNqRSxNQUFNLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLENBQUE7WUFFbEQsSUFBSSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFBO1lBQ3pGLElBQUksUUFBUSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1lBQzFELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFBO1lBRWpELElBQUksVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQTtZQUMvQixVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ2xDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDaEMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM1QixVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7WUFDN0QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO1lBQ3pELFVBQVUsQ0FBQyxjQUFjLENBQUMseUJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUU3QyxNQUFNLG1CQUFtQixDQUFDLDRCQUE0QixFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ25GLE1BQU0sbUJBQW1CLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUVqRSxNQUFNLG1CQUFtQixDQUFDLDRCQUE0QixFQUFFLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztZQUM5RixNQUFNLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDbkQsTUFBTSxtQkFBbUIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNuRixNQUFNLG1CQUFtQixDQUFDLDRCQUE0QixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUE7WUFFbEUsbVRBQW1UO1lBQ2xULElBQUksa0JBQWtCLEdBQUMsc0JBQXNCLEdBQUcsR0FBRyxHQUFFLEdBQUcsR0FBRywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsbURBQW1ELENBQUMsQ0FBQztZQUNoSixNQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLENBQUMsQ0FBQTtRQUVuSSxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9