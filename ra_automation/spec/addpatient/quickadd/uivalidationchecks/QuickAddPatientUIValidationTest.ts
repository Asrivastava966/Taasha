import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../data/enums/AddPatientMode";
import { QuickAddPatientLib } from "../../../../lib/quickaddpatientpage/QuickAddPatientLib";
import { Patient } from "../../../../data/basedata/Patient";
import { PatientInfo } from "../../../../data/info/PatientInfo";
import { Gender } from "../../../../data/enums/Gender";
import { PatientStatus } from "../../../../data/enums/PatientStatus";

let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Add patient via Quick Add form: UI validation tests', function() {
    let loginLib: LoginLib
    let homepageLib: HomepageLib;
    let quickAddPatientLib: QuickAddPatientLib;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        quickAddPatientLib = new QuickAddPatientLib();

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
    });

    it('[TEST]: Verify validation checks for the required fields in the Quick Add Patient form', async function() {
        quickAddPatientLib.save();

        let expectedValidationMessage:string = validationMessagesProperties.get('validation.inline.required');
        expect(await quickAddPatientLib.getFirstNameRequiredFieldError()).toEqual(expectedValidationMessage);
        expect(await quickAddPatientLib.getLastNameRequiredFieldError()).toEqual(expectedValidationMessage);
        expect(await quickAddPatientLib.getBirthDateRequiredFieldError()).toEqual(expectedValidationMessage);
        expect(await quickAddPatientLib.getGenderDropdownRequiredFieldError()).toEqual(expectedValidationMessage);
        expect(await quickAddPatientLib.getPatientStatusDropdownRequiredFieldError()).toEqual(expectedValidationMessage);
        expect(await quickAddPatientLib.getBranchOfficeRequiredFieldError()).toEqual(expectedValidationMessage);
    });

    it('[TEST]: Verify validation checks for the existing patient info: First name & DOB', async function() {
        let patient = new Patient(AddPatientMode.QUICK_ADD);;
        let existingPatientInfo = await patient.addBasePatient(true);

        let newPatientInfo = new PatientInfo();
        newPatientInfo.setFirstName(existingPatientInfo.getFirstName());
        newPatientInfo.setLastName('TEST_Automation_lName');
        newPatientInfo.setBirthDate(existingPatientInfo.getBirthDate());
        newPatientInfo.setGender(Gender.FEMALE);
        newPatientInfo.setStatus(PatientStatus.ACTIVE);

        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        await patient.addPatient(newPatientInfo, false);

        let firstRowIndex = 1;
        expect(await quickAddPatientLib.getPatientName(firstRowIndex)).toContain(existingPatientInfo.getFirstName());
    });

    it('[TEST]: Verify validation checks for the existing patient info: Last name & DOB', async function() {
        let patient = new Patient(AddPatientMode.QUICK_ADD);;
        let existingPatientInfo = await patient.addBasePatient(true);

        let newPatientInfo = new PatientInfo();
        newPatientInfo.setFirstName('TEST_Automation_fName');
        newPatientInfo.setLastName(existingPatientInfo.getLastName());
        newPatientInfo.setBirthDate(existingPatientInfo.getBirthDate());
        newPatientInfo.setGender(Gender.FEMALE);
        newPatientInfo.setStatus(PatientStatus.ACTIVE);

        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        await patient.addPatient(newPatientInfo, false);

        let firstRowIndex = 1;
        expect(await quickAddPatientLib.getPatientName(firstRowIndex)).toContain(existingPatientInfo.getLastName());
    });

    it('[TEST]: Verify validation checks for the existing patient info: First name, Last name & DOB', async function() {
        let patient = new Patient(AddPatientMode.QUICK_ADD);;
        let existingPatientInfo = await patient.addBasePatient(true);

        let newPatientInfo = new PatientInfo();
        newPatientInfo.setFirstName(existingPatientInfo.getFirstName());
        newPatientInfo.setLastName(existingPatientInfo.getLastName());
        newPatientInfo.setBirthDate(existingPatientInfo.getBirthDate());
        newPatientInfo.setGender(Gender.FEMALE);
        newPatientInfo.setStatus(PatientStatus.ACTIVE);
        newPatientInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice'));

        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        await patient.addPatient(newPatientInfo, true);

        expect(await quickAddPatientLib.getValidationMessage()).toContain('already exists.');
    });
});