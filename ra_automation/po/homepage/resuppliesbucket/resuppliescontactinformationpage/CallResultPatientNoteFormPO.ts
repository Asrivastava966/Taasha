import { by, ElementFinder } from "protractor";
import { SelectDropdown } from "../../../../component/comp/SelectDropdown";
import { DatePicker } from "../../../../component/comp/DatePicker";

export class CallResultPatientNoteFormPO {

    private callResultPatientNoteForm:ElementFinder;

    constructor(callResultPatientNoteForm:ElementFinder) {
        this.callResultPatientNoteForm = callResultPatientNoteForm;
    }

    getCallResultPatientNoteForm() {
        return this.callResultPatientNoteForm;
    }

    getSeverityTypeSelectDropdown() {
        return new SelectDropdown(this.getCallResultPatientNoteForm().element(by.id('inputSeverity')));
    }

    getOrderNoteSelectDropdown() {
        return new SelectDropdown(this.getCallResultPatientNoteForm().element(by.id('inputNoteType')));
    }

    getAssignToSelectDropdown() {
        return new SelectDropdown(this.getCallResultPatientNoteForm().element(by.name('inputAssignTo')));
    }

    getNoteStatusSelectDropdown() {
        return new SelectDropdown(this.getCallResultPatientNoteForm().element(by.id('inputNoteStatus')));
    }

    getDateNeededInputField() {
        return new DatePicker(this.getCallResultPatientNoteForm().element(by.name('inputActualDate')));
    }

    getNoteSubjectInputField() {
        return this.getCallResultPatientNoteForm().element(by.id('patieninputNoteSubject'));
    }

    getNoteDescriptionTextarea() {
        return this.getCallResultPatientNoteForm().element(by.id('patientinputNoteDesc'));
    }

    getSaveButton() {
        return this.getCallResultPatientNoteForm().element(by.buttonText('Save'));
    }

    getCancelButton() {
        return this.getCallResultPatientNoteForm().element(by.buttonText('Cancel'));
    }
}