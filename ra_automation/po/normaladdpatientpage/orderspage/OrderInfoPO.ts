import { element, by } from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";
import { CustomDropdownMenu } from "../../../component/comp/CustomDropdownMenu";
import { DatePicker } from "../../../component/comp/DatePicker";
import { ConfirmationModalYesNoDialog } from "../../../component/comp/ConfirmationModalYesNoDialog";
import { ProductsGrid } from "../../../component/comp/ProductsGrid";
import { CustomDropdownMenuOrigin } from "../../../data/enums/CustomDropdownMenuOrigin";
import { OpenFormsModalDialog } from "../../../component/comp/OpenFormsModalDialog";
import { FormsModalDialog } from "../../../component/comp/FormsModalDialog";
import { PatientSignatureModalDialog } from "../../../component/comp/PatientSignatureModalPO";

export class OrderInfoPO {
    private static orderSuccessMessage = element(by.css('[ng-if=\"orderSuccessMessage\"]'));

    getOrderSuccessMessage() {
        return OrderInfoPO.orderSuccessMessage;
    }

    //Confirmation Modal Dialog 
    private static confirmationModalDialog = element(by.className('modal-dialog')); 

    getConfirmationModalDialog() {
        return new ConfirmationModalYesNoDialog(OrderInfoPO.confirmationModalDialog);
    }
    
    private static orderTypeDropdown = element(by.id('inputOrderType'));
    private static workflowStatusDropdown = element(by.id('inputworkflowStatus'));
    private static orderOwnerDropdown = element(by.id('inputOrderOwner'));
    private static assignToDropdown = element(by.id('inputAssignTo'));
    private static branchDropdown = element(by.id('inputBranchOffice'));
    private static billingOrSetupDateCalendarInputField = element(by.id('inputSetupDate'));

    getOrderTypeDropdown() {
        return new SelectDropdown(OrderInfoPO.orderTypeDropdown);
    }

    getWorkflowStatusDropdown() {
        return new SelectDropdown(OrderInfoPO.workflowStatusDropdown);
    }

    getOrderOwnerDropdown() {
        return new SelectDropdown(OrderInfoPO.orderOwnerDropdown);
    }

    getAssignToDropdown() {
        return new SelectDropdown(OrderInfoPO.assignToDropdown);
    }

    getBranchDropdown() {
        return new SelectDropdown(OrderInfoPO.branchDropdown);
    }

    getBillingOrSetupDateCalenderInputField() {
        return new DatePicker(OrderInfoPO.billingOrSetupDateCalendarInputField);
    }

    //Products
    private static submitToVGMButton = element(by.css('[ng-click=\"generateShipping()\"]'));
    private static actionDropdownButton = element(by.className('btn btn-primary btn-xs dropdown-toggle')); 

    getSubmitToVGMButton() {
        return OrderInfoPO.submitToVGMButton;
    }

    getActionDropdownButton() {
        return new CustomDropdownMenu(OrderInfoPO.actionDropdownButton, CustomDropdownMenuOrigin.BUTTON);
    }
    
    private static validationMessageOfProductGrid = element(by.css('[ng-if=\"!isValidateForProductGrid\"]'));
    getValidationMessageOfProductGrid() {
        return OrderInfoPO.validationMessageOfProductGrid;
    }

    //Product Info 
    private static quantityInputField = element(by.id('inputQty'));
    private static hcpcsDropdownInputField = element(by.model('hcpcProduct.hcpcCdDsc'));
    private static prSelectDropdown = element(by.model('hcpcProduct.priceTypId'));
    private static productSelectDropdown = element(by.model('hcpcProduct.dmeProdNmDsc'));
    private static uomInputField = element(by.model('hcpcProduct.uom'));
    private static manufacturerSelectDropdown = element(by.model('hcpcProduct.mfrNm'));
    private static chargeInputField = element(by.id('inputChargeAmt'));
    private static allowedAmtInputField = element(by.id('inputAllowedAmt'));
    private static referenceNoInputField = element(by.model('hcpcProduct.serialNo'));
    private static specialPriceCheckbox = element(by.model('hcpcProduct.specialPrice'));
    private static selfPayCheckbox = element(by.model('hcpcProduct.selfPay'));

    getQuantityInputField() {
        return OrderInfoPO.quantityInputField;
    }

    getHcpcsDropdownInputField() {
        return new CustomDropdownMenu(OrderInfoPO.hcpcsDropdownInputField, CustomDropdownMenuOrigin.INPUT_FIELD);
    }

    getPrSelectDropdown() {
        return new SelectDropdown(OrderInfoPO.prSelectDropdown);
    }

    getProductSelectDropdown() {
        return new CustomDropdownMenu(OrderInfoPO.productSelectDropdown, CustomDropdownMenuOrigin.BUTTON);
    }

    getuomInputField() {
        return OrderInfoPO.uomInputField;
    }

    getManufacturerSelectDropdown() {
        return new SelectDropdown(OrderInfoPO.manufacturerSelectDropdown);
    }

    getChargeInputField() {
        return OrderInfoPO.chargeInputField;
    }

    getAllowedAmtInputField() {
        return OrderInfoPO.allowedAmtInputField;
    }

    getReferenceNoInputField() {
        return OrderInfoPO.referenceNoInputField;
    }

    getSpecialPriceCheckbox() {
        return OrderInfoPO.specialPriceCheckbox;
    }

    getSelfPayCheckbox() {
        return OrderInfoPO.selfPayCheckbox;
    }

    private static addButton = element(by.css('[ng-click=\"addProduct()\"]'));
    private static clearButton = element(by.css('[ng-click=\"clearProductAddUpdate()\"]'));
    private static cancelButton = element(by.css('[ng-click=\"cancelProductAddUpdate()\"]'));

    getAddButton() {
        return OrderInfoPO.addButton;
    }

    getClearButton() {
        return OrderInfoPO.clearButton;
    }

    getCancelButton() {
        return OrderInfoPO.cancelButton;
    }

    //Products Grid
    private static productsGrid = element(by.id('grid1'));

    getProductsGrid() {
        return new ProductsGrid(OrderInfoPO.productsGrid);
    }

    //All Forms
    private static modalDialogs = element.all(by.className('modal-dialog'));

    getOpenFormsModalDialog() {
        return new OpenFormsModalDialog(OrderInfoPO.modalDialogs.get(0));
    }

    getFormsModalDialog() {
        return new FormsModalDialog(OrderInfoPO.modalDialogs.get(1));
    }

    getSignatureModalDialog() {
        return new PatientSignatureModalDialog(OrderInfoPO.modalDialogs.get(2));
    }

    //Footer
    private static saveButton = element(by.id('saveOrderBtnId'));
    private static completeOrderButton = element(by.id('orderCompletedBtnId'));
    private static cancelOrderButton = element(by.id('orderCancelledBtnId'));

    getSaveButton() {
        return OrderInfoPO.saveButton;
    }

    getCompleteOrderButton() {
        return OrderInfoPO.completeOrderButton;
    }

    getCancelOrderButton() {
        return OrderInfoPO.cancelOrderButton;
    }
}