import { by, ElementFinder } from "protractor";

export class BaseModal {
    private modalDialog:ElementFinder;

    constructor(modalDialog:ElementFinder) {
        this.modalDialog = modalDialog;
    }

    getModalDialog() {
        return this.modalDialog;
    }

    getModalContent() {
        return this.getModalDialog().element(by.className('modal-content'));
    }

    getModalHeader() {
        return this.getModalContent().element(by.className('modal-header'));
    }

    getModalBody() {
        return this.getModalContent().element(by.className('modal-body'));
    }

    getModalFooter() {
        return this.getModalContent().element(by.className('modal-footer'));
    }
}