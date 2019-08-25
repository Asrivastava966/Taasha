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
const TechnicianManagementPO_1 = require("../../../po/admindashboardpage/techniciansbucket/TechnicianManagementPO");
class TechnicianManagementLib {
    constructor() {
        this.technicianManagementPO = new TechnicianManagementPO_1.TechnicianManagementPO();
    }
    getTechnicianManagementPO() {
        return this.technicianManagementPO;
    }
    navigateBackToAdminDashboardPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTechnicianManagementPO().getAdminDashboardButton().click();
        });
    }
    filterByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTechnicianManagementPO().getTechnicianManagementGrid().filterByName(name);
        });
    }
    getName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTechnicianManagementPO().getTechnicianManagementGrid().getName(rowNumber);
        });
    }
    updateTechnician(technicianName) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstRowIndex = 1;
            yield this.filterByName(technicianName);
            yield this.getTechnicianManagementPO().getTechnicianManagementGrid().updateTechnician(firstRowIndex);
        });
    }
    navigateBackToTechniciansGridPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTechnicianManagementPO().getBackToTechniciansButton().click();
        });
    }
    getSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTechnicianManagementPO().getSuccessMessage().getText();
        });
    }
    //Update Form - workflow
    selectSkillSet(skillSet) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTechnicianManagementPO().getSkillSetSelectDropdown().selectOption(skillSet);
        });
    }
    selectTechnicianType(technicianType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTechnicianManagementPO().getTechnicianTypeSelectDropdown().selectOption(technicianType);
        });
    }
    selectStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTechnicianManagementPO().getStatusSelectDropdown().selectOption(status);
        });
    }
    checkWarehouseSelectAllCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTechnicianManagementPO().getWarehousesSelectAllCheckbox().click();
        });
    }
    fillNotes(notes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTechnicianManagementPO().getNotesTextarea().sendKeys(notes);
        });
    }
    fillTechnicianInfo(technicianInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (technicianInfo.getSkillSet() != null) {
                yield this.selectSkillSet(technicianInfo.getSkillSet());
            }
            if (technicianInfo.getTechnicianType() != null) {
                yield this.selectTechnicianType(technicianInfo.getTechnicianType());
            }
            if (technicianInfo.getStatus() != null) {
                yield this.selectStatus(technicianInfo.getStatus());
            }
            if (technicianInfo.getWarehouseSelectAllCheckbox() != null) {
                if (technicianInfo.getWarehouseSelectAllCheckbox() == true) {
                    yield this.checkWarehouseSelectAllCheckbox();
                }
            }
            if (technicianInfo.getNotes() != null) {
                yield this.fillNotes(technicianInfo.getNotes());
            }
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTechnicianManagementPO().getUpdateButton().click();
        });
    }
    //Update Form - read auto-populated values
    getFirstNameFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTechnicianManagementPO().getFirstNameInputField().getAttribute('value');
        });
    }
    getLastNameFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTechnicianManagementPO().getLastNameInputField().getAttribute('value');
        });
    }
    getEmailFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTechnicianManagementPO().getEmailInputField().getAttribute('value');
        });
    }
    getPhoneFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTechnicianManagementPO().getPhoneInputField().getAttribute('value');
        });
    }
    getAddressOneFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTechnicianManagementPO().getAddressOneInputField().getAttribute('value');
        });
    }
    getCityFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTechnicianManagementPO().getCityInputField().getAttribute('value');
        });
    }
    getZipCodeFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTechnicianManagementPO().getZipCodeInputField().getAttribute('value');
        });
    }
}
exports.TechnicianManagementLib = TechnicianManagementLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVjaG5pY2lhbk1hbmFnZW1lbnRMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9hZG1pbmRhc2hib2FyZHBhZ2UvdGVjaG5pY2lhbnNidWNrZXQvVGVjaG5pY2lhbk1hbmFnZW1lbnRMaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9IQUFpSDtBQU1qSCxNQUFhLHVCQUF1QjtJQUdoQztRQUNJLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLCtDQUFzQixFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELHlCQUF5QjtRQUNyQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN2QyxDQUFDO0lBRUssZ0NBQWdDOztZQUNsQyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0UsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLElBQVc7O1lBQzFCLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUYsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLFNBQWdCOztZQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkcsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQUMsY0FBcUI7O1lBQ3hDLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN0QixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pHLENBQUM7S0FBQTtJQUVL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