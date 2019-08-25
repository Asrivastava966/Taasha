import { browser } from "protractor";
import { OrdersPO } from "../../../po/normaladdpatientpage/orderspage/OrdersPO";
import { ClinicalInfo } from "../../../data/info/ClinicalInfo";

export class ClinicalInfoLib {
    ordersPO:OrdersPO;

    constructor() {
        this.ordersPO = new OrdersPO();
    }

    getOrdersPO() {
        return this.ordersPO;
    }

    //Header - Success message 
    async getSuccessMessage() {
        return await this.getOrdersPO().getClinicalInfoPO().getSuccessMessage().getText();
    }

    //Doctor Info
    async selectOrderingDoctor(orderingDoctorName:string) {
        await this.getOrdersPO().getClinicalInfoPO().getOrderingDoctorDropdown().selectDropdownMenuOptionByLinkText(orderingDoctorName);
    }

    async selectFacility(facility:string) {
        await this.getOrdersPO().getClinicalInfoPO().getFacilityDropdown().selectOption(facility);
    }

    async selectPrimaryDoctor(primaryDoctorName:string) {
        await this.getOrdersPO().getClinicalInfoPO().getPrimaryDoctorDropdown().selectDropdownMenuOptionByLinkText(primaryDoctorName);
    }

    async selectSalesRep(salesRepName:string) {
        await this.getOrdersPO().getClinicalInfoPO().getSalesRepDropdown().selectOption(salesRepName);
    }

    //Rx Information 


    //Diagnosis ICD-10 codes


    //Footer
    async save() {
        await this.getOrdersPO().getClinicalInfoPO().getSaveButton().click();
    }

    /**
     * Workflow methods
     */

    async fillDoctorInfo(clinicalInfo:ClinicalInfo) {
        browser.logger.info("Filling in the -Doctor Info- section of Clinical Info tab."); 
        
        //Required fields
        if(clinicalInfo.getOrderingDoctorName() != null) {
            await this.selectOrderingDoctor(clinicalInfo.getOrderingDoctorName());
        }
        
        //Non-mandatory fields
        if(clinicalInfo.getFacility() != null) {
            await this.selectFacility(clinicalInfo.getFacility());
        }
        
        if(clinicalInfo.getPrimaryDoctorName() != null) {
            await this.selectPrimaryDoctor(clinicalInfo.getPrimaryDoctorName());
        }
        
        if(clinicalInfo.getSalesRepName() != null) {
            await this.selectSalesRep(clinicalInfo.getSalesRepName()); 
        }
    }
}