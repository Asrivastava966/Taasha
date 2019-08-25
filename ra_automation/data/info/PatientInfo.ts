import { Gender } from "../enums/Gender";
import { PatientStatus } from "../enums/PatientStatus";

export class PatientInfo{
	private firstName:string;
    private mi:string;
    private lastName:string;
    private birthDate:Date;
    private gender:Gender;
    private status:PatientStatus;
	private branchOffice:string;
	private legacyId:string;
	private custom:string;
	private email:string;

	//Billing Address
	private addressOne:string;
	private addressTwo:string;
	private city:string;
	private state:string;
	private zipCode:string;
	private timeZone:string;

	//Delivery Address 
	private commonAddressCheckbox:boolean;

	public getFirstName(): string {
		return this.firstName;
	}

	public setFirstName(value: string) {
		this.firstName = value;
	}

  	public getLastName(): string {
		return this.lastName;
	}

	public setLastName(value: string) {
		this.lastName = value;
  	}
 
  	public getMI(): string {
		return this.mi;
	}

	public setMI(value: string) {
		this.mi = value;
	}

  	public getBirthDate(): Date {
		return this.birthDate;
	}

	public setBirthDate(date: Date) {
		this.birthDate = date;
  	}
    
	public getGender(): Gender {
		return this.gender;
	}

	public setGender(gender: Gender) {
		this.gender = gender;
	}

  	public getStatus(): PatientStatus {
		return this.status;
	}

	public setStatus(status: PatientStatus) {
		this.status = status;
	}

  	public getBranchOffice(): string {
		return this.branchOffice;
	}

	public setBranchOffice(value: string) {
		this.branchOffice = value;
	}

	public getLegacyId(): string {
		return this.legacyId;
	}

	public setLegacyId(value: string) {
		this.legacyId = value;
	}

	public getCustom(): string {
		return this.custom;
	}

	public setCustom(value: string) {
		this.custom = value;
	}

	public getEmail(): string {
		return this.email;
	}

	public setEmail(value: string) {
		this.email = value;
	}

	//Billing Address 
	public getAddressOne() {
		return this.addressOne;
	}

	public setAddressOne(address:string) {
		this.addressOne = address;
	}

	public getAddressTwo() {
		return this.addressTwo;
	}

	public setAddressTwo(address:string) {
		this.addressTwo = address;
	}

	public getCity() {
		return this.city;
	}

	public setCity(cityName:string) {
		this.city = cityName;
	}

	public getState() {
		return this.state;
	}

	public setState(stateName:string) {
		this.state = stateName;
	}

	public getZipCode() {
		return this.zipCode;
	}

	public setZipCode(zipCode:string) {
		this.zipCode = zipCode;
	}

	public getTimeZone() {
		return this.timeZone;
	}

	public setTimeZone(timeZone:string) {
		this.timeZone = timeZone;
	}

	//Delivery Address 
	public getCommonAddressCheckboxValue() {
		return this.commonAddressCheckbox;
	}

	public setCommonAddressCheckbox(commonAddressCheckboxValue:boolean) {
		this.commonAddressCheckbox = commonAddressCheckboxValue;
	}
}