import { LoginLib } from "../../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../../data/basedata/Patient';
import { Insurance } from '../../../../../data/basedata/Insurance';
import { OrderType } from "../../../../../data/enums/OrderType";
import { InsuranceType } from "../../../../../data/enums/InsuranceType";
import { Order } from "../../../../../data/basedata/Order";
import { Product } from "../../../../../data/basedata/Product";
import { OrderInfo } from "../../../../../data/info/OrderInfo";

let propertiesReader = require('properties-reader');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Add/Update Order Info via Normal Add- Order with a Product: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let insurance:Insurance;
    let order:Order;
    let product:Product;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.NORMAL_ADD);
        insurance = new Insurance(AddPatientMode.NORMAL_ADD, InsuranceType.PRIMARY);
        order = new Order(AddPatientMode.NORMAL_ADD, OrderType.AUTO_CPAP);
        product = new Product();

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
        await patient.addBasePatient(true);
        await addPatientLib.navigateToInsuranceInfoTab();
        await insurance.addBaseInsurance(true);
        await addPatientLib.navigateToOrdersTab();
    })

    it('[TEST]: Add Patient- Update default order:: Order Type: Auto CPAP, Product: HCPCS-A7035', async function() {
        let defaultOrderIndex = 1;
        await order.updateNormalOrderWithBaseOrderInfo(defaultOrderIndex, false);

        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);

        //Verification points 
        let expectedSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.updateorder');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toBe(expectedSuccessMessage);
    })

    it('[TEST]: Add patient- Add new order:: Order Type: Auto CPAP, Product: HCPCS-A7035', async function() {
        let a7035_hcpcsCode = 'A7035';
        let a7037_hcpcsCode = 'A7037';

        await order.addBaseOrder(false);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
        await addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
        await product.addBaseProduct(true);

        //Verification 
        let expectedSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.addorder');
        await expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedSuccessMessage);
    })

    it('[TEST]: Add patient- Add new order:: Delete newly added order', async function() {
        let orderInfo:OrderInfo = new OrderInfo();
        await order.addOrder(orderInfo, true);

        let firstOrderIndex = 1;
        await addPatientLib.getOrdersLib().navigateBackToOrdersTab();
        await addPatientLib.getOrdersLib().toggleNormalOrders();
        await addPatientLib.getOrdersLib().deleteNormalOrder(firstOrderIndex);

        //Verification 
        let expectedSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.deleteorder');
        await expect(await addPatientLib.getOrdersLib().getSuccessMessage()).toContain(expectedSuccessMessage);
    })
})