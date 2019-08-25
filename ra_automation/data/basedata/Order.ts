import { AddPatientMode } from "../../data/enums/AddPatientMode";
import { OrderType } from "../enums/OrderType";
import { OrderInfo } from "../info/OrderInfo";
import { AddPatientLib } from '../../lib/normaladdpatientpage/AddPatientLib';
import { QuickAddPatientLib } from '../../lib/quickaddpatientpage/QuickAddPatientLib';

export class Order{
    addPatientMode:AddPatientMode;
    orderType:OrderType;

    constructor(addPatientMode:AddPatientMode, orderType:OrderType) {
        this.addPatientMode = addPatientMode;
        this.orderType = orderType;
    }

    ////////// Base Order Info //////////
    private setBaseOrderInfo() {
        let orderInfo = new OrderInfo();
        let billingOrSetupDateAsToday:Date = new Date();
        
        orderInfo.setOrderType(OrderType.AUTO_CPAP); 
        orderInfo.setBillingOrSetupDate(billingOrSetupDateAsToday);

        return orderInfo;
    }

    /**
     * This method is not applicable for Quick Add. 
     */
    async addOrderInfo(orderInfo:OrderInfo, saveForm:boolean) {
        let addPatientLib:AddPatientLib = new AddPatientLib();
        await addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo); 

        if(saveForm) {
            await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
        }
    }

    /**
     * This method is not applicable for Quick Add. 
     */
    async addBaseOrderInfo(saveForm:boolean) {
        await this.addOrderInfo(this.setBaseOrderInfo(), saveForm);
    }

    async addOrder(orderInfo:OrderInfo, saveForm:boolean) {

        switch(this.addPatientMode) {
            case AddPatientMode.QUICK_ADD: {
                let quickAddPatientLib:QuickAddPatientLib = new QuickAddPatientLib(); 
                await quickAddPatientLib.fillOrderInfo(orderInfo);

                if(saveForm) {
                    await quickAddPatientLib.save();
                }
                break;
            }

            case AddPatientMode.NORMAL_ADD: {
                let addPatientLib:AddPatientLib = new AddPatientLib();
                await addPatientLib.getOrdersLib().navigateToNewOrderForm();
                await addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo); 

                if(saveForm) {
                    await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
                }

                break;
            }
        }
    }

    async addBaseOrder(saveForm:boolean) {
        return await this.addOrder(this.setBaseOrderInfo(), saveForm);
    }

    async updateNormalOrder(orderIndex:number, orderInfo:OrderInfo, saveForm:boolean) {
        let addPatientLib:AddPatientLib = new AddPatientLib();
        await addPatientLib.getOrdersLib().toggleNormalOrders();
        await addPatientLib.getOrdersLib().updateNormalOrder(orderIndex);
        await addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);

        if(saveForm) {
            await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
        }
    }

    async updateNormalOrderWithBaseOrderInfo(orderIndex:number, saveForm:boolean) {
        await this.updateNormalOrder(orderIndex, this.setBaseOrderInfo(), saveForm);
    }

    async updateResupplyTempOrder(orderIndex:number, orderInfo:OrderInfo, saveForm:boolean) {
        let addPatientLib:AddPatientLib = new AddPatientLib();
        await addPatientLib.getOrdersLib().updateResupplyTempOrder(orderIndex);
        await addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);

        if(saveForm) {
            await addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
        }
    }

    async updateResupplyTempOrderWithBaseOrderInfo(orderIndex:number, saveForm:boolean) {
        await this.updateResupplyTempOrder(orderIndex, this.setBaseOrderInfo(), saveForm);
    }
}