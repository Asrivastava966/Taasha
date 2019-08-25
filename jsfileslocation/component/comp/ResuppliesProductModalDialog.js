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
const protractor_1 = require("protractor");
const BaseModal_1 = require("../base/BaseModal");
const SelectDropdown_1 = require("./SelectDropdown");
const CustomDropdownMenu_1 = require("./CustomDropdownMenu");
const CustomDropdownMenuOrigin_1 = require("../../data/enums/CustomDropdownMenuOrigin");
class ResuppliesProductModalDialog extends BaseModal_1.BaseModal {
    constructor(modalDialog) {
        super(modalDialog);
    }
    getCloseButton() {
        return this.getModalHeader().element(protractor_1.by.className('close'));
    }
    closeModal() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCloseButton().click();
        });
    }
    getQuantityInputField() {
        return this.getModalBody().element(protractor_1.by.model('fProduct.qty'));
    }
    fillQuantity(quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuantityInputField().sendKeys(quantity);
        });
    }
    getHcpcsDropdownMenu() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(this.getModalBody().element(protractor_1.by.model('fProduct.hcpcsCdDesc')), CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.INPUT_FIELD);
    }
    selectHCPCS(hcpcs) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getHcpcsDropdownMenu().selectDropdownMenuOptionByLinkText(hcpcs);
        });
    }
    getPrSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getModalBody().element(protractor_1.by.model('fProduct.priceTypeId')));
    }
    selectPR(productPriceType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPrSelectDropdown().selectOption(productPriceType);
        });
    }
    getProductDropdownMenu() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(this.getModalBody().element(protractor_1.by.model('fProduct.dmeProdNmDsc')), CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.INPUT_FIELD);
    }
    selectProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getProductDropdownMenu().selectDropdownMenuOptionByLinkText(product);
        });
    }
    getUOMInputField() {
        return this.getModalBody().element(protractor_1.by.model('fProduct.uom'));
    }
    getUOMValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getUOMInputField().getAttribute('value');
        });
    }
    getManufacturerSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getModalBody().element(protractor_1.by.model('fProduct.mfrId')));
    }
    selectManufacturer(productManufacturer) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getManufacturerSelectDropdown().selectOption(productManufacturer);
        });
    }
    getChargeInputField() {
        return this.getModalBody().element(protractor_1.by.model('fProduct.charge'));
    }
    getChargeValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getChargeInputField().getAttribute('value');
        });
    }
    getAllowedAmtInputField() {
        return this.getModalBody().element(protractor_1.by.model('fProduct.allowedAmt'));
    }
    getAllowedAmtValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getAllowedAmtInputField().getAttribute('value');
        });
    }
    getReferenceInputField() {
        return this.getModalBody().element(protractor_1.by.model('fProduct.comment'));
    }
    fillReference(reference) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getReferenceInputField().sendKeys(reference);
        });
    }
    getSpecialPriceCheckbox() {
        return this.getModalBody().element(protractor_1.by.model('fProduct.specialPrice'));
    }
    checkSpecialPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSpecialPriceCheckbox().click();
        });
    }
    getSelfPayCheckbox() {
        return this.getModalBody().element(protractor_1.by.model('fProduct.selfPay'));
    }
    checkSelfPay() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSelfPayCheckbox().click();
        });
    }
    getAddButton() {
        return this.getModalFooter().element(protractor_1.by.css('[ng-click=\"addProduct()\"]'));
    }
    add() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddButton().click();
        });
    }
    getClearButton() {
        return this.getModalFooter().element(protractor_1.by.css('[ng-click=\"clearProduct()\"]'));
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getClearButton().click();
        });
    }
    getFooterCloseButton() {
        return this.getModalFooter().element(protractor_1.by.css('[ng-click=\"cancel()\"]'));
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFooterCloseButton().click();
        });
    }
    //Workflow method
    addUpdateProduct(productInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (productInfo.getQuantity() != null) {
                yield this.fillQuantity(productInfo.getQuantity());
            }
            if (productInfo.getHcpcs() != null) {
                yield this.selectHCPCS(productInfo.getHcpcs());
            }
            if (productInfo.getPr() != null) {
                yield this.selectPR(productInfo.getPr());
            }
            if (productInfo.getProduct() != null) {
                yield this.selectProduct(productInfo.getProduct());
            }
            if (productInfo.getManufacturer() != null) {
                yield this.selectManufacturer(productInfo.getManufacturer());
            }
            if (productInfo.getReferenceNo() != null) {
                yield this.fillReference(productInfo.getReferenceNo());
            }
            if (productInfo.getSpecialPrice() != null) {
                yield this.checkSpecialPrice();
            }
            if (productInfo.getSelfPay() != null) {
                yield this.checkSelfPay();
            }
            yield this.add();
        });
    }
}
exports.ResuppliesProductModalDialog = ResuppliesProductModalDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbGllc1Byb2R1Y3RNb2RhbERpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvUmVzdXBwbGllc1Byb2R1Y3RNb2RhbERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQStDO0FBQy9DLGlEQUE4QztBQUM5QyxxREFBa0Q7QUFDbEQsNkRBQTBEO0FBQzFELHdGQUFxRjtBQUtyRixNQUFhLDRCQUE2QixTQUFRLHFCQUFTO0lBRXZELFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxjQUFjO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVLLFVBQVU7O1lBQ1osTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRU8scUJBQXFCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVLLFlBQVksQ0FBQyxRQUFlOztZQUM5QixNQUFNLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxDQUFDO0tBQUE7SUFFTyxvQkFBb0I7UUFDeEIsT0FBTyxJQUFJLHVDQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsbURBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkksQ0FBQztJQUVLLFdBQVcsQ0FB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