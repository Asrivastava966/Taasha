"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const DocumentsPO_1 = require("../../../po/normaladdpatientpage/orderspage/DocumentsPO");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
class DocumentsLib {
    constructor() {
        this.firstRowIndex = 1;
        this.documentColumnIndex = 2;
        this.documentTypeColumnIndex = 3;
        this.noteColumnIndex = 4;
        this.actionColumnIndex = 5;
        this.documentsPO = new DocumentsPO_1.DocumentsPO();
    }
    getDocumentsPO() {
        return this.documentsPO;
    }
    uploadFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            //Need to unhide file uploader
            yield protractor_1.browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px'; arguments[0].style.opacity = 1", this.getDocumentsPO().getBrowseFilesButton());
            yield this.getDocumentsPO().getBrowseFilesButton().sendKeys(filePath);
        });
    }
    getUploadedDocumentName() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDocumentsPO().getSelectedFilesTable().getTableBodyRowCell(this.firstRowIndex, this.documentColumnIndex).element(protractor_1.by.tagName('label')).getText();
        });
    }
    selectUploadedDocumentsType(documentType) {
        return __awaiter(this, void 0, void 0, function* () {
            let selectDocumentTypeDropdown = new SelectDropdown_1.SelectDropdown(this.getDocumentsPO().getSelectedFilesTable().getTableBodyRowCell(this.firstRowIndex, this.documentTypeColumnIndex).element(protractor_1.by.tagName('select')));
            yield selectDocumentTypeDropdown.selectOption(documentType);
        });
    }
    fillUploadedDocumentsNotes(note) {
        return __awaiter(this, void 0, void 0, function* () {
            let notesInputField = this.getDocumentsPO().getSelectedFilesTable().getTableBodyRowCell(this.firstRowIndex, this.noteColumnIndex).element(protractor_1.by.tagName('input'));
            yield notesInputField.sendKeys(note);
        });
    }
    removeUploadedDocument() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDocumentsPO().getSelectedFilesTable().getTableBodyRowCell(this.firstRowIndex, this.actionColumnIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDocumentsPO().getSaveButton().click();
        });
    }
    getSaveButtonEnabledStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getDocumentsPO().getSaveButton().isEnabled();
        });
    }
    getSaveButtonDisplayedStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getDocumentsPO().getSaveButton().isDisplayed();
        });
    }
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDocumentsPO().getCancelButton().click();
        });
    }
    fillDocumentInfo(documentInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (documentInfo.getDocumentPath() != null) {
                yield this.uploadFile(documentInfo.getDocumentPath());
            }
            if (documentInfo.getDocumentType() != null) {
                yield this.selectUploadedDocumentsType(documentInfo.getDocumentType());
            }
            if (documentInfo.getNotes() != null) {
                yield this.fillUploadedDocumentsNotes(documentInfo.getNotes());
            }
        });
    }
    getSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getDocumentsPO().getSuccessMessage().getText();
        });
    }
}
exports.DocumentsLib = DocumentsLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvbm9ybWFsYWRkcGF0aWVudHBhZ2Uvb3JkZXJzcGFnZS9Eb2N1bWVudHNMaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUF5QztBQUN6Qyx5RkFBc0Y7QUFDdEYsMkVBQXdFO0FBSXhFLE1BQWEsWUFBWTtJQVFyQjtRQVBRLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4Qiw0QkFBdUIsR0FBRyxDQUFDLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBSTFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVLLFVBQVUsQ0FBQyxRQUFlOztZQUM1Qiw4QkFBOEI7WUFDOUIsTUFBTSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyxnSkFBZ0osRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1lBRTVOLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFFLENBQUM7S0FBQTtJQUVLLHVCQUF1Qjs7WUFDekIsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakssQ0FBQztLQUFBO0lBRUssMkJBQTJCLENBQUMsWUFBeUI7O1lBQ3ZELElBQUksMEJBQTBCLEdBQUcsSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZNLE1BQU0sMEJBQTBCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FBQTtJQUVLLDBCQUEwQixDQUFDLElBQVc7O1lBQ3hDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDL0osTUFBTSxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FBQTtJQUVLLHNCQUFzQjs7WUFDeEIsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekosQ0FBQztLQUFBO0lBRUssSUFBSTs7WUFDTixNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4RCxDQUFDO0tBQUE7SUFFSywwQkFBMEI7O1lBQzVCLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkUsQ0FBQztLQUFBO0lBRUssNEJBQTRCOztZQUM5QixPQUFPLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JFLENBQUM7S0FBQTtJQUVLLE1BQU07O1lBQ1IsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUQsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQUMsWUFBeUI7O1lBQzVDLElBQUcsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDdkMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2FBQ3pEO1lBRUQsSUFBRyxZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUN2QyxNQUFNLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQzthQUMxRTtZQUVELElBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDaEMsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDbEU7UUFDTCxDQUFDO0tBQUE7SUFFSyxpQkFBaUI7O1lBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRSxDQUFDO0tBQUE7Q0FDSjtBQTFFRCxvQ0EwRUMifQ==