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
const Document_1 = require("../../../../../data/basedata/Document");
const DocumentType_1 = require("../../../../../data/enums/DocumentType");
const Tabs_1 = require("../../../../../data/enums/Tabs");
const DeliveryTicketFormInfo_1 = require("../../../../../data/info/DeliveryTicketFormInfo");
const FormsInfo_1 = require("../../../../../data/info/FormsInfo");
let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Add Patient via Normal Add- Generate Delivery Ticket and Complete Order: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let insurance;
    let order;
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
            product = new Product_1.Product();
            document = new Document_1.Document(Tabs_1.Tabs.ORDER, DocumentType_1.DocumentType.COMPLETED_DELIVERY_TICKET);
            let a7035_hcpcsCode = 'A7035';
            let a7037_hcpcsCode = 'A7037';
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            yield patient.addBasePatient(true);
            yield addPatientLib.navigateToInsuranceInfoTab();
            yield insurance.addBaseInsurance(true);
            yield addPatientLib.navigateToOrdersTab();
            yield order.addBaseOrder(false);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseProduct(true);
        });
    });
    it('[TEST]: Add patient- Update default order- Generate Delivery Ticket and Complete Order', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Verify the added Insurance 
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
            // await addPatientLib.getOrdersLib().navigateToDocumentsTab();
            // await document.uploadTestDocument();
            // await addPatientLib.getOrdersLib().navigateToOrderInfoTab();
            yield addPatientLib.getOrdersLib().getOrderInfoLib().completeAndConfirmOrder();
            let expectedSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.completeorder');
            yield expect(addPatientLib.getOrdersLib().getOrderInfoLib().getOrderInfoSuccessMessageText()).toContain(expectedSuccessMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxldGVPcmRlcldvcmtmbG93VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy9hZGRwYXRpZW50L25vcm1hbGFkZC93b3JrZmxvdy9vcmRlcnMvQ29tcGxldGVPcmRlcldvcmtmbG93VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0VBQWlFO0FBQ2pFLHlFQUFzRTtBQUN0RSw2RUFBMEU7QUFDMUUseUZBQXNGO0FBQ3RGLGtFQUErRDtBQUMvRCxzRUFBbUU7QUFDbkUsbUVBQWdFO0FBQ2hFLGtFQUErRDtBQUMvRCwyRUFBd0U7QUFDeEUsOERBQTJEO0FBQzNELGtFQUErRDtBQUMvRCxvRUFBaUU7QUFDakUseUVBQXNFO0FBQ3RFLHlEQUFzRDtBQUN0RCw0RkFBeUY7QUFDekYsa0VBQStEO0FBRy9ELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0FBQzNGLElBQUksMkJBQTJCLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUM1RyxJQUFJLFdBQVcsR0FBZSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVoRCxRQUFRLENBQUMsaUdBQWlHLEVBQUU7SUFDeEcsSUFBSSxRQUFpQixDQUFDO0lBQ3RCLElBQUksV0FBdUIsQ0FBQztJQUM1QixJQUFJLGFBQTJCLENBQUM7SUFDaEMsSUFBSSxPQUFlLENBQUM7SUFDcEIsSUFBSSxTQUFtQixDQUFDO0lBQ3hCLElBQUksS0FBVyxDQUFDO0lBQ2hCLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksUUFBaUIsQ0FBQztJQUV0QixVQUFVLENBQUM7O1lBQ1AsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFX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