import { by, ElementFinder } from "protractor";
import { BaseModal } from "../base/BaseModal";
import { CommonUtils } from "../../utils/CommonUtils";

export class PatientSignatureModalDialog extends BaseModal {
    commonUtils:CommonUtils;
    
    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
        this.commonUtils = new CommonUtils();
    }

    async closeFormsModalDialog() {
        await this.getModalHeader().element(by.className('close')).click();
    }

    getModalBodyCanvasElement() {
        return this.getModalBody().element(by.tagName('canvas'));
    }

    async performSignature() {
        await this.commonUtils.drawALineOnCanvasTagElement(this.getModalBodyCanvasElement());
    }

    async save() {
        await this.getModalBody().element(by.id('btnPatientSignatureSave')).click();
    }
    
    async clear() {
        await this.getModalBody().element(by.buttonText('Clear')).click();
    }
}