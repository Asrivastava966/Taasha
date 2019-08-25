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
const DocumentType_1 = require("../../../../../data/enums/DocumentType");
const DocumentInfo_1 = require("../../../../../data/info/DocumentInfo");
let propertiesReader = require('properties-reader');
let documentInfoProperties = propertiesReader('ra_automation/data/properties/DocumentInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Upload a Document: UI Validation tests', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let loginLib;
        let homepageLib;
        let addPatientLib;
        let patient;
        let insurance;
        let basePatientInfo;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                loginLib = new LoginLib_1.LoginLib();
                homepageLib = new HomepageLib_1.HomepageLib();
                addPatientLib = new AddPatientLib_1.AddPatientLib();
                patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
                insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.QUICK_ADD, InsuranceType_1.InsuranceType.PRIMARY);
                yield loginLib.doBaseLogin();
                yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
                basePatientInfo = yield patient.addBasePatient(false);
                yield insurance.addBaseInsurance(true);
            });
        });
        it('[TEST]: Verify the validation checks when while uploading a new document user tries to navigate to some other page', function () {
            return __awaiter(this, void 0, void 0, function* () {
                //Search for Patient using the Patient Name filter of the My Tasks grid on the home page.
                yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());
                yield addPatientLib.getOrdersLib().navigateToDocumentsTab();
                //Upload a Document
                let documentInfo = new DocumentInfo_1.DocumentInfo();
                let defaultOrderIndex = 1;
                documentInfo.setDocumentPath(documentInfoProperties.get('documents.documentinfo.path'));
                documentInfo.setDocumentType(DocumentType_1.DocumentType.COMPLETED_DELIVERY_TICKET);
                documentInfo.setOrderIndex(defaultOrderIndex);
                documentInfo.setNotes(documentInfoProperties.get('documents.documentinfo.notes'));
                yield addPatientLib.getOrdersLib().getDocumentsLib().fillDocumentInfo(documentInfo);
                yield addPatientLib.getOrdersLib().navigateToDeliveryInstTab();
                let expectedConfirmationMessage = validationMessageProperties.get('confirmation.modal.unsavedchanges');
                expect(yield addPatientLib.getOrdersLib().getConfirmationModalMessage()).toBe(expectedConfirmationMessage);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzVUlWYWxpZGF0aW9uVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy9hZGRwYXRpZW50L25vcm1hbGFkZC91aXZhbGlkYXRpb25jaGVja3Mvb3JkZXJzL0RvY3VtZW50c1VJVmFsaWRhdGlvblRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsNkVBQTBFO0FBQzFFLHlGQUFzRjtBQUN0RixrRUFBK0Q7QUFDL0Qsc0VBQW1FO0FBQ25FLDJFQUF3RTtBQUN4RSx5RUFBc0U7QUFFdEUsd0VBQXFFO0FBR3JFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxzQkFBc0IsR0FBRyxnQkFBZ0IsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBQ2pHLElBQUksMkJBQTJCLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUU1RyxRQUFRLENBQUMsZ0RBQWdELEVBQUM7O1FBQ3RELElBQUksUUFBaUIsQ0FBQztRQUN0QixJQUFJLFdBQXVCLENBQUM7UUFDNUIsSUFBSSxhQUEyQixDQUFDO1FBQ2hDLElBQUksT0FBZSxDQUFDO1FBQ3BCLElBQUksU0FBbUIsQ0FBQztRQUN4QixJQUFJLGVBQTJCLENBQUM7UUFFaEMsVUFBVSxDQUFDOztnQkFDUCxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7Z0JBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztnQkFDaEMsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO2dCQUNwQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLCtCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hELFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsK0JBQWMsQ0FBQyxTQUFTLEVBQUUsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFM0UsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzdCLE1BQU0sV0FBVyxDQUFDLG9CQUFvQixDQUFDLCtCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pFLGVBQWUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLENBQUM7U0FBQSxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsb0hBQW9ILEVBQUU7O2dCQUNySCx5RkFBeUY7Z0JBQ3pGLE1BQU0sV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLG1EQUFtRCxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUN2SCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUU1RCxtQkFBbUI7Z0JBQ25CLElBQUksWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO2dCQUN0QyxJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztnQkFDMUIsWUFBWSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO2dCQUN4RixZQUFZLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDckUsWUFBWSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM5QyxZQUFZLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7Z0JBRWxGLE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwRixNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dCQUUvRCxJQUFJLDJCQUEyQixHQUFHLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2dCQUN2RyxNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQy9HLENBQUM7U0FBQSxDQUFDLENBQUE7SUFDTixDQUFDO0NBQUEsQ0FBQyxDQUFBIn0=