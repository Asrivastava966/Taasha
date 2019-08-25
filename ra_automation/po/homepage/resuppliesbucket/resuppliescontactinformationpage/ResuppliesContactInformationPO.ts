import { element, by } from "protractor";
import { ContactPatientPO } from "./ContactPatientPO";
import { SuppliesPO } from "./SuppliesPO";
import { ProcessResultPO } from "./ProcessResultPO";
import { NotesPO } from "./NotesPO";

export class ResuppliesContactInformationPO {
    contactPatientPO:ContactPatientPO;
    suppliesPO:SuppliesPO;
    processResultPO:ProcessResultPO;
    notesPO:NotesPO;

    constructor() {
        this.contactPatientPO = new ContactPatientPO();
        this.suppliesPO = new SuppliesPO();
        this.processResultPO = new ProcessResultPO();
        this.notesPO = new NotesPO();
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

    private static cssHeaderLogo = element(by.tagName('img'));

    getCSSHeaderLogo() {
        return ResuppliesContactInformationPO.cssHeaderLogo;
    }

    private static backToResuppliesButton = element(by.buttonText('Back to Resupplies')); 

    getBackToResuppliesButton() {
        return ResuppliesContactInformationPO.backToResuppliesButton;
    }

    //Contact Information 
    private static patientNameLabel = element.all(by.className('col-md-2')).get(0);
    private static patientName = element.all(by.className('col-md-2')).get(1);
    private static dobLabel = element.all(by.className('col-md-2')).get(2);
    private static dob = element.all(by.className('col-md-2')).get(3);
    private static genderLabel = element.all(by.className('col-md-2')).get(4);
    private static gender = element.all(by.className('col-md-2')).get(5);
    private static deliveryAddressLabelLink = element.all(by.className('col-md-2')).get(6);
    private static deliveryAddress= element.all(by.className('col-md-2')).get(7);
    private static insuranceLabelLink = element.all(by.className('col-md-2')).get(8);
    private static insurance = element.all(by.className('col-md-2')).get(9);
    private static insuranceEligibilityLabelLink = element.all(by.className('col-md-2')).get(10);
    private static insuranceEligibility = element.all(by.className('col-md-2')).get(11);
    private static dateNeededLabelLink = element.all(by.className('col-md-2')).get(12);
    private static dateNeeded = element.all(by.className('col-md-2')).get(13);
    private static orderOwnerLabelLink = element.all(by.className('col-md-2')).get(14);
    private static orderOwner = element.all(by.className('col-md-2')).get(15);
    private static assignToLabelLink = element.all(by.className('col-md-2')).get(16);
    private static assignTo = element.all(by.className('col-md-2')).get(17);
    private static branchLabelLink = element.all(by.className('col-md-2')).get(18);
    private static branch = element.all(by.className('col-md-2')).get(19);
    private static orderingPhysicianLabelLink = element.all(by.className('col-md-2')).get(20);
    private static orderingPhysician = element.all(by.className('col-md-2')).get(21);
    private static workflowStatusLabelLink = element.all(by.className('col-md-2')).get(22);
    private static workflowStatus = element.all(by.className('col-md-2')).get(23);

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

    private static orderHistoryButton = element(by.buttonText('Order History'));
    private static productsButton = element(by.buttonText('Products'));
    private static deleteButton = element(by.buttonText('Delete'));

    getOrderHistoryButton() {
        return ResuppliesContactInformationPO.orderHistoryButton;
    }

    getProductsButton() {
        return ResuppliesContactInformationPO.productsButton;
    }

    getDeleteButton() {
        return ResuppliesContactInformationPO.deleteButton;
    }

    //tabs 
    private static tabsNavigationBar = element(by.className('nav-tabs'));
    private static contactPatientTabLink = ResuppliesContactInformationPO.tabsNavigationBar.element(by.css('[role=\"roleContactPatient\"]'));
    private static suppliesTabLink = ResuppliesContactInformationPO.tabsNavigationBar.element(by.css('[role=\"roleSupplies\"]'));
    private static processResultTabLink = ResuppliesContactInformationPO.tabsNavigationBar.element(by.css('[role=\"roleProcessResult\"]'));
    private static notesTabLink = ResuppliesContactInformationPO.tabsNavigationBar.element(by.css('[role=\"roleNotes\"]')); 

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

    private static tabsContent = element(by.className('tab-content'));
    getTabsContent() {
        return ResuppliesContactInformationPO.tabsContent;
    }
}