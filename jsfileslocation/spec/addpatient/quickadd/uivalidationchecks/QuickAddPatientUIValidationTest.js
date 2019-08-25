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
const AddPatientMode_1 = require("../../../../data/enums/AddPatientMode");
const QuickAddPatientLib_1 = require("../../../../lib/quickaddpatientpage/QuickAddPatientLib");
const Patient_1 = require("../../../../data/basedata/Patient");
const PatientInfo_1 = require("../../../../data/info/PatientInfo");
const Gender_1 = require("../../../../data/enums/Gender");
const PatientStatus_1 = require("../../../../data/enums/PatientStatus");
let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Add patient via Quick Add form: UI validation tests', function () {
    let loginLib;
    let homepageLib;
    let quickAddPatientLib;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            quickAddPatientLib = new QuickAddPatientLib_1.QuickAddPatientLib();
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
        });
    });
    it('[TEST]: Verify validation checks for the required fields in the Quick Add Patient form', function () {
        return __awaiter(this, void 0, void 0, function* () {
            quickAddPatientLib.save();
            let expectedValidationMessage = validationMessagesProperties.get('validation.inline.required');
            expect(yield quickAddPatientLib.getFirstNameRequiredFieldError()).toEqual(expectedValidationMessage);
            expect(yield quickAddPatientLib.getLastNameRequiredFieldError()).toEqual(expectedValidationMessage);
            expect(yield quickAddPatientLib.getBirthDateRequiredFieldError()).toEqual(expectedValidationMessage);
            expect(yield quickAddPatientLib.getGenderDropdownRequiredFieldError()).toEqual(expectedValidationMessage);
            expect(yield quickAddPatientLib.getPatientStatusDropdownRequiredFieldError()).toEqual(expectedValidationMessage);
            expect(yield quickAddPatientLib.getBranchOfficeRequiredFieldError()).toEqual(expectedValidationMessage);
        });
    });
    it('[TEST]: Verify validation checks for the existing patient info: First name & DOB', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            ;
            let existingPatientInfo = yield patient.addBasePatient(true);
            let newPatientInfo = new PatientInfo_1.PatientInfo();
            newPatientInfo.setFirstName(existingPatientInfo.getFirstName());
            newPatientInfo.setLastName('TEST_Automation_lName');
            newPatientInfo.setBirthDate(existingPatientInfo.getBirthDate());
            newPatientInfo.setGender(Gender_1.Gender.FEMALE);
            newPatientInfo.setStatus(PatientStatus_1.PatientStatus.ACTIVE);
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            yield patient.addPatient(newPatientInfo, false);
            let firstRowIndex = 1;
            expect(yield quickAddPatientLib.getPatientName(firstRowIndex)).toContain(existingPatientInfo.getFirstName());
        });
    });
    it('[TEST]: Verify validation checks for the existing patient info: Last name & DOB', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            ;
            let existingPatientInfo = yield patient.addBasePatient(true);
            let newPatientInfo = new PatientInfo_1.PatientInfo();
            newPatientInfo.setFirstName('TEST_Automation_fName');
            newPatientInfo.setLastName(existingPatientInfo.getLastName());
            newPatientInfo.setBirthDate(existingPatientInfo.getBirthDate());
            newPatientInfo.setGender(Gender_1.Gender.FEMALE);
            newPatientInfo.setStatus(PatientStatus_1.PatientStatus.ACTIVE);
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            yield patient.addPatient(newPatientInfo, false);
            let firstRowIndex = 1;
            expect(yield quickAddPatientLib.getPatientName(firstRowIndex)).toContain(existingPatientInfo.getLastName());
        });
    });
    it('[TEST]: Verify validation checks for the existing patient info: First name, Last name & DOB', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            ;
            let existingPatientInfo = yield patient.addBasePatient(true);
            let newPatientInfo = new PatientInfo_1.PatientInfo();
            newPatientInfo.setFirstName(existingPatientInfo.getFirstName());
            newPatientInfo.setLastName(existingPatientInfo.getLastName());
            newPatientInfo.setBirthDate(existingPatientInfo.getBirthDate());
            newPatientInfo.setGender(Gender_1.Gender.FEMALE);
            newPatientInfo.setStatus(PatientStatus_1.PatientStatus.ACTIVE);
            newPatientInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice'));
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            yield patient.addPatient(newPatientInfo, true);
            expect(yield quickAddPatientLib.getValidationMessage()).toContain('already exists.');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tBZGRQYXRpZW50VUlWYWxpZGF0aW9uVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy9hZGRwYXRpZW50L3F1aWNrYWRkL3VpdmFsaWRhdGlvbmNoZWNrcy9RdWlja0FkZFBhdGllbnRVSVZhbGlkYXRpb25UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpRUFBOEQ7QUFDOUQsc0VBQW1FO0FBQ25FLDBFQUF1RTtBQUN2RSwrRkFBNEY7QUFDNUYsK0RBQTREO0FBQzVELG1FQUFnRTtBQUNoRSwwREFBdUQ7QUFDdkQsd0VBQXFFO0FBRXJFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0FBQy9GLElBQUksNEJBQTRCLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUU3RyxRQUFRLENBQUMsNkRBQTZELEVBQUU7SUFDcEUsSUFBSSxRQUFrQixDQUFBO0lBQ3RCLElBQUksV0FBd0IsQ0FBQztJQUM3QixJQUFJLGtCQUFzQyxDQUFDO0lBRTNDLFVBQVUsQ0FBQzs7WUFDUCxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDMUIsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1lBQ2hDLGtCQUFrQixHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztZQUU5QyxNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QixNQUFNLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0ZBQXdGLEVBQUU7O1lBQ3pGLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRTFCLElB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