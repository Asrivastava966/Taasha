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
const FormsInfo_1 = require("../../../../../data/info/FormsInfo");
const DeliveryTicketFormInfo_1 = require("../../../../../data/info/DeliveryTicketFormInfo");
let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils = new CommonUtils_1.CommonUtils();
let a7035_hcpcsCode = 'A7035';
let a7037_hcpcsCode = 'A7037';
let e0601_hcpcsCode = 'E0601';
describe('[SPEC]: Compliance: UI Validation tests', function () {
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
            document = new Document_1.Document(Tabs_1.Tabs.PATIENT, DocumentType_1.DocumentType.COMPLETED_DELIVERY_TICKET);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            yield patient.addBasePatient(true);
            yield addPatientLib.navigateToInsuranceInfoTab();
            yield insurance.addBaseInsurance(true);
            yield addPatientLib.navigateToOrdersTab();
            yield order.addBaseOrder(false);
        });
    });
    it('[TEST]: Product manufacturer- Respironics', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            let respironicsProductInfo = yield product.addBaseRespironicsProduct(true);
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
            //Need to upload delivery ticket via Document upload
            yield addPatientLib.navigateToDocumentsTab();
            yield document.uploadTestDocument();
            yield addPatientLib.navigateToCPAPTab();
            yield addPatientLib.getCPAPLib().navigateToComplianceTab();
            yield addPatientLib.getCPAPLib().getComplianceLib().submit();
            let expectedValidationMessage = validationMessageProperties.get('validation.inline.required');
            expect(yield addPatientLib.getCPAPLib().getComplianceLib().getRespironicsPapModelRequiredFieldErrorMessage()).toEqual(expectedValidationMessage);
            expect(yield addPatientLib.getCPAPLib().getComplianceLib().getRespironicsPapSerialNumberErrorMessage()).toEqual(expectedValidationMessage);
        });
    });
    it('[TEST]: Product manufacturer- Resmed', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let e0601_hcpcsCode = 'E0601';
            let a7035_hcpcsCode = 'A7035';
            let a7037_hcpcsCode = 'A7037';
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(e0601_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            let resmedProductInfo = yield product.addBaseResmedProduct(true);
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
            //Need to upload delivery ticket via Document upload
            yield addPatientLib.navigateToDocumentsTab();
            yield document.uploadTestDocument();
            yield addPatientLib.navigateToCPAPTab();
            yield addPatientLib.getCPAPLib().navigateToComplianceTab();
            yield addPatientLib.getCPAPLib().getComplianceLib().submit();
            let expectedValidationMessage = validationMessageProperties.get('validation.inline.required');
            expect(yield addPatientLib.getCPAPLib().getComplianceLib().getResmedDeviceNumberRequiredFieldErrorMessage()).toEqual(expectedValidationMessage);
            expect(yield addPatientLib.getCPAPLib().getComplianceLib().getResmedPapSerialNumberRequiredFieldErrorMessage()).toEqual(expectedValidationMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxpYW5jZVVJVmFsaWRhdGlvblRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvYWRkcGF0aWVudC9ub3JtYWxhZGQvdWl2YWxpZGF0aW9uY2hlY2tzL2NwYXAvQ29tcGxpYW5jZVVJVmFsaWRhdGlvblRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsNkVBQTBFO0FBQzFFLHlGQUFzRjtBQUN0RixrRUFBK0Q7QUFDL0Qsc0VBQW1FO0FBQ25FLG1FQUFnRTtBQUNoRSxrRUFBK0Q7QUFDL0QsMkVBQXdFO0FBQ3hFLDhEQUEyRDtBQUMzRCxrRUFBK0Q7QUFDL0Qsb0VBQWlFO0FBQ2pFLHlFQUFzRTtBQUV0RSx5REFBc0Q7QUFDdEQsa0VBQStEO0FBQy9ELDRGQUF5RjtBQUV6RixJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUMzRixJQUFJLDJCQUEyQixHQUFHLGdCQUFnQixDQUFDLHVEQUF1RCxDQUFDLENBQUM7QUFDNUcsSUFBSSxXQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDaEQsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQzlCLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQztBQUM5QixJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUM7QUFFOUIsUUFBUSxDQUFDLHlDQUF5QyxFQUFFO0lBQ2hELElBQUksUUFBaUIsQ0FBQztJQUN0QixJQUFJLFdBQXVCLENBQUM7SUFDNUIsSUFBSSxhQUEyQixDQUFDO0lBQ2hDLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLEtBQVcsQ0FBQztJQUNoQixJQUFJLE9BQWUsQ0FB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