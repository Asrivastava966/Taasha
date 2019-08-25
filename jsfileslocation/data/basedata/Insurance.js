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
const AddPatientLib_1 = require("../../lib/normaladdpatientpage/AddPatientLib");
const QuickAddPatientLib_1 = require("../../lib/quickaddpatientpage/QuickAddPatientLib");
const AddPatientMode_1 = require("../../data/enums/AddPatientMode");
const CommonUtils_1 = require("../../utils/CommonUtils");
const InsuranceInfo_1 = require("../../data/info/InsuranceInfo");
const InsuranceInfoRelationship_1 = require("../../data/enums/InsuranceInfoRelationship");
let propertiesReader = require('properties-reader');
let insuranceInfoProperties = propertiesReader('ra_automation/data/properties/InsuranceInfo.file');
let commonUtils = new CommonUtils_1.CommonUtils();
class Insurance {
    constructor(addPatientMode, insuranceType) {
        ////////// Base Insurance Info //////////
        this.startdate = commonUtils.getDateFromString(insuranceInfoProperties.get('insuranceinfo.startdate'));
        this.addPatientMode = addPatientMode;
        this.insuranceType = insuranceType;
    }
    setBaseInsuranceInfo() {
        let insuranceInfo = new InsuranceInfo_1.InsuranceInfo();
        insuranceInfo.setInsuranceType(this.insuranceType);
        insuranceInfo.setProvider(insuranceInfoProperties.get('insuranceinfo.provider'));
        insuranceInfo.setPolicyNumber(insuranceInfoProperties.get('insuranceinfo.policynumber'));
        insuranceInfo.setRelationship(InsuranceInfoRelationship_1.InsuranceInfoRelationship.SELF);
        insuranceInfo.setStartDate(this.startdate);
        return insuranceInfo;
    }
    addInsurance(insuranceInfo, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.addPatientMode) {
                case AddPatientMode_1.AddPatientMode.QUICK_ADD: {
                    let quickAddPatientLib = new QuickAddPatientLib_1.QuickAddPatientLib();
                    yield quickAddPatientLib.fillInsuranceInfo(insuranceInfo);
                    if (saveForm) {
                        yield quickAddPatientLib.save();
                    }
                    break;
                }
                case AddPatientMode_1.AddPatientMode.NORMAL_ADD: {
                    let addPatientLib = new AddPatientLib_1.AddPatientLib();
                    yield addPatientLib.getInsuranceInfoLib().navigateToAddInsuranceForm();
                    yield addPatientLib.getInsuranceInfoLib().addInsurance(insuranceInfo);
                    if (saveForm) {
                        yield addPatientLib.getInsuranceInfoLib().save();
                    }
                    break;
                }
            }
        });
    }
    addBaseInsurance(saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addInsurance(this.setBaseInsuranceInfo(), saveForm);
        });
    }
    updateActiveInsurancePolicy(rowNumber, insuranceInfo, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            let addPatientLib = new AddPatientLib_1.AddPatientLib();
            yield addPatientLib.getInsuranceInfoLib().updateInsuranceFromActivePolicyTable(rowNumber);
            yield addPatientLib.getInsuranceInfoLib().addInsurance(insuranceInfo);
            if (saveForm) {
                yield addPatientLib.getInsuranceInfoLib().update();
            }
        });
    }
    updateActiveInsurancePolicyWithBaseInsuranceInfo(rowNumber, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateActiveInsurancePolicy(rowNumber, this.setBaseInsuranceInfo(), saveForm);
        });
    }
}
exports.Insurance = Insurance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9kYXRhL2Jhc2VkYXRhL0luc3VyYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0ZBQTZFO0FBQzdFLHlGQUFzRjtBQUN0RixvRUFBaUU7QUFDakUseURBQXNEO0FBQ3RELGlFQUE4RDtBQUU5RCwwRkFBdUY7QUFFdkYsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLHVCQUF1QixHQUFHLGdCQUFnQixDQUFDLGtEQUFrRCxDQUFDLENBQUM7QUFDbkcsSUFBSSxXQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFaEQsTUFBYSxTQUFTO0lBSWxCLFlBQVksY0FBNkIsRUFBRSxhQUEyQjtRQUt0RSx5Q0FBeUM7UUFDekMsY0FBUyxHQUFRLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBTG5HLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFLTyxvQkFBb0I7UUFDeEIsSUFBSSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFFeEMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxhQUFhLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDakYsYUFBYSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLGFBQWEsQ0FBQyxlQUFlLENBQUMscURBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0MsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQUVLLFlBQVksQ0FBQyxhQUEyQixFQUFFLFFBQWdCOztZQUU1RCxRQUFPLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLEtBQUssK0JBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxrQkFBa0IsR0FBc0IsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO29CQUNyRSxNQUFNLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUUxRCxJQUFHLFFBQVEsRUFBRTt3QkFDVCxNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNuQztvQkFDRCxNQUFNO2lCQUNUO2dCQUVELEtBQUssK0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxhQUFhLEdBQWlCLElBQUksNkJBQWEsRUFBRSxDQUFDO29CQUN0RCxNQUFNLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLDBCQUEwQixFQUFFLENBQUM7b0JBQ3ZFLE1BQU0sYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUV0RSxJQUFHLFFBQVEsRUFBRTt3QkFDVCxNQUFNLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNwRDtvQkFDRCxNQUFNO2lCQUNUO2FBQ0o7UUFDTCxDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxRQUFnQjs7WUFDbkMsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUUsQ0FBQztLQUFBO0lBRUssMkJBQTJCLENBQUMsU0FBZ0IsRUFBRSxhQUEyQixFQUFFLFFBQWdCOztZQUM3RixJQUFJLGFBQWEsR0FBaUIsSUFBSSw2QkFBYSxFQUFFLENBQUM7WUFDdEQsTUFBTSxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRixNQUFNLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RSxJQUFHLFFBQVEsRUFBRTtnQkFDVCxNQUFNLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3REO1FBQ0wsQ0FBQztLQUFBO0lBRUssZ0RBQWdELENBQUMsU0FBZ0IsRUFBRSxRQUFnQjs7WUFDckYsTUFBTSxJQUFJLENBQUMsMkJBQTJCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdGLENBQUM7S0FBQTtDQUNKO0FBbEVELDhCQWtFQyJ9