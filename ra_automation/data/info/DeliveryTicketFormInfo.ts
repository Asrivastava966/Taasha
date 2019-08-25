import { Relationship } from "../enums/Relationship";

export class DeliveryTicketFormInfo {
    private _patientSign: boolean;
    public getPatientSign(): boolean {
        return this._patientSign;
    }
    public setPatientSign(value: boolean) {
        this._patientSign = value;
    }

    private _date: Date;
    public getDate(): Date {
        return this._date;
    }
    public setDate(value: Date) {
        this._date = value;
    }

    private _relationship: Relationship;
    public getRelationship(): Relationship {
        return this._relationship;
    }
    public setRelationship(value: Relationship) {
        this._relationship = value;
    }

    private _reason: string;
    public getReason(): string {
        return this._reason;
    }
    public setReason(value: string) {
        this._reason = value;
    }

    private _technicianNotes: string;
    public getTechnicianNotes(): string {
        return this._technicianNotes;
    }
    public setTechnicianNotes(value: string) {
        this._technicianNotes = value;
    }
}