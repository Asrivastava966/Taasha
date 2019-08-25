"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../component/comp/SelectDropdown");
const DatePicker_1 = require("../../component/comp/DatePicker");
const CustomDropdownMenu_1 = require("../../component/comp/CustomDropdownMenu");
const CustomDropdownMenuOrigin_1 = require("../../data/enums/CustomDropdownMenuOrigin");
const ExistingPatientGrid_1 = require("../../component/comp/ExistingPatientGrid");
class QuickAddPatientPO {
    getModalHeader() {
        return QuickAddPatientPO.modalHeader;
    }
    getModalTitle() {
        return QuickAddPatientPO.modalTitle;
    }
    getCloseButton() {
        return QuickAddPatientPO.closeButton;
    }
    getValidationMessage() {
        return QuickAddPatientPO.validationMessage;
    }
    getFirstNameInputField() {
        return QuickAddPatientPO.firstNameInputField;
    }
    getMIInputField() {
        return QuickAddPatientPO.miInputField;
    }
    getLastNameInputField() {
        return QuickAddPatientPO.lastNameInputField;
    }
    getBirthDateInputField() {
        return new DatePicker_1.DatePicker(QuickAddPatientPO.birthDateInputField);
    }
    getGenderDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.genderDropdown);
    }
    getStatusDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.statusDropdown);
    }
    getBranchOfficeDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.branchOfficeDropdown);
    }
    getEmailInputField() {
        return QuickAddPatientPO.emailInputField;
    }
    getExistingPatientFoundWarningToggle() {
        return QuickAddPatientPO.existingPatientWarningToggle;
    }
    getInsuranceInfoToggle() {
        return QuickAddPatientPO.insuranceInfoToggle;
    }
    getInsuranceTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.insuranceTypeDropdown);
    }
    getProviderDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.providerDropdown);
    }
    getPolicyNumberInputField() {
        return QuickAddPatientPO.policyNumberInputField;
    }
    getGroupNumberInputField() {
        return QuickAddPatientPO.groupNumberInputField;
    }
    getPlanTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.planTypeDropdown);
    }
    getRelationshipDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.relationshipDropdown);
    }
    getStartdateInputField() {
        return new DatePicker_1.DatePicker(QuickAddPatientPO.startDateInputField);
    }
    getEndDateInputField() {
        return new DatePicker_1.DatePicker(QuickAddPatientPO.endDateInputField);
    }
    getDoctorInfoToggle() {
        return QuickAddPatientPO.doctorInfoToggle;
    }
    getOrderingDoctorDropdown() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(QuickAddPatientPO.orderingDoctorDropdown, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.INPUT_FIELD);
    }
    getFacilityDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.facilityDropdown);
    }
    getPrimaryDoctorDropdown() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(QuickAddPatientPO.primaryDoctorDropdown, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.BUTTON);
    }
    getSalesRepDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.salesRepDropdown);
    }
    getOrderInfoToggle() {
        return QuickAddPatientPO.orderInfoToggle;
    }
    getOrderTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.orderTypeDropdown);
    }
    getWorkflowStatusDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.workflowStatusDropdown);
    }
    getOrderOwnerDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.orderOwnerDropdown);
    }
    getAssignToDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.assignToDropdown);
    }
    getBranchDropdown() {
        return new SelectDropdown_1.SelectDropdown(QuickAddPatientPO.branchDropdown);
    }
    getBillingOrSetupDateCalenderInputField() {
        return new DatePicker_1.DatePicker(QuickAddPatientPO.billingOrSetupDateCalendarInputField);
    }
    getSaveButton() {
        return QuickAddPatientPO.saveButton;
    }
    getCancelButton() {
        return QuickAddPatientPO.cancelButton;
    }
    getFirstNameRequiredFieldError() {
        return QuickAddPatientPO.firstNameRequiredFieldError;
    }
    getLastNameRequiredFieldError() {
        return QuickAddPatientPO.lastNameRequiredFieldError;
    }
    getBirthDateRequiredFieldError() {
        return QuickAddPatientPO.birthDateRequiredFieldError;
    }
    getGenderDropdownRequiredFieldError() {
        return QuickAddPatientPO.genderDropdownRequiredFieldError;
    }
    getStatusDropdownRequiredFieldError() {
        return QuickAddPatientPO.statusDropdownRequiredFieldError;
    }
    getBranchOfficeRequiredFieldError() {
        return QuickAddPatientPO.branchOfficeRequiredFieldError;
    }
    getExistingPatientGrid() {
        return new ExistingPatientGrid_1.ExistingPatientGrid(QuickAddPatientPO.existingPatientGrid);
    }
}
//header
QuickAddPatientPO.modalHeader = protractor_1.element(protractor_1.by.className("modal-header"));
QuickAddPatientPO.modalTitle = protractor_1.element(protractor_1.by.className("modal-title"));
QuickAddPatientPO.closeButton = protractor_1.element(protractor_1.by.className("close"));
QuickAddPatientPO.validationMessage = protractor_1.element(protractor_1.by.className('alert')).element(protractor_1.by.tagName('div'));
//form - Patient Info
QuickAddPatientPO.firstNameInputField = protractor_1.element(protractor_1.by.name("inputfirstNm"));
QuickAddPatientPO.miInputField = protractor_1.element(protractor_1.by.css("[data-ng-model='payload.patient.mi']"));
QuickAddPatientPO.lastNameInputField = protractor_1.element(protractor_1.by.name("inputlastNm"));
QuickAddPatientPO.birthDateInputField = protractor_1.element(protractor_1.by.id("inputBirthDate"));
QuickAddPatientPO.genderDropdown = protractor_1.element(protractor_1.by.id("inputGender"));
QuickAddPatientPO.statusDropdown = protractor_1.element(protractor_1.by.id("inputStatus"));
QuickAddPatientPO.branchOfficeDropdown = protractor_1.element(protractor_1.by.name("inputBranchOffice"));
QuickAddPatientPO.emailInputField = protractor_1.element(protractor_1.by.id('inputEmail'));
//Existing Patient found: Warning 
QuickAddPatientPO.existingPatientWarningToggle = protractor_1.element(protractor_1.by.css('[ng-click*=\"toggleExistancePatient\"]'));
//form - Insurance Info 
QuickAddPatientPO.insuranceInfoToggle = protractor_1.element(protractor_1.by.css("[ng-click*='InsuranceInfo']"));
QuickAddPatientPO.insuranceTypeDropdown = protractor_1.element(protractor_1.by.id('inputInsuranceType'));
QuickAddPatientPO.providerDropdown = protractor_1.element(protractor_1.by.id('inputprovider'));
QuickAddPatientPO.policyNumberInputField = protractor_1.element(protractor_1.by.id('inputPolicyNum'));
QuickAddPatientPO.groupNumberInputField = protractor_1.element(protractor_1.by.id('inputGroupNum'));
QuickAddPatientPO.planTypeDropdown = protractor_1.element(protractor_1.by.id('inputInsPlanType'));
QuickAddPatientPO.relationshipDropdown = protractor_1.element(protractor_1.by.id('inputRelationshipType'));
QuickAddPatientPO.startDateInputField = protractor_1.element(protractor_1.by.id('inputStartDate'));
QuickAddPatientPO.endDateInputField = protractor_1.element(protractor_1.by.id('inputEndDate'));
//form - Doctor Info 
QuickAddPatientPO.doctorInfoToggle = protractor_1.element(protractor_1.by.css("[ng-click*='DoctorInfo']"));
QuickAddPatientPO.orderingDoctorDropdown = protractor_1.element(protractor_1.by.id('inputOrderingDoc'));
QuickAddPatientPO.primaryDoctorDropdown = protractor_1.element(protractor_1.by.id('inputPhysician'));
QuickAddPatientPO.facilityDropdown = protractor_1.element(protractor_1.by.id('inputFacilityRef'));
QuickAddPatientPO.salesRepDropdown = protractor_1.element(protractor_1.by.id('inputMarketingRep'));
//form - Order Info 
QuickAddPatientPO.orderInfoToggle = protractor_1.element(protractor_1.by.css("[ng-click*='OrderInfo']"));
QuickAddPatientPO.orderTypeDropdown = protractor_1.element(protractor_1.by.id('inputOrderType'));
QuickAddPatientPO.workflowStatusDropdown = protractor_1.element(protractor_1.by.id('inputworkflowStatus'));
QuickAddPatientPO.orderOwnerDropdown = protractor_1.element(protractor_1.by.id('inputOrderOwner'));
QuickAddPatientPO.assignToDropdown = protractor_1.element(protractor_1.by.id('inputAssignTo'));
QuickAddPatientPO.branchDropdown = protractor_1.element(protractor_1.by.id('inputOrderBranchOffice'));
QuickAddPatientPO.billingOrSetupDateCalendarInputField = protractor_1.element(protractor_1.by.id('inputSetupDate'));
//footer 
QuickAddPatientPO.saveButton = protractor_1.element(protractor_1.by.buttonText('Save'));
QuickAddPatientPO.cancelButton = protractor_1.element(protractor_1.by.buttonText('Close'));
//Inline error: Required Field
QuickAddPatientPO.firstNameRequiredFieldError = QuickAddPatientPO.firstNameInputField.all(protractor_1.by.xpath("following-sibling::span")).first();
QuickAddPatientPO.lastNameRequiredFieldError = QuickAddPatientPO.lastNameInputField.all(protractor_1.by.xpath("following-sibling::span")).first();
QuickAddPatientPO.birthDateRequiredFieldError = QuickAddPatientPO.birthDateInputField.all(protractor_1.by.xpath("ancestor::p")).first().all(protractor_1.by.xpath("following-sibling::span")).get(1);
QuickAddPatientPO.genderDropdownRequiredFieldError = QuickAddPatientPO.genderDropdown.all(protractor_1.by.xpath("following-sibling::span")).first();
QuickAddPatientPO.statusDropdownRequiredFieldError = QuickAddPatientPO.statusDropdown.all(protractor_1.by.xpath("following-sibling::span")).first();
QuickAddPatientPO.branchOfficeRequiredFieldError = QuickAddPatientPO.branchOfficeDropdown.all(protractor_1.by.xpath("following-sibling::span")).get(1);
//Existing Patient Grid
QuickAddPatientPO.existingPatientGrid = protractor_1.element(protractor_1.by.id('docGrid'));
exports.QuickAddPatientPO = QuickAddPatientPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tBZGRQYXRpZW50UE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL3F1aWNrYWRkcGF0aWVudHBhZ2UvUXVpY2tBZGRQYXRpZW50UE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsd0VBQXFFO0FBQ3JFLGdFQUE2RDtBQUM3RCxnRkFBNkU7QUFDN0Usd0ZBQXFGO0FBQ3JGLGtGQUErRTtBQUUvRSxNQUFhLGlCQUFpQjtJQU8xQixjQUFjO1FBQ1YsT0FBTyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8saUJBQWlCLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFHRCxvQkFBb0I7UUFDaEIsT0FBTyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDO0lBWUQsc0JBQXNCO1FBQ2xCLE9BQU8saUJBQWlCLENBQUMsbUJBQW1CLENBQUM7SUFDakQsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLGlCQUFpQixDQUFDLFlBQVksQ0FBQztJQUMxQyxDQUFDO0lBRUQscUJBQXFCO1FBQ2pCLE9BQU8saUJBQWlCLENBQUMsa0JBQWtCLENBQUM7SUFDaEQsQ0FBQztJQUVELHNCQUFzQjtRQUNsQixPQUFPLElBQUksdUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxpQkFBaUI7UUFDYixPQUFPLElBQUksK0JBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxJQUFJLCtCQUFjLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFP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