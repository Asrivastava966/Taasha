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
const AddPatientMode_1 = require("../../data/enums/AddPatientMode");
const ClinicalInfo_1 = require("../../data/info/ClinicalInfo");
const QuickAddPatientLib_1 = require("../../lib/quickaddpatientpage/QuickAddPatientLib");
const AddPatientLib_1 = require("../../lib/normaladdpatientpage/AddPatientLib");
let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
class Doctor {
    constructor(addPatientMode) {
        this.addPatientMode = addPatientMode;
    }
    ////////// Base Doctor Info //////////
    setBaseDoctorInfo() {
        let clinicalInfo = new ClinicalInfo_1.ClinicalInfo();
        clinicalInfo.setOrderingDoctorName(orderInfoProperties.get('orders.clinicalinfo.orderingdoctor'));
        return clinicalInfo;
    }
    addDoctor(clinicalInfo, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.addPatientMode) {
                case AddPatientMode_1.AddPatientMode.QUICK_ADD: {
                    let quickAddPatientLib = new QuickAddPatientLib_1.QuickAddPatientLib();
                    yield quickAddPatientLib.fillDoctorInfo(clinicalInfo);
                    if (saveForm) {
                        yield quickAddPatientLib.save();
                    }
                    return clinicalInfo;
                }
                case AddPatientMode_1.AddPatientMode.NORMAL_ADD: {
                    let addPatientLib = new AddPatientLib_1.AddPatientLib();
                    yield addPatientLib.getOrdersLib().getClinicalInfoLib().fillDoctorInfo(clinicalInfo);
                    if (saveForm) {
                        yield addPatientLib.getOrdersLib().getClinicalInfoLib().save();
                    }
                    return clinicalInfo;
                }
            }
        });
    }
    addBaseDoctor(saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addDoctor(this.setBaseDoctorInfo(), saveForm);
        });
    }
}
exports.Doctor = Doctor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9kYXRhL2Jhc2VkYXRhL0RvY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0VBQWlFO0FBQ2pFLCtEQUE0RDtBQUM1RCx5RkFBc0Y7QUFDdEYsZ0ZBQTZFO0FBRTdFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0FBRTNGLE1BQWEsTUFBTTtJQUdmLFlBQVksY0FBNkI7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxpQkFBaUI7UUFDYixJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUN0QyxZQUFZLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztRQUVsRyxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUssU0FBUyxDQUFDLFlBQXlCLEVBQUUsUUFBZ0I7O1lBQ3ZELFFBQU8sSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsS0FBSywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMzQixJQUFJLGtCQUFrQixHQUFzQixJQUFJLHVDQUFrQixFQUFFLENBQUM7b0JBQ3JFLE1BQU0sa0JBQWtCLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUV0RCxJQUFHLFFBQVEsRUFBRTt3QkFDVCxNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNuQztvQkFDRCxPQUFPLFlBQVksQ0FBQztpQkFDdkI7Z0JBRUQsS0FBSywrQkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM1QixJQUFJLGFBQWEsR0FBaUIsSUFBSSw2QkFBYSxFQUFFLENBQUM7b0JBQ3RELE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUVyRixJQUFHLFFBQVEsRUFBRTt3QkFDVCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNsRTtvQkFDRCxPQUFPLFlBQVksQ0FBQztpQkFDdkI7YUFDSjtRQUNMLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxRQUFnQjs7WUFDaEMsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEUsQ0FBQztLQUFBO0NBQ0o7QUExQ0Qsd0JBMENDIn0=