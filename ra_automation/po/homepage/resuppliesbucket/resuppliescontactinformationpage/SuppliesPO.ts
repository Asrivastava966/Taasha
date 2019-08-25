import { element, by } from "protractor";
import { BaseTable } from "../../../../component/base/BaseTable";
import { ResuppliesProductModalDialog } from "../../../../component/comp/ResuppliesProductModalDialog";
import { ConfirmationModalYesNoDialog } from "../../../../component/comp/ConfirmationModalYesNoDialog";

export class SuppliesPO {
    private static suppliesTabPanel = element(by.id('supplies'));
    
    private static addNewProductButton = element(by.css('[ng-click=\"openProductModal(\'Add\')\"]'));
    getAddNewProductButton() {
        return SuppliesPO.addNewProductButton;
    }

    private static productModalDialog = element(by.className('modal-dialog'));
    getProductModalDialog() {
        return new ResuppliesProductModalDialog(SuppliesPO.productModalDialog);
    }

    private static productsTable = element(by.tagName('table'));
    getProductsTable() {
        return new BaseTable(SuppliesPO.productsTable);
    }

    private static confirmationModalDialog = element(by.className('modal-dialog'));
    getConfirmationModalDialog() {
        return new ConfirmationModalYesNoDialog(SuppliesPO.confirmationModalDialog);
    }

    private static commentsTextarea = element(by.model('respplyContactInfo1.payload.generalComment'));
    getCommentsTextarea() {
        return SuppliesPO.commentsTextarea;
    }

    private static previousButton = element(by.buttonText('Previous'));
    getPreviousButton() {
        return SuppliesPO.previousButton;
    }

    private static nextButton = SuppliesPO.suppliesTabPanel.element(by.buttonText('Next'));
    getNextButton() {
        return SuppliesPO.nextButton;
    }
}