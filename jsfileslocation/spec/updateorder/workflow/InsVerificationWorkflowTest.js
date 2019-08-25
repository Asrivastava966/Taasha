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
const AddPatientLib_1 = require("../../../lib/normaladdpatientpage/AddPatientLib");
const Patient_1 = require("../../../data/basedata/Patient");
const Insurance_1 = require("../../../data/basedata/Insurance");
const CommonUtils_1 = require("../../../utils/CommonUtils");
const OrderInfo_1 = require("../../../data/info/OrderInfo");
const ProductInfo_1 = require("../../../data/info/ProductInfo");
const OrderType_1 = require("../../../data/enums/OrderType");
const InsuranceType_1 = require("../../../data/enums/InsuranceType");
const ProductPriceType_1 = require("../../../data/enums/ProductPriceType");
const DeliveryTicketFormInfo_1 = require("../../../data/info/DeliveryTicketFormInfo");
const FormsInfo_1 = require("../../../data/info/FormsInfo");
let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Update Order- Perform Ins. Verification: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let patientInfo;
    let insurance;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.QUICK_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            patientInfo = yield patient.addBasePatient(false);
            yield insurance.addBaseInsurance(true);
        });
    });
    it('[TEST]: Update order- Verify insurance via Manual Eligibility Check', function () {
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
            //Verify the added Insurance 
            let verificationDate = commonUtils.getDateFromString(orderInfoProperties.get('orders.insuranceverification.verificationdate'));
            yield addPatientLib.getOrdersLib().verifyInsurance(verificationDate);
            //Verification points 
            let expectedMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateinsurance');
            yield expect(addPatientLib.getOrdersLib().getInsVerificationLib().getOrderInsuranceSuccessMessage()).toEqual(expectedMessage);
            yield addPatientLib.getOrdersLib().navigateToOrderInfoTab();
            //Generate Delivery Ticket 
            let deliveryTicketFormInfo = new DeliveryTicketFormInfo_1.DeliveryTicketFormInfo();
            deliveryTicketFormInfo.setPatientSign(true);
            let formsInfo = new FormsInfo_1.FormsInfo();
            formsInfo.setDeliveryTicketFormInfo(deliveryTicketFormInfo);
            yield addPatientLib.getOrdersLib().generateForms(formsInfo);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zVmVyaWZpY2F0aW9uV29ya2Zsb3dUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL3VwZGF0ZW9yZGVyL3dvcmtmbG93L0luc1ZlcmlmaWNhdGlvbldvcmtmbG93VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsOERBQTJEO0FBQzNELG1FQUFnRTtBQUNoRSx1RUFBb0U7QUFDcEUsbUZBQWdGO0FBQ2hGLDREQUF5RDtBQUN6RCxnRUFBNkQ7QUFDN0QsNERBQXlEO0FBQ3pELDREQUF5RDtBQUN6RCxnRUFBNkQ7QUFDN0QsNkRBQTBEO0FBQzFELHFFQUFrRTtBQUNsRSwyRUFBd0U7QUFFeEUsc0ZBQW1GO0FBQ25GLDREQUF5RDtBQUV6RCxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUMzRixJQUFJLDRCQUE0QixHQUFHLGdCQUFnQixDQUFDLHVEQUF1RCxDQUFDLENBQUM7QUFDN0csSUFBSSxXQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFaEQsUUFBUSxDQUFDLGlFQUFpRSxFQUFFO0lBQ3hFLElBQUksUUFBaUIsQ0FBQztJQUN0QixJQUFJLFdBQXVCLENBQUM7SUFDNUIsSUFBSSxhQUEyQixDQUFDO0lBQ2hDLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksV0FBdUIsQ0FBQztJQUM1QixJQUFJLFNBQW1CLENBQUM7SUFFeEIsVUFBVSxDQUFDOztZQUNQLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUMxQixXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDaEMsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsK0JBQWMs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