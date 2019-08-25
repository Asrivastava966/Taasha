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
const InsuranceType_1 = require("../../../../data/enums/InsuranceType");
const InsurancePlanType_1 = require("../../../../data/enums/InsurancePlanType");
const InsuranceInfoRelationship_1 = require("../../../../data/enums/InsuranceInfoRelationship");
const AddPatientLib_1 = require("../../../../lib/normaladdpatientpage/AddPatientLib");
const InsuranceInfo_1 = require("../../../../data/info/InsuranceInfo");
const CommonUtils_1 = require("../../../../utils/CommonUtils");
const Patient_1 = require("../../../../data/basedata/Patient");
let propertiesReader = require('properties-reader');
let insuranceInfoProperties = propertiesReader('ra_automation/data/properties/InsuranceInfo.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Add patient via Normal Add- \'Insurance Info\' form: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    const patientInfoProvider = {
        'Insurance Type: Primary, Plan Type: HMO, Relationship: Self': { insuranceType: InsuranceType_1.InsuranceType.PRIMARY, planType: InsurancePlanType_1.InsurancePlanType.HMO, relationship: InsuranceInfoRelationship_1.InsuranceInfoRelationship.SELF },
        'Insurance Type: Secondary, Plan Type: HMO, Relationship: Spouse': { insuranceType: InsuranceType_1.InsuranceType.SECONDARY, planType: InsurancePlanType_1.InsurancePlanType.HMO, relationship: InsuranceInfoRelationship_1.InsuranceInfoRelationship.SPOUSE },
        'Insurance Type: Tertiary, Plan Type: MCO, Relationship: Child': { insuranceType: InsuranceType_1.InsuranceType.TERTIARY, planType: InsurancePlanType_1.InsurancePlanType.MCO, relationship: InsuranceInfoRelationship_1.InsuranceInfoRelationship.CHILD },
        'Insurance Type: Commercial, Plan Type: POS, Relationship: Other Adult': { insuranceType: InsuranceType_1.InsuranceType.COMMERCIAL, planType: InsurancePlanType_1.InsurancePlanType.POS, relationship: InsuranceInfoRelationship_1.InsuranceInfoRelationship.OTHER_ADULT },
        'Insurance Type: Worker\'s Comp, Plan Type: PPO, Relationship: Unspecified Dependent': { insuranceType: InsuranceType_1.InsuranceType.WORKERS_COMP, planType: InsurancePlanType_1.InsurancePlanType.PPO, relationship: InsuranceInfoRelationship_1.InsuranceInfoRelationship.UNSPECIFIED_DEPENDENT },
    };
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            yield patient.addBasePatient(true);
        });
    });
    using(patientInfoProvider, function (data, description) {
        it('[TEST]: Add patient- Add Insurance Info with only mandatory fields: ' + description, function () {
            return __awaiter(this, void 0, void 0, function* () {
                //Add Insurance using Insurance Info form
                yield addPatientLib.navigateToInsuranceInfoTab();
                yield addPatientLib.getInsuranceInfoLib().navigateToAddInsuranceForm();
                //Prepare data
                let insuranceInfo = new InsuranceInfo_1.InsuranceInfo();
                let startdate = commonUtils.getDateFromString(insuranceInfoProperties.get('insuranceinfo.startdate'));
                let birthdate = commonUtils.getDateFromString(insuranceInfoProperties.get('insuranceinfo.birthdate'));
                insuranceInfo.setInsuranceType(data.insuranceType);
                insuranceInfo.setProvider(insuranceInfoProperties.get('insuranceinfo.provider'));
                insuranceInfo.setPolicyNumber(insuranceInfoProperties.get('insuranceinfo.policynumber'));
                insuranceInfo.setGroupNumber(insuranceInfoProperties.get('insuranceinfo.groupnumber'));
                insuranceInfo.setPlanType(data.planType);
                insuranceInfo.setRelationship(data.relationship);
                insuranceInfo.setStartDate(startdate);
                insuranceInfo.setLastName(insuranceInfoProperties.get('insuranceinfo.lastName'));
                insuranceInfo.setFirstName(insuranceInfoProperties.get('insuranceinfo.firstName'));
                insuranceInfo.setBirthDate(birthdate);
                insuranceInfo.setGender(insuranceInfoProperties.get('insuranceinfo.gender'));
                //Execute test 
                yield addPatientLib.getInsuranceInfoLib().addInsurance(insuranceInfo);
                yield addPatientLib.getInsuranceInfoLib().save();
                //Assertions 
                let insuranceCount = 1;
                let insuranceProviderName = insuranceInfoProperties.get('insuranceinfo.provider');
                let insuranceProviderNameSplitArray = insuranceProviderName.split(' - ');
                let expectedInsuranceProviderName = insuranceProviderNameSplitArray[1];
                yield expect(addPatientLib.getInsuranceInfoLib().getInsuranceTypeValueFromActivePolicyTable(insuranceCount)).toEqual(data.insuranceType);
                yield expect(addPatientLib.getInsuranceInfoLib().getInsuranceNameFromPolicyTable(insuranceCount)).toContain(expectedInsuranceProviderName);
                yield expect(addPatientLib.getInsuranceInfoLib().getPolicyNoFromPolicyTable(insuranceCount)).toEqual(insuranceInfoProperties.get('insuranceinfo.policynumber'));
                yield expect(addPatientLib.getInsuranceInfoLib().getGroupNumberFromPolicyTable(insuranceCount)).toEqual(insuranceInfoProperties.get('insuranceinfo.groupnumber'));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlSW5mb1dvcmtmbG93VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy9hZGRwYXRpZW50L25vcm1hbGFkZC93b3JrZmxvdy9JbnN1cmFuY2VJbmZvV29ya2Zsb3dUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFDL0MsaUVBQThEO0FBQzlELHNFQUFtRTtBQUNuRSwwRUFBdUU7QUFDdkUsd0VBQXFFO0FBQ3JFLGdGQUE2RTtBQUM3RSxnR0FBNkY7QUFDN0Ysc0ZBQW1GO0FBQ25GLHVFQUFvRTtBQUNwRSwrREFBNEQ7QUFDNUQsK0RBQTREO0FBRTVELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSx1QkFBdUIsR0FBRyxnQkFBZ0IsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0FBQ25HLElBQUksV0FBVyxHQUFlLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRWhELFFBQVEsQ0FBQyw2RUFBNkUsRUFBRTtJQUNwRixJQUFJLFFBQWlCLENBQUM7SUFDdEIsSUFBSSxXQUF1QixDQUFDO0lBQzVCLElBQUksYUFBMkIsQ0FBQztJQUNoQyxJQUFJLE9BQWUsQ0FBQztJQUVwQixNQUFNLG1CQUFtQixHQUFHO1FBQ3hCLDZEQUE2RCxFQUFFLEVBQUMsYUFBYSxFQUFFLDZCQUFhLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxxQ0FBaUIsQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLHFEQUF5QixDQUFDLElBQUksRUFBQztRQUNwTCxpRUFBaUUsRUFBRSxFQUFDLGFBQWEsRUFBRSw2QkFBYSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUscUNBQWlCLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxxREFBeUIsQ0FBQyxNQUFNLEVBQUM7UUFDNUwsK0RBQStELEVBQUUsRUFBQyxhQUFhLEVBQUUs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