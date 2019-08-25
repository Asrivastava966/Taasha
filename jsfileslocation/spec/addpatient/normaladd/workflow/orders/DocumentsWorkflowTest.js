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
const Document_1 = require("../../../../../data/basedata/Document");
const DocumentType_1 = require("../../../../../data/enums/DocumentType");
const Tabs_1 = require("../../../../../data/enums/Tabs");
let propertiesReader = require('properties-reader');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Upload a Document: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let patient;
    let insurance;
    let document;
    let basePatientInfo;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.QUICK_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            document = new Document_1.Document(Tabs_1.Tabs.ORDER, DocumentType_1.DocumentType.COMPLETED_DELIVERY_TICKET);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            basePatientInfo = yield patient.addBasePatient(false);
            yield insurance.addBaseInsurance(true);
        });
    });
    it('[TEST]: Update order - Upload a new Document as \'Completed Delivery Ticket\' Document Type', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());
            //Upload a Document
            yield addPatientLib.getOrdersLib().navigateToDocumentsTab();
            yield document.uploadTestDocument();
            let expectedSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.uploaddocument');
            expect(yield addPatientLib.getDocumentsLib().getSuccessMessage()).toBe(expectedSuccessMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzV29ya2Zsb3dUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FkZHBhdGllbnQvbm9ybWFsYWRkL3dvcmtmbG93L29yZGVycy9Eb2N1bWVudHNXb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsNkVBQTBFO0FBQzFFLHlGQUFzRjtBQUN0RixrRUFBK0Q7QUFDL0Qsc0VBQW1FO0FBQ25FLDJFQUF3RTtBQUN4RSxvRUFBaUU7QUFDakUseUVBQXNFO0FBQ3RFLHlEQUFzRDtBQUd0RCxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksMkJBQTJCLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUU1RyxRQUFRLENBQUMsMkNBQTJDLEVBQUU7SUFDbEQsSUFBSSxRQUFpQixDQUFDO0lBQ3RCLElBQUksV0FBdUIsQ0FBQztJQUM1QixJQUFJLGFBQTJCLENBQUM7SUFDaEMsSUFBSSxPQUFlLENBQUM7SUFDcEIsSUFBSSxTQUFtQixDQUFDO0lBQ3hCLElBQUksUUFBaUIsQ0FBQztJQUN0QixJQUFJLGVBQTJCLENBQUM7SUFFaEMsVUFBVSxDQUFDOztZQUNQLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUMxQixXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDaEMsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLCtCQUFjLENBQUMsU0FBUyxFQUFFLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0UsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxXQUFJLENBQUMsS0FBSyxFQUFFLDJCQUFZLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUU1RSxNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QixNQUFNLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pFLGVBQWUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsTUFBTSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw2RkFBNkYsRUFBRTs7WUFDOUYseUZBQXlGO1lBQ3pGLE1BQU0sV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLG1EQUFtRCxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBRXZILG1CQUFtQjtZQUNuQixNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzVELE1BQU0sUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFFcEMsSUFBSSxzQkFBc0IsR0FBRywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztZQUM1RyxNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ25HLENBQUM7S0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9