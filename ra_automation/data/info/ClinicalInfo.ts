export class ClinicalInfo {
    
    //Doctor Info
    private _orderingDoctorName: string;
    private _facility: string;
    private _primaryDoctorName: string; 
    private _salesRepName: string;
    
    public getOrderingDoctorName(): string {
        return this._orderingDoctorName;
    }

    public setOrderingDoctorName(value: string) {
        this._orderingDoctorName = value;
    }

    public getFacility(): string {
        return this._facility;
    }

    public setFacility(value: string) {
        this._facility = value;
    }

    public getPrimaryDoctorName(): string {
        return this._primaryDoctorName;
    }

    public setPrimaryDoctorName(value: string) {
        this._primaryDoctorName = value;
    }

    public getSalesRepName(): string {
        return this._salesRepName;
    }

    public setSalesRepName(value: string) {
        this._salesRepName = value;
    }
}