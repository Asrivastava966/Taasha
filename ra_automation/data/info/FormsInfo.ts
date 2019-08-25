import { DeliveryTicketFormInfo } from "./DeliveryTicketFormInfo";
import { ABNFormInfo } from "./ABNFormInfo";
import { PlanOfCareFormInfo } from "./PlanOfCareFormInfo";
import { PatientSurveyFormInfo } from "./PatientSurveyFormInfo";

export class FormsInfo {
    private _allFormsFlag: boolean;
    public getAllFormsFlag(): boolean {
        return this._allFormsFlag;
    }
    public setAllFormsFlag(value: boolean) {
        this._allFormsFlag = value;
    }

    private _deliveryTicketFormInfo: DeliveryTicketFormInfo;
    public getDeliveryTicketFormInfo(): DeliveryTicketFormInfo {
        return this._deliveryTicketFormInfo;
    }
    public setDeliveryTicketFormInfo(value: DeliveryTicketFormInfo) {
        this._deliveryTicketFormInfo = value;
    }

    private _abnFormInfo: ABNFormInfo;
    public getAbnFormInfo(): ABNFormInfo {
        return this._abnFormInfo;
    }
    public setAbnFormInfo(value: ABNFormInfo) {
        this._abnFormInfo = value;
    }

    private _planOfCareFormInfo: PlanOfCareFormInfo;
    public getPlanOfCareFormInfo(): PlanOfCareFormInfo {
        return this._planOfCareFormInfo;
    }
    public setPlanOfCareFormInfo(value: PlanOfCareFormInfo) {
        this._planOfCareFormInfo = value;
    }

    private _patientSurveyFormInfo: PatientSurveyFormInfo;
    public getPatientSurveyFormInfo(): PatientSurveyFormInfo {
        return this._patientSurveyFormInfo;
    }
    public setPatientSurveyFormInfo(value: PatientSurveyFormInfo) {
        this._patientSurveyFormInfo = value;
    }
}