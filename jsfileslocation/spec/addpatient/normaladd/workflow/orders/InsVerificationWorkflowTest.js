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
const CommonUtils_1 = require("../../../../../utils/CommonUtils");
const OrderType_1 = require("../../../../../data/enums/OrderType");
const InsuranceType_1 = require("../../../../../data/enums/InsuranceType");
const Order_1 = require("../../../../../data/basedata/Order");
const Product_1 = require("../../../../../data/basedata/Product");
let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Perform Ins. Verification via Normal Add: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let insurance;
    let order;
    let product;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.NORMAL_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            order = new Order_1.Order(AddPatientMode_1.AddPatientMode.NORMAL_ADD, OrderType_1.OrderType.AUTO_CPAP);
            product = new Product_1.Product();
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
    it('[TEST]: Add patient- Update default order- Verify insurance via Manual Eligibility Check', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Verify the added Insurance 
            let verificationDate = commonUtils.getDateFromString(orderInfoProperties.get('orders.insuranceverification.verificationdate'));
            yield addPatientLib.getOrdersLib().verifyInsurance(verificationDate);
            //Verification points 
            let expectedMessage = validationMessagesProperties.get('success.addpatient.normaladd.updateinsurance');
            yield expect(addPatientLib.getOrdersLib().getInsVerificationLib().getOrderInsuranceSuccessMessage()).toContain(expectedMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zVmVyaWZpY2F0aW9uV29ya2Zsb3dUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FkZHBhdGllbnQvbm9ybWFsYWRkL3dvcmtmbG93L29yZGVycy9JbnNWZXJpZmljYXRpb25Xb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsNkVBQTBFO0FBQzFFLHlGQUFzRjtBQUN0RixrRUFBK0Q7QUFDL0Qsc0VBQW1FO0FBQ25FLGtFQUErRDtBQUMvRCxtRUFBZ0U7QUFDaEUsMkVBQXdFO0FBQ3hFLDhEQUEyRDtBQUMzRCxrRUFBK0Q7QUFFL0QsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLDhDQUE4QyxDQUFDLENBQUM7QUFDM0YsSUFBSSw0QkFBNEIsR0FBRyxnQkFBZ0IsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0FBQzdHLElBQUksV0FBVyxHQUFlLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRWhELFFBQVEsQ0FBQyxrRUFBa0UsRUFBRTtJQUN6RSxJQUFJLFFBQWlCLENBQUM7SUFDdEIsSUFBSSxXQUF1QixDQUFDO0lBQzVCLElBQUksYUFBMkIsQ0FBQztJQUNoQyxJQUFJLE9BQWUsQ0FBQztJQUNwQixJQUFJLFNBQW1CLENBQUM7SUFDeEIsSUFBSSxLQUFXLENBQUM7SUFDaEIsSUFBSSxPQUFlLENBQUM7SUFFcEIsVUFBVSxDQUFDOztZQUNQLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUMxQixXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDaEMsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsK0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRCxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLCtCQUFjLENBQUMsVUFBVSxFQUFFLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUUsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLCtCQUFjLENBQUMsVUFBVSxFQUFFLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEUsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1lBQ3hCLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUM5QixJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFFOUIsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsTUFBTSxXQUFXLENBQUMsb0JBQW9CLENBQUMsK0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsRSxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsTUFBTSxhQUFhLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUNqRCxNQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxNQUFNLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzFDLE1BQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwSCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwSCxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywwRkFBMEYsRUFBRTs7WUFDM0YsNkJBQTZCO1lBQzdCLElBQUksZ0JBQWdCLEdBQVEsV0FBVyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7WUFDcEksTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFckUsc0JBQXNCO1lBQ3RCLElBQUksZUFBZSxHQUFHLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBQ3ZHLE1BQU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLCtCQUErQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEksQ0FBQztLQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=