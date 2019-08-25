import { ProductInfo } from '../info/ProductInfo';
import { AddPatientLib } from '../../lib/normaladdpatientpage/AddPatientLib';
import { ProductManufacturer } from '../enums/ProductManufacturer';
import { ProductPriceType } from '../enums/ProductPriceType';

let propertiesReader = require('properties-reader');
let productInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');

export class Product {
    
    ////////// Base Product Info //////////
    private setBaseProductInfo() {
        let productInfo = new ProductInfo(); 
        productInfo.setHcpcs(productInfoProperties.get('orders.orderinfo.productinfo.hcpcs')); 
        productInfo.setPr(ProductPriceType.PURCHASE);
        productInfo.setProduct(productInfoProperties.get('orders.orderinfo.productinfo.product')); 

        return productInfo;
    }

    private setBaseRespironicsProductInfo() {
        let productInfo = new ProductInfo(); 
        productInfo.setManufacturer(ProductManufacturer.RESPIRONICS);
        productInfo.setHcpcs(productInfoProperties.get('orders.orderinfo.productinfo.hcpcs')); 
        productInfo.setPr(ProductPriceType.PURCHASE);
        productInfo.setProduct(productInfoProperties.get('orders.orderinfo.productinfo.product')); 

        return productInfo;
    }

    private setBaseResmedProductInfo() {
        let productInfo = new ProductInfo(); 
        productInfo.setManufacturer(ProductManufacturer.RESMED);
        productInfo.setHcpcs(productInfoProperties.get('orders.orderinfo.productinfo.resmed.hcpcs')); 
        productInfo.setPr(ProductPriceType.PURCHASE);
        productInfo.setProduct(productInfoProperties.get('orders.orderinfo.productinfo.resmed.product')); 

        return productInfo;
    }
    
    async addProduct(productInfo:ProductInfo, saveOrder:boolean) {
        let addPatientLib = new AddPatientLib();

        await addPatientLib.getOrdersLib().getOrderInfoLib().fillProductInfo(productInfo);
        await addPatientLib.getOrdersLib().getOrderInfoLib().addProduct();

        if(saveOrder) {
            await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
        }
        return productInfo;
    }

    async addBaseProduct(saveOrder:boolean) {
        return await this.addProduct(this.setBaseProductInfo(), saveOrder);
    } 

    async addBaseRespironicsProduct(saveOrder:boolean) {
        return await this.addProduct(this.setBaseRespironicsProductInfo(), saveOrder);
    }

    async addBaseResmedProduct(saveOrder:boolean) {
        return await this.addProduct(this.setBaseResmedProductInfo(), saveOrder);
    }
}