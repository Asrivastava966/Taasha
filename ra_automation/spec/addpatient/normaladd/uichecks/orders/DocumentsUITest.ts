import { LoginLib } from "../../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../../data/basedata/Patient';
import { Insurance } from '../../../../../data/basedata/Insurance';
import { InsuranceType } from "../../../../../data/enums/InsuranceType";
import { PatientInfo } from "../../../../../data/info/PatientInfo";
import { DocumentInfo } from "../../../../../data/info/DocumentInfo";

let propertiesReader = require('properties-reader');
let documentInfoProperties = propertiesReader('ra_automation/data/properties/DocumentInfo.file');

describe('[SPEC]: Upload a Document: UI tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let insurance:Insurance;
    let basePatientInfo:PatientInfo;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.QUICK_ADD);
        insurance = new Insurance(AddPatientMode.QUICK_ADD, InsuranceType.PRIMARY);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        basePatientInfo = await patient.addBasePatient(false);
        await insurance.addBaseInsurance(true);
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());
        await addPatientLib.getOrdersLib().navigateToDocumentsTab();
    })

    it('[TEST]: Verify the disabled save button', async function() { 
        let documentInfo = new DocumentInfo();
        documentInfo.setDocumentPath(documentInfoProperties.get('documents.documentinfo.path'));
        await addPatientLib.getOrdersLib().getDocumentsLib().fillDocumentInfo(documentInfo);

        expect(await addPatientLib.getOrdersLib().getDocumentsLib().getSaveButtonEnabledStatus()).toBe(false);
    })

    it('[TEST]: Verify the close button in the Action column', async function() { 
        let documentInfo = new DocumentInfo();
        documentInfo.setDocumentPath(documentInfoProperties.get('documents.documentinfo.path'));
        await addPatientLib.getOrdersLib().getDocumentsLib().fillDocumentInfo(documentInfo);
        await addPatientLib.getOrdersLib().getDocumentsLib().removeUploadedDocument();

        expect(await addPatientLib.getOrdersLib().getDocumentsLib().getSaveButtonDisplayedStatus()).toBe(false);
    })

    it('[TEST]: Verify the Cancel button', async function() {
        let documentInfo = new DocumentInfo();
        documentInfo.setDocumentPath(documentInfoProperties.get('documents.documentinfo.path'));
        await addPatientLib.getOrdersLib().getDocumentsLib().fillDocumentInfo(documentInfo);
        await addPatientLib.getOrdersLib().getDocumentsLib().cancel();

        expect(await addPatientLib.getOrdersLib().getDocumentsLib().getSaveButtonDisplayedStatus()).toBe(false);
    })
})