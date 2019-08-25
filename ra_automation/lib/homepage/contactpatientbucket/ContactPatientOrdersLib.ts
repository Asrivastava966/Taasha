import { ContactPatientOrdersPO } from "../../../po/homepage/contactpatientbucket/ContactPatientOrdersPO";

export class ContactPatientOrdersLib {
    private contactPatientOrdersPO:ContactPatientOrdersPO;

    constructor() {
        this.contactPatientOrdersPO = new ContactPatientOrdersPO();
    }

    getContactPatientOrdersPO() {
        return this.contactPatientOrdersPO;
    }

    async searchViaPatientNameFilter(patientName:string) {
        await this.getContactPatientOrdersPO().getOrdersGrid().searchViaPatientNameFilter(patientName);
    }

    async getPatientName(rowNumber:number) {
        return await this.getContactPatientOrdersPO().getOrdersGrid().getPatientName(rowNumber);
    }

    async getOrderType(rowNumber:number) {
        return await this.getContactPatientOrdersPO().getOrdersGrid().getOrderType(rowNumber).getText();
    }
}