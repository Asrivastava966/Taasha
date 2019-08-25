import { LoginLib } from "../../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../../data/enums/AddPatientMode";
import { AddPatientLib } from '../../../../../lib/normaladdpatientpage/AddPatientLib';
import { Patient } from '../../../../../data/basedata/Patient';
import { Insurance } from '../../../../../data/basedata/Insurance';
import { Order } from '../../../../../data/basedata/Order';
import { Product } from '../../../../../data/basedata/Product';
import { Doctor } from '../../../../../data/basedata/Doctor';
import { InsuranceType } from "../../../../../data/enums/InsuranceType";
import { OrderType } from "../../../../../data/enums/OrderType";

let propertiesReader = require('properties-reader');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Add Clinical Info via Normal Add: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let addPatientLib:AddPatientLib;
    let patient:Patient;
    let insurance:Insurance;
    let order:Order;
    let product:Product;
    let doctor:Doctor;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();
        patient = new Patient(AddPatientMode.NORMAL_ADD);
        insurance = new Insurance(AddPatientMode.NORMAL_ADD, InsuranceType.PRIMARY);
        order = new Order(AddPatientMode.NORMAL_ADD, OrderType.AUTO_CPAP);
        product = new Product();
        doctor = new Doctor(AddPatientMode.NORMAL_ADD);
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
        await addPatientLib.getOrdersLib().navigateToClinicalInfoTab();
    })

    it('[TEST]: Add patient- Add new order- Add Clinical Info with only mandatory fields', async function() {
        await doctor.addBaseDoctor(true);

        let actualValidationMessage = await addPatientLib.getOrdersLib().getClinicalInfoLib().getSuccessMessage();
        let expectedValidationMessage = validationMessageProperties.get('success.addpatient.normaladd.adddoctorinfo');
        await expect(actualValidationMessage).toBe(expectedValidationMessage);
    })
})