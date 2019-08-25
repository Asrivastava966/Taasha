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
const DocumentsPO_1 = require("../../po/normaladdpatientpage/DocumentsPO");
const SelectDropdown_1 = require("../../component/comp/SelectDropdown");
class DocumentsLib {
    constructor() {
        this.firstRowIndex = 1;
        this.documentColumnIndex = 2;
        this.documentTypeColumnIndex = 3;
        this.orderColumnIndex = 4;
        this.noteColumnIndex = 5;
        this.actionColumnIndex = 6;
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
    selectUploadedDocumentsOrder(orderIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            let selectOrderDropdown = new SelectDropdown_1.SelectDropdown(this.getDocumentsPO().getSelectedFilesTable().getTableBodyRowCell(this.firstRowIndex, this.orderColumnIndex).element(protractor_1.by.tagName('select')));
            yield selectOrderDropdown.selectOptionByIndex(++orderIndex);
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
            yield this.getDocumentsPO().getSaveBUtton().click();
        });
    }
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDocumentsPO().getCancelButton().click();
        });
    }
    fillDocumentInfo(documentInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.uploadFile(documentInfo.getDocumentPath());
            yield this.selectUploadedDocumentsType(documentInfo.getDocumentType());
            yield this.fillUploadedDocumentsNotes(documentInfo.getNotes());
            if (documentInfo.getOrderIndex() != null) {
                yield this.selectUploadedDocumentsOrder(documentInfo.getOrderIndex());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvbm9ybWFsYWRkcGF0aWVudHBhZ2UvRG9jdW1lbnRzTGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMsMkVBQXdFO0FBQ3hFLHdFQUFxRTtBQUlyRSxNQUFhLFlBQVk7SUFTckI7UUFSUSxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEIsNEJBQXVCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFJMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUssVUFBVSxDQUFDLFFBQWU7O1lBQzVCLDhCQUE4QjtZQUM5QixNQUFNLG9CQUFPLENBQUMsYUFBYSxDQUFDLGdKQUFnSixFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7WUFFNU4sTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUUsQ0FBQztLQUFBO0lBRUssdUJBQXVCOztZQUN6QixNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVB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