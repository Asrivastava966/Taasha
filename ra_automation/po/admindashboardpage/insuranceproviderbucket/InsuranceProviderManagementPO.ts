import { element, by } from "protractor";
import { InsuranceProviderManagementGrid } from "../../../component/comp/InsuranceProviderManagementGrid";
import { AddUpdateInsuranceProviderFormPO } from "./AddUpdateInsuranceProviderFormPO";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";
import { ConfirmationModalYesNoDialog } from "../../../component/comp/ConfirmationModalYesNoDialog";

export class InsuranceProviderManagementPO {
    private addUpdateInsuranceProviderFormPO:AddUpdateInsuranceProviderFormPO;

    constructor() {
        this.addUpdateInsuranceProviderFormPO = new AddUpdateInsuranceProviderFormPO();
    }

    getAddUpdateInsuranceProviderFormPO() {
        return this.addUpdateInsuranceProviderFormPO;
    }

    private static deleteInsProviderConfirmationModal = element(by.className('modal-dialog'));
    getDeleteInsProviderConfirmationModal() {
        return new ConfirmationModalYesNoDialog(InsuranceProviderManagementPO.deleteInsProviderConfirmationModal);
    }

    private static successMessage = element(by.className('alert'));
    getSuccessMessage() {
        return InsuranceProviderManagementPO.successMessage;
    }

    private static adminDashboardButton = element(by.buttonText('Admin Dashboard'));
    getAdminDashboardButton() {
        return InsuranceProviderManagementPO.adminDashboardButton;
    }

    private static addNewProvidersButton = element(by.css('[ng-click=\"openProvider()\"]'));
    getAddNewProvidersButton() {
        return InsuranceProviderManagementPO.addNewProvidersButton;
    }

    //Insurance Provider search 
    private static statusFilterDropdown = element(by.id('inputFilterStatus'));
    private static providerNameFilterInputField = element(by.id('inputSearchName'));
    private static legacyIDFilterInputField = element(by.id('inputSearchLegacy'));
    private static feeScheduleFilterDropdown = element(by.id('inputSearchFeeSchedule'));
    private static providerNumberFilterInputField = element(by.id('inputSearchProviderNum'));
    private static groupFilterDropdown = element(by.model('filterValue.groupTypeCd'));
    private static searchButton = element(by.css('[type=\"submit\"]'));

    getStatusFilterDropdown() {
        return new SelectDropdown(InsuranceProviderManagementPO.statusFilterDropdown);
    }

    getProviderNameFilterInputField() {
        return InsuranceProviderManagementPO.providerNameFilterInputField;
    }

    getLegacyIDFilterInputField() {
        return InsuranceProviderManagementPO.legacyIDFilterInputField;
    }

    getFeeScheduleFilterDropdown() {
        return new SelectDropdown(InsuranceProviderManagementPO.feeScheduleFilterDropdown);
    }

    getProviderNumberFilterInputField() {
        return InsuranceProviderManagementPO.providerNumberFilterInputField;
    }

    getGroupFilterDropdown() {
        return new SelectDropdown(InsuranceProviderManagementPO.groupFilterDropdown);
    }

    getSearchButton() {
        return InsuranceProviderManagementPO.searchButton;
    }

    private static noInsuranceProviderFoundValidation = element(by.className('text-danger'));
    getNoInsuranceProviderFoundValidation() {
        return InsuranceProviderManagementPO.noInsuranceProviderFoundValidation;
    }

    //Grid 
    private static insuranceProviderGrid = element(by.className('grid'));

    getInsuranceProviderGrid() {
        return new InsuranceProviderManagementGrid(InsuranceProviderManagementPO.insuranceProviderGrid);
    }
}