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
const ContactPatientPO_1 = require("../../../../po/homepage/resuppliesbucket/resuppliescontactinformationpage/ContactPatientPO");
const protractor_1 = require("protractor");
class ContactPatientLib {
    constructor() {
        this.contactPatientPO = new ContactPatientPO_1.ContactPatientPO();
    }
    getContactPatientPO() {
        return this.contactPatientPO;
    }
    //Contact Number
    //Call Result
    checkISpokeWithThePatientCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientPO().getISpokeWithThePatientCheckbox().click();
        });
    }
    fillISpokeWithThePatientQuestionnaire(iSpokeWithPatientInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.checkISpokeWithThePatientCheckbox();
            if (iSpokeWithPatientInfo.getQuestionOneAnswer() != null) {
                yield this.getContactPatientPO().getQuestionOneAnswers().get(iSpokeWithPatientInfo.getQuestionOneAnswer()).element(protractor_1.by.tagName('input')).click();
            }
            if (iSpokeWithPatientInfo.getQuestionTwoAnswer() != null) {
                yield this.getContactPatientPO().getQuestionTwoAnswers().get(iSpokeWithPatientInfo.getQuestionTwoAnswer()).element(protractor_1.by.tagName('input')).click();
            }
            if (iSpokeWithPatientInfo.getQuestionThreeAnswer() != null) {
                yield this.getContactPatientPO().getQuestionThreeAnswers().get(iSpokeWithPatientInfo.getQuestionThreeAnswer()).element(protractor_1.by.tagName('input')).click();
            }
            if (iSpokeWithPatientInfo.getQuestionFourAnswer() != null) {
                yield this.getContactPatientPO().getQuestionFourAnswers().get(iSpokeWithPatientInfo.getQuestionFourAnswer()).element(protractor_1.by.tagName('input')).click();
            }
        });
    }
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientPO().getNextButton().click();
        });
    }
    saveCancelResupplyOrderNote() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientPO().getCancelResupplyOrderModalDialog().getSaveButton().click();
        });
    }
    chooseCallResultPatientNote(callResultPatientNote) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientPO().getCallResultNoteRadioButton(callResultPatientNote).click();
        });
    }
    selectSeverityType(callResultPatientNote, severityType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getSeverityTypeSelectDropdown().selectOption(severityType);
        });
    }
    selectOrderNote(callResultPatientNote, orderNoteType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getOrderNoteSelectDropdown().selectOption(orderNoteType);
        });
    }
    selectAssignTo(callResultPatientNote, assignTo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getAssignToSelectDropdown().selectOption(assignTo);
        });
    }
    selectNoteStatus(callResultPatientNote, noteStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getNoteStatusSelectDropdown().selectOption(noteStatus);
        });
    }
    selectDateNeeded(callResultPatientNote, dateNeeded) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getDateNeededInputField().selectDate(dateNeeded, isDatePickerSmall);
        });
    }
    fillNoteSubject(callResultPatientNote, noteSubject) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getNoteSubjectInputField().sendKeys(noteSubject);
        });
    }
    fillNoteDescription(callResultPatientNote, noteDescription) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getNoteDescriptionTextarea().sendKeys(noteDescription);
        });
    }
    fillCallResultPatientNote(callResultPatientNote, callResultPatientNoteInfo, resupplyOrderInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.chooseCallResultPatientNote(callResultPatientNote);
            if (callResultPatientNoteInfo.getSeverityType() != null) {
                yield this.selectSeverityType(callResultPatientNote, callResultPatientNoteInfo.getSeverityType());
            }
            if (callResultPatientNoteInfo.getOrderNote() != null) {
                yield this.selectOrderNote(callResultPatientNote, callResultPatientNoteInfo.getOrderNote());
            }
            if (callResultPatientNoteInfo.getAssignTo() != null) {
                yield this.selectAssignTo(callResultPatientNote, callResultPatientNoteInfo.getAssignTo());
            }
            if (callResultPatientNoteInfo.getNoteStatus() != null) {
                yield this.selectNoteStatus(callResultPatientNote, callResultPatientNoteInfo.getNoteStatus());
            }
            if (callResultPatientNoteInfo.getDateNeeded() != null) {
                yield this.selectDateNeeded(callResultPatientNote, callResultPatientNoteInfo.getDateNeeded());
            }
            if (callResultPatientNoteInfo.getNoteSubject() != null) {
                yield this.fillNoteSubject(callResultPatientNote, callResultPatientNoteInfo.getNoteSubject());
            }
            if (callResultPatientNoteInfo.getNoteDescription() != null) {
                yield this.fillNoteDescription(callResultPatientNote, callResultPatientNoteInfo.getNoteDescription());
            }
            yield this.getContactPatientPO().getCallResultPatientNoteForm(callResultPatientNote).getSaveButton().click();
            if (resupplyOrderInfo.getOrderOwner() != null) {
                yield this.getContactPatientPO().getWorkflowStatusModalDialog().selectOrderOwner(resupplyOrderInfo.getOrderOwner());
            }
            if (resupplyOrderInfo.getAssignTo() != null) {
                yield this.getContactPatientPO().getWorkflowStatusModalDialog().selectAssignTo(resupplyOrderInfo.getAssignTo());
            }
            if (resupplyOrderInfo.getStatus() != null) {
                yield this.getContactPatientPO().getWorkflowStatusModalDialog().selectStatus(resupplyOrderInfo.getStatus());
            }
            if (resupplyOrderInfo.getDateNeeded() != null) {
                yield this.getContactPatientPO().getWorkflowStatusModalDialog().selectDateNeeded(resupplyOrderInfo.getDateNeeded());
            }
            yield this.getContactPatientPO().getWorkflowStatusModalDialog().save();
        });
    }
}
exports.ContactPatientLib = ContactPatientLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBhdGllbnRMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9ob21lcGFnZS9yZXN1cHBsaWVzYnVja2V0L3Jlc3VwcGxpZXNjb250YWN0aW5mb3JtYXRpb25wYWdlL0NvbnRhY3RQYXRpZW50TGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpSUFBOEg7QUFROUgsMkNBQWdDO0FBRWhDLE1BQWEsaUJBQWlCO0lBRzFCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQUVELGdCQUFnQjtJQUVoQixhQUFhO0lBQ0MsaUNBQWlDOztZQUMzQyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLCtCQUErQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0UsQ0FBQztLQUFBO0lBRUsscUNBQXFDLENBQUMscUJBQTJDOztZQUNuRixNQUFNLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDO1lBRS9DLElBQUcscUJBQXFCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JELE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDbko7WUFFRCxJQUFHLHFCQUFxQixDQUFDLG9CQUFvQixFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNyRCxNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxD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