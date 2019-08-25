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
const OrdersPO_1 = require("../../po/reportspage/OrdersPO");
class OrdersLib {
    constructor() {
        this.ordersPO = new OrdersPO_1.OrdersPO();
    }
    getOrdersPO() {
        return this.ordersPO;
    }
    searchViaPatientNameFilter(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getFilterButton().click();
            yield this.getOrdersPO().getPatientNameFilterInputField().sendKeys(patientName);
            yield this.getOrdersPO().getSearchButton().click();
        });
    }
    searchViaPatientNameOrdersGridHeaderFilter(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getOrdersGrid().searchViaPatientNameFilter(patientName);
        });
    }
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getOrdersPO().getOrdersGrid().getPatientName(rowNumber);
        });
    }
    updatePatient(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrdersPO().getOrdersGrid().updatePatient(patientName);
        });
    }
}
exports.OrdersLib = OrdersLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJzTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvcmVwb3J0c3BhZ2UvT3JkZXJzTGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw0REFBeUQ7QUFFekQsTUFBYSxTQUFTO0lBR2xCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUssMEJBQTBCLENBQUMsV0FBa0I7O1lBQy9DLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25ELE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLDhCQUE4QixFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUVLLDBDQUEwQyxDQUFDLFdBQWtCOztZQUMvRCxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsU0FBZ0I7O1lBQ2pDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlFLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxXQUFrQjs7WUFDbEMsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7S0FBQTtDQUNKO0FBNUJELDhCQTRCQyJ9