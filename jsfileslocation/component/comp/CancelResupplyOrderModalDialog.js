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
const BaseModal_1 = require("../base/BaseModal");
const SelectDropdown_1 = require("./SelectDropdown");
const DatePicker_1 = require("./DatePicker");
class CancelResupplyOrderModalDialog extends BaseModal_1.BaseModal {
    constructor(modalDialog) {
        super(modalDialog);
    }
    getCloseButton() {
        return this.getModalHeader().element(protractor_1.by.className('close'));
    }
    closeModal() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCloseButton().click();
        });
    }
    getNoteTypeSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getModalBody().element(protractor_1.by.id('inputNoteType')));
    }
    getAssignToSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getModalBody().element(protractor_1.by.name('inputAssignTo')));
    }
    getDateCreatedInputField() {
        return new DatePicker_1.DatePicker(this.getModalBody().element(protractor_1.by.model('notes.payload.actualDt')));
    }
    getNoteStatusSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getModalBody().element(protractor_1.by.id('inputNoteStatus')));
    }
    getSeverityTypeSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getModalBody().element(protractor_1.by.id('inputSeverity')));
    }
    getDateNeededInputField() {
        return new DatePicker_1.DatePicker(this.getModalBody().element(protractor_1.by.model('notes.payload.dateNeeded')));
    }
    getNoteSubjectInputField() {
        return this.getModalBody().element(protractor_1.by.id('inputnotesubject'));
    }
    getCancelReasonTextarea() {
        return this.getModalBody().element(protractor_1.by.id('inputDescription'));
    }
    getSaveButton() {
        return this.getModalBody().element(protractor_1.by.css('[value=\"Save\"]'));
    }
}
exports.CancelResupplyOrderModalDialog = CancelResupplyOrderModalDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FuY2VsUmVzdXBwbHlPcmRlck1vZGFsRGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9jb21wb25lbnQvY29tcC9DYW5jZWxSZXN1cHBseU9yZGVyTW9kYWxEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUMvQyxpREFBOEM7QUFDOUMscURBQWtEO0FBQ2xELDZDQUEwQztBQUUxQyxNQUFhLDhCQUErQixTQUFRLHFCQUFTO0lBQ3pELFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxjQUFjO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVLLFVBQVU7O1lBQ1osTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUQseUJBQXlCO1FBQ3JCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELHlCQUF5QjtRQUNyQixPQUFPLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCx3QkFBd0I7UUFDcEIsT0FBTyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCwyQkFBMkI7UUFDdkIsT0FBTyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCw2QkFBNkI7UUFDekIsT0FBTyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsdUJBQXVCO1FBQ25CLE9BQU8sSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsd0JBQXdCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsdUJBQXVCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0o7QUFoREQsd0VBZ0RDIn0=