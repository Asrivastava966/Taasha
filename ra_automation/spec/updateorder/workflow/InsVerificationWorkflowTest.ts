import { LoginLib } from "../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../data/basedata/Patient';
import { Insurance } from '../../../data/basedata/Insurance';
import { CommonUtils } from '../../../utils/CommonUtils';
import { OrderInfo } from '../../../data/info/OrderInfo';
import { ProductInfo } from '../../../data/info/ProductInfo';
import { OrderType } from "../../../data/enums/OrderType";
import { InsuranceType } from "../../../data/enums/InsuranceType";
import { ProductPriceType } from "../../../data/enums/ProductPriceType";
import { PatientInfo } from "../../../data/info/PatientInfo";
import { DeliveryTicketFormInfo } from "../../../data/info/DeliveryTicketFormInfo";
import { FormsInfo } from "../../../data/info/FormsInfo";

let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Update Order- Perform Ins. Verification: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let patientInfo:PatientInfo;
    let insurance:Insurance;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.QUICK_ADD);
        insurance = new Insurance(AddPatientMode.QUICK_ADD, InsuranceType.PRIMARY);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        patientInfo = await patient.addBasePatient(false);
        await insurance.addBaseInsurance(true);
    })

    it('[TEST]: Update order- Verify insurance via Manual Eligibility Check', async function() {
        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());

        //Prepare data: Order Info
        let orderInfo = new OrderInfo(); 
        orderInfo.setOrderType(OrderType.AUTO_CPAP); 

        //Prepare date: Product Info
        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';
        let productInfo_A7035 = new ProductInfo(); 
        productInfo_A7035.setQuantity(+orderInfoProperties.get('orders.orderinfo.productinfo.quantity')); 
        productInfo_A7035.setHcpcs(orderInfoProperties.get('orders.orderinfo.productinfo.hcpcs')); 
        productInfo_A7035.setPr(ProductPriceType.RENTAL);
        productInfo_A7035.setProduct(orderInfoProperties.get('orders.orderinfo.productinfo.product'));

        //Execute test
        await addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode); 
        await addPatientLib.getOrdersLib().getOrderInfoLib().fillProductInfo(productInfo_A7035);
        await addPatientLib.getOrdersLib().getOrderInfoLib().addProduct();
        await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();

        //Verify the added Insurance 
        let verificationDate:Date = commonUtils.getDateFromString(orderInfoProperties.get('orders.insuranceverification.verificationdate'));
        await addPatientLib.getOrdersLib().verifyInsurance(verificationDate);

        //Verification points 
        let expectedMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateinsurance');
        await expect(addPatientLib.getOrdersLib().getInsVerificationLib().getOrderInsuranceSuccessMessage()).toEqual(expectedMessage);

        await addPatientLib.getOrdersLib().navigateToOrderInfoTab();

        //Generate Delivery Ticket 
        let deliveryTicketFormInfo = new DeliveryTicketFormInfo();
        deliveryTicketFormInfo.setPatientSign(true);

        let formsInfo = new FormsInfo();
        formsInfo.setDeliveryTicketFormInfo(deliveryTicketFormInfo);

        await addPatientLib.getOrdersLib().generateForms(formsInfo);
        await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
    })
})