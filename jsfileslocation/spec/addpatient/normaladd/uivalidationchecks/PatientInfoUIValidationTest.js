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
const PatientInfo_1 = require("../../../../data/info/PatientInfo");
const AddPatientLib_1 = require("../../../../lib/normaladdpatientpage/AddPatientLib");
const CommonUtils_1 = require("../../../../utils/CommonUtils");
const Patient_1 = require("../../../../data/basedata/Patient");
const Gender_1 = require("../../../../data/enums/Gender");
const PatientStatus_1 = require("../../../../data/enums/PatientStatus");
let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Add patient via Normal Add- \'Patient Info\' form: UI Validation tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
        });
    });
    it('[TEST]: Verify validation checks for the required fields in the Patient Info tab', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield addPatientLib.getPatientInfoLib().save();
            let expectedValidationMessage = validationMessageProperties.get('validation.inline.required');
            expect(yield addPatientLib.getPatientInfoLib().getFirstNameRequiredFieldError()).toEqual(expectedValidationMessage);
            expect(yield addPatientLib.getPatientInfoLib().getLastNameRequiredFieldError()).toEqual(expectedValidationMessage);
            expect(yield addPatientLib.getPatientInfoLib().getBirthDateRequiredFieldError()).toEqual(expectedValidationMessage);
            expect(yield addPatientLib.getPatientInfoLib().getGenderDropdownRequiredFieldError()).toEqual(expectedValidationMessage);
            expect(yield addPatientLib.getPatientInfoLib().getPatientStatusDropdownRequiredFieldError()).toEqual(expectedValidationMessage);
            expect(yield addPatientLib.getPatientInfoLib().getBranchOfficeRequiredFieldError()).toEqual(expectedValidationMessage);
        });
    });
    it('[TEST]: Verify validation checks for the existing patient info: First name & DOB', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let existingPatientInfo = yield patient.addBasePatient(true);
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            let patientInfo = new PatientInfo_1.PatientInfo();
            let lastNameWithTimeStamp = patientInfoProperties.get('patientinfo.lastname') + commonUtils.getTimeStamp();
            patientInfo.setFirstName(existingPatientInfo.getFirstName());
            patientInfo.setLastName(lastNameWithTimeStamp);
            patientInfo.setMI(patientInfoProperties.get('patientinfo.mi'));
            patientInfo.setBirthDate(existingPatientInfo.getBirthDate());
            yield addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
            let firstRowIndex = 1;
            expect(yield addPatientLib.getPatientInfoLib().getPatientName(firstRowIndex)).toContain(existingPatientInfo.getFirstName());
        });
    });
    it('[TEST]: Verify validation checks for the existing patient info: Last name & DOB', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let existingPatientInfo = yield patient.addBasePatient(true);
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            let patientInfo = new PatientInfo_1.PatientInfo();
            let firstNameWithTimeStamp = patientInfoProperties.get('patientinfo.lastname') + commonUtils.getTimeStamp();
            patientInfo.setFirstName(firstNameWithTimeStamp);
            patientInfo.setLastName(existingPatientInfo.getLastName());
            patientInfo.setMI(patientInfoProperties.get('patientinfo.mi'));
            patientInfo.setBirthDate(existingPatientInfo.getBirthDate());
            yield addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
            let firstRowIndex = 1;
            expect(yield addPatientLib.getPatientInfoLib().getPatientName(firstRowIndex)).toContain(existingPatientInfo.getLastName());
        });
    });
    it('[TEST]: Verify validation checks for the existing patient info: First name, Last name & DOB', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let existingPatientInfo = yield patient.addBasePatient(true);
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            let patientInfo = new PatientInfo_1.PatientInfo();
            patientInfo.setFirstName(existingPatientInfo.getFirstName());
            patientInfo.setLastName(existingPatientInfo.getLastName());
            patientInfo.setMI(patientInfoProperties.get('patientinfo.mi'));
            patientInfo.setBirthDate(existingPatientInfo.getBirthDate());
            yield addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
            let firstRowIndex = 1;
            expect(yield addPatientLib.getPatientInfoLib().getPatientName(firstRowIndex)).toContain(existingPatientInfo.getFirstName());
            yield addPatientLib.getPatientInfoLib().closeModal();
            let patientRemainingInfo = new PatientInfo_1.PatientInfo();
            patientRemainingInfo.setGender(Gender_1.Gender.FEMALE);
            patientRemainingInfo.setStatus(PatientStatus_1.PatientStatus.ACTIVE);
            patientRemainingInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice'));
            yield addPatientLib.getPatientInfoLib().fillPatientInfo(patientRemainingInfo);
            yield addPatientLib.getPatientInfoLib().save();
            expect(yield addPatientLib.getPatientInfoLib().getValidationMessage()).toContain('already exists.');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudEluZm9VSVZhbGlkYXRpb25UZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FkZHBhdGllbnQvbm9ybWFsYWRkL3VpdmFsaWRhdGlvbmNoZWNrcy9QYXRpZW50SW5mb1VJVmFsaWRhdGlvblRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlFQUE4RDtBQUM5RCxzRUFBbUU7QUFDbkUsMEVBQXVFO0FBQ3ZFLG1FQUFnRTtBQUNoRSxzRkFBbUY7QUFDbkYsK0RBQTREO0FBQzVELCtEQUE0RDtBQUM1RCwwREFBdUQ7QUFDdkQsd0VBQXFFO0FBRXJFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0FBQy9GLElBQUksMkJBQTJCLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUM1RyxJQUFJLFdBQVcsR0FBZSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVoRCxRQUFRLENBQUMsZ0ZBQWdGLEVBQUU7SUFDdkYsSUFBSSxRQUFrQixDQUFDO0lBQ3ZCLElBQUksV0FBd0IsQ0FBQztJQUM3QixJQUFJLGFBQTRCLENBQUM7SUFDakMsSUFBSSxPQUFlLENBQUM7SUFFcEIsVUFBVSxDQUFDOztZQUNQLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUMxQixXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDaEMsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsK0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVqRCxNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QixNQUFNLFdBQVcsQ0FBQyxvQkFBb0IsQ0FB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