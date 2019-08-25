import { NoteSeverity } from "../enums/NoteSeverity";
import { OrderNoteType } from "../enums/OrderNoteType";
import { NoteStatus } from "../enums/NoteStatus";

export class CallResultPatientNoteInfo {
    private _severityType: NoteSeverity;
    public getSeverityType(): NoteSeverity {
        return this._severityType;
    }
    public setSeverityType(value: NoteSeverity) {
        this._severityType = value;
    }

    private _orderNote: OrderNoteType;
    public getOrderNote(): OrderNoteType {
        return this._orderNote;
    }
    public setOrderNote(value: OrderNoteType) {
        this._orderNote = value;
    }

    private _assignTo: string;
    public getAssignTo(): string {
        return this._assignTo;
    }
    public setAssignTo(value: string) {
        this._assignTo = value;
    }

    private _noteStatus: NoteStatus;
    public getNoteStatus(): NoteStatus {
        return this._noteStatus;
    }
    public setNoteStatus(value: NoteStatus) {
        this._noteStatus = value;
    }

    private _dateNeeded: Date;
    public getDateNeeded(): Date {
        return this._dateNeeded;
    }
    public setDateNeeded(value: Date) {
        this._dateNeeded = value;
    }

    private _noteSubject: string;
    public getNoteSubject(): string {
        return this._noteSubject;
    }
    public setNoteSubject(value: string) {
        this._noteSubject = value;
    }

    private _noteDescription: string;
    public getNoteDescription(): string {
        return this._noteDescription;
    }
    public setNoteDescription(value: string) {
        this._noteDescription = value;
    }
}