import { UserStatus } from "../enums/UserStatus";
import { UserType } from "../enums/UserType";
import { Gender } from "../enums/Gender";
import { AddressType } from "../enums/AddressType";
import { TechnicianType } from "../enums/TechnicianType";
import { SkillSet } from "../enums/SkillSet";

export class UserInfo {
    private _userName: string;
    public getUserName(): string {
        return this._userName;
    }
    public setUserName(value: string) {
        this._userName = value;
    }

    private _password: string;
    public getPassword(): string {
        return this._password;
    }
    public setPassword(value: string) {
        this._password = value;
    }

    private _repeatPassword: string;
    public getRepeatPassword(): string {
        return this._repeatPassword;
    }
    public setRepeatPassword(value: string) {
        this._repeatPassword = value;
    }

    private _status: UserStatus;
    public getStatus(): UserStatus {
        return this._status;
    }
    public setStatus(value: UserStatus) {
        this._status = value;
    }

    private _branchOffice: string;
    public getBranchOffice(): string {
        return this._branchOffice;
    }
    public setBranchOffice(value: string) {
        this._branchOffice = value;
    }

    private _branchOfficeSelectAllCheckbox: boolean;
    public getBranchOfficeSelectAllCheckbox(): boolean {
        return this._branchOfficeSelectAllCheckbox;
    }
    public setBranchOfficeSelectAllCheckbox(value: boolean) {
        this._branchOfficeSelectAllCheckbox = value;
    }

    private _userType: UserType;
    public getUserType(): UserType {
        return this._userType;
    }
    public setUserType(value: UserType) {
        this._userType = value;
    }

    private _role: string;
    public getRole(): string {
        return this._role;
    }
    public setRole(value: string) {
        this._role = value;
    }

    private _firstName: string;
    public getFirstName(): string {
        return this._firstName;
    }
    public setFirstName(value: string) {
        this._firstName = value;
    }

    private _mi: string;
    public getMi(): string {
        return this._mi;
    }
    public setMi(value: string) {
        this._mi = value;
    }

    private _lastName: string;
    public getLastName(): string {
        return this._lastName;
    }
    public setLastName(value: string) {
        this._lastName = value;
    }

    private _birthDate: Date;
    public getBirthDate(): Date {
        return this._birthDate;
    }
    public setBirthDate(value: Date) {
        this._birthDate = value;
    }

    private _gender: Gender;
    public getGender(): Gender {
        return this._gender;
    }
    public setGender(value: Gender) {
        this._gender = value;
    }

    private _addressType: AddressType;
    public getAddressType(): AddressType {
        return this._addressType;
    }
    public setAddressType(value: AddressType) {
        this._addressType = value;
    }

    private _addressOne: string;
    public getAddressOne(): string {
        return this._addressOne;
    }
    public setAddressOne(value: string) {
        this._addressOne = value;
    }

    private _addressTwo: string;
    public getAddressTwo(): string {
        return this._addressTwo;
    }
    public setAddressTwo(value: string) {
        this._addressTwo = value;
    }

    private _city: string;
    public getCity(): string {
        return this._city;
    }
    public setCity(value: string) {
        this._city = value;
    }

    private _state: string;
    public getState(): string {
        return this._state;
    }
    public setState(value: string) {
        this._state = value;
    }

    private _zipCode: string;
    public getZipCode(): string {
        return this._zipCode;
    }
    public setZipCode(value: string) {
        this._zipCode = value;
    }

    private _homePhoneNumber: string;
    public getHomePhoneNumber(): string {
        return this._homePhoneNumber;
    }
    public setHomePhoneNumber(value: string) {
        this._homePhoneNumber = value;
    }

    private _officePhoneNumber: string;
    public getOfficePhoneNumber(): string {
        return this._officePhoneNumber;
    }
    public setOfficePhoneNumber(value: string) {
        this._officePhoneNumber = value;
    }

    private _officePhoneExtNumber: string;
    public getOfficePhoneExtNumber(): string {
        return this._officePhoneExtNumber;
    }
    public setOfficePhoneExtNumber(value: string) {
        this._officePhoneExtNumber = value;
    }

    private _mobileNumber: string;
    public getMobileNumber(): string {
        return this._mobileNumber;
    }
    public setMobileNumber(value: string) {
        this._mobileNumber = value;
    }

    private _faxNumber: string;
    public getFaxNumber(): string {
        return this._faxNumber;
    }
    public setFaxNumber(value: string) {
        this._faxNumber = value;
    }

    private _email: string;
    public getEmail(): string {
        return this._email;
    }
    public setEmail(value: string) {
        this._email = value;
    }

    private _secondaryEmail: string;
    public getSecondaryEmail(): string {
        return this._secondaryEmail;
    }
    public setSecondaryEmail(value: string) {
        this._secondaryEmail = value;
    }

    private _technicianType: TechnicianType;
    public getTechnicianType(): TechnicianType {
        return this._technicianType;
    }
    public setTechnicianType(value: TechnicianType) {
        this._technicianType = value;
    }

    private _skillSet: SkillSet;
    public getSkillSet(): SkillSet {
        return this._skillSet;
    }
    public setSkillSet(value: SkillSet) {
        this._skillSet = value;
    }

    private _warehouseSelectAllFlag: boolean;
    public getWarehouseSelectAllFlag(): boolean {
        return this._warehouseSelectAllFlag;
    }
    public setWarehouseSelectAllFlag(value: boolean) {
        this._warehouseSelectAllFlag = value;
    }
}