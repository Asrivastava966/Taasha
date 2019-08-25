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
import { OrderInfo } from "../../../../../data/info/OrderInfo";
import { Document } from "../../../../../data/basedata/Document";
import { DocumentType } from "../../../../../data/enums/DocumentType";
import { Tabs } from "../../../../../data/enums/Tabs";
import { DeliveryTicketFormInfo } from "../../../../../data/info/DeliveryTicketFormInfo";
import { FormsInfo } from "../../../../../data/info/FormsInfo";

let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils:CommonUtils = new CommonUtils();
let a7035_hcpcsCode = 'A7035';
let a7037_hcpcsCode = 'A7037';

describe('[SPEC]: Add Patient via Normal Add- Generate Delivery Ticket and Complete Order: UI Validation tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let insurance:Insurance;
    let order:Order;
    let orderInfo:OrderInfo;
    let product:Product;
    let document:Document;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.NORMAL_ADD);
        insurance = new Insurance(AddPatientMode.NORMAL_ADD, InsuranceType.PRIMARY);
        order = new Order(AddPatientMode.NORMAL_ADD, OrderType.AUTO_CPAP);
        orderInfo = new OrderInfo();
        product = new Product();
        document = new Document(Tabs.ORDER, DocumentType.COMPLETED_DELIVERY_TICKET);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
        await patient.addBasePatient(true);
        await addPatientLib.navigateToInsuranceInfoTab();
        await insurance.addBaseInsurance(true);
        await addPatientLib.navigateToOrdersTab();
    })

    it('[TEST]: Verify validation checks for trying to complete an order without any product', async function() { 
        await addPatientLib.getOrdersLib().navigateToNewOrderForm();
        await addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();

        //Verification points 
        let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.completeorderwithoutproduct');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getValidationMessageOfProductGrid()).toContain(expectedValidationMessage);
    })

    it('[TEST]: Verify validation checks for trying to complete an order having products without price types', async function() { 
        let defaultOrderIndex = 1;
        await order.updateNormalOrderWithBaseOrderInfo(defaultOrderIndex, false);
        await addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();

        //Verification points 
        let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.productswithoutpricetype');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getValidationMessageOfProductGrid()).toContain(expectedValidationMessage);
    })

    it('[TEST]: Verify validation checks for trying to complete an order before saving it', async function() { 
        let defaultOrderIndex = 1;
        await order.updateNormalOrderWithBaseOrderInfo(defaultOrderIndex, false);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();

        //Verification points 
        let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.completeorderbeforesaving');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getValidationMessageOfProductGrid()).toContain(expectedValidationMessage);
    })

    it('[TEST]: Verify validation checks for trying to complete an order without insurance verification', async function() { 
        let defaultOrderIndex = 1;
        await order.updateNormalOrderWithBaseOrderInfo(defaultOrderIndex, false);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);
        await addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();

        //Verification points 
        let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.completeorderwithoutinsverification');
        await expect(addPatientLib.getOrdersLib().getInformationModalMessage()).toContain(expectedValidationMessage);
        await addPatientLib.getOrdersLib().confirmOK();
    })

    it('[TEST]: Verify validation checks for trying to complete an order without generating a delivery ticket', async function() { 
        let defaultOrderIndex = 1;
        await order.updateNormalOrderWithBaseOrderInfo(defaultOrderIndex, false);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);

        let verificationDate:Date = commonUtils.getDateFromString(orderInfoProperties.get('orders.insuranceverification.verificationdate'));
        await addPatientLib.getOrdersLib().verifyInsurance(verificationDate);
        await addPatientLib.getOrdersLib().navigateToOrderInfoTab();
        await addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();

        //Verification points 
        let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.completeorderwithoutdeliveryticket');
        await expect(addPatientLib.getOrdersLib().getInformationModalMessage()).toContain(expectedValidationMessage);
        await addPatientLib.getOrdersLib().confirmOK();
    })

    it('[TEST]: Verify validation checks for trying to complete an order without a setup date', async function() { 
        await addPatientLib.getOrdersLib().navigateToNewOrderForm();
        
        orderInfo.setOrderType(OrderType.AUTO_CPAP);
        await addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);

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
        await addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();

        //Verification points 
        let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.completeorderwithoutsetupdate');
        await expect(addPatientLib.getOrdersLib().getInformationModalMessage()).toContain(expectedValidationMessage);
        await addPatientLib.getOrdersLib().confirmOK();
    })
})