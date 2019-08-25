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
const Patient_1 = require("../../../../data/basedata/Patient");
const Insurance_1 = require("../../../../data/basedata/Insurance");
const Order_1 = require("../../../../data/basedata/Order");
const Doctor_1 = require("../../../../data/basedata/Doctor");
const OrderType_1 = require("../../../../data/enums/OrderType");
const InsuranceType_1 = require("../../../../data/enums/InsuranceType");
const PatientInfo_1 = require("../../../../data/info/PatientInfo");
const Gender_1 = require("../../../../data/enums/Gender");
const PatientStatus_1 = require("../../../../data/enums/PatientStatus");
const CommonUtils_1 = require("../../../../utils/CommonUtils");
const QuickAddPatientLib_1 = require("../../../../lib/quickaddpatientpage/QuickAddPatientLib");
let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Add patient info, insurance info, order info and doctor info via Quick Add form: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let quickAddPatientLib;
    let patient;
    let insurance;
    let order;
    let doctor;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            quickAddPatientLib = new QuickAddPatientLib_1.QuickAddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.QUICK_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            order = new Order_1.Order(AddPatientMode_1.AddPatientMode.QUICK_ADD, OrderType_1.OrderType.AUTO_CPAP);
            doctor = new Doctor_1.Doctor(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
        });
    });
    it('[TEST]: Perform Quick Add - Patient Info, Insurance Info, Order Info & Doctor Info', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let patientInfo = yield patient.addBasePatient(false);
            yield insurance.addBaseInsurance(false);
            yield order.addBaseOrder(false);
            yield doctor.addBaseDoctor(true);
            let expectedPatientName = patientInfo.getLastName() + ", " + patientInfo.getFirstName();
            let firstRowIndex = 1;
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilter(patientInfo.getFirstName());
            expect(yield homepageLib.getMyTasksGrid().getPatientName(firstRowIndex)).toEqual(expectedPatientName);
        });
    });
    it('[TEST]: Perform Quick Add - with existing patient found warning', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            ;
            let existingPatientInfo = yield patient.addBasePatient(true);
            let newPatientInfo = new PatientInfo_1.PatientInfo();
            let lastName = 'TEST_Automation_lName_' + commonUtils.getTimeStamp();
            newPatientInfo.setFirstName(existingPatientInfo.getFirstName());
            newPatientInfo.setLastName(lastName);
            newPatientInfo.setBirthDate(existingPatientInfo.getBirthDate());
            newPatientInfo.setGender(Gender_1.Gender.FEMALE);
            newPatientInfo.setStatus(PatientStatus_1.PatientStatus.ACTIVE);
            newPatientInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice'));
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            yield patient.addPatient(newPatientInfo, false);
            let firstRowIndex = 1;
            expect(yield quickAddPatientLib.getPatientName(firstRowIndex)).toContain(existingPatientInfo.getFirstName());
            yield quickAddPatientLib.toggleExistingPatientFoundWarning();
            yield quickAddPatientLib.save();
            let expectedPatientName = newPatientInfo.getLastName() + ", " + newPatientInfo.getFirstName();
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilter(lastName);
            expect(yield homepageLib.getMyTasksGrid().getPatientName(firstRowIndex)).toEqual(expectedPatientName);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tBZGRXb3JrZmxvd1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvYWRkcGF0aWVudC9xdWlja2FkZC93b3JrZmxvdy9RdWlja0FkZFdvcmtmbG93VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUVBQThEO0FBQzlELHNFQUFtRTtBQUNuRSwwRUFBdUU7QUFDdkUsK0RBQTREO0FBQzVELG1FQUFnRTtBQUNoRSwyREFBd0Q7QUFDeEQsNkRBQTBEO0FBQzFELGdFQUE2RDtBQUM3RCx3RUFBcUU7QUFDckUsbUVBQWdFO0FBQ2hFLDBEQUF1RDtBQUN2RCx3RUFBcUU7QUFDckUsK0RBQTREO0FBQzVELCtGQUE0RjtBQUU1RixJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUkscUJBQXFCLEdBQUcsZ0JBQWdCLENBQUMsZ0RBQWdELENBQUMsQ0FBQztBQUMvRixJQUFJLFdBQVcsR0FBZSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVoRCxRQUFRLENBQUMseUdBQXlHLEVBQUU7SUFDaEgsSUFBSSxRQUFpQixDQUFDO0lBQ3RCLElBQUksV0FBdUIsQ0FBQztJQUM1QixJQUFJLGtCQUFxQyxDQUFDO0lBQzFDLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLEtBQVcsQ0FBQztJQUNoQixJQUFJLE1BQWEsQ0FBQztJQUVsQixVQUFVLENBQUM7O1lBQ1AsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUNoQyxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7WUFDOUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELFNBQVMs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