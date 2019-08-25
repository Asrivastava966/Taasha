export class SalesRepInfo {
    private _legacySalesID: string;
    public getLegacySalesID(): string {
        return this._legacySalesID;
    }
    public setLegacySalesID(value: string) {
        this._legacySalesID = value;
    }

    private _phone: number; 
    public getPhone(): number {
        return this._phone;
    }
    public setPhone(value: number) {
        this._phone = value;
    }

    private _ext: number;
    public getExt(): number {
        return this._ext;
    }
    public setExt(value: number) {
        this._ext = value;
    }
}