import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../data/enums/AddPatientMode";
import { PatientInfo } from "../../../../data/info/PatientInfo";
import { AddPatientLib } from '../../../../lib/normaladdpatientpage/AddPatientLib';
import { CommonUtils } from '../../../../utils/CommonUtils';
import { Patient } from '../../../../data/basedata/Patient';
import { Gender } from "../../../../data/enums/Gender";
import { PatientStatus } from "../../../../data/enums/PatientStatus";

let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Add patient via Normal Add- \'Patient Info\' form: UI Validation tests', function() {
    let loginLib: LoginLib;
    let homepageLib: HomepageLib;
    let addPatientLib: AddPatientLib;
    let patient:Patient;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.NORMAL_ADD);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
    })

    it('[TEST]: Verify validation checks for the required fields in the Patient Info tab', async function() {
        await addPatientLib.getPatientInfoLib().save();

        let expectedValidationMessage:string = validationMessageProperties.get('validation.inline.required');
        expect(await addPatientLib.getPatientInfoLib().getFirstNameRequiredFieldError()).toEqual(expectedValidationMessage);
        expect(await addPatientLib.getPatientInfoLib().getLastNameRequiredFieldError()).toEqual(expectedValidationMessage);
        expect(await addPatientLib.getPatientInfoLib().getBirthDateRequiredFieldError()).toEqual(expectedValidationMessage);
        expect(await addPatientLib.getPatientInfoLib().getGenderDropdownRequiredFieldError()).toEqual(expectedValidationMessage);
        expect(await addPatientLib.getPatientInfoLib().getPatientStatusDropdownRequiredFieldError()).toEqual(expectedValidationMessage);
        expect(await addPatientLib.getPatientInfoLib().getBranchOfficeRequiredFieldError()).toEqual(expectedValidationMessage);
    })

    it('[TEST]: Verify validation checks for the existing patient info: First name & DOB', async function() {
        let existingPatientInfo = await patient.addBasePatient(true);
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
        
        let patientInfo = new PatientInfo();
        let lastNameWithTimeStamp = patientInfoProperties.get('patientinfo.lastname') + commonUtils.getTimeStamp();
        patientInfo.setFirstName(existingPatientInfo.getFirstName());
        patientInfo.setLastName(lastNameWithTimeStamp);
        patientInfo.setMI(patientInfoProperties.get('patientinfo.mi'));
        patientInfo.setBirthDate(existingPatientInfo.getBirthDate());

        await addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
        let firstRowIndex = 1;
        expect(await addPatientLib.getPatientInfoLib().getPatientName(firstRowIndex)).toContain(existingPatientInfo.getFirstName());
    })

    it('[TEST]: Verify validation checks for the existing patient info: Last name & DOB', async function() {
        let existingPatientInfo = await patient.addBasePatient(true);
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
        
        let patientInfo = new PatientInfo();
        let firstNameWithTimeStamp = patientInfoProperties.get('patientinfo.lastname') + commonUtils.getTimeStamp();
        patientInfo.setFirstName(firstNameWithTimeStamp);
        patientInfo.setLastName(existingPatientInfo.getLastName());
        patientInfo.setMI(patientInfoProperties.get('patientinfo.mi'));
        patientInfo.setBirthDate(existingPatientInfo.getBirthDate());

        await addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
        let firstRowIndex = 1;
        expect(await addPatientLib.getPatientInfoLib().getPatientName(firstRowIndex)).toContain(existingPatientInfo.getLastName());
    })

    it('[TEST]: Verify validation checks for the existing patient info: First name, Last name & DOB', async function() {
        let existingPatientInfo = await patient.addBasePatient(true);
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
        
        let patientInfo = new PatientInfo();
        patientInfo.setFirstName(existingPatientInfo.getFirstName());
        patientInfo.setLastName(existingPatientInfo.getLastName());
        patientInfo.setMI(patientInfoProperties.get('patientinfo.mi'));
        patientInfo.setBirthDate(existingPatientInfo.getBirthDate());

        await addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
        let firstRowIndex = 1;
        expect(await addPatientLib.getPatientInfoLib().getPatientName(firstRowIndex)).toContain(existingPatientInfo.getFirstName());

        await addPatientLib.getPatientInfoLib().closeModal();

        let patientRemainingInfo = new PatientInfo();
        patientRemainingInfo.setGender(Gender.FEMALE);
        patientRemainingInfo.setStatus(PatientStatus.ACTIVE);
        patientRemainingInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice')); 
        await addPatientLib.getPatientInfoLib().fillPatientInfo(patientRemainingInfo);
        await addPatientLib.getPatientInfoLib().save();
        
        expect(await addPatientLib.getPatientInfoLib().getValidationMessage()).toContain('already exists.');
    })
})
