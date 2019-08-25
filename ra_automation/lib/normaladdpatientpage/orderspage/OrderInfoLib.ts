import { browser } from "protractor";
import { OrderInfoPO } from "../../../po/normaladdpatientpage/orderspage/OrderInfoPO";
import { OrderType } from "../../../data/enums/OrderType";
import { OrderWorkflowStatus } from "../../../data/enums/OrderWorkflowStatus";
import { OrderInfo } from "../../../data/info/OrderInfo";
import { ProductInfo } from "../../../data/info/ProductInfo";
import { WaitUtils } from "../../../utils/WaitUtils";
import { ProductPriceType } from "../../../data/enums/ProductPriceType";
import { CommonUtils } from "../../../utils/CommonUtils";
import { ProductManufacturer } from "../../../data/enums/ProductManufacturer";
import { DeliveryTicketFormInfo } from "../../../data/info/DeliveryTicketFormInfo";
import { PlanOfCareFormInfo } from "../../../data/info/PlanOfCareFormInfo";
import { PatientSurveyFormInfo } from "../../../data/info/PatientSurveyFormInfo";
import { ABNFormInfo } from "../../../data/info/ABNFormInfo";
import { FormsInfo } from "../../../data/info/FormsInfo";
import { OrderForms } from "../../../data/enums/OrderForms";

export class OrderInfoLib {
    waitUtils:WaitUtils;
    commonUtils:CommonUtils;
    orderInfoPO:OrderInfoPO;

    constructor() {
        this.waitUtils = new WaitUtils();
        this.commonUtils = new CommonUtils();
        this.orderInfoPO = new OrderInfoPO();
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
    async getOrderInfoSuccessMessageText() {
        return await this.getOrderInfoPO().getOrderSuccessMessage().getText();
    }

    async getDisplayedOrderType() {
        return await this.getOrderInfoPO().getOrderTypeDropdown().getDropdownElement().getAttribute('value');
    }

    async selectOrderType(orderType:OrderType) {
        await this.getOrderInfoPO().getOrderTypeDropdown().selectOption(orderType);
    }

    async getDisplayedWorkflowStatus() {
        return await this.getOrderInfoPO().getWorkflowStatusDropdown().getDropdownElement().getAttribute('value');
    }

    async selectWorkflowStatus(workflowStatus:OrderWorkflowStatus) {
        await this.getOrderInfoPO().getWorkflowStatusDropdown().selectOption(workflowStatus);
    }

    async getDisplayedOrderOwner() {
        return await this.getOrderInfoPO().getOrderOwnerDropdown().getDropdownElement().getAttribute('value');
    }

    async selectOrderOwner(orderOwnerName:string) {
        await this.getOrderInfoPO().getOrderOwnerDropdown().selectOption(orderOwnerName);
    }

    async getDisplayedAssignTo() {
        return await this.getOrderInfoPO().getAssignToDropdown().getDropdownElement().getAttribute('value');
    }

    async selectAssignTo(assigneeName:string) {
        await this.getOrderInfoPO().getAssignToDropdown().selectOption(assigneeName);
    }

    async getDisplayedBranch() {
        return await this.getOrderInfoPO().getBranchDropdown().getDropdownElement().getAttribute('value');
    }

    async selectBranch(branchName:string) {
        await this.getOrderInfoPO().getBranchDropdown().selectOption(branchName);
    }

    async selectBillingOrSetupDateAsToday() {
        await this.getOrderInfoPO().getBillingOrSetupDateCalenderInputField().selectToday();
    }

    //Financial Reponsibilities 

    //Delivery Address 

    //Order Instruction 

    //Delivery Ticket Instruction 

    //Order Appointment History

    //Products
    async addNewProduct() {
        let addNewProductLinkText = 'Add New Product';
        await this.getOrderInfoPO().getActionDropdownButton().selectDropdownMenuOptionByLinkText(addNewProductLinkText);
    }

    async getValidationMessageOfProductGrid() {
        return await this.getOrderInfoPO().getValidationMessageOfProductGrid().getText();
    }
    
    async fillQuantity(quantity:number) {
        await this.getOrderInfoPO().getQuantityInputField().clear();
        await this.getOrderInfoPO().getQuantityInputField().sendKeys(quantity);
    }

    async selectHcpcs(hcpcsCode:string) {
        await this.getOrderInfoPO().getHcpcsDropdownInputField().selectDropdownMenuOptionByLinkText(hcpcsCode);
    }

    async selectPR(pr:ProductPriceType) {
        await this.getOrderInfoPO().getPrSelectDropdown().selectOption(pr);
    }

    async selectProduct(product:string) {
        await this.getOrderInfoPO().getProductSelectDropdown().selectDropdownMenuOptionByLinkText(product);
    }

    async selectManufacturer(manufacturer:ProductManufacturer) {
        await this.getOrderInfoPO().getManufacturerSelectDropdown().selectOption(manufacturer);
    }

    async addProduct() {
        await this.getOrderInfoPO().getAddButton().click();
    }

    async clearProductInfo() {
        await this.getOrderInfoPO().getClearButton().click();
    }

    async cancelAddNewProduct() {
        await this.getOrderInfoPO().getCancelButton().click();
    }

    getProductsGrid() {
        return this.getOrderInfoPO().getProductsGrid();
    }

    /**
     * Workflow methods
     */
    async fillOrderInfo(orderInfo:OrderInfo) {
        browser.logger.info("Filling in the -Order Info- section of Order Type: " + orderInfo.getOrderType()); 

        if(orderInfo.getOrderType() != null) {
            await this.selectOrderType(orderInfo.getOrderType());
        }

        if(orderInfo.getBillingOrSetupDate() != null) {
            await this.selectBillingOrSetupDateAsToday();
        }
    }

    async fillProductInfo(productInfo:ProductInfo) {
        browser.logger.info("Products:: Action > Add New Product");
        await this.addNewProduct()

        browser.logger.info("Filling in the -Product Info- section of Order Info page.");

        if(productInfo.getManufacturer() != null) {
            await this.selectManufacturer(productInfo.getManufacturer());
        }
        
        if(productInfo.getQuantity() != null) {
            await this.fillQuantity(productInfo.getQuantity());
        }

        if(productInfo.getHcpcs() != null) {
            await this.selectHcpcs(productInfo.getHcpcs());
        }
        
        if(productInfo.getPr() != null) {
            await this.selectPR(productInfo.getPr());
        }
        
        if(productInfo.getProduct() != null) {
            await this.selectProduct(productInfo.getProduct());
        }
    }

    //All Forms
    async navigateToAllForms() {
        let allFormsLinkText = 'All Forms';
        await this.getOrderInfoPO().getActionDropdownButton().selectDropdownMenuOptionByLinkText(allFormsLinkText);
    }

    async performSignature() {
        await this.getOrderInfoPO().getFormsModalDialog().navigateToTheSignatureModalDialog();
        await this.getOrderInfoPO().getSignatureModalDialog().performSignature();
        await this.getOrderInfoPO().getSignatureModalDialog().save();
    }

    async saveAndSubmit() {
        await this.getOrderInfoPO().getFormsModalDialog().saveAndSubmit();
        await this.getOrderInfoPO().getFormsModalDialog().close();
    }

    async fillAllFormsInfo(deliveryTicketFormInfo:DeliveryTicketFormInfo, abnFormInfo:ABNFormInfo, planOfCareFormInfo:PlanOfCareFormInfo, patientSurveyFormInfo:PatientSurveyFormInfo) {
        //pending..
    }

    async fillDeliveryTicketFormInfo(deliveryTicketFormInfo:DeliveryTicketFormInfo) {
        if(deliveryTicketFormInfo.getPatientSign() != null) {
            await this.performSignature();
            await this.saveAndSubmit();
        }
    }

    async fillABNFormInfo(abnFormInfo:ABNFormInfo) {
        if(abnFormInfo.getSignatureFlag() != null) {
            await this.performSignature();
            await this.saveAndSubmit();
        }
    }

    async fillPlanOfCareFormInfo(planOfCareFormInfo:PlanOfCareFormInfo) {
        if(planOfCareFormInfo.getTechnicianSign() != null) {
            await this.performSignature();
            await this.saveAndSubmit();
        }
    }

    async fillPatientSurveyFormInfo(patientSurveyFormInfo:PatientSurveyFormInfo) {
        if(patientSurveyFormInfo.getPatientSignature() != null) {
            await this.performSignature();
            await this.saveAndSubmit();
        }
    }

    async fillFormsInfo(formsInfo:FormsInfo) {
        await this.navigateToAllForms();

        if(formsInfo.getAllFormsFlag() != null) {
            await this.getOrderInfoPO().getOpenFormsModalDialog().selectForm(OrderForms.ALL_FORMS);
            await this.getOrderInfoPO().getOpenFormsModalDialog().openForm();
            await this.fillAllFormsInfo(formsInfo.getDeliveryTicketFormInfo(), formsInfo.getAbnFormInfo(), formsInfo.getPlanOfCareFormInfo(), formsInfo.getPatientSurveyFormInfo());
        }

        if(formsInfo.getDeliveryTicketFormInfo() != null) {
            await this.getOrderInfoPO().getOpenFormsModalDialog().selectForm(OrderForms.DELIVERY_TICKET);
            await this.getOrderInfoPO().getOpenFormsModalDialog().openForm();
            await this.fillDeliveryTicketFormInfo(formsInfo.getDeliveryTicketFormInfo());
        }

        if(formsInfo.getAbnFormInfo() != null) {
            await this.getOrderInfoPO().getOpenFormsModalDialog().selectForm(OrderForms.ABN_FORM);
            await this.getOrderInfoPO().getOpenFormsModalDialog().openForm();
            await this.fillABNFormInfo(formsInfo.getAbnFormInfo());
        }

        if(formsInfo.getPlanOfCareFormInfo() != null) {
            await this.getOrderInfoPO().getOpenFormsModalDialog().selectForm(OrderForms.PLAN_OF_CARE);
            await this.getOrderInfoPO().getOpenFormsModalDialog().openForm();
            await this.fillPlanOfCareFormInfo(formsInfo.getPlanOfCareFormInfo());
        }

        if(formsInfo.getPatientSurveyFormInfo() != null) {
            await this.getOrderInfoPO().getOpenFormsModalDialog().selectForm(OrderForms.PATIENT_SURVEY);
            await this.getOrderInfoPO().getOpenFormsModalDialog().openForm();
            await this.fillPatientSurveyFormInfo(formsInfo.getPatientSurveyFormInfo());
        }
    }

    //Footer
    async saveOrder() {
        browser.logger.info('Saving...')
        await this.getWaitUtils().waitForElementToBeVisible(this.getOrderInfoPO().getSaveButton());
        await this.getWaitUtils().waitForElementToBeClickable(this.getOrderInfoPO().getSaveButton());
        await this.getOrderInfoPO().getSaveButton().click();
    }

    async completeOrder() {
        browser.logger.info('Completing Order..');
        await this.getWaitUtils().waitForElementToBeVisible(this.getOrderInfoPO().getCompleteOrderButton());
        await this.getWaitUtils().waitForElementToBeClickable(this.getOrderInfoPO().getCompleteOrderButton());
        await this.getOrderInfoPO().getCompleteOrderButton().click();
    }

    async completeAndConfirmOrder() {
        await this.completeOrder();
        await this.getOrderInfoPO().getConfirmationModalDialog().confirmYes();
    }

    async cancelOrder() {
        browser.logger.info('Canceling Order..');
        await this.getOrderInfoPO().getCancelOrderButton().click();
    }
}