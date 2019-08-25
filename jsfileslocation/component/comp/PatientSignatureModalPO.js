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
const CommonUtils_1 = require("../../utils/CommonUtils");
class PatientSignatureModalDialog extends BaseModal_1.BaseModal {
    constructor(modalDialog) {
        super(modalDialog);
        this.commonUtils = new CommonUtils_1.CommonUtils();
    }
    closeFormsModalDialog() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalHeader().element(protractor_1.by.className('close')).click();
        });
    }
    getModalBodyCanvasElement() {
        return this.getModalBody().element(protractor_1.by.tagName('canvas'));
    }
    performSignature() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commonUtils.drawALineOnCanvasTagElement(this.getModalBodyCanvasElement());
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalBody().element(protractor_1.by.id('btnPatientSignatureSave')).click();
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalBody().element(protractor_1.by.buttonText('Clear')).click();
        });
    }
}
exports.PatientSignatureModalDialog = PatientSignatureModalDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudFNpZ25hdHVyZU1vZGFsUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2NvbXBvbmVudC9jb21wL1BhdGllbnRTaWduYXR1cmVNb2RhbFBPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0M7QUFDL0MsaURBQThDO0FBQzlDLHlEQUFzRDtBQUV0RCxNQUFhLDJCQUE0QixTQUFRLHFCQUFTO0lBR3RELFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVLLHFCQUFxQjs7WUFDdkIsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFRCx5QkFBeUI7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUssZ0JBQWdCOztZQUNsQixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQztRQUN6RixDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRixDQUFDO0tBQUE7SUFFSyxLQUFLOztZQUNQLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEUsQ0FBQztLQUFBO0NBQ0o7QUEzQkQsa0VBMkJDIn0=