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
const using = require("jasmine-data-provider");
const LoginLib_1 = require("../../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../../lib/homepage/HomepageLib");
const AddPatientMode_1 = require("../../../../data/enums/AddPatientMode");
const PatientInfo_1 = require("../../../../data/info/PatientInfo");
const Gender_1 = require("../../../../data/enums/Gender");
const PatientStatus_1 = require("../../../../data/enums/PatientStatus");
const AddPatientLib_1 = require("../../../../lib/normaladdpatientpage/AddPatientLib");
const CommonUtils_1 = require("../../../../utils/CommonUtils");
let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Add patient via Normal Add- \'Patient Info\' form: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    const patientInfoProvider = {
        'Gender: Female, Status: Active': { gender: Gender_1.Gender.FEMALE, status: PatientStatus_1.PatientStatus.ACTIVE },
        'Gender: Male, Status: Inactive': { gender: Gender_1.Gender.MALE, status: PatientStatus_1.PatientStatus.INACTIVE },
        'Gender: Female, Status: Deceased': { gender: Gender_1.Gender.FEMALE, status: PatientStatus_1.PatientStatus.DECEASED },
        'Gender: Male, Status: Lost': { gender: Gender_1.Gender.MALE, status: PatientStatus_1.PatientStatus.LOST },
    };
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
        });
    });
    using(patientInfoProvider, function (data, description) {
        it('[TEST]: Add patient- Add Patient Info with only mandatory fields: ' + description, function () {
            return __awaiter(this, void 0, void 0, function* () {
                //Prepare data
                let patientInfo = new PatientInfo_1.PatientInfo();
                let firstNameWithTimeStamp = patientInfoProperties.get('patientinfo.firstname') + commonUtils.getTimeStamp();
                let lastNameWithTimeStamp = patientInfoProperties.get('patientinfo.lastname') + commonUtils.getTimeStamp();
                let birthdate = commonUtils.getDateFromString(patientInfoProperties.get('patientinfo.birthdate'));
                patientInfo.setFirstName(firstNameWithTimeStamp);
                patientInfo.setLastName(lastNameWithTimeStamp);
                patientInfo.setMI(patientInfoProperties.get('patientinfo.mi'));
                patientInfo.setBirthDate(birthdate);
                patientInfo.setGender(data.gender);
                patientInfo.setStatus(data.status);
                patientInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice'));
                patientInfo.setLegacyId(patientInfoProperties.get('patientinfo.legacyid'));
                patientInfo.setCustom(patientInfoProperties.get('patientinfo.custom'));
                //Execute test 
                yield addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
                yield addPatientLib.getPatientInfoLib().save();
                //Assertions
                let expectedPatientName = lastNameWithTimeStamp + ', ' + firstNameWithTimeStamp;
                let expectedSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd');
                expect(yield addPatientLib.getPatientInfoLib().getSuccessMessage()).toEqual(expectedSuccessMessage);
                expect(yield addPatientLib.getPatientNameOnHeader()).toEqual(expectedPatientName);
                expect(yield addPatientLib.getPatientDOBOnHeader()).toEqual(birthdate);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudEluZm9Xb3JrZmxvd1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvYWRkcGF0aWVudC9ub3JtYWxhZGQvd29ya2Zsb3cvUGF0aWVudEluZm9Xb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUErQztBQUMvQyxpRUFBOEQ7QUFDOUQsc0VBQW1FO0FBQ25FLDBFQUF1RTtBQUN2RSxtRUFBZ0U7QUFDaEUsMERBQXVEO0FBQ3ZELHdFQUFxRTtBQUNyRSxzRkFBbUY7QUFDbkYsK0RBQTREO0FBRTVELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0FBQy9GLElBQUksMkJBQTJCLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUM1RyxJQUFJLFdBQVcsR0FBZSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVoRCxRQUFRLENBQUMsMkVBQTJFLEVBQUU7SUFDbEYsSUFBSSxRQUFrQixDQUFDO0lBQ3ZCLElBQUksV0FBd0IsQ0FBQztJQUM3QixJQUFJLGFBQTRCLENBQUM7SUFFakMsTUFBTSxtQkFBbUIsR0FBRztRQUN4QixnQ0FBZ0MsRUFBRSxFQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSw2QkFBYSxDQUFDLE1BQU0sRUFBQztRQUN2RixnQ0FBZ0MsRUFBRSxFQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSw2QkFBYSxDQUFDLFFBQVEsRUFBQztRQUN2RixrQ0FBa0MsRUFBRSxFQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSw2QkFBYSxDQUFDLFFBQVEsRUFBQztRQUMzRiw0QkFBNEIsRUFB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