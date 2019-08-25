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
let commonUtils = new CommonUtils_1.CommonUtils();
let e0601_hcpcsCode = 'E0601';
let a7035_hcpcsCode = 'A7035';
let a7037_hcpcsCode = 'A7037';
describe('[SPEC]: Compliance: UI tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let patientInfo;
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
            patientInfo = yield patient.addBasePatient(true);
            yield addPatientLib.navigateToInsuranceInfoTab();
            yield insurance.addBaseInsurance(true);
            yield addPatientLib.navigateToOrdersTab();
            yield order.addBaseOrder(false);
        });
    });
    it('[TEST]: Verify auto-populated field values, Product manufacturer- Respironics', function () {
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
            // await addPatientLib.navigateToDocumentsTab();
            // await document.uploadTestDocument();
            yield addPatientLib.navigateToCPAPTab();
            yield addPatientLib.getCPAPLib().navigateToComplianceTab();
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getFirstNameValue()).toBe(patientInfo.getFirstName());
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getLastNameValue()).toBe(patientInfo.getLastName());
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getManufacturerValue()).toBe(respironicsProductInfo.getManufacturer());
        });
    });
    it('[TEST]: Verify auto-populated field values, Product manufacturer- Resmed', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(e0601_hcpcsCode);
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
            // //Need to upload delivery ticket via Document upload
            // await addPatientLib.navigateToDocumentsTab();
            // await document.uploadTestDocument();
            yield addPatientLib.navigateToCPAPTab();
            yield addPatientLib.getCPAPLib().navigateToComplianceTab();
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getFirstNameValue()).toBe(patientInfo.getFirstName());
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getLastNameValue()).toBe(patientInfo.getLastName());
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getManufacturerValue()).toBe(resmedProductInfo.getManufacturer());
        });
    });
    it('[TEST]: Verify disabled fields, Product manufacturer- Respironics', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseRespironicsProduct(true);
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
            // await addPatientLib.navigateToDocumentsTab();
            // await document.uploadTestDocument();
            yield addPatientLib.navigateToCPAPTab();
            yield addPatientLib.getCPAPLib().navigateToComplianceTab();
            let disabledFlag = 'defaultDisabled';
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getFirstNameInputFieldDisabledAttributeValue()).toBe(disabledFlag);
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getLastNameInputFieldDisabledAttributeValue()).toBe(disabledFlag);
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getDOBInputFieldDisabledAttributeValue()).toBe(disabledFlag);
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getSetupDateInputFieldDisabledAttributeValue()).toBe(disabledFlag);
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getStatusFieldDisabledAttributeValue()).toBe(disabledFlag);
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getManufacturerInputFieldDisabledAttributeValue()).toBe(disabledFlag);
            yield expect(yield addPatientLib.getCPAPLib().getComplianceLib().getOrderNoFieldDisabledAttributeValue()).toBe(disabledFlag);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxpYW5jZVVJVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy9hZGRwYXRpZW50L25vcm1hbGFkZC91aWNoZWNrcy9jcGFwL0NvbXBsaWFuY2VVSVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsNkVBQTBFO0FBQzFFLHlGQUFzRjtBQUN0RixrRUFBK0Q7QUFDL0Qsc0VBQW1FO0FBQ25FLG1FQUFnRTtBQUNoRSxrRUFBK0Q7QUFDL0QsMkVBQXdFO0FBQ3hFLDhEQUEyRDtBQUMzRCxrRUFBK0Q7QUFDL0Qsb0VBQWlFO0FBQ2pFLHlFQUFzRTtBQUd0RSx5REFBc0Q7QUFFdEQsNEZBQXlGO0FBQ3pGLGtFQUErRDtBQUUvRCxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUMzRixJQUFJLFdBQVcsR0FBZSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUNoRCxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUM7QUFDOUIsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQzlCLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQztBQUU5QixRQUFRLENBQUMsOEJBQThCLEVBQUU7SUFDckMsSUFBSSxRQUFpQixDQUFDO0lBQ3RCLElBQUksV0FBdUIsQ0FBQztJQUM1QixJQUFJLGFBQTJCLENBQUM7SUFDaEMsSUFBSSxPQUFlLENBQUM7SUFDcEIsSUFBSSxXQUF1QixDQUFDO0lBQzVCLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLEtBQVcsQ0FBQztJQUNoQixJQUFJLE9BQWUsQ0FBQztJQUNwQixJQUFJLFFBQWlCLENBQUM7SUFFdEIsVUFBVSxDQUFDOztZQUNQLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUMxQixXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDaEMsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsK0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRCxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLCtCQUFjLENBQUMsVUFBVSxFQUFFLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUUsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLCtCQUFjLENBQUMsVUFBVSxFQUFFLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEUsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1lBQ3hCLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsV0FBSSxDQUFDLE9BQU8sRUFBRSwyQkFBWSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFFOUUsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsTUFBTSxXQUFXLENBQUMsb0JBQW9CLENBQUMsK0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsRSxXQUFXLEdBQUcsTUFBTSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELE1BQU0sYUFBYSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDakQsTUFBTSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsTUFBTSxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMxQyxNQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywrRUFBK0UsRUFBRTs7WUFDaEYsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsMkJBQTJCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDcEgsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsMkJBQTJCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDcEgsSUFBSSxzQkFBc0IsR0FBZSxNQUFNLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV2Riw2QkFBNkI7WUFDN0IsSUFBSSxnQkFBZ0IsR0FBUSxXQUFXLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztZQUNwSSxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNyRSxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBRTVELDJCQUEyQjtZQUMzQixJQUFJLHNCQUFzQixHQUFHLElBQUksK0NBQXNCLEVBQUUsQ0FBQztZQUMxRCxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7WUFDaEMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFNUQsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRWpFLG9EQUFvRDtZQUNwRCxnREFBZ0Q7WUFDaEQsdUNBQXVDO1lBRXZDLE1BQU0sYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDeEMsTUFBTSxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUUzRCxNQUFNLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDdkgsTUFBTSxNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ3JILE1BQU0sTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzVJLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMEVBQTBFLEVBQUU7O1lBQzNFLE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3BILE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3BILE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3BILElBQUksaUJBQWlCLEdBQWUsTUFBTSxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFN0UsNkJBQTZCO1lBQzdCLElBQUksZ0JBQWdCLEdBQVEsV0FBVyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7WUFDcEksTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDckUsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUU1RCwyQkFBMkI7WUFDM0IsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLCtDQUFzQixFQUFFLENBQUM7WUFDMUQsc0JBQXNCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1lBQ2hDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzVELE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1RCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVqRSx1REFBdUQ7WUFDdkQsZ0RBQWdEO1lBQ2hELHVDQUF1QztZQUV2QyxNQUFNLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3hDLE1BQU0sYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFFM0QsTUFBTSxNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZILE1BQU0sTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNySCxNQUFNLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN2SSxDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG1FQUFtRSxFQUFFOztZQUNwRSxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwSCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwSCxNQUFNLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5Qyw2QkFBNkI7WUFDN0IsSUFBSSxnQkFBZ0IsR0FBUSxXQUFXLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztZQUNwSSxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNyRSxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBRTVELDJCQUEyQjtZQUMzQixJQUFJLHNCQUFzQixHQUFHLElBQUksK0NBQXNCLEVBQUUsQ0FBQztZQUMxRCxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7WUFDaEMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFNUQsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRWpFLG9EQUFvRDtZQUNwRCxnREFBZ0Q7WUFDaEQsdUNBQXVDO1lBRXZDLE1BQU0sYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDeEMsTUFBTSxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUUzRCxJQUFJLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztZQUNyQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEksTUFBTSxNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQywyQ0FBMkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25JLE1BQU0sTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsc0NBQXNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5SCxNQUFNLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEksTUFBTSxNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVILE1BQU0sTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsK0NBQStDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2SSxNQUFNLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakksQ0FBQztLQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=