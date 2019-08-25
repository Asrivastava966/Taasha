"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BaseModal_1 = require("../../../component/base/BaseModal");
const DatePicker_1 = require("../../../component/comp/DatePicker");
class ResuppliesCampaignListPO {
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
    getProcessCustomCronModal() {
        return new BaseModal_1.BaseModal(ResuppliesCampaignListPO.processCustomCronModal);
    }
    getProcessCustomCronModalCloseButton() {
        return this.getProcessCustomCronModal().getModalHeader().element(protractor_1.by.tagName('button'));
    }
    getCronModalStartDatePicker() {
        return new DatePicker_1.DatePicker(this.getProcessCustomCronModal().getModalBody().element(protractor_1.by.id('inputCreatedDate')));
    }
    getCronModalEndDatePicker() {
        return new DatePicker_1.DatePicker(this.getProcessCustomCronModal().getModalBody().element(protractor_1.by.id('inputEndDate')));
    }
    getCronModalProcessCustomCronButton() {
        return this.getProcessCustomCronModal().getModalBody().element(protractor_1.by.css('[ng-click=\"saveDate()\"]'));
    }
}
ResuppliesCampaignListPO.adminDashboardButton = protractor_1.element(protractor_1.by.buttonText('Admin Dashboard'));
ResuppliesCampaignListPO.processCustomCronButton = protractor_1.element(protractor_1.by.buttonText('Process Custom Cron'));
ResuppliesCampaignListPO.resupplySubscriptionsButton = protractor_1.element(protractor_1.by.buttonText('Resupply Subscriptions'));
ResuppliesCampaignListPO.defaultCampaignButton = protractor_1.element(protractor_1.by.buttonText('Default Campaign'));
ResuppliesCampaignListPO.addNewButton = protractor_1.element(protractor_1.by.buttonText('Add New'));
ResuppliesCampaignListPO.resuppliesCampaignListGrid = protractor_1.element(protractor_1.by.id('grid1'));
//Process Custom Cron PO 
ResuppliesCampaignListPO.processCustomCronModal = protractor_1.element(protractor_1.by.className('modal-dialog'));
exports.ResuppliesCampaignListPO = ResuppliesCampaignListPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbGllc0NhbXBhaWduTGlzdFBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9hZG1pbmRhc2hib2FyZHBhZ2UvcmVzdXBwbHljYW1wYWlnbnNidWNrZXQvUmVzdXBwbGllc0NhbXBhaWduTGlzdFBPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlDO0FBQ3pDLGlFQUE4RDtBQUM5RCxtRUFBZ0U7QUFFaEUsTUFBYSx3QkFBd0I7SUFTakMsdUJBQXVCO1FBQ25CLE9BQU8sd0JBQXdCLENBQUMsb0JBQW9CLENBQUM7SUFDekQsQ0FBQztJQUVELDBCQUEwQjtRQUN0QixPQUFPLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDO0lBQzVELENBQUM7SUFFRCw4QkFBOEI7UUFDMUIsT0FBTyx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FBQztJQUNoRSxDQUFDO0lBRUQsd0JBQXdCO1FBQ3BCLE9BQU8sd0JBQXdCLENBQUMscUJBQXFCLENBQUM7SUFDMUQsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLHdCQUF3QixDQUFDLFlBQVksQ0FBQztJQUNqRCxDQUFDO0lBRUQsNkJBQTZCO1FBQ3pCLE9BQU8sd0JBQXdCLENBQUMsMEJBQTBCLENBQUM7SUFDL0QsQ0FBQztJQUtELHlCQUF5QjtRQUNyQixPQUFPLElBQUkscUJBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxvQ0FBb0M7UUFDaEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCwyQkFBMkI7UUFDdkIsT0FBTyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUcsQ0FBQztJQUVELHlCQUF5QjtRQUNyQixPQUFPLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVELG1DQUFtQztRQUMvQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztJQUN4RyxDQUFDOztBQXBEYyw2Q0FBb0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLGdEQUF1QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7QUFDeEUsb0RBQTJCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztBQUMvRSw4Q0FBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQ25FLHFDQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDakQsbURBQTBCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUEwQnBFLHlCQUF5QjtBQUNWLCtDQUFzQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBbENsRiw0REF1REMifQ==