"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const OrdersGrid_1 = require("../../../component/comp/OrdersGrid");
class ContactPatientOrdersPO {
    getOrdersGrid() {
        return new OrdersGrid_1.OrdersGrid(ContactPatientOrdersPO.ordersGrid);
    }
}
ContactPatientOrdersPO.ordersGrid = protractor_1.element(protractor_1.by.id('grid1'));
exports.ContactPatientOrdersPO = ContactPatientOrdersPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBhdGllbnRPcmRlcnNQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vaG9tZXBhZ2UvY29udGFjdHBhdGllbnRidWNrZXQvQ29udGFjdFBhdGllbnRPcmRlcnNQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QyxtRUFBZ0U7QUFFaEUsTUFBYSxzQkFBc0I7SUFJL0IsYUFBYTtRQUNULE9BQU8sSUFBSSx1QkFBVSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdELENBQUM7O0FBSmMsaUNBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUZ4RCx3REFPQyJ9