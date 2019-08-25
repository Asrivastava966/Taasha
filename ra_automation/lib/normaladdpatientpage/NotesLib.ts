import { browser } from "protractor";
import {NotesPO} from "../../po/normaladdpatientpage/NotesPO";
import { NoteType } from "../../data/enums/NoteType";
import { NoteSeverity } from "../../data/enums/NoteSeverity";
import { NoteStatus } from "../../data/enums/NoteStatus";
import { NoteReason } from "../../data/enums/NoteReason";
import { NoteInfo } from "../../data/info/NoteInfo";
import { WaitUtils } from "../../utils/WaitUtils";

export class NotesLib {
    waitUtils:WaitUtils;
    notesPO:NotesPO;

    constructor(){
        this.waitUtils = new WaitUtils();
        this.notesPO = new NotesPO();
    }

    async addNewNote() {
        await this.notesPO.getNewNoteButton().click();
    }

    //New Note
    async getNoteSuccessMessage() {
        browser.logger.info(await this.notesPO.getNoteSuccessMessage().getText());
        return await this.notesPO.getNoteSuccessMessage().getText();
    }

    async navigateBackToNotesGrid() {
        await browser.actions().mouseMove(this.notesPO.getNoteSuccessMessage()).perform();
        await this.notesPO.getBackToNotesButton().click();
    }

    async selectNoteType(noteType:NoteType) {
        await this.notesPO.getNoteTypeDropdown().selectOption(noteType);
    }

    async selectSeverity(noteSeverity:NoteSeverity) {
        await this.notesPO.getSeverityDropdown().selectOption(noteSeverity);
    }

    async selectAssignTo(assignTo:string) {
       await this.notesPO.getAssignToDropdown().selectOption(assignTo);
    }

    async selectDateCreated(dateCreated:Date) {
        let isDatePickerSmall = false;
        await this.notesPO.getDateCreatedDatePicker().selectDate(dateCreated, isDatePickerSmall);
    }

    async selectNoteStatus(status:NoteStatus) {
        await this.notesPO.getNoteStatueDropdown().selectOption(status);
    }

    async selectNoteReason(reason:NoteReason) {
        await this.notesPO.getNoteReasonDropdown().selectOption(reason);
    }

    async selectDateNeeded(dateNeeded:Date) {
        let isDatePickerSmall = false;
        await this.notesPO.getDateNeededDatePicker().selectDate(dateNeeded, isDatePickerSmall);
    }

    async fillNoteSubject(subject:string) {
        await this.notesPO.getNoteSubjectInputField().sendKeys(subject);
    }

    async fillNoteDescription(description:string) {
        await this.notesPO.getNoteDescriptionTextarea().sendKeys(description);
    }

    async save() {
        await this.notesPO.getSaveButton().click();
    }

    //Workflow method
    async fillNoteInfo(noteInfo:NoteInfo) {
        
        if(noteInfo.getNoteType() != null) {
            await this.selectNoteType(noteInfo.getNoteType());
        }

        if(noteInfo.getSeverity() != null) {
            await this.selectSeverity(noteInfo.getSeverity());
        }

        if(noteInfo.getAssignTo() != null) {
            await this.selectAssignTo(noteInfo.getAssignTo());
        }

        if(noteInfo.getDateCreated() != null) {
            await this.selectDateCreated(noteInfo.getDateCreated());
        }

        if(noteInfo.getNoteStatus() != null) {
            await this.selectNoteStatus(noteInfo.getNoteStatus());
        }

        if(noteInfo.getNoteReason() != null) {
            await this.selectNoteReason(noteInfo.getNoteReason());
        }

        if(noteInfo.getDateNeeded() != null) {
            await this.selectDateNeeded(noteInfo.getDateNeeded());
        }

        if(noteInfo.getNoteSubject() != null) {
            await this.fillNoteSubject(noteInfo.getNoteSubject());
        }

        if(noteInfo.getNoteDescription() != null) {
            await this.fillNoteDescription(noteInfo.getNoteDescription());
        }
    }

    async getCommentSuccessMessage() {
        browser.logger.info(await this.notesPO.getCommentSuccessMessage().getText());
        return await this.notesPO.getCommentSuccessMessage().getText();
    }

    async addComment(comment:string) {
        await this.notesPO.getCommentTextarea().sendKeys(comment);
        await this.notesPO.getAddCommentButton().click();
    }

    //Open Notes - Grid 
    async updateOpenNote(noteIndex:number) {
        await this.notesPO.getOpenNotesGrid().updateNote(noteIndex);
    }

    //Closed Notes - Grid 

}