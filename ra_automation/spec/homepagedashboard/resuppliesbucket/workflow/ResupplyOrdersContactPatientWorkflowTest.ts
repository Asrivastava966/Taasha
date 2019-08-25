import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../data/basedata/Patient';
import { Insurance } from '../../../../data/basedata/Insurance';
import { OrderType } from "../../../../data/enums/OrderType";
import { CommonUtils } from "../../../../utils/CommonUtils";
import { InsuranceType } from "../../../../data/enums/InsuranceType";
import { Order } from "../../../../data/basedata/Order";
import { Product } from "../../../../data/basedata/Product";
import { UserInfo } from "../../../../data/info/UserInfo";
import { AdminDashboardLib } from "../../../../lib/admindashboardpage/AdminDashboardLib";
import { AdminDashboardBucket } from "../../../../data/enums/AdminDashboardBucket";
import { ResuppliesCampaignListLib } from "../../../../lib/admindashboardpage/resupplycampaignsbucket/ResuppliesCampaignListLib";
import { PatientInfo } from "../../../../data/info/PatientInfo";
import { ResuppliesContactInformationLib } from "../../../../lib/homepage/resuppliesbucket/resuppliescontactinformationpage/ResuppliesContactInformationLib";
import { HomepageDashboardBucket } from "../../../../data/enums/HomepageDashboardBucket";
import { ResuppliesDashboardLib } from "../../../../lib/homepage/resuppliesbucket/ResuppliesDashboardLib";
import { ResuppliesDashboardBucket } from "../../../../data/enums/ResuppliesDashboardBucket";
import { ResupplyOrdersLib } from "../../../../lib/homepage/resuppliesbucket/ResupplyOrdersLib";
import { CallResultPatientNoteInfo } from "../../../../data/info/CallResultPatientNoteInfo";
import { ResupplyOrderInfo } from "../../../../data/info/ResupplyOrderInfo";
import { CallResultPatientNote } from "../../../../data/enums/CallResultPatientNote";
import { Document } from "../../../../data/basedata/Document";
import { Tabs } from "../../../../data/enums/Tabs";
import { DocumentType } from "../../../../data/enums/DocumentType";
import { DeliveryTicketFormInfo } from "../../../../data/info/DeliveryTicketFormInfo";
import { FormsInfo } from "../../../../data/info/FormsInfo";

let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let userInfoProperties = propertiesReader('ra_automation/data/properties/UserInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Resupply Orders- Contact Patient: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let adminDashboardLib:AdminDashboardLib;
    let resuppliesCampaignListLib:ResuppliesCampaignListLib;
    let resuppliesContactInformationLib:ResuppliesContactInformationLib;
    let resuppliesDashboardLib:ResuppliesDashboardLib;
    let resupplyOrdersLib:ResupplyOrdersLib;
    let patient:Patient;
    let patientInfo:PatientInfo;
    let insurance:Insurance;
    let order:Order;
    let product:Product;
    let document:Document;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.NORMAL_ADD);
        insurance = new Insurance(AddPatientMode.NORMAL_ADD, InsuranceType.PRIMARY);
        order = new Order(AddPatientMode.NORMAL_ADD, OrderType.AUTO_CPAP);
        product = new Product();
        document = new Document(Tabs.ORDER, DocumentType.COMPLETED_DELIVERY_TICKET);
        adminDashboardLib = new AdminDashboardLib();
        resuppliesCampaignListLib = new ResuppliesCampaignListLib();
        resuppliesContactInformationLib = new ResuppliesContactInformationLib();
        resuppliesDashboardLib = new ResuppliesDashboardLib();
        resupplyOrdersLib = new ResupplyOrdersLib();

        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';
        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
        patientInfo = await patient.addBasePatient(true);
        await addPatientLib.navigateToInsuranceInfoTab();
        await insurance.addBaseInsurance(true);
        await addPatientLib.navigateToOrdersTab();
        await order.addBaseOrder(false);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);
        
        //Verify the added Insurance 
        let verificationDate:Date = commonUtils.getDateFromString(orderInfoProperties.get('orders.insuranceverification.verificationdate'));
        await addPatientLib.getOrdersLib().verifyInsurance(verificationDate);
        await addPatientLib.getOrdersLib().navigateToOrderInfoTab();

        //Generate Delivery Ticket 
        let deliveryTicketFormInfo = new DeliveryTicketFormInfo();
        deliveryTicketFormInfo.setPatientSign(true);

        let formsInfo = new FormsInfo();
        formsInfo.setDeliveryTicketFormInfo(deliveryTicketFormInfo);
        await addPatientLib.getOrdersLib().generateForms(formsInfo);
        await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
        await addPatientLib.getOrdersLib().navigateToDocumentsTab();
        await document.uploadTestDocument();
        await addPatientLib.getOrdersLib().navigateToOrderInfoTab();
        await addPatientLib.getOrdersLib().getOrderInfoLib().completeAndConfirmOrder();

        //Logout -> Login with an Admin User which has rights to trigger a Cron job 
        await homepageLib.logout();

        //SU - Admin credentials 
        let sUserInfo:UserInfo = new UserInfo();
        sUserInfo.setUserName(userInfoProperties.get('userinfo.username.su.adminuser'));
        sUserInfo.setPassword(userInfoProperties.get('userinfo.password.su.adminuser'));
        
        let monthOffset = 4;
        let startDateOfCronJob = new Date(2019,1,1);
        let endDateOfCronJob = commonUtils.getDateWithOffset(monthOffset);

        await loginLib.login(sUserInfo);
        await homepageLib.navigateToAdminDashboardPage();
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.RESUPPLY_CAMPAIGNS);
        await resuppliesCampaignListLib.processCustomCronJob(startDateOfCronJob, endDateOfCronJob);
        await homepageLib.logout();

        await loginLib.doBaseLogin();
    })

    it('[TEST]: Resupplies Contact Information > Contact Patient', async function() { 
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.RESUPPLIES);
        await resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket.NEW_ORDERS);
        await resupplyOrdersLib.navigateToResuppliesContactInformationPage(patientInfo.getFirstName());
        
        let callResultPatientNoteInfo = new CallResultPatientNoteInfo();
        let resupplyOrderInfo = new ResupplyOrderInfo(); 
        await resuppliesContactInformationLib.getContactPatientLib().fillCallResultPatientNote(CallResultPatientNote.LEFT_MESSAGE, callResultPatientNoteInfo, resupplyOrderInfo);
        await resupplyOrdersLib.navigateToResuppliesDashboard();
        await resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket.CONTACT_PATIENT);
        await resupplyOrdersLib.filterResupplyOrdersViaPatientName(patientInfo.getFirstName());
        
        let firstRowIndex = 1;
        let firstNoteCount = 1;
        await expect(await resupplyOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
        await expect(await resupplyOrdersLib.getNumberOfPatientContactNotes(firstRowIndex)).toBe(firstNoteCount);

        await resupplyOrdersLib.navigateToResuppliesContactInformationPageViaRowNumber(firstRowIndex);
        await resuppliesContactInformationLib.getContactPatientLib().fillCallResultPatientNote(CallResultPatientNote.PATIENT_UNAVAILABLE, callResultPatientNoteInfo, resupplyOrderInfo);
        await resupplyOrdersLib.filterResupplyOrdersViaPatientName(patientInfo.getFirstName());
        await expect(await resupplyOrdersLib.getNumberOfPatientContactNotes(firstRowIndex)).toBe(++firstNoteCount);

        await resupplyOrdersLib.navigateToResuppliesContactInformationPageViaRowNumber(firstRowIndex);
        await resuppliesContactInformationLib.getContactPatientLib().fillCallResultPatientNote(CallResultPatientNote.NUMBER_DISCONNECTED, callResultPatientNoteInfo, resupplyOrderInfo);
        await resupplyOrdersLib.filterResupplyOrdersViaPatientName(patientInfo.getFirstName());
        await expect(await resupplyOrdersLib.getNumberOfPatientContactNotes(firstRowIndex)).toBe(++firstNoteCount);
    })

    it('[TEST]: Resupplies Contact Information > Contact Patient - Other', async function() { 
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.RESUPPLIES);
        await resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket.NEW_ORDERS);
        await resupplyOrdersLib.navigateToResuppliesContactInformationPage(patientInfo.getFirstName());
        
        let callResultPatientNoteInfo = new CallResultPatientNoteInfo();
        let resupplyOrderInfo = new ResupplyOrderInfo(); 
        await resuppliesContactInformationLib.getContactPatientLib().fillCallResultPatientNote(CallResultPatientNote.OTHER, callResultPatientNoteInfo, resupplyOrderInfo);
        await resupplyOrdersLib.navigateToResuppliesDashboard();
        await resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket.PENDING);
        await resupplyOrdersLib.filterResupplyOrdersViaPatientName(patientInfo.getFirstName());
        
        let firstRowIndex = 1;
        let firstNoteCount = 1;
        await expect(await resupplyOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
        await expect(await resupplyOrdersLib.getNumberOfPatientContactNotes(firstRowIndex)).toBe(firstNoteCount);

        await resupplyOrdersLib.navigateToResuppliesContactInformationPageViaRowNumber(firstRowIndex);
        await resuppliesContactInformationLib.getContactPatientLib().fillCallResultPatientNote(CallResultPatientNote.LEFT_MESSAGE, callResultPatientNoteInfo, resupplyOrderInfo);
        await resupplyOrdersLib.navigateToResuppliesDashboard();
        await resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket.CONTACT_PATIENT);
        await resupplyOrdersLib.filterResupplyOrdersViaPatientName(patientInfo.getFirstName());

        await expect(await resupplyOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
        await expect(await resupplyOrdersLib.getNumberOfPatientContactNotes(firstRowIndex)).toBe(++firstNoteCount);
    })
});