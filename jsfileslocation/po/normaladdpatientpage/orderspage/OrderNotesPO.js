"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const NotesGrid_1 = require("../../../component/comp/NotesGrid");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
const BaseTable_1 = require("../../../component/base/BaseTable");
const DatePicker_1 = require("../../../component/comp/DatePicker");
class OrderNotesPO {
    getNewNoteButton() {
        return OrderNotesPO.newNoteButton;
    }
    getOpenNotesGrid() {
        return new NotesGrid_1.NotesGrid(OrderNotesPO.openNotesGrid);
    }
    getClosedNotesGrid() {
        return new NotesGrid_1.NotesGrid(OrderNotesPO.closedNotesGrid);
    }
    getNoteSuccessMessage() {
        return OrderNotesPO.noteSuccessMessage;
    }
    getBackToOrderNotesButton() {
        return OrderNotesPO.backToOrderNotesButton;
    }
    getCommentSuccessMessage() {
        return OrderNotesPO.commentSuccessMessage;
    }
    getOrderNoteTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderNotesPO.orderNoteDropdown);
    }
    getSeverityDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderNotesPO.severityDropdown);
    }
    getAssignToDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderNotesPO.assignToDropdown);
    }
    getDateCreatedDatePicker() {
        return new DatePicker_1.DatePicker(OrderNotesPO.dateCreatedInputField);
    }
    getNoteStatueDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderNotesPO.noteStatusDropdown);
    }
    getDateNeededDatePicker() {
        return new DatePicker_1.DatePicker(OrderNotesPO.dateNeededInputField);
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
        return new BaseTable_1.BaseTable(OrderNotesPO.commentsTable);
    }
}
OrderNotesPO.newNoteButton = protractor_1.element(protractor_1.by.css('[ng-click=\"openNote()\"]'));
//Open Notes - Grid
OrderNotesPO.openNotesGrid = protractor_1.element(protractor_1.by.id('grid1'));
//Closed Notes - Grid
OrderNotesPO.closedNotesGrid = protractor_1.element(protractor_1.by.id('grid2'));
//New Note 
OrderNotesPO.noteSuccessMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"successMessage\"]'));
OrderNotesPO.backToOrderNotesButton = protractor_1.element(protractor_1.by.css('[ng-click=\"backtonotes()\"]'));
OrderNotesPO.orderNoteDropdown = protractor_1.element(protractor_1.by.id('inputNoteType'));
OrderNotesPO.severityDropdown = protractor_1.element(protractor_1.by.id('inputSeverity'));
OrderNotesPO.assignToDropdown = protractor_1.element(protractor_1.by.id('inputAssignTo'));
OrderNotesPO.dateCreatedInputField = protractor_1.element(protractor_1.by.id('inputActualDate'));
OrderNotesPO.noteStatusDropdown = protractor_1.element(protractor_1.by.id('inputnoteStatus'));
OrderNotesPO.dateNeededInputField = protractor_1.element(protractor_1.by.id('inputDateNeeded'));
OrderNotesPO.noteSubjectInputField = protractor_1.element(protractor_1.by.id('inputnotesubject'));
OrderNotesPO.noteDescriptionTextarea = protractor_1.element(protractor_1.by.id('inputDescription'));
OrderNotesPO.saveButton = protractor_1.element(protractor_1.by.css("[ng-click*=\'saveNotes\']"));
//New Note - Comments
OrderNotesPO.commentSuccessMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"commentSuccessMessage\"]'));
OrderNotesPO.commentTextarea = protractor_1.element(protractor_1.by.id('inputComments'));
OrderNotesPO.addCommentButton = protractor_1.element(protractor_1.by.css('[ng-click*=\"addComments\"]'));
OrderNotesPO.commentsTable = protractor_1.element(protractor_1.by.css('[data-ng-table=\"UI.orderCommentTableParams\"]'));
exports.OrderNotesPO = OrderNotesPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJOb3Rlc1BPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ub3JtYWxhZGRwYXRpZW50cGFnZS9vcmRlcnNwYWdlL09yZGVyTm90ZXNQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QyxpRUFBOEQ7QUFDOUQsMkVBQXdFO0FBQ3hFLGlFQUE4RDtBQUM5RCxtRUFBZ0U7QUFFaEUsTUFBYSxZQUFZO0lBSXJCLGdCQUFnQjtRQUNaLE9BQU8sWUFBWSxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBS0QsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLHFCQUFTLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFLRCxrQkFBa0I7UUFDZCxPQUFPLElBQUkscUJBQVMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUtELHFCQUFxQjtRQUNqQixPQUFPLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztJQUMzQyxDQUFDO0lBSUQseUJBQXlCO1FBQ3JCLE9BQU8sWUFBWSxDQUFDLHNCQUFzQixDQUFDO0lBQy9DLENBQUM7SUFlRCx3QkFBd0I7UUFDcEIsT0FBTyxZQUFZLENBQUMscUJBQXFCLENBQUM7SUFDOUMsQ0FBQztJQU1ELHdCQUF3QjtRQUNwQixPQUFPLElBQUksK0JBQWMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLCtCQUFjLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE9BQU8sSUFBSSwrQkFBYyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCx3QkFBd0I7UUFDcEIsT0FBTyxJQUFJLHVCQUFVLENBQUMsWUFBWSxDQUFDLHFC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