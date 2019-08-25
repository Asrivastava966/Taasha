import { ResuppliesContactInformationPO } from "../../../../po/homepage/resuppliesbucket/resuppliescontactinformationpage/ResuppliesContactInformationPO";
import { ContactPatientLib } from "./ContactPatientLib";
import { SuppliesLib } from "./SuppliesLib";
import { ProcessResultLib } from "./ProcessResultLib";
import { browser } from "protractor";

export class ResuppliesContactInformationLib {
    private resuppliesContactInformationPO:ResuppliesContactInformationPO;
    private contactPatientLib:ContactPatientLib;
    private suppliesLib:SuppliesLib;
    private processResultLib:ProcessResultLib;

    constructor() {
        this.resuppliesContactInformationPO = new ResuppliesContactInformationPO();
        this.contactPatientLib = new ContactPatientLib();
        this.suppliesLib = new SuppliesLib();
        this.processResultLib = new ProcessResultLib();
    }

    getResuppliesContactInformationPO() {
        return this.resuppliesContactInformationPO;
    }

    getContactPatientLib() {
        return this.contactPatientLib;
    }

    getSuppliesLib() {
        return this.suppliesLib;
    }

    getProcessResultLib() {
        return this.processResultLib;
    }

    async navigateBackToResupplyOrdersPage() {
        await this.getResuppliesContactInformationPO().getBackToResuppliesButton().click();
    }

    async getPatientName() {
        return await this.getResuppliesContactInformationPO().getPatientName().getText();
    }

    async getDOB() {
        return await this.getResuppliesContactInformationPO().getDOB().getText();
    }

    async getGender() {
        return await await this.getResuppliesContactInformationPO().getGender().getText();
    }
}