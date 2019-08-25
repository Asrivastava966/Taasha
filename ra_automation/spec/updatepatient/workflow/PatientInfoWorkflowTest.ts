import { LoginLib } from "../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../data/enums/AddPatientMode";
import { Patient } from '../../../data/basedata/Patient';
import { PatientInfo } from '../../../data/info/PatientInfo';
import { AddPatientLib } from "../../../lib/normaladdpatientpage/AddPatientLib";

let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Update Patient Info: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let basePatientInfo:PatientInfo;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.QUICK_ADD);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        basePatientInfo = await patient.addBasePatient(true);
    })
    
    it('[TEST]: Update Patient- Add Billing Address and make Delivery Address same as Billing Address', async function() {
        
        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnPatientNameLink(basePatientInfo.getFirstName());

        //Prepare data 
        let patientInfo = new PatientInfo();
        patientInfo.setAddressOne(patientInfoProperties.get('patientinfo.billingaddress.addressone'));
        patientInfo.setAddressTwo(patientInfoProperties.get('patientinfo.billingaddress.addresstwo'));
        patientInfo.setCity(patientInfoProperties.get('patientinfo.billingaddress.city'));
        patientInfo.setState(patientInfoProperties.get('patientinfo.billingaddress.state'));
        patientInfo.setZipCode(patientInfoProperties.get('patientinfo.billingaddress.zipcode'));
        patientInfo.setTimeZone(patientInfoProperties.get('patientinfo.billingaddress.timezone')); 
        patientInfo.setCommonAddressCheckbox(true);

        //Execute test 
        await addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo); 
        await addPatientLib.getPatientInfoLib().save();

        //Verification points 
        let expectedSuccessMessage = validationMessageProperties.get('success.updatepatient');
        expect(await addPatientLib.getPatientInfoLib().getSuccessMessage()).toEqual(expectedSuccessMessage);
    }) 
})