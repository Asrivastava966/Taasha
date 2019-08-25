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
const SuppliesPO_1 = require("../../../../po/homepage/resuppliesbucket/resuppliescontactinformationpage/SuppliesPO");
const protractor_1 = require("protractor");
class SuppliesLib {
    constructor() {
        this.hcpcsColumnIndex = 2;
        this.actionColumnIndex = 8;
        this.suppliesPO = new SuppliesPO_1.SuppliesPO();
    }
    getSuppliesPO() {
        return this.suppliesPO;
    }
    getRowNumberOfHcpcsCode(hcpcsCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let totalRows = yield this.getSuppliesPO().getProductsTable().getTableBodyRowCount();
            for (let i = 1; i <= totalRows; i++) {
                let hcpcs = yield this.getSuppliesPO().getProductsTable().getTableBodyRowCell(i, this.hcpcsColumnIndex).element(protractor_1.by.tagName('span')).getText();
                if (hcpcs == hcpcsCode) {
                    return i;
                }
            }
        });
    }
    addProduct(productInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSuppliesPO().getAddNewProductButton().click();
            yield this.getSuppliesPO().getProductModalDialog().addUpdateProduct(productInfo);
        });
    }
    updateProduct(hcpcsCode, productInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let rowNumber = yield this.getRowNumberOfHcpcsCode(hcpcsCode);
            yield this.getSuppliesPO().getProductsTable().getTableBodyRowCell(rowNumber, this.actionColumnIndex).element(protractor_1.by.css('[title=\"Update Product\"]')).click();
            yield this.getSuppliesPO().getProductModalDialog().addUpdateProduct(productInfo);
        });
    }
    deleteProduct(hcpcsCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let rowNumber = yield this.getRowNumberOfHcpcsCode(hcpcsCode);
            yield this.getSuppliesPO().getProductsTable().getTableBodyRowCell(rowNumber, this.actionColumnIndex).element(protractor_1.by.css('[title=\"Delete Product\"]')).click();
            yield this.getSuppliesPO().getConfirmationModalDialog().confirmYes();
        });
    }
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSuppliesPO().getNextButton().click();
        });
    }
    previous() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSuppliesPO().getPreviousButton().click();
        });
    }
}
exports.SuppliesLib = SuppliesLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcGxpZXNMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9ob21lcGFnZS9yZXN1cHBsaWVzYnVja2V0L3Jlc3VwcGxpZXNjb250YWN0aW5mb3JtYXRpb25wYWdlL1N1cHBsaWVzTGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxSEFBa0g7QUFFbEgsMkNBQWdDO0FBRWhDLE1BQWEsV0FBVztJQUtwQjtRQUhRLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFHMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUssdUJBQXVCLENBQUMsU0FBZ0I7O1lBQzFDLElBQUksU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUVyRixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QixJQUFJLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM5SSxJQUFHLEtBQUssSUFBSSxTQUFTLEVBQUU7b0JBQ25CLE9BQU8sQ0FBQyxDQUFDO2lCQUNaO2FBQ0o7UUFDTCxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsV0FBdUI7O1lBQ3BDLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUQsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRixDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsU0FBZ0IsRUFBRSxXQUF1Qjs7WUFDekQsSUFBSSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUQsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNKLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckYsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLFNBQWdCOztZQUNoQyxJQUFJLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5RCxNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0osTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6RSxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUVLLFFBQVE7O1lBQ1YsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzRCxDQUFDO0tBQUE7Q0FDSjtBQWhERCxrQ0FnREMifQ==