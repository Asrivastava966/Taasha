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
const Insurance_1 = require("../../../data/basedata/Insurance");
const AddPatientLib_1 = require("../../../lib/normaladdpatientpage/AddPatientLib");
const InsuranceInfo_1 = require("../../../data/info/InsuranceInfo");
const CommonUtils_1 = require("../../../utils/CommonUtils");
const InsuranceType_1 = require("../../../data/enums/InsuranceType");
const InsurancePlanType_1 = require("../../../data/enums/InsurancePlanType");
const InsuranceInfoRelationship_1 = require("../../../data/enums/InsuranceInfoRelationship");
let propertiesReader = require('properties-reader');
let insuranceInfoProperties = propertiesReader('ra_automation/data/properties/InsuranceInfo.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Update Insurance Info: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let patientInfo;
    let insurance;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.QUICK_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            patientInfo = yield patient.addBasePatient(false);
            yield insurance.addBaseInsurance(true);
        });
    });
    it('[TEST]: Update Patient- Add Insurance Info for Secondary Insurance type', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());
            //Prepare data
            let insuranceInfo = new InsuranceInfo_1.InsuranceInfo();
            let startdate = commonUtils.getDateFromString(insuranceInfoProperties.get('insuranceinfo.startdate'));
            insuranceInfo.setInsuranceType(InsuranceType_1.InsuranceType.SECONDARY);
            insuranceInfo.setProvider(insuranceInfoProperties.get('insuranceinfo.provider'));
            insuranceInfo.setPolicyNumber(insuranceInfoProperties.get('insuranceinfo.policynumber'));
            insuranceInfo.setGroupNumber(insuranceInfoProperties.get('insuranceinfo.groupnumber'));
            insuranceInfo.setPlanType(InsurancePlanType_1.InsurancePlanType.HMO);
            insuranceInfo.setRelationship(InsuranceInfoRelationship_1.InsuranceInfoRelationship.SELF);
            insuranceInfo.setStartDate(startdate);
            //Execute test 
            yield addPatientLib.navigateToInsuranceInfoTab();
            yield addPatientLib.getInsuranceInfoLib().navigateToAddInsuranceForm();
            yield addPatientLib.getInsuranceInfoLib().addInsurance(insuranceInfo);
            yield addPatientLib.getInsuranceInfoLib().save();
            //Assertions 
            let insuranceCount = 2;
            let insuranceProviderName = insuranceInfoProperties.get('insuranceinfo.provider');
            let insuranceProviderNameSplitArray = insuranceProviderName.split(' - ');
            let expectedInsuranceProviderName = insuranceProviderNameSplitArray[1];
            yield expect(addPatientLib.getInsuranceInfoLib().getInsuranceTypeValueFromActivePolicyTable(insuranceCount)).toEqual(InsuranceType_1.InsuranceType.SECONDARY);
            yield expect(addPatientLib.getInsuranceInfoLib().getInsuranceNameFromPolicyTable(insuranceCount)).toContain(expectedInsuranceProviderName);
            yield expect(addPatientLib.getInsuranceInfoLib().getPolicyNoFromPolicyTable(insuranceCount)).toEqual(insuranceInfoProperties.get('insuranceinfo.policynumber'));
            yield expect(addPatientLib.getInsuranceInfoLib().getGroupNumberFromPolicyTable(insuranceCount)).toEqual(insuranceInfoProperties.get('insuranceinfo.groupnumber'));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlSW5mb1dvcmtmbG93VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy91cGRhdGVvcmRlci93b3JrZmxvdy9JbnN1cmFuY2VJbmZvV29ya2Zsb3dUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw4REFBMkQ7QUFDM0QsbUVBQWdFO0FBQ2hFLHVFQUFvRTtBQUNwRSw0REFBeUQ7QUFDekQsZ0VBQTZEO0FBQzdELG1GQUFnRjtBQUNoRixvRUFBaUU7QUFDakUsNERBQXlEO0FBQ3pELHFFQUFrRTtBQUNsRSw2RUFBMEU7QUFDMUUsNkZBQTBGO0FBRzFGLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSx1QkFBdUIsR0FBRyxnQkFBZ0IsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0FBQ25HLElBQUksV0FBVyxHQUFlLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRWhELFFBQVEsQ0FBQywrQ0FBK0MsRUFBRTtJQUN0RCxJQUFJLFFBQWlCLENBQUM7SUFDdEIsSUFBSSxXQUF1QixDQUFDO0lBQzVCLElBQUksYUFBMkIsQ0FBQztJQUNoQyxJQUFJLE9BQWUsQ0FBQztJQUNwQixJQUFJLFdBQXVCLENBQUM7SUFDNUIsSUFBSSxTQUFtQixDQUFDO0lBRXhCLFVBQVUsQ0FBQzs7WUFDUCxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDMUIsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1lBQ2hDLGFBQWEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztZQUNwQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLCtCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQywrQkFBYyxDQUFDLFNBQVMsRUFBRSw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxD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