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
const protractor_1 = require("protractor");
const QuickAddPatientPO_1 = require("../../po/quickaddpatientpage/QuickAddPatientPO");
const WaitUtils_1 = require("../../utils/WaitUtils");
class QuickAddPatientLib {
    constructor() {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.quickAddPatientPO = new QuickAddPatientPO_1.QuickAddPatientPO();
    }
    getWaitUtils() {
        return this.waitUtils;
    }
    getQuickAddPatientPO() {
        return this.quickAddPatientPO;
    }
    //header
    getModalTitle() {
        return this.quickAddPatientPO.getModalTitle().getText();
    }
    closeModal() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Closing the -Quick Add Patient- modal...");
            yield this.getQuickAddPatientPO().getCloseButton().click();
        });
    }
    getValidationMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getValidationMessage().getText();
        });
    }
    //form- Patient Info
    fillFirstName(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getFirstNameInputField().sendKeys(firstName);
        });
    }
    getFirstNameRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getFirstNameRequiredFieldError().getText();
        });
    }
    fillLastName(lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getLastNameInputField().sendKeys(lastName);
        });
    }
    getLastNameRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getLastNameRequiredFieldError().getText();
        });
    }
    fillMI(mi) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getMIInputField().sendKeys(mi);
        });
    }
    selectBirthDate(birthDate, isDatePickerSmall) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getBirthDateInputField().selectDate(birthDate, isDatePickerSmall);
        });
    }
    getBirthDateRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getBirthDateRequiredFieldError().getText();
        });
    }
    selectGender(gender) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getGenderDropdown().selectOption(gender);
        });
    }
    getGenderDropdownRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getGenderDropdownRequiredFieldError().getText();
        });
    }
    selectPatientStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getStatusDropdown().selectOption(status);
        });
    }
    getPatientStatusDropdownRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getStatusDropdownRequiredFieldError().getText();
        });
    }
    selectBranchOffice(branchOffice) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getBranchOfficeDropdown().selectOption(branchOffice);
        });
    }
    getBranchOfficeRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getBranchOfficeRequiredFieldError().getText();
        });
    }
    fillEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getEmailInputField().sendKeys(email);
        });
    }
    //Existing Patient found: Warning 
    toggleExistingPatientFoundWarning() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getExistingPatientFoundWarningToggle().click();
        });
    }
    //form - Insurance Info 
    toggleInsuranceInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getInsuranceInfoToggle().click();
        });
    }
    selectInsuranceType(insuranceType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getInsuranceTypeDropdown().selectOption(insuranceType);
        });
    }
    selectProvider(insuranceProvider) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getProviderDropdown().selectOption(insuranceProvider);
        });
    }
    fillPolicyNumber(policyNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getPolicyNumberInputField().sendKeys(policyNumber);
        });
    }
    fillGroupNumber(groupNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getGroupNumberInputField().sendKeys(groupNumber);
        });
    }
    selectPlanType(planType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getPlanTypeDropdown().selectOption(planType);
        });
    }
    selectRelationship(relationship) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getRelationshipDropdown().selectOption(relationship);
        });
    }
    selectStartDate(startDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getQuickAddPatientPO().getStartdateInputField().selectDate(startDate, isDatePickerSmall);
        });
    }
    selectEndDate(endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getQuickAddPatientPO().getEndDateInputField().selectDate(endDate, isDatePickerSmall);
        });
    }
    //form - Doctor Info 
    toggleDoctorInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getDoctorInfoToggle().click();
        });
    }
    selectOrderingDoctor(orderingDoctorName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getOrderingDoctorDropdown().selectDropdownMenuOptionByLinkText(orderingDoctorName);
        });
    }
    selectPrimaryDoctor(primaryDoctorName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getPrimaryDoctorDropdown().selectDropdownMenuOptionByLinkText(primaryDoctorName);
        });
    }
    selectFacility(facility) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getFacilityDropdown().selectOption(facility);
        });
    }
    selectSalesRep(salesRepName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getSalesRepDropdown().selectOption(salesRepName);
        });
    }
    //form - Order Info 
    toggleOrderInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getOrderInfoToggle().click();
        });
    }
    getDisplayedOrderType() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getOrderTypeDropdown().getDropdownElement().getAttribute('value');
        });
    }
    selectOrderType(orderType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getOrderTypeDropdown().selectOption(orderType);
        });
    }
    getDisplayedWorkflowStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getWorkflowStatusDropdown().getDropdownElement().getAttribute('value');
        });
    }
    selectWorkflowStatus(workflowStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getWorkflowStatusDropdown().selectOption(workflowStatus);
        });
    }
    getDisplayedOrderOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getOrderOwnerDropdown().getDropdownElement().getAttribute('value');
        });
    }
    selectOrderOwner(orderOwnerName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getOrderOwnerDropdown().selectOption(orderOwnerName);
        });
    }
    getDisplayedAssignTo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getAssignToDropdown().getDropdownElement().getAttribute('value');
        });
    }
    selectAssignTo(assigneeName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getAssignToDropdown().selectOption(assigneeName);
        });
    }
    getDisplayedBranch() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getBranchDropdown().getDropdownElement().getAttribute('value');
        });
    }
    selectBranch(branchName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getBranchDropdown().selectOption(branchName);
        });
    }
    selectBillingOrSetupDateAsToday() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getBillingOrSetupDateCalenderInputField().selectToday();
        });
    }
    //footer 
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Saving -Patient Info- form...");
            yield this.getQuickAddPatientPO().getSaveButton().click();
        });
    }
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getQuickAddPatientPO().getCancelButton().click();
        });
    }
    /**
     * Workflow methods
     */
    fillPatientInfo(patientInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Filling in the -Patient Info- section of: " + patientInfo.getLastName() + ", " + patientInfo.getFirstName());
            if (patientInfo.getFirstName() != null) {
                yield this.fillFirstName(patientInfo.getFirstName());
            }
            if (patientInfo.getLastName() != null) {
                yield this.fillLastName(patientInfo.getLastName());
            }
            if (patientInfo.getBirthDate() != null) {
                let isDatePickerSmall = false;
                yield this.selectBirthDate(patientInfo.getBirthDate(), isDatePickerSmall);
            }
            if (patientInfo.getGender() != null) {
                yield this.selectGender(patientInfo.getGender());
            }
            if (patientInfo.getStatus() != null) {
                yield this.selectPatientStatus(patientInfo.getStatus());
            }
            if (patientInfo.getBranchOffice() != null) {
                yield this.selectBranchOffice(patientInfo.getBranchOffice());
            }
            if (patientInfo.getMI() != null) {
                yield this.fillMI(patientInfo.getMI());
            }
            if (patientInfo.getEmail() != null) {
                yield this.fillEmail(patientInfo.getEmail());
            }
        });
    }
    fillInsuranceInfo(insuranceInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Filling in the -Insurance Info- section for Insurance Type : " + insuranceInfo.getInsuranceType());
            yield this.toggleInsuranceInfo();
            if (insuranceInfo.getInsuranceType() != null) {
                yield this.selectInsuranceType(insuranceInfo.getInsuranceType());
            }
            if (insuranceInfo.getProvider() != null) {
                yield this.selectProvider(insuranceInfo.getProvider());
            }
            if (insuranceInfo.getPolicyNumber() != null) {
                yield this.fillPolicyNumber(insuranceInfo.getPolicyNumber());
            }
            if (insuranceInfo.getRelationship() != null) {
                yield this.selectRelationship(insuranceInfo.getRelationship());
            }
            if (insuranceInfo.getStartDate() != null) {
                yield this.selectStartDate(insuranceInfo.getStartDate());
            }
            if (insuranceInfo.getGroupNumber() != null) {
                yield this.fillGroupNumber(insuranceInfo.getGroupNumber());
            }
            if (insuranceInfo.getPlanType() != null) {
                yield this.selectPlanType(insuranceInfo.getPlanType());
            }
        });
    }
    fillOrderInfo(orderInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Filling in the -Order Info- section for Order Type : " + orderInfo.getOrderType());
            yield this.toggleOrderInfo();
            if (orderInfo.getOrderType() != null) {
                yield this.selectOrderType(orderInfo.getOrderType());
            }
            if (orderInfo.getBillingOrSetupDate() != null) {
                yield this.selectBillingOrSetupDateAsToday();
            }
        });
    }
    fillDoctorInfo(clinicalInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.toggleDoctorInfo();
            if (clinicalInfo.getOrderingDoctorName() != null) {
                yield this.selectOrderingDoctor(clinicalInfo.getOrderingDoctorName());
            }
            if (clinicalInfo.getPrimaryDoctorName() != null) {
                yield this.selectPrimaryDoctor(clinicalInfo.getPrimaryDoctorName());
            }
            if (clinicalInfo.getFacility() != null) {
                yield this.selectFacility(clinicalInfo.getFacility());
            }
            if (clinicalInfo.getSalesRepName() != null) {
                yield this.selectSalesRep(clinicalInfo.getSalesRepName());
            }
        });
    }
    //Existing Patient Grid 
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getExistingPatientGrid().getPatientName(rowNumber);
        });
    }
    getDOB(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getQuickAddPatientPO().getExistingPatientGrid().getDOB(rowNumber);
        });
    }
}
exports.QuickAddPatientLib = QuickAddPatientLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tBZGRQYXRpZW50TGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvcXVpY2thZGRwYXRpZW50cGFnZS9RdWlja0FkZFBhdGllbnRMaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyxzRkFBbUY7QUFJbkYscURBQWtEO0FBVWxELE1BQWEsa0JBQWtCO0lBSTNCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVE7SUFDUixhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVLLFVBQVU7O1lBQ1osb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDaEUsTUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvRCxDQUFDO0tBQUE7SUFFSyxvQkFBb0I7O1lBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlFLENBQUM7S0FBQTtJQUVELG9CQUFvQjtJQUNkLGFBQWEsQ0FBQyxTQUFpQjs7WUFDakMsTUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFT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