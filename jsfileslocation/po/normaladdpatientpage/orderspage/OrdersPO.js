"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const OrderInfoPO_1 = require("./OrderInfoPO");
const ClinicalInfoPO_1 = require("./ClinicalInfoPO");
const CmnRxPoPO_1 = require("./CmnRxPoPO");
const InsVerificationPO_1 = require("./InsVerificationPO");
const DeliveryInstPO_1 = require("./DeliveryInstPO");
const DocumentsPO_1 = require("./DocumentsPO");
const CommunicationsPO_1 = require("./CommunicationsPO");
const OrderNotesPO_1 = require("./OrderNotesPO");
const OrderAuditPO_1 = require("./OrderAuditPO");
const BaseTable_1 = require("../../../component/base/BaseTable");
const ConfirmationModalYesNoCancelDialog_1 = require("../../../component/comp/ConfirmationModalYesNoCancelDialog");
const InformationModalDialog_1 = require("../../../component/comp/InformationModalDialog");
class OrdersPO {
    constructor() {
        this.orderInfoPO = new OrderInfoPO_1.OrderInfoPO();
        this.clinicalInfoPO = new ClinicalInfoPO_1.ClinicalInfoPO();
        this.cmnRxPoPO = new CmnRxPoPO_1.CmnRxPoPO();
        this.insVerificationPO = new InsVerificationPO_1.InsVerificationPO();
        this.deliveryInstPO = new DeliveryInstPO_1.DeliveryInstPO();
        this.documentsPO = new DocumentsPO_1.DocumentsPO();
        this.communicationsPO = new CommunicationsPO_1.CommunicationsPO();
        this.orderNotesPO = new OrderNotesPO_1.OrderNotesPO();
        this.orderAuditPO = new OrderAuditPO_1.OrderAuditPO();
    }
    getOrderInfoPO() {
        return this.orderInfoPO;
    }
    getClinicalInfoPO() {
        return this.clinicalInfoPO;
    }
    getCmnRxPoPO() {
        return this.cmnRxPoPO;
    }
    getInsVerificationPO() {
        return this.insVerificationPO;
    }
    getDeliveryInstPO() {
        return this.deliveryInstPO;
    }
    getDocumentsPO() {
        return this.documentsPO;
    }
    getCommunicationsPO() {
        return this.communicationsPO;
    }
    getOrderNotesPO() {
        return this.orderNotesPO;
    }
    getOrderAuditPO() {
        return this.orderAuditPO;
    }
    getSuccessMessage() {
        return OrdersPO.successMessage;
    }
    getNewOrderButton() {
        return OrdersPO.newOrderButton;
    }
    getBackToOrderButton() {
        return OrdersPO.backToOrderButton;
    }
    getOrderInfoTabLink() {
        return OrdersPO.orderInfoTabLink;
    }
    getClinicalInfoTabLink() {
        return OrdersPO.clinicalInfoTabLink;
    }
    getCmnRxPoTabLink() {
        return OrdersPO.cmnRxPoTabLink;
    }
    getInsVerificationTabLink() {
        return OrdersPO.insVerificationTabLink;
    }
    getDeliveryInstTabLink() {
        return OrdersPO.deliveryInstTabLink;
    }
    getDocumentsTabLink() {
        return OrdersPO.documentsTabLink;
    }
    getCommunicationsTabLink() {
        return OrdersPO.communicationsTabLink;
    }
    getOrderNotesTabLink() {
        return OrdersPO.orderNotesTabLink;
    }
    getOrderAuditTabLink() {
        return OrdersPO.orderAuditTabLink;
    }
    getNormalOrdersToggle() {
        return OrdersPO.normalOrdersToggle;
    }
    getNormalOrdersTable() {
        return new BaseTable_1.BaseTable(OrdersPO.normalOrdersTable);
    }
    getResupplyTempOrdersToggle() {
        return OrdersPO.resupplyTempOrdersToggle;
    }
    getResupplyTempOrdersTable() {
        return new BaseTable_1.BaseTable(OrdersPO.resupplyTempOrdersTable);
    }
    getConfirmationModalDialog() {
        return new ConfirmationModalYesNoCancelDialog_1.ConfirmationModalYesNoCancelDialog(OrdersPO.confirmationModalDialog);
    }
    getInformationModalDialog() {
        return new InformationModalDialog_1.InformationModalDialog(OrdersPO.informationModalDialog);
    }
}
//Header
OrdersPO.successMessage = protractor_1.element(protractor_1.by.className('alert-success'));
OrdersPO.newOrderButton = protractor_1.element(protractor_1.by.css('[ng-click*=\"neworder\"]'));
OrdersPO.backToOrderButton = protractor_1.element(protractor_1.by.buttonText('Back to Order'));
//Tabs
OrdersPO.orderInfoTabLink = protractor_1.element(protractor_1.by.css('[ng-click=\"changeOrderTemplate(0)\"]'));
OrdersPO.clinicalInfoTabLink = protractor_1.element(protractor_1.by.css('[ng-click=\"changeOrderTemplate(1)\"]'));
OrdersPO.cmnRxPoTabLink = protractor_1.element(protractor_1.by.css('[ng-click=\"changeOrderTemplate(2)\"]'));
OrdersPO.insVerificationTabLink = protractor_1.element(protractor_1.by.css('[ng-click=\"changeOrderTemplate(3)\"]'));
OrdersPO.deliveryInstTabLink = protractor_1.element(protractor_1.by.css('[ng-click=\"changeOrderTemplate(4)\"]'));
OrdersPO.documentsTabLink = protractor_1.element(protractor_1.by.css('[ng-click=\"changeOrderTemplate(5)\"]'));
OrdersPO.communicationsTabLink = protractor_1.element(protractor_1.by.css('[ng-click=\"changeOrderTemplate(6)\"]'));
OrdersPO.orderNotesTabLink = protractor_1.element(protractor_1.by.css('[ng-click=\"changeOrderTemplate(7)\"]'));
OrdersPO.orderAuditTabLink = protractor_1.element(protractor_1.by.css('[ng-click=\"changeOrderTemplate(8)\"]'));
//Normal Orders
OrdersPO.normalOrdersToggle = protractor_1.element(protractor_1.by.css('[ng-click*=\"toggleNormalOrders\"]'));
OrdersPO.normalOrdersTable = protractor_1.element(protractor_1.by.css('[data-ng-table=\"UI.orderTableParams\"]'));
//Resupply Temp Orders
OrdersPO.resupplyTempOrdersToggle = protractor_1.element(protractor_1.by.css('[ng-click*=\"toggleResupplyTempOrders\"]'));
OrdersPO.resupplyTempOrdersTable = protractor_1.element(protractor_1.by.css('[data-ng-table=\"UI.tableParams\"]'));
//Confirmation Modal Dialog 
OrdersPO.confirmationModalDialog = protractor_1.element(protractor_1.by.className('modal-dialog'));
//Information Modal Dialog 
OrdersPO.informationModalDialog = protractor_1.element(protractor_1.by.className('modal-dialog'));
exports.OrdersPO = OrdersPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJzUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL25vcm1hbGFkZHBhdGllbnRwYWdlL29yZGVyc3BhZ2UvT3JkZXJzUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsK0NBQTRDO0FBQzVDLHFEQUFrRDtBQUNsRCwyQ0FBd0M7QUFDeEMsMkRBQXdEO0FBQ3hELHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMseURBQXNEO0FBQ3RELGlEQUE4QztBQUM5QyxpREFBOEM7QUFDOUMsaUVBQThEO0FBQzlELG1IQUFnSDtBQUNoSCwyRkFBd0Y7QUFFeEYsTUFBYSxRQUFRO0lBV2pCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQs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