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
const LoginLib_1 = require("../../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../../lib/homepage/HomepageLib");
const AddPatientMode_1 = require("../../../../data/enums/AddPatientMode");
const AddPatientLib_1 = require("../../../../lib/normaladdpatientpage/AddPatientLib");
const Patient_1 = require("../../../../data/basedata/Patient");
const Insurance_1 = require("../../../../data/basedata/Insurance");
const InsuranceType_1 = require("../../../../data/enums/InsuranceType");
const Note_1 = require("../../../../data/basedata/Note");
const NoteType_1 = require("../../../../data/enums/NoteType");
const NoteInfo_1 = require("../../../../data/info/NoteInfo");
const NoteStatus_1 = require("../../../../data/enums/NoteStatus");
let propertiesReader = require('properties-reader');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Add Patient Note via Normal Add- Add a new Open Note, update it to a Closed Note: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let insurance;
    let note;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            yield loginLib.doBaseLogin();
        });
    });
    it('[TEST]: Add patient- Add a new Open Note', function () {
        return __awaiter(this, void 0, void 0, function* () {
            homepageLib = new HomepageLib_1.HomepageLib();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.NORMAL_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            note = new Note_1.Note(NoteType_1.NoteType.BILLING_NOTES);
            yield patient.addBasePatient(true);
            yield addPatientLib.navigateToInsuranceInfoTab();
            yield insurance.addBaseInsurance(true);
            //Add a new Open Note 
            yield addPatientLib.navigateToNotesTab();
            yield note.addBaseNote();
            //Verification points 
            let expectedNoteSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.addnote');
            let expectedCommentSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.note.addcomment');
            yield expect(yield addPatientLib.getNotesLib().getNoteSuccessMessage()).toBe(expectedNoteSuccessMessage);
            yield expect(yield addPatientLib.getNotesLib().getCommentSuccessMessage()).toBe(expectedCommentSuccessMessage);
        });
    });
    it('[TEST]: Update patient- Add a new Open Note, Update it to a Closed Note', function () {
        return __awaiter(this, void 0, void 0, function* () {
            homepageLib = new HomepageLib_1.HomepageLib();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.QUICK_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            note = new Note_1.Note(NoteType_1.NoteType.BILLING_NOTES);
            let basePatientInfo = yield patient.addBasePatient(false);
            yield insurance.addBaseInsurance(true);
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());
            //Add a new Open Note 
            yield addPatientLib.navigateToNotesTab();
            yield note.addBaseNote();
            //Verification points 
            let expectedNoteSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.addnote');
            let expectedCommentSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.note.addcomment');
            yield expect(yield addPatientLib.getNotesLib().getNoteSuccessMessage()).toBe(expectedNoteSuccessMessage);
            yield expect(yield addPatientLib.getNotesLib().getCommentSuccessMessage()).toBe(expectedCommentSuccessMessage);
            //Update the same note to a Closed Note 
            yield addPatientLib.getNotesLib().navigateBackToNotesGrid();
            let firstNoteIndex = 1;
            let noteInfo = new NoteInfo_1.NoteInfo();
            noteInfo.setNoteStatus(NoteStatus_1.NoteStatus.CLOSED);
            yield note.updateNote(firstNoteIndex, noteInfo, false);
            let expectedNoteUpdateSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.updatenote');
            yield expect(yield addPatientLib.getNotesLib().getNoteSuccessMessage()).toBe(expectedNoteUpdateSuccessMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXNXb3JrZmxvd1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvYWRkcGF0aWVudC9ub3JtYWxhZGQvd29ya2Zsb3cvTm90ZXNXb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlFQUE4RDtBQUM5RCxzRUFBbUU7QUFDbkUsMEVBQXVFO0FBQ3ZFLHNGQUFtRjtBQUNuRiwrREFBNEQ7QUFDNUQsbUVBQWdFO0FBQ2hFLHdFQUFxRTtBQUNyRSx5REFBc0Q7QUFDdEQsOERBQTJEO0FBQzNELDZEQUEwRDtBQUMxRCxrRUFBK0Q7QUFFL0QsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLDJCQUEyQixHQUFHLGdCQUFnQixDQUFDLHVEQUF1RCxDQUFDLENBQUM7QUFFNUcsUUFBUSxDQUFDLDBHQUEwRyxFQUFFO0lBQ2pILElBQUksUUFBaUIsQ0FBQztJQUN0QixJQUFJLFdBQXVCLENBQUM7SUFDNUIsSUFBSSxhQUEyQixDQUFDO0lBQ2hDLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLElBQVMsQ0FBQztJQUVkLFVBQVUsQ0FBQzs7WUFDUCxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDMUIsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTs7WUFDM0MsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sV0FBVyxDQUFDLG9CQUFvQixDQUFDLCtCQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFbEUsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMs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