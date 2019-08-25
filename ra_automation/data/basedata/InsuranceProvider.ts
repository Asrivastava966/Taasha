import { InsuranceProviderInfo } from "../info/InsuranceProviderInfo";
import { InsuranceProviderGroup } from "../enums/InsuranceProviderGroup";
import { Status } from "../enums/Status";
import { InsuranceProviderTaxType } from "../enums/InsuranceProviderTaxType";
import { InsuranceProviderManagementLib } from "../../lib/admindashboardpage/insuranceproviderbucket/InsuranceProviderManagementLib";
import { CommonUtils } from "../../utils/CommonUtils";

let propertiesReader = require('properties-reader');
let insuranceProviderInfoProperties = propertiesReader('ra_automation/data/properties/InsuranceProviderInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

export class InsuranceProvider {

    private getProviderNameWithTimeStamp() {
        let providerNameWithTimeStamp = insuranceProviderInfoProperties.get('insuranceproviderinfo.providername') + '-' + commonUtils.getTimeStamp();
        return providerNameWithTimeStamp;
    }

    private getNPIwithTimeStamp() {
        let npiWithTimeStamp = insuranceProviderInfoProperties.get('insuranceproviderinfo.npi') + '-' + commonUtils.getTimeStamp();
        return +npiWithTimeStamp;
    }

    private setBaseInsuranceProviderInfo() {
        let insuranceProviderInfo:InsuranceProviderInfo = new InsuranceProviderInfo();

        insuranceProviderInfo.setProviderName(this.getProviderNameWithTimeStamp());
        insuranceProviderInfo.setGroup(InsuranceProviderGroup.PRIVATE_PAY);
        insuranceProviderInfo.setStatus(Status.ACTIVE);
        insuranceProviderInfo.setLegacyId(insuranceProviderInfoProperties.get('insuranceproviderinfo.legacyid'));
        insuranceProviderInfo.setTaxType(InsuranceProviderTaxType.EXEMPT);
        insuranceProviderInfo.setNpi(this.getNPIwithTimeStamp());
        insuranceProviderInfo.setWebsite(insuranceProviderInfoProperties.get('insuranceproviderinfo.website'));
        insuranceProviderInfo.setMedicareFeeScheduleCheckbox(true);
        insuranceProviderInfo.setBranchOfficeSelectAllCheckbox(true);

        return insuranceProviderInfo;
    }

    async addInsuranceProvider(insuranceProviderInfo:InsuranceProviderInfo, saveForm:boolean) {
        let insuranceProviderManagementLib = new InsuranceProviderManagementLib();
        await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().fillInsuranceProviderManagementInfo(insuranceProviderInfo);
        
        if(saveForm) {
            await insuranceProviderManagementLib.getAddUpdateInsuranceProviderFormLib().submit();
        }
        return insuranceProviderInfo;
    }

    async addBaseInsuranceProvider(saveForm:boolean) {
        return await this.addInsuranceProvider(this.setBaseInsuranceProviderInfo(), saveForm);
    }
}