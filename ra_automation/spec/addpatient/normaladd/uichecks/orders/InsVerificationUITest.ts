import { LoginLib } from "../../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../../data/basedata/Patient';
import { Insurance } from '../../../../../data/basedata/Insurance';
import { CommonUtils } from '../../../../../utils/CommonUtils';
import { OrderType } from "../../../../../data/enums/OrderType";
import { InsuranceType } from "../../../../../data/enums/InsuranceType";
import { Order } from "../../../../../data/basedata/Order";
import { Product } from "../../../../../data/basedata/Product";

let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Perform Ins. Verification via Normal Add: Workflow tests', function() {
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

    it('[TEST]: Add patient- Update default order- Verify insurance via Manual Eligibility Check', async function() {
        let verificationDate:Date = commonUtils.getDateFromString(orderInfoProperties.get('orders.insuranceverification.verificationdate'));
        await addPatientLib.getOrdersLib().verifyInsurance(verificationDate);
           
        expect(await addPatientLib.getOrdersLib().getInsVerificationLib().getStatusValue()).toContain('Eligible');
        expect(await addPatientLib.getOrdersLib().getInsVerificationLib().getMethodValue()).toContain('MANUAL');
    })
})