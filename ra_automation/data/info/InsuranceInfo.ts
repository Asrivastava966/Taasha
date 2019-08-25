import { InsuranceType } from "../enums/InsuranceType";
import { InsurancePlanType } from "../enums/InsurancePlanType";
import { InsuranceInfoRelationship } from "../enums/InsuranceInfoRelationship";
import { Gender } from "../enums/Gender";

export class InsuranceInfo {
    private _insuranceType: InsuranceType; 
    private _provider: string;
    private _policyNumber: number; 
    private _groupNumber: number; 
    private _planType: InsurancePlanType; 
    private _relationship: InsuranceInfoRelationship;
    private _startDate: Date; 
    private _endDate: Date; 
    private _lastName: string;
    private _firstName: string;
    private _birthDate: Date;
    private _gender: Gender;

    public getInsuranceType(): InsuranceType {
        return this._insuranceType;
    }
    public setInsuranceType(value: InsuranceType) {
        this._insuranceType = value;
    }

    public getProvider(): string {
        return this._provider;
    }
    public setProvider(value: string) {
        this._provider = value;
    }
    public getPolicyNumber(): number {
        return this._policyNumber;
    }
    public setPolicyNumber(value: number) {
        this._policyNumber = value;
    }

    public getGroupNumber(): number {
        return this._groupNumber;
    }
    public setGroupNumber(value: number) {
        this._groupNumber = value;
    }

    public getPlanType(): InsurancePlanType {
        return this._planType;
    }
    public setPlanType(value: InsurancePlanType) {
        this._planType = value;
    }

    public getRelationship(): InsuranceInfoRelationship {
        return this._relationship;
    }
    public setRelationship(value: InsuranceInfoRelationship) {
        this._relationship = value;
    }

    public getEndDate(): Date {
        return this._endDate;
    }
    public setEndDate(value: Date) {
        this._endDate = value;
    }

    public getLastName(): string{
       return this._lastName;
    }
    public setLastName(value:string){
        this._lastName=value;
    }
    public getFirstName(): string{
        return this._firstName;
    }
    public setFirstName(value:string){
        this._firstName=value;
    }
    public getBirthdate(): Date{
        return this._birthDate;
    }
    public setBirthDate(value: Date){
        this._birthDate= value;
    }
    public getStartDate(): Date {
        return this._startDate;
    }
    public setStartDate(value: Date) {
        this._startDate = value;
    }

    public getGender():Gender{
        return this._gender;
    }
    public setGender(value:Gender){
        this._gender=value;
    }
}