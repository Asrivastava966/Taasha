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
const AddPatientPO_1 = require("../../po/normaladdpatientpage/AddPatientPO");
const PatientInfoLib_1 = require("./PatientInfoLib");
const InsuranceInfoLib_1 = require("./InsuranceInfoLib");
const OrdersLib_1 = require("./orderspage/OrdersLib");
const NotesLib_1 = require("./NotesLib");
const DocumentsLib_1 = require("./DocumentsLib");
const CPAPLib_1 = require("./cpap/CPAPLib");
const AuditLib_1 = require("./AuditLib");
const protractor_1 = require("protractor");
const WaitUtils_1 = require("../../utils/WaitUtils");
class AddPatientLib {
    constructor() {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.addPatientPO = new AddPatientPO_1.AddPatientPO();
        this.patientInfoLib = new PatientInfoLib_1.PatientInfoLib();
        this.insuranceInfoLib = new InsuranceInfoLib_1.InsuranceInfoLib();
        this.ordersLib = new OrdersLib_1.OrdersLib();
        this.notesLib = new NotesLib_1.NotesLib();
        this.documentsLib = new DocumentsLib_1.DocumentsLib();
        this.cpapLib = new CPAPLib_1.CPAPLib();
        this.auditLib = new AuditLib_1.AuditLib();
    }
    getWaitUtils() {
        return this.waitUtils;
    }
    getAddPatientPO() {
        return this.addPatientPO;
    }
    getPatientInfoLib() {
        return this.patientInfoLib;
    }
    getInsuranceInfoLib() {
        return this.insuranceInfoLib;
    }
    getOrdersLib() {
        return this.ordersLib;
    }
    getNotesLib() {
        return this.notesLib;
    }
    getDocumentsLib() {
        return this.documentsLib;
    }
    getCPAPLib() {
        return this.cpapLib;
    }
    getAuditLib() {
        return this.auditLib;
    }
    getPatientNameOnHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getWaitUtils().waitForElementToBePresent(this.getAddPatientPO().getPatientNameOnHeader());
            yield this.getWaitUtils().waitForElementToBeVisible(this.getAddPatientPO().getPatientNameOnHeader());
            let patientNameWithLabel = yield this.getAddPatientPO().getPatientNameOnHeader().getText();
            let patientNameStringArray = patientNameWithLabel.split(': ');
            return patientNameStringArray[1];
        });
    }
    getPatientDOBOnHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            let patientDOBWithLabel = yield this.getAddPatientPO().getPatientDOBOnHeader().getText();
            let patientDOBWithoutLabelStringArray = patientDOBWithLabel.split(': ');
            let patientDOB = patientDOBWithoutLabelStringArray[1];
            let patientDOBStringArray = patientDOB.split('/');
            let date = +patientDOBStringArray[1];
            let month = +patientDOBStringArray[0];
            let year = +patientDOBStringArray[2];
            return new Date(year, --month, date);
        });
    }
    checkIfATabLinkIsActive(tabLink) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag = true;
            let classAttributeValue = yield tabLink.getAttribute('class');
            if (classAttributeValue.includes('disabled')) {
                flag = false;
            }
            return flag;
        });
    }
    navigateToPatientInfoTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddPatientPO().getPatientInfoTabLink().click();
            protractor_1.browser.logger.info('Navigating to the Patient Info tab');
        });
    }
    navigateToInsuranceInfoTab() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.checkIfATabLinkIsActive(this.getAddPatientPO().getInsuranceInfoTabLink())) {
                yield this.getAddPatientPO().getInsuranceInfoTabLink().click();
                yield this.getAddPatientPO().getInsuranceInfoTabLink().click();
                protractor_1.browser.logger.info('Navigating to the Insurance Info tab');
            }
            else {
                protractor_1.browser.logger.info('Insurance Info tab is inactive!');
            }
        });
    }
    navigateToOrdersTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddPatientPO().getOrdersTabLink().click();
            protractor_1.browser.logger.info('Navigating to the Orders tab');
        });
    }
    navigateToNotesTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddPatientPO().getNotesTabLink().click();
            protractor_1.browser.logger.info('Navigating to the Notes tab');
        });
    }
    navigateToDocumentsTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddPatientPO().getDocumentsTabLink().click();
            protractor_1.browser.logger.info('Navigating to the Documents tab');
        });
    }
    navigateToCPAPTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddPatientPO().getCPAPTabLink().click();
            protractor_1.browser.logger.info('Navigating to the CPAP tab');
        });
    }
    navigateToAuditTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAddPatientPO().getAuditTabLink().click();
            protractor_1.browser.logger.info('Navigating to the Audit tab');
        });
    }
}
exports.AddPatientLib = AddPatientLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkUGF0aWVudExpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL25vcm1hbGFkZHBhdGllbnRwYWdlL0FkZFBhdGllbnRMaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZFQUEwRTtBQUMxRSxxREFBa0Q7QUFDbEQseURBQXNEO0FBQ3RELHNEQUFtRDtBQUNuRCx5Q0FBc0M7QUFDdEMsaURBQThDO0FBQzlDLDRDQUF5QztBQUN6Qyx5Q0FBc0M7QUFDdEMsMkNBQW9EO0FBQ3BELHFEQUFrRDtBQUVsRCxNQUFhLGFBQWE7SUFXdEI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lB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