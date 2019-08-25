"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const NotesPO_1 = require("../../po/normaladdpatientpage/NotesPO");
const WaitUtils_1 = require("../../utils/WaitUtils");
class NotesLib {
    constructor() {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.notesPO = new NotesPO_1.NotesPO();
    }
    addNewNote() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getNewNoteButton().click();
        });
    }
    //New Note
    getNoteSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info(yield this.notesPO.getNoteSuccessMessage().getText());
            return yield this.notesPO.getNoteSuccessMessage().getText();
        });
    }
    navigateBackToNotesGrid() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(this.notesPO.getNoteSuccessMessage()).perform();
            yield this.notesPO.getBackToNotesButton().click();
        });
    }
    selectNoteType(noteType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getNoteTypeDropdown().selectOption(noteType);
        });
    }
    selectSeverity(noteSeverity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getSeverityDropdown().selectOption(noteSeverity);
        });
    }
    selectAssignTo(assignTo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getAssignToDropdown().selectOption(assignTo);
        });
    }
    selectDateCreated(dateCreated) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.notesPO.getDateCreatedDatePicker().selectDate(dateCreated, isDatePickerSmall);
        });
    }
    selectNoteStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getNoteStatueDropdown().selectOption(status);
        });
    }
    selectNoteReason(reason) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getNoteReasonDropdown().selectOption(reason);
        });
    }
    selectDateNeeded(dateNeeded) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.notesPO.getDateNeededDatePicker().selectDate(dateNeeded, isDatePickerSmall);
        });
    }
    fillNoteSubject(subject) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getNoteSubjectInputField().sendKeys(subject);
        });
    }
    fillNoteDescription(description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getNoteDescriptionTextarea().sendKeys(description);
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getSaveButton().click();
        });
    }
    //Workflow method
    fillNoteInfo(noteInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (noteInfo.getNoteType() != null) {
                yield this.selectNoteType(noteInfo.getNoteType());
            }
            if (noteInfo.getSeverity() != null) {
                yield this.selectSeverity(noteInfo.getSeverity());
            }
            if (noteInfo.getAssignTo() != null) {
                yield this.selectAssignTo(noteInfo.getAssignTo());
            }
            if (noteInfo.getDateCreated() != null) {
                yield this.selectDateCreated(noteInfo.getDateCreated());
            }
            if (noteInfo.getNoteStatus() != null) {
                yield this.selectNoteStatus(noteInfo.getNoteStatus());
            }
            if (noteInfo.getNoteReason() != null) {
                yield this.selectNoteReason(noteInfo.getNoteReason());
            }
            if (noteInfo.getDateNeeded() != null) {
                yield this.selectDateNeeded(noteInfo.getDateNeeded());
            }
            if (noteInfo.getNoteSubject() != null) {
                yield this.fillNoteSubject(noteInfo.getNoteSubject());
            }
            if (noteInfo.getNoteDescription() != null) {
                yield this.fillNoteDescription(noteInfo.getNoteDescription());
            }
        });
    }
    getCommentSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info(yield this.notesPO.getCommentSuccessMessage().getText());
            return yield this.notesPO.getCommentSuccessMessage().getText();
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getCommentTextarea().sendKeys(comment);
            yield this.notesPO.getAddCommentButton().click();
        });
    }
    //Open Notes - Grid 
    updateOpenNote(noteIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notesPO.getOpenNotesGrid().updateNote(noteIndex);
        });
    }
}
exports.NotesLib = NotesLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXNMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9ub3JtYWxhZGRwYXRpZW50cGFnZS9Ob3Rlc0xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLG1FQUE4RDtBQU05RCxxREFBa0Q7QUFFbEQsTUFBYSxRQUFRO0lBSWpCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFSyxVQUFVOztZQUNaLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUVELFVBQVU7SUFDSixxQkFBcUI7O1lBQ3ZCLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEUsQ0FBQztLQUFBO0lBRUssdUJBQXVCOztZQUN6QixNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xGLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxRQUFpQjs7WUFDbEMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FB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