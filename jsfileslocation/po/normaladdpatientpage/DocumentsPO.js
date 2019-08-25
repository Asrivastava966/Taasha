"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BaseTable_1 = require("../../component/base/BaseTable");
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
    getSaveBUtton() {
        return DocumentsPO.saveButton;
    }
    getCancelButton() {
        return DocumentsPO.cancelButton;
    }
}
DocumentsPO.successMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"successMessage\"]'));
DocumentsPO.browseFilesButton = protractor_1.element(protractor_1.by.css('input[type="file"]'));
DocumentsPO.selectedFilesTable = protractor_1.element(protractor_1.by.tagName('table'));
DocumentsPO.saveButton = protractor_1.element(protractor_1.by.css('[ng-click=\"saveDocumentMetadata()\"]'));
DocumentsPO.cancelButton = protractor_1.element(protractor_1.by.css('[ng-click=\"cancel()\"]'));
exports.DocumentsPO = DocumentsPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL25vcm1hbGFkZHBhdGllbnRwYWdlL0RvY3VtZW50c1BPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlDO0FBQ3pDLDhEQUEyRDtBQUUzRCxNQUFhLFdBQVc7SUFJcEIsaUJBQWlCO1FBQ2IsT0FBTyxXQUFXLENBQUMsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFJRCxvQkFBb0I7UUFDaEIsT0FBTyxXQUFXLENBQUMsaUJBQWlCLENBQUM7SUFDekMsQ0FBQztJQUlELHFCQUFxQjtRQUNqQixPQUFPLElBQUkscUJBQVMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBS0QsYUFBYTtRQUNULE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sV0FBVyxDQUFDLFlBQVksQ0FBQztJQUNwQyxDQUFDOztBQTNCYywwQkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7QUFNL0QsNkJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztBQU0xRCw4QkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQU1sRCxzQkFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsd0JBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0FBckI3RSxrQ0FpQ0MifQ==