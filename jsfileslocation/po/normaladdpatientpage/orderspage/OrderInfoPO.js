"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
const CustomDropdownMenu_1 = require("../../../component/comp/CustomDropdownMenu");
const DatePicker_1 = require("../../../component/comp/DatePicker");
const ConfirmationModalYesNoDialog_1 = require("../../../component/comp/ConfirmationModalYesNoDialog");
const ProductsGrid_1 = require("../../../component/comp/ProductsGrid");
const CustomDropdownMenuOrigin_1 = require("../../../data/enums/CustomDropdownMenuOrigin");
const OpenFormsModalDialog_1 = require("../../../component/comp/OpenFormsModalDialog");
const FormsModalDialog_1 = require("../../../component/comp/FormsModalDialog");
const PatientSignatureModalPO_1 = require("../../../component/comp/PatientSignatureModalPO");
class OrderInfoPO {
    getOrderSuccessMessage() {
        return OrderInfoPO.orderSuccessMessage;
    }
    getConfirmationModalDialog() {
        return new ConfirmationModalYesNoDialog_1.ConfirmationModalYesNoDialog(OrderInfoPO.confirmationModalDialog);
    }
    getOrderTypeDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderInfoPO.orderTypeDropdown);
    }
    getWorkflowStatusDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderInfoPO.workflowStatusDropdown);
    }
    getOrderOwnerDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderInfoPO.orderOwnerDropdown);
    }
    getAssignToDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderInfoPO.assignToDropdown);
    }
    getBranchDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderInfoPO.branchDropdown);
    }
    getBillingOrSetupDateCalenderInputField() {
        return new DatePicker_1.DatePicker(OrderInfoPO.billingOrSetupDateCalendarInputField);
    }
    getSubmitToVGMButton() {
        return OrderInfoPO.submitToVGMButton;
    }
    getActionDropdownButton() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(OrderInfoPO.actionDropdownButton, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.BUTTON);
    }
    getValidationMessageOfProductGrid() {
        return OrderInfoPO.validationMessageOfProductGrid;
    }
    getQuantityInputField() {
        return OrderInfoPO.quantityInputField;
    }
    getHcpcsDropdownInputField() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(OrderInfoPO.hcpcsDropdownInputField, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.INPUT_FIELD);
    }
    getPrSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderInfoPO.prSelectDropdown);
    }
    getProductSelectDropdown() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(OrderInfoPO.productSelectDropdown, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.BUTTON);
    }
    getuomInputField() {
        return OrderInfoPO.uomInputField;
    }
    getManufacturerSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(OrderInfoPO.manufacturerSelectDropdown);
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
    getAddButton() {
        return OrderInfoPO.addButton;
    }
    getClearButton() {
        return OrderInfoPO.clearButton;
    }
    getCancelButton() {
        return OrderInfoPO.cancelButton;
    }
    getProductsGrid() {
        return new ProductsGrid_1.ProductsGrid(OrderInfoPO.productsGrid);
    }
    getOpenFormsModalDialog() {
        return new OpenFormsModalDialog_1.OpenFormsModalDialog(OrderInfoPO.modalDialogs.get(0));
    }
    getFormsModalDialog() {
        return new FormsModalDialog_1.FormsModalDialog(OrderInfoPO.modalDialogs.get(1));
    }
    getSignatureModalDialog() {
        return new PatientSignatureModalPO_1.PatientSignatureModalDialog(OrderInfoPO.modalDialogs.get(2));
    }
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
OrderInfoPO.orderSuccessMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"orderSuccessMessage\"]'));
//Confirmation Modal Dialog 
OrderInfoPO.confirmationModalDialog = protractor_1.element(protractor_1.by.className('modal-dialog'));
OrderInfoPO.orderTypeDropdown = protractor_1.element(protractor_1.by.id('inputOrderType'));
OrderInfoPO.workflowStatusDropdown = protractor_1.element(protractor_1.by.id('inputworkflowStatus'));
OrderInfoPO.orderOwnerDropdown = protractor_1.element(protractor_1.by.id('inputOrderOwner'));
OrderInfoPO.assignToDropdown = protractor_1.element(protractor_1.by.id('inputAssignTo'));
OrderInfoPO.branchDropdown = protractor_1.element(protractor_1.by.id('inputBranchOffice'));
OrderInfoPO.billingOrSetupDateCalendarInputField = protractor_1.element(protractor_1.by.id('inputSetupDate'));
//Products
OrderInfoPO.submitToVGMButton = protractor_1.element(protractor_1.by.css('[ng-click=\"generateShipping()\"]'));
OrderInfoPO.actionDropdownButton = protractor_1.element(protractor_1.by.className('btn btn-primary btn-xs dropdown-toggle'));
OrderInfoPO.validationMessageOfProductGrid = protractor_1.element(protractor_1.by.css('[ng-if=\"!isValidateForProductGrid\"]'));
//Product Info 
OrderInfoPO.quantityInputField = protractor_1.element(protractor_1.by.id('inputQty'));
OrderInfoPO.hcpcsDropdownInputField = protractor_1.element(protractor_1.by.model('hcpcProduct.hcpcCdDsc'));
OrderInfoPO.prSelectDropdown = protractor_1.element(protractor_1.by.model('hcpcProduct.priceTypId'));
OrderInfoPO.productSelectDropdown = protractor_1.element(protractor_1.by.model('hcpcProduct.dmeProdNmDsc'));
OrderInfoPO.uomInputField = protractor_1.element(protractor_1.by.model('hcpcProduct.uom'));
OrderInfoPO.manufacturerSelectDropdown = protractor_1.element(protractor_1.by.model('hcpcProduct.mfrNm'));
OrderInfoPO.chargeInputField = protractor_1.element(protractor_1.by.id('inputChargeAmt'));
OrderInfoPO.allowedAmtInputField = protractor_1.element(protractor_1.by.id('inputAllowedAmt'));
OrderInfoPO.referenceNoInputField = protractor_1.element(protractor_1.by.model('hcpcProduct.serialNo'));
OrderInfoPO.specialPriceCheckbox = protractor_1.element(protractor_1.by.model('hcpcProduct.specialPrice'));
OrderInfoPO.selfPayCheckbox = protractor_1.element(protractor_1.by.model('hcpcProduct.selfPay'));
OrderInfoPO.addButton = protractor_1.element(protractor_1.by.css('[ng-click=\"addProduct()\"]'));
OrderInfoPO.clearButton = protractor_1.element(protractor_1.by.css('[ng-click=\"clearProductAddUpdate()\"]'));
OrderInfoPO.cancelButton = protractor_1.element(protractor_1.by.css('[ng-click=\"cancelProductAddUpdate()\"]'));
//Products Grid
OrderInfoPO.productsGrid = protractor_1.element(protractor_1.by.id('grid1'));
//All Forms
OrderInfoPO.modalDialogs = protractor_1.element.all(protractor_1.by.className('modal-dialog'));
//Footer
OrderInfoPO.saveButton = protractor_1.element(protractor_1.by.id('saveOrderBtnId'));
OrderInfoPO.completeOrderButton = protractor_1.element(protractor_1.by.id('orderCompletedBtnId'));
OrderInfoPO.cancelOrderButton = protractor_1.element(protractor_1.by.id('orderCancelledBtnId'));
exports.OrderInfoPO = OrderInfoPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJJbmZvUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL25vcm1hbGFkZHBhdGllbnRwYWdlL29yZGVyc3BhZ2UvT3JkZXJJbmZvUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsMkVBQXdFO0FBQ3hFLG1GQUFnRjtBQUNoRixtRUFBZ0U7QUFDaEUsdUdBQW9HO0FBQ3BHLHVFQUFvRTtBQUNwRSwyRkFBd0Y7QUFDeEYsdUZBQW9GO0FBQ3BGLCtFQUE0RTtBQUM1RSw2RkFBOEY7QUFFOUYsTUFBYSxXQUFXO0lBR3BCLHNCQUFzQjtRQUNsQixPQUFPLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztJQUMzQyxDQUFDO0lBS0QsMEJBQTBCO1FBQ3RCLE9BQU8sSUFBSSwyREFBNEIsQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBU0Qsb0JBQW9CO1FBQ2hCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCx5QkFBeUI7UUFDckIsT0FBTyxJQUFJLCtCQUFjLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHFCQUFxQjtRQUNqQixPQUFPLElBQUksK0JBQWMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLCtCQUFjLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU8sSUFBSSwrQkFBYyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsdUNBQXVDO1FBQ25DLE9BQU8sSUFBSSx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzVF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