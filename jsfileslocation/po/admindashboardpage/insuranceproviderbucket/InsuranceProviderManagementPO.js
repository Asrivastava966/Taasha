"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const InsuranceProviderManagementGrid_1 = require("../../../component/comp/InsuranceProviderManagementGrid");
const AddUpdateInsuranceProviderFormPO_1 = require("./AddUpdateInsuranceProviderFormPO");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
const ConfirmationModalYesNoDialog_1 = require("../../../component/comp/ConfirmationModalYesNoDialog");
class InsuranceProviderManagementPO {
    constructor() {
        this.addUpdateInsuranceProviderFormPO = new AddUpdateInsuranceProviderFormPO_1.AddUpdateInsuranceProviderFormPO();
    }
    getAddUpdateInsuranceProviderFormPO() {
        return this.addUpdateInsuranceProviderFormPO;
    }
    getDeleteInsProviderConfirmationModal() {
        return new ConfirmationModalYesNoDialog_1.ConfirmationModalYesNoDialog(InsuranceProviderManagementPO.deleteInsProviderConfirmationModal);
    }
    getSuccessMessage() {
        return InsuranceProviderManagementPO.successMessage;
    }
    getAdminDashboardButton() {
        return InsuranceProviderManagementPO.adminDashboardButton;
    }
    getAddNewProvidersButton() {
        return InsuranceProviderManagementPO.addNewProvidersButton;
    }
    getStatusFilterDropdown() {
        return new SelectDropdown_1.SelectDropdown(InsuranceProviderManagementPO.statusFilterDropdown);
    }
    getProviderNameFilterInputField() {
        return InsuranceProviderManagementPO.providerNameFilterInputField;
    }
    getLegacyIDFilterInputField() {
        return InsuranceProviderManagementPO.legacyIDFilterInputField;
    }
    getFeeScheduleFilterDropdown() {
        return new SelectDropdown_1.SelectDropdown(InsuranceProviderManagementPO.feeScheduleFilterDropdown);
    }
    getProviderNumberFilterInputField() {
        return InsuranceProviderManagementPO.providerNumberFilterInputField;
    }
    getGroupFilterDropdown() {
        return new SelectDropdown_1.SelectDropdown(InsuranceProviderManagementPO.groupFilterDropdown);
    }
    getSearchButton() {
        return InsuranceProviderManagementPO.searchButton;
    }
    getNoInsuranceProviderFoundValidation() {
        return InsuranceProviderManagementPO.noInsuranceProviderFoundValidation;
    }
    getInsuranceProviderGrid() {
        return new InsuranceProviderManagementGrid_1.InsuranceProviderManagementGrid(InsuranceProviderManagementPO.insuranceProviderGrid);
    }
}
InsuranceProviderManagementPO.deleteInsProviderConfirmationModal = protractor_1.element(protractor_1.by.className('modal-dialog'));
InsuranceProviderManagementPO.successMessage = protractor_1.element(protractor_1.by.className('alert'));
InsuranceProviderManagementPO.adminDashboardButton = protractor_1.element(protractor_1.by.buttonText('Admin Dashboard'));
InsuranceProviderManagementPO.addNewProvidersButton = protractor_1.element(protractor_1.by.css('[ng-click=\"openProvider()\"]'));
//Insurance Provider search 
InsuranceProviderManagementPO.statusFilterDropdown = protractor_1.element(protractor_1.by.id('inputFilterStatus'));
InsuranceProviderManagementPO.providerNameFilterInputField = protractor_1.element(protractor_1.by.id('inputSearchName'));
InsuranceProviderManagementPO.legacyIDFilterInputField = protractor_1.element(protractor_1.by.id('inputSearchLegacy'));
InsuranceProviderManagementPO.feeScheduleFilterDropdown = protractor_1.element(protractor_1.by.id('inputSearchFeeSchedule'));
InsuranceProviderManagementPO.providerNumberFilterInputField = protractor_1.element(protractor_1.by.id('inputSearchProviderNum'));
InsuranceProviderManagementPO.groupFilterDropdown = protractor_1.element(protractor_1.by.model('filterValue.groupTypeCd'));
InsuranceProviderManagementPO.searchButton = protractor_1.element(protractor_1.by.css('[type=\"submit\"]'));
InsuranceProviderManagementPO.noInsuranceProviderFoundValidation = protractor_1.element(protractor_1.by.className('text-danger'));
//Grid 
InsuranceProviderManagementPO.insuranceProviderGrid = protractor_1.element(protractor_1.by.className('grid'));
exports.InsuranceProviderManagementPO = InsuranceProviderManagementPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlUHJvdmlkZXJNYW5hZ2VtZW50UE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL2FkbWluZGFzaGJvYXJkcGFnZS9pbnN1cmFuY2Vwcm92aWRlcmJ1Y2tldC9JbnN1cmFuY2VQcm92aWRlck1hbmFnZW1lbnRQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6Qyw2R0FBMEc7QUFDMUcseUZBQXNGO0FBQ3RGLDJFQUF3RTtBQUN4RSx1R0FBb0c7QUFFcEcsTUFBYSw2QkFBNkI7SUFHdEM7UUFDSSxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsSUFBSSxtRUFBZ0MsRUFBRSxDQUFDO0lBQ25GLENBQUM7SUFFRCxtQ0FBbUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUM7SUFDakQsQ0FBQztJQUdELHFDQUFxQztRQUNqQyxPQUFPLElBQUksMkRBQTRCLENBQUMsNkJBQTZCLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBR0QsaUJBQWlCO1FBQ2IsT0FBTyw2QkFBNkIsQ0FBQyxjQUFjLENBQUM7SUFDeEQsQ0FBQztJQUdELHVCQUF1QjtRQUNuQixPQUFPLDZCQUE2QixDQUFDLG9CQUFvQixDQUFDO0lBQzlELENBQUM7SUFHRCx3QkFBd0I7UUFDcEIsT0FBTyw2QkFBNkIsQ0FBQyxxQkFBcUIsQ0FBQztJQUMvRCxDQUFDO0lBV0QsdUJBQXVCO1FBQ25CLE9BQU8sSUFBSSwrQkFBYyxDQUFDLDZCQUE2QixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELCtCQUErQjtRQUMzQixPQUFPLDZCQUE2QixDQUFDLDRCQUE0QixDQUFDO0lBQ3RFLENBQUM7SUFFRCwyQkFBMkI7UUFDdkIsT0FBTyw2QkFBNkIsQ0FBQyx3QkFBd0IsQ0FBQztJQUNsRSxDQUFDO0lBRUQsNEJBQTRCO1FBQ3hCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLDZCQUE2QixDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELGlDQUFpQztRQUM3QixPQUFPLDZCQUE2QixDQUFDLDhCQUE4QixDQUFDO0lBQ3hFLENBQUM7SUFFRCxzQkFBc0I7UUFDbEIsT0FBTyxJQUFJLCtCQUFjLENBQUMsNkJBQTZCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sNkJBQTZCLENBQUMsWUFBWSxDQUFDO0lBQ3RELENBQUM7SUFHRCxxQ0FBcUM7UUFDakMsT0FBTyw2QkFBNkIsQ0FBQyxrQ0FBa0MsQ0FBQztJQUM1RSxDQUFDO0lBS0Qsd0JBQXdCO1FBQ3BCLE9BQU8sSUFBSSxpRUFBK0IsQ0FBQyw2QkFBNkIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7O0FBbkVjLGdFQUFrQyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBSzNFLDRDQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFLaEQsa0RBQW9CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUtqRSxtREFBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0FBS3hGLDRCQUE0QjtBQUNiLGtEQUFvQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFDM0QsMERBQTRCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUNqRSxzREFBd0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0FBQy9ELHVEQUF5QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7QUFDckUsNERBQThCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztBQUMxRSxpREFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0FBQ25FLDBDQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQThCcEQsZ0VBQWtDLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFLekYsT0FBTztBQUNRLG1EQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBMUV6RSxzRUErRUMifQ==