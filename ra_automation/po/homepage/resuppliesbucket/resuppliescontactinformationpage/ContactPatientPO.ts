import { element, by } from "protractor";
import { CallResultPatientNoteFormPO } from "./CallResultPatientNoteFormPO";
import { CallResultPatientNote } from "../../../../data/enums/CallResultPatientNote";
import { WorkflowStatusModalDialog } from "../../../../component/comp/WorkflowStatusModalDialog";
import { CancelResupplyOrderModalDialog } from "../../../../component/comp/CancelResupplyOrderModalDialog";

export class ContactPatientPO {
    private static contactPatientTabPanel = element(by.id('contactPatient'));
    
    //Contact Number 

    //Call Result 
    private static iSpokeWithThePatientCheckbox = element.all(by.name('callResult')).get(0);
    getISpokeWithThePatientCheckbox() {
        return ContactPatientPO.iSpokeWithThePatientCheckbox;
    }

    private static iSpokeWithThePatientQuestions = element.all(by.repeater('subQues in quest.childQuestionIds track by $index'));

    private static questionOneAreYouStillUsingEquipment = ContactPatientPO.iSpokeWithThePatientQuestions.get(1);
    private static questionOneDataInResponse = ContactPatientPO.questionOneAreYouStillUsingEquipment.all(by.repeater('data in questionResponse track by $index')).get(1);
    private static questionOneAnswers = ContactPatientPO.questionOneDataInResponse.all(by.repeater('ans in data.answerOptions track by $index'));

    getQuestionOneAnswers() {
        return ContactPatientPO.questionOneAnswers;
    }

    private static questionTwoWouldYouLikeToOrderNewSupplies = ContactPatientPO.iSpokeWithThePatientQuestions.get(4);
    private static questionTwoDataInResponse = ContactPatientPO.questionTwoWouldYouLikeToOrderNewSupplies.all(by.repeater('data in questionResponse track by $index')).get(2);
    private static questionTwoAnswers = ContactPatientPO.questionTwoDataInResponse.all(by.repeater('ans in data.answerOptions track by $index'));

    getQuestionTwoAnswers() {
        return ContactPatientPO.questionTwoAnswers;
    }

    private static questionThreeWouldYouLikeToDiscussWithRespiratoryTherapist = ContactPatientPO.iSpokeWithThePatientQuestions.get(7);
    private static questionThreeDataInResponse = ContactPatientPO.questionThreeWouldYouLikeToDiscussWithRespiratoryTherapist.all(by.repeater('data in questionResponse track by $index')).get(3);
    private static questionThreeAnswers = ContactPatientPO.questionThreeDataInResponse.all(by.repeater('ans in data.answerOptions track by $index'));

    getQuestionThreeAnswers() {
        return ContactPatientPO.questionThreeAnswers;
    }

    private static questionFourHasThereBeenAnyInfoChange = ContactPatientPO.iSpokeWithThePatientQuestions.get(10); 
    private static questionFourDataInResponse = ContactPatientPO.questionFourHasThereBeenAnyInfoChange.all(by.repeater('data in questionResponse track by $index')).get(4);
    private static questionFourAnswers = ContactPatientPO.questionFourDataInResponse.all(by.repeater('ans in data.answerOptions track by $index'));

    getQuestionFourAnswers() {
        return ContactPatientPO.questionFourAnswers;
    }

    private static nextButton = ContactPatientPO.contactPatientTabPanel.element(by.buttonText('Next'));

    getNextButton() {
        return ContactPatientPO.nextButton;
    }

    private static callResultNoteOptions = element.all(by.repeater('subject in defaultSubject track by $index'));
    getCallResultNoteOptions() {
        return ContactPatientPO.callResultNoteOptions;
    }

    getCallResultNoteRadioButton(callResultPatientNote:CallResultPatientNote) {
        return this.getCallResultNoteOptions().get(callResultPatientNote).element(by.tagName('input'));
    }

    getCallResultPatientNoteForm(callResultPatientNote:CallResultPatientNote) {
        return new CallResultPatientNoteFormPO(this.getCallResultNoteOptions().get(callResultPatientNote).element(by.tagName('form')));
    }

    private static workflowStatusModalDialog = element(by.className('modal-dialog'));
    getWorkflowStatusModalDialog() {
        return new WorkflowStatusModalDialog(ContactPatientPO.workflowStatusModalDialog);
    }

    private static cancelResupplyOrderModalDialog = element(by.className('modal-dialog'));
    getCancelResupplyOrderModalDialog() {
        return new CancelResupplyOrderModalDialog(ContactPatientPO.cancelResupplyOrderModalDialog);
    }
}