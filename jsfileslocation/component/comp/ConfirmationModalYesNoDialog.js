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
class ConfirmationModalYesNoDialog extends BaseModal_1.BaseModal {
    constructor(modalDialog) {
        super(modalDialog);
    }
    getConfirmationModalMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getModalBody().getText();
        });
    }
    confirmYes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalFooter().element(protractor_1.by.css('[ng-click=\"closeModalWindow(true)\"]')).click();
        });
    }
    confirmNo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalFooter().element(protractor_1.by.css('[ng-click=\"closeModalWindow(false)\"]')).click();
        });
    }
}
exports.ConfirmationModalYesNoDialog = ConfirmationModalYesNoDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlybWF0aW9uTW9kYWxZZXNOb0RpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvQ29uZmlybWF0aW9uTW9kYWxZZXNOb0RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQStDO0FBQy9DLGlEQUE4QztBQUU5QyxNQUFhLDRCQUE2QixTQUFRLHFCQUFTO0lBRXZELFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFSywyQkFBMkI7O1lBQzdCLE9BQU8sTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0MsQ0FBQztLQUFBO0lBRUssVUFBVTs7WUFDWixNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakcsQ0FBQztLQUFBO0lBRUssU0FBUzs7WUFDWCxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEcsQ0FBQztLQUFBO0NBQ0o7QUFqQkQsb0VBaUJDIn0=