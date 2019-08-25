"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BaseTable_1 = require("../../../../component/base/BaseTable");
const WorkflowStatusModalDialog_1 = require("../../../../component/comp/WorkflowStatusModalDialog");
class ProcessResultPO {
    getProductsTable() {
        return new BaseTable_1.BaseTable(ProcessResultPO.productsTable);
    }
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
    getWorkflowStatusModalDialog() {
        return new WorkflowStatusModalDialog_1.WorkflowStatusModalDialog(ProcessResultPO.workflowStatusModalDialog);
    }
}
ProcessResultPO.processResultTabPanel = protractor_1.element(protractor_1.by.id('processResult'));
ProcessResultPO.productsTable = protractor_1.element(protractor_1.by.tagName('table'));
ProcessResultPO.previousButton = ProcessResultPO.processResultTabPanel.element(protractor_1.by.buttonText('Previous'));
ProcessResultPO.submitToVGMButton = ProcessResultPO.processResultTabPanel.element(protractor_1.by.buttonText('Submit to VGM'));
ProcessResultPO.cancelButton = ProcessResultPO.processResultTabPanel.element(protractor_1.by.buttonText('Cancel'));
ProcessResultPO.finishButton = ProcessResultPO.processResultTabPanel.element(protractor_1.by.buttonText('Finish'));
ProcessResultPO.workflowStatusModalDialog = protractor_1.element(protractor_1.by.className('modal-dialog'));
exports.ProcessResultPO = ProcessResultPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc1Jlc3VsdFBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ob21lcGFnZS9yZXN1cHBsaWVzYnVja2V0L3Jlc3VwcGxpZXNjb250YWN0aW5mb3JtYXRpb25wYWdlL1Byb2Nlc3NSZXN1bHRQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QyxvRUFBaUU7QUFDakUsb0dBQWlHO0FBRWpHLE1BQWEsZUFBZTtJQUl4QixnQkFBZ0I7UUFDWixPQUFPLElBQUkscUJBQVMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQU9ELGlCQUFpQjtRQUNiLE9BQU8sZUFBZSxDQUFDLGNBQWMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLE9BQU8sZUFBZSxDQUFDLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxlQUFlLENBQUMsWUFBWSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxlQUFlLENBQUMsWUFBWSxDQUFDO0lBQ3hDLENBQUM7SUFHRCw0QkFBNEI7UUFDeEIsT0FBTyxJQUFJLHFEQUF5QixDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7O0FBL0JjLHFDQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBRXhELDZCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFLN0MsOEJBQWMsR0FBRyxlQUFlLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUMxRixpQ0FBaUIsR0FBRyxlQUFlLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUNsRyw0QkFBWSxHQUFHLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLDRCQUFZLEdBQUcsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFrQnRGLHlDQUF5QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBN0JyRiwwQ0FpQ0MifQ==