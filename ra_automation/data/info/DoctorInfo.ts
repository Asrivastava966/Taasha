import { UserStatus } from "../enums/UserStatus";
import { Title } from "../enums/Title";
import { Specialty } from "../enums/Specialty";
import { DeliveredBy } from "../enums/DeliveredBy";

export class DoctorInfo {
    private title: Title
    private firstName: string
    private mi: string
    private lastName: string
    private npiNumber: number
    private specialty: Specialty // or Taxonomy Desc
    private status: UserStatus
    private legacyId: string
    private address1: string
    private address2: string
    private city: string
    private state: string
    private zipCode: number
    private phone: number
    private ext: number
    private facility: string
    private marketingRep: string
    private deliveredBy: DeliveredBy

    public getTitle(): Title {
        return this.title
    }
    public setTitle(title: Title) {
        this.title = title
    }
    public getFirstName(): string {
        return this.firstName
    }
    public setFirstName(firstname: string) {
        this.firstName = firstname
    }
    public getMi(): string {
        return this.mi
    }
    public setMi(mi: string) {
        this.mi = mi
    }
    public getLastName(): string {
        return this.lastName
    }
    public setLastName(lastname: string) {
        this.lastName = lastname
    }
    public getNpiNumber(): number {
        return this.npiNumber
    }
    public setNpiNumber(npinumber: number) {
        this.npiNumber = npinumber
    }
    public getFacility(): string {
        return this.facility
    }
    public setFacility(value: string) {
        this.facility = value
    }
    public getMarketingRep(): string {
        return this.marketingRep
    }
    public setMarketing(value: string) {
        this.marketingRep = value
    }
    public getZipCode(): number {
        return this.zipCode
    }
    public setZipCode(value: number) {
        this.zipCode = value
    }
    public getPhone(): number {
        return this.phone
    }
    public setPhone(value: number) {
        this.phone = value
    }
    public getSpecialty(): Specialty { // Or Taxonomy Desc
        return this.specialty
    }
    public setSpecialty(taxonomy: Specialty) {
        this.specialty = taxonomy
    }
    public getStatus(): UserStatus {
        return this.status
    }
    public setStatus(status: UserStatus) {
        this.status = status
    }
    public getLegacyId(): string {
        return this.legacyId
    }
    public setLegacyId(legacyId: string) {
        this.legacyId = legacyId
    }
    public getAddress1(): string {
        return this.address1
    }
    public setAddress1(value: string) {
        this.address1 = value
    }
    public getAddress2(): string {
        return this.address2
    }
    public setAddress2(value: string) {
        this.address2 = value
    }
    public getCity(): string {
        return this.city
    }
    public setCity(value: string) {
        this.city = value
    }
    public getState(): string {
        return this.state
    }
    public setState(value: string) {
        this.state = value
    }
    public getExt(): number {
        return this.ext
    }
    public setExt(ext: number) {
        this.ext = ext
    }
    public getDeliveredBy(): DeliveredBy {
        return this.deliveredBy
    }
    public setDeliveredBy(deliveredBy: DeliveredBy) {
        this.deliveredBy = deliveredBy
    }
}