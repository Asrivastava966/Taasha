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
const LoginLib_1 = require("../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../lib/homepage/HomepageLib");
const AddPatientMode_1 = require("../../../data/enums/AddPatientMode");
const Patient_1 = require("../../../data/basedata/Patient");
const PatientInfo_1 = require("../../../data/info/PatientInfo");
const AddPatientLib_1 = require("../../../lib/normaladdpatientpage/AddPatientLib");
let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Update Patient Info: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let basePatientInfo;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            basePatientInfo = yield patient.addBasePatient(true);
        });
    });
    it('[TEST]: Update Patient- Add Billing Address and make Delivery Address same as Billing Address', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnPatientNameLink(basePatientInfo.getFirstName());
            //Prepare data 
            let patientInfo = new PatientInfo_1.PatientInfo();
            patientInfo.setAddressOne(patientInfoProperties.get('patientinfo.billingaddress.addressone'));
            patientInfo.setAddressTwo(patientInfoProperties.get('patientinfo.billingaddress.addresstwo'));
            patientInfo.setCity(patientInfoProperties.get('patientinfo.billingaddress.city'));
            patientInfo.setState(patientInfoProperties.get('patientinfo.billingaddress.state'));
            patientInfo.setZipCode(patientInfoProperties.get('patientinfo.billingaddress.zipcode'));
            patientInfo.setTimeZone(patientInfoProperties.get('patientinfo.billingaddress.timezone'));
            patientInfo.setCommonAddressCheckbox(true);
            //Execute test 
            yield addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
            yield addPatientLib.getPatientInfoLib().save();
            //Verification points 
            let expectedSuccessMessage = validationMessageProperties.get('success.updatepatient');
            expect(yield addPatientLib.getPatientInfoLib().getSuccessMessage()).toEqual(expectedSuccessMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudEluZm9Xb3JrZmxvd1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvdXBkYXRlcGF0aWVudC93b3JrZmxvdy9QYXRpZW50SW5mb1dvcmtmbG93VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsOERBQTJEO0FBQzNELG1FQUFnRTtBQUNoRSx1RUFBb0U7QUFDcEUsNERBQXlEO0FBQ3pELGdFQUE2RDtBQUM3RCxtRkFBZ0Y7QUFFaEYsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLHFCQUFxQixHQUFHLGdCQUFnQixDQUFDLGdEQUFnRCxDQUFDLENBQUM7QUFDL0YsSUFBSSwyQkFBMkIsR0FBRyxnQkFBZ0IsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0FBRTVHLFFBQVEsQ0FBQyw2Q0FBNkMsRUFBRTtJQUNwRCxJQUFJLFFBQWlCLENBQUM7SUFDdEIsSUFBSSxXQUF1QixDQUFDO0lBQzVCLElBQUksYUFBMkIsQ0FBQztJQUNoQyxJQUFJLE9BQWUsQ0FBQztJQUNwQixJQUFJLGVBQTJCLENBQUM7SUFFaEMsVUFBVSxDQUFDOztZQUNQLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUMxQixXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDaEMsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVoRCxNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QixNQUFNLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pFLGVBQWUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywrRkFBK0YsRUFBRTs7WUFFaEcseUZBQXlGO1lBQ3pGLE1BQU0sV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLG1EQUFtRCxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBRXZILGVBQWU7WUFDZixJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUNwQyxXQUFXLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7WUFDOUYsV0FBVyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO1lBQzlGLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztZQUNsRixXQUFXLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7WUFDcEYsV0FBVyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLFdBQVcsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztZQUMxRixXQUFXLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFM0MsZUFBZTtZQUNmLE1BQU0sYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFL0Msc0JBQXNCO1lBQ3RCLElBQUksc0JBQXNCLEdBQUcsMkJBQTJCLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDdEYsTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3hHLENBQUM7S0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9