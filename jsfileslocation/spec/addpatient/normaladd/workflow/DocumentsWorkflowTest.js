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
const Document_1 = require("../../../../data/basedata/Document");
const DocumentType_1 = require("../../../../data/enums/DocumentType");
const Tabs_1 = require("../../../../data/enums/Tabs");
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
            document = new Document_1.Document(Tabs_1.Tabs.PATIENT, DocumentType_1.DocumentType.COMPLETED_DELIVERY_TICKET);
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
            basePatientInfo = yield patient.addBasePatient(false);
            yield insurance.addBaseInsurance(true);
        });
    });
    it('[TEST]: Update patient- Upload a new Document', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());
            //Upload a Document
            yield addPatientLib.navigateToDocumentsTab();
            yield document.uploadTestDocument();
            let expectedSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd.uploaddocument');
            expect(yield addPatientLib.getDocumentsLib().getSuccessMessage()).toBe(expectedSuccessMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzV29ya2Zsb3dUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FkZHBhdGllbnQvbm9ybWFsYWRkL3dvcmtmbG93L0RvY3VtZW50c1dvcmtmbG93VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUVBQThEO0FBQzlELHNFQUFtRTtBQUNuRSwwRUFBdUU7QUFDdkUsc0ZBQW1GO0FBQ25GLCtEQUE0RDtBQUM1RCxtRUFBZ0U7QUFDaEUsd0VBQXFFO0FBQ3JFLGlFQUE4RDtBQUM5RCxzRUFBbUU7QUFDbkUsc0RBQW1EO0FBR25ELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSwyQkFBMkIsR0FBRyxnQkFBZ0IsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0FBRTVHLFFBQVEsQ0FBQywyQ0FBMkMsRUFBRTtJQUNsRCxJQUFJLFFBQWlCLENBQUM7SUFDdEIsSUFBSSxXQUF1QixDQUFDO0lBQzVCLElBQUksYUFBMkIsQ0FBQztJQUNoQyxJQUFJLE9BQWUsQ0FBQztJQUNwQixJQUFJLFNBQW1CLENBQUM7SUFDeEIsSUFBSSxRQUFpQixDQUFDO0lBQ3RCLElBQUksZUFBMkIsQ0FBQztJQUVoQyxVQUFVLENBQUM7O1lBQ1AsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUNoQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7WUFDcEMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsK0JBQWMsQ0FBQyxTQUFTLEVBQUUsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFdBQUksQ0FBQyxPQUFPLEVBQUUsMkJBQVksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBRTlFLE1BQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzdCLE1BQU0sV0FBVyxDQUFDLG9CQUFvQixDQUFDLCtCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakUsZUFBZSxHQUFHLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RCxNQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLCtDQUErQyxFQUFFOztZQUNoRCx5RkFBeUY7WUFDekYsTUFBTSxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsbURBQW1ELENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFFdkgsbUJBQW1CO1lBQ25CLE1BQU0sYUFBYSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDN0MsTUFBTSxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUVwQyxJQUFJLHNCQUFzQixHQUFHLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1lBQzVHLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkcsQ0FBQztLQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=