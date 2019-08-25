import * as using from 'jasmine-data-provider';
import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { PatientInfo } from "../../../../data/info/PatientInfo";
import { AddPatientMode } from "../../../../data/enums/AddPatientMode";
import { QuickAddPatientLib } from "../../../../lib/quickaddpatientpage/QuickAddPatientLib";
import { Gender } from '../../../../data/enums/Gender';
import { PatientStatus } from '../../../../data/enums/PatientStatus';
import { CommonUtils } from '../../../../utils/CommonUtils';

let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Add patient info via Quick Add form: Workflow tests', function() {
    let loginLib: LoginLib;
    let homepageLib: HomepageLib;
    let quickAddPatientLib: QuickAddPatientLib;
    const patientInfoProvider = {
        'Gender: Female, Status: Active': {gender: Gender.FEMALE, status: PatientStatus.ACTIVE},
        'Gender: Male, Status: Inactive': {gender: Gender.MALE, status: PatientStatus.INACTIVE},
        'Gender: Female, Status: Deceased': {gender: Gender.FEMALE, status: PatientStatus.DECEASED},
        'Gender: Male, Status: Lost': {gender: Gender.MALE, status: PatientStatus.LOST},
    };

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        quickAddPatientLib = new QuickAddPatientLib();

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
    });

    using(patientInfoProvider, function(data, description) {
        it('[TEST]: Perform Quick Add with only mandatory fields- Patient Info'+ description, async function() {
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
    
            await quickAddPatientLib.fillPatientInfo(patientInfo);
            await quickAddPatientLib.save();
    
            let expectedPatientName:string = patientInfo.getLastName() + ", " + patientInfo.getFirstName();
            let firstRowIndex = 1;
            await homepageLib.getMyTasksGrid().searchViaPatientNameFilter(patientInfo.getFirstName());
            
            expect(await homepageLib.getMyTasksGrid().getPatientName(firstRowIndex)).toEqual(expectedPatientName);
        });
    });
});