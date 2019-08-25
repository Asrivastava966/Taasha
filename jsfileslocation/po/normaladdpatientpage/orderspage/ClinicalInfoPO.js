"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
const CustomDropdownMenu_1 = require("../../../component/comp/CustomDropdownMenu");
const CustomDropdownMenuOrigin_1 = require("../../../data/enums/CustomDropdownMenuOrigin");
class ClinicalInfoPO {
    getSuccessMessage() {
        return ClinicalInfoPO.successMessage;
    }
    getOrderingDoctorDropdown() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(ClinicalInfoPO.orderingDoctorDropdown, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.INPUT_FIELD);
    }
    getFacilityDropdown() {
        return new SelectDropdown_1.SelectDropdown(ClinicalInfoPO.facilityDropdown);
    }
    getPrimaryDoctorDropdown() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(ClinicalInfoPO.primaryDoctorDropdown, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.BUTTON);
    }
    getSalesRepDropdown() {
        return new SelectDropdown_1.SelectDropdown(ClinicalInfoPO.salesRepDropdown);
    }
    getSaveButton() {
        return ClinicalInfoPO.saveButton;
    }
}
//Header - Validation messages
ClinicalInfoPO.successMessage = protractor_1.element(protractor_1.by.className('alert-success'));
//Doctor Info
ClinicalInfoPO.orderingDoctorDropdown = protractor_1.element(protractor_1.by.id('inputOrderingDoc'));
ClinicalInfoPO.facilityDropdown = protractor_1.element(protractor_1.by.model('model.clinicalInformation.facilityId'));
ClinicalInfoPO.primaryDoctorDropdown = protractor_1.element(protractor_1.by.id('inputPhysician'));
ClinicalInfoPO.salesRepDropdown = protractor_1.element(protractor_1.by.model('model.clinicalInformation.marketingRepId'));
ClinicalInfoPO.saveButton = protractor_1.element(protractor_1.by.id('btnClinicalInfoSave'));
exports.ClinicalInfoPO = ClinicalInfoPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpbmljYWxJbmZvUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL25vcm1hbGFkZHBhdGllbnRwYWdlL29yZGVyc3BhZ2UvQ2xpbmljYWxJbmZvUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsMkVBQXdFO0FBQ3hFLG1GQUFnRjtBQUNoRiwyRkFBd0Y7QUFFeEYsTUFBYSxjQUFjO0lBS3ZCLGlCQUFpQjtRQUNiLE9BQU8sY0FBYyxDQUFDLGNBQWMsQ0FBQztJQUN6QyxDQUFDO0lBUUQseUJBQXlCO1FBQ3JCLE9BQU8sSUFBSSx1Q0FBa0IsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLEVBQUUsbURBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVELG1CQUFtQjtRQUNmLE9BQU8sSUFBSSwrQkFBYyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCx3QkFBd0I7UUFDcEIsT0FBTyxJQUFJLHVDQUFrQixDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxtREFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLCtCQUFjLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUlELGFBQWE7UUFDVCxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQzs7QUFqQ0QsOEJBQThCO0FBQ2YsNkJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQU12RSxhQUFhO0FBQ0UscUNBQXNCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM1RCwrQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO0FBQzdFLG9DQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFDekQsK0JBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztBQWtCakYseUJBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0FBL0J0RSx3Q0FvQ0MifQ==