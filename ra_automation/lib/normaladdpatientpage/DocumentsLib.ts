import { by, browser } from 'protractor';
import { DocumentsPO } from "../../po/normaladdpatientpage/DocumentsPO";
import { SelectDropdown } from '../../component/comp/SelectDropdown';
import { DocumentType } from '../../data/enums/DocumentType';
import { DocumentInfo } from '../../data/info/DocumentInfo';

export class DocumentsLib{
    private firstRowIndex = 1;
    private documentColumnIndex = 2;
    private documentTypeColumnIndex = 3; 
    private orderColumnIndex = 4; 
    private noteColumnIndex = 5; 
    private actionColumnIndex = 6; 
    private documentsPO:DocumentsPO;

    constructor(){
        this.documentsPO = new DocumentsPO();
    }

    getDocumentsPO() {
        return this.documentsPO;
    }

    async uploadFile(filePath:string) {
        //Need to unhide file uploader
        await browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px'; arguments[0].style.opacity = 1", this.getDocumentsPO().getBrowseFilesButton());

        await this.getDocumentsPO().getBrowseFilesButton().sendKeys(filePath);
    }

    async getUploadedDocumentName() {
        await this.getDocumentsPO().getSelectedFilesTable().getTableBodyRowCell(this.firstRowIndex, this.documentColumnIndex).element(by.tagName('label')).getText();
    }

    async selectUploadedDocumentsType(documentType:DocumentType) {
        let selectDocumentTypeDropdown = new SelectDropdown(this.getDocumentsPO().getSelectedFilesTable().getTableBodyRowCell(this.firstRowIndex, this.documentTypeColumnIndex).element(by.tagName('select')));
        await selectDocumentTypeDropdown.selectOption(documentType);
    }

    async selectUploadedDocumentsOrder(orderIndex:number) {
        let selectOrderDropdown = new SelectDropdown(this.getDocumentsPO().getSelectedFilesTable().getTableBodyRowCell(this.firstRowIndex, this.orderColumnIndex).element(by.tagName('select')));
        await selectOrderDropdown.selectOptionByIndex(++orderIndex);
    }

    async fillUploadedDocumentsNotes(note:string) {
        let notesInputField = this.getDocumentsPO().getSelectedFilesTable().getTableBodyRowCell(this.firstRowIndex, this.noteColumnIndex).element(by.tagName('input'));
        await notesInputField.sendKeys(note);
    }

    async removeUploadedDocument() {
        await this.getDocumentsPO().getSelectedFilesTable().getTableBodyRowCell(this.firstRowIndex, this.actionColumnIndex).element(by.tagName('a')).click();
    }

    async save() {
        await this.getDocumentsPO().getSaveBUtton().click();
    }

    async cancel() {
        await this.getDocumentsPO().getCancelButton().click();
    }

    async fillDocumentInfo(documentInfo:DocumentInfo) {
        await this.uploadFile(documentInfo.getDocumentPath());
        await this.selectUploadedDocumentsType(documentInfo.getDocumentType());
        await this.fillUploadedDocumentsNotes(documentInfo.getNotes());

        if(documentInfo.getOrderIndex() != null) {
            await this.selectUploadedDocumentsOrder(documentInfo.getOrderIndex());
        }
    }

    async getSuccessMessage() {
        return await this.getDocumentsPO().getSuccessMessage().getText();
    }
}