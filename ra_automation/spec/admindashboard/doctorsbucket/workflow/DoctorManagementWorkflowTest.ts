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

describe('[SPEC]: Add/Update Doctor: Workflow tests', async () => {
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

    it('[TEST]: Add Doctor - Fill Doctor Info for mandatory fields only', async () => {
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

        let expectedSuccessMessage = validationMessageProperties.get('success.admindashboard.adddoctor');
        expect(await doctorManagementLib.getAddUpdateNewDoctorFormLib().getSuccessMessageText()).toBe(expectedSuccessMessage)
    })

    it('[TEST]: Verify NPI Registry Search', async () => {
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
        
        await doctorManagementLib.getAddUpdateNewDoctorFormLib().navigateBackToDoctorManagementPage()
        await doctorManagementLib.navigateToNPIRegistrySearch()
        
        await doctorManagementLib.getNPIRegistrySearchLib().searchUsingFirstNameFilter(firstname)
        await doctorManagementLib.getNPIRegistrySearchLib().searchUsingLastNameFilter(lastname)
        await doctorManagementLib.getNPIRegistrySearchLib().searchUsingNPINumberFilter(npi)
        await doctorManagementLib.getNPIRegistrySearchLib().search()

        expect(await doctorManagementLib.getNPIRegistrySearchLib().getTotalPatientsCount()).toBe(1)
    })

    it('[TEST]: Update Doctor - ', async () => {
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

        await doctorManagementLib.getAddUpdateNewDoctorFormLib().navigateBackToDoctorManagementPage()
        
        await doctorManagementLib.updateDoctor(firstname, lastname, npi);
        let updateDoctorInfo = new DoctorInfo();
        updateDoctorInfo.setAddress1(doctorProperties.get('doctorinfo.addressone'));
        updateDoctorInfo.setAddress2(doctorProperties.get('doctorinfo.addresstwo'));
        await doctorManagementLib.getAddUpdateNewDoctorFormLib().fillDoctorInfo(updateDoctorInfo)
        await doctorManagementLib.getAddUpdateNewDoctorFormLib().submit()

        let expectedSuccessMessage = validationMessageProperties.get('success.admindashboard.updatedoctor');
        expect(await doctorManagementLib.getAddUpdateNewDoctorFormLib().getSuccessMessageText()).toBe(expectedSuccessMessage)
    })
})