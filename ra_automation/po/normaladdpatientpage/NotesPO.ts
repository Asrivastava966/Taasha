import { by, element } from 'protractor';
import { SelectDropdown } from '../../component/comp/SelectDropdown';
import { DatePicker } from '../../component/comp/DatePicker';
import { BaseTable } from '../../component/base/BaseTable';
import { NotesGrid } from '../../component/comp/NotesGrid';

export class NotesPO{

    private static newNoteButton = element(by.css('[ng-click=\"openNote()\"]'));

    getNewNoteButton() {
        return NotesPO.newNoteButton;
    }

    //Open Notes - Grid
    private static openNotesGrid = element(by.id('grid1'));

    getOpenNotesGrid() {
        return new NotesGrid(NotesPO.openNotesGrid);
    }

    //Closed Notes - Grid
    private static closedNotesGrid = element(by.id('grid2'));

    getClosedNotesGrid() {
        return new NotesGrid(NotesPO.closedNotesGrid);
    }

    //New Note 
    private static noteSuccessMessage = element(by.css('[ng-if=\"successMessage\"]'));
    
    getNoteSuccessMessage() {
        return NotesPO.noteSuccessMessage;
    }
    
    private static backToNotesButton = element(by.css('[ng-click=\"backtonotes()\"]'));

    getBackToNotesButton() {
        return NotesPO.backToNotesButton;
    }

    private static noteTypeDropdown = element(by.id('inputNoteType'));
    private static severityDropdown = element(by.id('inputSeverity'));
    private static assignToDropdown = element(by.id('inputAssignTo'));
    private static dateCreatedInputField = element(by.id('inputActualDate'));
    private static noteStatusDropdown = element(by.id('inputNoteStatus'));
    private static noteReasonDropdown = element(by.id('inputNoteReason'));
    private static dateNeededInputField = element(by.id('inputDateNeeded'));
    private static noteSubjectInputField = element(by.id('inputnotesubject'));
    private static noteDescriptionTextarea = element(by.id('inputDescription'));
    private static saveButton = element(by.css("[ng-click*=\'saveNotes\']"));
    
    //New Note - Comments
    private static commentSuccessMessage = element(by.css('[ng-if=\"commentSuccessMessage\"]'));
    
    getCommentSuccessMessage() {
        return NotesPO.commentSuccessMessage;
    }

    private static commentTextarea = element(by.id('inputComments'));
    private static addCommentButton = element(by.css('[ng-click=\"addComments(commentForm.$valid)\"]'));
    private static commentsTable = element(by.css('[data-ng-table=\"UI.commentTableParams\"]'));

    getNoteTypeDropdown() {
        return new SelectDropdown(NotesPO.noteTypeDropdown);
    }

    getSeverityDropdown() {
        return new SelectDropdown(NotesPO.severityDropdown);
    }

    getAssignToDropdown() {
        return new SelectDropdown(NotesPO.assignToDropdown);
    }

    getDateCreatedDatePicker() {
        return new DatePicker(NotesPO.dateCreatedInputField);
    }

    getNoteStatueDropdown() {
        return new SelectDropdown(NotesPO.noteStatusDropdown);
    }

    getNoteReasonDropdown() {
        return new SelectDropdown(NotesPO.noteReasonDropdown);
    }

    getDateNeededDatePicker() {
        return new DatePicker(NotesPO.dateNeededInputField);
    }

    getNoteSubjectInputField() {
        return NotesPO.noteSubjectInputField;
    }

    getNoteDescriptionTextarea() {
        return NotesPO.noteDescriptionTextarea;
    }

    getSaveButton() {
        return NotesPO.saveButton;
    }

    getCommentTextarea() {
        return NotesPO.commentTextarea;
    }

    getAddCommentButton() {
        return NotesPO.addCommentButton;
    }

    getCommentsTable() {
        return new BaseTable(NotesPO.commentsTable);
    }
}