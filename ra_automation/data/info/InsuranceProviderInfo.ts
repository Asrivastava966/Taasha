import { InsuranceProviderGroup } from "../enums/InsuranceProviderGroup";
import { Status } from "../enums/Status";
import { InsuranceProviderTaxType } from "../enums/InsuranceProviderTaxType";

export class InsuranceProviderInfo {
    
    //General Info
    private _providerName: string;
    public getProviderName(): string {
        return this._providerName;
    }
    public setProviderName(value: string) {
        this._providerName = value;
    }

    private _group: InsuranceProviderGroup;
    public getGroup(): InsuranceProviderGroup {
        return this._group;
    }
    public setGroup(value: InsuranceProviderGroup) {
        this._group = value;
    }

    private _status: Status;
    public getStatus(): Status {
        return this._status;
    }
    public setStatus(value: Status) {
        this._status = value;
    }

    private _legacyId: string;
    public getLegacyId(): string {
        return this._legacyId;
    }
    public setLegacyId(value: string) {
        this._legacyId = value;
    }

    private _taxType: InsuranceProviderTaxType;
    public getTaxType(): InsuranceProviderTaxType {
        return this._taxType;
    }
    public setTaxType(value: InsuranceProviderTaxType) {
        this._taxType = value;
    }

    private _npi: number;
    public getNpi(): number {
        return this._npi;
    }
    public setNpi(value: number) {
        this._npi = value;
    }

    private _website: string;
    public getWebsite(): string {
        return this._website;
    }
    public setWebsite(value: string) {
        this._website = value;
    }

    private _providerNumber: number;
    public getProviderNumber(): number {
        return this._providerNumber;
    }
    public setProviderNumber(value: number) {
        this._providerNumber = value;
    }

    private _medicareFeeScheduleCheckbox: boolean;
    public getMedicareFeeScheduleCheckbox(): boolean {
        return this._medicareFeeScheduleCheckbox;
    }
    public setMedicareFeeScheduleCheckbox(value: boolean) {
        this._medicareFeeScheduleCheckbox = value;
    }

    private _feeSchedule: string;
    public getFeeSchedule(): string {
        return this._feeSchedule;
    }
    public setFeeSchedule(value: string) {
        this._feeSchedule = value;
    }

    private _branchOfficeSelectAllCheckbox: boolean;
    public getBranchOfficeSelectAllCheckbox(): boolean {
        return this._branchOfficeSelectAllCheckbox;
    }
    public setBranchOfficeSelectAllCheckbox(value: boolean) {
        this._branchOfficeSelectAllCheckbox = value;
    }

    private _branchOffice: string;
    public getBranchOffice(): string {
        return this._branchOffice;
    }
    public setBranchOffice(value: string) {
        this._branchOffice = value;
    }

    //Insurance Note
    private _notes: string;
    public getNotes(): string {
        return this._notes;
    }
    public setNotes(value: string) {
        this._notes = value;
    }

    //Contact Info
    private _phoneNumber: number;
    public getPhoneNumber(): number {
        return this._phoneNumber;
    }
    public setPhoneNumber(value: number) {
        this._phoneNumber = value;
    }

    private _phoneExtNumber: number;
    public getPhoneExtNumber(): number {
        return this._phoneExtNumber;
    }
    public setPhoneExtNumber(value: number) {
        this._phoneExtNumber = value;
    }

    private _email: string;
    public getEmail(): string {
        return this._email;
    }
    public setEmail(value: string) {
        this._email = value;
    }
}