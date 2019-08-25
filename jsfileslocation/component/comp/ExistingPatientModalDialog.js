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
const ExistingPatientGrid_1 = require("./ExistingPatientGrid");
class ExistingPatientModalDialog extends BaseModal_1.BaseModal {
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
    getExistingPatientGrid() {
        return new ExistingPatientGrid_1.ExistingPatientGrid(ExistingPatientModalDialog.existingPatientGrid);
    }
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getExistingPatientGrid().getPatientName(rowNumber);
        });
    }
    getDOB(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getExistingPatientGrid().getDOB(rowNumber);
        });
    }
}
ExistingPatientModalDialog.existingPatientGrid = protractor_1.element(protractor_1.by.id('docGrid'));
exports.ExistingPatientModalDialog = ExistingPatientModalDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhpc3RpbmdQYXRpZW50TW9kYWxEaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2NvbXBvbmVudC9jb21wL0V4aXN0aW5nUGF0aWVudE1vZGFsRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBOEM7QUFDOUMsMkNBQXdEO0FBQ3hELCtEQUE0RDtBQUU1RCxNQUFhLDBCQUEyQixTQUFRLHFCQUFTO0lBRXJELFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxjQUFjO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVLLFVBQVU7O1lBQ1osTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBSU8sc0JBQXNCO1FBQzFCLE9BQU8sSUFBSSx5Q0FBbUIsQ0FBQywwQkFBMEIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFSyxjQUFjLENBQUMsU0FBZ0I7O1lBQ2pDLE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekUsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFNBQWdCOztZQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7S0FBQTs7QUFaYyw4Q0FBbUIsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQWRsRSxnRUEyQkMifQ==