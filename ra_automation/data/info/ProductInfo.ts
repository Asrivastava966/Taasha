import { ProductManufacturer } from "../enums/ProductManufacturer";
import { ProductPriceType } from "../enums/ProductPriceType";

export class ProductInfo{
    private _quantity: number;
    private _hcpcs: string; 
    private _pr: ProductPriceType;
    private _product: string; 
    private _uom: string; 
    private _manufacturer: ProductManufacturer; 
    private _charge: string; 
    private _allowedAmt: string; 
    private _referenceNo: number;
    private _specialPrice: boolean; 
    private _selfPay: boolean; 

    public getQuantity(): number {
        return this._quantity;
    }

    public setQuantity(value: number) {
        this._quantity = value;
    }

    public getHcpcs(): string {
        return this._hcpcs;
    }

    public setHcpcs(value: string) {
        this._hcpcs = value;
    }

    public getPr(): ProductPriceType {
        return this._pr;
    }

    public setPr(value: ProductPriceType) {
        this._pr = value;
    }

    public getProduct(): string {
        return this._product;
    }

    public setProduct(value: string) {
        this._product = value;
    }

    public getUom(): string {
        return this._uom;
    }

    public setUom(value: string) {
        this._uom = value;
    }

    public getManufacturer(): ProductManufacturer {
        return this._manufacturer;
    }

    public setManufacturer(value: ProductManufacturer) {
        this._manufacturer = value;
    }

    public getCharge(): string {
        return this._charge;
    }

    public setCharge(value: string) {
        this._charge = value;
    }

    public getAllowedAmt(): string {
        return this._allowedAmt;
    }

    public setAllowedAmt(value: string) {
        this._allowedAmt = value;
    }

    public getReferenceNo(): number {
        return this._referenceNo;
    }

    public setReferenceNo(value: number) {
        this._referenceNo = value;
    }

    public getSpecialPrice(): boolean {
        return this._specialPrice;
    }

    public setSpecialPrice(value: boolean) {
        this._specialPrice = value;
    }

    public getSelfPay(): boolean {
        return this._selfPay;
    }

    public setSelfPay(value: boolean) {
        this._selfPay = value;
    }
}