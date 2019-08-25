import { LoginLib } from "../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../data/enums/AddPatientMode";
import { Patient } from '../../../data/basedata/Patient';
import { Insurance } from '../../../data/basedata/Insurance';
import { AddPatientLib } from "../../../lib/normaladdpatientpage/AddPatientLib";
import { InsuranceInfo } from '../../../data/info/InsuranceInfo';
import { CommonUtils } from '../../../utils/CommonUtils';
import { InsuranceType } from "../../../data/enums/InsuranceType";
import { InsurancePlanType } from "../../../data/enums/InsurancePlanType";
import { InsuranceInfoRelationship } from "../../../data/enums/InsuranceInfoRelationship";
import { PatientInfo } from "../../../data/info/PatientInfo";

let propertiesReader = require('properties-reader');
let insuranceInfoProperties = propertiesReader('ra_automation/data/properties/InsuranceInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Update Insurance Info: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let patientInfo:PatientInfo;
    let insurance:Insurance;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.QUICK_ADD);
        insurance = new Insurance(AddPatientMode.QUICK_ADD, InsuranceType.PRIMARY);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        patientInfo = await patient.addBasePatient(false);
        await insurance.addBaseInsurance(true);
    })
    
    it('[TEST]: Update Patient- Add Insurance Info for Secondary Insurance type', async function() {
        
        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());

        //Prepare data
        let insuranceInfo = new InsuranceInfo();
        let startdate:Date = commonUtils.getDateFromString(insuranceInfoProperties.get('insuranceinfo.startdate'));
        insuranceInfo.setInsuranceType(InsuranceType.SECONDARY);
        insuranceInfo.setProvider(insuranceInfoProperties.get('insuranceinfo.provider'));
        insuranceInfo.setPolicyNumber(insuranceInfoProperties.get('insuranceinfo.policynumber'));
        insuranceInfo.setGroupNumber(insuranceInfoProperties.get('insuranceinfo.groupnumber'));
        insuranceInfo.setPlanType(InsurancePlanType.HMO);
        insuranceInfo.setRelationship(InsuranceInfoRelationship.SELF);
        insuranceInfo.setStartDate(startdate);

        //Execute test 
        await addPatientLib.navigateToInsuranceInfoTab();
        await addPatientLib.getInsuranceInfoLib().navigateToAddInsuranceForm();
        await addPatientLib.getInsuranceInfoLib().addInsurance(insuranceInfo);
        await addPatientLib.getInsuranceInfoLib().save();

        //Assertions 
        let insuranceCount = 2;
        let insuranceProviderName:string = insuranceInfoProperties.get('insuranceinfo.provider');
        let insuranceProviderNameSplitArray = insuranceProviderName.split(' - ');
        let expectedInsuranceProviderName = insuranceProviderNameSplitArray[1];
        await expect(addPatientLib.getInsuranceInfoLib().getInsuranceTypeValueFromActivePolicyTable(insuranceCount)).toEqual(InsuranceType.SECONDARY);
        await expect(addPatientLib.getInsuranceInfoLib().getInsuranceNameFromPolicyTable(insuranceCount)).toContain(expectedInsuranceProviderName);
        await expect(addPatientLib.getInsuranceInfoLib().getPolicyNoFromPolicyTable(insuranceCount)).toEqual(insuranceInfoProperties.get('insuranceinfo.policynumber'));
        await expect(addPatientLib.getInsuranceInfoLib().getGroupNumberFromPolicyTable(insuranceCount)).toEqual(insuranceInfoProperties.get('insuranceinfo.groupnumber'));
    })
})