import { LoginLib } from "../../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../../data/basedata/Patient';
import { Insurance } from '../../../../../data/basedata/Insurance';
import { OrderType } from "../../../../../data/enums/OrderType";
import { CommonUtils } from "../../../../../utils/CommonUtils";
import { InsuranceType } from "../../../../../data/enums/InsuranceType";
import { Order } from "../../../../../data/basedata/Order";
import { Product } from "../../../../../data/basedata/Product";
import { Document } from "../../../../../data/basedata/Document";
import { DocumentType } from "../../../../../data/enums/DocumentType";
import { Tabs } from "../../../../../data/enums/Tabs";
import { DeliveryTicketFormInfo } from "../../../../../data/info/DeliveryTicketFormInfo";
import { FormsInfo } from "../../../../../data/info/FormsInfo";
import { browser } from "protractor";

let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Add Patient via Normal Add- Generate Delivery Ticket and Complete Order: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
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
        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
        await patient.addBasePatient(true);
        await addPatientLib.navigateToInsuranceInfoTab();
        await insurance.addBaseInsurance(true);
        await addPatientLib.navigateToOrdersTab();
        await order.addBaseOrder(false);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);
    })

    it('[TEST]: Add patient- Update default order- Generate Delivery Ticket and Complete Order', async function() { 
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
        // await addPatientLib.getOrdersLib().navigateToDocumentsTab();
        // await document.uploadTestDocument();
        // await addPatientLib.getOrdersLib().navigateToOrderInfoTab();
        await addPatientLib.getOrdersLib().getOrderInfoLib().completeAndConfirmOrder();
        let expectedSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.completeorder');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toContain(expectedSuccessMessage);
    })
})