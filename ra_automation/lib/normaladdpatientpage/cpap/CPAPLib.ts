import { CPAPPO } from "../../../po/normaladdpatientpage/cpap/CPAPPO";
import { ComplianceLib } from "./ComplianceLib";
import { ResuppliesLib } from "./ResuppliesLib";

export class CPAPLib{
    cpapPO:CPAPPO;
    complianceLib:ComplianceLib;
    resuppliesLib:ResuppliesLib;

    constructor() {
        this.cpapPO = new CPAPPO();
        this.complianceLib = new ComplianceLib();
        this.resuppliesLib = new ResuppliesLib();
    }

    getCPAPPO() {
        return this.cpapPO;
    }

    getComplianceLib() {
        return this.complianceLib;
    }

    getResuppliesLib() {
        return this.resuppliesLib;
    }

    async navigateToResuppliesTab() {
        await this.getCPAPPO().getResuppliesTabButton().click();
    }

    async navigateToComplianceTab() {
        await this.getCPAPPO().getComplianceTabButton().click();
    }
}