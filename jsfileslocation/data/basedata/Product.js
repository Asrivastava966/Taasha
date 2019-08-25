"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductInfo_1 = require("../info/ProductInfo");
const AddPatientLib_1 = require("../../lib/normaladdpatientpage/AddPatientLib");
const ProductManufacturer_1 = require("../enums/ProductManufacturer");
const ProductPriceType_1 = require("../enums/ProductPriceType");
let propertiesReader = require('properties-reader');
let productInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
class Product {
    ////////// Base Product Info //////////
    setBaseProductInfo() {
        let productInfo = new ProductInfo_1.ProductInfo();
        productInfo.setHcpcs(productInfoProperties.get('orders.orderinfo.productinfo.hcpcs'));
        productInfo.setPr(ProductPriceType_1.ProductPriceType.PURCHASE);
        productInfo.setProduct(productInfoProperties.get('orders.orderinfo.productinfo.product'));
        return productInfo;
    }
    setBaseRespironicsProductInfo() {
        let productInfo = new ProductInfo_1.ProductInfo();
        productInfo.setManufacturer(ProductManufacturer_1.ProductManufacturer.RESPIRONICS);
        productInfo.setHcpcs(productInfoProperties.get('orders.orderinfo.productinfo.hcpcs'));
        productInfo.setPr(ProductPriceType_1.ProductPriceType.PURCHASE);
        productInfo.setProduct(productInfoProperties.get('orders.orderinfo.productinfo.product'));
        return productInfo;
    }
    setBaseResmedProductInfo() {
        let productInfo = new ProductInfo_1.ProductInfo();
        productInfo.setManufacturer(ProductManufacturer_1.ProductManufacturer.RESMED);
        productInfo.setHcpcs(productInfoProperties.get('orders.orderinfo.productinfo.resmed.hcpcs'));
        productInfo.setPr(ProductPriceType_1.ProductPriceType.PURCHASE);
        productInfo.setProduct(productInfoProperties.get('orders.orderinfo.productinfo.resmed.product'));
        return productInfo;
    }
    addProduct(productInfo, saveOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            let addPatientLib = new AddPatientLib_1.AddPatientLib();
            yield addPatientLib.getOrdersLib().getOrderInfoLib().fillProductInfo(productInfo);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().addProduct();
            if (saveOrder) {
                yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            }
            return productInfo;
        });
    }
    addBaseProduct(saveOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addProduct(this.setBaseProductInfo(), saveOrder);
        });
    }
    addBaseRespironicsProduct(saveOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addProduct(this.setBaseRespironicsProductInfo(), saveOrder);
        });
    }
    addBaseResmedProduct(saveOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addProduct(this.setBaseResmedProductInfo(), saveOrder);
        });
    }
}
exports.Product = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vZGF0YS9iYXNlZGF0YS9Qcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxREFBa0Q7QUFDbEQsZ0ZBQTZFO0FBQzdFLHNFQUFtRTtBQUNuRSxnRUFBNkQ7QUFFN0QsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLHFCQUFxQixHQUFHLGdCQUFnQixDQUFDLDhDQUE4QyxDQUFDLENBQUM7QUFFN0YsTUFBYSxPQUFPO0lBRWhCLHVDQUF1QztJQUMvQixrQkFBa0I7UUFDdEIsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDcEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLFdBQVcsQ0FBQyxLQUFLLENBQUMsbUNBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsV0FBVyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBRTFGLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyw2QkFBNkI7UUFDakMsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDcEMsV0FBVyxDQUFDLGVBQWUsQ0FBQyx5Q0FBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxXQUFXLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDdEYsV0FBVyxDQUFDLEtBQUssQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxXQUFXLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFFMUYsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVPLHdCQUF3QjtRQUM1QixJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNwQyxXQUFXLENBQUMsZUFBZSxDQUFDLHlDQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELFdBQVcsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQztRQUM3RixXQUFXLENBQUMsS0FBSyxDQUFDLG1DQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLFdBQVcsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQztRQUVqRyxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUssVUFBVSxDQUFDLFdBQXVCLEVBQUUsU0FBaUI7O1lBQ3ZELElBQUksYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBRXhDLE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsRixNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUVsRSxJQUFHLFNBQVMsRUFBRTtnQkFDVixNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwRTtZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxTQUFpQjs7WUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkUsQ0FBQztLQUFBO0lBRUsseUJBQXlCLENBQUMsU0FBaUI7O1lBQzdDLE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7S0FBQTtJQUVLLG9CQUFvQixDQUFDLFNBQWlCOztZQUN4QyxPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM3RSxDQUFDO0tBQUE7Q0FDSjtBQXZERCwwQkF1REMifQ==