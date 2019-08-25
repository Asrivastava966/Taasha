import { LoginLib } from "../../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../../data/basedata/Patient';
import { Insurance } from '../../../../../data/basedata/Insurance';
import { InsuranceType } from "../../../../../data/enums/InsuranceType";
import { DocumentType } from "../../../../../data/enums/DocumentType";
import { PatientInfo } from "../../../../../data/info/PatientInfo";
import { DocumentInfo } from "../../../../../data/info/DocumentInfo";
import { async } from "q";

let propertiesReader = require('properties-reader');
let documentInfoProperties = propertiesReader('ra_automation/data/properties/DocumentInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Upload a Document: UI Validation tests',async function() {
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
    })

    it('[TEST]: Verify the validation checks when while uploading a new document user tries to navigate to some other page', async function() { 
        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());
        await addPatientLib.getOrdersLib().navigateToDocumentsTab();

        //Upload a Document
        let documentInfo = new DocumentInfo();
        let defaultOrderIndex = 1;
        documentInfo.setDocumentPath(documentInfoProperties.get('documents.documentinfo.path'));
        documentInfo.setDocumentType(DocumentType.COMPLETED_DELIVERY_TICKET);
        documentInfo.setOrderIndex(defaultOrderIndex);
        documentInfo.setNotes(documentInfoProperties.get('documents.documentinfo.notes'));

        await addPatientLib.getOrdersLib().getDocumentsLib().fillDocumentInfo(documentInfo);
        await addPatientLib.getOrdersLib().navigateToDeliveryInstTab();

        let expectedConfirmationMessage = validationMessageProperties.get('confirmation.modal.unsavedchanges');
        expect(await addPatientLib.getOrdersLib().getConfirmationModalMessage()).toBe(expectedConfirmationMessage);
    })
})