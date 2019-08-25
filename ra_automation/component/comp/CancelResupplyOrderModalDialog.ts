import { by, ElementFinder } from 'protractor';
import { BaseModal } from "../base/BaseModal";
import { SelectDropdown } from './SelectDropdown';
import { DatePicker } from './DatePicker';

export class CancelResupplyOrderModalDialog extends BaseModal {
    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
    }

    private getCloseButton() {
        return this.getModalHeader().element(by.className('close'));
    }

    async closeModal() {
        await this.getCloseButton().click();
    }

    getNoteTypeSelectDropdown() {
        return new SelectDropdown(this.getModalBody().element(by.id('inputNoteType')));
    }

    getAssignToSelectDropdown() {
        return new SelectDropdown(this.getModalBody().element(by.name('inputAssignTo')));
    }

    getDateCreatedInputField() {
        return new DatePicker(this.getModalBody().element(by.model('notes.payload.actualDt')));
    }

    getNoteStatusSelectDropdown() {
        return new SelectDropdown(this.getModalBody().element(by.id('inputNoteStatus')));
    }

    getSeverityTypeSelectDropdown() {
        return new SelectDropdown(this.getModalBody().element(by.id('inputSeverity')));
    }

    getDateNeededInputField() {
        return new DatePicker(this.getModalBody().element(by.model('notes.payload.dateNeeded')));
    }

    getNoteSubjectInputField() {
        return this.getModalBody().element(by.id('inputnotesubject'));
    }

    getCancelReasonTextarea() {
        return this.getModalBody().element(by.id('inputDescription'));
    }

    getSaveButton() {
        return this.getModalBody().element(by.css('[value=\"Save\"]'));
    }
}