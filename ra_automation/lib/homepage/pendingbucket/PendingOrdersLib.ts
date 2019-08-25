import { PendingOrdersPO } from "../../../po/homepage/pendingbucket/PendingOrdersPO";

export class PendingOrdersLib {

    private pendingOrdersPO:PendingOrdersPO;

    constructor() {
        this.pendingOrdersPO = new PendingOrdersPO();
    }

    getPendingOrdersPO() {
        return this.pendingOrdersPO;
    }

    async searchViaPatientNameFilter(patientName:string) {
        await this.getPendingOrdersPO().getOrdersGrid().searchViaPatientNameFilter(patientName);
    }

    async getPatientName(rowNumber:number) {
        return await this.getPendingOrdersPO().getOrdersGrid().getPatientName(rowNumber);
    }

    async getOrderType(rowNumber:number) {
        return await this.getPendingOrdersPO().getOrdersGrid().getOrderType(rowNumber).getText();
    }
}