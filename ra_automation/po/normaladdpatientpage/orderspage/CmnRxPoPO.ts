import { element, by } from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";
import { ABNFormModalDialog } from "../../../component/comp/ABNFormModalDialog";

export class CmnRxPoPO {
    private static cmnFormDropdown = element(by.id('inputCmnForm'));
    private static newCMNButton = element(by.css('[ng-click=\"addNewInitialCMN()\"]'));
    private static abnButton = element(by.css('[ng-click=\"createAbnForm()\"]'));
    private static abnFormDialog = element(by.className('modal-dialog'));

    getCMNFormDropdown() {
        return new SelectDropdown(CmnRxPoPO.cmnFormDropdown);
    }

    getNewCMNButton() {
        return CmnRxPoPO.newCMNButton;
    }

    getABNButton() {
        return CmnRxPoPO.abnButton;
    }

    getABNFormDialog() {
        return new ABNFormModalDialog(CmnRxPoPO.abnFormDialog);
    }
}