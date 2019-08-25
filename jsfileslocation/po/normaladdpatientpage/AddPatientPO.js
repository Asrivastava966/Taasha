"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const PatientInfoPO_1 = require("./PatientInfoPO");
const InsuranceInfoPO_1 = require("./InsuranceInfoPO");
const OrdersPO_1 = require("./orderspage/OrdersPO");
const NotesPO_1 = require("./NotesPO");
const DocumentsPO_1 = require("./DocumentsPO");
const CPAPPO_1 = require("./cpap/CPAPPO");
const AuditPO_1 = require("./AuditPO");
const protractor_2 = require("protractor");
class AddPatientPO {
    constructor() {
        this.patientInfoPO = new PatientInfoPO_1.PatientInfoPO();
        this.insuranceInfoPO = new InsuranceInfoPO_1.InsuranceInfoPO();
        this.ordersPO = new OrdersPO_1.OrdersPO();
        this.notesPO = new NotesPO_1.NotesPO();
        this.documentsPO = new DocumentsPO_1.DocumentsPO();
        this.cpapPO = new CPAPPO_1.CPAPPO();
        this.auditPO = new AuditPO_1.AuditPO();
    }
    getPatientInfoPO() {
        return this.patientInfoPO;
    }
    getInsuranceInfoPO() {
        return this.insuranceInfoPO;
    }
    getOrdersPO() {
        return this.ordersPO;
    }
    getNotesPO() {
        return this.notesPO;
    }
    getDocumentsPO() {
        return this.documentsPO;
    }
    getCPAPPO() {
        return this.cpapPO;
    }
    getAuditPO() {
        return this.auditPO;
    }
    getAddPatientPageHeader() {
        return AddPatientPO.addPatientPageHeader;
    }
    getPatientNameOnHeader() {
        return AddPatientPO.patientNameOnHeader;
    }
    getPatientDOBOnHeader() {
        return AddPatientPO.patientDOBOnHeader;
    }
    getNavigationBarLinks() {
        return AddPatientPO.navigationBarLinks;
    }
    getPatientInfoTabLink() {
        return AddPatientPO.patientInfoTabLink;
    }
    getInsuranceInfoTabLink() {
        return AddPatientPO.insuranceInfoTabLink;
    }
    getOrdersTabLink() {
        return AddPatientPO.ordersTabLink;
    }
    getNotesTabLink() {
        return AddPatientPO.notesTabLink;
    }
    getDocumentsTabLink() {
        return AddPatientPO.documentsTabLink;
    }
    getCPAPTabLink() {
        return AddPatientPO.cpapTabLink;
    }
    getAuditTabLink() {
        return AddPatientPO.auditTabLink;
    }
}
//Header success/validation message elements
AddPatientPO.addPatientPageHeader = protractor_2.element(protractor_1.by.className('pageheader')).element(protractor_1.by.tagName('h3'));
AddPatientPO.patientNameOnHeader = protractor_2.element(protractor_1.by.css('[ng-show=\"patientDetails.payload.patientNm\"]'));
AddPatientPO.patientDOBOnHeader = protractor_2.element(protractor_1.by.css('[ng-show=\"patientDetails.payload.dob\"]'));
//Add Patient navigation tabs 
AddPatientPO.navigationBar = protractor_2.element(protractor_1.by.className('nav nav-tabs'));
AddPatientPO.navigationBarLinks = AddPatientPO.navigationBar.all(protractor_1.by.tagName('li'));
AddPatientPO.patientInfoTabLink = protractor_2.element(protractor_1.by.id('patientInfoTabset'));
AddPatientPO.insuranceInfoTabLink = protractor_2.element(protractor_1.by.css('[heading="Insurance Info"]')).element(protractor_1.by.tagName('a'));
AddPatientPO.ordersTabLink = protractor_2.element(protractor_1.by.id('orderTab'));
AddPatientPO.notesTabLink = protractor_2.element(protractor_1.by.css('[heading=\"Notes\"]'));
AddPatientPO.documentsTabLink = protractor_2.element(protractor_1.by.css('[heading=\"Documents\"]'));
AddPatientPO.cpapTabLink = protractor_2.element(protractor_1.by.css('[heading=\"CPAP\"]'));
AddPatientPO.auditTabLink = protractor_2.element(protractor_1.by.css('[heading=\"Audit\"]'));
exports.AddPatientPO = AddPatientPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkUGF0aWVudFBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ub3JtYWxhZGRwYXRpZW50cGFnZS9BZGRQYXRpZW50UE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBZ0M7QUFDaEMsbURBQWdEO0FBQ2hELHVEQUFvRDtBQUNwRCxvREFBaUQ7QUFDakQsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1QywwQ0FBdUM7QUFDdkMsdUNBQW9DO0FBQ3BDLDJDQUFxQztBQUVyQyxNQUFhLFlBQVk7SUFTckI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGdCQUFnQjtRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCxTQUFT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