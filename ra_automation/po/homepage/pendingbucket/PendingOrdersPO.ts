import { element, by } from "protractor";
import { OrdersGrid } from "../../../component/comp/OrdersGrid";

export class PendingOrdersPO {

    private static ordersGrid = element(by.id('grid1'));

    getOrdersGrid() {
        return new OrdersGrid(PendingOrdersPO.ordersGrid);
    }
}