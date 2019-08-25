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
const AddPatientMode_1 = require("../../data/enums/AddPatientMode");
const OrderType_1 = require("../enums/OrderType");
const OrderInfo_1 = require("../info/OrderInfo");
const AddPatientLib_1 = require("../../lib/normaladdpatientpage/AddPatientLib");
const QuickAddPatientLib_1 = require("../../lib/quickaddpatientpage/QuickAddPatientLib");
class Order {
    constructor(addPatientMode, orderType) {
        this.addPatientMode = addPatientMode;
        this.orderType = orderType;
    }
    ////////// Base Order Info //////////
    setBaseOrderInfo() {
        let orderInfo = new OrderInfo_1.OrderInfo();
        let billingOrSetupDateAsToday = new Date();
        orderInfo.setOrderType(OrderType_1.OrderType.AUTO_CPAP);
        orderInfo.setBillingOrSetupDate(billingOrSetupDateAsToday);
        return orderInfo;
    }
    /**
     * This method is not applicable for Quick Add.
     */
    addOrderInfo(orderInfo, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            let addPatientLib = new AddPatientLib_1.AddPatientLib();
            yield addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);
            if (saveForm) {
                yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            }
        });
    }
    /**
     * This method is not applicable for Quick Add.
     */
    addBaseOrderInfo(saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.addOrderInfo(this.setBaseOrderInfo(), saveForm);
        });
    }
    addOrder(orderInfo, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.addPatientMode) {
                case AddPatientMode_1.AddPatientMode.QUICK_ADD: {
                    let quickAddPatientLib = new QuickAddPatientLib_1.QuickAddPatientLib();
                    yield quickAddPatientLib.fillOrderInfo(orderInfo);
                    if (saveForm) {
                        yield quickAddPatientLib.save();
                    }
                    break;
                }
                case AddPatientMode_1.AddPatientMode.NORMAL_ADD: {
                    let addPatientLib = new AddPatientLib_1.AddPatientLib();
                    yield addPatientLib.getOrdersLib().navigateToNewOrderForm();
                    yield addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);
                    if (saveForm) {
                        yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
                    }
                    break;
                }
            }
        });
    }
    addBaseOrder(saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addOrder(this.setBaseOrderInfo(), saveForm);
        });
    }
    updateNormalOrder(orderIndex, orderInfo, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            let addPatientLib = new AddPatientLib_1.AddPatientLib();
            yield addPatientLib.getOrdersLib().toggleNormalOrders();
            yield addPatientLib.getOrdersLib().updateNormalOrder(orderIndex);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);
            if (saveForm) {
                yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            }
        });
    }
    updateNormalOrderWithBaseOrderInfo(orderIndex, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateNormalOrder(orderIndex, this.setBaseOrderInfo(), saveForm);
        });
    }
    updateResupplyTempOrder(orderIndex, orderInfo, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            let addPatientLib = new AddPatientLib_1.AddPatientLib();
            yield addPatientLib.getOrdersLib().updateResupplyTempOrder(orderIndex);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().fillOrderInfo(orderInfo);
            if (saveForm) {
                yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            }
        });
    }
    updateResupplyTempOrderWithBaseOrderInfo(orderIndex, saveForm) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateResupplyTempOrder(orderIndex, this.setBaseOrderInfo(), saveForm);
        });
    }
}
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2RhdGEvYmFzZWRhdGEvT3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9FQUFpRTtBQUNqRSxrREFBK0M7QUFDL0MsaURBQThDO0FBQzlDLGdGQUE2RTtBQUM3RSx5RkFBc0Y7QUFFdEYsTUFBYSxLQUFLO0lBSWQsWUFBWSxjQUE2QixFQUFFLFNBQW1CO1FBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCxxQ0FBcUM7SUFDN0IsZ0JBQWdCO1FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ2hDLElBQUkseUJBQXlCLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVoRCxTQUFTLENBQUMsWUFBWSxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFFM0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0csWUFBWSxDQUFDLFNBQW1CLEVBQUUsUUFBZ0I7O1lBQ3BELElBQUksYUFBYSxHQUFpQixJQUFJLDZCQUFhLEVBQUUsQ0FBQztZQUN0RCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFOUUsSUFBRyxRQUFRLEVBQUU7Z0JBQ1QsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEU7UUFDTCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNHLGdCQUFnQixDQUFDLFFBQWdCOztZQUNuQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0QsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLFNBQW1CLEVBQUUsUUFBZ0I7O1lBRWhELFFBQU8sSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsS0FBSywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMzQixJQUFJLGtCQUFrQixHQUFzQixJQUFJLHVDQUFrQixFQUFFLENBQUM7b0JBQ3JFLE1BQU0sa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUVsRCxJQUFHLFFBQVEsRUFBRTt3QkFDVCxNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNuQztvQkFDRCxNQUFNO2lCQUNUO2dCQUVELEtBQUssK0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxhQUFhLEdBQWlCLElBQUksNkJBQWEsRUFBRSxDQUFDO29CQUN0RCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO29CQUM1RCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRTlFLElBQUcsUUFBUSxFQUFFO3dCQUNULE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FCQUNwRTtvQkFFRCxNQUFNO2lCQUNUO2FBQ0o7UUFDTCxDQUFDO0tBQUE7SUFFSyxZQUFZLENBQUMsUUFBZ0I7O1lBQy9CLE9BQU8sTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7S0FBQTtJQUVLLGlCQUFpQixDQUFDLFVBQWlCLEVBQUUsU0FBbUIsRUFBRSxRQUFnQjs7WUFDNUUsSUFBSSxhQUFhLEdBQWlCLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3RELE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDeEQsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakUsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTlFLElBQUcsUUFBUSxFQUFFO2dCQUNULE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3BFO1FBQ0wsQ0FBQztLQUFBO0lBRUssa0NBQWtDLENBQUMsVUFBaUIsRUFBRSxRQUFnQjs7WUFDeEUsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hGLENBQUM7S0FBQTtJQUVLLHVCQUF1QixDQUFDLFVBQWlCLEVBQUUsU0FBbUIsRUFBRSxRQUFnQjs7WUFDbEYsSUFBSSxhQUFhLEdBQWlCLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3RELE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUU5RSxJQUFHLFFBQVEsRUFBRTtnQkFDVCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwRTtRQUNMLENBQUM7S0FBQTtJQUVLLHdDQUF3QyxDQUFDLFVBQWlCLEVBQUUsUUFBZ0I7O1lBQzlFLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RixDQUFDO0tBQUE7Q0FDSjtBQWxHRCxzQkFrR0MifQ==