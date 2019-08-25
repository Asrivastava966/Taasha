import { by, ElementFinder } from 'protractor';
import { BaseModal } from "../base/BaseModal";
import { SelectDropdown } from './SelectDropdown';
import { DatePicker } from './DatePicker';
import { ResupplyOrderWorkflowStatus } from '../../data/enums/ResupplyOrderWorkflowStatus';
import { CommonUtils } from '../../utils/CommonUtils';

export class WorkflowStatusModalDialog extends BaseModal {
    private commonUtils:CommonUtils;

    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
        this.commonUtils = new CommonUtils();
    }

    private getCommonUtils() {
        return this.commonUtils;
    }

    private getCloseButton() {
        return this.getModalHeader().element(by.tagName('button'));
    }

    async close() {
        await this.getCloseButton().click();
    }

    //Order Info
    private getOrderOwnerSelectDropdown() {
        return new SelectDropdown(this.getModalBody().element(by.model('workflowStatusRequest.orderOwnerId')));
    }

    async selectOrderOwner(orderOwner:string) {
        await this.getOrderOwnerSelectDropdown().selectOption(orderOwner);
    }

    private getAssignToSelectDropdown() {
        return this.getModalBody().element(by.model('workflowStatusRequest.employeeId'));
    }

    async selectAssignTo(assignTo:string) {
        await this.getAssignToSelectDropdown().selectOption(assignTo);
    }

    private getStatusSelectDropdown() {
        return this.getModalBody().element(by.model('workflowStatusRequest.workFlowNm'));
    }

    async selectStatus(workflowStatus:ResupplyOrderWorkflowStatus) {
        await this.getStatusSelectDropdown().selectOption(workflowStatus);
    }

    private getDateNeededDatePicker() {
        return new DatePicker(this.getModalBody().element(by.model('workflowStatusRequest.dateNeeded')));
    }

    async selectDateNeeded(dateNeeded:Date) {
        let isDatePickerSmall = false;
        await this.getDateNeededDatePicker().selectDate(dateNeeded, isDatePickerSmall);
    }

    private getSaveButton() {
        return this.getModalContent().element(by.buttonText('Save'));
    }

    async save() {
        await this.getCommonUtils().scrollIntoView(this.getSaveButton());
        await this.getSaveButton().click();
    }
}