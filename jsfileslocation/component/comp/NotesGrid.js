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
const BaseGrid_1 = require("../base/BaseGrid");
class NotesGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.noteIDColumnIndex = 1;
        this.orderNoteColumnIndex = 2;
        this.createdByColumnIndex = 3;
        this.dateCreatedColumnIndex = 4;
        this.dateNeededColumnIndex = 5;
        this.actionColumnIndex = 6;
    }
    getGridHeaderCellLabel(columnNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridHeaderCells().get(--columnNumber).element(protractor_1.by.className('ui-grid-header-cell-label')).getText();
        });
    }
    getGridBodyRowGeneralInfoCells(rowNumber) {
        return this.getGridBodyRow(rowNumber).all(protractor_1.by.className('ui-grid-cell-custom'));
    }
    getGridBodyRowGeneralInfoCell(rowNumber, columnNumber) {
        return this.getGridBodyRowGeneralInfoCells(rowNumber).get(columnNumber);
    }
    getNoteID(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowGeneralInfoCell(rowNumber, this.noteIDColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    getOrderNote(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowGeneralInfoCell(rowNumber, this.orderNoteColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    getCreatedBy(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowGeneralInfoCell(rowNumber, this.createdByColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    getDateCreated(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowGeneralInfoCell(rowNumber, this.dateCreatedColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    getDateNeeded(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowGeneralInfoCell(rowNumber, this.dateNeededColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    updateNote(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowGeneralInfoCell(rowNumber, this.actionColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).element(protractor_1.by.tagName('a')).click();
        });
    }
    getGridBodyRowNoteSubjectAndCommentCell(rowNumber) {
        return this.getGridBodyRow(rowNumber).element(protractor_1.by.className('ui-grid-cell-custom2'));
    }
    getNoteSubject(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowNoteSubjectAndCommentCell(rowNumber).getText();
        });
    }
    getNoteLastComment(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowNoteSubjectAndCommentCell(rowNumber).element(protractor_1.by.css('[ng-if*=\"lastComment\"]')).getText();
        });
    }
}
exports.NotesGrid = NotesGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXNHcmlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9jb21wb25lbnQvY29tcC9Ob3Rlc0dyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUMvQywrQ0FBNEM7QUFFNUMsTUFBYSxTQUFVLFNBQVEsbUJBQVE7SUFRbkMsWUFBWSxXQUF5QjtRQUNqQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFSZixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6QiwyQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDM0IsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztJQUk5QixDQUFDO0lBRUssc0JBQXNCLENBQUMsWUFBbUI7O1lBQzVDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUgsQ0FBQztLQUFBO0lBRUQsOEJBQThCLENBQUMsU0FBZ0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsNkJBQTZCLENBQUMsU0FBZ0IsRUFBRSxZQUFtQjtRQUMvRCxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVLLFNBQVMsQ0FBQyxTQUFnQjs7WUFDNUIsT0FBTyxNQUFNLElBQUks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