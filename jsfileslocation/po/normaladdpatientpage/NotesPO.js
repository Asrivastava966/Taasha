"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../component/comp/SelectDropdown");
const DatePicker_1 = require("../../component/comp/DatePicker");
const BaseTable_1 = require("../../component/base/BaseTable");
const NotesGrid_1 = require("../../component/comp/NotesGrid");
class NotesPO {
    getNewNoteButton() {
        return NotesPO.newNoteButton;
    }
    getOpenNotesGrid() {
        return new NotesGrid_1.NotesGrid(NotesPO.openNotesGrid);
    }
    getClosedNotesGrid() {
        return new NotesGrid_1.NotesGrid(NotesPO.closedNotesGrid);
    }
    getNoteSuccessMessage() {
        return NotesPO.noteSuccessMessage;
    }
    getBackToNotesButton() {
        return NotesPO.backToNotesButton;
    }
    getCommentSuccessMessage() {
        return NotesPO.commentSuccessMessage;
    }
    getNoteTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(NotesPO.noteTypeDropdown);
    }
    getSeverityDropdown() {
        return new SelectDropdown_1.SelectDropdown(NotesPO.severityDropdown);
    }
    getAssignToDropdown() {
        return new SelectDropdown_1.SelectDropdown(NotesPO.assignToDropdown);
    }
    getDateCreatedDatePicker() {
        return new DatePicker_1.DatePicker(NotesPO.dateCreatedInputField);
    }
    getNoteStatueDropdown() {
        return new SelectDropdown_1.SelectDropdown(NotesPO.noteStatusDropdown);
    }
    getNoteReasonDropdown() {
        return new SelectDropdown_1.SelectDropdown(NotesPO.noteReasonDropdown);
    }
    getDateNeededDatePicker() {
        return new DatePicker_1.DatePicker(NotesPO.dateNeededInputField);
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
        return new BaseTable_1.BaseTable(NotesPO.commentsTable);
    }
}
NotesPO.newNoteButton = protractor_1.element(protractor_1.by.css('[ng-click=\"openNote()\"]'));
//Open Notes - Grid
NotesPO.openNotesGrid = protractor_1.element(protractor_1.by.id('grid1'));
//Closed Notes - Grid
NotesPO.closedNotesGrid = protractor_1.element(protractor_1.by.id('grid2'));
//New Note 
NotesPO.noteSuccessMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"successMessage\"]'));
NotesPO.backToNotesButton = protractor_1.element(protractor_1.by.css('[ng-click=\"backtonotes()\"]'));
NotesPO.noteTypeDropdown = protractor_1.element(protractor_1.by.id('inputNoteType'));
NotesPO.severityDropdown = protractor_1.element(protractor_1.by.id('inputSeverity'));
NotesPO.assignToDropdown = protractor_1.element(protractor_1.by.id('inputAssignTo'));
NotesPO.dateCreatedInputField = protractor_1.element(protractor_1.by.id('inputActualDate'));
NotesPO.noteStatusDropdown = protractor_1.element(protractor_1.by.id('inputNoteStatus'));
NotesPO.noteReasonDropdown = protractor_1.element(protractor_1.by.id('inputNoteReason'));
NotesPO.dateNeededInputField = protractor_1.element(protractor_1.by.id('inputDateNeeded'));
NotesPO.noteSubjectInputField = protractor_1.element(protractor_1.by.id('inputnotesubject'));
NotesPO.noteDescriptionTextarea = protractor_1.element(protractor_1.by.id('inputDescription'));
NotesPO.saveButton = protractor_1.element(protractor_1.by.css("[ng-click*=\'saveNotes\']"));
//New Note - Comments
NotesPO.commentSuccessMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"commentSuccessMessage\"]'));
NotesPO.commentTextarea = protractor_1.element(protractor_1.by.id('inputComments'));
NotesPO.addCommentButton = protractor_1.element(protractor_1.by.css('[ng-click=\"addComments(commentForm.$valid)\"]'));
NotesPO.commentsTable = protractor_1.element(protractor_1.by.css('[data-ng-table=\"UI.commentTableParams\"]'));
exports.NotesPO = NotesPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXNQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vbm9ybWFsYWRkcGF0aWVudHBhZ2UvTm90ZXNQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6Qyx3RUFBcUU7QUFDckUsZ0VBQTZEO0FBQzdELDhEQUEyRDtBQUMzRCw4REFBMkQ7QUFFM0QsTUFBYSxPQUFPO0lBSWhCLGdCQUFnQjtRQUNaLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNqQyxDQUFDO0lBS0QsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLHFCQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFLRCxrQkFBa0I7UUFDZCxPQUFPLElBQUkscUJBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUtELHFCQUFxQjtRQUNqQixPQUFPLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUN0QyxDQUFDO0lBSUQsb0JBQW9CO1FBQ2hCLE9BQU8sT0FBTyxDQUFDLGlCQUFpQixDQUFDO0lBQ3JDLENBQUM7SUFnQkQsd0JBQXdCO1FBQ3BCLE9BQU8sT0FBTyxDQUFDLHFCQUFxQixDQUFDO0lBQ3pDLENBQUM7SUFNRCxtQkFBbUI7UUFDZixPQUFPLElBQUksK0JBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLCtCQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE9BQU8sSUFBSSwrQkFBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx3QkFBd0I7UUFDcEIsT0FBTyxJQUFJLHVCQUFVLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekQsQ0FB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