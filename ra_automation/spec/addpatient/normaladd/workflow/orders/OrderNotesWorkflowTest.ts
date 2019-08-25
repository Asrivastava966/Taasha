import { LoginLib } from "../../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../../data/basedata/Patient';
import { Insurance } from '../../../../../data/basedata/Insurance';
import { InsuranceType } from "../../../../../data/enums/InsuranceType";
import { OrderNote } from "../../../../../data/basedata/OrderNote";
import { OrderNoteType } from "../../../../../data/enums/OrderNoteType";
import { NoteInfo } from "../../../../../data/info/NoteInfo";
import { NoteStatus } from "../../../../../data/enums/NoteStatus";
import { Order } from "../../../../../data/basedata/Order";
import { OrderType } from "../../../../../data/enums/OrderType";

let propertiesReader = require('properties-reader');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Add Patient Note via Normal Add- Add a new Open Note, update it to a Closed Note: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let insurance:Insurance;
    let order:Order;
    let orderNote:OrderNote;

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
        order = new Order(AddPatientMode.NORMAL_ADD, OrderType.AUTO_CPAP);
        orderNote = new OrderNote(OrderNoteType.INSURANCE_VERIFICATION);
        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';

        await patient.addBasePatient(true);
        await addPatientLib.navigateToInsuranceInfoTab();
        await insurance.addBaseInsurance(true);
        await addPatientLib.navigateToOrdersTab();
        await order.addBaseOrder(false);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();

        //Add a new Open Note 
        await addPatientLib.getOrdersLib().navigateToOrderNotesTab();
        await orderNote.addBaseNote();

        //Verification points 
        let expectedNoteSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.addordernote');
        let expectedCommentSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.ordernote.addcomment');
        await expect(await addPatientLib.getOrdersLib().getOrderNotesLib().getNoteSuccessMessage()).toBe(expectedNoteSuccessMessage);
        await expect(await addPatientLib.getOrdersLib().getOrderNotesLib().getCommentSuccessMessage()).toBe(expectedCommentSuccessMessage);
    })

    it('[TEST]: Update patient- Add a new Open Note, Update it to a Closed Note', async function() { 
        homepageLib = new HomepageLib();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);

        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.QUICK_ADD);
        insurance = new Insurance(AddPatientMode.QUICK_ADD, InsuranceType.PRIMARY);
        order = new Order(AddPatientMode.QUICK_ADD, OrderType.AUTO_CPAP);
        orderNote = new OrderNote(OrderNoteType.INSURANCE_VERIFICATION);
        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';

        let basePatientInfo = await patient.addBasePatient(false);
        await insurance.addBaseInsurance(false);
        await order.addBaseOrder(false);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();

        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());

        //Add a new Open Note 
        await addPatientLib.getOrdersLib().navigateToOrderNotesTab();
        await orderNote.addBaseNote();

        //Verification points 
        let expectedNoteSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.addordernote');
        let expectedCommentSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.ordernote.addcomment');
        await expect(await addPatientLib.getOrdersLib().getOrderNotesLib().getNoteSuccessMessage()).toBe(expectedNoteSuccessMessage);
        await expect(await addPatientLib.getOrdersLib().getOrderNotesLib().getCommentSuccessMessage()).toBe(expectedCommentSuccessMessage);

        //Update the same note to a Closed Note 
        await addPatientLib.getOrdersLib().getOrderNotesLib().navigateBackToOrderNotesGrid();
        
        let firstNoteIndex = 1;
        let noteInfo:NoteInfo = new NoteInfo();
        noteInfo.setNoteStatus(NoteStatus.CLOSED);
        await orderNote.updateNote(firstNoteIndex, noteInfo, false);

        let expectedNoteUpdateSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.updateordernote');
        await expect(await addPatientLib.getOrdersLib().getOrderNotesLib().getNoteSuccessMessage()).toBe(expectedNoteUpdateSuccessMessage);
    })
})