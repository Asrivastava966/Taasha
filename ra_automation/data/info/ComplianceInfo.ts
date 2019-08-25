import { PAPType } from '../enums/PAPType';
import { PAPModel } from '../enums/PAPModel';

export class ComplianceInfo {
    private _dmeOffice: string; 
    public getDmeOffice(): string {
        return this._dmeOffice;
    }
    public setDmeOffice(value: string) {
        this._dmeOffice = value;
    }
    private _clinicalUser: string; 
    public getClinicalUser(): string {
        return this._clinicalUser;
    }
    public setClinicalUser(value: string) {
        this._clinicalUser = value;
    }
    private _sleepDoctor: string;
    public getSleepDoctor(): string {
        return this._sleepDoctor;
    }
    public setSleepDoctor(value: string) {
        this._sleepDoctor = value;
    }
    private _sleepLab: string;
    public getSleepLab(): string {
        return this._sleepLab;
    }
    public setSleepLab(value: string) {
        this._sleepLab = value;
    }
    private _primaryCarePhysician: string;
    public getPrimaryCarePhysician(): string {
        return this._primaryCarePhysician;
    }
    public setPrimaryCarePhysician(value: string) {
        this._primaryCarePhysician = value;
    }

    //Respironics
    private _papType: PAPType;
    public getPapType(): PAPType {
        return this._papType;
    }
    public setPapType(value: PAPType) {
        this._papType = value;
    }
    private _papModel: PAPModel;
    public getPapModel(): PAPModel {
        return this._papModel;
    }
    public setPapModel(value: PAPModel) {
        this._papModel = value;
    }
    private _respironicsPapSerialNumber: string;
    public getRespironicsPapSerialNumber(): string {
        return this._respironicsPapSerialNumber;
    }
    public setRespironicsPapSerialNumber(value: string) {
        this._respironicsPapSerialNumber = value;
    }

    //Resmed
    private _resmedPapSerialNumber: string;
    public getResmedPapSerialNumber(): string {
        return this._resmedPapSerialNumber;
    }
    public setResmedPapSerialNumber(value: string) {
        this._resmedPapSerialNumber = value;
    }
    private _deviceNumber: string;
    public getDeviceNumber(): string {
        return this._deviceNumber;
    }
    public setDeviceNumber(value: string) {
        this._deviceNumber = value;
    }
}