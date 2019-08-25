import { LoginLib } from "../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../data/enums/AddPatientMode";
import { ProductPriceType } from "../../../data/enums/ProductPriceType";
import { Patient } from '../../../data/basedata/Patient';
import { Insurance } from '../../../data/basedata/Insurance';
import { AddPatientLib } from "../../../lib/normaladdpatientpage/AddPatientLib";
import { OrderInfo } from '../../../data/info/OrderInfo';
import { ProductInfo } from '../../../data/info/ProductInfo';
import { OrderType } from "../../../data/enums/OrderType";
import { InsuranceType } from "../../../data/enums/InsuranceType";
import { PatientInfo } from "../../../data/info/PatientInfo";
import { Order } from "../../../data/basedata/Order";
import { Product } from "../../../data/basedata/Product";
import { PlanOfCareFormInfo } from "../../../data/info/PlanOfCareFormInfo";
import { FormsInfo } from "../../../data/info/FormsInfo";
import { PatientSurveyFormInfo } from "../../../data/info/PatientSurveyFormInfo";
import { ABNFormInfo } from "../../../data/info/ABNFormInfo";

let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Update Order Info: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let patientInfo:PatientInfo;
    let insurance:Insurance;
    let order:Order;
    let product:Product;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.QUICK_ADD);
        insurance = new Insurance(AddPatientMode.QUICK_ADD, InsuranceType.PRIMARY);
        order = new Order(AddPatientMode.NORMAL_ADD, OrderType.AUTO_CPAP);
        product = new Product();

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        patientInfo = await patient.addBasePatient(false);
        await insurance.addBaseInsurance(true);
    }) 

    it('[TEST]: Update Order - Order type: Auto CPAP, Product: A7035', async function() {
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

        //Verification points
        let expectedSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateorder');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedSuccessMessage);
    })

    it('[TEST]: Create two orders having the same Order Type', async function() {
        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());
        await addPatientLib.getOrdersLib().navigateBackToOrdersTab();
        
        let firstRowIndex = 1;
        await order.updateNormalOrderWithBaseOrderInfo(firstRowIndex, false);

        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';

        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);

        let expectedUpdateOrderSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateorder');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedUpdateOrderSuccessMessage);

        await addPatientLib.getOrdersLib().navigateBackToOrdersTab();
        await addPatientLib.getOrdersLib().navigateToNewOrderForm();
        
        let orderInfo = new OrderInfo(); 
        orderInfo.setOrderType(OrderType.AUTO_CPAP); 
        await addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);
        expect(await addPatientLib.getOrdersLib().getConfirmationModalMessage()).toContain(validationMessagesProperties.get('validation.addpatient.normaladd.existingorder'));
        await addPatientLib.getOrdersLib().confirmYes();
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);

        let expectedAddedOrderSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.addorder');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedAddedOrderSuccessMessage);
    })

    it('[TEST]: Update order to have Plan Of Care form', async function() {
        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());
        await addPatientLib.getOrdersLib().navigateBackToOrdersTab();
        
        let firstRowIndex = 1;
        await order.updateNormalOrderWithBaseOrderInfo(firstRowIndex, false);

        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';

        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);

        let planOfCareFormInfo = new PlanOfCareFormInfo();
        planOfCareFormInfo.setTechnicianSign(true);

        let formsInfo = new FormsInfo();
        formsInfo.setPlanOfCareFormInfo(planOfCareFormInfo);

        await addPatientLib.getOrdersLib().generateForms(formsInfo);
        await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();

        let expectedUpdateOrderSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateorder');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedUpdateOrderSuccessMessage);
    })

    it('[TEST]: Update order to have Patient Servey form', async function() {
        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());
        await addPatientLib.getOrdersLib().navigateBackToOrdersTab();
        
        let firstRowIndex = 1;
        await order.updateNormalOrderWithBaseOrderInfo(firstRowIndex, false);

        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';

        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);

        let patientSurveyFormInfo = new PatientSurveyFormInfo();
        patientSurveyFormInfo.setPatientSignature(true);

        let formsInfo = new FormsInfo();
        formsInfo.setPatientSurveyFormInfo(patientSurveyFormInfo);

        await addPatientLib.getOrdersLib().generateForms(formsInfo);
        await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();

        let expectedUpdateOrderSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateorder');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedUpdateOrderSuccessMessage);
    })

    it('[TEST]: Update order to have ABN form', async function() {
        //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());
        await addPatientLib.getOrdersLib().navigateBackToOrdersTab();
        
        let firstRowIndex = 1;
        await order.updateNormalOrderWithBaseOrderInfo(firstRowIndex, false);

        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';

        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);

        await addPatientLib.getOrdersLib().navigateToCmnRxPoTab();

        let abnFormInfo = new ABNFormInfo();
        abnFormInfo.setSignatureFlag(true);

        await addPatientLib.getOrdersLib().getCmnRxPoLib().generateABNForm(abnFormInfo);
        await addPatientLib.getOrdersLib().navigateToOrderInfoTab();

        let formsInfo = new FormsInfo();
        formsInfo.setAbnFormInfo(abnFormInfo);

        await addPatientLib.getOrdersLib().generateForms(formsInfo);
        await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();

        let expectedUpdateOrderSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateorder');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedUpdateOrderSuccessMessage);
    })
})