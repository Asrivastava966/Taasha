import { FeeSchedulesPO } from "../feeschedulebucket/FeeSchedulesPO"
import { FeeScheduleDetailsPO } from "../feeschedulebucket/FeeScheduleDetailsPO"
import { element, by } from "protractor";

export class FeeScheduleManagementPO {
    private feeScheduleDetails: FeeScheduleDetailsPO
    private feeSchedules: FeeSchedulesPO

    constructor() {
        this.feeScheduleDetails = new FeeScheduleDetailsPO()
        this.feeSchedules = new FeeSchedulesPO()
    }

    getFeeSchedulesPO() {
        return this.feeSchedules
    }

    getFeeScheduleDetailsPO() {
        return this.feeScheduleDetails
    }

    // Fee Schedule Tabs
    private static feeScheduleDetailsTab = element.all(by.css('[ng-click="select($event)"]')).last()
    private static feeScheduleTab = element.all(by.css('[ng-click="select($event)"]')).first()

    getFeeSchedulesTab() {
        return FeeScheduleManagementPO.feeScheduleTab
    }

    getFeeScheduleDetailsTab() {
        return FeeScheduleManagementPO.feeScheduleDetailsTab
    }

}