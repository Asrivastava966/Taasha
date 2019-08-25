"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BaseTable_1 = require("../../../../component/base/BaseTable");
const ResuppliesProductModalDialog_1 = require("../../../../component/comp/ResuppliesProductModalDialog");
const ConfirmationModalYesNoDialog_1 = require("../../../../component/comp/ConfirmationModalYesNoDialog");
class SuppliesPO {
    getAddNewProductButton() {
        return SuppliesPO.addNewProductButton;
    }
    getProductModalDialog() {
        return new ResuppliesProductModalDialog_1.ResuppliesProductModalDialog(SuppliesPO.productModalDialog);
    }
    getProductsTable() {
        return new BaseTable_1.BaseTable(SuppliesPO.productsTable);
    }
    getConfirmationModalDialog() {
        return new ConfirmationModalYesNoDialog_1.ConfirmationModalYesNoDialog(SuppliesPO.confirmationModalDialog);
    }
    getCommentsTextarea() {
        return SuppliesPO.commentsTextarea;
    }
    getPreviousButton() {
        return SuppliesPO.previousButton;
    }
    getNextButton() {
        return SuppliesPO.nextButton;
    }
}
SuppliesPO.suppliesTabPanel = protractor_1.element(protractor_1.by.id('supplies'));
SuppliesPO.addNewProductButton = protractor_1.element(protractor_1.by.css('[ng-click=\"openProductModal(\'Add\')\"]'));
SuppliesPO.productModalDialog = protractor_1.element(protractor_1.by.className('modal-dialog'));
SuppliesPO.productsTable = protractor_1.element(protractor_1.by.tagName('table'));
SuppliesPO.confirmationModalDialog = protractor_1.element(protractor_1.by.className('modal-dialog'));
SuppliesPO.commentsTextarea = protractor_1.element(protractor_1.by.model('respplyContactInfo1.payload.generalComment'));
SuppliesPO.previousButton = protractor_1.element(protractor_1.by.buttonText('Previous'));
SuppliesPO.nextButton = SuppliesPO.suppliesTabPanel.element(protractor_1.by.buttonText('Next'));
exports.SuppliesPO = SuppliesPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcGxpZXNQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vaG9tZXBhZ2UvcmVzdXBwbGllc2J1Y2tldC9yZXN1cHBsaWVzY29udGFjdGluZm9ybWF0aW9ucGFnZS9TdXBwbGllc1BPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlDO0FBQ3pDLG9FQUFpRTtBQUNqRSwwR0FBdUc7QUFDdkcsMEdBQXVHO0FBRXZHLE1BQWEsVUFBVTtJQUluQixzQkFBc0I7UUFDbEIsT0FBTyxVQUFVLENBQUMsbUJBQW1CLENBQUM7SUFDMUMsQ0FBQztJQUdELHFCQUFxQjtRQUNqQixPQUFPLElBQUksMkRBQTRCLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUdELGdCQUFnQjtRQUNaLE9BQU8sSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR0QsMEJBQTBCO1FBQ3RCLE9BQU8sSUFBSSwyREFBNEIsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBR0QsbUJBQW1CO1FBQ2YsT0FBTyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7SUFDdkMsQ0FBQztJQUdELGlCQUFpQjtRQUNiLE9BQU8sVUFBVSxDQUFDLGNBQWMsQ0FBQztJQUNyQyxDQUFDO0lBR0QsYUFBYTtRQUNULE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUNqQyxDQUFDOztBQW5DYywyQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUU5Qyw4QkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDO0FBS2xGLDZCQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBSzNELHdCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFLN0Msa0NBQXVCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFLaEUsMkJBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztBQUtuRix5QkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBS3BELHFCQUFVLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFqQzNGLGdDQXFDQyJ9