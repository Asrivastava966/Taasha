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
const PatientInfo_1 = require("../../data/info/PatientInfo");
const AddPatientMode_1 = require("../../data/enums/AddPatientMode");
const Gender_1 = require("../../data/enums/Gender");
const PatientStatus_1 = require("../../data/enums/PatientStatus");
const AddPatientLib_1 = require("../../lib/normaladdpatientpage/AddPatientLib");
const CommonUtils_1 = require("../../utils/CommonUtils");
const QuickAddPatientLib_1 = require("../../lib/quickaddpatientpage/QuickAddPatientLib");
let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let commonUtils = new CommonUtils_1.CommonUtils();
class Patient {
    constructor(addPatientMode) {
        this.birthdate = commonUtils.getDateFromString(patientInfoProperties.get('patientinfo.birthdate'));
        this.addPatientMode = addPatientMode;
    }
    ////////// Base Patient Info //////////
    getFirstNameWithTimeStamp() {
        let firstNameWithTimeStamp = patientInfoProperties.get('patientinfo.firstname') + commonUtils.getTimeStamp();
        return firstNameWithTimeStamp;
    }
    getLastNameWithTimeStamp() {
        let lastNameWithTimeStamp = patientInfoProperties.get('patientinfo.lastname') + commonUtils.getTimeStamp();
        return lastNameWithTimeStamp;
    }
    getEmailWithTimeStamp() {
        let emailWithTimeStamp = patientInfoProperties.get('patient.patientinfo.email') + commonUtils.getTimeStamp() + '@taasha.tech';
        return emailWithTimeStamp;
    }
    setBasePatientInfo() {
        let patientInfo = new PatientInfo_1.PatientInfo();
        patientInfo.setFirstName(this.getFirstNameWithTimeStamp());
        patientInfo.setLastName(this.getLastNameWithTimeStamp());
        patientInfo.setBirthDate(this.birthdate);
        patientInfo.setGender(Gender_1.Gender.FEMALE);
        patientInfo.setStatus(PatientStatus_1.PatientStatus.ACTIVE);
        patientInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice'));
        patientInfo.setEmail(this.getEmailWithTimeStamp());
        return patientInfo;
    }
    /**
     *
     * @param patientInfo
     * @param saveForm Check the flag true if form needs to be saved after filling it
     */
    addPatient(patientInfo, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.addPatientMode) {
                case AddPatientMode_1.AddPatientMode.QUICK_ADD: {
                    let quickAddPatientLib = new QuickAddPatientLib_1.QuickAddPatientLib();
                    yield quickAddPatientLib.fillPatientInfo(patientInfo);
                    if (saveForm) {
                        yield quickAddPatientLib.save();
                    }
                    return patientInfo;
                }
                case AddPatientMode_1.AddPatientMode.NORMAL_ADD: {
                    let addPatientLib = new AddPatientLib_1.AddPatientLib();
                    yield addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
                    if (saveForm) {
                        yield addPatientLib.getPatientInfoLib().save();
                    }
                    return patientInfo;
                }
            }
        });
    }
    addBasePatient(saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addPatient(this.setBasePatientInfo(), saveForm);
        });
    }
}
exports.Patient = Patient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vZGF0YS9iYXNlZGF0YS9QYXRpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2REFBMEQ7QUFDMUQsb0VBQWlFO0FBQ2pFLG9EQUFpRDtBQUNqRCxrRUFBK0Q7QUFDL0QsZ0ZBQTZFO0FBQzdFLHlEQUFzRDtBQUN0RCx5RkFBc0Y7QUFFdEYsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLHFCQUFxQixHQUFHLGdCQUFnQixDQUFDLGdEQUFnRCxDQUFDLENBQUM7QUFDL0YsSUFBSSxXQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFaEQsTUFBYSxPQUFPO0lBR2hCLFlBQVksY0FBNkI7UUFvQnpDLGNBQVMsR0FBUSxXQUFXLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQW5CL0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUVELHVDQUF1QztJQUN2Qyx5QkFBeUI7UUFDckIsSUFBSSxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsR0FBRyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0csT0FBTyxzQkFBc0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0JBQXdCO1FBQ3BCLElBQUkscUJBQXFCLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNHLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUFxQjtRQUNqQixJQUFJLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxjQUFjLENBQUM7UUFDOUgsT0FBTyxrQkFBa0IsQ0FBQztJQUM5QixDQUFDO0lBSU8sa0JBQWtCO1FBQ3RCLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBRXBDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7UUFDekQsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsV0FBVyxDQUFDLFNBQVMsQ0FBQyw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLFdBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUNuRixXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFFbkQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDRyxVQUFVLENBQUMsV0FBdUIsRUFBRSxRQUFnQjs7WUFFdEQsUUFBTyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QixLQUFLLCtCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzNCLElBQUksa0JBQWtCLEdBQXNCLElBQUksdUNBQWtCLEVBQUUsQ0FBQztvQkFDckUsTUFBTSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRXRELElBQUcsUUFBUSxFQUFFO3dCQUNULE1BQU0sa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ25DO29CQUNELE9BQU8sV0FBVyxDQUFDO2lCQUN0QjtnQkFFRCxLQUFLLCtCQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzVCLElBQUksYUFBYSxHQUFpQixJQUFJLDZCQUFhLEVBQUUsQ0FBQztvQkFDdEQsTUFBTSxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRXJFLElBQUcsUUFBUSxFQUFFO3dCQUNULE1BQU0sYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2xEO29CQUNELE9BQU8sV0FBVyxDQUFDO2lCQUN0QjthQUNKO1FBQ0wsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLFFBQWdCOztZQUNqQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxDQUFDO0tBQUE7Q0FDSjtBQXhFRCwwQkF3RUMifQ==