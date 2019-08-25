"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BaseTable_1 = require("../../../component/base/BaseTable");
class DocumentsPO {
    getSuccessMessage() {
        return DocumentsPO.successMessage;
    }
    getBrowseFilesButton() {
        return DocumentsPO.browseFilesButton;
    }
    getSelectedFilesTable() {
        return new BaseTable_1.BaseTable(DocumentsPO.selectedFilesTable);
    }
    getSaveButton() {
        return DocumentsPO.saveButton;
    }
    getCancelButton() {
        return DocumentsPO.cancelButton;
    }
}
DocumentsPO.successMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"successMessage\"]'));
// private static browseFilesButton = element(by.css('input[type="file"]'));
DocumentsPO.browseFilesButton = protractor_1.element(protractor_1.by.css("div[ngf-change='onFileSelect($files)']"));
DocumentsPO.selectedFilesTable = protractor_1.element(protractor_1.by.tagName('table'));
DocumentsPO.saveButton = protractor_1.element(protractor_1.by.css('[ng-click=\"saveDocumentMetadata()\"]'));
DocumentsPO.cancelButton = protractor_1.element(protractor_1.by.css('[ng-click=\"cancel()\"]'));
exports.DocumentsPO = DocumentsPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL25vcm1hbGFkZHBhdGllbnRwYWdlL29yZGVyc3BhZ2UvRG9jdW1lbnRzUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsaUVBQThEO0FBRzlELE1BQWEsV0FBVztJQUlwQixpQkFBaUI7UUFDYixPQUFPLFdBQVcsQ0FBQyxjQUFjLENBQUM7SUFDdEMsQ0FBQztJQUtELG9CQUFvQjtRQUNoQixPQUFPLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDO0lBSUQscUJBQXFCO1FBQ2pCLE9BQU8sSUFBSSxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFLRCxhQUFhO1FBQ1QsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBQ3BDLENBQUM7O0FBNUJjLDBCQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztBQU05RSw0RUFBNEU7QUFDN0QsNkJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQTtBQU03RSw4QkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQU1sRCxzQkFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsd0JBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0FBdEI3RSxrQ0FrQ0MifQ==