"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const CallResultPatientNoteFormPO_1 = require("./CallResultPatientNoteFormPO");
const WorkflowStatusModalDialog_1 = require("../../../../component/comp/WorkflowStatusModalDialog");
const CancelResupplyOrderModalDialog_1 = require("../../../../component/comp/CancelResupplyOrderModalDialog");
class ContactPatientPO {
    getISpokeWithThePatientCheckbox() {
        return ContactPatientPO.iSpokeWithThePatientCheckbox;
    }
    getQuestionOneAnswers() {
        return ContactPatientPO.questionOneAnswers;
    }
    getQuestionTwoAnswers() {
        return ContactPatientPO.questionTwoAnswers;
    }
    getQuestionThreeAnswers() {
        return ContactPatientPO.questionThreeAnswers;
    }
    getQuestionFourAnswers() {
        return ContactPatientPO.questionFourAnswers;
    }
    getNextButton() {
        return ContactPatientPO.nextButton;
    }
    getCallResultNoteOptions() {
        return ContactPatientPO.callResultNoteOptions;
    }
    getCallResultNoteRadioButton(callResultPatientNote) {
        return this.getCallResultNoteOptions().get(callResultPatientNote).element(protractor_1.by.tagName('input'));
    }
    getCallResultPatientNoteForm(callResultPatientNote) {
        return new CallResultPatientNoteFormPO_1.CallResultPatientNoteFormPO(this.getCallResultNoteOptions().get(callResultPatientNote).element(protractor_1.by.tagName('form')));
    }
    getWorkflowStatusModalDialog() {
        return new WorkflowStatusModalDialog_1.WorkflowStatusModalDialog(ContactPatientPO.workflowStatusModalDialog);
    }
    getCancelResupplyOrderModalDialog() {
        return new CancelResupplyOrderModalDialog_1.CancelResupplyOrderModalDialog(ContactPatientPO.cancelResupplyOrderModalDialog);
    }
}
ContactPatientPO.contactPatientTabPanel = protractor_1.element(protractor_1.by.id('contactPatient'));
//Contact Number 
//Call Result 
ContactPatientPO.iSpokeWithThePatientCheckbox = protractor_1.element.all(protractor_1.by.name('callResult')).get(0);
ContactPatientPO.iSpokeWithThePatientQuestions = protractor_1.element.all(protractor_1.by.repeater('subQues in quest.childQuestionIds track by $index'));
ContactPatientPO.questionOneAreYouStillUsingEquipment = ContactPatientPO.iSpokeWithThePatientQuestions.get(1);
ContactPatientPO.questionOneDataInResponse = ContactPatientPO.questionOneAreYouStillUsingEquipment.all(protractor_1.by.repeater('data in questionResponse track by $index')).get(1);
ContactPatientPO.questionOneAnswers = ContactPatientPO.questionOneDataInResponse.all(protractor_1.by.repeater('ans in data.answerOptions track by $index'));
ContactPatientPO.questionTwoWouldYouLikeToOrderNewSupplies = ContactPatientPO.iSpokeWithThePatientQuestions.get(4);
ContactPatientPO.questionTwoDataInResponse = ContactPatientPO.questionTwoWouldYouLikeToOrderNewSupplies.all(protractor_1.by.repeater('data in questionResponse track by $index')).get(2);
ContactPatientPO.questionTwoAnswers = ContactPatientPO.questionTwoDataInResponse.all(protractor_1.by.repeater('ans in data.answerOptions track by $index'));
ContactPatientPO.questionThreeWouldYouLikeToDiscussWithRespiratoryTherapist = ContactPatientPO.iSpokeWithThePatientQuestions.get(7);
ContactPatientPO.questionThreeDataInResponse = ContactPatientPO.questionThreeWouldYouLikeToDiscussWithRespiratoryTherapist.all(protractor_1.by.repeater('data in questionResponse track by $index')).get(3);
ContactPatientPO.questionThreeAnswers = ContactPatientPO.questionThreeDataInResponse.all(protractor_1.by.repeater('ans in data.answerOptions track by $index'));
ContactPatientPO.questionFourHasThereBeenAnyInfoChange = ContactPatientPO.iSpokeWithThePatientQuestions.get(10);
ContactPatientPO.questionFourDataInResponse = ContactPatientPO.questionFourHasThereBeenAnyInfoChange.all(protractor_1.by.repeater('data in questionResponse track by $index')).get(4);
ContactPatientPO.questionFourAnswers = ContactPatientPO.questionFourDataInResponse.all(protractor_1.by.repeater('ans in data.answerOptions track by $index'));
ContactPatientPO.nextButton = ContactPatientPO.contactPatientTabPanel.element(protractor_1.by.buttonText('Next'));
ContactPatientPO.callResultNoteOptions = protractor_1.element.all(protractor_1.by.repeater('subject in defaultSubject track by $index'));
ContactPatientPO.workflowStatusModalDialog = protractor_1.element(protractor_1.by.className('modal-dialog'));
ContactPatientPO.cancelResupplyOrderModalDialog = protractor_1.element(protractor_1.by.className('modal-dialog'));
exports.ContactPatientPO = ContactPatientPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBhdGllbnRQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vaG9tZXBhZ2UvcmVzdXBwbGllc2J1Y2tldC9yZXN1cHBsaWVzY29udGFjdGluZm9ybWF0aW9ucGFnZS9Db250YWN0UGF0aWVudFBPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlDO0FBQ3pDLCtFQUE0RTtBQUU1RSxvR0FBaUc7QUFDakcsOEdBQTJHO0FBRTNHLE1BQWEsZ0JBQWdCO0lBT3pCLCtCQUErQjtRQUMzQixPQUFPLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDO0lBQ3pELENBQUM7SUFRRCxxQkFBcUI7UUFDakIsT0FBTyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUMvQyxDQUFDO0lBTUQscUJBQXFCO1FBQ2pCLE9BQU8sZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7SUFDL0MsQ0FBQztJQU1ELHVCQUF1QjtRQUNuQixPQUFPLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0lBQ2pELENBQUM7SUFNRCxzQkFBc0I7UUFDbEIsT0FBTyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUNoRCxDQUFDO0lBSUQsYUFBYTtRQUNULE9BQU8sZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7SUFHRCx3QkFBd0I7UUFDcEIsT0FBTyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUNsRCxDQUFDO0lBRUQsNEJBQTRCLENBQUMscUJBQTJDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsNEJBQTRCLENBQUMscUJBQTJDO1FBQ3BFLE9BQU8sSUFBSSx5REFBMkIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVB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