"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SalesRepManagementGrid_1 = require("../../../component/comp/SalesRepManagementGrid");
class SalesRepManagementPO {
    getAdminDashboardButton() {
        return SalesRepManagementPO.adminDashboardButton;
    }
    getSalesRepManagementGrid() {
        return new SalesRepManagementGrid_1.SalesRepManagementGrid(SalesRepManagementPO.salesRepManagementGrid);
    }
    getBackToSalesRepButton() {
        return SalesRepManagementPO.backToSalesRepButton;
    }
    getSuccessMessage() {
        return SalesRepManagementPO.successMessage;
    }
    getFirstNameInputField() {
        return SalesRepManagementPO.firstNameInputField;
    }
    getMiInputField() {
        return SalesRepManagementPO.miInputField;
    }
    getLastNameInputField() {
        return SalesRepManagementPO.lastNameInputField;
    }
    getStatusSelectDropdown() {
        return SalesRepManagementPO.statusSelectDropdown;
    }
    getLegacySalesIDInputField() {
        return SalesRepManagementPO.legacySalesIDInputField;
    }
    getAddressOneInputField() {
        return SalesRepManagementPO.addressOneInputField;
    }
    getAddressTwoInputField() {
        return SalesRepManagementPO.addressTwoInputField;
    }
    getCityInputField() {
        return SalesRepManagementPO.cityInputField;
    }
    getStateSelectDropdown() {
        return SalesRepManagementPO.stateSelectDropdown;
    }
    getZipCodeInputField() {
        return SalesRepManagementPO.zipCodeInputField;
    }
    getPhoneInputField() {
        return SalesRepManagementPO.phoneInputField;
    }
    getExtInputField() {
        return SalesRepManagementPO.extInputField;
    }
    getMobileInputField() {
        return SalesRepManagementPO.mobileInputField;
    }
    getFaxInputField() {
        return SalesRepManagementPO.faxInputField;
    }
    getEmailInputField() {
        return SalesRepManagementPO.emailInputField;
    }
    getSecondaryEmailInputField() {
        return SalesRepManagementPO.secondaryEmailInputField;
    }
    getUpdateButton() {
        return SalesRepManagementPO.updateButton;
    }
}
SalesRepManagementPO.adminDashboardButton = protractor_1.element(protractor_1.by.buttonText('Admin Dashboard'));
SalesRepManagementPO.salesRepManagementGrid = protractor_1.element(protractor_1.by.className('grid'));
SalesRepManagementPO.backToSalesRepButton = protractor_1.element(protractor_1.by.css('[ng-click=\"backtomarketingreps()\"]'));
//Update Form
SalesRepManagementPO.successMessage = protractor_1.element(protractor_1.by.css('[ng-if=\"successMessage\"]'));
SalesRepManagementPO.firstNameInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.firstNm'));
SalesRepManagementPO.miInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.middleNm'));
SalesRepManagementPO.lastNameInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.lastNm'));
SalesRepManagementPO.statusSelectDropdown = protractor_1.element(protractor_1.by.model('marketingRep.payload.statusCd'));
SalesRepManagementPO.legacySalesIDInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.lgcSalesId'));
SalesRepManagementPO.addressOneInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.address.addressLine1'));
SalesRepManagementPO.addressTwoInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.address.addressLine2'));
SalesRepManagementPO.cityInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.address.city'));
SalesRepManagementPO.stateSelectDropdown = protractor_1.element(protractor_1.by.model('marketingRep.payload.address.state'));
SalesRepManagementPO.zipCodeInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.address.zip'));
SalesRepManagementPO.phoneInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.phoneNo'));
SalesRepManagementPO.extInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.phoneNoExt'));
SalesRepManagementPO.mobileInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.mobileNo'));
SalesRepManagementPO.faxInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.faxNo'));
SalesRepManagementPO.emailInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.email'));
SalesRepManagementPO.secondaryEmailInputField = protractor_1.element(protractor_1.by.model('marketingRep.payload.secondaryEmail'));
SalesRepManagementPO.updateButton = protractor_1.element(protractor_1.by.css('[value=\"Update\"]'));
exports.SalesRepManagementPO = SalesRepManagementPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FsZXNSZXBNYW5hZ2VtZW50UE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3BvL2FkbWluZGFzaGJvYXJkcGFnZS9zYWxlc3JlcGJ1Y2tldC9TYWxlc1JlcE1hbmFnZW1lbnRQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QywyRkFBd0Y7QUFFeEYsTUFBYSxvQkFBb0I7SUFFN0IsdUJBQXVCO1FBQ25CLE9BQU8sb0JBQW9CLENBQUMsb0JBQW9CLENBQUM7SUFDckQsQ0FBQztJQUdELHlCQUF5QjtRQUNyQixPQUFPLElBQUksK0NBQXNCLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBR0QsdUJBQXVCO1FBQ25CLE9BQU8sb0JBQW9CLENBQUMsb0JBQW9CLENBQUM7SUFDckQsQ0FBQztJQUlELGlCQUFpQjtRQUNiLE9BQU8sb0JBQW9CLENBQUMsY0FBYyxDQUFDO0lBQy9DLENBQUM7SUFvQkQsc0JBQXNCO1FBQ2xCLE9BQU8sb0JBQW9CLENBQUMsbUJBQW1CLENBQUM7SUFDcEQsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLG9CQUFvQixDQUFDLFlBQVksQ0FBQztJQUM3QyxDQUFDO0lBRUQscUJBQXFCO1FBQ2pCLE9BQU8sb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7SUFDbkQsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDO0lBQ3JELENBQUM7SUFFRCwwQkFBMEI7UUFDdEIsT0FBTyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQztJQUN4RCxDQUFDO0lBRUQsdUJBQXVCO1FBQ25CLE9BQU8sb0JBQW9CLENBQUMsb0JBQW9CLENBQUM7SUFDckQsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDO0lBQ3JELENBQUM7SUFFRCxpQkFBaUI7UUFD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