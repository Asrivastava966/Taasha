import * as using from 'jasmine-data-provider';
import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../data/enums/AddPatientMode";
import { InsuranceType } from "../../../../data/enums/InsuranceType";
import { InsurancePlanType } from "../../../../data/enums/InsurancePlanType";
import { InsuranceInfoRelationship } from "../../../../data/enums/InsuranceInfoRelationship";
import { AddPatientLib } from '../../../../lib/normaladdpatientpage/AddPatientLib';
import { InsuranceInfo } from '../../../../data/info/InsuranceInfo';
import { CommonUtils } from '../../../../utils/CommonUtils';
import { Patient } from '../../../../data/basedata/Patient';

let propertiesReader = require('properties-reader');
let insuranceInfoProperties = propertiesReader('ra_automation/data/properties/InsuranceInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Add patient via Normal Add- \'Insurance Info\' form: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;

    const patientInfoProvider = {
        'Insurance Type: Primary, Plan Type: HMO, Relationship: Self': {insuranceType: InsuranceType.PRIMARY, planType: InsurancePlanType.HMO, relationship: InsuranceInfoRelationship.SELF},
        'Insurance Type: Secondary, Plan Type: HMO, Relationship: Spouse': {insuranceType: InsuranceType.SECONDARY, planType: InsurancePlanType.HMO, relationship: InsuranceInfoRelationship.SPOUSE},
        'Insurance Type: Tertiary, Plan Type: MCO, Relationship: Child': {insuranceType: InsuranceType.TERTIARY, planType: InsurancePlanType.MCO, relationship: InsuranceInfoRelationship.CHILD},
        'Insurance Type: Commercial, Plan Type: POS, Relationship: Other Adult': {insuranceType: InsuranceType.COMMERCIAL, planType: InsurancePlanType.POS, relationship: InsuranceInfoRelationship.OTHER_ADULT},
        'Insurance Type: Worker\'s Comp, Plan Type: PPO, Relationship: Unspecified Dependent': {insuranceType: InsuranceType.WORKERS_COMP, planType: InsurancePlanType.PPO, relationship: InsuranceInfoRelationship.UNSPECIFIED_DEPENDENT},
    };

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.NORMAL_ADD);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
        await patient.addBasePatient(true);
    })

    using(patientInfoProvider, function(data, description) {
        it('[TEST]: Add patient- Add Insurance Info with only mandatory fields: ' + description, async function() {
            
            //Add Insurance using Insurance Info form
            await addPatientLib.navigateToInsuranceInfoTab();
            await addPatientLib.getInsuranceInfoLib().navigateToAddInsuranceForm();

            //Prepare data
            let insuranceInfo = new InsuranceInfo();
            let startdate:Date = commonUtils.getDateFromString(insuranceInfoProperties.get('insuranceinfo.startdate'));
            let birthdate:Date = commonUtils.getDateFromString(insuranceInfoProperties.get('insuranceinfo.birthdate'));
            insuranceInfo.setInsuranceType(data.insuranceType);
            insuranceInfo.setProvider(insuranceInfoProperties.get('insuranceinfo.provider'));
            insuranceInfo.setPolicyNumber(insuranceInfoProperties.get('insuranceinfo.policynumber'));
            insuranceInfo.setGroupNumber(insuranceInfoProperties.get('insuranceinfo.groupnumber'));
            insuranceInfo.setPlanType(data.planType);
            insuranceInfo.setRelationship(data.relationship);
            insuranceInfo.setStartDate(startdate);
            insuranceInfo.setLastName(insuranceInfoProperties.get('insuranceinfo.lastName'))
            insuranceInfo.setFirstName(insuranceInfoProperties.get('insuranceinfo.firstName'))
            insuranceInfo.setBirthDate(birthdate)
            insuranceInfo.setGender(insuranceInfoProperties.get('insuranceinfo.gender'))

            //Execute test 
            await addPatientLib.getInsuranceInfoLib().addInsurance(insuranceInfo);
            await addPatientLib.getInsuranceInfoLib().save();

            //Assertions 
            let insuranceCount = 1;
            let insuranceProviderName:string = insuranceInfoProperties.get('insuranceinfo.provider');
            let insuranceProviderNameSplitArray = insuranceProviderName.split(' - ');
            let expectedInsuranceProviderName = insuranceProviderNameSplitArray[1];
            await expect(addPatientLib.getInsuranceInfoLib().getInsuranceTypeValueFromActivePolicyTable(insuranceCount)).toEqual(data.insuranceType);
            await expect(addPatientLib.getInsuranceInfoLib().getInsuranceNameFromPolicyTable(insuranceCount)).toContain(expectedInsuranceProviderName);
            await expect(addPatientLib.getInsuranceInfoLib().getPolicyNoFromPolicyTable(insuranceCount)).toEqual(insuranceInfoProperties.get('insuranceinfo.policynumber'));
            await expect(addPatientLib.getInsuranceInfoLib().getGroupNumberFromPolicyTable(insuranceCount)).toEqual(insuranceInfoProperties.get('insuranceinfo.groupnumber'));
        })
    })
})