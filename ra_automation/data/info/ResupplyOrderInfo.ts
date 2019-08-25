import { ResupplyOrderWorkflowStatus } from "../enums/ResupplyOrderWorkflowStatus";

export class ResupplyOrderInfo {
    private _orderOwner: string; 
    public getOrderOwner(): string {
        return this._orderOwner;
    }
    public setOrderOwner(value: string) {
        this._orderOwner = value;
    }

    private _assignTo: string; 
    public getAssignTo(): string {
        return this._assignTo;
    }
    public setAssignTo(value: string) {
        this._assignTo = value;
    }

    private _status: ResupplyOrderWorkflowStatus; 
    public getStatus(): ResupplyOrderWorkflowStatus {
        return this._status;
    }
    public setStatus(value: ResupplyOrderWorkflowStatus) {
        this._status = value;
    }

    private _dateNeeded: Date;
    public getDateNeeded(): Date {
        return this._dateNeeded;
    }
    public setDateNeeded(value: Date) {
        this._dateNeeded = value;
    }
}