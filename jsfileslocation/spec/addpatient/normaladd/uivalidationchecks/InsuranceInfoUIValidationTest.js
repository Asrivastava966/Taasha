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
const LoginLib_1 = require("../../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../../lib/homepage/HomepageLib");
const AddPatientMode_1 = require("../../../../data/enums/AddPatientMode");
const AddPatientLib_1 = require("../../../../lib/normaladdpatientpage/AddPatientLib");
const Patient_1 = require("../../../../data/basedata/Patient");
const Insurance_1 = require("../../../../data/basedata/Insurance");
const InsuranceType_1 = require("../../../../data/enums/InsuranceType");
let propertiesReader = require('properties-reader');
let validationMessagesProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Add patient via Normal Add- \'Insurance Info\' form: UI Validation tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let insurance;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.NORMAL_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            yield patient.addBasePatient(true);
            yield addPatientLib.navigateToInsuranceInfoTab();
        });
    });
    it('[TEST]: Verify validation checks for the required fields in the Insurance Info tab', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield addPatientLib.getInsuranceInfoLib().navigateToAddInsuranceForm();
            yield addPatientLib.getInsuranceInfoLib().save();
            expect(yield addPatientLib.getInsuranceInfoLib().getProviderRequirdFieldError()).toEqual(validationMessagesProperties.get('validation.inline.required'));
            expect(yield addPatientLib.getInsuranceInfoLib().getPolicyNumberRequiredFieldError()).toContain(validationMessagesProperties.get('validation.inline.required'));
            expect(yield addPatientLib.getInsuranceInfoLib().getStartDateRequiredFieldError()).toEqual(validationMessagesProperties.get('validation.inline.required'));
        });
    });
    it('[TEST]: Verify validation checks for the same Insurance Type while adding a new Insurance', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield insurance.addBaseInsurance(true);
            yield insurance.addBaseInsurance(true);
            expect(yield addPatientLib.getInsuranceInfoLib().getValidationMessage()).toEqual(validationMessagesProperties.get('validation.addpatient.normaladd.existinginsurancetype'));
        });
    });
    it('[TEST]: Verify validation checks for the same Insurance Type while updating an existing Insurance', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield insurance.addBaseInsurance(true);
            let secondaryInsurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.NORMAL_ADD, InsuranceType_1.InsuranceType.SECONDARY);
            yield secondaryInsurance.addBaseInsurance(true);
            let firstRowIndex = 2;
            yield insurance.updateActiveInsurancePolicyWithBaseInsuranceInfo(firstRowIndex, true);
            expect(yield addPatientLib.getInsuranceInfoLib().getValidationMessage()).toEqual(validationMessagesProperties.get('validation.addpatient.normaladd.existinginsurancetype'));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlSW5mb1VJVmFsaWRhdGlvblRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvYWRkcGF0aWVudC9ub3JtYWxhZGQvdWl2YWxpZGF0aW9uY2hlY2tzL0luc3VyYW5jZUluZm9VSVZhbGlkYXRpb25UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpRUFBOEQ7QUFDOUQsc0VBQW1FO0FBQ25FLDBFQUF1RTtBQUN2RSxzRkFBbUY7QUFDbkYsK0RBQTREO0FBQzVELG1FQUFnRTtBQUNoRSx3RUFBcUU7QUFFckUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLDRCQUE0QixHQUFHLGdCQUFnQixDQUFDLHVEQUF1RCxDQUFDLENBQUM7QUFFN0csUUFBUSxDQUFDLGtGQUFrRixFQUFFO0lBQ3pGLElBQUksUUFBaUIsQ0FBQztJQUN0QixJQUFJLFdBQXVCLENBQUM7SUFDNUIsSUFBSSxhQUEyQixDQUFDO0lBQ2hDLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksU0FBbUIsQ0FBQztJQUV4QixVQUFVLENBQUM7O1lBQ1AsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUNoQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7WUFDcEMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQywrQkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsK0JBQWMsQ0FBQyxVQUFVLEVBQUUsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU1RSxNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QixNQUFNLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQywrQkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxNQUFNLGFBQWEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3JELENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsb0ZBQW9GLEVBQUU7O1lBQ3JGLE1BQU0sYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUN2RSxNQUFNLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztZQUN6SixNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7WUFDaEssTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQy9KLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMkZBQTJGLEVBQUU7O1lBQzVGLE1BQU0sU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUMsQ0FBQztRQUNoTCxDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG1HQUFtRyxFQUFFOztZQUNwRyxNQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV2QyxJQUFJLGtCQUFrQixHQUFhLElBQUkscUJBQVMsQ0FBQywrQkFBYyxDQUFDLFVBQVUsRUFBRSw2QkFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JHLE1BQU0sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFaEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sU0FBUyxDQUFDLGdEQUFnRCxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0RixNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7UUFDaEwsQ0FBQztLQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=