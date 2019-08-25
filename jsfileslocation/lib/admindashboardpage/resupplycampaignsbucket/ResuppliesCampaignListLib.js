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
const ResuppliesCampaignListPO_1 = require("../../../po/admindashboardpage/resupplycampaignsbucket/ResuppliesCampaignListPO");
const WaitUtils_1 = require("../../../utils/WaitUtils");
class ResuppliesCampaignListLib {
    constructor() {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.resuppliesCampaignListPO = new ResuppliesCampaignListPO_1.ResuppliesCampaignListPO();
    }
    getResuppliesCampaignListPO() {
        return this.resuppliesCampaignListPO;
    }
    navigateBackToAdminDashboardPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getResuppliesCampaignListPO().getAdminDashboardButton().click();
        });
    }
    processCustomCronJob(startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getResuppliesCampaignListPO().getProcessCustomCronButton().click();
            yield this.getResuppliesCampaignListPO().getCronModalStartDatePicker().selectDate(startDate, isDatePickerSmall);
            yield this.getResuppliesCampaignListPO().getCronModalEndDatePicker().selectDate(endDate, isDatePickerSmall);
            yield this.getResuppliesCampaignListPO().getCronModalProcessCustomCronButton().click();
            yield this.getResuppliesCampaignListPO().getProcessCustomCronModalCloseButton().click();
            yield this.waitUtils.insertStaticWait(2000);
        });
    }
}
exports.ResuppliesCampaignListLib = ResuppliesCampaignListLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbGllc0NhbXBhaWduTGlzdExpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL2FkbWluZGFzaGJvYXJkcGFnZS9yZXN1cHBseWNhbXBhaWduc2J1Y2tldC9SZXN1cHBsaWVzQ2FtcGFpZ25MaXN0TGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw4SEFBMkg7QUFDM0gsd0RBQXFEO0FBRXJELE1BQWEseUJBQXlCO0lBSWxDO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxtREFBd0IsRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFRCwyQkFBMkI7UUFDdkIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDekMsQ0FBQztJQUVLLGdDQUFnQzs7WUFDbEMsTUFBTSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9FLENBQUM7S0FBQTtJQUVLLG9CQUFvQixDQUFDLFNBQWMsRUFBRSxPQUFZOztZQUNuRCxJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUU5QixNQUFNLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLDBCQUEwQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUUsTUFBTSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUNoSCxNQUFNLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLHlCQUF5QixFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQzVHLE1BQU0sSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUMsbUNBQW1DLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2RixNQUFNLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEYsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtDQUNKO0FBM0JELDhEQTJCQyJ9