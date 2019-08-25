import { by, element } from 'protractor';
import { BaseTable } from '../../component/base/BaseTable';

export class DocumentsPO {

    private static successMessage = element(by.css('[ng-if=\"successMessage\"]'));

    getSuccessMessage() {
        return DocumentsPO.successMessage;
    }

    private static browseFilesButton = element(by.css('input[type="file"]'));

    getBrowseFilesButton() {
        return DocumentsPO.browseFilesButton;
    }

    private static selectedFilesTable = element(by.tagName('table'));

    getSelectedFilesTable() {
        return new BaseTable(DocumentsPO.selectedFilesTable);
    }

    private static saveButton = element(by.css('[ng-click=\"saveDocumentMetadata()\"]'));
    private static cancelButton = element(by.css('[ng-click=\"cancel()\"]'));

    getSaveBUtton() {
        return DocumentsPO.saveButton;
    }

    getCancelButton() {
        return DocumentsPO.cancelButton;
    }

    //Existing Documents Grid :: To Do
    
}