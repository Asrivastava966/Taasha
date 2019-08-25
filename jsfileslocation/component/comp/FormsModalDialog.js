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
const WaitUtils_1 = require("../../utils/WaitUtils");
const CommonUtils_1 = require("../../utils/CommonUtils");
class FormsModalDialog extends BaseModal_1.BaseModal {
    constructor(modalDialog) {
        super(modalDialog);
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.commonUtils = new CommonUtils_1.CommonUtils();
    }
    closeFormsModalDialog() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalHeader().element(protractor_1.by.className('close')).click();
        });
    }
    navigateToForm(orderForm) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalBody().element(protractor_1.by.buttonText(orderForm)).click();
        });
    }
    getCurrentForm() {
        return this.getModalBody().all(protractor_1.by.tagName('form')).get(0);
    }
    navigateToTheSignatureModalDialog() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCurrentForm().element(protractor_1.by.className('btn-link')).click();
        });
    }
    getSaveAndSubmitButton() {
        return this.getModalFooter().element(protractor_1.by.css('[ng-click=\"exportFormsPdf()\"]'));
    }
    saveAndSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitUtils.waitForElementToBeVisible(this.getSaveAndSubmitButton());
            yield this.getSaveAndSubmitButton().click();
            yield this.waitUtils.insertStaticWait(3000);
            let firstBrowserTabIndex = 1;
            yield this.commonUtils.switchBrowserTab(firstBrowserTabIndex);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalFooter().element(protractor_1.by.buttonText('Close')).click();
        });
    }
}
exports.FormsModalDialog = FormsModalDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybXNNb2RhbERpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvRm9ybXNNb2RhbERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQStDO0FBQy9DLGlEQUE4QztBQUU5QyxxREFBa0Q7QUFDbEQseURBQXNEO0FBRXRELE1BQWEsZ0JBQWlCLFNBQVEscUJBQVM7SUFJM0MsWUFBWSxXQUF5QjtRQUNqQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFSyxxQkFBcUI7O1lBQ3ZCLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkUsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLFNBQW9COztZQUNyQyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hFLENBQUM7S0FBQTtJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUssaUNBQWlDOztZQUNuQyxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFFLENBQUM7S0FBQTtJQUVELHNCQUFzQjtRQUNsQixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVLLGFBQWE7O1lBQ2YsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7WUFDOUUsTUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUMsSUFBSSxvQkFBb0IsR0FBRyxDQUFDLENBQUM7WUFDN0IsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEUsQ0FBQztLQUFBO0lBRUssS0FBSzs7WUFDUCxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hFLENBQUM7S0FBQTtDQUNKO0FBMUNELDRDQTBDQyJ9