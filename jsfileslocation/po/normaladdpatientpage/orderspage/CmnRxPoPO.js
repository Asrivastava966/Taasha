"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
const ABNFormModalDialog_1 = require("../../../component/comp/ABNFormModalDialog");
class CmnRxPoPO {
    getCMNFormDropdown() {
        return new SelectDropdown_1.SelectDropdown(CmnRxPoPO.cmnFormDropdown);
    }
    getNewCMNButton() {
        return CmnRxPoPO.newCMNButton;
    }
    getABNButton() {
        return CmnRxPoPO.abnButton;
    }
    getABNFormDialog() {
        return new ABNFormModalDialog_1.ABNFormModalDialog(CmnRxPoPO.abnFormDialog);
    }
}
CmnRxPoPO.cmnFormDropdown = protractor_1.element(protractor_1.by.id('inputCmnForm'));
CmnRxPoPO.newCMNButton = protractor_1.element(protractor_1.by.css('[ng-click=\"addNewInitialCMN()\"]'));
CmnRxPoPO.abnButton = protractor_1.element(protractor_1.by.css('[ng-click=\"createAbnForm()\"]'));
CmnRxPoPO.abnFormDialog = protractor_1.element(protractor_1.by.className('modal-dialog'));
exports.CmnRxPoPO = CmnRxPoPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ21uUnhQb1BPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ub3JtYWxhZGRwYXRpZW50cGFnZS9vcmRlcnNwYWdlL0NtblJ4UG9QTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QywyRUFBd0U7QUFDeEUsbUZBQWdGO0FBRWhGLE1BQWEsU0FBUztJQU1sQixrQkFBa0I7UUFDZCxPQUFPLElBQUksK0JBQWMsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLFNBQVMsQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELGdCQUFnQjtRQUNaLE9BQU8sSUFBSSx1Q0FBa0IsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7QUFuQmMseUJBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNqRCxzQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7QUFDcEUsbUJBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO0FBQzlELHVCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFKekUsOEJBcUJDIn0=