import { ComplianceInfo } from "../../../data/info/ComplianceInfo";
import { CompliancePO } from "../../../po/normaladdpatientpage/cpap/CompliancePO";
import { WaitUtils } from "../../../utils/WaitUtils";
import { ProductManufacturer } from "../../../data/enums/ProductManufacturer";

export class ComplianceLib {
    waitUtils: WaitUtils;
    compliancePO: CompliancePO;
    
    constructor() {
        this.waitUtils = new WaitUtils();
        this.compliancePO = new CompliancePO();

    }
    async getWaitUtils() {
        return await this.waitUtils;
    }
    
    async getFirstNameValue() {
        return await this.compliancePO.getFirstName().getAttribute('value');
    }

    async getManufacturerValue() {
        return await this.compliancePO.getManufacturer().getAttribute('value');
    }

    async getLastNameValue() {
        return await this.compliancePO.getLastName().getAttribute('value');
    }

    async getDOBValue() {
        return await this.compliancePO.getOrderNo().getAttribute('value');
    }

    async getSetupDateValue() {
        return await this.compliancePO.getSetupDate().getAttribute('value');
    }

    async getStatusValue() {
        return await this.compliancePO.getStatus().getAttribute('label');
    }

    async getOrderNoValue() {
        return await this.compliancePO.getOrderNo().getAttribute('value');
    }

    //Workflow method
    async fillComplianceInfo(manufacturer:ProductManufacturer, complianceInfo:ComplianceInfo) {
        await this.compliancePO.getDmeOfficeDropDown().selectOption(complianceInfo.getDmeOffice());
        await this.compliancePO.getClinicalUserDropDown().selectOption(complianceInfo.getClinicalUser());

        switch(manufacturer) {
            case ProductManufacturer.RESPIRONICS: {
                await this.compliancePO.getRespironicsPapTypeDropDown().selectOption(complianceInfo.getPapType());
                await this.compliancePO.getRepironicsPapModelDropDown().selectOption(complianceInfo.getPapModel());
                await this.compliancePO.getRespironicsPapSerialNumberInputField().sendKeys(complianceInfo.getRespironicsPapSerialNumber());
            }

            case ProductManufacturer.RESMED: {
                await this.compliancePO.getResmedPapSerialNumberInputField().sendKeys(complianceInfo.getResmedPapSerialNumber());
                await this.compliancePO.getResmedDeviceNumberInputField().sendKeys(complianceInfo.getDeviceNumber());
            }
        }
    }

    async submit() {
        await this.compliancePO.getSubmitButton().click();
    }

    async cancel() {
        await this.compliancePO.getCancelButton().click();
    }

    //error
    async getRespironicsPapModelRequiredFieldErrorMessage() {
        return await this.compliancePO.getRespironicsPapModelDropdownRequiredFieldError().getText();
    }

    async getRespironicsPapSerialNumberErrorMessage() {
        return await this.compliancePO.getRespironicsPapSerialNumberInputFieldRequiredFieldError().getText();
    }

    async getResmedPapSerialNumberRequiredFieldErrorMessage() {
        return await this.compliancePO.getResmedPapSerialNumberInputFieldRequiredFieldError().getText();
    }

    async getResmedDeviceNumberRequiredFieldErrorMessage() {
        return await this.compliancePO.getResmedDeviceNumberInputFieldRequiredFieldError().getText();
    }

    //Disabled field checks 
    async getFirstNameInputFieldDisabledAttributeValue() {
        return await this.compliancePO.getFirstName().getAttribute('ng-disabled');
    }

    async getManufacturerInputFieldDisabledAttributeValue() {
        return await this.compliancePO.getManufacturer().getAttribute('ng-disabled');
    }

    async getLastNameInputFieldDisabledAttributeValue() {
        return await this.compliancePO.getLastName().getAttribute('ng-disabled');
    }

    async getDOBInputFieldDisabledAttributeValue() {
        return await this.compliancePO.getOrderNo().getAttribute('ng-disabled');
    }

    async getSetupDateInputFieldDisabledAttributeValue() {
        return await this.compliancePO.getSetupDate().getAttribute('ng-disabled');
    }

    async getStatusFieldDisabledAttributeValue() {
        return await this.compliancePO.getStatus().getAttribute('ng-disabled');
    }

    async getOrderNoFieldDisabledAttributeValue() {
        return await this.compliancePO.getOrderNo().getAttribute('ng-disabled');
    }
}