import { element, by } from "protractor";
import { OrdersGrid } from "../../../component/comp/OrdersGrid";

export class ContactPatientOrdersPO {

    private static ordersGrid = element(by.id('grid1'));

    getOrdersGrid() {
        return new OrdersGrid(ContactPatientOrdersPO.ordersGrid);
    }
}