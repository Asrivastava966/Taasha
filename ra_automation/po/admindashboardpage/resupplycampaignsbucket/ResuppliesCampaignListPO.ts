import { element, by } from "protractor";
import { BaseModal } from "../../../component/base/BaseModal";
import { DatePicker } from "../../../component/comp/DatePicker";

export class ResuppliesCampaignListPO {

    private static adminDashboardButton = element(by.buttonText('Admin Dashboard'));
    private static processCustomCronButton = element(by.buttonText('Process Custom Cron'));
    private static resupplySubscriptionsButton = element(by.buttonText('Resupply Subscriptions'));
    private static defaultCampaignButton = element(by.buttonText('Default Campaign'));
    private static addNewButton = element(by.buttonText('Add New'));
    private static resuppliesCampaignListGrid = element(by.id('grid1'));

    getAdminDashboardButton() {
        return ResuppliesCampaignListPO.adminDashboardButton;
    }

    getProcessCustomCronButton() {
        return ResuppliesCampaignListPO.processCustomCronButton;
    }

    getResupplySubscriptionsButton() {
        return ResuppliesCampaignListPO.resupplySubscriptionsButton;
    }

    getDefaultCampaignButton() {
        return ResuppliesCampaignListPO.defaultCampaignButton;
    }

    getAddNewButton() {
        return ResuppliesCampaignListPO.addNewButton;
    }

    getResuppliesCampaignListGrid() {
        return ResuppliesCampaignListPO.resuppliesCampaignListGrid;
    }

    //Process Custom Cron PO 
    private static processCustomCronModal = element(by.className('modal-dialog')); 

    getProcessCustomCronModal() {
        return new BaseModal(ResuppliesCampaignListPO.processCustomCronModal);
    }

    getProcessCustomCronModalCloseButton() {
        return this.getProcessCustomCronModal().getModalHeader().element(by.tagName('button'));
    }

    getCronModalStartDatePicker() {
        return new DatePicker(this.getProcessCustomCronModal().getModalBody().element(by.id('inputCreatedDate')));
    }

    getCronModalEndDatePicker() {
        return new DatePicker(this.getProcessCustomCronModal().getModalBody().element(by.id('inputEndDate')));
    }

    getCronModalProcessCustomCronButton() {
        return this.getProcessCustomCronModal().getModalBody().element(by.css('[ng-click=\"saveDate()\"]'));
    }
}