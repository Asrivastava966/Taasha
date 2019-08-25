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
const OrdersPO_1 = require("../../../po/normaladdpatientpage/orderspage/OrdersPO");
const OrderInfoLib_1 = require("./OrderInfoLib");
const ClinicalInfoLib_1 = require("./ClinicalInfoLib");
const InsVerificationLib_1 = require("./InsVerificationLib");
const OrderNotesLib_1 = require("./OrderNotesLib");
const DocumentsLib_1 = require("./DocumentsLib");
const CmnRxPoLib_1 = require("./CmnRxPoLib");
class OrdersLib {
    constructor() {
        //Orders table 
        this.orderNoColumnIndex = 1;
        this.orderTypeColumnIndex = 2;
        this.workflowStatusColumnIndex = 3;
        this.setupDateColumnIndex = 4;
        this.createdDateColumnIndex = 5;
        this.daysOutstandingColumnIndex = 6;
        this.actionColumnIndex = 7;
        this.ordersPO = new OrdersPO_1.OrdersPO();
        this.orderInfoLib = new OrderInfoLib_1.OrderInfoLib();
        this.cmnRxPoLib = new CmnRxPoLib_1.CmnRxPoLib();
        this.clinicalInfoLib = new ClinicalInfoLib_1.ClinicalInfoLib();
        this.insVerificationLib = new InsVerificationLib_1.InsVerificationLib();
        this.documentsLib = new DocumentsLib_1.DocumentsLib();
        this.orderNotesLib = new OrderNotesLib_1.OrderNotesLib();
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
    getConfirmationModalMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrdersPO().getConfirmationModalDialog().getConfirmationModalMessage();
        });
    }
    confirmYes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getConfirmationModalDialog().confirmYes();
        });
    }
    confirmNo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getConfirmationModalDialog().confirmNo();
        });
    }
    getInformationModalMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrdersPO().getInformationModalDialog().getInformationModalMessage();
        });
    }
    confirmOK() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getInformationModalDialog().confirmOK();
        });
    }
    //Header
    getSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrdersPO().getSuccessMessage().getText();
        });
    }
    toggleNormalOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getNormalOrdersToggle().click();
        });
    }
    toggleResupplyTempOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getResupplyTempOrdersToggle().click();
        });
    }
    updateNormalOrder(orderIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getNormalOrdersTable().getTableBodyRowCell(orderIndex, this.orderNoColumnIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
    updateResupplyTempOrder(orderIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getResupplyTempOrdersTable().getTableBodyRowCell(orderIndex, this.orderNoColumnIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
    deleteNormalOrder(orderIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getNormalOrdersTable().getTableBodyRowCell(orderIndex, this.actionColumnIndex).element(protractor_1.by.css('[title=\"Delete Order\"]')).click();
            yield this.getOrdersPO().getConfirmationModalDialog().confirmYes();
        });
    }
    deleteResupplyTempOrder(orderIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getResupplyTempOrdersTable().getTableBodyRowCell(orderIndex, this.actionColumnIndex).element(protractor_1.by.css('[title=\"Delete Order\"]')).click();
        });
    }
    navigateToNewOrderForm() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getNewOrderButton().click();
        });
    }
    navigateBackToOrdersTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getBackToOrderButton().click();
        });
    }
    navigateToOrderInfoTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getOrderInfoTabLink().click();
        });
    }
    navigateToClinicalInfoTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getClinicalInfoTabLink().click();
        });
    }
    navigateToCmnRxPoTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getCmnRxPoTabLink().click();
        });
    }
    navigateToInsVerificationTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getInsVerificationTabLink().click();
        });
    }
    navigateToDeliveryInstTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getDeliveryInstTabLink().click();
        });
    }
    navigateToDocumentsTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getDocumentsTabLink().click();
        });
    }
    navigateToCommunicationsTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getCommunicationsTabLink().click();
        });
    }
    navigateToOrderNotesTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getOrderNotesTabLink().click();
        });
    }
    navigateToOrderAuditTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getOrderAuditTabLink().click();
        });
    }
    //Ins. Verification
    verifyInsurance(verificationDate) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info('Verifying insurance...');
            let firstInsuranceIndex = 1;
            yield this.navigateToInsVerificationTab();
            yield this.getInsVerificationLib().navigateToActiveInsurancePolicyDetailsPage(firstInsuranceIndex);
            yield this.getInsVerificationLib().performManualEligibilityCheck(verificationDate);
            yield this.getInsVerificationLib().saveOrderInsurance();
        });
    }
    generateForms(formsInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoLib().fillFormsInfo(formsInfo);
        });
    }
}
exports.OrdersLib = OrdersLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJzTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvbm9ybWFsYWRkcGF0aWVudHBhZ2Uvb3JkZXJzcGFnZS9PcmRlcnNMaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUF5QztBQUN6QyxtRkFBZ0Y7QUFDaEYsaURBQThDO0FBQzlDLHVEQUFvRDtBQUNwRCw2REFBMEQ7QUFDMUQsbURBQWdEO0FBQ2hELGlEQUE4QztBQUU5Qyw2Q0FBMEM7QUFFMUMsTUFBYSxTQUFTO0lBU2xCO1FBK0RBLGVBQWU7UUFDUCx1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLDhCQUF5QixHQUFHLENBQUMsQ0FBQztRQUM5Qix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLCtCQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFyRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJ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