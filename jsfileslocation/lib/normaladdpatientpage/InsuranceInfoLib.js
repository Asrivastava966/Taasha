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
const InsuranceInfoPO_1 = require("../../po/normaladdpatientpage/InsuranceInfoPO");
const CommonUtils_1 = require("../../utils/CommonUtils");
let commonUtils = new CommonUtils_1.CommonUtils();
class InsuranceInfoLib {
    constructor() {
        //Policy Tables
        this.insuranceTypeColumnIndex = 1;
        this.insuranceNameColumnIndex = 2;
        this.policyNoColumnIndex = 3;
        this.groupNumberColumnIndex = 4;
        this.statusColumnIndex = 5;
        this.planTypeColumnIndex = 6;
        this.startDateColumnIndex = 7;
        this.endDateColumnIndex = 8;
        this.relationshipColumnIndex = 9;
        this.insuranceInfoPO = new InsuranceInfoPO_1.InsuranceInfoPO();
    }
    getInsuranceInfoPO() {
        return this.insuranceInfoPO;
    }
    navigateToAddInsuranceForm() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getAddInsuranceButton().click();
        });
    }
    getValidationMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsuranceInfoPO().getValidationMessage().getText();
        });
    }
    selectInsuranceType(insuranceType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getInsuranceTypeDropdown().selectOption(insuranceType);
        });
    }
    selectProvider(insuranceProvider) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getProviderDropdown().selectOption(insuranceProvider);
        });
    }
    getProviderRequirdFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsuranceInfoPO().getProviderRequiredFieldError().getText();
        });
    }
    fillPolicyNumber(policyNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getPolicyNumberInputField().sendKeys(policyNumber);
        });
    }
    getPolicyNumberRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsuranceInfoPO().getPolicyNumberRequiredFieldError().getText();
        });
    }
    fillGroupNumber(groupNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getGroupNumberInputField().sendKeys(groupNumber);
        });
    }
    selectPlanType(planType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getPlanTypeDropdown().selectOption(planType);
        });
    }
    selectRelationship(relationship) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getRelationshipDropdown().selectOption(relationship);
        });
    }
    selectStartDate(startDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getInsuranceInfoPO().getStartdateInputField().selectDate(startDate, isDatePickerSmall);
        });
    }
    getStartDateRequiredFieldError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getInsuranceInfoPO().getStartDateRequiredFieldError().getText();
        });
    }
    selectEndDate(endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getInsuranceInfoPO().getEndDateInputField().selectDate(endDate, isDatePickerSmall);
        });
    }
    // insured Detail
    selectLastName(lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getLastnameInputField().sendKeys(lastName);
        });
    }
    selectFirstName(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getFirstNameInputField().sendKeys(firstName);
        });
    }
    selectBirthDate(birthDate) {
        return __awaiter(this, void 0, void 0, function* () {
            //let isDatePickerSmall = false;
            //await this.getInsuranceInfoPO().getBirthDateInputField().selectDate(birthDate, isDatePickerSmall)
            yield this.getInsuranceInfoPO().getBirthDateInputField().selectToday();
        });
    }
    selectGender(gender) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getGenderDropDown().selectOption(gender);
        });
    }
    //
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Saving...");
            yield this.getInsuranceInfoPO().getSaveButton().click();
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Updating...");
            yield this.getInsuranceInfoPO().getUpdateButton().click();
        });
    }
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getInsuranceInfoPO().getCancelButton().click();
        });
    }
    /**
     * Workflow methods
     */
    addInsurance(insuranceInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Filling in the -Insurance Info- section for Insurance Type : " + insuranceInfo.getInsuranceType());
            if (insuranceInfo.getInsuranceType() != null) {
                yield this.selectInsuranceType(insuranceInfo.getInsuranceType());
            }
            if (insuranceInfo.getProvider() != null) {
                yield this.selectProvider(insuranceInfo.getProvider());
            }
            if (insuranceInfo.getPolicyNumber() != null) {
                yield this.fillPolicyNumber(insuranceInfo.getPolicyNumber());
            }
            if (insuranceInfo.getGroupNumber() != null) {
                yield this.fillGroupNumber(insuranceInfo.getGroupNumber());
            }
            if (insuranceInfo.getPlanType() != null) {
                yield this.selectPlanType(insuranceInfo.getPlanType());
            }
            if (insuranceInfo.getStartDate() != null) {
                yield this.selectStartDate(insuranceInfo.getStartDate());
            }
            if (insuranceInfo.getRelationship() != null) {
                yield this.selectRelationship(insuranceInfo.getRelationship());
                // return this.getInsuranceInfoPO().getRelationshipDropdownText().getText()
                //await console.log(insuranceInfo.getRelationship() + " Ashish 123")
                //var select= await insuranceInfo.getRelationship()
                yield protractor_1.browser.sleep(1000);
                if (insuranceInfo.getRelationship() != "Self") {
                    if (insuranceInfo.getLastName() != null) {
                        yield this.selectLastName(insuranceInfo.getLastName());
                    }
                    if (insuranceInfo.getFirstName() != null) {
                        yield this.selectFirstName(insuranceInfo.getFirstName());
                    }
                    if (insuranceInfo.getBirthdate() != null) {
                        yield this.selectBirthDate(insuranceInfo.getBirthdate());
                    }
                    if (insuranceInfo.getGender() != null) {
                        yield this.selectGender(insuranceInfo.getGender());
                    }
                }
            }
        });
    }
    getActivePolicyTable() {
        return this.getInsuranceInfoPO().getActivePolicyTable();
    }
    getInactivePolicyTable() {
        return this.getInsuranceInfoPO().getInactivePolicyTable();
    }
    updateInsuranceFromActivePolicyTable(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.insuranceTypeColumnIndex).element(protractor_1.by.tagName('a')).click();
        });
    }
    getInsuranceTypeValueFromActivePolicyTable(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.insuranceTypeColumnIndex).element(protractor_1.by.tagName('a')).getText();
        });
    }
    getInsuranceNameFromPolicyTable(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.insuranceNameColumnIndex).element(protractor_1.by.tagName('a')).getText();
        });
    }
    getPolicyNoFromPolicyTable(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            let policyNo = yield this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.policyNoColumnIndex).getText();
            return +policyNo;
        });
    }
    getGroupNumberFromPolicyTable(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            let groupNumber = yield this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.groupNumberColumnIndex).getText();
            return +groupNumber;
        });
    }
    getStatusFromPolicyTable(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.statusColumnIndex).element(protractor_1.by.tagName('span')).getAttribute('ng-if');
        });
    }
    getPlanTypeFromPolicyTable(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.planTypeColumnIndex).getText();
        });
    }
    getStartDateFromPolicyTable(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.startDateColumnIndex).getText();
        });
    }
    getEndDateFromPolicyTable(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.endDateColumnIndex).getText();
        });
    }
    getRelationshipFromPolicyTable(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getActivePolicyTable().getTableBodyRowCell(rowNumber, this.relationshipColumnIndex).getText();
        });
    }
}
exports.InsuranceInfoLib = InsuranceInfoLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlSW5mb0xpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL25vcm1hbGFkZHBhdGllbnRwYWdlL0luc3VyYW5jZUluZm9MaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUtuRCxtRkFBZ0Y7QUFFaEYseURBQXNEO0FBRXRELElBQUksV0FBVyxHQUFlLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRWhELE1BQWEsZ0JBQWdCO0lBR3pCO1FBZ0pBLGVBQWU7UUFDUCw2QkFBd0IsR0FBRyxDQUFDLENBQUM7UUFDN0IsNkJBQXdCLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4QiwyQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDM0Isc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4Qix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLDRCQUF1QixHQUFHLENBQUMsQ0FBQztRQXhKaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7SUFDSywwQkFBMEI7O1lBQzVCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRSxDQUFDO0tBQUE7SUFFSyxvQkFBb0I7O1lBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVFLENBQUM7S0FBQTtJQUVLLG1CQUFtQixDQUFDLGFBQTJCOztZQUNqRCxNQUFNLElBQUksQ0FBQyxr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