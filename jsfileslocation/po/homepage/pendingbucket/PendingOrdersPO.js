"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const OrdersGrid_1 = require("../../../component/comp/OrdersGrid");
class PendingOrdersPO {
    getOrdersGrid() {
        return new OrdersGrid_1.OrdersGrid(PendingOrdersPO.ordersGrid);
    }
}
PendingOrdersPO.ordersGrid = protractor_1.element(protractor_1.by.id('grid1'));
exports.PendingOrdersPO = PendingOrdersPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVuZGluZ09yZGVyc1BPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ob21lcGFnZS9wZW5kaW5nYnVja2V0L1BlbmRpbmdPcmRlcnNQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QyxtRUFBZ0U7QUFFaEUsTUFBYSxlQUFlO0lBSXhCLGFBQWE7UUFDVCxPQUFPLElBQUksdUJBQVUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7QUFKYywwQkFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRnhELDBDQU9DIn0=