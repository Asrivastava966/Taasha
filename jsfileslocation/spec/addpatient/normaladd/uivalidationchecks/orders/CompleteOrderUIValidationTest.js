"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginLib_1 = require("../../../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../../../lib/homepage/HomepageLib");
const AddPatientMode_1 = require("../../../../../data/enums/AddPatientMode");
const AddPatientLib_1 = require("../../../../../lib/normaladdpatientpage/AddPatientLib");
const Patient_1 = require("../../../../../data/basedata/Patient");
const Insurance_1 = require("../../../../../data/basedata/Insurance");
const OrderType_1 = require("../../../../../data/enums/OrderType");
const CommonUtils_1 = require("../../../../../utils/CommonUtils");
const InsuranceType_1 = require("../../../../../data/enums/InsuranceType");
const Order_1 = require("../../../../../data/basedata/Order");
const Product_1 = require("../../../../../data/basedata/Product");
const OrderInfo_1 = require("../../../../../data/info/OrderInfo");
const Document_1 = require("../../../../../data/basedata/Document");
const DocumentType_1 = require("../../../../../data/enums/DocumentType");
const Tabs_1 = require("../../../../../data/enums/Tabs");
const DeliveryTicketFormInfo_1 = require("../../../../../data/info/DeliveryTicketFormInfo");
const FormsInfo_1 = require("../../../../../data/info/FormsInfo");
let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils = new CommonUtils_1.CommonUtils();
let a7035_hcpcsCode = 'A7035';
let a7037_hcpcsCode = 'A7037';
describe('[SPEC]: Add Patient via Normal Add- Generate Delivery Ticket and Complete Order: UI Validation tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let insurance;
    let order;
    let orderInfo;
    let product;
    let document;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.NORMAL_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            order = new Order_1.Order(AddPatientMode_1.AddPatientMode.NORMAL_ADD, OrderType_1.OrderType.AUTO_CPAP);
            orderInfo = new OrderInfo_1.OrderInfo();
            product = new Product_1.Product();
            document = new Document_1.Document(Tabs_1.Tabs.ORDER, DocumentType_1.DocumentType.COMPLETED_DELIVERY_TICKET);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            yield patient.addBasePatient(true);
            yield addPatientLib.navigateToInsuranceInfoTab();
            yield insurance.addBaseInsurance(true);
            yield addPatientLib.navigateToOrdersTab();
        });
    });
    it('[TEST]: Verify validation checks for trying to complete an order without any product', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield addPatientLib.getOrdersLib().navigateToNewOrderForm();
            yield addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();
            //Verification points 
            let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.completeorderwithoutproduct');
            yield expect(addPatientLib.getOrdersLib().getOrderInfoLib().getValidationMessageOfProductGrid()).toContain(expectedValidationMessage);
        });
    });
    it('[TEST]: Verify validation checks for trying to complete an order having products without price types', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let defaultOrderIndex = 1;
            yield order.updateNormalOrderWithBaseOrderInfo(defaultOrderIndex, false);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();
            //Verification points 
            let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.productswithoutpricetype');
            yield expect(addPatientLib.getOrdersLib().getOrderInfoLib().getValidationMessageOfProductGrid()).toContain(expectedValidationMessage);
        });
    });
    it('[TEST]: Verify validation checks for trying to complete an order before saving it', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let defaultOrderIndex = 1;
            yield order.updateNormalOrderWithBaseOrderInfo(defaultOrderIndex, false);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();
            //Verification points 
            let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.completeorderbeforesaving');
            yield expect(addPatientLib.getOrdersLib().getOrderInfoLib().getValidationMessageOfProductGrid()).toContain(expectedValidationMessage);
        });
    });
    it('[TEST]: Verify validation checks for trying to complete an order without insurance verification', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let defaultOrderIndex = 1;
            yield order.updateNormalOrderWithBaseOrderInfo(defaultOrderIndex, false);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseProduct(true);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();
            //Verification points 
            let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.completeorderwithoutinsverification');
            yield expect(addPatientLib.getOrdersLib().getInformationModalMessage()).toContain(expectedValidationMessage);
            yield addPatientLib.getOrdersLib().confirmOK();
        });
    });
    it('[TEST]: Verify validation checks for trying to complete an order without generating a delivery ticket', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let defaultOrderIndex = 1;
            yield order.updateNormalOrderWithBaseOrderInfo(defaultOrderIndex, false);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseProduct(true);
            let verificationDate = commonUtils.getDateFromString(orderInfoProperties.get('orders.insuranceverification.verificationdate'));
            yield addPatientLib.getOrdersLib().verifyInsurance(verificationDate);
            yield addPatientLib.getOrdersLib().navigateToOrderInfoTab();
            yield addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();
            //Verification points 
            let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.completeorderwithoutdeliveryticket');
            yield expect(addPatientLib.getOrdersLib().getInformationModalMessage()).toContain(expectedValidationMessage);
            yield addPatientLib.getOrdersLib().confirmOK();
        });
    });
    it('[TEST]: Verify validation checks for trying to complete an order without a setup date', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield addPatientLib.getOrdersLib().navigateToNewOrderForm();
            orderInfo.setOrderType(OrderType_1.OrderType.AUTO_CPAP);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseProduct(true);
            let verificationDate = commonUtils.getDateFromString(orderInfoProperties.get('orders.insuranceverification.verificationdate'));
            yield addPatientLib.getOrdersLib().verifyInsurance(verificationDate);
            yield addPatientLib.getOrdersLib().navigateToOrderInfoTab();
            //Generate Delivery Ticket 
            let deliveryTicketFormInfo = new DeliveryTicketFormInfo_1.DeliveryTicketFormInfo();
            deliveryTicketFormInfo.setPatientSign(true);
            let formsInfo = new FormsInfo_1.FormsInfo();
            formsInfo.setDeliveryTicketFormInfo(deliveryTicketFormInfo);
            yield addPatientLib.getOrdersLib().generateForms(formsInfo);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            yield addPatientLib.getOrdersLib().navigateToDocumentsTab();
            yield document.uploadTestDocument();
            yield addPatientLib.getOrdersLib().navigateToOrderInfoTab();
            yield addPatientLib.getOrdersLib().getOrderInfoLib().completeOrder();
            //Verification points 
            let expectedValidationMessage = validationMessageProperties.get('validation.addpatient.normaladd.completeorderwithoutsetupdate');
            yield expect(addPatientLib.getOrdersLib().getInformationModalMessage()).toContain(expectedValidationMessage);
            yield addPatientLib.getOrdersLib().confirmOK();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxldGVPcmRlclVJVmFsaWRhdGlvblRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvYWRkcGF0aWVudC9ub3JtYWxhZGQvdWl2YWxpZGF0aW9uY2hlY2tzL29yZGVycy9Db21wbGV0ZU9yZGVyVUlWYWxpZGF0aW9uVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0VBQWlFO0FBQ2pFLHlFQUFzRTtBQUN0RSw2RUFBMEU7QUFDMUUseUZBQXNGO0FBQ3RGLGtFQUErRDtBQUMvRCxzRUFBbUU7QUFDbkUsbUVBQWdFO0FBQ2hFLGtFQUErRDtBQUMvRCwyRUFBd0U7QUFDeEUsOERBQTJEO0FBQzNELGtFQUErRDtBQUMvRCxrRUFBK0Q7QUFDL0Qsb0VBQWlFO0FBQ2pFLHlFQUFzRTtBQUN0RSx5REFBc0Q7QUFDdEQsNEZBQXlGO0FBQ3pGLGtFQUErRDtBQUUvRCxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUMzRixJQUFJLDJCQUEyQixHQUFHLGdCQUFnQixDQUFDLHVEQUF1RCxDQUFDLENBQUM7QUFDNUcsSUFBSSxXQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDaEQsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQzlCLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQztBQUU5QixRQUFRLENBQUMsc0dBQXNHLEVBQUU7SUFDN0csSUFBSSxRQUFpQixDQUFDO0lBQ3RCLElBQUksV0FBdUIsQ0FBQztJQUM1QixJQUFJLGFBQTJCLENBQUM7SUFDaEMsSUFBSSxPQUFlLENBQUM7SUFDcEIsSUFBSSxTQUFtQixDQUFDO0lBQ3hCLElBQUksS0FBVyxDQUFDO0lBQ2hCLElBQUksU0FBbUIsQ0FBQztJQUN4QixJ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