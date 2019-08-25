import { element, by } from "protractor";
import { BaseTable } from "../../../../component/base/BaseTable";
import { WorkflowStatusModalDialog } from "../../../../component/comp/WorkflowStatusModalDialog";

export class ProcessResultPO {
    private static processResultTabPanel = element(by.id('processResult'));

    private static productsTable = element(by.tagName('table'));
    getProductsTable() {
        return new BaseTable(ProcessResultPO.productsTable);
    }

    private static previousButton = ProcessResultPO.processResultTabPanel.element(by.buttonText('Previous'));
    private static submitToVGMButton = ProcessResultPO.processResultTabPanel.element(by.buttonText('Submit to VGM'));
    private static cancelButton = ProcessResultPO.processResultTabPanel.element(by.buttonText('Cancel'));
    private static finishButton = ProcessResultPO.processResultTabPanel.element(by.buttonText('Finish'));

    getPreviousButton() {
        return ProcessResultPO.previousButton;
    }

    getSubmitToVGMButton() {
        return ProcessResultPO.submitToVGMButton;
    }

    getCancelButton() {
        return ProcessResultPO.cancelButton;
    }

    getFinishButton() {
        return ProcessResultPO.finishButton;
    }

    private static workflowStatusModalDialog = element(by.className('modal-dialog'));
    getWorkflowStatusModalDialog() {
        return new WorkflowStatusModalDialog(ProcessResultPO.workflowStatusModalDialog);
    }
}