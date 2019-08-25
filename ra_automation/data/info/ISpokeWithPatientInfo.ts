import { ISpokeWithPatientAnswers } from "../enums/ISpokeWithPatientAnswers";

export class ISpokeWithPatientInfo {
    private _questionOneAnswer: ISpokeWithPatientAnswers;
    public getQuestionOneAnswer(): ISpokeWithPatientAnswers {
        return this._questionOneAnswer;
    }
    public setQuestionOneAnswer(value: ISpokeWithPatientAnswers) {
        this._questionOneAnswer = value;
    }

    private _questionTwoAnswer: ISpokeWithPatientAnswers;
    public getQuestionTwoAnswer(): ISpokeWithPatientAnswers {
        return this._questionTwoAnswer;
    }
    public setQuestionTwoAnswer(value: ISpokeWithPatientAnswers) {
        this._questionTwoAnswer = value;
    }

    private _questionThreeAnswer: ISpokeWithPatientAnswers;
    public getQuestionThreeAnswer(): ISpokeWithPatientAnswers {
        return this._questionThreeAnswer;
    }
    public setQuestionThreeAnswer(value: ISpokeWithPatientAnswers) {
        this._questionThreeAnswer = value;
    }

    private _questionFourAnswer: ISpokeWithPatientAnswers;
    public getQuestionFourAnswer(): ISpokeWithPatientAnswers {
        return this._questionFourAnswer;
    }
    public setQuestionFourAnswer(value: ISpokeWithPatientAnswers) {
        this._questionFourAnswer = value;
    }
}