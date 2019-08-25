import { AddPatientMode } from "../../data/enums/AddPatientMode";
import { ClinicalInfo } from "../../data/info/ClinicalInfo";
import { QuickAddPatientLib } from "../../lib/quickaddpatientpage/QuickAddPatientLib";
import { AddPatientLib } from '../../lib/normaladdpatientpage/AddPatientLib';

let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');

export class Doctor {
    addPatientMode:AddPatientMode;

    constructor(addPatientMode:AddPatientMode) { 
        this.addPatientMode = addPatientMode;
    }

    ////////// Base Doctor Info //////////
    setBaseDoctorInfo() {
        let clinicalInfo = new ClinicalInfo(); 
        clinicalInfo.setOrderingDoctorName(orderInfoProperties.get('orders.clinicalinfo.orderingdoctor'));

        return clinicalInfo;
    }

    async addDoctor(clinicalInfo:ClinicalInfo, saveForm:boolean) {
        switch(this.addPatientMode) {
            case AddPatientMode.QUICK_ADD: {
                let quickAddPatientLib:QuickAddPatientLib = new QuickAddPatientLib(); 
                await quickAddPatientLib.fillDoctorInfo(clinicalInfo);
                
                if(saveForm) {
                    await quickAddPatientLib.save();    
                }
                return clinicalInfo;
            }

            case AddPatientMode.NORMAL_ADD: {
                let addPatientLib:AddPatientLib = new AddPatientLib();
                await addPatientLib.getOrdersLib().getClinicalInfoLib().fillDoctorInfo(clinicalInfo);
                
                if(saveForm) {
                    await addPatientLib.getOrdersLib().getClinicalInfoLib().save();
                }
                return clinicalInfo;
            }
        }
    }

    async addBaseDoctor(saveForm:boolean) {
        return await this.addDoctor(this.setBaseDoctorInfo(), saveForm);
    }
}