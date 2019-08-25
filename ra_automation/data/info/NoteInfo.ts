import { NoteType } from "../enums/NoteType";
import { NoteSeverity } from "../enums/NoteSeverity";
import { NoteStatus } from "../enums/NoteStatus";
import { NoteReason } from "../enums/NoteReason";
import { OrderNoteType } from "../enums/OrderNoteType";

export class NoteInfo {
    
    private _noteType: NoteType;
    private _orderNoteType: OrderNoteType;
    private _severity: NoteSeverity;
    private _assignTo: string;
    private _dateCreated: Date;
    private _noteStatus: NoteStatus;
    private _noteReason: NoteReason;
    private _dateNeeded: Date;
    private _noteSubject: string;
    private _noteDescription: string;
    private _comment: string;

    public getNoteType(): NoteType {
        return this._noteType;
    }

    public setNoteType(value: NoteType) {
        this._noteType = value;
    }

    public getOrderNoteType(): OrderNoteType {
        return this._orderNoteType;
    }

    public setOrderNoteType(value: OrderNoteType) {
        this._orderNoteType = value;
    }

    public getSeverity(): NoteSeverity {
        return this._severity;
    }

    public setSeverity(value: NoteSeverity) {
        this._severity = value;
    }

    public getAssignTo(): string {
        return this._assignTo;
    }

    public setAssignTo(value: string) {
        this._assignTo = value;
    }

    public getDateCreated(): Date {
        return this._dateCreated;
    }

    public setDateCreated(value: Date) {
        this._dateCreated = value;
    }

    public getNoteStatus(): NoteStatus {
        return this._noteStatus;
    }

    public setNoteStatus(value: NoteStatus) {
        this._noteStatus = value;
    }

    public getNoteReason(): NoteReason {
        return this._noteReason;
    }

    public setNoteReason(value: NoteReason) {
        this._noteReason = value;
    }

    public getDateNeeded(): Date {
        return this._dateNeeded;
    }

    public setDateNeeded(value: Date) {
        this._dateNeeded = value;
    }

    public getNoteSubject(): string {
        return this._noteSubject;
    }

    public setNoteSubject(value: string) {
        this._noteSubject = value;
    }

    public getNoteDescription(): string {
        return this._noteDescription;
    }

    public setNoteDescription(value: string) {
        this._noteDescription = value;
    }

    public getComment(): string {
        return this._comment;
    }
    
    public setComment(value: string) {
        this._comment = value;
    }
}