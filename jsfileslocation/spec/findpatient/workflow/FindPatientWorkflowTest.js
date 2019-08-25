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
const LoginLib_1 = require("../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../lib/homepage/HomepageLib");
const FindPatientLib_1 = require("../../../lib/findpatientpage/FindPatientLib");
const Patient_1 = require("../../../data/basedata/Patient");
const AddPatientMode_1 = require("../../../data/enums/AddPatientMode");
describe('[SPEC]: Find patient with various search criterias: Workflow tests', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let firstRowIndex = 1;
        let loginLib;
        let homepageLib;
        let findPatientLib;
        let patient;
        let patientInfo;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                loginLib = new LoginLib_1.LoginLib();
                homepageLib = new HomepageLib_1.HomepageLib();
                findPatientLib = new FindPatientLib_1.FindPatientLib();
                patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.QUICK_ADD);
                yield loginLib.doBaseLogin();
                yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
                patientInfo = yield patient.addBasePatient(true);
                yield homepageLib.findPatient();
            });
        });
        it('[TEST]: Find Patient with First Name and Last Name', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield findPatientLib.searchPatientWithLastName(patientInfo.getLastName());
                yield findPatientLib.searchPatientWithFirstName(patientInfo.getFirstName());
                yield findPatientLib.search();
                expect(yield findPatientLib.getLastNameValue(firstRowIndex)).toEqual(patientInfo.getLastName());
                expect(yield findPatientLib.getFirstNameValue(firstRowIndex)).toEqual(patientInfo.getFirstName());
            });
        });
        it('[TEST]: Find Patient with First Name, Last Name and DOB', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield findPatientLib.searchPatientWithLastName(patientInfo.getLastName());
                yield findPatientLib.searchPatientWithFirstName(patientInfo.getFirstName());
                yield findPatientLib.searchPatientWithBirthDate(patientInfo.getBirthDate());
                yield findPatientLib.search();
                expect(yield findPatientLib.getLastNameValue(firstRowIndex)).toEqual(patientInfo.getLastName());
                expect(yield findPatientLib.getFirstNameValue(firstRowIndex)).toEqual(patientInfo.getFirstName());
            });
        });
        it('[TEST]: Find Patient with Email', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield findPatientLib.searchPatientWithEmail(patientInfo.getEmail());
                yield findPatientLib.search();
                expect(yield findPatientLib.getEmailValue(firstRowIndex)).toEqual(patientInfo.getEmail());
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluZFBhdGllbnRXb3JrZmxvd1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvZmluZHBhdGllbnQvd29ya2Zsb3cvRmluZFBhdGllbnRXb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhEQUEyRDtBQUMzRCxtRUFBZ0U7QUFDaEUsZ0ZBQTZFO0FBQzdFLDREQUF5RDtBQUN6RCx1RUFBb0U7QUFHcEUsUUFBUSxDQUFDLG9FQUFvRSxFQUFFOztRQUMzRSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxRQUFrQixDQUFDO1FBQ3ZCLElBQUksV0FBd0IsQ0FBQztRQUM3QixJQUFJLGNBQTZCLENBQUM7UUFDbEMsSUFBSSxPQUFlLENBQUM7UUFDcEIsSUFBSSxXQUF1QixDQUFDO1FBRTVCLFVBQVUsQ0FBQzs7Z0JBQ1AsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO2dCQUMxQixXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7Z0JBQ2hDLGNBQWMsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztnQkFDdEMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVoRCxNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDN0IsTUFBTSxXQUFXLENBQUMsb0JBQW9CLENBQUMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakUsV0FBVyxHQUFHLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsTUFBTSxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxvREFBb0QsRUFBRTs7Z0JBQ3JELE1BQU0sY0FBYyxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRSxNQUFNLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDNUUsTUFBTSxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRTlCLE1BQU0sQ0FBQyxNQUFNLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDaEcsTUFBTSxDQUFDLE1BQU0sY0FBYyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ3RHLENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMseURBQXlELEVBQUU7O2dCQUMxRCxNQUFNLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDMUUsTUFBTSxjQUFjLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQzVFLE1BQU0sY0FBYyxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RSxNQUFNLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFOUIsTUFBTSxDQUFDLE1BQU0sY0FBYyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRyxNQUFNLENBQUMsTUFBTSxjQUFjLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDdEcsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRTs7Z0JBQ2xDLE1BQU0sY0FBYyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRSxNQUFNLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFOUIsTUFBTSxDQUFDLE1BQU0sY0FBYyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM5RixDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9