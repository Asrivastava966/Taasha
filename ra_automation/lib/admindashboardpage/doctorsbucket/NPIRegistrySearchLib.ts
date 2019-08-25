import { NPIRegistrySearchPO } from "../../../po/admindashboardpage/doctorsbucket/NPIRegisterySearchPO";
import { DoctorInfo } from "../../../data/info/DoctorInfo";

export class NPIRegistrySearchLib {
    npiRegistrySearchPO: NPIRegistrySearchPO

    constructor() {
        this.npiRegistrySearchPO = new NPIRegistrySearchPO()
    }

    getNPIRegistrySearchPO() {
        return this.npiRegistrySearchPO
    }
    
    // Back To Doctors
    async navigateBackToDoctors() {
        await this.getNPIRegistrySearchPO().getBackToDoctorsButton().click()
    }

    //Search
    async searchUsingNPINumberFilter(npinumber: number) {
        await this.getNPIRegistrySearchPO().getNpiNumberFilterInput().sendKeys(npinumber)
    }
    async searchUsingFirstNameFilter(firstName: string) {
        await this.getNPIRegistrySearchPO().getFirstNameFilterInput().sendKeys(firstName)
    }
    async searchUsingLastNameFilter(lastName: string) {
        await this.getNPIRegistrySearchPO().getLastNameFilterInput().sendKeys(lastName)
    }
    async searchUsingTaxonomyDescFilter(taxonomy: string) {
        await this.getNPIRegistrySearchPO().getTaxonomyDescFilterInput().sendKeys(taxonomy)
    }
    async searchUsingPostalCodeFilter(postalcode: number) {
        await this.getNPIRegistrySearchPO().getPostalCodeFilterInput().sendKeys(postalcode)
    }
    async searchUsingCityFilter(city: string) {
        await this.getNPIRegistrySearchPO().getCityFilterInput().sendKeys(city)
    }
    async searchUsingStateFilter(state: string) {
        await this.getNPIRegistrySearchPO().getStateFilterSelectDropdown().selectOption(state)
    }
    async search() {
        await this.getNPIRegistrySearchPO().getSearchButton().click()
    }

    async searchUsingFilters(doctorInfo: DoctorInfo) {
        if (doctorInfo.getNpiNumber() != null) {
            await this.searchUsingNPINumberFilter(doctorInfo.getNpiNumber())
        }
        if (doctorInfo.getFirstName() != null) {
            await this.searchUsingFirstNameFilter(doctorInfo.getFirstName())
        }
        if (doctorInfo.getLastName() != null) {
            await this.searchUsingLastNameFilter(doctorInfo.getLastName())
        }
        if (doctorInfo.getSpecialty() != null) {
            await this.searchUsingTaxonomyDescFilter(doctorInfo.getSpecialty())
        }
        if (doctorInfo.getZipCode() != null) {
            await this.searchUsingPostalCodeFilter(doctorInfo.getZipCode())
        }
        if (doctorInfo.getCity() != null) {
            await this.searchUsingCityFilter(doctorInfo.getCity())
        }
        if (doctorInfo.getState() != null) {
            await this.searchUsingStateFilter(doctorInfo.getState())
        }

        await this.search()
    }

    async updateFirstDoctor() {
        await this.getNPIRegistrySearchPO().getUpdateButtonOfFirstRow().click()
    }

    async getTotalPatientsCount() {
        return this.getNPIRegistrySearchPO().getTotalPatientsCount().count()
    }
}