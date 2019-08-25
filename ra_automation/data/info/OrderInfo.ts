import { OrderType } from "../enums/OrderType";
import { OrderWorkflowStatus } from "../enums/OrderWorkflowStatus";

export class OrderInfo{
    private _orderType: OrderType;
    private _workflowStatus: OrderWorkflowStatus;
    private _orderOwner: string;
    private _assignTo: string;
    private _branchOffice: string;
    private _billingOrSetupDate: Date;

    public getOrderType(): OrderType {
        return this._orderType;
    }

    public setOrderType(value: OrderType) {
        this._orderType = value;
    }

    public getWorkflowStatus(): OrderWorkflowStatus {
        return this._workflowStatus;
    }

    public setWorkflowStatus(value: OrderWorkflowStatus) {
        this._workflowStatus = value;
    }

    public getOrderOwner(): string {
        return this._orderOwner;
    }

    public setOrderOwner(value: string) {
        this._orderOwner = value;
    }

    public getAssignTo(): string {
        return this._assignTo;
    }

    public setAssignTo(value: string) {
        this._assignTo = value;
    }

    public getBranchOffice(): string {
        return this._branchOffice;
    }

    public setBranchOffice(value: string) {
        this._branchOffice = value;
    }

    public getBillingOrSetupDate(): Date {
        return this._billingOrSetupDate;
    }

    public setBillingOrSetupDate(value: Date) {
        this._billingOrSetupDate = value;
    }
}