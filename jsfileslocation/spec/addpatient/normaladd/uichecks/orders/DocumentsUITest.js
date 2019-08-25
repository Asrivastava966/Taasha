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
const DocumentInfo_1 = require("../../../../../data/info/DocumentInfo");
let propertiesReader = require('properties-reader');
let documentInfoProperties = propertiesReader('ra_automation/data/properties/DocumentInfo.file');
describe('[SPEC]: Upload a Document: UI tests', function () {
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
            yield homepageLib.getMyTasksGrid().searchViaPatientNameFilterAndClickOnOrderNumberLink(basePatientInfo.getFirstName());
            yield addPatientLib.getOrdersLib().navigateToDocumentsTab();
        });
    });
    it('[TEST]: Verify the disabled save button', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let documentInfo = new DocumentInfo_1.DocumentInfo();
            documentInfo.setDocumentPath(documentInfoProperties.get('documents.documentinfo.path'));
            yield addPatientLib.getOrdersLib().getDocumentsLib().fillDocumentInfo(documentInfo);
            expect(yield addPatientLib.getOrdersLib().getDocumentsLib().getSaveButtonEnabledStatus()).toBe(false);
        });
    });
    it('[TEST]: Verify the close button in the Action column', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let documentInfo = new DocumentInfo_1.DocumentInfo();
            documentInfo.setDocumentPath(documentInfoProperties.get('documents.documentinfo.path'));
            yield addPatientLib.getOrdersLib().getDocumentsLib().fillDocumentInfo(documentInfo);
            yield addPatientLib.getOrdersLib().getDocumentsLib().removeUploadedDocument();
            expect(yield addPatientLib.getOrdersLib().getDocumentsLib().getSaveButtonDisplayedStatus()).toBe(false);
        });
    });
    it('[TEST]: Verify the Cancel button', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let documentInfo = new DocumentInfo_1.DocumentInfo();
            documentInfo.setDocumentPath(documentInfoProperties.get('documents.documentinfo.path'));
            yield addPatientLib.getOrdersLib().getDocumentsLib().fillDocumentInfo(documentInfo);
            yield addPatientLib.getOrdersLib().getDocumentsLib().cancel();
            expect(yield addPatientLib.getOrdersLib().getDocumentsLib().getSaveButtonDisplayedStatus()).toBe(false);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzVUlUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FkZHBhdGllbnQvbm9ybWFsYWRkL3VpY2hlY2tzL29yZGVycy9Eb2N1bWVudHNVSVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9FQUFpRTtBQUNqRSx5RUFBc0U7QUFDdEUsNkVBQTBFO0FBQzFFLHlGQUFzRjtBQUN0RixrRUFBK0Q7QUFDL0Qsc0VBQW1FO0FBQ25FLDJFQUF3RTtBQUV4RSx3RUFBcUU7QUFFckUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLHNCQUFzQixHQUFHLGdCQUFnQixDQUFDLGlEQUFpRCxDQUFDLENBQUM7QUFFakcsUUFBUSxDQUFDLHFDQUFxQyxFQUFFO0lBQzVDLElBQUksUUFBaUIsQ0FBQztJQUN0QixJQUFJLFdBQXVCLENBQUM7SUFDNUIsSUFBSSxhQUEyQixDQUFDO0lBQ2hDLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLGVBQTJCLENBQUM7SUFFaEMsVUFBVSxDQUFDOztZQUNQLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUMxQixXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDaEMsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLCtCQUFjLENBQUMsU0FBUyxFQUFFLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFM0UsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsTUFBTSxXQUFXLENBQUMsb0JBQW9CLENBQUMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRSxlQUFlLEdBQUcsTUFBTSxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RELE1BQU0sU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLG1EQUFtRCxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZILE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDaEUsQ0FBQztLQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRTs7WUFDMUMsSUFBSSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7WUFDdEMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXBGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFHLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0RBQXNELEVBQUU7O1lBQ3ZELElBQUksWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBQ3RDLFlBQVksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztZQUN4RixNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwRixNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBRTlFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVHLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0NBQWtDLEVBQUU7O1lBQ25DLElBQUksWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBQ3RDLFlBQVksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztZQUN4RixNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwRixNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU5RCxNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RyxDQUFDO0tBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==