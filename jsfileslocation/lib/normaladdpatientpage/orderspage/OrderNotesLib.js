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
const WaitUtils_1 = require("../../../utils/WaitUtils");
const OrderNotesPO_1 = require("../../../po/normaladdpatientpage/orderspage/OrderNotesPO");
class OrderNotesLib {
    constructor() {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.orderNotesPO = new OrderNotesPO_1.OrderNotesPO();
    }
    addNewNote() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderNotesPO.getNewNoteButton().click();
        });
    }
    //New Note
    getNoteSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info(yield this.orderNotesPO.getNoteSuccessMessage().getText());
            return yield this.orderNotesPO.getNoteSuccessMessage().getText();
        });
    }
    navigateBackToOrderNotesGrid() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(this.orderNotesPO.getNoteSuccessMessage()).perform();
            yield this.orderNotesPO.getBackToOrderNotesButton().click();
        });
    }
    selectOrderNoteType(orderNoteType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderNotesPO.getOrderNoteTypeDropdown().selectOption(orderNoteType);
        });
    }
    selectSeverity(noteSeverity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderNotesPO.getSeverityDropdown().selectOption(noteSeverity);
        });
    }
    selectAssignTo(assignTo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderNotesPO.getAssignToDropdown().selectOption(assignTo);
        });
    }
    selectDateCreated(dateCreated) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.orderNotesPO.getDateCreatedDatePicker().selectDate(dateCreated, isDatePickerSmall);
        });
    }
    selectNoteStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderNotesPO.getNoteStatueDropdown().selectOption(status);
        });
    }
    selectDateNeeded(dateNeeded) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.orderNotesPO.getDateNeededDatePicker().selectDate(dateNeeded, isDatePickerSmall);
        });
    }
    fillNoteSubject(subject) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderNotesPO.getNoteSubjectInputField().sendKeys(subject);
        });
    }
    fillNoteDescription(description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderNotesPO.getNoteDescriptionTextarea().sendKeys(description);
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderNotesPO.getSaveButton().click();
        });
    }
    //Workflow method
    fillNoteInfo(noteInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (noteInfo.getOrderNoteType() != null) {
                yield this.selectOrderNoteType(noteInfo.getOrderNoteType());
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
            protractor_1.browser.logger.info(yield this.orderNotesPO.getCommentSuccessMessage().getText());
            return yield this.orderNotesPO.getCommentSuccessMessage().getText();
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderNotesPO.getCommentTextarea().sendKeys(comment);
            yield this.orderNotesPO.getAddCommentButton().click();
        });
    }
    //Open Notes - Grid 
    updateOpenNote(noteIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderNotesPO.getOpenNotesGrid().updateNote(noteIndex);
        });
    }
}
exports.OrderNotesLib = OrderNotesLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJOb3Rlc0xpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL25vcm1hbGFkZHBhdGllbnRwYWdlL29yZGVyc3BhZ2UvT3JkZXJOb3Rlc0xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLHdEQUFxRDtBQUNyRCwyRkFBd0Y7QUFNeEYsTUFBYSxhQUFhO0lBSXRCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFSyxVQUFVOztZQUNaLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUVELFVBQVU7SUFDSixxQkFBcUI7O1lBQ3ZCLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQy9FLE9BQU8sTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckUsQ0FBQztLQUFBO0lBRUssNEJBQTRCOztZQUM5QixNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZGLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hFLENBQUM7S0FBQTtJQUVLLG1CQUFtQixDQUFDLGFBQTJCOztZQUNqRCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQXdCLEVB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