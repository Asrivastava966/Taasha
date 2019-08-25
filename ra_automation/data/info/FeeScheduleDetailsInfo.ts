import { HCPCS_Code } from "../enums/HCPCS_Code"
import { FeeSchedulePriceType } from "../enums/FeeSchedulePriceType"
import { FeeScheduleAuthorization } from "../enums/FeeScheduleAuthorization"
import { FeeScheduleDetail_AllowedFrequency } from "../enums/FeeScheduleDetail_AllowedFrequency";
import { FeeScheduleDetail_BillingPeriod } from "../enums/FeeScheduleDetail_BillingPeriod";
import { FeeScheduleDetail_Taxable } from "../enums/FeeScheduleDetail_Taxable";
import { FeeScheduleStatus } from "../enums/FeeScheduleStatus";
import { ConvertToPurchase } from "../enums/ConvertToPurchase";
import { Modifiers } from "../enums/Modifiers";

export class FeeScheduleDetailsInfo{
    private feeSchedule:string
    private hcpcsCode:HCPCS_Code
    private priceType:FeeSchedulePriceType
    private authorization:FeeScheduleAuthorization
    private begindate:Date
    private endDate:Date
    private maxUnit:number
    private allowedFrequency:FeeScheduleDetail_AllowedFrequency
    private billingPeriod:FeeScheduleDetail_BillingPeriod
    private interval:string
    private taxable:FeeScheduleDetail_Taxable
    private status:FeeScheduleStatus
    private convert_To_Purchase:ConvertToPurchase
    private periodName:string
    private beginPeriod:number
    private endPeriod:number
    private charge:number
    private allow:number
    private modifiers1:Modifiers

    public getFeeSchedule():string{
        return this.feeSchedule
    }
    public setFeeSchedule(value:string){
        this.feeSchedule=value
    }
    public getHCPCS_Code():HCPCS_Code{
      return this.hcpcsCode
    }
    public setHCPCS_Code(value:HCPCS_Code){
        this.hcpcsCode=value
    }
    public getPriceType():FeeSchedulePriceType{
        return this.priceType
    }
    public setPriceType(value:FeeSchedulePriceType){
        this.priceType=value
    }
    public getAuthorization():FeeScheduleAuthorization{
        return this.authorization
    }
    public setAuthorization(value:FeeScheduleAuthorization){
        this.authorization=value
    }
    public getBegindate():Date{
        return this.begindate
    }
    public setBegindate(value:Date){
        this.begindate=value
    }
    public getEndDate():Date{
        return this.endDate
    }
    public setEndDate(value:Date){
        this.endDate=value
    }
    public getMaxUnit():number{
        return this.maxUnit
    }
    public setMaxUnit(value:number){
        this.maxUnit=value
    }
    public getAllowedFrequency():FeeScheduleDetail_AllowedFrequency{
        return this.allowedFrequency
    }
    public setAllowedFrequency(value:FeeScheduleDetail_AllowedFrequency){
        this.allowedFrequency=value
    }
    public getBillingPeriod():FeeScheduleDetail_BillingPeriod{
        return this.billingPeriod
    }
    public setBillingPeriod(value:FeeScheduleDetail_BillingPeriod){
        this.billingPeriod=value
    }
    public getInterval():string{
        return this.interval
    }
    public setInterval(value:string){
        this.interval=value
    }
    public getTaxable():FeeScheduleDetail_Taxable{
        return this.taxable
    }
    public setTaxable(value:FeeScheduleDetail_Taxable){
        this.taxable=value
    }
    public getStatus():FeeScheduleStatus{
        return this.status
    }
    public setStatus(value:FeeScheduleStatus){
        this.status=value
    }
    public getConvertToPurchase():ConvertToPurchase{
        return this.convert_To_Purchase
    }
    public setConvertToPurchase(value:ConvertToPurchase){
        this.convert_To_Purchase=value
    }
    public getPeriodName():string{
        return this.periodName
    }
    public setPeriodName(value:string){
        this.periodName=value
    }
    public getBeginPeriod():number{
        return this.beginPeriod
    }
    public setBeginPeriod(value:number){
        this.beginPeriod=value
    }
    public getEndPeriod():number{
        return this.endPeriod
    }
    public setEndPeriod(value:number){
        this.endPeriod=value
    }
    public getCharge():number{
        return this.charge
    }
    public setCharge(value:number){
        this.charge=value
    }
    public getAllow():number{
        return this.allow
    }
    public setAllow(value:number){
        this.allow=value
    }
    public getModifiers():Modifiers{
        return this.modifiers1
    }
    public setModifiers(value:Modifiers){
        this.modifiers1=value
    }  
}