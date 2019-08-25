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
const CompliancePO_1 = require("../../../po/normaladdpatientpage/cpap/CompliancePO");
const WaitUtils_1 = require("../../../utils/WaitUtils");
const ProductManufacturer_1 = require("../../../data/enums/ProductManufacturer");
class ComplianceLib {
    constructor() {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.compliancePO = new CompliancePO_1.CompliancePO();
    }
    getWaitUtils() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.waitUtils;
        });
    }
    getFirstNameValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getFirstName().getAttribute('value');
        });
    }
    getManufacturerValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getManufacturer().getAttribute('value');
        });
    }
    getLastNameValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getLastName().getAttribute('value');
        });
    }
    getDOBValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getOrderNo().getAttribute('value');
        });
    }
    getSetupDateValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getSetupDate().getAttribute('value');
        });
    }
    getStatusValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getStatus().getAttribute('label');
        });
    }
    getOrderNoValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getOrderNo().getAttribute('value');
        });
    }
    //Workflow method
    fillComplianceInfo(manufacturer, complianceInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.compliancePO.getDmeOfficeDropDown().selectOption(complianceInfo.getDmeOffice());
            yield this.compliancePO.getClinicalUserDropDown().selectOption(complianceInfo.getClinicalUser());
            switch (manufacturer) {
                case ProductManufacturer_1.ProductManufacturer.RESPIRONICS: {
                    yield this.compliancePO.getRespironicsPapTypeDropDown().selectOption(complianceInfo.getPapType());
                    yield this.compliancePO.getRepironicsPapModelDropDown().selectOption(complianceInfo.getPapModel());
                    yield this.compliancePO.getRespironicsPapSerialNumberInputField().sendKeys(complianceInfo.getRespironicsPapSerialNumber());
                }
                case ProductManufacturer_1.ProductManufacturer.RESMED: {
                    yield this.compliancePO.getResmedPapSerialNumberInputField().sendKeys(complianceInfo.getResmedPapSerialNumber());
                    yield this.compliancePO.getResmedDeviceNumberInputField().sendKeys(complianceInfo.getDeviceNumber());
                }
            }
        });
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.compliancePO.getSubmitButton().click();
        });
    }
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.compliancePO.getCancelButton().click();
        });
    }
    //error
    getRespironicsPapModelRequiredFieldErrorMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getRespironicsPapModelDropdownRequiredFieldError().getText();
        });
    }
    getRespironicsPapSerialNumberErrorMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getRespironicsPapSerialNumberInputFieldRequiredFieldError().getText();
        });
    }
    getResmedPapSerialNumberRequiredFieldErrorMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getResmedPapSerialNumberInputFieldRequiredFieldError().getText();
        });
    }
    getResmedDeviceNumberRequiredFieldErrorMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getResmedDeviceNumberInputFieldRequiredFieldError().getText();
        });
    }
    //Disabled field checks 
    getFirstNameInputFieldDisabledAttributeValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getFirstName().getAttribute('ng-disabled');
        });
    }
    getManufacturerInputFieldDisabledAttributeValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getManufacturer().getAttribute('ng-disabled');
        });
    }
    getLastNameInputFieldDisabledAttributeValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getLastName().getAttribute('ng-disabled');
        });
    }
    getDOBInputFieldDisabledAttributeValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getOrderNo().getAttribute('ng-disabled');
        });
    }
    getSetupDateInputFieldDisabledAttributeValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getSetupDate().getAttribute('ng-disabled');
        });
    }
    getStatusFieldDisabledAttributeValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getStatus().getAttribute('ng-disabled');
        });
    }
    getOrderNoFieldDisabledAttributeValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.compliancePO.getOrderNo().getAttribute('ng-disabled');
        });
    }
}
exports.ComplianceLib = ComplianceLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxpYW5jZUxpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL25vcm1hbGFkZHBhdGllbnRwYWdlL2NwYXAvQ29tcGxpYW5jZUxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUZBQWtGO0FBQ2xGLHdEQUFxRDtBQUNyRCxpRkFBOEU7QUFFOUUsTUFBYSxhQUFhO0lBSXRCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0lBRTNDLENBQUM7SUFDSyxZQUFZOztZQUNkLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVLLGlCQUFpQjs7WUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hFLENBQUM7S0FBQTtJQUVLLG9CQUFvQjs7WUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNFLENBQUM7S0FBQTtJQUVLLGdCQUFnQjs7WUFDbEIsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7S0FBQTtJQUVLLFdBQVc7O1lBQ2IsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RFLENBQUM7S0FBQTtJQUVLLGlCQUFpQjs7WUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FB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