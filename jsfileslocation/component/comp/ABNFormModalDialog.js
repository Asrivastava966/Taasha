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
const BaseModal_1 = require("../base/BaseModal");
const protractor_1 = require("protractor");
class ABNFormModalDialog extends BaseModal_1.BaseModal {
    constructor(modalDialog) {
        super(modalDialog);
    }
    getCloseButton() {
        return this.getModalHeader().element(protractor_1.by.className('close'));
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCloseButton().click();
        });
    }
    getABNForm() {
        return this.getModalBody().element(protractor_1.by.tagName('form'));
    }
    getSaveButton() {
        return this.getABNForm().element(protractor_1.by.css('[ng-click*="saveAbn"]'));
    }
    getCancelButton() {
        return this.getABNForm().element(protractor_1.by.css('[ng-click*="closeModal"]'));
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSaveButton().click();
        });
    }
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCancelButton().click();
        });
    }
    fillABNFormInfo(abnFormInfo) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.ABNFormModalDialog = ABNFormModalDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQUJORm9ybU1vZGFsRGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9jb21wb25lbnQvY29tcC9BQk5Gb3JtTW9kYWxEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlEQUE4QztBQUM5QywyQ0FBK0M7QUFHL0MsTUFBYSxrQkFBbUIsU0FBUSxxQkFBUztJQUM3QyxZQUFZLFdBQXlCO1FBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU8sY0FBYztRQUNsQixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFWSxLQUFLOztZQUNkLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVPLFVBQVU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTyxhQUFhO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU8sZUFBZTtRQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVZLElBQUk7O1lBQ2IsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBRVksTUFBTTs7WUFDZixNQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsV0FBVzs7UUFFeEMsQ0FBQztLQUFBO0NBQ0o7QUFwQ0QsZ0RBb0NDIn0=