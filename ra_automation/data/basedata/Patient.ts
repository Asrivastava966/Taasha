import { PatientInfo } from "../../data/info/PatientInfo";
import { AddPatientMode } from "../../data/enums/AddPatientMode";
import { Gender } from '../../data/enums/Gender';
import { PatientStatus } from '../../data/enums/PatientStatus';
import { AddPatientLib } from '../../lib/normaladdpatientpage/AddPatientLib';
import { CommonUtils } from '../../utils/CommonUtils';
import { QuickAddPatientLib } from "../../lib/quickaddpatientpage/QuickAddPatientLib";

let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

export class Patient{
    addPatientMode:AddPatientMode;

    constructor(addPatientMode:AddPatientMode) { 
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
        
    birthdate:Date = commonUtils.getDateFromString(patientInfoProperties.get('patientinfo.birthdate'));
    
    private setBasePatientInfo() {
        let patientInfo = new PatientInfo();
        
        patientInfo.setFirstName(this.getFirstNameWithTimeStamp());
        patientInfo.setLastName(this.getLastNameWithTimeStamp());
        patientInfo.setBirthDate(this.birthdate);
        patientInfo.setGender(Gender.FEMALE);
        patientInfo.setStatus(PatientStatus.ACTIVE);
        patientInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice')); 
        patientInfo.setEmail(this.getEmailWithTimeStamp());

        return patientInfo;
    }

    /**
     * 
     * @param patientInfo 
     * @param saveForm Check the flag true if form needs to be saved after filling it
     */
    async addPatient(patientInfo:PatientInfo, saveForm:boolean) {
        
        switch(this.addPatientMode) {
            case AddPatientMode.QUICK_ADD: {
                let quickAddPatientLib:QuickAddPatientLib = new QuickAddPatientLib(); 
                await quickAddPatientLib.fillPatientInfo(patientInfo);
                
                if(saveForm) {
                    await quickAddPatientLib.save();    
                }
                return patientInfo;
            }

            case AddPatientMode.NORMAL_ADD: {
                let addPatientLib:AddPatientLib = new AddPatientLib();
                await addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
                
                if(saveForm) {
                    await addPatientLib.getPatientInfoLib().save();
                }
                return patientInfo;
            }
        }
    }

    async addBasePatient(saveForm:boolean) {
        return await this.addPatient(this.setBasePatientInfo(), saveForm);
    }
}