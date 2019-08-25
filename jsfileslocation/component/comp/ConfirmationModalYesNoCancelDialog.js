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
const ConfirmationModalYesNoDialog_1 = require("./ConfirmationModalYesNoDialog");
class ConfirmationModalYesNoCancelDialog extends ConfirmationModalYesNoDialog_1.ConfirmationModalYesNoDialog {
    constructor(modalDialog) {
        super(modalDialog);
    }
    confirmCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalFooter().element(protractor_1.by.css('[ng-click=\"closeModalWindow(cancel)\"]')).click();
        });
    }
}
exports.ConfirmationModalYesNoCancelDialog = ConfirmationModalYesNoCancelDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlybWF0aW9uTW9kYWxZZXNOb0NhbmNlbERpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvQ29uZmlybWF0aW9uTW9kYWxZZXNOb0NhbmNlbERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQStDO0FBQy9DLGlGQUE4RTtBQUU5RSxNQUFhLGtDQUFtQyxTQUFRLDJEQUE0QjtJQUVoRixZQUFZLFdBQXlCO1FBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUssYUFBYTs7WUFDZixNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkcsQ0FBQztLQUFBO0NBQ0o7QUFURCxnRkFTQyJ9