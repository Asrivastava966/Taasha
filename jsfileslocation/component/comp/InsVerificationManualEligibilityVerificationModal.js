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
const DatePicker_1 = require("./DatePicker");
const BaseModal_1 = require("../base/BaseModal");
class InsVerificationManualEligibilityCheckModal extends BaseModal_1.BaseModal {
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
    getEligibleRadioInputField() {
        return this.getModalBody().element(protractor_1.by.id('inputStatusEligible'));
    }
    getNotEligibleRadioInputField() {
        return this.getModalBody().element(protractor_1.by.id('inputStatusNotEligible'));
    }
    getDateCheckedDateInputField() {
        return new DatePicker_1.DatePicker(this.getModalBody().element(protractor_1.by.id('inputDateChecked')));
    }
    getSaveButton() {
        return this.getModalFooter().element(protractor_1.by.css('[ng-click*=\"doSaveEligibility\"]'));
    }
    getCancelButton() {
        return this.getModalFooter().element(protractor_1.by.css('[ng-click=\"cancel()\"]'));
    }
}
exports.InsVerificationManualEligibilityCheckModal = InsVerificationManualEligibilityCheckModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zVmVyaWZpY2F0aW9uTWFudWFsRWxpZ2liaWxpdHlWZXJpZmljYXRpb25Nb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvSW5zVmVyaWZpY2F0aW9uTWFudWFsRWxpZ2liaWxpdHlWZXJpZmljYXRpb25Nb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQStDO0FBQy9DLDZDQUEwQztBQUMxQyxpREFBOEM7QUFFOUMsTUFBYSwwQ0FBMkMsU0FBUSxxQkFBUztJQUNyRSxZQUFZLFdBQXlCO1FBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU8sY0FBYztRQUNsQixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFSyxVQUFVOztZQUNaLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVELDBCQUEwQjtRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELDZCQUE2QjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELDRCQUE0QjtRQUN4QixPQUFPLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztDQUNKO0FBaENELGdHQWdDQyJ9