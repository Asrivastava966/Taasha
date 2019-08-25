import { by } from "protractor"; 
import { PatientInfoPO } from "./PatientInfoPO";
import { InsuranceInfoPO } from "./InsuranceInfoPO";
import { OrdersPO } from "./orderspage/OrdersPO";
import { NotesPO } from "./NotesPO";
import { DocumentsPO } from "./DocumentsPO";
import { CPAPPO } from "./cpap/CPAPPO";
import { AuditPO } from "./AuditPO";
import { element } from "protractor";

export class AddPatientPO{
    patientInfoPO:PatientInfoPO;
    insuranceInfoPO:InsuranceInfoPO;
    ordersPO:OrdersPO;
    notesPO:NotesPO;
    documentsPO:DocumentsPO;
    cpapPO:CPAPPO;
    auditPO:AuditPO;

    constructor() {
        this.patientInfoPO = new PatientInfoPO();
        this.insuranceInfoPO = new InsuranceInfoPO();
        this.ordersPO = new OrdersPO();
        this.notesPO = new NotesPO();
        this.documentsPO = new DocumentsPO();
        this.cpapPO = new CPAPPO();
        this.auditPO = new AuditPO();
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

    //Header success/validation message elements
    private static addPatientPageHeader = element(by.className('pageheader')).element(by.tagName('h3'));
    private static patientNameOnHeader = element(by.css('[ng-show=\"patientDetails.payload.patientNm\"]'));
    private static patientDOBOnHeader = element(by.css('[ng-show=\"patientDetails.payload.dob\"]'));

    getAddPatientPageHeader() {
        return AddPatientPO.addPatientPageHeader;
    }

    getPatientNameOnHeader() {
        return AddPatientPO.patientNameOnHeader;
    }

    getPatientDOBOnHeader() {
        return AddPatientPO.patientDOBOnHeader;
    }

    //Add Patient navigation tabs 
    private static navigationBar = element(by.className('nav nav-tabs'));
    private static navigationBarLinks = AddPatientPO.navigationBar.all(by.tagName('li'));
    private static patientInfoTabLink = element(by.id('patientInfoTabset'));
    private static insuranceInfoTabLink = element(by.css('[heading="Insurance Info"]')).element(by.tagName('a'));
    private static ordersTabLink = element(by.id('orderTab'));
    private static notesTabLink = element(by.css('[heading=\"Notes\"]'));
    private static documentsTabLink = element(by.css('[heading=\"Documents\"]'));
    private static cpapTabLink = element(by.css('[heading=\"CPAP\"]'));
    private static auditTabLink = element(by.css('[heading=\"Audit\"]'));

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