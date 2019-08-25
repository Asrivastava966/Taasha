import * as using from 'jasmine-data-provider';
import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../data/enums/AddPatientMode";
import { PatientInfo } from "../../../../data/info/PatientInfo";
import { Gender } from '../../../../data/enums/Gender';
import { PatientStatus } from '../../../../data/enums/PatientStatus';
import { AddPatientLib } from '../../../../lib/normaladdpatientpage/AddPatientLib';
import { CommonUtils } from '../../../../utils/CommonUtils';

let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Add patient via Normal Add- \'Patient Info\' form: Workflow tests', function() {
    let loginLib: LoginLib;
    let homepageLib: HomepageLib;
    let addPatientLib: AddPatientLib;

    const patientInfoProvider = {
        'Gender: Female, Status: Active': {gender: Gender.FEMALE, status: PatientStatus.ACTIVE},
        'Gender: Male, Status: Inactive': {gender: Gender.MALE, status: PatientStatus.INACTIVE},
        'Gender: Female, Status: Deceased': {gender: Gender.FEMALE, status: PatientStatus.DECEASED},
        'Gender: Male, Status: Lost': {gender: Gender.MALE, status: PatientStatus.LOST},
    };

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        addPatientLib = new AddPatientLib();

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.NORMAL_ADD);
    })

    using(patientInfoProvider, function(data, description) {
        it('[TEST]: Add patient- Add Patient Info with only mandatory fields: ' + description, async function() {

            //Prepare data
            let patientInfo = new PatientInfo();
            let firstNameWithTimeStamp = patientInfoProperties.get('patientinfo.firstname') + commonUtils.getTimeStamp();
            let lastNameWithTimeStamp = patientInfoProperties.get('patientinfo.lastname') + commonUtils.getTimeStamp();
            let birthdate:Date = commonUtils.getDateFromString(patientInfoProperties.get('patientinfo.birthdate'));
            patientInfo.setFirstName(firstNameWithTimeStamp);
            patientInfo.setLastName(lastNameWithTimeStamp);
            patientInfo.setMI(patientInfoProperties.get('patientinfo.mi'));
            patientInfo.setBirthDate(birthdate);
            patientInfo.setGender(data.gender);
            patientInfo.setStatus(data.status);
            patientInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice'));
            patientInfo.setLegacyId(patientInfoProperties.get('patientinfo.legacyid')); 
            patientInfo.setCustom(patientInfoProperties.get('patientinfo.custom'));

            //Execute test 
            await addPatientLib.getPatientInfoLib().fillPatientInfo(patientInfo);
            await addPatientLib.getPatientInfoLib().save();

            //Assertions
            let expectedPatientName = lastNameWithTimeStamp + ', ' + firstNameWithTimeStamp;
            let expectedSuccessMessage = validationMessageProperties.get('success.addpatient.normaladd');

            expect(await addPatientLib.getPatientInfoLib().getSuccessMessage()).toEqual(expectedSuccessMessage);
            expect(await addPatientLib.getPatientNameOnHeader()).toEqual(expectedPatientName);
            expect(await addPatientLib.getPatientDOBOnHeader()).toEqual(birthdate);
        })
    })
})