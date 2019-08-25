"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const ContactPatientPO_1 = require("./ContactPatientPO");
const SuppliesPO_1 = require("./SuppliesPO");
const ProcessResultPO_1 = require("./ProcessResultPO");
const NotesPO_1 = require("./NotesPO");
class ResuppliesContactInformationPO {
    constructor() {
        this.contactPatientPO = new ContactPatientPO_1.ContactPatientPO();
        this.suppliesPO = new SuppliesPO_1.SuppliesPO();
        this.processResultPO = new ProcessResultPO_1.ProcessResultPO();
        this.notesPO = new NotesPO_1.NotesPO();
    }
    getContactPatientPO() {
        return this.contactPatientPO;
    }
    getSuppliesPO() {
        return this.suppliesPO;
    }
    getProcessResultPO() {
        return this.processResultPO;
    }
    getNotesPO() {
        return this.notesPO;
    }
    getCSSHeaderLogo() {
        return ResuppliesContactInformationPO.cssHeaderLogo;
    }
    getBackToResuppliesButton() {
        return ResuppliesContactInformationPO.backToResuppliesButton;
    }
    getPatientName() {
        return ResuppliesContactInformationPO.patientName;
    }
    getDOB() {
        return ResuppliesContactInformationPO.dob;
    }
    getGender() {
        return ResuppliesContactInformationPO.gender;
    }
    getDeliveryAddressLabelLink() {
        return ResuppliesContactInformationPO.deliveryAddressLabelLink;
    }
    getDeliveryAddress() {
        return ResuppliesContactInformationPO.deliveryAddress;
    }
    getInsuranceLabelLink() {
        return ResuppliesContactInformationPO.insuranceLabelLink;
    }
    getInsurance() {
        return ResuppliesContactInformationPO.insurance;
    }
    getInsuranceEligibilityLabelLink() {
        return ResuppliesContactInformationPO.insuranceEligibilityLabelLink;
    }
    getInsuranceEligibility() {
        return ResuppliesContactInformationPO.insuranceEligibility;
    }
    getDateNeededLabelLink() {
        return ResuppliesContactInformationPO.dateNeededLabelLink;
    }
    getDateNeeded() {
        return ResuppliesContactInformationPO.dateNeeded;
    }
    getOrderOwnerLabelLink() {
        return ResuppliesContactInformationPO.orderOwnerLabelLink;
    }
    getOrderOwner() {
        return ResuppliesContactInformationPO.orderOwner;
    }
    getAssignToLabelLink() {
        return ResuppliesContactInformationPO.assignToLabelLink;
    }
    getAssignTo() {
        return ResuppliesContactInformationPO.assignTo;
    }
    getBranchLabelLink() {
        return ResuppliesContactInformationPO.branchLabelLink;
    }
    getBranch() {
        return ResuppliesContactInformationPO.branch;
    }
    getOrderingPhysicianLabelLink() {
        return ResuppliesContactInformationPO.orderingPhysicianLabelLink;
    }
    getOrderingPhysician() {
        return ResuppliesContactInformationPO.orderingPhysician;
    }
    getWorkflowStatusLabelLink() {
        return ResuppliesContactInformationPO.workflowStatusLabelLink;
    }
    getWorkflowStatus() {
        return ResuppliesContactInformationPO.workflowStatus;
    }
    getOrderHistoryButton() {
        return ResuppliesContactInformationPO.orderHistoryButton;
    }
    getProductsButton() {
        return ResuppliesContactInformationPO.productsButton;
    }
    getDeleteButton() {
        return ResuppliesContactInformationPO.deleteButton;
    }
    getContactPatientTabLink() {
        return ResuppliesContactInformationPO.contactPatientTabLink;
    }
    getSuppliesTabLink() {
        return ResuppliesContactInformationPO.suppliesTabLink;
    }
    getProcessResultTabLink() {
        return ResuppliesContactInformationPO.processResultTabLink;
    }
    getNotesTabLink() {
        return ResuppliesContactInformationPO.notesTabLink;
    }
    getTabsContent() {
        return ResuppliesContactInformationPO.tabsContent;
    }
}
ResuppliesContactInformationPO.cssHeaderLogo = protractor_1.element(protractor_1.by.tagName('img'));
ResuppliesContactInformationPO.backToResuppliesButton = protractor_1.element(protractor_1.by.buttonText('Back to Resupplies'));
//Contact Information 
ResuppliesContactInformationPO.patientNameLabel = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(0);
ResuppliesContactInformationPO.patientName = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(1);
ResuppliesContactInformationPO.dobLabel = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(2);
ResuppliesContactInformationPO.dob = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(3);
ResuppliesContactInformationPO.genderLabel = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(4);
ResuppliesContactInformationPO.gender = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(5);
ResuppliesContactInformationPO.deliveryAddressLabelLink = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(6);
ResuppliesContactInformationPO.deliveryAddress = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(7);
ResuppliesContactInformationPO.insuranceLabelLink = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(8);
ResuppliesContactInformationPO.insurance = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(9);
ResuppliesContactInformationPO.insuranceEligibilityLabelLink = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(10);
ResuppliesContactInformationPO.insuranceEligibility = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(11);
ResuppliesContactInformationPO.dateNeededLabelLink = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(12);
ResuppliesContactInformationPO.dateNeeded = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(13);
ResuppliesContactInformationPO.orderOwnerLabelLink = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(14);
ResuppliesContactInformationPO.orderOwner = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(15);
ResuppliesContactInformationPO.assignToLabelLink = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(16);
ResuppliesContactInformationPO.assignTo = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(17);
ResuppliesContactInformationPO.branchLabelLink = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(18);
ResuppliesContactInformationPO.branch = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(19);
ResuppliesContactInformationPO.orderingPhysicianLabelLink = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(20);
ResuppliesContactInformationPO.orderingPhysician = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(21);
ResuppliesContactInformationPO.workflowStatusLabelLink = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(22);
ResuppliesContactInformationPO.workflowStatus = protractor_1.element.all(protractor_1.by.className('col-md-2')).get(23);
ResuppliesContactInformationPO.orderHistoryButton = protractor_1.element(protractor_1.by.buttonText('Order History'));
ResuppliesContactInformationPO.productsButton = protractor_1.element(protractor_1.by.buttonText('Products'));
ResuppliesContactInformationPO.deleteButton = protractor_1.element(protractor_1.by.buttonText('Delete'));
//tabs 
ResuppliesContactInformationPO.tabsNavigationBar = protractor_1.element(protractor_1.by.className('nav-tabs'));
ResuppliesContactInformationPO.contactPatientTabLink = ResuppliesContactInformationPO.tabsNavigationBar.element(protractor_1.by.css('[role=\"roleContactPatient\"]'));
ResuppliesContactInformationPO.suppliesTabLink = ResuppliesContactInformationPO.tabsNavigationBar.element(protractor_1.by.css('[role=\"roleSupplies\"]'));
ResuppliesContactInformationPO.processResultTabLink = ResuppliesContactInformationPO.tabsNavigationBar.element(protractor_1.by.css('[role=\"roleProcessResult\"]'));
ResuppliesContactInformationPO.notesTabLink = ResuppliesContactInformationPO.tabsNavigationBar.element(protractor_1.by.css('[role=\"roleNotes\"]'));
ResuppliesContactInformationPO.tabsContent = protractor_1.element(protractor_1.by.className('tab-content'));
exports.ResuppliesContactInformationPO = ResuppliesContactInformationPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbGllc0NvbnRhY3RJbmZvcm1hdGlvblBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ob21lcGFnZS9yZXN1cHBsaWVzYnVja2V0L3Jlc3VwcGxpZXNjb250YWN0aW5mb3JtYXRpb25wYWdlL1Jlc3VwcGxpZXNDb250YWN0SW5mb3JtYXRpb25QTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6Qyx5REFBc0Q7QUFDdEQsNkNBQTBDO0FBQzFDLHVEQUFvRDtBQUNwRCx1Q0FBb0M7QUFFcEMsTUFBYSw4QkFBOEI7SUFNdkM7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxtQkFBbUI7UUFDZixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFJRCxnQkFBZ0I7UUFDWixPQUFPLDhCQUE4QixDQUFDLGFBQWEsQ0FBQztJQUN4RCxDQUFDO0lBSUQseUJBQXlCO1FBQ3JCLE9BQU8sOEJBQThCLENBQUMsc0JBQXNCLENBQUM7SUFDakUsQ0FBQztJQTRCRCxjQUFjO1FBQ1YsT0FBTyw4QkFBOEIsQ0FBQyxXQUFXLENBQUM7SUFDdEQsQ0FB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