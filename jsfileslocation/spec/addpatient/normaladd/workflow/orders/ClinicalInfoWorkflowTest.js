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
const Order_1 = require("../../../../../data/basedata/Order");
const Product_1 = require("../../../../../data/basedata/Product");
const Doctor_1 = require("../../../../../data/basedata/Doctor");
const InsuranceType_1 = require("../../../../../data/enums/InsuranceType");
const OrderType_1 = require("../../../../../data/enums/OrderType");
let propertiesReader = require('properties-reader');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Add Clinical Info via Normal Add: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let insurance;
    let order;
    let product;
    let doctor;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.NORMAL_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            order = new Order_1.Order(AddPatientMode_1.AddPatientMode.NORMAL_ADD, OrderType_1.OrderType.AUTO_CPAP);
            product = new Product_1.Product();
            doctor = new Doctor_1.Doctor(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
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
            yield addPatientLib.getOrdersLib().navigateToClinicalInfoTab();
        });
    });
    it('[TEST]: Add patient- Add new order- Add Clinical Info with only mandatory fields', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield doctor.addBaseDoctor(true);
            let actualValidationMessage = yield addPatientLib.getOrdersLib().getClinicalInfoLib().getSuccessMessage();
            let expectedValidationMessage = validationMessageProperties.get('success.addpatient.normaladd.adddoctorinfo');
            yield expect(actualValidationMessage).toBe(expectedValidationMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpbmljYWxJbmZvV29ya2Zsb3dUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FkZHBhdGllbnQvbm9ybWFsYWRkL3dvcmtmbG93L29yZGVycy9DbGluaWNhbEluZm9Xb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsNkVBQTBFO0FBQzFFLHlGQUFzRjtBQUN0RixrRUFBK0Q7QUFDL0Qsc0VBQW1FO0FBQ25FLDhEQUEyRDtBQUMzRCxrRUFBK0Q7QUFDL0QsZ0VBQTZEO0FBQzdELDJFQUF3RTtBQUN4RSxtRUFBZ0U7QUFFaEUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLDJCQUEyQixHQUFHLGdCQUFnQixDQUFDLHVEQUF1RCxDQUFDLENBQUM7QUFFNUcsUUFBUSxDQUFDLDBEQUEwRCxFQUFFO0lBQ2pFLElBQUksUUFBaUIsQ0FBQztJQUN0QixJQUFJLFdBQXVCLENBQUM7SUFDNUIsSUFBSSxhQUEyQixDQUFDO0lBQ2hDLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLEtBQVcsQ0FBQztJQUNoQixJQUFJLE9BQWUsQ0FBQztJQUNwQixJQUFJLE1BQWEsQ0FBQztJQUVsQixVQUFVLENBQUM7O1lBQ1AsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUNoQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7WUFDcEMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQywrQkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsK0JBQWMsQ0FBQyxVQUFVLEVBQUUsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1RSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsK0JBQWMsQ0FBQyxVQUFVLEVBQUUscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsRSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7WUFDeEIsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLCtCQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQzlCLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUU5QixNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QixNQUFNLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQywrQkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxNQUFNLGFBQWEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ2pELE1BQU0sU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDMUMsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3BILE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3BILE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ25FLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0ZBQWtGLEVBQUU7O1lBQ25GLE1BQU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqQyxJQUFJLHVCQUF1QixHQUFHLE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMxRyxJQUFJLHlCQUF5QixHQUFHLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1lBQzlHLE1BQU0sTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDMUUsQ0FBQztLQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=