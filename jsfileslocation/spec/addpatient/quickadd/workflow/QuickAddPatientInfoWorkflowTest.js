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
const using = require("jasmine-data-provider");
const LoginLib_1 = require("../../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../../lib/homepage/HomepageLib");
const PatientInfo_1 = require("../../../../data/info/PatientInfo");
const AddPatientMode_1 = require("../../../../data/enums/AddPatientMode");
const QuickAddPatientLib_1 = require("../../../../lib/quickaddpatientpage/QuickAddPatientLib");
const Gender_1 = require("../../../../data/enums/Gender");
const PatientStatus_1 = require("../../../../data/enums/PatientStatus");
const CommonUtils_1 = require("../../../../utils/CommonUtils");
let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Add patient info via Quick Add form: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let quickAddPatientLib;
    const patientInfoProvider = {
        'Gender: Female, Status: Active': { gender: Gender_1.Gender.FEMALE, status: PatientStatus_1.PatientStatus.ACTIVE },
        'Gender: Male, Status: Inactive': { gender: Gender_1.Gender.MALE, status: PatientStatus_1.PatientStatus.INACTIVE },
        'Gender: Female, Status: Deceased': { gender: Gender_1.Gender.FEMALE, status: PatientStatus_1.PatientStatus.DECEASED },
        'Gender: Male, Status: Lost': { gender: Gender_1.Gender.MALE, status: PatientStatus_1.PatientStatus.LOST },
    };
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            quickAddPatientLib = new QuickAddPatientLib_1.QuickAddPatientLib();
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
        });
    });
    using(patientInfoProvider, function (data, description) {
        it('[TEST]: Perform Quick Add with only mandatory fields- Patient Info' + description, function () {
            return __awaiter(this, void 0, void 0, function* () {
                let patientInfo = new PatientInfo_1.PatientInfo();
                let firstNameWithTimeStamp = patientInfoProperties.get('patientinfo.firstname') + commonUtils.getTimeStamp();
                let lastNameWithTimeStamp = patientInfoProperties.get('patientinfo.lastname') + commonUtils.getTimeStamp();
                let birthdate = commonUtils.getDateFromString(patientInfoProperties.get('patientinfo.birthdate'));
                patientInfo.setFirstName(firstNameWithTimeStamp);
                patientInfo.setLastName(lastNameWithTimeStamp);
                patientInfo.setMI(patientInfoProperties.get('patientinfo.mi'));
                patientInfo.setBirthDate(birthdate);
                patientInfo.setGender(data.gender);
                patientInfo.setStatus(data.status);
                patientInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice'));
                yield quickAddPatientLib.fillPatientInfo(patientInfo);
                yield quickAddPatientLib.save();
                let expectedPatientName = patientInfo.getLastName() + ", " + patientInfo.getFirstName();
                let firstRowIndex = 1;
                yield homepageLib.getMyTasksGrid().searchViaPatientNameFilter(patientInfo.getFirstName());
                expect(yield homepageLib.getMyTasksGrid().getPatientName(firstRowIndex)).toEqual(expectedPatientName);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tBZGRQYXRpZW50SW5mb1dvcmtmbG93VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy9hZGRwYXRpZW50L3F1aWNrYWRkL3dvcmtmbG93L1F1aWNrQWRkUGF0aWVudEluZm9Xb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUErQztBQUMvQyxpRUFBOEQ7QUFDOUQsc0VBQW1FO0FBQ25FLG1FQUFnRTtBQUNoRSwwRUFBdUU7QUFDdkUsK0ZBQTRGO0FBQzVGLDBEQUF1RDtBQUN2RCx3RUFBcUU7QUFDckUsK0RBQTREO0FBRTVELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0FBQy9GLElBQUksV0FBVyxHQUFlLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRWhELFFBQVEsQ0FBQyw2REFBNkQsRUFBRTtJQUNwRSxJQUFJLFFBQWtCLENBQUM7SUFDdkIsSUFBSSxXQUF3QixDQUFDO0lBQzdCLElBQUksa0JBQXNDLENBQUM7SUFDM0MsTUFBTSxtQkFBbUIsR0FBRztRQUN4QixnQ0FBZ0MsRUFBRSxFQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSw2QkFBYSxDQUFDLE1BQU0sRUFBQztRQUN2RixnQ0FBZ0MsRUFBRSxFQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSw2QkFBYSxDQUFDLFFBQVEsRUFBQztRQUN2RixrQ0FBa0MsRUFBRSxFQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSw2QkFBYSxDQUFDLFFBQVEsRUFBQztRQUMzRiw0QkFBNEIsRUFBRSxFQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSw2QkFBYSxDQUFDLElBQUksRUFBQztLQUNsRixDQUFDO0lBRUYsVUFBVSxDQUFDOztZQUNQLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUMxQixXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDaEMsa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO1lBRTlDLE1BQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzdCLE1BQU0sV0FBVyxDQUFDLG9CQUFvQixDQUFDLCtCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckUsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxVQUFTLElBQUksRUFBRSxXQUFXO1FBQ2pELEVBQUUsQ0FBQyxvRUFBb0UsR0FBRSxXQUFXLEVBQUU7O2dCQUNsRixJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzdHLElBQUkscUJBQXFCLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUMzRyxJQUFJLFNBQVMsR0FBUSxXQUFXLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztnQkFDdkcsV0FBVyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNqRCxXQUFXLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQy9DLFdBQVcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDL0QsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxXQUFXLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7Z0JBRW5GLE1BQU0sa0JBQWtCLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUVoQyxJQUFJLG1CQUFtQixHQUFVLFdBQVcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUMvRixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUUxRixNQUFNLENBQUMsTUFBTSxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDMUcsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==