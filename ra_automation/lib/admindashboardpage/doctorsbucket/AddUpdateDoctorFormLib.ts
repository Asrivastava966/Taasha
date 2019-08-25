import { AddUpdateDoctorFormPO } from "../../../po/admindashboardpage/doctorsbucket/AddUpdateDoctorFormPO";
import { Title } from "../../../data/enums/Title";
import { Specialty } from "../../../data/enums/Specialty";
import { UserStatus } from "../../../data/enums/UserStatus";
import { DeliveredBy } from "../../../data/enums/DeliveredBy";
import { DoctorInfo } from "../../../data/info/DoctorInfo";

export class AddUpdateDoctorFormLib {
    addUpdateDoctorFormPO: AddUpdateDoctorFormPO

    constructor() {
        this.addUpdateDoctorFormPO = new AddUpdateDoctorFormPO()
    }

    getAddNewDoctorPO() {
        return this.addUpdateDoctorFormPO
    }

    async navigateBackToDoctorManagementPage() {
        return await this.getAddNewDoctorPO().getBackToDoctorsButton().click()
    }

    async selectFirstNameTitle(title: Title) {
        await this.getAddNewDoctorPO().getTitleSelectDropdown().selectOption(title)
    }
    async fillFirstName(firstname: string) {
        await this.getAddNewDoctorPO().getFirstNameSelectInputField().sendKeys(firstname)
    }
    async fillMI(mi: string) {
        await this.getAddNewDoctorPO().getMiInputField().sendKeys(mi)
    }
    async fillLastName(lastname: string) {
        await this.getAddNewDoctorPO().getLastNameInputField().sendKeys(lastname)
    }
    async fillNPI(npi: number) {
        await this.getAddNewDoctorPO().getNpiInputField().sendKeys(npi)
    }
    async selectSpecialty(specialty: Specialty) {
        await this.getAddNewDoctorPO().getSpecialtySelectDropdown().selectOption(specialty)
    }
    async selectStatus(status: UserStatus) {
        await this.getAddNewDoctorPO().getStatusSelectDropDown().selectOption(status)
    }
    async fillLegacyID(legacyid: string) {
        await this.getAddNewDoctorPO().getLegacyIDInputField().sendKeys(legacyid)
    }
    async fillAddressOne(address1: string) {
        await this.getAddNewDoctorPO().getAddressOneInputField().sendKeys(address1)
    }
    async fillAddressTwo(address2: string) {
        await this.getAddNewDoctorPO().getAddressTwoInputField().sendKeys(address2)
    }
    async fillCity(city: string) {
        await this.getAddNewDoctorPO().getCityInputField().sendKeys(city)
    }
    async selectState(state: string) {
        await this.getAddNewDoctorPO().getStateSelectDropdown().selectOption(state)
    }
    async fillZipCode(zipcode: number) {
        await this.getAddNewDoctorPO().getZipCodeInputField().sendKeys(zipcode)
    }

    // Other Identifiers - pending

    // Contact Information
    async fillOfficeContact(officeContact: number) {
        await this.getAddNewDoctorPO().getOfficeContactInputField().sendKeys(officeContact)
    }
    async CheckPhoneCheckbox() {
        await this.getAddNewDoctorPO().getPhoneCheckbox().click()
    }
    async fillPhoneNumber(phone: number) {
        await this.getAddNewDoctorPO().getPhoneInputField().sendKeys(phone)
    }
    async fillPhoneExt(ext: number) {
        await this.getAddNewDoctorPO().getExtInputField().sendKeys(ext)
    }
    async checkMobileCheckbox() {
        await this.getAddNewDoctorPO().getMobileCheckbox().click()
    }
    async fillMobile(mobile: number) {
        await this.getAddNewDoctorPO().getMobileInputField().sendKeys(mobile)
    }
    async checkEmailCheckbox() {
        await this.getAddNewDoctorPO().getEmailCheckbox().click()
    }
    async fillEmail(email: string) {
        await this.getAddNewDoctorPO().getEmailInputField().sendKeys(email)
    }
    async checkFaxCheckbox() {
        await this.getAddNewDoctorPO().getFaxCheckbox().click();
    }
    async fillFaxNumber(faxNumber: number) {
        await this.getAddNewDoctorPO().getFaxInputField().sendKeys(faxNumber);
    }

    // Marketing Informtion
    async selectPrimaryFacility(primaryFacility: string) {
        await this.getAddNewDoctorPO().getPrimaryFacilitySelectDropdown().selectOption(primaryFacility)
    }
    async selectPrimaryMarketing(primaryMarketing: string) {
        await this.getAddNewDoctorPO().getPrimaryMarketingSelectDropdown().selectOption(primaryMarketing)
    }
    async selectSecondaryMarketing(secondaryMarketing: string) {
        await this.getAddNewDoctorPO().getSecondaryMarketingSelectDropdown().selectOption(secondaryMarketing)
    }

    // Delivery Instruction
    async selectDeliveredBy(delivered: DeliveredBy) {
        await this.getAddNewDoctorPO().getDeliveredBySelectDropdown().selectOption(delivered)
    }
    async fillNotesText(note: string) {
        await this.getAddNewDoctorPO().getNotesTextarea().sendKeys(note)
    }
    
    async submit() {
        await this.getAddNewDoctorPO().getSubmitButton().click()
    }
    
    async update() {
        await this.getAddNewDoctorPO().getUpdateButton().click()
    }

    //Success message 
    async getSuccessMessageText() {
        return await this.getAddNewDoctorPO().getSuccessMessageElement().getText()
    }

    //Duplicated validation message
    async getDuplicateDoctorValidationMessage() {
        return await this.getAddNewDoctorPO().getDuplicateMessageElement().getText()
    }
    
    //Add-Update Doctor Info
    async fillDoctorInfo(doctorInfo: DoctorInfo) {
        if (doctorInfo.getTitle() != null) {
            await this.selectFirstNameTitle(doctorInfo.getTitle())
        }
        if (doctorInfo.getFirstName() != null) {
            await this.fillFirstName(doctorInfo.getFirstName())
        }
        if (doctorInfo.getLastName() != null) {
            await this.fillLastName(doctorInfo.getLastName())
        }
        if (doctorInfo.getNpiNumber() != null) {
            await this.fillNPI(doctorInfo.getNpiNumber())
        }
        if (doctorInfo.getStatus() != null) {
            await this.selectStatus(doctorInfo.getStatus())
        }
        if (doctorInfo.getPhone() != null) {
            await this.fillPhoneNumber(doctorInfo.getPhone())
        }
        if (doctorInfo.getExt() != null) {
            await this.fillPhoneExt(doctorInfo.getExt())
        }
        if (doctorInfo.getDeliveredBy() != null) {
            await this.selectDeliveredBy(doctorInfo.getDeliveredBy())
        }
    }
}