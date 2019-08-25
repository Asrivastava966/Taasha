import { ContactPatientPO } from "../../../../po/homepage/resuppliesbucket/resuppliescontactinformationpage/ContactPatientPO";
import { ISpokeWithPatientInfo } from "../../../../data/info/ISpokeWithPatientInfo";
import { CallResultPatientNote } from "../../../../data/enums/CallResultPatientNote";
import { CallResultPatientNoteInfo } from "../../../../data/info/CallResultPatientNoteInfo";
import { NoteSeverity } from "../../../../data/enums/NoteSeverity";
import { OrderNoteType } from "../../../../data/enums/OrderNoteType";
import { NoteStatus } from "../../../../data/enums/NoteStatus";
import { ResupplyOrderInfo } from "../../../../data/info/ResupplyOrderInfo";
import { by } from "protractor";

export class ContactPatientLib {
    contactPatientPO:ContactPatientPO;

    constructor() {
        this.contactPatientPO = new ContactPatientPO();
    }

    getContactPatientPO() {
        return this.contactPatientPO;
    }

    //Contact Number

    //Call Result
    private async checkISpokeWithThePatientCheckbox() {
        await this.getContactPatientPO().getISpokeWithThePatientCheckbox().click();
    }

    async fillISpokeWithThePatientQuestionnaire(iSpokeWithPatientInfo:ISpokeWithPatientInfo) {
        await this.checkISpokeWithThePatientCheckbox();
        
        if(iSpokeWithPatientInfo.getQuestionOneAnswer() != null) {
            await this.getContactPatientPO().getQuestionOneAnswers().get(iSpokeWithPatientInfo.getQuestionOneAnswer()).element(by.tagName('input')).click();
        }

        if(iSpokeWithPatientInfo.getQuestionTwoAnswer() != null) {
            await this.getContactPatientPO().getQuestionTwoAnswers().get(iSpokeWithPatientInfo.getQuestionTwoAnswer()).element(by.tagName('input')).click();
        }

        if(iSpokeWithPatientInfo.getQuestionThreeAnswer() != null) {
            await this.getContactPatientPO().getQuestionThreeAnswers().get(iSpokeWithPatientInfo.getQuestionThreeAnswer()).element(by.tagName('input')).click();
        }

        if(iSpokeWithPatientInfo.getQuestionFourAnswer() != null) {
            await this.getContactPatientPO().getQuestionFourAnswers().get(iSpokeWithPatientInfo.getQuestionFourAnswer()).element(by.tagName('input')).click();
        }
    }

    async next() {
        await this.getContactPatientPO().getNextButton().click();
    }

    async saveCancelResupplyOrderNote() {
        await this.getContactPatientPO().getCancelResupplyOrderModalDialog().getSaveButton().click();
    }

    async chooseCallResultPatientNote(callResultPatientNote:CallResultPatientNote) {
        await this.getContactPatientPO().getCallResultNoteRadioButton(callResultPatientNote).click();
    }

    private async selectSeverityType(callResultPatientNote:CallResultPatientNote, severityType:NoteSeverity) {
        await this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getSeverityTypeSelectDropdown().selectOption(severityType);
    }

    private async selectOrderNote(callResultPatientNote:CallResultPatientNote, orderNoteType:OrderNoteType) {
        await this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getOrderNoteSelectDropdown().selectOption(orderNoteType);
    }

    private async selectAssignTo(callResultPatientNote:CallResultPatientNote, assignTo:string) {
        await this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getAssignToSelectDropdown().selectOption(assignTo);
    }

    private async selectNoteStatus(callResultPatientNote:CallResultPatientNote, noteStatus:NoteStatus) {
        await this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getNoteStatusSelectDropdown().selectOption(noteStatus);
    }

    private async selectDateNeeded(callResultPatientNote:CallResultPatientNote, dateNeeded:Date) {
        let isDatePickerSmall = false;
        await this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getDateNeededInputField().selectDate(dateNeeded, isDatePickerSmall);
    }

    private async fillNoteSubject(callResultPatientNote:CallResultPatientNote, noteSubject:string) {
        await this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getNoteSubjectInputField().sendKeys(noteSubject);
    }

    private async fillNoteDescription(callResultPatientNote:CallResultPatientNote, noteDescription:string) {
        await this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getNoteDescriptionTextarea().sendKeys(noteDescription);
    }

    async fillCallResultPatientNote(callResultPatientNote:CallResultPatientNote, callResultPatientNoteInfo:CallResultPatientNoteInfo, resupplyOrderInfo:ResupplyOrderInfo) {
        await this.chooseCallResultPatientNote(callResultPatientNote);

        if(callResultPatientNoteInfo.getSeverityType() != null) {
            await this.selectSeverityType(callResultPatientNote, callResultPatientNoteInfo.getSeverityType());
        }

        if(callResultPatientNoteInfo.getOrderNote() != null) {
            await this.selectOrderNote(callResultPatientNote, callResultPatientNoteInfo.getOrderNote());
        }

        if(callResultPatientNoteInfo.getAssignTo() != null) {
            await this.selectAssignTo(callResultPatientNote, callResultPatientNoteInfo.getAssignTo());
        }

        if(callResultPatientNoteInfo.getNoteStatus() != null) {
            await this.selectNoteStatus(callResultPatientNote, callResultPatientNoteInfo.getNoteStatus());
        }

        if(callResultPatientNoteInfo.getDateNeeded() != null) {
            await this.selectDateNeeded(callResultPatientNote, callResultPatientNoteInfo.getDateNeeded());
        }

        if(callResultPatientNoteInfo.getNoteSubject() != null) {
            await this.fillNoteSubject(callResultPatientNote, callResultPatientNoteInfo.getNoteSubject());
        }

        if(callResultPatientNoteInfo.getNoteDescription() != null) {
            await this.fillNoteDescription(callResultPatientNote, callResultPatientNoteInfo.getNoteDescription());
        }

        await this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getSaveButton().click();

        if(resupplyOrderInfo.getOrderOwner() != null) {
            await this.getContactPatientPO().getWorkflowStatusModalDialog().selectOrderOwner(resupplyOrderInfo.getOrderOwner());
        }

        if(resupplyOrderInfo.getAssignTo() != null) {
            await this.getContactPatientPO().getWorkflowStatusModalDialog().selectAssignTo(resupplyOrderInfo.getAssignTo());
        }

        if(resupplyOrderInfo.getStatus() != null) {
            await this.getContactPatientPO().getWorkflowStatusModalDialog().selectStatus(resupplyOrderInfo.getStatus());
        }

        if(resupplyOrderInfo.getDateNeeded() != null) {
            await this.getContactPatientPO().getWorkflowStatusModalDialog().selectDateNeeded(resupplyOrderInfo.getDateNeeded());
        }

        await this.getContactPatientPO().getWorkflowStatusModalDialog().save();
    }
}