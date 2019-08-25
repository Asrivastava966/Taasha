import { LoginLib } from "../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../lib/homepage/HomepageLib";
import { FindPatientLib } from "../../../lib/findpatientpage/FindPatientLib";
import { Patient } from '../../../data/basedata/Patient';
import { AddPatientMode } from "../../../data/enums/AddPatientMode";
import { PatientInfo } from "../../../data/info/PatientInfo";

describe('[SPEC]: Find patient with various search criterias: Workflow tests', async function() {
    let firstRowIndex = 1;
    let loginLib: LoginLib;
    let homepageLib: HomepageLib;
    let findPatientLib:FindPatientLib;
    let patient:Patient;
    let patientInfo:PatientInfo;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        findPatientLib = new FindPatientLib();
        patient = new Patient(AddPatientMode.QUICK_ADD);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        patientInfo = await patient.addBasePatient(true);
        await homepageLib.findPatient();
    });

    it('[TEST]: Find Patient with First Name and Last Name', async function() {
        await findPatientLib.searchPatientWithLastName(patientInfo.getLastName());
        await findPatientLib.searchPatientWithFirstName(patientInfo.getFirstName());
        await findPatientLib.search();
        
        expect(await findPatientLib.getLastNameValue(firstRowIndex)).toEqual(patientInfo.getLastName());
        expect(await findPatientLib.getFirstNameValue(firstRowIndex)).toEqual(patientInfo.getFirstName());
    });

    it('[TEST]: Find Patient with First Name, Last Name and DOB', async function() {
        await findPatientLib.searchPatientWithLastName(patientInfo.getLastName());
        await findPatientLib.searchPatientWithFirstName(patientInfo.getFirstName());
        await findPatientLib.searchPatientWithBirthDate(patientInfo.getBirthDate());
        await findPatientLib.search();
        
        expect(await findPatientLib.getLastNameValue(firstRowIndex)).toEqual(patientInfo.getLastName());
        expect(await findPatientLib.getFirstNameValue(firstRowIndex)).toEqual(patientInfo.getFirstName());
    });

    it('[TEST]: Find Patient with Email', async function() {
        await findPatientLib.searchPatientWithEmail(patientInfo.getEmail());
        await findPatientLib.search();
        
        expect(await findPatientLib.getEmailValue(firstRowIndex)).toEqual(patientInfo.getEmail());
    });
});