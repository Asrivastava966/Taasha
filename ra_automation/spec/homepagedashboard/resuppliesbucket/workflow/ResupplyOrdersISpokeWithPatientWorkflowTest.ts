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
import { ISpokeWithPatientInfo } from "../../../../data/info/ISpokeWithPatientInfo";
import { ISpokeWithPatientAnswers } from "../../../../data/enums/ISpokeWithPatientAnswers";
import { ReportsBucket } from "../../../../data/enums/ReportsBucket";
import { ReportsLib } from "../../../../lib/reportspage/ReportsLib";
import { OrdersLib } from "../../../../lib/reportspage/OrdersLib";
import { PendingOrdersLib } from "../../../../lib/homepage/pendingbucket/PendingOrdersLib";
import { ContactPatientOrdersLib } from "../../../../lib/homepage/contactpatientbucket/ContactPatientOrdersLib";
import { Document } from "../../../../data/basedata/Document";
import { Tabs } from "../../../../data/enums/Tabs";
import { DocumentType } from "../../../../data/enums/DocumentType";
import { DeliveryTicketFormInfo } from "../../../../data/info/DeliveryTicketFormInfo";
import { FormsInfo } from "../../../../data/info/FormsInfo";

let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let userInfoProperties = propertiesReader('ra_automation/data/properties/UserInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Resupply Orders- I spoke with the patient: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let pendingOrdersLib:PendingOrdersLib;
    let contactPatientOrdersLib:ContactPatientOrdersLib;
    let reportsLib:ReportsLib;
    let reportsOrderLib:OrdersLib;
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
        pendingOrdersLib = new PendingOrdersLib();
        contactPatientOrdersLib = new ContactPatientOrdersLib();
        reportsLib = new ReportsLib();
        reportsOrderLib = new OrdersLib();
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

    it('[TEST]: Resupplies Contact Information > I spoke with the patient - Order cancelled', async function() { 
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.RESUPPLIES);
        await resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket.NEW_ORDERS);
        await resupplyOrdersLib.navigateToResuppliesContactInformationPage(patientInfo.getFirstName());
        
        let iSpokeWithPatientInfo:ISpokeWithPatientInfo = new ISpokeWithPatientInfo();
        iSpokeWithPatientInfo.setQuestionOneAnswer(ISpokeWithPatientAnswers.NO);
        iSpokeWithPatientInfo.setQuestionTwoAnswer(ISpokeWithPatientAnswers.NO);
        await resuppliesContactInformationLib.getContactPatientLib().fillISpokeWithThePatientQuestionnaire(iSpokeWithPatientInfo);
        await resuppliesContactInformationLib.getContactPatientLib().next();
        await resuppliesContactInformationLib.getContactPatientLib().saveCancelResupplyOrderNote();
        
        let firstRowIndex = 1;
        await homepageLib.navigateToReportsPage();
        await reportsLib.navigateToReportsBucket(ReportsBucket.CANCELLED);
        await reportsOrderLib.searchViaPatientNameFilter(patientInfo.getFirstName());
        
        await expect(await reportsOrderLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
    })
    
    it('[TEST]: Resupplies Contact Information > I spoke with the patient - YYNN', async function() { 
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.RESUPPLIES);
        await resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket.NEW_ORDERS);
        await resupplyOrdersLib.navigateToResuppliesContactInformationPage(patientInfo.getFirstName());
        
        let iSpokeWithPatientInfo:ISpokeWithPatientInfo = new ISpokeWithPatientInfo();
        await resuppliesContactInformationLib.getContactPatientLib().fillISpokeWithThePatientQuestionnaire(iSpokeWithPatientInfo);
        await resuppliesContactInformationLib.getContactPatientLib().next();
        await resuppliesContactInformationLib.getSuppliesLib().next();
        await resuppliesContactInformationLib.getProcessResultLib().finish();
        await resuppliesContactInformationLib.getProcessResultLib().save();

        await resupplyOrdersLib.navigateToResuppliesDashboard();
        await resuppliesDashboardLib.navigateBackToHomepageDashboard();
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.PENDING);
        await pendingOrdersLib.searchViaPatientNameFilter(patientInfo.getFirstName());

        let firstRowIndex = 1;
        expect(await pendingOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
    })

    it('[TEST]: Resupplies Contact Information > I spoke with the patient - YYYN', async function() { 
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.RESUPPLIES);
        await resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket.NEW_ORDERS);
        await resupplyOrdersLib.navigateToResuppliesContactInformationPage(patientInfo.getFirstName());
        
        let iSpokeWithPatientInfo:ISpokeWithPatientInfo = new ISpokeWithPatientInfo();
        iSpokeWithPatientInfo.setQuestionThreeAnswer(ISpokeWithPatientAnswers.YES);
        await resuppliesContactInformationLib.getContactPatientLib().fillISpokeWithThePatientQuestionnaire(iSpokeWithPatientInfo);
        await resuppliesContactInformationLib.getContactPatientLib().next();
        await resuppliesContactInformationLib.getSuppliesLib().next();
        await resuppliesContactInformationLib.getProcessResultLib().finish();
        await resuppliesContactInformationLib.getProcessResultLib().save();

        await resupplyOrdersLib.navigateToResuppliesDashboard();
        await resuppliesDashboardLib.navigateBackToHomepageDashboard();
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.PENDING);
        await pendingOrdersLib.searchViaPatientNameFilter(patientInfo.getFirstName());

        let firstRowIndex = 1;
        let expectedOrderTypeInPendingOrders = 'RESUPPLY';
        expect(await pendingOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
        expect(await pendingOrdersLib.getOrderType(firstRowIndex)).toContain(expectedOrderTypeInPendingOrders);

        await homepageLib.navigateToHomepage();
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.CONTACT_PATIENT);
        await contactPatientOrdersLib.searchViaPatientNameFilter(patientInfo.getFirstName());

        let expectedOrderTypeInContactPatient = 'Patient-ReEducation';
        expect(await pendingOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
        expect(await pendingOrdersLib.getOrderType(firstRowIndex)).toContain(expectedOrderTypeInContactPatient);
    })

    it('[TEST]: Resupplies Contact Information > I spoke with the patient - YYYY', async function() { 
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.RESUPPLIES);
        await resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket.NEW_ORDERS);
        await resupplyOrdersLib.navigateToResuppliesContactInformationPage(patientInfo.getFirstName());
        
        let iSpokeWithPatientInfo:ISpokeWithPatientInfo = new ISpokeWithPatientInfo();
        iSpokeWithPatientInfo.setQuestionThreeAnswer(ISpokeWithPatientAnswers.YES);
        iSpokeWithPatientInfo.setQuestionFourAnswer(ISpokeWithPatientAnswers.YES);
        await resuppliesContactInformationLib.getContactPatientLib().fillISpokeWithThePatientQuestionnaire(iSpokeWithPatientInfo);
        await resuppliesContactInformationLib.getContactPatientLib().next();
        await resuppliesContactInformationLib.getSuppliesLib().next();
        await resuppliesContactInformationLib.getProcessResultLib().finish();
        await resuppliesContactInformationLib.getProcessResultLib().save();

        await resupplyOrdersLib.navigateToResuppliesDashboard();
        await resuppliesDashboardLib.navigateBackToHomepageDashboard();
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.PENDING);
        await pendingOrdersLib.searchViaPatientNameFilter(patientInfo.getFirstName());

        let firstRowIndex = 1;
        let expectedOrderTypeInPendingOrders = 'RESUPPLY';
        expect(await pendingOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
        expect(await pendingOrdersLib.getOrderType(firstRowIndex)).toContain(expectedOrderTypeInPendingOrders);

        await homepageLib.navigateToHomepage();
        await homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket.CONTACT_PATIENT);
        await contactPatientOrdersLib.searchViaPatientNameFilter(patientInfo.getFirstName());

        let expectedOrderTypeInContactPatient = 'Patient-ReEducation';
        expect(await pendingOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
        expect(await pendingOrdersLib.getOrderType(firstRowIndex)).toContain(expectedOrderTypeInContactPatient);
    })
});