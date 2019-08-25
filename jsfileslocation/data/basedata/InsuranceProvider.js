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
const InsuranceProviderInfo_1 = require("../info/InsuranceProviderInfo");
const InsuranceProviderGroup_1 = require("../enums/InsuranceProviderGroup");
const Status_1 = require("../enums/Status");
const InsuranceProviderTaxType_1 = require("../enums/InsuranceProviderTaxType");
const InsuranceProviderManagementLib_1 = require("../../lib/admindashboardpage/insuranceproviderbucket/InsuranceProviderManagementLib");
const CommonUtils_1 = require("../../utils/CommonUtils");
let propertiesReader = require('properties-reader');
let insuranceProviderInfoProperties = propertiesReader('ra_automation/data/properties/InsuranceProviderInfo.file');
let commonUtils = new CommonUtils_1.CommonUtils();
class InsuranceProvider {
    getProviderNameWithTimeStamp() {
        let providerNameWithTimeStamp = insuranceProviderInfoProperties.get('insuranceproviderinfo.providername') + '-' + commonUtils.getTimeStamp();
        return providerNameWithTimeStamp;
    }
    getNPIwithTimeStamp() {
        let npiWithTimeStamp = insuranceProviderInfoProperties.get('insuranceproviderinfo.npi') + '-' + commonUtils.getTimeStamp();
        return +npiWithTimeStamp;
    }
    setBaseInsuranceProviderInfo() {
        let insuranceProviderInfo = new InsuranceProviderInfo_1.InsuranceProviderInfo();
        insuranceProviderInfo.setProviderName(this.getProviderNameWithTimeStamp());
        insuranceProviderInfo.setGroup(InsuranceProviderGroup_1.InsuranceProviderGroup.PRIVATE_PAY);
        insuranceProviderInfo.setStatus(Status_1.Status.ACTIVE);
        insuranceProviderInfo.setLegacyId(insuranceProviderInfoProperties.get('insuranceproviderinfo.legacyid'));
        insuranceProviderInfo.setTaxType(InsuranceProviderTaxType_1.InsuranceProviderTaxType.EXEMPT);
        insuranceProviderInfo.setNpi(this.getNPIwithTimeStamp());
        insuranceProviderInfo.setWebsite(insuranceProviderInfoProperties.get('insuranceproviderinfo.website'));
        insuranceProviderInfo.setMedicareFeeScheduleCheckbox(true);
        insuranceProviderInfo.setBranchOfficeSelectAllCheckbox(true);
        return insuranceProviderInfo;
    }
    addInsuranceProvider(insuranceProviderInfo, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            let insuranceProviderManagementLib = new InsuranceProviderManagementLib_1.InsuranceProviderManagementLib();
            yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().fillInsuranceProviderManagementInfo(insuranceProviderInfo);
            if (saveForm) {
                yield insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().submit();
            }
            return insuranceProviderInfo;
        });
    }
    addBaseInsuranceProvider(saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addInsuranceProvider(this.setBaseInsuranceProviderInfo(), saveForm);
        });
    }
}
exports.InsuranceProvider = InsuranceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2RhdGEvYmFzZWRhdGEvSW5zdXJhbmNlUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlFQUFzRTtBQUN0RSw0RUFBeUU7QUFDekUsNENBQXlDO0FBQ3pDLGdGQUE2RTtBQUM3RSx3SUFBcUk7QUFDckkseURBQXNEO0FBRXRELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSwrQkFBK0IsR0FBRyxnQkFBZ0IsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0FBQ25ILElBQUksV0FBVyxHQUFlLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRWhELE1BQWEsaUJBQWlCO0lBRWxCLDRCQUE0QjtRQUNoQyxJQUFJLHlCQUF5QixHQUFHLCtCQUErQixDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0ksT0FBTyx5QkFBeUIsQ0FBQztJQUNyQyxDQUFDO0lBRU8sbUJBQW1CO1FBQ3ZCLElBQUksZ0JBQWdCLEdBQUcsK0JBQStCLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzSCxPQUFPLENBQUMsZ0JBQWdCLENBQUM7SUFDN0IsQ0FBQztJQUVPLDRCQUE0QjtRQUNoQyxJQUFJLHFCQUFxQixHQUF5QixJQUFJLDZDQUFxQixFQUFFLENBQUM7UUFFOUUscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7UUFDM0UscUJBQXFCLENBQUMsUUFBUSxDQUFDLCtDQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25FLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MscUJBQXFCLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDekcscUJBQXFCLENBQUMsVUFBVSxDQUFDLG1EQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELHFCQUFxQixDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLHFCQUFxQixDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELHFCQUFxQixDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdELE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQztJQUVLLG9CQUFvQixDQUFDLHFCQUEyQyxFQUFFLFFBQWdCOztZQUNwRixJQUFJLDhCQUE4QixHQUFHLElBQUksK0RBQThCLEVBQUUsQ0FBQztZQUMxRSxNQUFNLDhCQUE4QixDQUFDLG9DQUFvQyxFQUFFLENBQUMsbUNBQW1DLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUV2SSxJQUFHLFFBQVEsRUFBRTtnQkFDVCxNQUFNLDhCQUE4QixDQUFDLG9DQUFvQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDeEY7WUFDRCxPQUFPLHFCQUFxQixDQUFDO1FBQ2pDLENBQUM7S0FBQTtJQUVLLHdCQUF3QixDQUFDLFFBQWdCOztZQUMzQyxPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFGLENBQUM7S0FBQTtDQUNKO0FBekNELDhDQXlDQyJ9