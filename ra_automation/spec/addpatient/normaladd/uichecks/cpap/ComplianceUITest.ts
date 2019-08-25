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
import { ProductInfo } from "../../../../../data/info/ProductInfo";
import { PatientInfo } from "../../../../../data/info/PatientInfo";
import { Tabs } from "../../../../../data/enums/Tabs";
import { ProductManufacturer } from "../../../../../data/enums/ProductManufacturer";
import { DeliveryTicketFormInfo } from "../../../../../data/info/DeliveryTicketFormInfo";
import { FormsInfo } from "../../../../../data/info/FormsInfo";

let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let commonUtils:CommonUtils = new CommonUtils();
let e0601_hcpcsCode = 'E0601';
let a7035_hcpcsCode = 'A7035';
let a7037_hcpcsCode = 'A7037';

describe('[SPEC]: Compliance: UI tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
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
        document = new Document(Tabs.PATIENT, DocumentType.COMPLETED_DELIVERY_TICKET);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
        patientInfo = await patient.addBasePatient(true);
        await addPatientLib.navigateToInsuranceInfoTab();
        await insurance.addBaseInsurance(true);
        await addPatientLib.navigateToOrdersTab();
        await order.addBaseOrder(false);
    })

    it('[TEST]: Verify auto-populated field values, Product manufacturer- Respironics', async function() { 
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        let respironicsProductInfo:ProductInfo = await product.addBaseRespironicsProduct(true);
        
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

        //Need to upload delivery ticket via Document upload
        // await addPatientLib.navigateToDocumentsTab();
        // await document.uploadTestDocument();

        await addPatientLib.navigateToCPAPTab();
        await addPatientLib.getCPAPLib().navigateToComplianceTab();
        
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getFirstNameValue()).toBe(patientInfo.getFirstName());
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getLastNameValue()).toBe(patientInfo.getLastName());
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getManufacturerValue()).toBe(respironicsProductInfo.getManufacturer());
    })

    it('[TEST]: Verify auto-populated field values, Product manufacturer- Resmed', async function() {
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(e0601_hcpcsCode);
        let resmedProductInfo:ProductInfo = await product.addBaseResmedProduct(true);

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

        // //Need to upload delivery ticket via Document upload
        // await addPatientLib.navigateToDocumentsTab();
        // await document.uploadTestDocument();

        await addPatientLib.navigateToCPAPTab();
        await addPatientLib.getCPAPLib().navigateToComplianceTab();
        
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getFirstNameValue()).toBe(patientInfo.getFirstName());
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getLastNameValue()).toBe(patientInfo.getLastName());
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getManufacturerValue()).toBe(resmedProductInfo.getManufacturer());
    })

    it('[TEST]: Verify disabled fields, Product manufacturer- Respironics', async function() { 
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseRespironicsProduct(true);
        
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

        //Need to upload delivery ticket via Document upload
        // await addPatientLib.navigateToDocumentsTab();
        // await document.uploadTestDocument();

        await addPatientLib.navigateToCPAPTab();
        await addPatientLib.getCPAPLib().navigateToComplianceTab();
        
        let disabledFlag = 'defaultDisabled';
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getFirstNameInputFieldDisabledAttributeValue()).toBe(disabledFlag);
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getLastNameInputFieldDisabledAttributeValue()).toBe(disabledFlag);
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getDOBInputFieldDisabledAttributeValue()).toBe(disabledFlag);
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getSetupDateInputFieldDisabledAttributeValue()).toBe(disabledFlag);
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getStatusFieldDisabledAttributeValue()).toBe(disabledFlag);
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getManufacturerInputFieldDisabledAttributeValue()).toBe(disabledFlag);
        await expect(await addPatientLib.getCPAPLib().getComplianceLib().getOrderNoFieldDisabledAttributeValue()).toBe(disabledFlag);
    })
})