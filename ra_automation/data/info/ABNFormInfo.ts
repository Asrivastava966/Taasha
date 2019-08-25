export class ABNFormInfo {
    private _signatureFlag: boolean;
    public getSignatureFlag(): boolean {
        return this._signatureFlag;
    }
    public setSignatureFlag(value: boolean) {
        this._signatureFlag = value;
    }

    private _date: Date;
    public getDate(): Date {
        return this._date;
    }
    public setDate(value: Date) {
        this._date = value;
    }
}