import { by, ElementFinder } from "protractor";
import { BaseGrid } from "../base/BaseGrid";

export class NotesGrid extends BaseGrid {
    private noteIDColumnIndex = 1;
    private orderNoteColumnIndex = 2; 
    private createdByColumnIndex = 3; 
    private dateCreatedColumnIndex = 4; 
    private dateNeededColumnIndex = 5; 
    private actionColumnIndex = 6; 

    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }

    async getGridHeaderCellLabel(columnNumber:number) {
        return await this.getGridHeaderCells().get(--columnNumber).element(by.className('ui-grid-header-cell-label')).getText();
    }

    getGridBodyRowGeneralInfoCells(rowNumber:number) {
        return this.getGridBodyRow(rowNumber).all(by.className('ui-grid-cell-custom'));
    }

    getGridBodyRowGeneralInfoCell(rowNumber:number, columnNumber:number) {
        return this.getGridBodyRowGeneralInfoCells(rowNumber).get(columnNumber);
    }

    async getNoteID(rowNumber:number) {
        return await this.getGridBodyRowGeneralInfoCell(rowNumber, this.noteIDColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async getOrderNote(rowNumber:number) {
        return await this.getGridBodyRowGeneralInfoCell(rowNumber, this.orderNoteColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async getCreatedBy(rowNumber:number) {
        return await this.getGridBodyRowGeneralInfoCell(rowNumber, this.createdByColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async getDateCreated(rowNumber:number) {
        return await this.getGridBodyRowGeneralInfoCell(rowNumber, this.dateCreatedColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async getDateNeeded(rowNumber:number) {
        return await this.getGridBodyRowGeneralInfoCell(rowNumber, this.dateNeededColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    async updateNote(rowNumber:number) {
        return await this.getGridBodyRowGeneralInfoCell(rowNumber, this.actionColumnIndex).element(by.className('ui-grid-cell-contents')).element(by.tagName('a')).click();
    }

    getGridBodyRowNoteSubjectAndCommentCell(rowNumber:number) {
        return this.getGridBodyRow(rowNumber).element(by.className('ui-grid-cell-custom2'));
    }

    async getNoteSubject(rowNumber:number) {
        return await this.getGridBodyRowNoteSubjectAndCommentCell(rowNumber).getText();
    }

    async getNoteLastComment(rowNumber:number) {
        return await this.getGridBodyRowNoteSubjectAndCommentCell(rowNumber).element(by.css('[ng-if*=\"lastComment\"]')).getText();
    }
}