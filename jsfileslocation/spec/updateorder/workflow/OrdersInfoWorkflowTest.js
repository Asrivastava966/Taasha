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
const LoginLib_1 = require("../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../lib/homepage/HomepageLib");
const AddPatientMode_1 = require("../../../data/enums/AddPatientMode");
const ProductPriceType_1 = require("../../../data/enums/ProductPriceType");
const Patient_1 = require("../../../data/basedata/Patient");
const Insurance_1 = require("../../../data/basedata/Insurance");
const AddPatientLib_1 = require("../../../lib/normaladdpatientpage/AddPatientLib");
const OrderInfo_1 = require("../../../data/info/OrderInfo");
const ProductInfo_1 = require("../../../data/info/ProductInfo");
const OrderType_1 = require("../../../data/enums/OrderType");
const InsuranceType_1 = require("../../../data/enums/InsuranceType");
const Order_1 = require("../../../data/basedata/Order");
const Product_1 = require("../../../data/basedata/Product");
const PlanOfCareFormInfo_1 = require("../../../data/info/PlanOfCareFormInfo");
const FormsInfo_1 = require("../../../data/info/FormsInfo");
const PatientSurveyFormInfo_1 = require("../../../data/info/PatientSurveyFormInfo");
const ABNFormInfo_1 = require("../../../data/info/ABNFormInfo");
let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Update Order Info: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let patientInfo;
    let insurance;
    let order;
    let product;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.QUICK_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            order = new Order_1.Order(AddPatientMode_1.AddPatientMode.NORMAL_ADD, OrderType_1.OrderType.AUTO_CPAP);
            product = new Product_1.Product();
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            patientInfo = yield patient.addBasePatient(false);
            yield insurance.addBaseInsurance(true);
        });
    });
    it('[TEST]: Update Order - Order type: Auto CPAP, Product: A7035', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());
            //Prepare data: Order Info
            let orderInfo = new OrderInfo_1.OrderInfo();
            orderInfo.setOrderType(OrderType_1.OrderType.AUTO_CPAP);
            //Prepare date: Product Info
            let a7035_hcpcsCode = 'A7035';
            let a7037_hcpcsCode = 'A7037';
            let productInfo_A7035 = new ProductInfo_1.ProductInfo();
            productInfo_A7035.setQuantity(+orderInfoProperties.get('orders.orderinfo.productinfo.quantity'));
            productInfo_A7035.setHcpcs(orderInfoProperties.get('orders.orderinfo.productinfo.hcpcs'));
            productInfo_A7035.setPr(ProductPriceType_1.ProductPriceType.RENTAL);
            productInfo_A7035.setProduct(orderInfoProperties.get('orders.orderinfo.productinfo.product'));
            //Execute test
            yield addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().fillProductInfo(productInfo_A7035);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().addProduct();
            yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            //Verification points
            let expectedSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateorder');
            yield expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedSuccessMessage);
        });
    });
    it('[TEST]: Create two orders having the same Order Type', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());
            yield addPatientLib.getOrdersLib().navigateBackToOrdersTab();
            let firstRowIndex = 1;
            yield order.updateNormalOrderWithBaseOrderInfo(firstRowIndex, false);
            let a7035_hcpcsCode = 'A7035';
            let a7037_hcpcsCode = 'A7037';
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseProduct(true);
            let expectedUpdateOrderSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateorder');
            yield expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedUpdateOrderSuccessMessage);
            yield addPatientLib.getOrdersLib().navigateBackToOrdersTab();
            yield addPatientLib.getOrdersLib().navigateToNewOrderForm();
            let orderInfo = new OrderInfo_1.OrderInfo();
            orderInfo.setOrderType(OrderType_1.OrderType.AUTO_CPAP);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);
            expect(yield addPatientLib.getOrdersLib().getConfirmationModalMessage()).toContain(validationMessagesProperties.get('validation.addpatient.normaladd.existingorder'));
            yield addPatientLib.getOrdersLib().confirmYes();
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseProduct(true);
            let expectedAddedOrderSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.addorder');
            yield expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedAddedOrderSuccessMessage);
        });
    });
    it('[TEST]: Update order to have Plan Of Care form', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());
            yield addPatientLib.getOrdersLib().navigateBackToOrdersTab();
            let firstRowIndex = 1;
            yield order.updateNormalOrderWithBaseOrderInfo(firstRowIndex, false);
            let a7035_hcpcsCode = 'A7035';
            let a7037_hcpcsCode = 'A7037';
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseProduct(true);
            let planOfCareFormInfo = new PlanOfCareFormInfo_1.PlanOfCareFormInfo();
            planOfCareFormInfo.setTechnicianSign(true);
            let formsInfo = new FormsInfo_1.FormsInfo();
            formsInfo.setPlanOfCareFormInfo(planOfCareFormInfo);
            yield addPatientLib.getOrdersLib().generateForms(formsInfo);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            let expectedUpdateOrderSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateorder');
            yield expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedUpdateOrderSuccessMessage);
        });
    });
    it('[TEST]: Update order to have Patient Servey form', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());
            yield addPatientLib.getOrdersLib().navigateBackToOrdersTab();
            let firstRowIndex = 1;
            yield order.updateNormalOrderWithBaseOrderInfo(firstRowIndex, false);
            let a7035_hcpcsCode = 'A7035';
            let a7037_hcpcsCode = 'A7037';
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseProduct(true);
            let patientSurveyFormInfo = new PatientSurveyFormInfo_1.PatientSurveyFormInfo();
            patientSurveyFormInfo.setPatientSignature(true);
            let formsInfo = new FormsInfo_1.FormsInfo();
            formsInfo.setPatientSurveyFormInfo(patientSurveyFormInfo);
            yield addPatientLib.getOrdersLib().generateForms(formsInfo);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            let expectedUpdateOrderSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateorder');
            yield expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedUpdateOrderSuccessMessage);
        });
    });
    it('[TEST]: Update order to have ABN form', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(patientInfo.getFirstName());
            yield addPatientLib.getOrdersLib().navigateBackToOrdersTab();
            let firstRowIndex = 1;
            yield order.updateNormalOrderWithBaseOrderInfo(firstRowIndex, false);
            let a7035_hcpcsCode = 'A7035';
            let a7037_hcpcsCode = 'A7037';
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseProduct(true);
            yield addPatientLib.getOrdersLib().navigateToCmnRxPoTab();
            let abnFormInfo = new ABNFormInfo_1.ABNFormInfo();
            abnFormInfo.setSignatureFlag(true);
            yield addPatientLib.getOrdersLib().getCmnRxPoLib().generateABNForm(abnFormInfo);
            yield addPatientLib.getOrdersLib().navigateToOrderInfoTab();
            let formsInfo = new FormsInfo_1.FormsInfo();
            formsInfo.setAbnFormInfo(abnFormInfo);
            yield addPatientLib.getOrdersLib().generateForms(formsInfo);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            let expectedUpdateOrderSuccessMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateorder');
            yield expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toEqual(expectedUpdateOrderSuccessMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJzSW5mb1dvcmtmbG93VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy91cGRhdGVvcmRlci93b3JrZmxvdy9PcmRlcnNJbmZvV29ya2Zsb3dUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw4REFBMkQ7QUFDM0QsbUVBQWdFO0FBQ2hFLHVFQUFvRTtBQUNwRSwyRUFBd0U7QUFDeEUsNERBQXlEO0FBQ3pELGdFQUE2RDtBQUM3RCxtRkFBZ0Y7QUFDaEYsNERBQXlEO0FBQ3pELGdFQUE2RDtBQUM3RCw2REFBMEQ7QUFDMUQscUVBQWtFO0FBRWxFLHdEQUFxRDtBQUNyRCw0REFBeUQ7QUFDekQsOEVBQTJFO0FBQzNFLDREQUF5RDtBQUN6RCxvRkFBaUY7QUFDakYsZ0VBQTZEO0FBRTdELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0FBQzNGLElBQUksNEJBQTRCLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUU3RyxRQUFRLENBQUMsMkNBQTJDLEVBQUU7SUFDbEQsSUFBSSxRQUFpQixDQUFDO0lBQ3RCLElBQUksV0FBdUIsQ0FBQztJQUM1QixJQUFJLGFBQTJCLENBQUM7SUFDaEMsSUFBSSxPQUFlLENBQUM7SUFDcEIsSUFBSSxXQUF1QixDQUFDO0lBQzVCLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLEtBQVcsQ0FBQztJQUNoQixJQUFJLE9BQWUsQ0FBQztJQUVwQixVQUFVLENBQUM7O1lBQ1AsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUNoQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7WUFDcEMsT0FB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