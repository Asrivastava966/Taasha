import { AddPatientLib } from '../../lib/normaladdpatientpage/AddPatientLib';
import { QuickAddPatientLib } from '../../lib/quickaddpatientpage/QuickAddPatientLib';
import { AddPatientMode } from "../../data/enums/AddPatientMode";
import { CommonUtils } from '../../utils/CommonUtils';
import { InsuranceInfo } from '../../data/info/InsuranceInfo';
import { InsuranceType } from '../../data/enums/InsuranceType';
import { InsuranceInfoRelationship } from '../../data/enums/InsuranceInfoRelationship';

let propertiesReader = require('properties-reader');
let insuranceInfoProperties = propertiesReader('ra_automation/data/properties/InsuranceInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

export class Insurance{
    addPatientMode:AddPatientMode;
    insuranceType:InsuranceType;

    constructor(addPatientMode:AddPatientMode, insuranceType:InsuranceType) {
        this.addPatientMode = addPatientMode;
        this.insuranceType = insuranceType;
    }

    ////////// Base Insurance Info //////////
    startdate:Date = commonUtils.getDateFromString(insuranceInfoProperties.get('insuranceinfo.startdate'));

    private setBaseInsuranceInfo() {
        let insuranceInfo = new InsuranceInfo();
        
        insuranceInfo.setInsuranceType(this.insuranceType);
        insuranceInfo.setProvider(insuranceInfoProperties.get('insuranceinfo.provider'));
        insuranceInfo.setPolicyNumber(insuranceInfoProperties.get('insuranceinfo.policynumber'));
        insuranceInfo.setRelationship(InsuranceInfoRelationship.SELF);
        insuranceInfo.setStartDate(this.startdate);

        return insuranceInfo;
    }

    async addInsurance(insuranceInfo:InsuranceInfo, saveForm:boolean) {

        switch(this.addPatientMode) {
            case AddPatientMode.QUICK_ADD: {
                let quickAddPatientLib:QuickAddPatientLib = new QuickAddPatientLib(); 
                await quickAddPatientLib.fillInsuranceInfo(insuranceInfo);

                if(saveForm) {
                    await quickAddPatientLib.save();
                }
                break;
            }

            case AddPatientMode.NORMAL_ADD: {
                let addPatientLib:AddPatientLib = new AddPatientLib();
                await addPatientLib.getInsuranceInfoLib().navigateToAddInsuranceForm();
                await addPatientLib.getInsuranceInfoLib().addInsurance(insuranceInfo);
                
                if(saveForm) {
                    await addPatientLib.getInsuranceInfoLib().save();    
                }
                break;
            }
        }
    }

    async addBaseInsurance(saveForm:boolean) {
        return await this.addInsurance(this.setBaseInsuranceInfo(), saveForm);
    }

    async updateActiveInsurancePolicy(rowNumber:number, insuranceInfo:InsuranceInfo, saveForm:boolean) {
        let addPatientLib:AddPatientLib = new AddPatientLib();
        await addPatientLib.getInsuranceInfoLib().updateInsuranceFromActivePolicyTable(rowNumber);
        await addPatientLib.getInsuranceInfoLib().addInsurance(insuranceInfo);
        if(saveForm) {
            await addPatientLib.getInsuranceInfoLib().update();    
        }
    }

    async updateActiveInsurancePolicyWithBaseInsuranceInfo(rowNumber:number, saveForm:boolean) {
        await this.updateActiveInsurancePolicy(rowNumber, this.setBaseInsuranceInfo(), saveForm);
    }
}