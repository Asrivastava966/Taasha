import { SkillSet } from "../enums/SkillSet";
import { TechnicianType } from "../enums/TechnicianType";
import { Status } from "../enums/Status";

export class TechnicianInfo {
    private _skillSet: SkillSet;
    public getSkillSet(): SkillSet {
        return this._skillSet;
    }
    public setSkillSet(value: SkillSet) {
        this._skillSet = value;
    }

    private _technicianType: TechnicianType;
    public getTechnicianType(): TechnicianType {
        return this._technicianType;
    }
    public setTechnicianType(value: TechnicianType) {
        this._technicianType = value;
    }

    private _status: Status;
    public getStatus(): Status {
        return this._status;
    }
    public setStatus(value: Status) {
        this._status = value;
    }

    private _warehouseSelectAllCheckbox: boolean;
    public getWarehouseSelectAllCheckbox(): boolean {
        return this._warehouseSelectAllCheckbox;
    }
    public setWarehouseSelectAllCheckbox(value: boolean) {
        this._warehouseSelectAllCheckbox = value;
    }

    private _notes: string;
    public getNotes(): string {
        return this._notes;
    }
    public setNotes(value: string) {
        this._notes = value;
    }
}