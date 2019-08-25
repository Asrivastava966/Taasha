import { OrdersPO } from "../../po/reportspage/OrdersPO";

export class OrdersLib {
    private ordersPO:OrdersPO;

    constructor() {
        this.ordersPO = new OrdersPO();
    }

    getOrdersPO() {
        return this.ordersPO;
    }

    async searchViaPatientNameFilter(patientName:string) {
        await this.getOrdersPO().getFilterButton().click();
        await this.getOrdersPO().getPatientNameFilterInputField().sendKeys(patientName);
        await this.getOrdersPO().getSearchButton().click();
    }

    async searchViaPatientNameOrdersGridHeaderFilter(patientName:string) {
        await this.getOrdersPO().getOrdersGrid().searchViaPatientNameFilter(patientName);
    }

    async getPatientName(rowNumber:number) {
        return await this.getOrdersPO().getOrdersGrid().getPatientName(rowNumber);
    }

    async updatePatient(patientName:string) {
        await this.getOrdersPO().getOrdersGrid().updatePatient(patientName);
    }
}