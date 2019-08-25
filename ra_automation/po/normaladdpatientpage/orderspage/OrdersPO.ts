import { element, by } from "protractor";
import { OrderInfoPO } from "./OrderInfoPO";
import { ClinicalInfoPO } from "./ClinicalInfoPO";
import { CmnRxPoPO } from "./CmnRxPoPO";
import { InsVerificationPO } from "./InsVerificationPO";
import { DeliveryInstPO } from "./DeliveryInstPO";
import { DocumentsPO } from "./DocumentsPO";
import { CommunicationsPO } from "./CommunicationsPO";
import { OrderNotesPO } from "./OrderNotesPO";
import { OrderAuditPO } from "./OrderAuditPO";
import { BaseTable } from "../../../component/base/BaseTable";
import { ConfirmationModalYesNoCancelDialog } from "../../../component/comp/ConfirmationModalYesNoCancelDialog";
import { InformationModalDialog } from "../../../component/comp/InformationModalDialog";

export class OrdersPO{
    orderInfoPO:OrderInfoPO;
    clinicalInfoPO:ClinicalInfoPO;
    cmnRxPoPO:CmnRxPoPO;
    insVerificationPO:InsVerificationPO;
    deliveryInstPO:DeliveryInstPO;
    documentsPO:DocumentsPO;
    communicationsPO:CommunicationsPO;
    orderNotesPO:OrderNotesPO;
    orderAuditPO:OrderAuditPO;

    constructor() {
        this.orderInfoPO = new OrderInfoPO();
        this.clinicalInfoPO = new ClinicalInfoPO();
        this.cmnRxPoPO = new CmnRxPoPO();
        this.insVerificationPO = new InsVerificationPO();
        this.deliveryInstPO = new DeliveryInstPO();
        this.documentsPO = new DocumentsPO();
        this.communicationsPO = new CommunicationsPO();
        this.orderNotesPO = new OrderNotesPO();
        this.orderAuditPO = new OrderAuditPO();
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
    
    //Header
    private static successMessage = element(by.className('alert-success'));

    getSuccessMessage() {
        return OrdersPO.successMessage;
    }

    private static newOrderButton = element(by.css('[ng-click*=\"neworder\"]'));

    getNewOrderButton() {
        return OrdersPO.newOrderButton;
    }

    private static backToOrderButton = element(by.buttonText('Back to Order'));

    getBackToOrderButton() {
        return OrdersPO.backToOrderButton;
    }
    
    //Tabs
    private static orderInfoTabLink = element(by.css('[ng-click=\"changeOrderTemplate(0)\"]'));
    private static clinicalInfoTabLink = element(by.css('[ng-click=\"changeOrderTemplate(1)\"]'));
    private static cmnRxPoTabLink = element(by.css('[ng-click=\"changeOrderTemplate(2)\"]'));
    private static insVerificationTabLink = element(by.css('[ng-click=\"changeOrderTemplate(3)\"]'));
    private static deliveryInstTabLink = element(by.css('[ng-click=\"changeOrderTemplate(4)\"]'));
    private static documentsTabLink = element(by.css('[ng-click=\"changeOrderTemplate(5)\"]'));
    private static communicationsTabLink = element(by.css('[ng-click=\"changeOrderTemplate(6)\"]'));
    private static orderNotesTabLink = element(by.css('[ng-click=\"changeOrderTemplate(7)\"]'));
    private static orderAuditTabLink = element(by.css('[ng-click=\"changeOrderTemplate(8)\"]'));

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

    //Normal Orders
    private static normalOrdersToggle = element(by.css('[ng-click*=\"toggleNormalOrders\"]'));

    getNormalOrdersToggle() {
        return OrdersPO.normalOrdersToggle;
    }
    
    private static normalOrdersTable = element(by.css('[data-ng-table=\"UI.orderTableParams\"]'));

    getNormalOrdersTable() {
        return new BaseTable(OrdersPO.normalOrdersTable);
    }

    //Resupply Temp Orders
    private static resupplyTempOrdersToggle = element(by.css('[ng-click*=\"toggleResupplyTempOrders\"]'));

    getResupplyTempOrdersToggle() {
        return OrdersPO.resupplyTempOrdersToggle;
    }

    private static resupplyTempOrdersTable = element(by.css('[data-ng-table=\"UI.tableParams\"]'));

    getResupplyTempOrdersTable() {
        return new BaseTable(OrdersPO.resupplyTempOrdersTable);
    }

    //Confirmation Modal Dialog 
    private static confirmationModalDialog = element(by.className('modal-dialog')); 

    getConfirmationModalDialog() {
        return new ConfirmationModalYesNoCancelDialog(OrdersPO.confirmationModalDialog);
    }

    //Information Modal Dialog 
    private static informationModalDialog = element(by.className('modal-dialog')); 

    getInformationModalDialog() {
        return new InformationModalDialog(OrdersPO.informationModalDialog);
    }
}