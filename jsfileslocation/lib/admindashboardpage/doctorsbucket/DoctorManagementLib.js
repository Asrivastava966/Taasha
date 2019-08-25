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
const DoctorManagementPO_1 = require("../../../po/admindashboardpage/doctorsbucket/DoctorManagementPO");
const NPIRegistrySearchLib_1 = require("./NPIRegistrySearchLib");
const AddUpdateDoctorFormLib_1 = require("./AddUpdateDoctorFormLib");
class DoctorManagementLib {
    constructor() {
        this.doctorManagementPO = new DoctorManagementPO_1.DoctorManagementPO();
        this.npiRegistrySearchLib = new NPIRegistrySearchLib_1.NPIRegistrySearchLib();
        this.addUpdateNewDoctorFormLib = new AddUpdateDoctorFormLib_1.AddUpdateDoctorFormLib();
    }
    getDoctorManagementPO() {
        return this.doctorManagementPO;
    }
    getNPIRegistrySearchLib() {
        return this.npiRegistrySearchLib;
    }
    getAddUpdateNewDoctorFormLib() {
        return this.addUpdateNewDoctorFormLib;
    }
    navigateToAdminDashboard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getAdminDashboardButton().click();
        });
    }
    navigateToNPIRegistrySearch() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getNPIRegistrySearchButton().click();
        });
    }
    navigateToAddNewDoctor() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getAddNewDoctorButton().click();
        });
    }
    //Filters
    filterUsingLastName(lastname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getLastNameFilterInputField().sendKeys(lastname);
        });
    }
    filterUsingFirstName(firstname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getFirstNameFilterInputField().sendKeys(firstname);
        });
    }
    filterUsingMiddle(middle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getMiddleFilterInputField().sendKeys(middle);
        });
    }
    filterUsingNPI(npi) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getNpiFilterInputField().sendKeys(npi);
        });
    }
    filterUsingPhone(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getPhoneFilterInputField().sendKeys(phone);
        });
    }
    filterUsingAddressOne(address1) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getAddress1FilterInputField().sendKeys(address1);
        });
    }
    filterUsingAddressTwo(address2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getAddress2FilterInputField().sendKeys(address2);
        });
    }
    filterUsingCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getCityFilterInputField().sendKeys(city);
        });
    }
    filterUsingState(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getStateFilterSelectDropdown().selectOption(state);
        });
    }
    filterUsingZipCode(zipCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getZipCodeFilterInputField().sendKeys(zipCode);
        });
    }
    filterUsingFacility(facility) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getFacilityFilterSelectDropdown().selectOption(facility);
        });
    }
    filterUsingMarketingRep(marketingRep) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getMarketingRepFilterSelectDropdown().selectOption(marketingRep);
        });
    }
    filter() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getFilterButton().click();
        });
    }
    clearFilters() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDoctorManagementPO().getClearButton().click();
        });
    }
    doctormanagementFilter(doctorInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (doctorInfo.getLastName() != null) {
                yield this.filterUsingLastName(doctorInfo.getLastName());
            }
            if (doctorInfo.getFirstName() != null) {
                yield this.filterUsingFirstName(doctorInfo.getFirstName());
            }
            if (doctorInfo.getMi() != null) {
                yield this.filterUsingMiddle(doctorInfo.getMi());
            }
            if (doctorInfo.getNpiNumber() != null) {
                yield this.filterUsingNPI(doctorInfo.getNpiNumber());
            }
            if (doctorInfo.getPhone() != null) {
                yield this.filterUsingPhone(doctorInfo.getPhone());
            }
            if (doctorInfo.getAddress1() != null) {
                yield this.filterUsingAddressOne(doctorInfo.getAddress1());
            }
            if (doctorInfo.getAddress2() != null) {
                yield this.filterUsingAddressTwo(doctorInfo.getAddress2());
            }
            if (doctorInfo.getCity() != null) {
                yield this.filterUsingCity(doctorInfo.getCity());
            }
            if (doctorInfo.getState() != null) {
                yield this.filterUsingState(doctorInfo.getState());
            }
            if (doctorInfo.getZipCode() != null) {
                yield this.filterUsingZipCode(doctorInfo.getZipCode());
            }
            if (doctorInfo.getFacility() != null) {
                yield this.filterUsingFacility(doctorInfo.getFacility());
            }
            if (doctorInfo.getMarketingRep() != null) {
                yield this.filterUsingMarketingRep(doctorInfo.getMarketingRep());
            }
            yield this.filter();
        });
    }
    //Doctor Management Grid
    updateDoctor(firstName, lastName, npi) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.filterUsingLastName(lastName);
            yield this.filterUsingFirstName(firstName);
            yield this.filterUsingNPI(npi);
            yield this.filter();
            let firstRowIndex = 1;
            yield this.getDoctorManagementPO().getDoctorManagementGrid().updateDoctor(firstRowIndex);
        });
    }
    deleteDoctor(firstName, lastName, npi) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.filterUsingLastName(lastName);
            yield this.filterUsingFirstName(firstName);
            yield this.filterUsingNPI(npi);
            yield this.filter();
            let firstRowIndex = 1;
            yield this.getDoctorManagementPO().getDoctorManagementGrid().deleteDoctor(firstRowIndex);
        });
    }
}
exports.DoctorManagementLib = DoctorManagementLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdG9yTWFuYWdlbWVudExpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL2FkbWluZGFzaGJvYXJkcGFnZS9kb2N0b3JzYnVja2V0L0RvY3Rvck1hbmFnZW1lbnRMaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdHQUFxRztBQUVyRyxpRUFBOEQ7QUFDOUQscUVBQWtFO0FBRWxFLE1BQWEsbUJBQW1CO0lBSzVCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQTtRQUNsRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLCtDQUFzQixFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUVELHFCQUFxQjtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsdUJBQXVCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFBO0lBQ3BDLENBQUM7SUFFRCw0QkFBNEI7UUFDeEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUE7SUFDekMsQ0FBQztJQUVLLHdCQUF3Qjs7WUFDMUIsTUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3hFLENBQUM7S0FBQTtJQUVLLDJCQUEyQjs7WUFDN0IsTUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzNFLENBQUM7S0FBQTtJQUVLLHNCQUFzQjs7WUFDeEIsTUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3RFLENBQUM7S0FBQTtJQUVELFNBQVM7SUFDSCxtQkFB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