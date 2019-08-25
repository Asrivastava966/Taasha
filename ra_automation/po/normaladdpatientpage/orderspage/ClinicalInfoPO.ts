import { element, by } from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";
import { CustomDropdownMenu } from "../../../component/comp/CustomDropdownMenu";
import { CustomDropdownMenuOrigin } from "../../../data/enums/CustomDropdownMenuOrigin";

export class ClinicalInfoPO {
    
    //Header - Validation messages
    private static successMessage = element(by.className('alert-success'));

    getSuccessMessage() {
        return ClinicalInfoPO.successMessage; 
    }

    //Doctor Info
    private static orderingDoctorDropdown = element(by.id('inputOrderingDoc'));
    private static facilityDropdown = element(by.model('model.clinicalInformation.facilityId'));
    private static primaryDoctorDropdown = element(by.id('inputPhysician'));
    private static salesRepDropdown = element(by.model('model.clinicalInformation.marketingRepId'));

    getOrderingDoctorDropdown() {
        return new CustomDropdownMenu(ClinicalInfoPO.orderingDoctorDropdown, CustomDropdownMenuOrigin.INPUT_FIELD);
    }

    getFacilityDropdown() {
        return new SelectDropdown(ClinicalInfoPO.facilityDropdown);
    }

    getPrimaryDoctorDropdown() {
        return new CustomDropdownMenu(ClinicalInfoPO.primaryDoctorDropdown, CustomDropdownMenuOrigin.BUTTON);
    }

    getSalesRepDropdown() {
        return new SelectDropdown(ClinicalInfoPO.salesRepDropdown);
    }

    private static saveButton = element(by.id('btnClinicalInfoSave'));

    getSaveButton() {
        return ClinicalInfoPO.saveButton;
    }
}