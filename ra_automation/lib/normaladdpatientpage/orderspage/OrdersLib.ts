import { by, browser } from "protractor";
import { OrdersPO } from "../../../po/normaladdpatientpage/orderspage/OrdersPO";
import { OrderInfoLib } from "./OrderInfoLib";
import { ClinicalInfoLib } from "./ClinicalInfoLib";
import { InsVerificationLib } from "./InsVerificationLib";
import { OrderNotesLib } from "./OrderNotesLib";
import { DocumentsLib } from "./DocumentsLib";
import { FormsInfo } from "../../../data/info/FormsInfo";
import { CmnRxPoLib } from "./CmnRxPoLib";

export class OrdersLib{
    ordersPO:OrdersPO;
    orderInfoLib:OrderInfoLib;
    clinicalInfoLib:ClinicalInfoLib;
    cmnRxPoLib:CmnRxPoLib;
    insVerificationLib:InsVerificationLib;
    documentsLib:DocumentsLib;
    orderNotesLib:OrderNotesLib;

    constructor() {
        this.ordersPO = new OrdersPO();
        this.orderInfoLib = new OrderInfoLib();
        this.cmnRxPoLib = new CmnRxPoLib();
        this.clinicalInfoLib = new ClinicalInfoLib();
        this.insVerificationLib = new InsVerificationLib();
        this.documentsLib = new DocumentsLib();
        this.orderNotesLib = new OrderNotesLib();
    }

    getOrdersPO() {
        return this.ordersPO;
    }

    getOrderInfoLib() {
        return this.orderInfoLib;
    }

    getCmnRxPoLib() {
        return this.cmnRxPoLib;
    }

    getClinicalInfoLib() {
        return this.clinicalInfoLib;
    }

    getInsVerificationLib() {
        return this.insVerificationLib;
    }

    getDocumentsLib() {
        return this.documentsLib;
    }

    getOrderNotesLib() {
        return this.orderNotesLib;
    }

    async getConfirmationModalMessage() {
        return await this.getOrdersPO().getConfirmationModalDialog().getConfirmationModalMessage(); 
    }

    async confirmYes() {
        await this.getOrdersPO().getConfirmationModalDialog().confirmYes();
    }

    async confirmNo() {
        await this.getOrdersPO().getConfirmationModalDialog().confirmNo();
    }

    async getInformationModalMessage() {
        return await this.getOrdersPO().getInformationModalDialog().getInformationModalMessage();
    }

    async confirmOK() {
        await this.getOrdersPO().getInformationModalDialog().confirmOK();
    }

    //Header
    async getSuccessMessage() {
        return await this.getOrdersPO().getSuccessMessage().getText();
    }

    //Orders table 
    private orderNoColumnIndex = 1; 
    private orderTypeColumnIndex = 2;
    private workflowStatusColumnIndex = 3; 
    private setupDateColumnIndex = 4;
    private createdDateColumnIndex = 5; 
    private daysOutstandingColumnIndex = 6; 
    private actionColumnIndex = 7; 

    async toggleNormalOrders() {
        await this.getOrdersPO().getNormalOrdersToggle().click();
    }

    async toggleResupplyTempOrders() {
        await this.getOrdersPO().getResupplyTempOrdersToggle().click();
    }

    async updateNormalOrder(orderIndex:number) {
        await this.getOrdersPO().getNormalOrdersTable().getTableBodyRowCell(orderIndex, this.orderNoColumnIndex).element(by.tagName('a')).click();
    }

    async updateResupplyTempOrder(orderIndex:number) {
        await this.getOrdersPO().getResupplyTempOrdersTable().getTableBodyRowCell(orderIndex, this.orderNoColumnIndex).element(by.tagName('a')).click();
    }

    async deleteNormalOrder(orderIndex:number) {
        await this.getOrdersPO().getNormalOrdersTable().getTableBodyRowCell(orderIndex, this.actionColumnIndex).element(by.css('[title=\"Delete Order\"]')).click();
        await this.getOrdersPO().getConfirmationModalDialog().confirmYes();
    }

    async deleteResupplyTempOrder(orderIndex:number) {
        await this.getOrdersPO().getResupplyTempOrdersTable().getTableBodyRowCell(orderIndex, this.actionColumnIndex).element(by.css('[title=\"Delete Order\"]')).click();
    }

    async navigateToNewOrderForm() {
        await this.getOrdersPO().getNewOrderButton().click();
    }

    async navigateBackToOrdersTab() {
        await this.getOrdersPO().getBackToOrderButton().click();
    }

    async navigateToOrderInfoTab() {
        await this.getOrdersPO().getOrderInfoTabLink().click();
    }

    async navigateToClinicalInfoTab() {
        await this.getOrdersPO().getClinicalInfoTabLink().click();
    }

    async navigateToCmnRxPoTab() {
        await this.getOrdersPO().getCmnRxPoTabLink().click();
    }

    async navigateToInsVerificationTab() {
        await this.getOrdersPO().getInsVerificationTabLink().click();
    }

    async navigateToDeliveryInstTab() {
        await this.getOrdersPO().getDeliveryInstTabLink().click();
    }

    async navigateToDocumentsTab() {
        await this.getOrdersPO().getDocumentsTabLink().click();
    }

    async navigateToCommunicationsTab() {
        await this.getOrdersPO().getCommunicationsTabLink().click();
    }

    async navigateToOrderNotesTab() {
        await this.getOrdersPO().getOrderNotesTabLink().click();
    }

    async navigateToOrderAuditTab() {
        await this.getOrdersPO().getOrderAuditTabLink().click();
    }
    
    //Ins. Verification
    async verifyInsurance(verificationDate:Date) {
        browser.logger.info('Verifying insurance...');
        
        let firstInsuranceIndex = 1;
        
        await this.navigateToInsVerificationTab();
        await this.getInsVerificationLib().navigateToActiveInsurancePolicyDetailsPage(firstInsuranceIndex);
        await this.getInsVerificationLib().performManualEligibilityCheck(verificationDate);
        await this.getInsVerificationLib().saveOrderInsurance();
    }

    async generateForms(formsInfo:FormsInfo) {
        await this.getOrderInfoLib().fillFormsInfo(formsInfo);
    }
}