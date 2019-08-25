"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const NPIRegisterySearchPO_1 = require("../../../po/admindashboardpage/doctorsbucket/NPIRegisterySearchPO");
class NPIRegistrySearchLib {
    constructor() {
        this.npiRegistrySearchPO = new NPIRegisterySearchPO_1.NPIRegistrySearchPO();
    }
    getNPIRegistrySearchPO() {
        return this.npiRegistrySearchPO;
    }
    // Back To Doctors
    navigateBackToDoctors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNPIRegistrySearchPO().getBackToDoctorsButton().click();
        });
    }
    //Search
    searchUsingNPINumberFilter(npinumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNPIRegistrySearchPO().getNpiNumberFilterInput().sendKeys(npinumber);
        });
    }
    searchUsingFirstNameFilter(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNPIRegistrySearchPO().getFirstNameFilterInput().sendKeys(firstName);
        });
    }
    searchUsingLastNameFilter(lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNPIRegistrySearchPO().getLastNameFilterInput().sendKeys(lastName);
        });
    }
    searchUsingTaxonomyDescFilter(taxonomy) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNPIRegistrySearchPO().getTaxonomyDescFilterInput().sendKeys(taxonomy);
        });
    }
    searchUsingPostalCodeFilter(postalcode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNPIRegistrySearchPO().getPostalCodeFilterInput().sendKeys(postalcode);
        });
    }
    searchUsingCityFilter(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNPIRegistrySearchPO().getCityFilterInput().sendKeys(city);
        });
    }
    searchUsingStateFilter(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNPIRegistrySearchPO().getStateFilterSelectDropdown().selectOption(state);
        });
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNPIRegistrySearchPO().getSearchButton().click();
        });
    }
    searchUsingFilters(doctorInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (doctorInfo.getNpiNumber() != null) {
                yield this.searchUsingNPINumberFilter(doctorInfo.getNpiNumber());
            }
            if (doctorInfo.getFirstName() != null) {
                yield this.searchUsingFirstNameFilter(doctorInfo.getFirstName());
            }
            if (doctorInfo.getLastName() != null) {
                yield this.searchUsingLastNameFilter(doctorInfo.getLastName());
            }
            if (doctorInfo.getSpecialty() != null) {
                yield this.searchUsingTaxonomyDescFilter(doctorInfo.getSpecialty());
            }
            if (doctorInfo.getZipCode() != null) {
                yield this.searchUsingPostalCodeFilter(doctorInfo.getZipCode());
            }
            if (doctorInfo.getCity() != null) {
                yield this.searchUsingCityFilter(doctorInfo.getCity());
            }
            if (doctorInfo.getState() != null) {
                yield this.searchUsingStateFilter(doctorInfo.getState());
            }
            yield this.search();
        });
    }
    updateFirstDoctor() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNPIRegistrySearchPO().getUpdateButtonOfFirstRow().click();
        });
    }
    getTotalPatientsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getNPIRegistrySearchPO().getTotalPatientsCount().count();
        });
    }
}
exports.NPIRegistrySearchLib = NPIRegistrySearchLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTlBJUmVnaXN0cnlTZWFyY2hMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9hZG1pbmRhc2hib2FyZHBhZ2UvZG9jdG9yc2J1Y2tldC9OUElSZWdpc3RyeVNlYXJjaExpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNEdBQXdHO0FBR3hHLE1BQWEsb0JBQW9CO0lBRzdCO1FBQ0ksSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksMENBQW1CLEVBQUUsQ0FBQTtJQUN4RCxDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFBO0lBQ25DLENBQUM7SUFFRCxrQkFBa0I7SUFDWixxQkFBcUI7O1lBQ3ZCLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN4RSxDQUFDO0tBQUE7SUFFRCxRQUFRO0lBQ0YsMEJBQTBCLENBQUMsU0FBaUI7O1lBQzlDLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDckYsQ0FBQztLQUFBO0lBQ0ssMEJBQTBCLENBQUMsU0FBaUI7O1lBQzlDLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDckYsQ0FBQztLQUFBO0lBQ0sseUJBQXlCLENBQUMsUUFBZ0I7O1lBQzVDLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbkYsQ0FBQztLQUFBO0lBQ0ssNkJBQTZCLENBQUMsUUFBZ0I7O1lBQ2hELE1BQU0sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsMEJBQTBCLEVB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