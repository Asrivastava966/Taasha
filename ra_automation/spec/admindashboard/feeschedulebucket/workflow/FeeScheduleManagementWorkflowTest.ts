import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AdminDashboardLib } from "../../../../lib/admindashboardpage/AdminDashboardLib";
import { AdminDashboardBucket } from "../../../../data/enums/AdminDashboardBucket";
import { FeeScheduleManagementLib } from "../../../../lib/admindashboardpage/feeschedulebucket/FeeScheduleManagementLib"
import { FeeScheduleInfo } from "../../../../data/info/FeeScheduleInfo"
import { FeeSchedulesLib } from "../../../../lib/admindashboardpage/feeschedulebucket/FeeSchedulesLib";
import { FeeScheduleDetailsLib } from "../../../../lib/admindashboardpage/feeschedulebucket/FeeScheduleDetailsLib";
import { FeeScheduleDetailsInfo } from "../../../../data/info/FeeScheduleDetailsInfo";
import { CommonUtils } from "../../../../utils/CommonUtils";
import { HCPCS_Code } from "../../../../data/enums/HCPCS_Code";
import { FeeSchedulePriceType } from "../../../../data/enums/FeeSchedulePriceType";

let propertiesReader = require('properties-reader');
let feeSchedulesProperties = propertiesReader('ra_automation/data/properties/FeeSchedulesInfo.file')

let description = feeSchedulesProperties.get('feeSchedules.Description') + "" + Math.floor(Math.random() * 1000)
let type = feeSchedulesProperties.get('feeSchedules.Type')

let feeScheduleInfo = new FeeScheduleInfo
feeScheduleInfo.setDescription(description)
feeScheduleInfo.setType(type)

let feeScheduleDetailsPropewrties = propertiesReader('ra_automation/data/properties/FeeScheduleDetailsInfo.file')
let feeScheduleDetailsInfo = new FeeScheduleDetailsInfo
let commonUtils: CommonUtils = new CommonUtils();

describe('[SPEC]: Admin Dashboard > Fee Schedules : Workflow tests', async function() {
    let loginLib = new LoginLib();
    let homepageLib = new HomepageLib();
    let adminDashboardLib = new AdminDashboardLib();
    let feeSchedules = new FeeSchedulesLib()
    let feeScheduleManagement = new FeeScheduleManagementLib();
    let feeScheduleDetails = new FeeScheduleDetailsLib();

    beforeEach(async () => {
        await loginLib.doBaseLogin();
        await homepageLib.navigateToAdminDashboardPage();
        await adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket.FEE_SCHEDULE);

    });

    it('[Fee Schedules]: Add new Fee Schedule', async () => {
        let comments = feeSchedulesProperties.get('feeSchedules.Comments') + " " + description
        feeScheduleInfo.setComment(comments)
        await feeSchedules.navigateToAddNewFeeSchedulesForm()
        await feeSchedules.feeSchedule_AddNewFeeScheduleInfo(feeScheduleInfo)
        await feeSchedules.submit()
        await expect(await feeSchedules.addNewFeeschedulesValidateSuccessMessageText()).toBe(description + " " + '')
    });

    it('[Fee Schedules Test]:filter the feeSchedule result', async () => {
        await feeSchedules.filterFeeSchedules(feeScheduleInfo)
        await feeSchedules.search()
        await feeSchedules.clickOnActionGrid(description)

    });

    it('[Fee Schedules Details]: Add new Fee Schedule Details', async () => {
        await feeScheduleManagement.navigateToFeeSchedulesDetailsTab()
        await feeScheduleDetails.navigateAddNewFeeScheduleDetailsForm()
        feeScheduleDetailsInfo.setFeeSchedule(description)
        feeScheduleDetailsInfo.setHCPCS_Code(HCPCS_Code.A7034)
        feeScheduleDetailsInfo.setPriceType(FeeSchedulePriceType.Purchase)
        let beginDate: Date = commonUtils.getDateFromString(feeScheduleDetailsPropewrties.get('feeScheduleDetail.BeginDate'))
        feeScheduleDetailsInfo.setBegindate(beginDate)
        
        await feeScheduleDetails.addFeeScheduleDetailsGernalInfo(feeScheduleDetailsInfo)
        await expect(await feeScheduleDetails.successMessagePresent()).toBe(true)
        await expect(await feeScheduleDetails.successMessageText()).toBe('')
    })
})