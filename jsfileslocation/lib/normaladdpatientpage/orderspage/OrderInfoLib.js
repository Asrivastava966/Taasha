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
const OrderInfoPO_1 = require("../../../po/normaladdpatientpage/orderspage/OrderInfoPO");
const WaitUtils_1 = require("../../../utils/WaitUtils");
const CommonUtils_1 = require("../../../utils/CommonUtils");
const OrderForms_1 = require("../../../data/enums/OrderForms");
class OrderInfoLib {
    constructor() {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.commonUtils = new CommonUtils_1.CommonUtils();
        this.orderInfoPO = new OrderInfoPO_1.OrderInfoPO();
    }
    getWaitUtils() {
        return this.waitUtils;
    }
    getCommonUtils() {
        return this.commonUtils;
    }
    getOrderInfoPO() {
        return this.orderInfoPO;
    }
    //Order Info 
    getOrderInfoSuccessMessageText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrderInfoPO().getOrderSuccessMessage().getText();
        });
    }
    getDisplayedOrderType() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrderInfoPO().getOrderTypeDropdown().getDropdownElement().getAttribute('value');
        });
    }
    selectOrderType(orderType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getOrderTypeDropdown().selectOption(orderType);
        });
    }
    getDisplayedWorkflowStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrderInfoPO().getWorkflowStatusDropdown().getDropdownElement().getAttribute('value');
        });
    }
    selectWorkflowStatus(workflowStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getWorkflowStatusDropdown().selectOption(workflowStatus);
        });
    }
    getDisplayedOrderOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrderInfoPO().getOrderOwnerDropdown().getDropdownElement().getAttribute('value');
        });
    }
    selectOrderOwner(orderOwnerName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getOrderOwnerDropdown().selectOption(orderOwnerName);
        });
    }
    getDisplayedAssignTo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrderInfoPO().getAssignToDropdown().getDropdownElement().getAttribute('value');
        });
    }
    selectAssignTo(assigneeName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getAssignToDropdown().selectOption(assigneeName);
        });
    }
    getDisplayedBranch() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrderInfoPO().getBranchDropdown().getDropdownElement().getAttribute('value');
        });
    }
    selectBranch(branchName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getBranchDropdown().selectOption(branchName);
        });
    }
    selectBillingOrSetupDateAsToday() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getBillingOrSetupDateCalenderInputField().selectToday();
        });
    }
    //Financial Reponsibilities 
    //Delivery Address 
    //Order Instruction 
    //Delivery Ticket Instruction 
    //Order Appointment History
    //Products
    addNewProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            let addNewProductLinkText = 'Add New Product';
            yield this.getOrderInfoPO().getActionDropdownButton().selectDropdownMenuOptionByLinkText(addNewProductLinkText);
        });
    }
    getValidationMessageOfProductGrid() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrderInfoPO().getValidationMessageOfProductGrid().getText();
        });
    }
    fillQuantity(quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getQuantityInputField().clear();
            yield this.getOrderInfoPO().getQuantityInputField().sendKeys(quantity);
        });
    }
    selectHcpcs(hcpcsCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getHcpcsDropdownInputField().selectDropdownMenuOptionByLinkText(hcpcsCode);
        });
    }
    selectPR(pr) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getPrSelectDropdown().selectOption(pr);
        });
    }
    selectProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getProductSelectDropdown().selectDropdownMenuOptionByLinkText(product);
        });
    }
    selectManufacturer(manufacturer) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getManufacturerSelectDropdown().selectOption(manufacturer);
        });
    }
    addProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getAddButton().click();
        });
    }
    clearProductInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getClearButton().click();
        });
    }
    cancelAddNewProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getCancelButton().click();
        });
    }
    getProductsGrid() {
        return this.getOrderInfoPO().getProductsGrid();
    }
    /**
     * Workflow methods
     */
    fillOrderInfo(orderInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Filling in the -Order Info- section of Order Type: " + orderInfo.getOrderType());
            if (orderInfo.getOrderType() != null) {
                yield this.selectOrderType(orderInfo.getOrderType());
            }
            if (orderInfo.getBillingOrSetupDate() != null) {
                yield this.selectBillingOrSetupDateAsToday();
            }
        });
    }
    fillProductInfo(productInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Products:: Action > Add New Product");
            yield this.addNewProduct();
            protractor_1.browser.logger.info("Filling in the -Product Info- section of Order Info page.");
            if (productInfo.getManufacturer() != null) {
                yield this.selectManufacturer(productInfo.getManufacturer());
            }
            if (productInfo.getQuantity() != null) {
                yield this.fillQuantity(productInfo.getQuantity());
            }
            if (productInfo.getHcpcs() != null) {
                yield this.selectHcpcs(productInfo.getHcpcs());
            }
            if (productInfo.getPr() != null) {
                yield this.selectPR(productInfo.getPr());
            }
            if (productInfo.getProduct() != null) {
                yield this.selectProduct(productInfo.getProduct());
            }
        });
    }
    //All Forms
    navigateToAllForms() {
        return __awaiter(this, void 0, void 0, function* () {
            let allFormsLinkText = 'All Forms';
            yield this.getOrderInfoPO().getActionDropdownButton().selectDropdownMenuOptionByLinkText(allFormsLinkText);
        });
    }
    performSignature() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getFormsModalDialog().navigateToTheSignatureModalDialog();
            yield this.getOrderInfoPO().getSignatureModalDialog().performSignature();
            yield this.getOrderInfoPO().getSignatureModalDialog().save();
        });
    }
    saveAndSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderInfoPO().getFormsModalDialog().saveAndSubmit();
            yield this.getOrderInfoPO().getFormsModalDialog().close();
        });
    }
    fillAllFormsInfo(deliveryTicketFormInfo, abnFormInfo, planOfCareFormInfo, patientSurveyFormInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            //pending..
        });
    }
    fillDeliveryTicketFormInfo(deliveryTicketFormInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (deliveryTicketFormInfo.getPatientSign() != null) {
                yield this.performSignature();
                yield this.saveAndSubmit();
            }
        });
    }
    fillABNFormInfo(abnFormInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (abnFormInfo.getSignatureFlag() != null) {
                yield this.performSignature();
                yield this.saveAndSubmit();
            }
        });
    }
    fillPlanOfCareFormInfo(planOfCareFormInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (planOfCareFormInfo.getTechnicianSign() != null) {
                yield this.performSignature();
                yield this.saveAndSubmit();
            }
        });
    }
    fillPatientSurveyFormInfo(patientSurveyFormInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (patientSurveyFormInfo.getPatientSignature() != null) {
                yield this.performSignature();
                yield this.saveAndSubmit();
            }
        });
    }
    fillFormsInfo(formsInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.navigateToAllForms();
            if (formsInfo.getAllFormsFlag() != null) {
                yield this.getOrderInfoPO().getOpenFormsModalDialog().selectForm(OrderForms_1.OrderForms.ALL_FORMS);
                yield this.getOrderInfoPO().getOpenFormsModalDialog().openForm();
                yield this.fillAllFormsInfo(formsInfo.getDeliveryTicketFormInfo(), formsInfo.getAbnFormInfo(), formsInfo.getPlanOfCareFormInfo(), formsInfo.getPatientSurveyFormInfo());
            }
            if (formsInfo.getDeliveryTicketFormInfo() != null) {
                yield this.getOrderInfoPO().getOpenFormsModalDialog().selectForm(OrderForms_1.OrderForms.DELIVERY_TICKET);
                yield this.getOrderInfoPO().getOpenFormsModalDialog().openForm();
                yield this.fillDeliveryTicketFormInfo(formsInfo.getDeliveryTicketFormInfo());
            }
            if (formsInfo.getAbnFormInfo() != null) {
                yield this.getOrderInfoPO().getOpenFormsModalDialog().selectForm(OrderForms_1.OrderForms.ABN_FORM);
                yield this.getOrderInfoPO().getOpenFormsModalDialog().openForm();
                yield this.fillABNFormInfo(formsInfo.getAbnFormInfo());
            }
            if (formsInfo.getPlanOfCareFormInfo() != null) {
                yield this.getOrderInfoPO().getOpenFormsModalDialog().selectForm(OrderForms_1.OrderForms.PLAN_OF_CARE);
                yield this.getOrderInfoPO().getOpenFormsModalDialog().openForm();
                yield this.fillPlanOfCareFormInfo(formsInfo.getPlanOfCareFormInfo());
            }
            if (formsInfo.getPatientSurveyFormInfo() != null) {
                yield this.getOrderInfoPO().getOpenFormsModalDialog().selectForm(OrderForms_1.OrderForms.PATIENT_SURVEY);
                yield this.getOrderInfoPO().getOpenFormsModalDialog().openForm();
                yield this.fillPatientSurveyFormInfo(formsInfo.getPatientSurveyFormInfo());
            }
        });
    }
    //Footer
    saveOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info('Saving...');
            yield this.getWaitUtils().waitForElementToBeVisible(this.getOrderInfoPO().getSaveButton());
            yield this.getWaitUtils().waitForElementToBeClickable(this.getOrderInfoPO().getSaveButton());
            yield this.getOrderInfoPO().getSaveButton().click();
        });
    }
    completeOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info('Completing Order..');
            yield this.getWaitUtils().waitForElementToBeVisible(this.getOrderInfoPO().getCompleteOrderButton());
            yield this.getWaitUtils().waitForElementToBeClickable(this.getOrderInfoPO().getCompleteOrderButton());
            yield this.getOrderInfoPO().getCompleteOrderButton().click();
        });
    }
    completeAndConfirmOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.completeOrder();
            yield this.getOrderInfoPO().getConfirmationModalDialog().confirmYes();
        });
    }
    cancelOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info('Canceling Order..');
            yield this.getOrderInfoPO().getCancelOrderButton().click();
        });
    }
}
exports.OrderInfoLib = OrderInfoLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJJbmZvTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvbm9ybWFsYWRkcGF0aWVudHBhZ2Uvb3JkZXJzcGFnZS9PcmRlckluZm9MaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyx5RkFBc0Y7QUFLdEYsd0RBQXFEO0FBRXJELDREQUF5RDtBQU96RCwrREFBNEQ7QUFFNUQsTUFBYSxZQUFZO0lBS3JCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELGFBQWE7SUFDUCw4QkFBOEI7O1lBQ2hDLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxRSxDQUFDO0tBQUE7SUFFSyxxQkFBcUI7O1lBQ3ZCLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RyxDQUFDO0tBQUE7SUFFSyxlQUFlLENBQUMsU0FBbUI7O1lBQ3JDLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMs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