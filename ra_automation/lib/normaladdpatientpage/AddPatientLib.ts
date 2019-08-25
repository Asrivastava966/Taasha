import { AddPatientPO } from "../../po/normaladdpatientpage/AddPatientPO";
import { PatientInfoLib } from "./PatientInfoLib";
import { InsuranceInfoLib } from "./InsuranceInfoLib";
import { OrdersLib } from "./orderspage/OrdersLib";
import { NotesLib } from "./NotesLib";
import { DocumentsLib } from "./DocumentsLib";
import { CPAPLib } from "./cpap/CPAPLib";
import { AuditLib } from "./AuditLib";
import { ElementFinder, browser } from "protractor";
import { WaitUtils } from "../../utils/WaitUtils";

export class AddPatientLib{
    waitUtils:WaitUtils;
    addPatientPO:AddPatientPO;
    patientInfoLib:PatientInfoLib;
    insuranceInfoLib:InsuranceInfoLib;
    ordersLib:OrdersLib;
    notesLib:NotesLib;
    documentsLib:DocumentsLib;
    cpapLib:CPAPLib;
    auditLib:AuditLib;

    constructor() {
        this.waitUtils = new WaitUtils();
        this.addPatientPO = new AddPatientPO();
        this.patientInfoLib = new PatientInfoLib();
        this.insuranceInfoLib = new InsuranceInfoLib();
        this.ordersLib = new OrdersLib();
        this.notesLib = new NotesLib();
        this.documentsLib = new DocumentsLib();
        this.cpapLib = new CPAPLib();
        this.auditLib = new AuditLib();
    }

    getWaitUtils() {
        return this.waitUtils;
    }

    getAddPatientPO() {
        return this.addPatientPO;
    }

    getPatientInfoLib() {
        return this.patientInfoLib;
    }

    getInsuranceInfoLib() {
        return this.insuranceInfoLib;
    }

    getOrdersLib() {
        return this.ordersLib;
    }

    getNotesLib() {
        return this.notesLib;
    }

    getDocumentsLib() {
        return this.documentsLib;
    }

    getCPAPLib() {
        return this.cpapLib;
    }

    getAuditLib() {
        return this.auditLib;
    }

    async getPatientNameOnHeader() {
        await this.getWaitUtils().waitForElementToBePresent(this.getAddPatientPO().getPatientNameOnHeader());
        await this.getWaitUtils().waitForElementToBeVisible(this.getAddPatientPO().getPatientNameOnHeader());
        
        let patientNameWithLabel = await this.getAddPatientPO().getPatientNameOnHeader().getText();
        let patientNameStringArray = patientNameWithLabel.split(': ');
        
        return patientNameStringArray[1];
    }

    async getPatientDOBOnHeader() {
        let patientDOBWithLabel = await this.getAddPatientPO().getPatientDOBOnHeader().getText();
        let patientDOBWithoutLabelStringArray = patientDOBWithLabel.split(': ');
        let patientDOB = patientDOBWithoutLabelStringArray[1];
        let patientDOBStringArray = patientDOB.split('/');
            
        let date = +patientDOBStringArray[1];
        let month = +patientDOBStringArray[0];
        let year = +patientDOBStringArray[2];

        return new Date(year, --month, date);
    }

    async checkIfATabLinkIsActive(tabLink:ElementFinder) {
        let flag = true;
        let classAttributeValue = await tabLink.getAttribute('class');
        
        if(classAttributeValue.includes('disabled')) {
            flag = false;
        } 
        
        return flag;
    }

    async navigateToPatientInfoTab() {
        await this.getAddPatientPO().getPatientInfoTabLink().click();
        browser.logger.info('Navigating to the Patient Info tab');
    }

    async navigateToInsuranceInfoTab() {
        if(await this.checkIfATabLinkIsActive(this.getAddPatientPO().getInsuranceInfoTabLink())) {
            await this.getAddPatientPO().getInsuranceInfoTabLink().click(); 
            await this.getAddPatientPO().getInsuranceInfoTabLink().click(); 
            browser.logger.info('Navigating to the Insurance Info tab');
        } else {
            browser.logger.info('Insurance Info tab is inactive!');
        }
    }

    async navigateToOrdersTab() {
        await this.getAddPatientPO().getOrdersTabLink().click();
        browser.logger.info('Navigating to the Orders tab');
    }

    async navigateToNotesTab() {
        await this.getAddPatientPO().getNotesTabLink().click();
        browser.logger.info('Navigating to the Notes tab');
    }

    async navigateToDocumentsTab() {
        await this.getAddPatientPO().getDocumentsTabLink().click();
        browser.logger.info('Navigating to the Documents tab');
    }

    async navigateToCPAPTab() {
        await this.getAddPatientPO().getCPAPTabLink().click();
        browser.logger.info('Navigating to the CPAP tab');
    }

    async navigateToAuditTab() {
        await this.getAddPatientPO().getAuditTabLink().click();
        browser.logger.info('Navigating to the Audit tab');
    }
}