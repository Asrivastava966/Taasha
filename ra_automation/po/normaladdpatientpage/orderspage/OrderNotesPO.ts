import { element, by } from 'protractor';
import { NotesGrid } from '../../../component/comp/NotesGrid';
import { SelectDropdown } from '../../../component/comp/SelectDropdown';
import { BaseTable } from '../../../component/base/BaseTable';
import { DatePicker } from '../../../component/comp/DatePicker';

export class OrderNotesPO {
    
    private static newNoteButton = element(by.css('[ng-click=\"openNote()\"]'));

    getNewNoteButton() {
        return OrderNotesPO.newNoteButton;
    }

    //Open Notes - Grid
    private static openNotesGrid = element(by.id('grid1'));

    getOpenNotesGrid() {
        return new NotesGrid(OrderNotesPO.openNotesGrid);
    }

    //Closed Notes - Grid
    private static closedNotesGrid = element(by.id('grid2'));

    getClosedNotesGrid() {
        return new NotesGrid(OrderNotesPO.closedNotesGrid);
    }

    //New Note 
    private static noteSuccessMessage = element(by.css('[ng-if=\"successMessage\"]'));
    
    getNoteSuccessMessage() {
        return OrderNotesPO.noteSuccessMessage;
    }
    
    private static backToOrderNotesButton = element(by.css('[ng-click=\"backtonotes()\"]'));

    getBackToOrderNotesButton() {
        return OrderNotesPO.backToOrderNotesButton;
    }

    private static orderNoteDropdown = element(by.id('inputNoteType'));
    private static severityDropdown = element(by.id('inputSeverity'));
    private static assignToDropdown = element(by.id('inputAssignTo'));
    private static dateCreatedInputField = element(by.id('inputActualDate'));
    private static noteStatusDropdown = element(by.id('inputnoteStatus'));
    private static dateNeededInputField = element(by.id('inputDateNeeded'));
    private static noteSubjectInputField = element(by.id('inputnotesubject'));
    private static noteDescriptionTextarea = element(by.id('inputDescription'));
    private static saveButton = element(by.css("[ng-click*=\'saveNotes\']"));
    
    //New Note - Comments
    private static commentSuccessMessage = element(by.css('[ng-if=\"commentSuccessMessage\"]'));
    
    getCommentSuccessMessage() {
        return OrderNotesPO.commentSuccessMessage;
    }

    private static commentTextarea = element(by.id('inputComments'));
    private static addCommentButton = element(by.css('[ng-click*=\"addComments\"]'));
    private static commentsTable = element(by.css('[data-ng-table=\"UI.orderCommentTableParams\"]'));

    getOrderNoteTypeDropdown() {
        return new SelectDropdown(OrderNotesPO.orderNoteDropdown);
    }

    getSeverityDropdown() {
        return new SelectDropdown(OrderNotesPO.severityDropdown);
    }

    getAssignToDropdown() {
        return new SelectDropdown(OrderNotesPO.assignToDropdown);
    }

    getDateCreatedDatePicker() {
        return new DatePicker(OrderNotesPO.dateCreatedInputField);
    }

    getNoteStatueDropdown() {
        return new SelectDropdown(OrderNotesPO.noteStatusDropdown);
    }

    getDateNeededDatePicker() {
        return new DatePicker(OrderNotesPO.dateNeededInputField);
    }

    getNoteSubjectInputField() {
        return OrderNotesPO.noteSubjectInputField;
    }

    getNoteDescriptionTextarea() {
        return OrderNotesPO.noteDescriptionTextarea;
    }

    getSaveButton() {
        return OrderNotesPO.saveButton;
    }

    getCommentTextarea() {
        return OrderNotesPO.commentTextarea;
    }

    getAddCommentButton() {
        return OrderNotesPO.addCommentButton;
    }

    getCommentsTable() {
        return new BaseTable(OrderNotesPO.commentsTable);
    }
}
