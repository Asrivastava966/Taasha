import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AdminDashboardLib } from "../../../../lib/admindashboardpage/AdminDashboardLib";
import { DoctorManagementLib } from "../../../../lib/admindashboardpage/doctorsbucket/DoctorManagementLib";
import { AdminDashboardBucket } from "../../../../data/enums/AdminDashboardBucket";
import { DoctorInfo } from "../../../../data/info/DoctorInfo";
import { CommonUtils } from "../../../../utils/CommonUtils";
import { DeliveredBy } from "../../../../data/enums/DeliveredBy";

let propertiesReader = require('properties-reader');
let doctorProperties = propertiesReader('ra_automation/data/properties/DoctorInfo.file');
let validationMessageProperties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
let commonUtils = new CommonUtils();

describe('[SPEC]: Add/Update Doctor: UI Validation tests', async () => {
    let loginLib:LoginLib;
    let homepageLib:HomepageLib;
    let adminDashboardLib:AdminDashboardLib;
    let doctorManagementLib:DoctorManagementLib;

    beforeEach(async () => {
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        adminDashboardLib = new AdminDashboardLib();
        doctorManagementLib = new DoctorManagementLib();
        
        await loginLib.doBaseLogin();
        await homepageLib.navigateToAdminDashboardPage()
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.DOCTORS);
    }),

    it('[TEST]: Add Doctor - Try to create duplicate doctor', async () => {
        await doctorManagementLib.navigateToAddNewDoctor()

        let firstname = doctorProperties.get('doctorinfo.firstname') + commonUtils.getTimeStamp()
        let lastname = doctorProperties.get('doctorinfo.lastname')
        let npi = Math.floor(Math.random() * 10000000000)

        let doctorInfo = new DoctorInfo
        doctorInfo.setFirstName(firstname)
        doctorInfo.setLastName(lastname)
        doctorInfo.setNpiNumber(npi)
        doctorInfo.setPhone(doctorProperties.get('doctorinfo.phone'))
        doctorInfo.setExt(doctorProperties.get('doctorinfo.ext'))
        doctorInfo.setDeliveredBy(DeliveredBy.DRIVER)
        
        await doctorManagementLib.getAddUpdateNewDoctorFormLib().fillDoctorInfo(doctorInfo)
        await doctorManagementLib.getAddUpdateNewDoctorFormLib().submit()

        await doctorManagementLib.getAddUpdateNewDoctorFormLib().navigateBackToDoctorManagementPage();
        await doctorManagementLib.navigateToAddNewDoctor();
        await doctorManagementLib.getAddUpdateNewDoctorFormLib().fillDoctorInfo(doctorInfo)
        await doctorManagementLib.getAddUpdateNewDoctorFormLib().submit()

       // let expectedValidationMessage ="Physician Name: "+lastname+", "+firstname+" NPI# "+npi +" "+validationMessageProperties.get('validation.admindashboard.doctors.duplicatedoctor')+", " +"Physician with NPI# " + npi +" " + validationMessageProperties.get('validation.admindashboard.doctors.duplicatedoctor');
        let expectedValidation="Physician with NPI# " + npi +" " + validationMessageProperties.get('validation.admindashboard.doctors.duplicatedoctor');
        await expect(expectedValidation).toBe(doctorManagementLib.getAddUpdateNewDoctorFormLib().getDuplicateDoctorValidationMessage()) 

    })
})