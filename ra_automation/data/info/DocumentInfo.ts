import { DocumentType } from "../enums/DocumentType";

export class DocumentInfo {
    private _documentPath: string;
    private _documentType: DocumentType;
    private _orderIndex: number;
    private _notes: string;

    public getDocumentPath(): string {
        return this._documentPath;
    }

    public setDocumentPath(value: string) {
        this._documentPath = value;
    }

    public getDocumentType(): DocumentType {
        return this._documentType;
    }

    public setDocumentType(value: DocumentType) {
        this._documentType = value;
    }

    public getOrderIndex(): number {
        return this._orderIndex;
    }

    public setOrderIndex(value: number) {
        this._orderIndex = value;
    }

    public getNotes(): string {
        return this._notes;
    }

    public setNotes(value: string) {
        this._notes = value;
    }
}