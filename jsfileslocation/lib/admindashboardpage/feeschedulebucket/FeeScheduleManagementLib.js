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
const FeeScheduleManagementPO_1 = require("../../../po/admindashboardpage/feeschedulebucket/FeeScheduleManagementPO");
const WaitUtils_1 = require("../../../utils/WaitUtils");
class FeeScheduleManagementLib {
    constructor() {
        this.feeScheduleManagementPO = new FeeScheduleManagementPO_1.FeeScheduleManagementPO();
        this.waitUtils = new WaitUtils_1.WaitUtils();
    }
    getFeeScheduleManagementPO() {
        return this.feeScheduleManagementPO;
    }
    navigateToFeeSchedulesTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFeeScheduleManagementPO().getFeeSchedulesTab().click();
        });
    }
    navigateToFeeSchedulesDetailsTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitUtils.waitForElementToBeClickable(this.getFeeScheduleManagementPO().getFeeScheduleDetailsTab());
            yield this.getFeeScheduleManagementPO().getFeeScheduleDetailsTab().click();
        });
    }
}
exports.FeeScheduleManagementLib = FeeScheduleManagementLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlU2NoZWR1bGVNYW5hZ2VtZW50TGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9saWIvYWRtaW5kYXNoYm9hcmRwYWdlL2ZlZXNjaGVkdWxlYnVja2V0L0ZlZVNjaGVkdWxlTWFuYWdlbWVudExpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0hBQW1IO0FBQ25ILHdEQUFxRDtBQUVyRCxNQUFhLHdCQUF3QjtJQUlqQztRQUNJLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLGlEQUF1QixFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMEJBQTBCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3hDLENBQUM7SUFFSyx5QkFBeUI7O1lBQzNCLE1BQU0sSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN4RSxDQUFDO0tBQUE7SUFFSyxnQ0FBZ0M7O1lBQ2xDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUE7WUFDOUcsTUFBTSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzlFLENBQUM7S0FBQTtDQUNKO0FBckJELDREQXFCQyJ9