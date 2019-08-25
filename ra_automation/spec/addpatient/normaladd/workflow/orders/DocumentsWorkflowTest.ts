import { LoginLib } from "../../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../../data/basedata/Patient';
import { Insurance } from '../../../../../data/basedata/Insurance';
import { InsuranceType } from "../../../../../data/enums/InsuranceType";
import { Document } from "../../../../../data/basedata/Document";
import { DocumentType } from "../../../../../data/enums/DocumentType";
import { Tabs } from "../../../../../data/enums/Tabs";
import { PatientInfo } from "../../../../../data/info/PatientInfo";

let propertiesReader = require('properties-reader');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Upload a Document: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let insurance:Insurance;
    let document:Document;
    let basePatientInfo:PatientInfo;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.QUICK_ADD);
        insurance = new Insurance(AddPatientMode.QUICK_ADD, InsuranceType.PRIMARY);
        document = new Document(Tabs.ORDER, DocumentType.COMPLETED_DELIVERY_TICKET);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        basePatientInfo = await patient.addBasePatient(false);
        await insurance.addBaseInsurance(true);
    })

    it('[TEST]: Update order - Upload a new Document as \'Completed Delivery Ticket\' Document Type', async function() { 
        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());

        //Upload a Document
        await addPatientLib.getOrdersLib().navigateToDocumentsTab();
        await document.uploadTestDocument();

        let expectedSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.uploaddocument');
        expect(await addPatientLib.getDocumentsLib().getSuccessMessage()).toBe(expectedSuccessMessage);
    })
})