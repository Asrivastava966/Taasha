import { browser } from "protractor";
import { WaitUtils } from "../../../utils/WaitUtils";
import { OrderNotesPO } from "../../../po/normaladdpatientpage/orderspage/OrderNotesPO";
import { NoteSeverity } from "../../../data/enums/NoteSeverity";
import { NoteStatus } from "../../../data/enums/NoteStatus";
import { OrderNoteType } from "../../../data/enums/OrderNoteType";
import { NoteInfo } from "../../../data/info/NoteInfo";

export class OrderNotesLib {
    waitUtils:WaitUtils;
    orderNotesPO:OrderNotesPO;

    constructor(){
        this.waitUtils = new WaitUtils();
        this.orderNotesPO = new OrderNotesPO();
    }

    async addNewNote() {
        await this.orderNotesPO.getNewNoteButton().click();
    }

    //New Note
    async getNoteSuccessMessage() {
        browser.logger.info(await this.orderNotesPO.getNoteSuccessMessage().getText());
        return await this.orderNotesPO.getNoteSuccessMessage().getText();
    }

    async navigateBackToOrderNotesGrid() {
        await browser.actions().mouseMove(this.orderNotesPO.getNoteSuccessMessage()).perform();
        await this.orderNotesPO.getBackToOrderNotesButton().click();
    }

    async selectOrderNoteType(orderNoteType:OrderNoteType) {
        await this.orderNotesPO.getOrderNoteTypeDropdown().selectOption(orderNoteType);
    }

    async selectSeverity(noteSeverity:NoteSeverity) {
        await this.orderNotesPO.getSeverityDropdown().selectOption(noteSeverity);
    }

    async selectAssignTo(assignTo:string) {
       await this.orderNotesPO.getAssignToDropdown().selectOption(assignTo);
    }

    async selectDateCreated(dateCreated:Date) {
        let isDatePickerSmall = false;
        await this.orderNotesPO.getDateCreatedDatePicker().selectDate(dateCreated, isDatePickerSmall);
    }

    async selectNoteStatus(status:NoteStatus) {
        await this.orderNotesPO.getNoteStatueDropdown().selectOption(status);
    }

    async selectDateNeeded(dateNeeded:Date) {
        let isDatePickerSmall = false;
        await this.orderNotesPO.getDateNeededDatePicker().selectDate(dateNeeded, isDatePickerSmall);
    }

    async fillNoteSubject(subject:string) {
        await this.orderNotesPO.getNoteSubjectInputField().sendKeys(subject);
    }

    async fillNoteDescription(description:string) {
        await this.orderNotesPO.getNoteDescriptionTextarea().sendKeys(description);
    }

    async save() {
        await this.orderNotesPO.getSaveButton().click();
    }

    //Workflow method
    async fillNoteInfo(noteInfo:NoteInfo) {
        
        if(noteInfo.getOrderNoteType() != null) {
            await this.selectOrderNoteType(noteInfo.getOrderNoteType());
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
        browser.logger.info(await this.orderNotesPO.getCommentSuccessMessage().getText());
        return await this.orderNotesPO.getCommentSuccessMessage().getText();
    }

    async addComment(comment:string) {
        await this.orderNotesPO.getCommentTextarea().sendKeys(comment);
        await this.orderNotesPO.getAddCommentButton().click();
    }

    //Open Notes - Grid 
    async updateOpenNote(noteIndex:number) {
        await this.orderNotesPO.getOpenNotesGrid().updateNote(noteIndex);
    }

    //Closed Notes - Grid 

}