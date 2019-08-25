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
const InsuranceType_1 = require("../../../../../data/enums/InsuranceType");
const OrderNote_1 = require("../../../../../data/basedata/OrderNote");
const OrderNoteType_1 = require("../../../../../data/enums/OrderNoteType");
const NoteInfo_1 = require("../../../../../data/info/NoteInfo");
const NoteStatus_1 = require("../../../../../data/enums/NoteStatus");
const Order_1 = require("../../../../../data/basedata/Order");
const OrderType_1 = require("../../../../../data/enums/OrderType");
let propertiesReader = require('properties-reader');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Add Patient Note via Normal Add- Add a new Open Note, update it to a Closed Note: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let insurance;
    let order;
    let orderNote;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            yield loginLib.doBaseLogin();
        });
    });
    it('[TEST]: Add patient- Add a new Open Note', function () {
        return __awaiter(this, void 0, void 0, function* () {
            homepageLib = new HomepageLib_1.HomepageLib();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.NORMAL_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            order = new Order_1.Order(AddPatientMode_1.AddPatientMode.NORMAL_ADD, OrderType_1.OrderType.AUTO_CPAP);
            orderNote = new OrderNote_1.OrderNote(OrderNoteType_1.OrderNoteType.INSURANCE_VERIFICATION);
            let a7035_hcpcsCode = 'A7035';
            let a7037_hcpcsCode = 'A7037';
            yield patient.addBasePatient(true);
            yield addPatientLib.navigateToInsuranceInfoTab();
            yield insurance.addBaseInsurance(true);
            yield addPatientLib.navigateToOrdersTab();
            yield order.addBaseOrder(false);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            //Add a new Open Note 
            yield addPatientLib.getOrdersLib().navigateToOrderNotesTab();
            yield orderNote.addBaseNote();
            //Verification points 
            let expectedNoteSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.addordernote');
            let expectedCommentSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.ordernote.addcomment');
            yield expect(yield addPatientLib.getOrdersLib().getOrderNotesLib().getNoteSuccessMessage()).toBe(expectedNoteSuccessMessage);
            yield expect(yield addPatientLib.getOrdersLib().getOrderNotesLib().getCommentSuccessMessage()).toBe(expectedCommentSuccessMessage);
        });
    });
    it('[TEST]: Update patient- Add a new Open Note, Update it to a Closed Note', function () {
        return __awaiter(this, void 0, void 0, function* () {
            homepageLib = new HomepageLib_1.HomepageLib();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.QUICK_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            order = new Order_1.Order(AddPatientMode_1.AddPatientMode.QUICK_ADD, OrderType_1.OrderType.AUTO_CPAP);
            orderNote = new OrderNote_1.OrderNote(OrderNoteType_1.OrderNoteType.INSURANCE_VERIFICATION);
            let a7035_hcpcsCode = 'A7035';
            let a7037_hcpcsCode = 'A7037';
            let basePatientInfo = yield patient.addBasePatient(false);
            yield insurance.addBaseInsurance(false);
            yield order.addBaseOrder(false);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());
            //Add a new Open Note 
            yield addPatientLib.getOrdersLib().navigateToOrderNotesTab();
            yield orderNote.addBaseNote();
            //Verification points 
            let expectedNoteSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.addordernote');
            let expectedCommentSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.ordernote.addcomment');
            yield expect(yield addPatientLib.getOrdersLib().getOrderNotesLib().getNoteSuccessMessage()).toBe(expectedNoteSuccessMessage);
            yield expect(yield addPatientLib.getOrdersLib().getOrderNotesLib().getCommentSuccessMessage()).toBe(expectedCommentSuccessMessage);
            //Update the same note to a Closed Note 
            yield addPatientLib.getOrdersLib().getOrderNotesLib().navigateBackToOrderNotesGrid();
            let firstNoteIndex = 1;
            let noteInfo = new NoteInfo_1.NoteInfo();
            noteInfo.setNoteStatus(NoteStatus_1.NoteStatus.CLOSED);
            yield orderNote.updateNote(firstNoteIndex, noteInfo, false);
            let expectedNoteUpdateSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.updateordernote');
            yield expect(yield addPatientLib.getOrdersLib().getOrderNotesLib().getNoteSuccessMessage()).toBe(expectedNoteUpdateSuccessMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJOb3Rlc1dvcmtmbG93VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy9hZGRwYXRpZW50L25vcm1hbGFkZC93b3JrZmxvdy9vcmRlcnMvT3JkZXJOb3Rlc1dvcmtmbG93VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0VBQWlFO0FBQ2pFLHlFQUFzRTtBQUN0RSw2RUFBMEU7QUFDMUUseUZBQXNGO0FBQ3RGLGtFQUErRDtBQUMvRCxzRUFBbUU7QUFDbkUsMkVBQXdFO0FBQ3hFLHNFQUFtRTtBQUNuRSwyRUFBd0U7QUFDeEUsZ0VBQTZEO0FBQzdELHFFQUFrRTtBQUNsRSw4REFBMkQ7QUFDM0QsbUVBQWdFO0FBRWhFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSwyQkFBMkIsR0FBRyxnQkFBZ0IsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0FBRTVHLFFBQVEsQ0FBQywwR0FBMEcsRUFBRTtJQUNqSCxJQUFJLFFBQWlCLENBQUM7SUFDdEIsSUFBSSxXQUF1QixDQUFDO0lBQzVCLElBQUksYUFBMkIsQ0FBQztJQUNoQyxJQUFJLE9BQWUsQ0FBQztJQUNwQixJQUFJLFNBQW1CLENBQUM7SUFDeEIsSUFBSSxLQUFXLENBQUM7SUFDaEIsSUFBSSxTQUFtQixDQUFDO0lBRXhCLFVBQVUsQ0FBQzs7WUFDUCxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDMUIsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTs7WUFDM0MsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sV0FBVyxDQUFDLG9CQUFvQixDQUFDLCtCQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7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