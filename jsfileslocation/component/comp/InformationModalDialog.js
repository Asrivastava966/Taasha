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
class InformationModalDialog extends BaseModal_1.BaseModal {
    constructor(modalDialog) {
        super(modalDialog);
    }
    getInformationModalMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getModalBody().getText();
        });
    }
    confirmOK() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalFooter().element(protractor_1.by.tagName('button')).click();
        });
    }
}
exports.InformationModalDialog = InformationModalDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5mb3JtYXRpb25Nb2RhbERpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvSW5mb3JtYXRpb25Nb2RhbERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaURBQThDO0FBQzlDLDJDQUErQztBQUUvQyxNQUFhLHNCQUF1QixTQUFRLHFCQUFTO0lBQ2pELFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFSywwQkFBMEI7O1lBQzVCLE9BQU8sTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0MsQ0FBQztLQUFBO0lBRUssU0FBUzs7WUFDWCxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RFLENBQUM7S0FBQTtDQUNKO0FBWkQsd0RBWUMifQ==