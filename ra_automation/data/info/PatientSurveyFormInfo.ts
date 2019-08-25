import { PatientSatisfactionSurveyRatings } from "../enums/PatientSatisfactionSurveyRatings";

export class PatientSurveyFormInfo {
    private _questionAboutCSPhoneStaff: PatientSatisfactionSurveyRatings;
    public getQuestionAboutCSPhoneStaff(): PatientSatisfactionSurveyRatings {
        return this._questionAboutCSPhoneStaff;
    }
    public setQuestionAboutCSPhoneStaff(value: PatientSatisfactionSurveyRatings) {
        this._questionAboutCSPhoneStaff = value;
    }

    private _questionAboutTimelyDelivery: PatientSatisfactionSurveyRatings;
    public getQuestionAboutTimelyDelivery(): PatientSatisfactionSurveyRatings {
        return this._questionAboutTimelyDelivery;
    }
    public setQuestionAboutTimelyDelivery(value: PatientSatisfactionSurveyRatings) {
        this._questionAboutTimelyDelivery = value;
    }

    private _questionIfOrderWasComplete: PatientSatisfactionSurveyRatings;
    public getQuestionIfOrderWasComplete(): PatientSatisfactionSurveyRatings {
        return this._questionIfOrderWasComplete;
    }
    public setQuestionIfOrderWasComplete(value: PatientSatisfactionSurveyRatings) {
        this._questionIfOrderWasComplete = value;
    }

    private _questionAboutDeliveryStaffEtiquette: PatientSatisfactionSurveyRatings;
    public getQuestionAboutDeliveryStaffEtiquette(): PatientSatisfactionSurveyRatings {
        return this._questionAboutDeliveryStaffEtiquette;
    }
    public setQuestionAboutDeliveryStaffEtiquette(value: PatientSatisfactionSurveyRatings) {
        this._questionAboutDeliveryStaffEtiquette = value;
    }

    private _questionAboutProductSupplyAndServices: PatientSatisfactionSurveyRatings;
    public getQuestionAboutProductSupplyAndServices(): PatientSatisfactionSurveyRatings {
        return this._questionAboutProductSupplyAndServices;
    }
    public setQuestionAboutProductSupplyAndServices(value: PatientSatisfactionSurveyRatings) {
        this._questionAboutProductSupplyAndServices = value;
    }

    private _questionAboutHowToInstructionsForEquipments: PatientSatisfactionSurveyRatings;
    public getQuestionAboutHowToInstructionsForEquipments(): PatientSatisfactionSurveyRatings {
        return this._questionAboutHowToInstructionsForEquipments;
    }
    public setQuestionAboutHowToInstructionsForEquipments(value: PatientSatisfactionSurveyRatings) {
        this._questionAboutHowToInstructionsForEquipments = value;
    }

    private _questionAboutGenericQueryResolution: PatientSatisfactionSurveyRatings;
    public getQuestionAboutGenericQueryResolution(): PatientSatisfactionSurveyRatings {
        return this._questionAboutGenericQueryResolution;
    }
    public setQuestionAboutGenericQueryResolution(value: PatientSatisfactionSurveyRatings) {
        this._questionAboutGenericQueryResolution = value;
    }

    private _additionalFeedback: string;
    public getAdditionalFeedback(): string {
        return this._additionalFeedback;
    }
    public setAdditionalFeedback(value: string) {
        this._additionalFeedback = value;
    }

    private _patientSignature: boolean;
    public getPatientSignature(): boolean {
        return this._patientSignature;
    }
    public setPatientSignature(value: boolean) {
        this._patientSignature = value;
    }
}