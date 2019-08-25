import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../data/basedata/Patient';
import { Insurance } from "../../../../data/basedata/Insurance";
import { InsuranceType } from "../../../../data/enums/InsuranceType";

let propertiesReader = require('properties-reader');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Add patient via Normal Add- \'Insurance Info\' form: UI Validation tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let insurance:Insurance;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.NORMAL_ADD);
        insurance = new Insurance(AddPatientMode.NORMAL_ADD, InsuranceType.PRIMARY);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
        await patient.addBasePatient(true);
        await addPatientLib.navigateToInsuranceInfoTab();
    })

    it('[TEST]: Verify validation checks for the required fields in the Insurance Info tab', async function() {   
        await addPatientLib.getInsuranceInfoLib().navigateToAddInsuranceForm();
        await addPatientLib.getInsuranceInfoLib().save();
        expect(await addPatientLib.getInsuranceInfoLib().getProviderRequirdFieldError()).toEqual(validationMessagesProperties.get('validation.inline.required'));
        expect(await addPatientLib.getInsuranceInfoLib().getPolicyNumberRequiredFieldError()).toContain(validationMessagesProperties.get('validation.inline.required'));
        expect(await addPatientLib.getInsuranceInfoLib().getStartDateRequiredFieldError()).toEqual(validationMessagesProperties.get('validation.inline.required'));  
    })

    it('[TEST]: Verify validation checks for the same Insurance Type while adding a new Insurance', async function() {   
        await insurance.addBaseInsurance(true);
        await insurance.addBaseInsurance(true);
        expect(await addPatientLib.getInsuranceInfoLib().getValidationMessage()).toEqual(validationMessagesProperties.get('validation.addpatient.normaladd.existinginsurancetype'));
    })

    it('[TEST]: Verify validation checks for the same Insurance Type while updating an existing Insurance', async function() {   
        await insurance.addBaseInsurance(true);

        let secondaryInsurance:Insurance = new Insurance(AddPatientMode.NORMAL_ADD, InsuranceType.SECONDARY);
        await secondaryInsurance.addBaseInsurance(true);
        
        let firstRowIndex = 2;
        await insurance.updateActiveInsurancePolicyWithBaseInsuranceInfo(firstRowIndex, true);
        expect(await addPatientLib.getInsuranceInfoLib().getValidationMessage()).toEqual(validationMessagesProperties.get('validation.addpatient.normaladd.existinginsurancetype'));
    })
})
