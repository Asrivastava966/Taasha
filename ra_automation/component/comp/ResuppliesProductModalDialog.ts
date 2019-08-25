import { by, ElementFinder } from 'protractor';
import { BaseModal } from "../base/BaseModal";
import { SelectDropdown } from './SelectDropdown';
import { CustomDropdownMenu } from './CustomDropdownMenu';
import { CustomDropdownMenuOrigin } from '../../data/enums/CustomDropdownMenuOrigin';
import { ProductPriceType } from '../../data/enums/ProductPriceType';
import { ProductManufacturer } from '../../data/enums/ProductManufacturer';
import { ProductInfo } from '../../data/info/ProductInfo';

export class ResuppliesProductModalDialog extends BaseModal {

    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
    }

    private getCloseButton() {
        return this.getModalHeader().element(by.className('close'));
    }

    async closeModal() {
        await this.getCloseButton().click();
    }

    private getQuantityInputField() {
        return this.getModalBody().element(by.model('fProduct.qty'));
    }

    async fillQuantity(quantity:number) {
        await this.getQuantityInputField().sendKeys(quantity);
    }

    private getHcpcsDropdownMenu() {
        return new CustomDropdownMenu(this.getModalBody().element(by.model('fProduct.hcpcsCdDesc')), CustomDropdownMenuOrigin.INPUT_FIELD);
    }

    async selectHCPCS(hcpcs:string) {
        await this.getHcpcsDropdownMenu().selectDropdownMenuOptionByLinkText(hcpcs);
    }

    private getPrSelectDropdown() {
        return new SelectDropdown(this.getModalBody().element(by.model('fProduct.priceTypeId')));
    }

    async selectPR(productPriceType:ProductPriceType) {
        await this.getPrSelectDropdown().selectOption(productPriceType);
    }

    private getProductDropdownMenu() {
        return new CustomDropdownMenu(this.getModalBody().element(by.model('fProduct.dmeProdNmDsc')),CustomDropdownMenuOrigin.INPUT_FIELD);
    }

    async selectProduct(product:string) {
        await this.getProductDropdownMenu().selectDropdownMenuOptionByLinkText(product);
    }

    private getUOMInputField() {
        return this.getModalBody().element(by.model('fProduct.uom'));
    }

    async getUOMValue() {
        return await this.getUOMInputField().getAttribute('value');
    }

    private getManufacturerSelectDropdown() {
        return new SelectDropdown(this.getModalBody().element(by.model('fProduct.mfrId')));
    }

    async selectManufacturer(productManufacturer:ProductManufacturer) {
        await this.getManufacturerSelectDropdown().selectOption(productManufacturer);
    }

    private getChargeInputField() {
        return this.getModalBody().element(by.model('fProduct.charge'));
    }

    async getChargeValue() {
        return await this.getChargeInputField().getAttribute('value');
    }

    private getAllowedAmtInputField() {
        return this.getModalBody().element(by.model('fProduct.allowedAmt'));
    }

    async getAllowedAmtValue() {
        return await this.getAllowedAmtInputField().getAttribute('value');
    }
    
    private getReferenceInputField() {
        return this.getModalBody().element(by.model('fProduct.comment'));
    }

    async fillReference(reference:number) {
        await this.getReferenceInputField().sendKeys(reference);
    }
    
    private getSpecialPriceCheckbox() {
        return this.getModalBody().element(by.model('fProduct.specialPrice'));
    }

    async checkSpecialPrice() {
        await this.getSpecialPriceCheckbox().click();
    }
    
    private getSelfPayCheckbox() {
        return this.getModalBody().element(by.model('fProduct.selfPay'));
    }

    async checkSelfPay() {
        await this.getSelfPayCheckbox().click();
    }

    private getAddButton() {
        return this.getModalFooter().element(by.css('[ng-click=\"addProduct()\"]'));
    }

    async add() {
        await this.getAddButton().click();
    }

    private getClearButton() {
        return this.getModalFooter().element(by.css('[ng-click=\"clearProduct()\"]'));
    }

    async clear() {
        await this.getClearButton().click();
    }

    private getFooterCloseButton() {
        return this.getModalFooter().element(by.css('[ng-click=\"cancel()\"]'));
    }

    async close() {
        await this.getFooterCloseButton().click();
    }

    //Workflow method
    async addUpdateProduct(productInfo:ProductInfo) {

        if(productInfo.getQuantity() != null) {
            await this.fillQuantity(productInfo.getQuantity());
        }

        if(productInfo.getHcpcs() != null) {
            await this.selectHCPCS(productInfo.getHcpcs());
        }

        if(productInfo.getPr() != null) {
            await this.selectPR(productInfo.getPr());
        }

        if(productInfo.getProduct() != null) {
            await this.selectProduct(productInfo.getProduct());
        }

        if(productInfo.getManufacturer() != null) {
            await this.selectManufacturer(productInfo.getManufacturer());
        }

        if(productInfo.getReferenceNo() != null) {
            await this.fillReference(productInfo.getReferenceNo());
        }

        if(productInfo.getSpecialPrice() != null) {
            await this.checkSpecialPrice();
        }

        if(productInfo.getSelfPay() != null) {
            await this.checkSelfPay();
        }

        await this.add();
    }
}