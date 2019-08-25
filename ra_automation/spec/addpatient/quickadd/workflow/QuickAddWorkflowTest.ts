import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../data/enums/AddPatientMode";
import { Patient } from '../../../../data/basedata/Patient';
import { Insurance } from '../../../../data/basedata/Insurance';
import { Order } from '../../../../data/basedata/Order';
import { Doctor } from '../../../../data/basedata/Doctor';
import { OrderType } from "../../../../data/enums/OrderType";
import { InsuranceType } from "../../../../data/enums/InsuranceType";
import { PatientInfo } from "../../../../data/info/PatientInfo";
import { Gender } from "../../../../data/enums/Gender";
import { PatientStatus } from "../../../../data/enums/PatientStatus";
import { CommonUtils } from "../../../../utils/CommonUtils";
import { QuickAddPatientLib } from "../../../../lib/quickaddpatientpage/QuickAddPatientLib";

let propertiesReader = require('properties-reader');
let patientInfoProperties = propertiesReader('ra_automation/data/properties/PatientInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

describe('[SPEC]: Add patient info, insurance info, order info and doctor info via Quick Add form: Workflow tests', function() {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let quickAddPatientLib:QuickAddPatientLib;
    let patient:Patient;
    let insurance:Insurance;
    let order:Order;
    let doctor:Doctor;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        quickAddPatientLib = new QuickAddPatientLib();
        patient = new Patient(AddPatientMode.QUICK_ADD);
        insurance = new Insurance(AddPatientMode.QUICK_ADD, InsuranceType.PRIMARY);
        order = new Order(AddPatientMode.QUICK_ADD, OrderType.AUTO_CPAP);
        doctor = new Doctor(AddPatientMode.QUICK_ADD);

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
    })

    it('[TEST]: Perform Quick Add - Patient Info, Insurance Info, Order Info & Doctor Info', async function() {
        let patientInfo = await patient.addBasePatient(false);
        await insurance.addBaseInsurance(false);
        await order.addBaseOrder(false);
        await doctor.addBaseDoctor(true);
        
        let expectedPatientName:string = patientInfo.getLastName() + ", " + patientInfo.getFirstName();
        let firstRowIndex = 1;
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilter(patientInfo.getFirstName());
        
        expect(await homepageLib.getMyTasksGrid().getPatientName(firstRowIndex)).toEqual(expectedPatientName);
    })

    it('[TEST]: Perform Quick Add - with existing patient found warning', async function() {
        let patient = new Patient(AddPatientMode.QUICK_ADD);;
        let existingPatientInfo = await patient.addBasePatient(true);

        let newPatientInfo = new PatientInfo();
        let lastName = 'TEST_Automation_lName_' + commonUtils.getTimeStamp();
        newPatientInfo.setFirstName(existingPatientInfo.getFirstName());
        newPatientInfo.setLastName(lastName);
        newPatientInfo.setBirthDate(existingPatientInfo.getBirthDate());
        newPatientInfo.setGender(Gender.FEMALE);
        newPatientInfo.setStatus(PatientStatus.ACTIVE);
        newPatientInfo.setBranchOffice(patientInfoProperties.get('patientinfo.branchoffice'));

        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
        await patient.addPatient(newPatientInfo, false);

        let firstRowIndex = 1;
        expect(await quickAddPatientLib.getPatientName(firstRowIndex)).toContain(existingPatientInfo.getFirstName());

        await quickAddPatientLib.toggleExistingPatientFoundWarning();
        await quickAddPatientLib.save();
        
        let expectedPatientName:string = newPatientInfo.getLastName() + ", " + newPatientInfo.getFirstName();
        await homepageLib.getMyTasksGrid().searchViaPatientNameFilter(lastName);
        
        expect(await homepageLib.getMyTasksGrid().getPatientName(firstRowIndex)).toEqual(expectedPatientName);
    })
})