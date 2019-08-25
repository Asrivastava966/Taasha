import { WaitUtils } from "../../../../utils/WaitUtils";
import { ProcessResultPO } from "../../../../po/homepage/resuppliesbucket/resuppliescontactinformationpage/ProcessResultPO";

export class ProcessResultLib {
    private waitUtils:WaitUtils;
    private processResultPO:ProcessResultPO;

    constructor() {
        this.waitUtils = new WaitUtils();
        this.processResultPO = new ProcessResultPO();
    }

    getWaitUtils() {
        return this.waitUtils;
    }

    getProcessResultPO() {
        return this.processResultPO;
    }

    async navigateToPreviousTab() {
        await this.getProcessResultPO().getPreviousButton().click();
    }

    async submitToVGM() {
        await this.getProcessResultPO().getSubmitToVGMButton().click();
    }

    async cancel() {
        await this.getProcessResultPO().getCancelButton().click();
    }

    async finish() {
        await this.getProcessResultPO().getFinishButton().click();
        await this.getWaitUtils().insertStaticWait(2000);
    }

    //Workflow Status modal-dialog
    async close() {
        await this.getProcessResultPO().getWorkflowStatusModalDialog().close();
    }

    async save() {
        await this.getProcessResultPO().getWorkflowStatusModalDialog().save();
    }
}