import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../data/basedata/Patient';
import { Insurance } from '../../../../data/basedata/Insurance';
import { InsuranceType } from "../../../../data/enums/InsuranceType";
import { Note } from "../../../../data/basedata/Note";
import { NoteType } from "../../../../data/enums/NoteType";
import { NoteInfo } from "../../../../data/info/NoteInfo";
import { NoteStatus } from "../../../../data/enums/NoteStatus";

let propertiesReader = require('properties-reader');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Add Patient Note via Normal Add- Add a new Open Note, update it to a Closed Note: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let insurance:Insurance;
    let note:Note;

    beforeEach(async function(){
        loginLib = new LoginLib();
        await loginLib.doBaseLogin();
    })

    it('[TEST]: Add patient- Add a new Open Note', async function() { 
        homepageLib = new HomepageLib();
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);

        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.NORMAL_ADD);
        insurance = new Insurance(AddPatientMode.NORMAL_ADD, InsuranceType.PRIMARY);
        note = new Note(NoteType.BILLING_NOTES);

        await patient.addBasePatient(true);
        await addPatientLib.navigateToInsuranceInfoTab();
        await insurance.addBaseInsurance(true);

        //Add a new Open Note 
        await addPatientLib.navigateToNotesTab();
        await note.addBaseNote();

        //Verification points 
        let expectedNoteSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.addnote');
        let expectedCommentSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.note.addcomment');
        await expect(await addPatientLib.getNotesLib().getNoteSuccessMessage()).toBe(expectedNoteSuccessMessage);
        await expect(await addPatientLib.getNotesLib().getCommentSuccessMessage()).toBe(expectedCommentSuccessMessage);
    })

    it('[TEST]: Update patient- Add a new Open Note, Update it to a Closed Note', async function() { 
        homepageLib = new HomepageLib();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);

        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.QUICK_ADD);
        insurance = new Insurance(AddPatientMode.QUICK_ADD, InsuranceType.PRIMARY);
        note = new Note(NoteType.BILLING_NOTES);

        let basePatientInfo = await patient.addBasePatient(false);
        await insurance.addBaseInsurance(true);

        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());

        //Add a new Open Note 
        await addPatientLib.navigateToNotesTab();
        await note.addBaseNote();

        //Verification points 
        let expectedNoteSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.addnote');
        let expectedCommentSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.note.addcomment');
        await expect(await addPatientLib.getNotesLib().getNoteSuccessMessage()).toBe(expectedNoteSuccessMessage);
        await expect(await addPatientLib.getNotesLib().getCommentSuccessMessage()).toBe(expectedCommentSuccessMessage);

        //Update the same note to a Closed Note 
        await addPatientLib.getNotesLib().navigateBackToNotesGrid();
        
        let firstNoteIndex = 1;
        let noteInfo:NoteInfo = new NoteInfo();
        noteInfo.setNoteStatus(NoteStatus.CLOSED);
        await note.updateNote(firstNoteIndex, noteInfo, false);

        let expectedNoteUpdateSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.updatenote');
        await expect(await addPatientLib.getNotesLib().getNoteSuccessMessage()).toBe(expectedNoteUpdateSuccessMessage);
    })
})