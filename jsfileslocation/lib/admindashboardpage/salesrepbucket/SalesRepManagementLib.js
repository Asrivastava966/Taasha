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
const SalesRepManagementPO_1 = require("../../../po/admindashboardpage/salesrepbucket/SalesRepManagementPO");
class SalesRepManagementLib {
    constructor() {
        this.salesRepManagementPO = new SalesRepManagementPO_1.SalesRepManagementPO();
    }
    getSalesRepManagementPO() {
        return this.salesRepManagementPO;
    }
    navigateBackToAdminDashboardPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSalesRepManagementPO().getAdminDashboardButton().click();
        });
    }
    filterByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSalesRepManagementPO().getSalesRepManagementGrid().filterByName(name);
        });
    }
    getName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getSalesRepManagementPO().getSalesRepManagementGrid().getName(rowNumber);
        });
    }
    updateSalesRep(salesRepName) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstRowIndex = 1;
            yield this.filterByName(salesRepName);
            yield this.getSalesRepManagementPO().getSalesRepManagementGrid().updateSalesRep(firstRowIndex);
        });
    }
    navigateBackToSalesRepGridPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSalesRepManagementPO().getBackToSalesRepButton().click();
        });
    }
    //Update Form - workflow
    getSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getSalesRepManagementPO().getSuccessMessage().getText();
        });
    }
    fillLegacySalesID(legacySalesID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSalesRepManagementPO().getLegacySalesIDInputField().sendKeys(legacySalesID);
        });
    }
    fillPhoneNumber(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSalesRepManagementPO().getPhoneInputField().sendKeys(phone);
        });
    }
    fillPhoneExt(ext) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSalesRepManagementPO().getExtInputField().sendKeys(ext);
        });
    }
    fillSalesRepInfo(salesRepInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (salesRepInfo.getLegacySalesID() != null) {
                yield this.fillLegacySalesID(salesRepInfo.getLegacySalesID());
            }
            if (salesRepInfo.getPhone() != null) {
                yield this.fillPhoneNumber(salesRepInfo.getPhone());
            }
            if (salesRepInfo.getExt() != null) {
                yield this.fillPhoneExt(salesRepInfo.getExt());
            }
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSalesRepManagementPO().getUpdateButton().click();
        });
    }
    //Update Form - read auto-populated values
    getFirstNameFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getSalesRepManagementPO().getFirstNameInputField().getAttribute('value');
        });
    }
    getLastNameFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getSalesRepManagementPO().getLastNameInputField().getAttribute('value');
        });
    }
    getStatusFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getSalesRepManagementPO().getStatusSelectDropdown().getAttribute('value');
        });
    }
    getPhoneFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getSalesRepManagementPO().getPhoneInputField().getAttribute('value');
        });
    }
    getEmailFieldValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getSalesRepManagementPO().getEmailInputField().getAttribute('value');
        });
    }
}
exports.SalesRepManagementLib = SalesRepManagementLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FsZXNSZXBNYW5hZ2VtZW50TGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvYWRtaW5kYXNoYm9hcmRwYWdlL3NhbGVzcmVwYnVja2V0L1NhbGVzUmVwTWFuYWdlbWVudExpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkdBQTBHO0FBRzFHLE1BQWEscUJBQXFCO0lBRzlCO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQsdUJBQXVCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ3JDLENBQUM7SUFFSyxnQ0FBZ0M7O1lBQ2xDLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzRSxDQUFDO0tBQUE7SUFFSyxZQUFZLENBQUMsSUFBVzs7WUFDMUIsTUFBTSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RixDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsU0FBZ0I7O1lBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsWUFBbUI7O1lBQ3BDLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN0QixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEMsTUFBTSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRyxDQUFDO0tBQUE7SUFFSyw4QkFBOEI7O1lB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