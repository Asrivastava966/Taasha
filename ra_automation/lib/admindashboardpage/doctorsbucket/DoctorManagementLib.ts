import { DoctorManagementPO } from "../../../po/admindashboardpage/doctorsbucket/DoctorManagementPO";
import { DoctorInfo } from "../../../data/info/DoctorInfo";
import { NPIRegistrySearchLib } from "./NPIRegistrySearchLib";
import { AddUpdateDoctorFormLib } from "./AddUpdateDoctorFormLib";

export class DoctorManagementLib {
    doctorManagementPO: DoctorManagementPO
    npiRegistrySearchLib: NPIRegistrySearchLib;
    addUpdateNewDoctorFormLib: AddUpdateDoctorFormLib;

    constructor() {
        this.doctorManagementPO = new DoctorManagementPO()
        this.npiRegistrySearchLib = new NPIRegistrySearchLib();
        this.addUpdateNewDoctorFormLib = new AddUpdateDoctorFormLib();
    }

    getDoctorManagementPO() {
        return this.doctorManagementPO
    }

    getNPIRegistrySearchLib() {
        return this.npiRegistrySearchLib
    }

    getAddUpdateNewDoctorFormLib() {
        return this.addUpdateNewDoctorFormLib
    }

    async navigateToAdminDashboard() {
        await this.getDoctorManagementPO().getAdminDashboardButton().click()
    }

    async navigateToNPIRegistrySearch() {
        await this.getDoctorManagementPO().getNPIRegistrySearchButton().click()
    }

    async navigateToAddNewDoctor() {
        await this.getDoctorManagementPO().getAddNewDoctorButton().click()
    }

    //Filters
    async filterUsingLastName(lastname: string) {
        await this.getDoctorManagementPO().getLastNameFilterInputField().sendKeys(lastname)
    }
    async filterUsingFirstName(firstname: string) {
        await this.getDoctorManagementPO().getFirstNameFilterInputField().sendKeys(firstname)
    }
    async filterUsingMiddle(middle: string) {
        await this.getDoctorManagementPO().getMiddleFilterInputField().sendKeys(middle)
    }
    async filterUsingNPI(npi: number) {
        await this.getDoctorManagementPO().getNpiFilterInputField().sendKeys(npi)
    }
    async filterUsingPhone(phone: number) {
        await this.getDoctorManagementPO().getPhoneFilterInputField().sendKeys(phone)
    }
    async filterUsingAddressOne(address1: string) {
        await this.getDoctorManagementPO().getAddress1FilterInputField().sendKeys(address1)
    }
    async filterUsingAddressTwo(address2: string) {
        await this.getDoctorManagementPO().getAddress2FilterInputField().sendKeys(address2)
    }
    async filterUsingCity(city: string) {
        await this.getDoctorManagementPO().getCityFilterInputField().sendKeys(city)
    }
    async filterUsingState(state: string) {
        await this.getDoctorManagementPO().getStateFilterSelectDropdown().selectOption(state)
    }
    async filterUsingZipCode(zipCode: number) {
        await this.getDoctorManagementPO().getZipCodeFilterInputField().sendKeys(zipCode)
    }
    async filterUsingFacility(facility: string) {
        await this.getDoctorManagementPO().getFacilityFilterSelectDropdown().selectOption(facility)
    }
    async filterUsingMarketingRep(marketingRep: string) {
        await this.getDoctorManagementPO().getMarketingRepFilterSelectDropdown().selectOption(marketingRep)
    }
    async filter() {
        await this.getDoctorManagementPO().getFilterButton().click()
    }
    async clearFilters() {
        await this.getDoctorManagementPO().getClearButton().click();
    }

    async doctormanagementFilter(doctorInfo: DoctorInfo) {
        if (doctorInfo.getLastName() != null) {
            await this.filterUsingLastName(doctorInfo.getLastName())
        }
        if (doctorInfo.getFirstName() != null) {
            await this.filterUsingFirstName(doctorInfo.getFirstName())
        }
        if (doctorInfo.getMi() != null) {
            await this.filterUsingMiddle(doctorInfo.getMi())
        }
        if (doctorInfo.getNpiNumber() != null) {
            await this.filterUsingNPI(doctorInfo.getNpiNumber())
        }
        if (doctorInfo.getPhone() != null) {
            await this.filterUsingPhone(doctorInfo.getPhone())
        }
        if (doctorInfo.getAddress1() != null) {
            await this.filterUsingAddressOne(doctorInfo.getAddress1())
        }
        if (doctorInfo.getAddress2() != null) {
            await this.filterUsingAddressTwo(doctorInfo.getAddress2())
        }
        if (doctorInfo.getCity() != null) {
            await this.filterUsingCity(doctorInfo.getCity())
        }
        if (doctorInfo.getState() != null) {
            await this.filterUsingState(doctorInfo.getState())
        }
        if (doctorInfo.getZipCode() != null) {
            await this.filterUsingZipCode(doctorInfo.getZipCode())
        }
        if (doctorInfo.getFacility() != null) {
            await this.filterUsingFacility(doctorInfo.getFacility())
        }
        if (doctorInfo.getMarketingRep() != null) {
            await this.filterUsingMarketingRep(doctorInfo.getMarketingRep())
        }

        await this.filter()
    }

    //Doctor Management Grid
    async updateDoctor(firstName: string, lastName: string, npi: number) {
        await this.filterUsingLastName(lastName);
        await this.filterUsingFirstName(firstName);
        await this.filterUsingNPI(npi);
        await this.filter();

        let firstRowIndex = 1;
        await this.getDoctorManagementPO().getDoctorManagementGrid().updateDoctor(firstRowIndex);
    }

    async deleteDoctor(firstName: string, lastName: string, npi: number) {
        await this.filterUsingLastName(lastName);
        await this.filterUsingFirstName(firstName);
        await this.filterUsingNPI(npi);
        await this.filter();

        let firstRowIndex = 1;
        await this.getDoctorManagementPO().getDoctorManagementGrid().deleteDoctor(firstRowIndex);
    }
}