import { by, ElementFinder } from 'protractor';
import { ConfirmationModalYesNoDialog } from "./ConfirmationModalYesNoDialog";

export class ConfirmationModalYesNoCancelDialog extends ConfirmationModalYesNoDialog {

    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
    }

    async confirmCancel() {
        await this.getModalFooter().element(by.css('[ng-click=\"closeModalWindow(cancel)\"]')).click();
    }
}