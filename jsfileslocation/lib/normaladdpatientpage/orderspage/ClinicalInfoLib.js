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
const OrdersPO_1 = require("../../../po/normaladdpatientpage/orderspage/OrdersPO");
class ClinicalInfoLib {
    constructor() {
        this.ordersPO = new OrdersPO_1.OrdersPO();
    }
    getOrdersPO() {
        return this.ordersPO;
    }
    //Header - Success message 
    getSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrdersPO().getClinicalInfoPO().getSuccessMessage().getText();
        });
    }
    //Doctor Info
    selectOrderingDoctor(orderingDoctorName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getClinicalInfoPO().getOrderingDoctorDropdown().selectDropdownMenuOptionByLinkText(orderingDoctorName);
        });
    }
    selectFacility(facility) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getClinicalInfoPO().getFacilityDropdown().selectOption(facility);
        });
    }
    selectPrimaryDoctor(primaryDoctorName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getClinicalInfoPO().getPrimaryDoctorDropdown().selectDropdownMenuOptionByLinkText(primaryDoctorName);
        });
    }
    selectSalesRep(salesRepName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getClinicalInfoPO().getSalesRepDropdown().selectOption(salesRepName);
        });
    }
    //Rx Information 
    //Diagnosis ICD-10 codes
    //Footer
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getClinicalInfoPO().getSaveButton().click();
        });
    }
    /**
     * Workflow methods
     */
    fillDoctorInfo(clinicalInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info("Filling in the -Doctor Info- section of Clinical Info tab.");
            //Required fields
            if (clinicalInfo.getOrderingDoctorName() != null) {
                yield this.selectOrderingDoctor(clinicalInfo.getOrderingDoctorName());
            }
            //Non-mandatory fields
            if (clinicalInfo.getFacility() != null) {
                yield this.selectFacility(clinicalInfo.getFacility());
            }
            if (clinicalInfo.getPrimaryDoctorName() != null) {
                yield this.selectPrimaryDoctor(clinicalInfo.getPrimaryDoctorName());
            }
            if (clinicalInfo.getSalesRepName() != null) {
                yield this.selectSalesRep(clinicalInfo.getSalesRepName());
            }
        });
    }
}
exports.ClinicalInfoLib = ClinicalInfoLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpbmljYWxJbmZvTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvbm9ybWFsYWRkcGF0aWVudHBhZ2Uvb3JkZXJzcGFnZS9DbGluaWNhbEluZm9MaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyxtRkFBZ0Y7QUFHaEYsTUFBYSxlQUFlO0lBR3hCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkJBQTJCO0lBQ3JCLGlCQUFpQjs7WUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEYsQ0FBQztLQUFBO0lBRUQsYUFBYTtJQUNQLG9CQUFvQixDQUFDLGtCQUF5Qjs7WUFDaEQsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLGtDQUFrQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDcEksQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLFFBQWU7O1lBQ2hDLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUYsQ0FBQztLQUFBO0lBRUssbUJBQW1CLENBQUMsaUJBQXdCOztZQUM5QyxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUMsa0NBQWtDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsSSxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsWUFBbUI7O1lBQ3BDLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEcsQ0FBQztLQUFBO0lBRUQsaUJBQWlCO0lBR2pCLHdCQUF3QjtJQUd4QixRQUFRO0lBQ0YsSUFBSTs7WUFDTixNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pFLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBRUcsY0FBYyxDQUFDLFlBQXlCOztZQUMxQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNERBQTRELENBQUMsQ0FBQztZQUVsRixpQkFBaUI7WUFDakIsSUFBRyxZQUFZLENBQUMscUJBQXFCLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQzdDLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7YUFDekU7WUFFRCxzQkFBc0I7WUFDdEIsSUFBRyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNuQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7YUFDekQ7WUFFRCxJQUFHLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDNUMsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQzthQUN2RTtZQUVELElBQUcsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDdkMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2FBQzdEO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFyRUQsMENBcUVDIn0=